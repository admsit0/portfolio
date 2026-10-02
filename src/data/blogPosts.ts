const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export type BlogPost = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  displayDate: string;
  readTime: string;
  category: string;
  coverImage: string;
  coverAlt: string;
  accent: 'blue' | 'green' | 'purple';
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'regularization-in-cnns-internal-activations',
    title: 'Regularization in CNNs: Looking Inside the Network',
    subtitle: 'How my thesis treated regularization as a change in representation geometry, not just a better validation curve.',
    excerpt:
      'My TFG compared seven regularizers on the same CNN and asked what they do to hidden activations, robustness, and generalization.',
    date: '2026-07-18',
    displayDate: 'Published on 18 July 2026, 09:00',
    readTime: '21 min read',
    category: 'Thesis',
    coverImage: asset('blog-covers/regularization.png'),
    coverAlt: 'Stylized radar-chart cover for the thesis on CNN regularization mechanisms',
    accent: 'blue',
    content: `Most regularization explanations eventually collapse into one plot: the training curve keeps going down, the validation curve stops improving, and the gap between them is called overfitting. That picture is useful, but it hides the object that I actually wanted to study in my TFG: the internal representation learned by the network.

The question behind the thesis was:

**When two CNNs reach similar validation accuracy, are they internally organizing information in the same way?**

The answer was no. Regularization did not only change the final score. It changed how activations spread, compressed, saturated, and reacted to perturbations. The project became an attempt to make that difference measurable.

That sounds obvious now, but it was not how I started. My first instinct was to make the standard regularization comparison, rank the methods by validation accuracy, and write the discussion around that table. The more checkpoints I inspected, the less satisfying that felt. Some models were accurate but internally sharp. Others were not top-ranked on clean validation, yet survived parameter noise much better. The thesis became interesting only when I stopped treating accuracy as the whole story and started treating the network as a system with hidden state.

## The setup: keep the model boring on purpose

The point of the project was not to build a state-of-the-art classifier. I wanted a CNN large enough to overfit, but simple enough that changes in behavior could be attributed to the regularizer rather than to architectural tricks.

The architecture stayed fixed across experiments:

\`\`\`text
input image
  -> conv1: 3x3 conv, 32 channels, ReLU, 2x2 max-pool
  -> conv2: 3x3 conv, 64 channels, ReLU, 2x2 max-pool
  -> conv3: 3x3 conv, 128 channels, ReLU, 2x2 max-pool
  -> flatten
  -> fc1: 128 hidden units, ReLU
  -> fc2: class logits
\`\`\`

For CIFAR-10 and SVHN, this means the last convolutional tensor is 4x4x128, then flattened into 2048 features before the 128-dimensional dense representation. The baseline model could reach almost perfect training accuracy on CIFAR-10 after 60 epochs, which is exactly what I needed: a model with enough capacity to memorize.

I compared seven regularization strategies:

- L1 penalty.
- L2 penalty.
- Dropout.
- Early stopping.
- Gaussian noise injection during training.
- Data augmentation.
- Batch normalization.

The datasets were CIFAR-10, SVHN, CIFAR-100, and FashionMNIST. Each one stressed the setup differently: CIFAR-10 was the main analysis domain, SVHN was more homogeneous, CIFAR-100 exposed capacity limits, and FashionMNIST produced a near-ceiling regime where most methods were already strong.

## Why validation accuracy was too small a lens

Validation accuracy tells you whether the classifier got the labels right. It does not tell you whether the network used a compact representation, a chaotic one, or a collapsed one. In the thesis I treated hidden activations as empirical objects that can be collected and measured.

For each trained checkpoint, I loaded the model in evaluation mode and registered forward hooks on three layers:

- conv1, the early feature extractor.
- conv3, the deeper convolutional representation.
- fc1, the dense latent space right before classification.

The hook-based pipeline looked like this:

\`\`\`text
for each dataset:
  for each regularization method:
    for each hyperparameter value:
      train for 60 epochs, saving checkpoints
      for selected epochs:
        load checkpoint in eval mode
        run validation data through the model
        capture conv1, conv3, and fc1 activations
        convert activations into comparable metrics
\`\`\`

Dropout was disabled at extraction time and batch normalization used its learned statistics, so the captured activations reflected the trained inference-time model.

The key design decision was to use the same baseline ranges when discretizing activations. I divided the observed activation range into bins and represented each example by an ordered vector of bin ids. This preserved neuron identity better than a global histogram would. Two states that merely have the same count of activated neurons should not automatically be treated as the same internal state.

## Three internal signals

The thesis used three main activation metrics.

**Unique activation percentage** measured how many different discretized states appeared in a validation pass:

\`\`\`text
unique_pctg = number of unique activation-state vectors / number of validation examples
\`\`\`

If this value is too low, many inputs collapse into the same internal code. If it is too high, the model may be representing every input too specifically.

**Shannon entropy** measured how concentrated the activation histogram was:

\`\`\`text
H = - sum over bins p_i log(p_i)
\`\`\`

Low entropy means activations concentrate in a few bins. High entropy means they are more spread out.

**Dispersion ratio** compared the standard deviation of a regularized model's activations against the unregularized baseline:

\`\`\`text
dispersion_ratio = activation_std_regularized / activation_std_baseline
\`\`\`

This is useful because raw dispersion is layer- and dataset-dependent. A ratio below one means the regularizer compressed the activation distribution relative to the baseline.

These metrics are not magic. They are intentionally simple. Their value is that they let you talk about regularization as representation geometry rather than only as a validation-score intervention.

## What the accuracy results said first

The external results were unsurprising at a high level but important as the reference point. Data augmentation and batch normalization gave the strongest validation accuracy improvements across the evaluated domains. Dropout and L2 were generally in the middle. Gaussian noise, early stopping, and L1 were weaker or sometimes barely better than the baseline.

On CIFAR-10, for example, the best methods in the report were:

| Method | Validation accuracy | fc1 unique states | fc1 entropy | fc1 dispersion ratio |
| --- | ---: | ---: | ---: | ---: |
| Data augmentation | 0.785 | 89.22% | 1.78 | 0.46 |
| BatchNorm | 0.770 | 84.30% | 1.53 | 0.41 |
| Dropout | 0.727 | 37.23% | 1.17 | 0.29 |
| L2 | 0.714 | 97.93% | 2.09 | 0.57 |
| Baseline | 0.694 | 99.98% | 2.87 | 1.06 |

The generalization gap also told an important story. On CIFAR-10, the baseline, L2, and Gaussian noise models reached train accuracy near 1.0 while keeping a gap around 0.30. Data augmentation reduced that gap to around 0.09. Batch normalization still had a larger gap around 0.23, suggesting that part of its value came from stabilizing optimization rather than simply preventing memorization.

But the most interesting part was what happened when accuracy and internal structure were read together.

## The intermediate zone

The main pattern was that strong models tended to live in an intermediate range of internal diversity, especially in fc1. Too little diversity looked like compression or underuse of the representation. Too much diversity looked like memorization or noisy specialization.

This is why the baseline was not just "bad because its validation accuracy was lower." It also produced almost maximal unique-state percentages and high entropy in fc1 on CIFAR-10. It used many distinct internal states, but that diversity did not translate into better generalization. In contrast, data augmentation and batch normalization compressed the activation distribution while preserving enough representational variety to classify well.

Dropout was especially interesting. It did not win the clean validation ranking, but it produced a much more compressed fc1 representation and later showed strong parameter robustness. That distinction matters: if all you read is accuracy, dropout looks merely okay. If you inspect the internal geometry and perturbation behavior, it becomes a qualitatively different regularizer.

## Time matters too

The thesis did not only inspect the final checkpoint. It tracked the temporal evolution of internal states across 60 epochs. In many cases, validation accuracy rose quickly in the first 10 epochs and then saturated, while internal diversity kept growing afterward.

SVHN made this especially visible. The baseline and Gaussian noise models reached around 90% validation accuracy early, but their unique-state percentages continued increasing until the end of training. Data augmentation grew more slowly and ended with a much smaller generalization gap.

That is a useful diagnostic idea: after a certain point, more training can keep making the representation more complicated without giving meaningful validation improvements. The network is still changing internally, but not necessarily in a way that helps generalization.

## Robustness changed the ranking

The thesis included two perturbation experiments.

First, I added Gaussian noise to validation images while keeping model weights fixed. This tested degradation under noisy inputs. Here the story was not "the best clean model is the most robust." In fact, Data Augmentation and BatchNorm, which were strong under clean validation, degraded sharply under intense pixel-level Gaussian noise. On CIFAR-10 at input noise sigma = 0.2, Data Augmentation retained about 49.7% of its clean accuracy and BatchNorm retained about 34.9%, while the baseline and L2 retained around 71.3% and 69.0%.

That does not mean the baseline is better. It means that robustness depends on the perturbation. Data augmentation was trained with crop and horizontal flip invariances, not with arbitrary pixel Gaussian noise. A method can improve clean generalization while remaining fragile to a different family of corruption.

Second, I added Gaussian noise directly to the weights of conv1, conv3, and fc1. This was a practical proxy for the geometry of the learned minimum. If a small parameter perturbation destroys accuracy, the model likely sits in a sharper region of the loss surface.

This is where dropout stood out. At weight noise sigma = 0.15, dropout had consistently strong retention across layers and datasets. On CIFAR-10 it retained 83.1% in conv1, 77.5% in conv3, and 86.1% in fc1. BatchNorm, despite its strong clean performance, collapsed more strongly in convolutional layers, with CIFAR-10 retentions of 51.2% in conv1 and 42.0% in conv3.

The radar plot below is the compact version of that tension. Each axis is normalized inside the dataset, so it should not be read as an absolute measurement scale. It is a profile view: validation accuracy, robustness to data noise, robustness to weight noise in conv1/conv3/fc1, and consistency across layers. The useful part is not that it crowns one winner. The useful part is that it makes the shape of each regularizer visible.

The profile I used can be thought of as a small multi-objective vector per regularizer and dataset:

\`\`\`text
v_method,dataset =
  [
    val_acc,
    retention_data_noise_sigma_0.20,
    retention_weight_noise_conv1_sigma_0.15,
    retention_weight_noise_conv3_sigma_0.15,
    retention_weight_noise_fc1_sigma_0.15,
    inter_layer_consistency
  ]

normalized_axis_value =
  15 + 85 * (x - min_axis) / (max_axis - min_axis)
\`\`\`

The floor at 15 keeps a weak method visible without pretending it is zero, and the per-axis min-max scaling keeps the radar from mixing raw percentages with heterogeneous robustness measurements.

![Radar charts comparing regularizers across accuracy, data-noise robustness, weight-noise robustness, and inter-layer consistency on CIFAR-10, SVHN, CIFAR-100, and FashionMNIST.](${asset('blog-plots/regularization-radar.png')})

The plot made one thing hard to ignore: no method fills the star. Data augmentation pushes clean accuracy strongly, especially in the image datasets where augmentation matches the task invariances, but it does not dominate every robustness axis. Dropout is less glamorous in the accuracy table, yet its weight-noise footprint is consistently large. BatchNorm has a strong profile in several domains but can become brittle when the perturbation is applied to convolutional parameters. L2 often keeps a wide internal state space, which can look healthy in entropy terms but does not automatically mean better generalization.

I like this visualization because it prevents the lazy sentence "regularizer X is best." It forces the follow-up: best under which axis, on which dataset, and against which perturbation?

The lesson is not that BatchNorm is bad. The lesson is that the same method can be excellent for optimization and fragile under parameter perturbation. That difference is invisible if the only column in the spreadsheet is validation accuracy.

## The practical takeaway

By the end of the project, I no longer thought of regularization as a ranked list of techniques. I thought of it as a set of biases with different failure modes.

Data augmentation was the best choice when the priority was clean-image validation performance. Dropout was the strongest candidate when parameter stability mattered. L2 and even the baseline could look relatively resilient under stochastic input noise, although they sacrificed clean performance. BatchNorm was powerful but sharp in the convolutional feature extractor.

That conditional answer is less tidy than a leaderboard, but it is closer to how I would actually use the results. If I were training a small vision model for a setting where the input distribution is clean and augmentation captures the expected invariances, I would start with augmentation. If I cared about compression, pruning, noisy deployment weights, or small hardware perturbations, I would look again at dropout and not dismiss it just because it lost the clean validation race. If a model showed high entropy, high unique-state percentage, and a large gap, I would treat that as a warning sign rather than as "rich representation" by default.

So the thesis answer to "which regularizer is best?" was deliberately conditional:

\`\`\`text
if the priority is clean accuracy:
  data augmentation is usually strongest
if the priority is flatness / parameter robustness:
  dropout is more attractive
if the priority is input-noise retention:
  inspect L2 and baseline-like behavior carefully
if the dataset is too easy or too hard for the architecture:
  accuracy may hide the regularizer's internal effect
\`\`\`

The main result was not a new regularizer. It was a measurement argument: internal activation metrics can act as diagnostics for under- and over-regularization. They do not replace validation accuracy, but they explain things that accuracy compresses away.

## What I would extend

The first extension would be to repeat the protocol on deeper architectures such as ResNet-18 or VGG-16. The second would be to study combinations of regularizers, since real models rarely use one method in isolation. The third would be to compare representation similarity using CKA, to test whether two regularizers with different metrics actually learn structurally similar spaces.

The longer-term idea is an automatic diagnostic tool: train a model, extract activations, compute entropy, dispersion, and unique-state curves, and flag representations that look collapsed or overly dispersed before relying only on late validation behavior.

That was the value of the thesis for me. It turned the CNN from a black box that emits an accuracy number into a dynamic system whose internal states can be measured, compared, and questioned.`,
  },
  {
    slug: 'diffusion-models-from-sdes-to-images',
    title: 'Diffusion Models from SDEs to Images',
    subtitle: 'A practical walk through the score-based image generation system I built with VE, VP, Sub-VP processes and multiple samplers.',
    excerpt:
      'A modular PyTorch diffusion platform for image generation, with configurable SDEs, schedulers, samplers, conditioning, imputation, and metrics.',
    date: '2025-05-28',
    displayDate: 'Published on 28 May 2025, 09:00',
    readTime: '19 min read',
    category: 'Generative AI',
    coverImage: asset('blog-covers/diffusion.png'),
    coverAlt: 'Stylized diffusion cover with denoising samples, runtime bars, and imputation output',
    accent: 'purple',
    content: `The one-sentence version of diffusion image generation is almost too clean: add noise until an image becomes Gaussian static, then learn how to reverse the process. It is a good intuition, but it hides the engineering question that made this project interesting:

**What exactly is "the process" that we reverse, and how many ways can we reverse it?**

In this project, I worked on a modular generative image system built around score-based diffusion. The goal was not to train a giant production model. It was to build a practical experimental platform where the user could swap the diffusion process, the noise schedule, the sampler, and the conditioning mode without rewriting the whole system.

The system supported grayscale and RGB image datasets, trained a U-Net-style score model, generated samples from noise, evaluated them with standard metrics, and included controlled generation modes such as class conditioning and imputation.

The part I liked most was that the project refused to stay as a single notebook. Diffusion code becomes misleading very quickly when the SDE, the scheduler, the sampler, and the visualization are all tangled together. You can get a grid of images, but you cannot tell whether an improvement came from the process, the integration method, a conditioning trick, or just a lucky seed. I wanted the package to make those choices explicit enough that a bad experiment would at least fail for a traceable reason.

## The score is the direction back to data

The forward process starts from a clean image x_0 and progressively corrupts it into x_t. For a continuous-time diffusion model, this corruption can be described as an SDE:

\`\`\`text
dx = f(x, t) dt + g(t) dw
\`\`\`

Here f is the drift, g controls the diffusion magnitude, and dw is Brownian noise. The model does not need to learn this forward process; we choose it.

Learning happens in the reverse direction. The model learns a score function:

\`\`\`text
score(x_t, t) ~= gradient_x log p_t(x_t)
\`\`\`

Intuitively, the score points toward regions where the noisy sample looks more like something that could have come from the data distribution at that noise level. Sampling then becomes numerical navigation: start at noise, repeatedly ask the score network which way data lies, and integrate backward.

The two equations I kept coming back to were the denoising score-matching objective and the reverse-time dynamics. In implementation terms, the model is learning a time-conditioned vector field:

\`\`\`text
theta* = argmin_theta E_t,x0,z [
  lambda(t) || s_theta(x_t, t, y) - target_score(x_t, x0, t) ||_2^2
]

reverse SDE:
dx = [f(x,t) - g(t)^2 * s_theta(x,t)] dt + g(t) d_w_bar

probability-flow ODE:
dx = [f(x,t) - 0.5 * g(t)^2 * s_theta(x,t)] dt
\`\`\`

That is why the sampler abstraction mattered. Euler-Maruyama, Predictor-Corrector, and Probability Flow ODE are not cosmetic variants; they are different ways of using the same learned score field.

A very compressed training loop looks like this:

\`\`\`text
for image x0 in dataset:
  sample time t
  sample noise z
  construct noisy image xt from the chosen SDE
  ask ScoreNet(xt, t, condition) to predict the score/noise direction
  update the network with a denoising score-matching loss
\`\`\`

That is the conceptual core. The rest of the project is about making each block explicit and replaceable.

## Three forward processes: VE, VP, and Sub-VP

The report implemented three diffusion-process families.

**Variance Exploding (VE)** behaves like a Brownian-motion-style process where the variance grows over time. There is no drift term pulling the sample back; the image degrades because dispersion increases. VE is conceptually direct and useful for understanding score-based SDEs, but its noise scale can grow aggressively.

**Variance Preserving (VP)** adds noise while keeping the overall variance controlled. In the project report, VP is described through an Ornstein-Uhlenbeck-style process where both drift and diffusion depend on time. The image becomes progressively less informative, but the distribution does not simply explode outward.

**Sub-Variance Preserving (Sub-VP)** modifies the VP coefficients so the transition from image to noise is more progressive. It is close enough to VP to share much of the machinery, but different enough to make comparisons interesting.

The user-facing point of implementing all three was simple: the diffusion process is not a background detail. It changes the signal-to-noise geometry seen during training and the numerical behavior encountered during sampling.

## Noise schedules: linear versus cosine

For VP and Sub-VP, the system needed a schedule that controls how quickly noise is introduced. I implemented two options:

- A linear schedule, which is easy to reason about and changes noise intensity in a direct way.
- A cosine schedule, which changes more smoothly and often gives a more natural degradation path.

The schedule is one of those small choices that becomes large in practice. If the model sees too much noise too early, learning becomes inefficient. If corruption is too gentle, the model may not learn the high-noise regime needed at the start of sampling. A diffusion system is less like a single algorithm and more like a chain of compatible numerical decisions.

## The ScoreNet and why U-Net is a natural fit

The score model used a U-Net-style architecture with time information injected into the network. U-Nets work well here because denoising is both local and global. Local texture matters, but the model also needs long-range context to reconstruct coherent structure.

The system used Fourier embeddings for time, and, in conditional cases, class information was injected alongside the temporal embedding. So the model learned not only:

\`\`\`text
score(x_t, t)
\`\`\`

but, when labels were available:

\`\`\`text
score(x_t, t | y)
\`\`\`

That distinction matters for controlled generation. If y is a class label such as a digit in MNIST, the score field changes: the model should guide the noisy sample toward images that are plausible and also belong to that class.

## Sampling is numerical analysis wearing a generative-AI jacket

Once the score network is trained, image generation becomes integration. Start from random noise and step backward through the learned reverse dynamics. The project implemented four samplers.

**Euler-Maruyama** is the basic stochastic integrator. It combines a drift-like update with a random noise term. It is simple, fast, and a good baseline, but it may need many steps for high-quality results.

**Predictor-Corrector** improves the basic reverse path by alternating two moves: a predictor step that advances the reverse SDE, and a corrector step that refines the sample, often with Langevin-style updates. It can produce better images, but extra corrector steps increase compute.

**Probability Flow ODE** turns the reverse stochastic process into a deterministic ordinary differential equation. This removes the random component during sampling. The result is often more deterministic and repeatable; diversity depends more directly on the initial noise.

**Exponential Integrator** uses exponential functions to handle parts of the reverse dynamics more carefully. In the implementation, it can also become deterministic when the noise parameter is set to zero, making it conceptually close to Probability Flow ODE in that regime. The report notes one important compatibility constraint: the VE process is not used with the Exponential Integrator.

The sampling API made the tradeoff explicit:

\`\`\`text
load trained model
choose diffusion process
choose compatible sampler
choose number of steps and sampler parameters
generate a batch
plot samples
\`\`\`

This may sound like ordinary software modularity, but for diffusion models it is a big deal. A sampler is not just an implementation detail; it is part of the model's behavior.

One of the useful sanity checks was timing the sampler combinations instead of only looking at final images. The plot below is not a universal benchmark; it came from a small experimental setting, so I would not over-interpret CPU versus CUDA ratios. But it captures the engineering shape of the problem: Predictor-Corrector is cheap in this configuration, Euler-Maruyama is heavier, and the Exponential Integrator sits in the middle while behaving differently from the stochastic samplers.

![Average sampling time per sampler grouped by device for a digit-3 MNIST Sub-VP experiment.](${asset('blog-plots/diffusion-sampler-runtime.png')})

That matters because sampler choice is not only about visual quality. It changes latency, repeatability, and the number of reverse steps you can afford. In a teaching notebook, that tradeoff can be hidden. In a reusable package, it needs to be surfaced because the "best" sampler under a metric may be the wrong sampler for an interactive workflow.

## Conditioning: pushing the sample toward a class

The system included class-conditioned generation when the dataset supported labels. The model can be trained with class embeddings, so generation can ask for a specific category:

\`\`\`text
sample class = 3
start from Gaussian noise
run reverse process using score(x_t, t | class=3)
return images that should look like that class
\`\`\`

The report also discusses classifier-free guidance. The basic idea is to learn both conditional and unconditional behavior, then combine them during sampling:

\`\`\`text
guided_score =
  unconditional_score
  + guidance_scale * (conditional_score - unconditional_score)
\`\`\`

Increasing the guidance scale pushes harder toward the class condition. Too little guidance and the class signal is weak; too much and diversity can suffer. One of the useful observations from the project was that guidance intensity can be adjusted over time to balance visual precision and variety.

## Imputation: diffusion as constrained editing

Imputation was the other control mechanism. Instead of generating the whole image freely, the model receives a partially observed image and a binary mask indicating which region is missing. The reverse process is constrained so the observed pixels stay fixed while the missing region is regenerated.

The conceptual loop is:

\`\`\`text
given original image x and mask M:
  keep observed region fixed
  diffuse or initialize the missing region
  during each reverse step:
    update only the masked region with the score model
    restore observed pixels from the known image
\`\`\`

This turns diffusion from "make me an image" into "complete this image in a way that is consistent with its context." It is a small version of the same principle behind many modern image-editing workflows: the model has learned a distribution over images, and the mask constrains where it is allowed to move.

![Image imputation demo showing original MNIST digits, masked inputs, and reconstructed missing regions.](${asset('blog-plots/diffusion-imputation.png')})

The imputation demo is small, but it is a good test of whether the implementation is really doing conditional generation and not just unconditional sampling with a mask drawn on top. The observed pixels have to be re-imposed during the reverse process, otherwise the sample drifts away from the known context. That tiny implementation detail is exactly the kind of thing that separates a diffusion explanation from a diffusion tool.

## Evaluation: do not trust the prettiest grid

The project included a metrics module with three common image-generation metrics.

**Bits per dimension (BPD)** estimates how well the model explains the data distribution, normalized by image dimensionality.

**Frechet Inception Distance (FID)** compares statistics of generated images against real images in an Inception feature space. Lower is better, and the metric is often used as a rough proxy for visual realism and distributional similarity.

**Inception Score (IS)** tries to reward images that are both classifiable and diverse across classes.

These metrics are imperfect, especially on small academic experiments and simple datasets. Still, including them matters because visual grids are dangerously persuasive. A generated sample can look promising while the model is collapsing in diversity, or the metric can look acceptable while the images are blurry. The healthy approach is to inspect both.

## The software shape

The report describes the system as a package rather than a single notebook. The main design separated:

- Diffusion process definitions.
- Noise schedules.
- The ScoreNet architecture.
- Training routines.
- Sampling algorithms.
- YAML/dictionary configuration.
- Conditioning and imputation utilities.
- Evaluation functions.
- Notebooks for training, generation, evaluation, and advanced examples.

The central orchestrator was a DiffusionExperiment-style class that hid the wiring from the user. A typical workflow looked like this:

\`\`\`text
experiment = DiffusionExperiment(config)
experiment.train(dataset)
experiment.sample_and_plot(sampler="predictor_corrector")
experiment.evaluate(metrics=["bpd", "fid", "is"])
\`\`\`

The actual implementation also handled practical requirements: grayscale or RGB inputs, normalization to [-1, 1], PyTorch tensor formatting, model saving/loading, CPU/GPU detection, tests for key components, and notebooks that execute the workflows in order.

## What the demos showed

The report describes five demonstration notebooks.

The first trained models on MNIST digit 3, using VE, VP, and Sub-VP variants with linear or cosine schedules. The second compared sampling methods from the trained models: Euler-Maruyama, Predictor-Corrector, Probability Flow ODE, and Exponential Integrator. The third moved to color images using the boat class from CIFAR-10. The fourth evaluated generated samples with BPD, FID, and IS. The fifth demonstrated class conditioning and imputation over MNIST digits.

The results were deliberately framed with modest compute in mind. Training a U-Net-based model from scratch with reduced model size and a limited number of training steps cannot compete with large diffusion systems. But the generated images were coherent enough to demonstrate that the system learned useful relationships between noise, class information, and visual form.

![Sub-VP Predictor-Corrector sample progression from random noise to CIFAR-10 boat images.](${asset('blog-plots/diffusion-denoising-samples.png')})

I would not present these samples as artistic output. They are more useful as debugging evidence. The left side is still noise, the right side has learned class-level structure, and the middle of the pipeline is where small mistakes in normalization, timestep scaling, or sampler compatibility usually show up. When a generated image looks wrong, the bug is rarely just "the model is bad"; it can be the score target, the marginal probability function, the timestep embedding, the reverse-step variance, or the conditioning path.

That makes the project valuable as an experimental platform: not "look, I recreated a frontier image model," but "look, every important moving piece of score-based image generation is implemented, swappable, and testable."

## The lesson I took from building it

Diffusion models are often taught as if the key idea is just repeated denoising. Building one makes the real structure clearer. A diffusion model is a stack:

\`\`\`text
data preprocessing
  -> forward SDE
  -> noise schedule
  -> score network
  -> training objective
  -> sampler/integrator
  -> conditioning rule
  -> evaluation metric
\`\`\`

Each layer can be changed. Each change has mathematical and software consequences. VE, VP, and Sub-VP define different noise geometries. Euler-Maruyama and Probability Flow ODE express different beliefs about stochasticity during sampling. Class conditioning and imputation turn generation into controlled navigation through the learned image distribution.

The most useful part of the project was seeing how the math becomes engineering. The equations tell you what the process should be; the package design decides whether you can actually compare variants without tearing the system apart.

That is the kind of generative AI project I like: not just a gallery of samples, but a small laboratory where the algorithm's moving parts are visible.`,
  },
  {
    slug: 'athenai-competition-decision-pipeline',
    title: 'AthenAI: Compressing Thousands of Trading Algorithms into an RL State',
    subtitle: 'How I built an offline macro-aware finance-RL pipeline around algorithm clustering, proxy labels, and honest backtesting boundaries.',
    excerpt:
      'The AthenAI project reconstructed a daily algorithm universe, clustered strategy behavior into super-assets, and built the state layer for offline portfolio RL.',
    date: '2026-09-14',
    displayDate: 'Published on 14 September 2026, 09:00',
    readTime: '20 min read',
    category: 'Applied ML',
    coverImage: asset('blog-covers/athenai.png'),
    coverAlt: 'Stylized AthenAI cover with the pipeline, clustering diagnostics, and market-state plots',
    accent: 'green',
    content: `The tempting version of a finance-RL competition project is to jump straight to the agent. Pick PPO, define an action space, train a policy, draw a beautiful equity curve. The AthenAI project pushed me in the opposite direction.

The hard part was not the acronym after "agent." The hard part was building a state representation that an agent could honestly learn from.

I treated the challenge less as "I know finance" and more as a representation-learning problem with unusually strict leakage rules. Every attractive idea had to pass a simple test: could this signal exist at decision time, and does it encode future performance by accident? If the answer was unclear, the feature had to be downgraded to diagnostics or future work.

The raw universe contained thousands of proprietary trading-algorithm files, each with intraday OHLC rows. There was also a benchmark trade file. A naive RL setup would treat every algorithm as an asset and ask a model to allocate across all of them directly. That is fragile for three reasons:

- Many algorithm series are short, sparse, constant, or broken.
- The universe is non-stationary.
- Deployment should not depend on live macro APIs, even if macro labels are useful during training.

So the project became a layered offline pipeline:

\`\`\`text
raw algorithm CSVs
  -> daily close reconstruction
  -> quality gate
  -> return and trade encoding
  -> personality features
  -> behavioral clustering
  -> cluster-level time series
  -> rolling state features
  -> macro proxy layers
  -> RL/backtesting interface
\`\`\`

That is less flashy than "trained a trading bot." It is also more honest.

![AthenAI offline pipeline from raw competition files to daily returns, static personality, factor clustering, proxy state, and RL/backtesting interface.](${asset('blog-plots/athenai-pipeline.png')})

## The competition as an offline portfolio problem

The formal framing was a sequential portfolio-management problem. At each decision date, the system observes the current state of the algorithm universe and chooses a capital allocation. The reward arrives later through portfolio returns, adjusted for risk and costs.

In notation, a portfolio action can be written as a vector over C investable units:

\`\`\`text
w_t in simplex(C)
sum_c w_t,c = 1
w_t,c >= 0
\`\`\`

The useful mental model is a constrained MDP, except the state is reconstructed offline and the action space is a compressed cluster universe:

\`\`\`text
s_t = [cluster_features_t, proxy_scores_t, alive_mask_t, w_t-1]
a_t = w_t

r_t+1 =
  dot(w_t, R_t+1)
  - cost_rate * ||w_t - w_t-1||_1
  - risk_penalty * max(0, drawdown_t+1 - drawdown_limit)
\`\`\`

That last term was not about claiming a final production reward function. It was a design reminder: in portfolio RL, the agent should be punished for fragile equity paths, not only rewarded for point returns.

But the original universe had far too many raw algorithms for that to be a clean action space. The central design choice was to compress algorithm behavior into cluster-level "super-assets" before attempting RL.

The report is careful about scope: the final RL layer was developed as a DQN/backtesting interface, not as a completed PPO production result. PPO and SAC are good future candidates for continuous allocation, but the current artifact is mainly the data reconstruction, state-building, clustering, proxy modeling, and RL scaffolding.

## Reconstructing the daily panel

Each algorithm file stores intraday OHLC rows with timestamps and close prices. The first step was to collapse each algorithm to a daily close:

\`\`\`text
P_i,t = last close observed for algorithm i on day t
\`\`\`

From that, the system computed simple and logarithmic daily returns:

\`\`\`text
r_i,t = clip(P_i,t / P_i,t-1 - 1, -0.50, 0.50)
l_i,t = clip(log(P_i,t) - log(P_i,t-1), -0.50, 0.50)
\`\`\`

The clipping threshold is wide by design. It is not meant to suppress ordinary strategy variation. It prevents broken close jumps from dominating rolling statistics, PCA, and distance-based clustering.

In the regenerated analysis documented in the report, the pipeline read 14,761 algorithm files and produced 8,879,120 daily algorithm rows. Of the 13,663 identifiers with usable rows, 9,491 passed the quality gate. That accepted set represented about 69.5% of observed algorithms, with a median of 639 daily observations and median calendar coverage of 84.6%.

Those numbers are the first important result. Before there is a model, there is a reconstructed universe.

## The quality gate avoided performance leakage

The quality filter did not select "good" algorithms. It selected usable time series.

An algorithm passed if it had enough observations, enough calendar coverage, more than two unique close values, and non-negligible return volatility:

\`\`\`text
accepted if:
  n_i >= 60
  coverage_i >= 0.70
  unique_closes_i > 2
  std(return_i) > 1e-9
\`\`\`

This is an important kind of restraint. Filtering by Sharpe, return, or drawdown at this stage would leak ex-post performance into every downstream result. The gate only removed series that were too short, too sparse, or effectively constant.

The accepted daily return distribution still had a large spike around zero and fat tails, which is what I would expect from strategy-like curves: many algorithms do little on a given day, while a smaller set makes discrete moves. The report gives the accepted universe mean daily return as approximately -0.008%, standard deviation as 0.493%, and 1%/99% quantiles of -1.67% and 1.53%.

## The benchmark was a trace, not an oracle

The benchmark file contained 5,394 trades across 271 distinct algorithms, with a median holding period of 26 calendar days. It included product name, signed volume, opening date, closing date, invested amount, AUM, and end-of-day equity fields.

I encoded it as a position trace:

\`\`\`text
h_i,t = sum of signed volumes for open trades in algorithm i at time t
w_i,t = h_i,t / (epsilon + sum_k abs(h_k,t))
\`\`\`

This is useful for forensics and sanity checks. It shows where the benchmark moved through the algorithm universe. But it should not be treated as an optimal policy label. The benchmark traded only 271 algorithms out of a much larger universe, and openings were concentrated in the later part of the sample. That makes it informative, but risky as the only imitation-learning target.

## Algorithm personality features

The main modeling idea was that algorithms should not be anonymous columns. Each one has a behavioral profile: volatility, drawdown shape, tail risk, autocorrelation, momentum, and stability. I called this its static personality.

For each accepted algorithm, the pipeline computed features such as:

- Mean return and standard deviation.
- Annualized volatility.
- Sharpe and Sortino ratios.
- Empirical quantiles and tail ratios.
- Skewness and excess kurtosis.
- Maximum drawdown and ulcer index.
- Average drawdown depth and time in drawdown.
- One-day return autocorrelation.
- Absolute-return autocorrelation.
- 120-day log momentum.
- Stability diagnostics across the first and second halves of the sample.

The familiar formulas are simple but useful:

\`\`\`text
Sharpe_i  = sqrt(252) * mean(r_i) / std(r_i)
Sortino_i = sqrt(252) * mean(r_i) / downside_std(r_i)

drawdown_i,t = P_i,t / max_previous_price_i,t - 1
max_drawdown_i = min_t drawdown_i,t
\`\`\`

This feature vector gave the clustering layer economic meaning. Two algorithms can have the same average return but completely different tail behavior, drawdown persistence, and exposure to common factors.

## Internal factors and exposures

The pipeline also built internal factor features. The simplest is the algorithm-universe market factor:

\`\`\`text
market_factor_t = mean return across alive algorithms at time t
\`\`\`

It also computed PCA factors over a standardized return matrix. Each algorithm then received ridge-estimated exposures to the internal market and PCA factors. The point was not to create a perfect factor model; it was to add co-movement information to the static personality vector.

The clustering input was roughly:

\`\`\`text
algorithm_vector_i =
  [personality_i, factor_exposures_i, R2_i, residual_volatility_i]
\`\`\`

The vectors were robust-scaled with median and interquartile range, then clustered.

## Behavioral clusters as super-assets

The main clustering configuration in the report was behavioral_k100_v1: 100 clusters learned from robust-scaled personality and factor diagnostics. The project also implemented a correlation/PCA embedding cluster family, but the behavioral 100-cluster setup was the main downstream compression.

Cluster-level returns were built by averaging the returns of alive algorithms in each cluster:

\`\`\`text
R_c,t = mean return of algorithms assigned to cluster c and alive at time t
alive_ratio_c,t = alive algorithms in cluster c at time t / total algorithms in cluster c
\`\`\`

This is where the learning problem changed. Instead of asking a model to understand around 9.5k accepted algorithm series directly, the state now had 100 behaviorally coherent super-assets, each with metadata, rolling features, and alive masks.

That compression is not cosmetic. It is the main contribution of the implementation.

![Behavioral clustering diagnostics showing a robust-PCA view, cluster size profile, cluster risk-return map, and momentum hit-rate profile.](${asset('blog-plots/athenai-clusters.png')})

The clustering figure is the part of the project I would show first in an interview. It says more than "I used k-means." The PCA view checks whether the accepted algorithms have obvious outliers and co-movement structure. The size distribution checks whether the compression produced a few giant clusters and many tiny ones. The risk-return and hit-rate panels give the clusters a behavioral texture that an RL state can actually use. The clusters are not labels for a dashboard; they are the new action-space vocabulary.

## Windowed state features

The state layer used multiple horizons because market behavior is not one-speed:

- 5 and 10 days for short-term reaction and jump behavior.
- 20 days for a trading-month view and realized volatility.
- 60 days for quarterly-style Sharpe and drawdown proxies.
- 120 days for slower momentum in the personality layer.

From cluster returns, the pipeline computed universe-level features such as breadth, dispersion, tails, rolling volatility, rolling correlations, jumpiness, and drawdown proxies.

For example:

\`\`\`text
breadth_t = fraction of clusters with positive return at t
dispersion_t = cross-sectional std of cluster returns at t
\`\`\`

This matters because stress regimes often show up as joint patterns: falling breadth, rising correlation, higher volatility, fatter left tails. A single aggregate return cannot capture that structure.

![Internal universe state reconstructed from cluster returns, including market return, cross-sectional breadth, volatility, and rolling correlation features.](${asset('blog-plots/athenai-state.png')})

This plot is exactly why I did not want a state made only of recent portfolio returns. The market factor, breadth, volatility, and correlation state move on different rhythms. Breadth is noisy but gives cross-sectional participation. Volatility clusters. Correlations spike and decay. A portfolio agent should see those differences because they imply different action costs: sometimes the right response is to reduce turnover, sometimes to rotate clusters, and sometimes simply to distrust the proxy layer.

## Macro proxies without live macro dependency

The competition constraint made external macro data tricky. VIX, Treasury yields, and factor returns are valuable training context, but relying on live external APIs at deployment would weaken the offline design.

The compromise was a proxy layer:

\`\`\`text
during training:
  fetch external macro/factor data
  create targets
  train internal proxy models from algorithm-universe features

during prediction:
  use only internal features and trained proxy models
\`\`\`

The report documents several proxy layers.

The **VIX spike proxy** attempted to predict large forward changes in log VIX. Its AUC was around 0.50 +/- 0.10, essentially baseline-like. Calibration improved expected calibration error from 0.036 to 0.0007, but the classification signal was weak.

The **rates direction proxy** predicted whether the 10-year Treasury yield moved down, stayed neutral, or moved up over a 10-day horizon. This was the strongest proxy, with documented sign accuracy of 80.6% +/- 10.8% and a shuffle leakage diagnostic separating real and shuffled targets.

The **internal risk-off proxy** used the future 10-day minimum return of the cluster market factor and marked the bottom decile as risk-off. In the regenerated target, the threshold was -0.301% and the positive rate was 9.93%. The current model AUC was around 0.46 +/- 0.10, so the target definition was useful, but the predictor was not yet strong.

The **factor monitor** aggregated universe features monthly and attempted to predict Fama-French-style factor signs, especially momentum. With only 54 monthly observations, it was treated as a diagnostic/future-work layer rather than a strong production signal.

This section is where I think the report is strongest: it reports negative results. The point was not to pretend every proxy worked. The point was to identify which macro concepts the internal universe currently can and cannot reconstruct.

## The RL interface

After clustering and proxy construction, the decision state can be written as:

\`\`\`text
s_t = [
  rolling cluster features,
  internal universe state,
  proxy scores/probabilities,
  alive mask,
  previous allocation
]
\`\`\`

The previous allocation matters because transaction costs depend on turnover:

\`\`\`text
portfolio_return_t+1 =
  dot(w_t, cluster_returns_t+1)
  - cost_rate * L1_norm(w_t - w_t-1)
\`\`\`

The backtest then tracks equity:

\`\`\`text
E_t+1 = E_t * (1 + portfolio_return_t+1)
\`\`\`

and reports metrics such as Sharpe, maximum drawdown, win rate, and Calmar ratio.

The current repository includes DQN scaffolding: replay buffer, target network, epsilon-greedy action selection, Smooth L1 loss, and backtesting utilities. Because DQN is discrete-action, the continuous portfolio simplex would need to be discretized into actions such as holding the previous allocation, shifting weight toward a selected cluster, moving to cash, or choosing among predefined cluster baskets.

For a future continuous-allocation version, PPO or SAC would make sense. But the report does not claim completed PPO performance, and neither should the blog post.

## What the benchmark showed

The benchmark yearly return file showed positive returns in every available year. The best year was 2022 at 7.13%, followed by 2024 at 6.99%. The weakest was 2020 at 0.54%, with the caveat that the monthly file begins in June 2020. Compounding the monthly return file gave a total return of 22.95%, with a maximum monthly-resolution drawdown of -1.87%.

![Benchmark diagnostics with year-over-year returns, cumulative monthly return, monthly return heatmap, and realized drawdown.](${asset('blog-plots/athenai-benchmark.png')})

That drawdown should be read carefully. It is based on monthly benchmark returns, not fabricated intramonth equity. Again, the theme is restraint: report what the data supports and do not fill missing resolution with imagination.

## What the project actually achieved

The final system was not a finished trading policy. It was an auditably constructed state and modeling pipeline:

- Reconstructed a large algorithm universe into a daily panel.
- Filtered algorithms using reliability rather than ex-post performance.
- Encoded benchmark trades as an action trace.
- Built static personality features for each accepted algorithm.
- Compressed roughly 9.5k accepted algorithms into 100 behavioral clusters.
- Built cluster-level returns, alive masks, and rolling features.
- Trained and evaluated macro proxy layers with explicit leakage checks.
- Exposed the resulting state to a DQN/backtesting interface.

The most important observation was that clustering changed the learning problem. Instead of presenting an RL agent with thousands of sparse, noisy algorithm columns, the model receives a smaller set of behaviorally coherent time series with interpretable metadata.

## The lesson

A lot of applied ML work is won or lost before the model trains. This project is a good example. The interesting decisions were not only in the RL algorithm; they were in the representation:

\`\`\`text
What is an asset?
What counts as alive?
Which filters leak performance?
Which macro signals are allowed at deployment?
What should the action space see?
How do we report unsupported results honestly?
\`\`\`

The AthenAI pipeline taught me that an offline finance-RL system should be built like an evidence chain. Every transformation needs a reason, every target needs a leakage story, and every final claim should be limited to what the regenerated artifacts support.

That is the kind of restraint that makes a competition project more useful after the competition is over.`,
  },
];
