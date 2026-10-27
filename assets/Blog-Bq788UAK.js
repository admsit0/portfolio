import{c as Hn,a as nn,g as yr,j as I,u as ln,b as Ni,r as xt,N as Mi,L as $n,A as br,F as Oi,d as qi}from"./index-BhWs2gM9.js";import{C as Bi}from"./calendar-ByYMB2Tz.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=Hn("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=Hn("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=Hn("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]),wt=e=>`/${e}`,Ui={slug:"atlas-building-a-place-to-learn",title:"Atlas: Building a Place to Learn, Not Just Read",subtitle:"The product and engineering decisions behind an interactive, bilingual learning platform.",excerpt:"Why I built Atlas around real experiments, reusable learning components, and private cloud profiles, and what I am learning from its first users.",date:"2026-10-13",displayDate:"13 October 2026",readTime:"5 min read",category:"Building Atlas",accent:"blue",coverImage:wt("projects/atlas-learning.png"),coverAlt:"The real Atlas symbolic AI learning interface",content:`There is a big difference between reading an explanation of an algorithm and being able to work through one of its decisions. That gap is what I wanted Atlas to address.

The platform brings theory, worked examples, interactive laboratories, and guided practice into the same learning pathway. It currently covers symbolic AI, deep learning, and generative AI in English and Spanish. The first adoption figure is modest: **30+ unique users**, based on the current reported count. I treat that as a reason to keep listening, not as a finished validation of the product.

![The symbolic AI curriculum and learning pathway in Atlas.](${wt("projects/atlas-learning.png")})

## A learning loop, not a folder of documents

Each lesson follows four stages: **Understand, Explore, Solve, Check**. The distinction matters because each stage asks the learner to do something different.

An explanation introduces the concept and a worked example makes the reasoning concrete. A laboratory then allows the learner to change an input and inspect the resulting states. Practice adds progressive hints and a reasoned solution. Explained questions and self-assessment give the learner another way to check their understanding.

This is not an automatic grading system for free-text answers. Written responses are drafts that learners compare with reasoned solutions. The interface should make that distinction clear rather than pretending that a completion marker proves mastery.

## Experiments need actual engines

A simulation should be more than an animation with an impressive label. When a learner changes an input, the numerical or logical process needs to change with it. Intermediate states must be inspectable, and the limits of the experiment need to be explicit.

In Atlas, subject-specific simulation engines are isolated from the shared account and content layers. That separation makes it possible to test a calculation independently from the interface that displays it. It also stops a new course from becoming a new application with its own authentication and progress logic.

The architecture is intentionally modular:

\`\`\`text
course manifest + bilingual lesson content
  -> shared learning views
  -> isolated simulation engine and visual adapter
  -> account-owned progress and preferences
\`\`\`

The current catalog contains **157 lessons and 26 interactive laboratories**. Those are a snapshot of the content, not a promise that every topic imaginable is already covered.

## One platform, not one app per subject

The common shell owns navigation, language preferences, profiles, feedback, and the learning components. Courses own their curriculum. Simulation plugins own the scientific calculations they need.

This creates a useful constraint: adding a subject should reuse the existing platform rather than introducing another set of settings, hints, menus, or profiles. Stable lesson identities preserve progress when content evolves. Spanish and English need to agree on identities and numerical meaning even when their prose differs.

## Saving is part of the product

Google sign-in creates or retrieves a private cloud profile. Supabase provides authentication and the database-backed profile layer; the verified account identity, not a display name or browser cache, determines ownership.

Language, preferences, drafts, and progress belong to that account. Browser persistence serves as an internal cache. The difficult part of synchronization is not displaying a saved icon: it is preserving pending work and making failures and session changes understandable.

I wanted the normal learning experience to avoid a collection of decisions about local versus cloud storage. A learner should be able to return to their own work without having to understand the implementation underneath it.

## Learning from use without collecting the learning itself

Usage telemetry and deliberate feedback have different purposes. Minimal events can help identify where the product is used; a deliberate report can explain where a lesson or interaction needs work.

The analytics pipeline uses Supabase Edge Functions and PostgreSQL. Analytics identities are separate from account ownership. Names, profile photos, written answers, drafts, and account credentials do not belong in those events. Existing opt-out preferences and Global Privacy Control also matter. A default preference should never be described as explicit consent.

## The useful next question

Atlas is live, but its first users do not make it a finished product. The question I care about is whether the learning experience is clear, whether the experiments help someone reason, and where the platform gets in the way.

That is the work I want to keep documenting: specific decisions, what the implementation actually does, and what changes after people use it.

[Open Atlas](https://atlaslearning.es/)
`},ue=e=>`/${e}`,zn=[{slug:"regularization-in-cnns-internal-activations",title:"Regularization in CNNs: Looking Inside the Network",subtitle:"How my thesis treated regularization as a change in representation geometry, not just a better validation curve.",excerpt:"My TFG compared seven regularizers on the same CNN and asked what they do to hidden activations, robustness, and generalization.",date:"2026-07-18",displayDate:"Published on 18 July 2026, 09:00",readTime:"21 min read",category:"Thesis",coverImage:ue("blog-plots/regularization-radar.png"),coverAlt:"Radar plot comparing CNN regularizers across evaluation metrics",accent:"blue",content:`Most regularization explanations eventually collapse into one plot: the training curve keeps going down, the validation curve stops improving, and the gap between them is called overfitting. That picture is useful, but it hides the object that I actually wanted to study in my TFG: the internal representation learned by the network.

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

![Radar charts comparing regularizers across accuracy, data-noise robustness, weight-noise robustness, and inter-layer consistency on CIFAR-10, SVHN, CIFAR-100, and FashionMNIST.](${ue("blog-plots/regularization-radar.png")})

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

That was the value of the thesis for me. It turned the CNN from a black box that emits an accuracy number into a dynamic system whose internal states can be measured, compared, and questioned.`},{slug:"diffusion-models-from-sdes-to-images",title:"Diffusion Models from SDEs to Images",subtitle:"A practical walk through the score-based image generation system I built with VE, VP, Sub-VP processes and multiple samplers.",excerpt:"A modular PyTorch diffusion platform for image generation, with configurable SDEs, schedulers, samplers, conditioning, imputation, and metrics.",date:"2025-05-28",displayDate:"Published on 28 May 2025, 09:00",readTime:"19 min read",category:"Generative AI",coverImage:ue("blog-plots/diffusion-denoising-samples.png"),coverAlt:"Diffusion samples progressing from noise to generated images",accent:"purple",content:`The one-sentence version of diffusion image generation is almost too clean: add noise until an image becomes Gaussian static, then learn how to reverse the process. It is a good intuition, but it hides the engineering question that made this project interesting:

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

![Average sampling time per sampler grouped by device for a digit-3 MNIST Sub-VP experiment.](${ue("blog-plots/diffusion-sampler-runtime.png")})

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

![Image imputation demo showing original MNIST digits, masked inputs, and reconstructed missing regions.](${ue("blog-plots/diffusion-imputation.png")})

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

![Sub-VP Predictor-Corrector sample progression from random noise to CIFAR-10 boat images.](${ue("blog-plots/diffusion-denoising-samples.png")})

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

That is the kind of generative AI project I like: not just a gallery of samples, but a small laboratory where the algorithm's moving parts are visible.`},{slug:"athenai-competition-decision-pipeline",title:"AthenAI: Compressing Thousands of Trading Algorithms into an RL State",subtitle:"How I built an offline macro-aware finance-RL pipeline around algorithm clustering, proxy labels, and honest backtesting boundaries.",excerpt:"The AthenAI project reconstructed a daily algorithm universe, clustered strategy behavior into super-assets, and built the state layer for offline portfolio RL.",date:"2026-09-14",displayDate:"Published on 14 September 2026, 09:00",readTime:"20 min read",category:"Applied ML",coverImage:ue("blog-plots/athenai-clusters.png"),coverAlt:"AthenAI strategy clustering diagnostics from the experimental report",accent:"green",content:`The tempting version of a finance-RL competition project is to jump straight to the agent. Pick PPO, define an action space, train a policy, draw a beautiful equity curve. The AthenAI project pushed me in the opposite direction.

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

![AthenAI offline pipeline from raw competition files to daily returns, static personality, factor clustering, proxy state, and RL/backtesting interface.](${ue("blog-plots/athenai-pipeline.png")})

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

![Behavioral clustering diagnostics showing a robust-PCA view, cluster size profile, cluster risk-return map, and momentum hit-rate profile.](${ue("blog-plots/athenai-clusters.png")})

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

![Internal universe state reconstructed from cluster returns, including market return, cross-sectional breadth, volatility, and rolling correlation features.](${ue("blog-plots/athenai-state.png")})

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

![Benchmark diagnostics with year-over-year returns, cumulative monthly return, monthly return heatmap, and realized drawdown.](${ue("blog-plots/athenai-benchmark.png")})

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

That is the kind of restraint that makes a competition project more useful after the competition is over.`}];zn.push(Ui);const Hi=`La mayoría de las explicaciones de regularización terminan en el mismo gráfico: la curva de entrenamiento sigue bajando, la de validación deja de mejorar y llamamos sobreajuste a la distancia entre ambas. Es una imagen útil, pero deja fuera lo que quería estudiar en mi TFG: la representación interna que aprende la red.

La pregunta era:

**Cuando dos CNN alcanzan una precisión de validación parecida, ¿organizan la información de la misma manera por dentro?**

La respuesta fue que no. La regularización no cambiaba solo el resultado final. Cambiaba cómo se distribuían, comprimían y saturaban las activaciones, y cómo respondían a perturbaciones. El proyecto acabó siendo un intento de medir esas diferencias.

Ahora parece evidente, pero no fue mi punto de partida. Al principio quería hacer la comparación habitual, ordenar los métodos por precisión y comentar la tabla. Cuantos más checkpoints inspeccionaba, menos me convencía ese enfoque. Algunos modelos eran precisos, pero frágiles internamente. Otros no ganaban en validación limpia y, sin embargo, toleraban mucho mejor el ruido en los parámetros. El trabajo empezó a interesarme de verdad cuando dejé de tratar la precisión como toda la historia y empecé a mirar la red como un sistema con estados ocultos.

## El experimento: una arquitectura sencilla a propósito

No buscaba un clasificador de última generación. Quería una CNN con capacidad para sobreajustar, pero lo bastante sencilla como para atribuir los cambios al regularizador y no a trucos de arquitectura.

Mantuve la misma arquitectura en todos los experimentos:

\`\`\`text
input image
  -> conv1: 3x3 conv, 32 channels, ReLU, 2x2 max-pool
  -> conv2: 3x3 conv, 64 channels, ReLU, 2x2 max-pool
  -> conv3: 3x3 conv, 128 channels, ReLU, 2x2 max-pool
  -> flatten
  -> fc1: 128 hidden units, ReLU
  -> fc2: class logits
\`\`\`

En CIFAR-10 y SVHN, el último tensor convolucional es de 4x4x128. Se aplana en 2048 variables antes de la representación densa de 128 dimensiones. El modelo base podía acercarse a una precisión de entrenamiento perfecta en CIFAR-10 tras 60 épocas: justo la capacidad de memorización que necesitaba para el análisis.

Comparé siete estrategias:

- Penalización L1.
- Penalización L2.
- Dropout.
- Early stopping.
- Inyección de ruido gaussiano durante el entrenamiento.
- Aumento de datos.
- Batch normalization.

Utilicé CIFAR-10, SVHN, CIFAR-100 y FashionMNIST. Cada uno exigía algo distinto: CIFAR-10 fue el dominio principal; SVHN era más homogéneo; CIFAR-100 exponía los límites de capacidad; FashionMNIST ofrecía un régimen cercano al techo en el que casi todos los métodos rendían bien.

## La precisión era una perspectiva demasiado estrecha

La precisión indica si el clasificador acierta las etiquetas. No dice si utiliza una representación compacta, caótica o colapsada. Traté las activaciones ocultas como objetos empíricos que se pueden recoger y medir.

Para cada checkpoint cargué el modelo en evaluación y registré hooks en tres capas:

- conv1: extracción temprana de características.
- conv3: representación convolucional profunda.
- fc1: espacio latente denso anterior a la clasificación.

El pipeline seguía este esquema:

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

Durante la extracción, Dropout estaba desactivado y BatchNorm utilizaba sus estadísticas aprendidas. Las activaciones correspondían al comportamiento del modelo en inferencia.

Una decisión importante fue discretizar con los mismos rangos de referencia del modelo base. Dividí el rango de activaciones en intervalos y representé cada ejemplo mediante un vector ordenado de identificadores de intervalo. Así conservaba la identidad de las neuronas mejor que con un histograma global. Dos estados con el mismo número de neuronas activadas no tienen por qué ser el mismo estado interno.

## Tres señales internas

Utilicé tres métricas principales.

**Porcentaje de activaciones únicas:** cuántos estados discretizados diferentes aparecen al procesar la validación.

\`\`\`text
unique_pctg = number of unique activation-state vectors / number of validation examples
\`\`\`

Un valor demasiado bajo puede indicar que muchas entradas colapsan en el mismo código. Uno demasiado alto puede significar que la red representa cada entrada de forma excesivamente específica.

**Entropía de Shannon:** concentración del histograma de activaciones.

\`\`\`text
H = - sum over bins p_i log(p_i)
\`\`\`

Una entropía baja concentra las activaciones en pocos intervalos; una alta las distribuye más.

**Ratio de dispersión:** desviación típica de las activaciones del modelo regularizado respecto a la del modelo base.

\`\`\`text
dispersion_ratio = activation_std_regularized / activation_std_baseline
\`\`\`

La dispersión bruta depende de la capa y del dataset. Un ratio inferior a uno indica compresión respecto a la referencia.

No son métricas mágicas. Son deliberadamente sencillas. Su utilidad consiste en poder hablar de regularización como geometría de la representación, no solo como intervención sobre la precisión.

## Lo que decía primero la precisión

Los resultados externos no sorprendían demasiado, pero establecían la referencia. Aumento de datos y BatchNorm dieron las mejoras más fuertes en validación. Dropout y L2 quedaron en posiciones intermedias. Ruido gaussiano, early stopping y L1 fueron más débiles o apenas mejoraron el modelo base.

En CIFAR-10, los resultados del informe incluían:

| Método | Precisión de validación | Estados únicos en fc1 | Entropía en fc1 | Ratio de dispersión en fc1 |
| --- | ---: | ---: | ---: | ---: |
| Aumento de datos | 0.785 | 89.22% | 1.78 | 0.46 |
| BatchNorm | 0.770 | 84.30% | 1.53 | 0.41 |
| Dropout | 0.727 | 37.23% | 1.17 | 0.29 |
| L2 | 0.714 | 97.93% | 2.09 | 0.57 |
| Modelo base | 0.694 | 99.98% | 2.87 | 1.06 |

La brecha de generalización también importaba. En CIFAR-10, el modelo base, L2 y ruido gaussiano alcanzaban una precisión de entrenamiento cercana a 1.0 y mantenían una brecha de alrededor de 0.30. El aumento de datos la reducía a aproximadamente 0.09. BatchNorm conservaba una brecha mayor, próxima a 0.23: parte de su utilidad parecía venir de estabilizar la optimización, no solo de impedir la memorización.

Lo más interesante apareció al leer juntos precisión y estructura interna.

## La zona intermedia

Los modelos fuertes tendían a situarse en una diversidad interna intermedia, especialmente en fc1. Una diversidad muy baja parecía compresión o infrautilización de la representación; una excesiva, memorización o especialización ruidosa.

El modelo base no era simplemente peor por tener menos precisión. En CIFAR-10 producía porcentajes de estados únicos casi máximos y una entropía alta en fc1. Utilizaba muchos estados, pero esa diversidad no se traducía en generalización. Aumento de datos y BatchNorm comprimían la distribución manteniendo variedad suficiente para clasificar.

Dropout fue particularmente interesante. No ganó en validación limpia, pero produjo una fc1 mucho más comprimida y después mostró una fuerte robustez a perturbaciones de parámetros. Mirando solo la precisión, parecía aceptable sin más. Mirando geometría y perturbaciones, era un regularizador cualitativamente distinto.

## El tiempo también importa

No inspeccioné solo el checkpoint final. Seguí los estados internos durante 60 épocas. En muchos casos, la precisión subía rápido durante las primeras 10 épocas y después se saturaba, mientras la diversidad interna seguía aumentando.

En SVHN se veía especialmente bien. El modelo base y el de ruido gaussiano alcanzaban aproximadamente un 90% de precisión pronto, pero sus porcentajes de estados únicos seguían creciendo hasta el final. El aumento de datos crecía más despacio y terminaba con una brecha de generalización menor.

Es una idea útil como diagnóstico: a partir de cierto momento, entrenar más puede complicar la representación sin mejorar significativamente la validación. La red sigue cambiando por dentro, pero no necesariamente de una forma que ayude.

## La robustez cambió el orden

Realicé dos experimentos de perturbación.

Primero añadí ruido gaussiano a las imágenes de validación, sin modificar los pesos. El mejor modelo limpio no fue automáticamente el más robusto. Aumento de datos y BatchNorm se degradaron mucho con ruido gaussiano intenso a nivel de píxel. En CIFAR-10, con sigma = 0.2, conservaron aproximadamente el 49.7% y el 34.9% de su precisión limpia. El modelo base y L2 conservaron alrededor del 71.3% y el 69.0%.

Eso no convierte al modelo base en mejor. Indica que la robustez depende de la perturbación. El aumento de datos entrenaba invariancias a recortes y volteos horizontales, no a ruido gaussiano arbitrario. Un método puede mejorar la generalización limpia y seguir siendo frágil ante otra familia de corrupciones.

Después añadí ruido gaussiano directamente a los pesos de conv1, conv3 y fc1. Era una aproximación práctica a la geometría del mínimo: si una pequeña perturbación destruye la precisión, probablemente estamos en una región más aguda de la superficie de pérdida.

Aquí destacó Dropout. Con sigma = 0.15 en los pesos mantuvo buenos resultados entre capas y datasets. En CIFAR-10 conservó el 83.1% en conv1, el 77.5% en conv3 y el 86.1% en fc1. BatchNorm, pese a su buen rendimiento limpio, se degradó más en las capas convolucionales: 51.2% en conv1 y 42.0% en conv3.

El radar resume esa tensión. Cada eje se normaliza dentro del dataset; no es una escala absoluta. Muestra un perfil de precisión, robustez al ruido en datos, robustez al ruido en los pesos de conv1/conv3/fc1 y consistencia entre capas. No sirve para coronar a un ganador, sino para ver la forma de cada regularizador.

El perfil puede expresarse como un vector multiobjetivo por método y dataset:

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

El suelo en 15 mantiene visible un método débil sin fingir que vale cero. El escalado min-max por eje evita mezclar porcentajes brutos con medidas heterogéneas de robustez.

![Comparativa radar de regularizadores en precisión, robustez al ruido de datos y pesos, y consistencia entre capas, en CIFAR-10, SVHN, CIFAR-100 y FashionMNIST.](/blog-plots/regularization-radar.png)

Hay algo difícil de ignorar: ningún método llena la estrella. El aumento de datos impulsa la precisión limpia, especialmente cuando las transformaciones coinciden con invariancias de la tarea, pero no domina toda la robustez. Dropout no luce tanto en la tabla de precisión y, sin embargo, tiene una huella amplia frente al ruido en pesos. BatchNorm es fuerte en varios dominios, pero puede volverse frágil al perturbar parámetros convolucionales. L2 mantiene a menudo un espacio interno amplio; una entropía aparentemente saludable no garantiza generalización.

Me gusta este gráfico porque dificulta escribir «el regularizador X es el mejor». Obliga a preguntar: ¿en qué eje, en qué dataset y ante qué perturbación?

La conclusión no es que BatchNorm sea malo. Es que un mismo método puede ser excelente para optimizar y frágil ante cambios en los parámetros. Esa diferencia desaparece si la única columna que leemos es la precisión.

## Qué me llevo a la práctica

Al terminar, ya no veía la regularización como una clasificación de técnicas. La veía como un conjunto de sesgos con fallos diferentes.

El aumento de datos era la mejor opción para priorizar validación en imágenes limpias. Dropout destacaba cuando importaba la estabilidad de parámetros. L2 e incluso el modelo base podían resistir relativamente bien el ruido estocástico de entrada, sacrificando precisión limpia. BatchNorm era potente, pero agudo en el extractor convolucional.

Es una respuesta menos ordenada que un ranking, pero más cercana a cómo utilizaría los resultados. Para un modelo pequeño de visión con entradas limpias e invariancias bien capturadas, empezaría por aumento de datos. Si importaran compresión, poda, pesos ruidosos o pequeñas perturbaciones de hardware, volvería a mirar Dropout. Y una combinación de entropía alta, muchos estados únicos y una brecha grande me parecería una alerta, no «una representación rica» por defecto.

La respuesta a «¿qué regularizador es mejor?» era, por tanto, condicional:

\`\`\`text
si la prioridad es precisión limpia:
  aumento de datos suele ser la opción más fuerte
si la prioridad es planitud / robustez de parámetros:
  Dropout resulta más atractivo
si la prioridad es retención ante ruido de entrada:
  inspeccionar L2 y el comportamiento del modelo base
si el dataset es demasiado fácil o difícil para la arquitectura:
  la precisión puede ocultar el efecto interno
\`\`\`

El resultado principal no fue un regularizador nuevo, sino un argumento de medición. Las activaciones pueden ayudar a diagnosticar regularización insuficiente o excesiva. No sustituyen la validación; explican parte de lo que comprime.

## Qué ampliaría

Repetiría el protocolo en arquitecturas más profundas, como ResNet-18 o VGG-16. Estudiaría combinaciones de regularizadores, porque los modelos reales rara vez utilizan solo uno. También compararía similitud de representaciones con CKA, para comprobar si métricas diferentes corresponden realmente a espacios estructuralmente distintos.

A más largo plazo, me interesa una herramienta de diagnóstico automático: entrenar, extraer activaciones, calcular curvas de entropía, dispersión y estados únicos, y advertir de representaciones colapsadas o excesivamente dispersas sin esperar únicamente a la validación tardía.

Ese fue el valor del TFG para mí: dejar de ver la CNN como una caja negra que emite una cifra de precisión y empezar a verla como un sistema dinámico cuyos estados se pueden medir, comparar y cuestionar.
`,$i=`La explicación de difusión en una frase es casi demasiado limpia: añadir ruido hasta convertir una imagen en ruido gaussiano y aprender a invertir el proceso. Es una buena intuición, pero oculta la pregunta que hizo interesante este proyecto:

**¿Qué es exactamente el proceso que invertimos y de cuántas maneras podemos invertirlo?**

Trabajé en un sistema modular de generación de imágenes basado en score. No pretendía entrenar un modelo enorme de producción, sino crear una plataforma experimental donde cambiar proceso de difusión, calendario de ruido, sampler y condicionamiento sin reescribirlo todo.

El sistema admitía datasets en escala de grises y RGB, entrenaba una red de score de tipo U-Net, generaba muestras desde ruido y las evaluaba. También incluía generación condicionada por clase e imputación.

Lo que más me gustó fue que el proyecto no se quedó en un único notebook. El código de difusión se vuelve confuso cuando SDE, scheduler, sampler y visualización están mezclados. Puedes obtener imágenes sin saber si una mejora viene del proceso, del integrador, del condicionamiento o de una semilla afortunada. Quería hacer explícitas esas decisiones: si un experimento salía mal, al menos poder seguir el motivo.

## El score apunta de vuelta a los datos

El proceso directo parte de una imagen limpia x_0 y la corrompe progresivamente en x_t. En tiempo continuo puede describirse como una SDE:

\`\`\`text
dx = f(x, t) dt + g(t) dw
\`\`\`

f representa la deriva; g controla la magnitud de difusión; dw es ruido browniano. El modelo no aprende este proceso: lo elegimos nosotros.

El aprendizaje ocurre en sentido inverso. La red aproxima una función de score:

\`\`\`text
score(x_t, t) ~= gradient_x log p_t(x_t)
\`\`\`

Intuitivamente, apunta hacia regiones en las que la muestra ruidosa resulta más compatible con la distribución de datos a ese nivel de ruido. Muestrear se convierte en navegación numérica: empezar en ruido, preguntar a la red dónde están los datos e integrar hacia atrás.

Volvía continuamente a dos piezas: el objetivo de denoising score matching y la dinámica inversa. La red aprende un campo vectorial condicionado por el tiempo:

\`\`\`text
theta* = argmin_theta E_t,x0,z [
  lambda(t) || s_theta(x_t, t, y) - target_score(x_t, x0, t) ||_2^2
]

reverse SDE:
dx = [f(x,t) - g(t)^2 * s_theta(x,t)] dt + g(t) d_w_bar

probability-flow ODE:
dx = [f(x,t) - 0.5 * g(t)^2 * s_theta(x,t)] dt
\`\`\`

Por eso importaba abstraer el sampler. Euler-Maruyama, Predictor-Corrector y Probability Flow ODE no son variaciones estéticas: utilizan de maneras distintas el mismo campo de score aprendido.

El entrenamiento, muy comprimido, es:

\`\`\`text
for image x0 in dataset:
  sample time t
  sample noise z
  construct noisy image xt from the chosen SDE
  ask ScoreNet(xt, t, condition) to predict the score/noise direction
  update the network with a denoising score-matching loss
\`\`\`

Ese es el núcleo conceptual. El resto consiste en hacer explícitos y sustituibles sus bloques.

## Tres procesos directos: VE, VP y Sub-VP

El informe implementa tres familias.

**Variance Exploding (VE)** se comporta como un proceso browniano cuya varianza crece con el tiempo. No hay una deriva que empuje la muestra hacia atrás; la imagen se degrada al aumentar la dispersión. Es útil para entender las SDE basadas en score, aunque su escala de ruido puede crecer mucho.

**Variance Preserving (VP)** añade ruido controlando la varianza total. El informe lo describe mediante un proceso de tipo Ornstein-Uhlenbeck con deriva y difusión dependientes del tiempo. La imagen pierde información sin que la distribución simplemente se expanda hacia fuera.

**Sub-Variance Preserving (Sub-VP)** modifica los coeficientes de VP para hacer más progresiva la transición. Comparte bastante maquinaria con VP, pero introduce diferencias suficientes para comparar su comportamiento.

Implementar los tres dejaba clara una cosa: el proceso de difusión no es un detalle de fondo. Cambia la geometría señal-ruido del entrenamiento y el comportamiento numérico del muestreo.

## Calendarios de ruido: lineal y coseno

VP y Sub-VP necesitan un calendario que controle la velocidad de introducción del ruido. Implementé dos opciones:

- Lineal: sencillo de interpretar, con cambios directos de intensidad.
- Coseno: variación más suave y, a menudo, una degradación más natural.

Es una decisión pequeña que tiene consecuencias grandes. Demasiado ruido al principio dificulta el aprendizaje. Una corrupción demasiado suave puede dejar sin aprender el régimen de ruido alto con el que empieza la generación. El sistema se parece más a una cadena de decisiones numéricas compatibles que a un único algoritmo.

## ScoreNet y por qué encaja una U-Net

La red de score utilizaba una arquitectura de tipo U-Net con información temporal. El denoising requiere tanto textura local como contexto global para reconstruir estructuras coherentes.

Utilicé embeddings de Fourier para el tiempo y, en los casos condicionados, información de clase junto al embedding temporal. La red podía aprender:

\`\`\`text
score(x_t, t)
\`\`\`

o, con etiquetas:

\`\`\`text
score(x_t, t | y)
\`\`\`

Para generar una clase concreta, como un dígito de MNIST, cambia el campo de score. La muestra debe acercarse a imágenes plausibles que además pertenezcan a esa clase.

## Muestrear es hacer análisis numérico

Una vez entrenada la red, generar consiste en integrar. Partimos de ruido y retrocedemos por la dinámica aprendida. Implementé cuatro samplers.

**Euler-Maruyama** es el integrador estocástico básico: combina una actualización de deriva con ruido aleatorio. Es sencillo y una referencia útil, pero puede necesitar muchos pasos para obtener calidad.

**Predictor-Corrector** alterna un predictor que avanza la SDE inversa y un corrector que refina la muestra, a menudo con pasos de tipo Langevin. Puede mejorar las imágenes, pero las correcciones adicionales cuestan cómputo.

**Probability Flow ODE** sustituye el proceso inverso estocástico por una ecuación diferencial ordinaria determinista. Elimina el componente aleatorio durante el muestreo; la diversidad depende más directamente del ruido inicial.

**Exponential Integrator** utiliza exponenciales para tratar con más cuidado partes de la dinámica inversa. Con su parámetro de ruido a cero también puede volverse determinista, acercándose conceptualmente a Probability Flow ODE. Hay una restricción importante en el informe: no se utiliza VE con Exponential Integrator.

La API hacía explícitas estas elecciones:

\`\`\`text
load trained model
choose diffusion process
choose compatible sampler
choose number of steps and sampler parameters
generate a batch
plot samples
\`\`\`

Puede parecer modularidad corriente, pero el sampler forma parte del comportamiento del modelo, no solo de su implementación.

Una comprobación útil fue medir tiempos además de mirar imágenes. El siguiente gráfico procede de un experimento pequeño, no de un benchmark universal; no extrapolaría sus ratios CPU/CUDA. Muestra la forma del problema: Predictor-Corrector resulta barato en esta configuración, Euler-Maruyama es más pesado y el integrador exponencial queda entre ambos con un comportamiento distinto.

![Tiempo medio de muestreo por sampler y dispositivo en un experimento Sub-VP de MNIST con el dígito 3.](/blog-plots/diffusion-sampler-runtime.png)

La elección afecta a latencia, repetibilidad y número de pasos que podemos permitirnos. En un notebook didáctico puede quedar escondida. En un paquete reutilizable debe ser visible: el mejor sampler según una métrica puede no ser el adecuado para un flujo interactivo.

## Condicionamiento: dirigir la muestra hacia una clase

Con datasets etiquetados, el sistema permitía entrenar embeddings de clase y pedir una categoría concreta:

\`\`\`text
sample class = 3
start from Gaussian noise
run reverse process using score(x_t, t | class=3)
return images that should look like that class
\`\`\`

El informe también explica classifier-free guidance: aprender comportamiento condicionado e incondicional y combinarlos al muestrear.

\`\`\`text
guided_score =
  unconditional_score
  + guidance_scale * (conditional_score - unconditional_score)
\`\`\`

Una escala mayor empuja más hacia la condición. Con poca guía, la señal de clase es débil; con demasiada, puede reducirse la diversidad. Una observación útil fue ajustar la intensidad a lo largo del tiempo para equilibrar precisión visual y variedad.

## Imputación: edición con restricciones

La otra forma de control era imputar. La red recibe una imagen parcialmente observada y una máscara binaria de la región que falta. El proceso inverso conserva los píxeles conocidos mientras regenera lo restante.

\`\`\`text
given original image x and mask M:
  keep observed region fixed
  diffuse or initialize the missing region
  during each reverse step:
    update only the masked region with the score model
    restore observed pixels from the known image
\`\`\`

En vez de «generar una imagen», el objetivo es «completarla de forma compatible con su contexto». La distribución aprendida aporta posibilidades; la máscara limita dónde puede moverse el proceso.

![Demostración de imputación en MNIST: dígitos originales, entradas enmascaradas y reconstrucción de las regiones que faltan.](/blog-plots/diffusion-imputation.png)

La demostración es pequeña, pero distingue generación condicionada real de muestreo libre con una máscara dibujada encima. Hay que reimponer los píxeles observados durante el proceso inverso; de lo contrario, la muestra se aleja del contexto conocido. Es uno de esos detalles que separan una explicación de una herramienta.

## Evaluación: no confiar en la cuadrícula más bonita

El módulo de evaluación incorporaba tres métricas habituales.

**Bits per dimension (BPD)** estima qué tan bien explica el modelo la distribución de datos, normalizando por dimensión de imagen.

**Fréchet Inception Distance (FID)** compara estadísticas de imágenes reales y generadas en el espacio de características de Inception. Un valor menor es mejor y suele utilizarse como aproximación a semejanza distribucional y realismo.

**Inception Score (IS)** intenta premiar imágenes clasificables y diversidad entre clases.

Son imperfectas, especialmente en experimentos pequeños. Aun así, importan: las cuadrículas son muy persuasivas. Una muestra puede parecer prometedora mientras colapsa la diversidad; una métrica aceptable puede coexistir con imágenes borrosas. Hay que inspeccionar ambas cosas.

## La estructura del software

El sistema se concibió como paquete, separando:

- Definiciones de procesos de difusión.
- Calendarios de ruido.
- Arquitectura ScoreNet.
- Entrenamiento.
- Algoritmos de muestreo.
- Configuración YAML o diccionario.
- Condicionamiento e imputación.
- Evaluación.
- Notebooks de entrenamiento, generación, evaluación y ejemplos avanzados.

Un orquestador de tipo DiffusionExperiment ocultaba el cableado:

\`\`\`python
experiment = DiffusionExperiment(config)
experiment.train(dataset)
experiment.sample_and_plot(sampler="predictor_corrector")
experiment.evaluate(metrics=["bpd", "fid", "is"])
\`\`\`

También resolvía necesidades prácticas: entradas RGB o grises, normalización a [-1, 1], formato tensor de PyTorch, guardado y carga, detección CPU/GPU, tests de componentes y notebooks que ejecutan los flujos en orden.

## Qué mostraban las demostraciones

El informe describe cinco notebooks.

El primero entrenaba sobre el dígito 3 de MNIST con VE, VP y Sub-VP, y calendarios lineales o coseno. El segundo comparaba Euler-Maruyama, Predictor-Corrector, Probability Flow ODE y Exponential Integrator. El tercero pasaba a la clase de barcos de CIFAR-10. El cuarto evaluaba con BPD, FID e IS. El quinto mostraba condicionamiento e imputación sobre dígitos de MNIST.

Los resultados se planteaban con cómputo modesto. Una U-Net pequeña, entrenada desde cero durante un número limitado de pasos, no compite con grandes sistemas de difusión. Pero las imágenes eran suficientemente coherentes para mostrar relaciones aprendidas entre ruido, clase y forma visual.

![Progresión de muestras Sub-VP con Predictor-Corrector: de ruido a imágenes de barcos de CIFAR-10.](/blog-plots/diffusion-denoising-samples.png)

No presentaría estas muestras como resultado artístico. Son más útiles como evidencia de depuración. A la izquierda hay ruido; a la derecha, estructura de clase. En el medio aparecen errores de normalización, escala temporal o compatibilidad entre proceso y sampler. Cuando algo sale mal no basta con decir «el modelo es malo»: puede ser el objetivo de score, la marginal, el embedding temporal, la varianza del paso inverso o el condicionamiento.

Su valor como plataforma experimental no es «he recreado un modelo de frontera», sino tener implementadas, intercambiables y comprobables las piezas importantes de generación basada en score.

## Lo que aprendí al construirlo

La difusión se enseña a menudo como denoising repetido. Implementarla deja más clara su estructura:

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

Cada capa puede cambiar y cada cambio tiene consecuencias matemáticas y de software. VE, VP y Sub-VP definen geometrías de ruido distintas. Euler-Maruyama y Probability Flow ODE tratan de forma diferente la aleatoriedad del muestreo. Condicionamiento e imputación convierten la generación en navegación controlada.

Lo más útil fue ver cómo las matemáticas se convierten en ingeniería. Las ecuaciones describen el proceso; el diseño del paquete determina si de verdad podemos comparar variantes sin desmontar el sistema.

Ese es el tipo de proyecto generativo que me interesa: no solo una galería, sino un pequeño laboratorio donde se ven las piezas del algoritmo.
`,Wi=`En un concurso de finance-RL, lo tentador es ir directamente al agente: elegir PPO, definir acciones, entrenar y dibujar una curva de capital bonita. AthenAI me llevó en la dirección contraria.

Lo difícil no era el acrónimo del agente. Era construir un estado del que pudiera aprender sin engañarnos.

Lo enfoqué menos como «sé de finanzas» y más como un problema de representación con reglas estrictas de leakage. Cada idea debía pasar una prueba: ¿existiría esta señal al decidir o está codificando rendimiento futuro por accidente? Si no estaba claro, la variable pasaba a diagnóstico o trabajo futuro.

El universo contenía miles de archivos de algoritmos de trading propietarios, con registros OHLC intradía, y un archivo de operaciones del benchmark. Tratar cada algoritmo como un activo y asignar capital directamente era frágil:

- Muchas series eran cortas, dispersas, constantes o defectuosas.
- El universo no era estacionario.
- La predicción no debía depender de APIs macroeconómicas en directo, aunque sus etiquetas sirvieran para entrenar.

Construí un pipeline offline por capas:

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

Suena menos espectacular que «entrené un bot de trading», pero describe mejor el trabajo.

![Pipeline offline de AthenAI: archivos originales, retornos diarios, personalidad, clustering, proxies y conexión con RL y backtesting.](/blog-plots/athenai-pipeline.png)

## El concurso como problema de cartera offline

El planteamiento formal era secuencial: en cada fecha se observa el estado del universo de algoritmos y se elige una asignación de capital. La recompensa llega después mediante retornos, ajustados por riesgo y costes.

La acción sobre C unidades invertibles es un vector:

\`\`\`text
w_t in simplex(C)
sum_c w_t,c = 1
w_t,c >= 0
\`\`\`

Podemos pensarlo como un MDP con restricciones, estado reconstruido offline y acciones sobre clusters:

\`\`\`text
s_t = [cluster_features_t, proxy_scores_t, alive_mask_t, w_t-1]
a_t = w_t

r_t+1 =
  dot(w_t, R_t+1)
  - cost_rate * ||w_t - w_t-1||_1
  - risk_penalty * max(0, drawdown_t+1 - drawdown_limit)
\`\`\`

El último término no pretende ser una recompensa final de producción. Recuerda que no basta con premiar retornos puntuales: también hay que penalizar trayectorias frágiles.

Había demasiados algoritmos para un espacio de acciones manejable. La decisión central fue comprimirlos en «superactivos» basados en comportamiento antes de intentar RL.

El informe delimita el alcance: la capa final es una interfaz DQN/backtesting, no un resultado de PPO terminado. PPO y SAC son candidatos para asignación continua futura. El trabajo actual se concentra en reconstrucción, estados, clustering, proxies y estructura de RL.

## Reconstruir el panel diario

Cada archivo contiene OHLC intradía, timestamps y cierres. Primero reduzco cada serie a su último cierre del día:

\`\`\`text
P_i,t = last close observed for algorithm i on day t
\`\`\`

A partir de ahí calculo retornos diarios simples y logarítmicos:

\`\`\`text
r_i,t = clip(P_i,t / P_i,t-1 - 1, -0.50, 0.50)
l_i,t = clip(log(P_i,t) - log(P_i,t-1), -0.50, 0.50)
\`\`\`

El clipping es amplio a propósito. No elimina variaciones normales: evita que saltos de cierre defectuosos dominen estadísticas móviles, PCA y distancias.

En el análisis regenerado del informe se leyeron 14,761 archivos y se produjeron 8,879,120 filas diarias. De 13,663 identificadores con filas utilizables, 9,491 pasaron el filtro: aproximadamente el 69.5%, con mediana de 639 observaciones y cobertura de calendario del 84.6%.

Ese es el primer resultado importante. Antes del modelo existe un universo reconstruido.

## Filtrar calidad sin filtrar rendimiento futuro

El filtro no elegía algoritmos buenos. Elegía series utilizables.

\`\`\`text
accepted if:
  n_i >= 60
  coverage_i >= 0.70
  unique_closes_i > 2
  std(return_i) > 1e-9
\`\`\`

Exigía observaciones suficientes, cobertura, más de dos cierres distintos y volatilidad no despreciable. Filtrar por Sharpe, retorno o drawdown habría introducido rendimiento ex post en todo el análisis. Solo excluí series demasiado cortas, incompletas o constantes.

La distribución aceptada mantenía un pico en cero y colas gruesas: muchos algoritmos apenas se mueven un día concreto y unos pocos lo hacen de forma discreta. El informe registra retorno diario medio de aproximadamente -0.008%, desviación típica de 0.493% y cuantiles 1%/99% de -1.67% y 1.53%.

## El benchmark era una traza, no un oráculo

El archivo contenía 5,394 operaciones sobre 271 algoritmos, con mediana de permanencia de 26 días naturales. Incluía producto, volumen con signo, fechas de apertura y cierre, capital invertido, AUM y patrimonio al final del día.

Lo codifiqué como una traza de posiciones:

\`\`\`text
h_i,t = sum of signed volumes for open trades in algorithm i at time t
w_i,t = h_i,t / (epsilon + sum_k abs(h_k,t))
\`\`\`

Sirve para auditoría y comprobaciones: permite ver cómo se desplazaba el benchmark por el universo. No debe tratarse como etiqueta de una política óptima. Operaba solo 271 algoritmos y las aperturas se concentraban al final de la muestra. Es informativo, pero arriesgado como único objetivo de imitación.

## La personalidad de un algoritmo

Los algoritmos no debían ser columnas anónimas. Cada uno tiene un perfil: volatilidad, forma del drawdown, riesgo de cola, autocorrelación, momentum y estabilidad. Lo llamé personalidad estática.

Para cada algoritmo aceptado calculé:

- Media y desviación típica de retornos.
- Volatilidad anualizada.
- Ratios Sharpe y Sortino.
- Cuantiles y ratios de cola.
- Asimetría y exceso de curtosis.
- Drawdown máximo e índice ulcer.
- Profundidad media y tiempo en drawdown.
- Autocorrelación de retornos a un día.
- Autocorrelación de retornos absolutos.
- Momentum logarítmico a 120 días.
- Diagnósticos de estabilidad entre mitades de la muestra.

Las fórmulas habituales son sencillas, pero útiles:

\`\`\`text
Sharpe_i  = sqrt(252) * mean(r_i) / std(r_i)
Sortino_i = sqrt(252) * mean(r_i) / downside_std(r_i)

drawdown_i,t = P_i,t / max_previous_price_i,t - 1
max_drawdown_i = min_t drawdown_i,t
\`\`\`

El vector aportaba significado económico al clustering. Dos algoritmos con la misma media pueden tener colas, persistencia de caídas y exposición a factores completamente distintas.

## Factores internos y exposiciones

También construí factores internos. El más sencillo es el mercado del universo:

\`\`\`text
market_factor_t = mean return across alive algorithms at time t
\`\`\`

Calculé factores PCA sobre retornos estandarizados y exposiciones ridge de cada algoritmo al mercado y a esos factores. No buscaba un modelo factorial perfecto, sino añadir información de movimiento conjunto.

La entrada del clustering era aproximadamente:

\`\`\`text
algorithm_vector_i =
  [personality_i, factor_exposures_i, R2_i, residual_volatility_i]
\`\`\`

Escalé con mediana y rango intercuartílico antes de agrupar.

## Clusters de comportamiento como superactivos

La configuración principal, behavioral_k100_v1, utiliza 100 clusters sobre personalidad y diagnósticos factoriales escalados de forma robusta. También implementé una familia de clustering por correlación y embedding PCA, pero la de 100 grupos fue la compresión principal.

Los retornos se agregan sobre algoritmos vivos:

\`\`\`text
R_c,t = mean return of algorithms assigned to cluster c and alive at time t
alive_ratio_c,t = alive algorithms in cluster c at time t / total algorithms in cluster c
\`\`\`

En vez de pedir al modelo que entienda unas 9.5k series, el estado pasa a tener 100 superactivos con metadatos, características móviles y máscaras de disponibilidad. No es un cambio cosmético: es la contribución central.

![Diagnósticos de clustering: proyección PCA robusta, tamaños de grupos, riesgo-retorno y perfil de acierto del momentum.](/blog-plots/athenai-clusters.png)

Es la figura que mostraría primero en una entrevista. Explica más que «utilicé k-means». PCA ayuda a detectar outliers y movimiento conjunto. La distribución de tamaños revela si hay unos pocos grupos gigantes y muchos diminutos. Los paneles de riesgo-retorno y acierto aportan información utilizable por el estado de RL. Los clusters no son etiquetas decorativas: son el vocabulario del espacio de acciones.

## Características del estado con ventanas

Utilicé varios horizontes:

- 5 y 10 días para reacción rápida y saltos.
- 20 días para volatilidad realizada y una visión mensual.
- 60 días para proxies trimestrales de Sharpe y drawdown.
- 120 días para momentum lento de la personalidad.

Desde los retornos de clusters calculé amplitud, dispersión, colas, volatilidad, correlaciones móviles, saltos y proxies de drawdown.

\`\`\`text
breadth_t = fraction of clusters with positive return at t
dispersion_t = cross-sectional std of cluster returns at t
\`\`\`

Los regímenes de estrés suelen aparecer como patrones conjuntos: menos amplitud, más correlación, volatilidad mayor y una cola izquierda más pesada. Un retorno agregado no captura esa estructura.

![Estado interno del universo: retorno de mercado, amplitud transversal, volatilidad y correlaciones móviles reconstruidas desde los clusters.](/blog-plots/athenai-state.png)

Por eso no quería un estado formado solo por retornos recientes de cartera. Mercado, amplitud, volatilidad y correlación se mueven a ritmos distintos. La amplitud es ruidosa, pero informa de participación; la volatilidad se agrupa; las correlaciones suben y decaen. El agente debería ver esas diferencias: a veces interesa reducir rotación, otras cambiar clusters y otras desconfiar de los proxies.

## Proxies macro sin dependencia macro en directo

VIX, tipos del Tesoro y factores son útiles como contexto de entrenamiento, pero depender de APIs externas al predecir debilitaría el diseño offline.

La solución intermedia era:

\`\`\`text
during training:
  fetch external macro/factor data
  create targets
  train internal proxy models from algorithm-universe features

during prediction:
  use only internal features and trained proxy models
\`\`\`

El informe documenta varias capas.

El **proxy de saltos de VIX** intentaba predecir grandes cambios futuros en log VIX. Su AUC fue aproximadamente 0.50 +/- 0.10: casi un resultado base. La calibración mejoró el error esperado de 0.036 a 0.0007, pero no creó una señal clasificadora fuerte.

El **proxy de dirección de tipos** predecía bajada, neutralidad o subida del Treasury a 10 años en un horizonte de 10 días. Fue el más fuerte: precisión de signo de 80.6% +/- 10.8%, con diagnóstico de leakage por mezcla de etiquetas que separaba objetivos reales y barajados.

El **proxy risk-off interno** utilizaba el mínimo retorno futuro a 10 días del mercado de clusters y marcaba el decil inferior. El umbral regenerado era -0.301% y la tasa positiva 9.93%. Su AUC actual, aproximadamente 0.46 +/- 0.10, indicaba que el objetivo era útil como definición, pero el predictor todavía no era fuerte.

El **monitor de factores** agregaba variables mensuales y predecía signos de factores de tipo Fama-French, especialmente momentum. Con solo 54 observaciones mensuales se trataba como diagnóstico o ampliación, no como señal sólida de producción.

Creo que aquí el informe gana fuerza: incluye resultados negativos. No se trataba de fingir que todos los proxies funcionaban, sino de identificar qué conceptos puede reconstruir el universo y cuáles no.

## La interfaz de RL

Tras clustering y proxies, el estado se expresa como:

\`\`\`text
s_t = [
  rolling cluster features,
  internal universe state,
  proxy scores/probabilities,
  alive mask,
  previous allocation
]
\`\`\`

La asignación anterior importa porque los costes dependen de rotación:

\`\`\`text
portfolio_return_t+1 =
  dot(w_t, cluster_returns_t+1)
  - cost_rate * L1_norm(w_t - w_t-1)
\`\`\`

El backtest sigue el capital:

\`\`\`text
E_t+1 = E_t * (1 + portfolio_return_t+1)
\`\`\`

y registra Sharpe, drawdown máximo, tasa de acierto y Calmar.

El repositorio incluye estructura DQN: replay buffer, target network, selección epsilon-greedy, pérdida Smooth L1 y utilidades de backtesting. Como DQN utiliza acciones discretas, hay que discretizar el simplex: conservar asignación, desplazar peso a un cluster, pasar a efectivo o elegir cestas predefinidas.

Para asignación continua futura tendrían sentido PPO o SAC. El informe no afirma rendimiento PPO terminado, y este artículo tampoco.

## Qué mostraba el benchmark

Los retornos anuales fueron positivos en todos los años disponibles. El mejor, 2022, fue 7.13%; después, 2024 con 6.99%. El menor fue 2020 con 0.54%, teniendo en cuenta que la serie mensual empieza en junio. Componer los retornos mensuales dio un 22.95% acumulado y drawdown máximo de -1.87% a resolución mensual.

![Diagnósticos del benchmark: retornos anuales, acumulado mensual, mapa de calor mensual y drawdown realizado.](/blog-plots/athenai-benchmark.png)

Ese drawdown debe leerse con cuidado. Procede de retornos mensuales, no de capital intramensual inventado. Hay que informar de la resolución disponible, no completar sus huecos con imaginación.

## Qué consiguió realmente el proyecto

No fue una política de trading terminada. Fue un pipeline de estados y modelado auditable:

- Reconstrucción del universo en un panel diario.
- Filtro por fiabilidad, no rendimiento ex post.
- Operaciones del benchmark codificadas como traza.
- Personalidad estática de cada algoritmo aceptado.
- Compresión de unas 9.5k series en 100 clusters.
- Retornos agregados, máscaras y variables móviles.
- Entrenamiento y evaluación de proxies con controles de leakage.
- Estado expuesto a la interfaz DQN/backtesting.

La observación principal fue que el clustering cambiaba el problema de aprendizaje: miles de columnas ruidosas y dispersas se convertían en menos series coherentes, con metadatos interpretables.

## La lección

Mucho trabajo de ML aplicado se gana o se pierde antes de entrenar. Aquí las decisiones relevantes no estaban solo en el algoritmo de RL, sino en la representación:

\`\`\`text
¿Qué es un activo?
¿Qué significa estar vivo?
¿Qué filtros filtran rendimiento futuro?
¿Qué señales macro están disponibles al predecir?
¿Qué debe ver el espacio de acciones?
¿Cómo informamos de resultados no demostrados?
\`\`\`

AthenAI me enseñó a construir un sistema offline como una cadena de evidencia. Cada transformación necesita un motivo, cada objetivo necesita un análisis de leakage y cada afirmación final debe limitarse a lo que apoyan los artefactos regenerados.

Esa disciplina hace que un proyecto de concurso siga siendo útil después del concurso.
`,Gi=`Hay una diferencia importante entre leer la explicación de un algoritmo y poder seguir una de sus decisiones. Quería que Atlas ayudara a cerrar esa distancia.

La plataforma reúne teoría, ejemplos resueltos, laboratorios y práctica guiada en un mismo recorrido. Incluye IA simbólica, aprendizaje profundo e IA generativa, en inglés y español. La adopción inicial es modesta: **30+ usuarios únicos**, según la cifra que tengo actualmente. Lo tomo como motivo para escuchar, no como validación definitiva del producto.

![Contenidos de IA simbólica y recorrido de aprendizaje en Atlas.](/projects/atlas-learning.png)

## Un recorrido de aprendizaje, no una carpeta de documentos

Cada lección tiene cuatro etapas: **Entender, Explorar, Resolver y Comprobar**. La distinción importa porque cada etapa pide hacer algo diferente.

La explicación presenta el concepto y el ejemplo concreta el razonamiento. El laboratorio permite cambiar entradas e inspeccionar estados. La práctica ofrece pistas progresivas y una solución razonada. Las preguntas explicadas y la autoevaluación ayudan a encontrar lo que merece otra vuelta.

No es un sistema de corrección automática de texto libre. Las respuestas escritas son borradores para comparar con soluciones. Completar una etapa no demuestra dominio, y la interfaz no debería sugerirlo.

## Los experimentos necesitan motores reales

Una simulación no puede ser solo una animación con un nombre convincente. Si cambia una entrada, tiene que cambiar el proceso numérico o lógico. Sus estados intermedios deben poder inspeccionarse y sus límites deben quedar claros.

Los motores específicos están separados de las capas comunes de cuenta y contenido. Así puedo probar cálculos sin la interfaz y añadir una asignatura sin crear otra aplicación con otra autenticación.

\`\`\`text
manifiesto de asignatura + contenido bilingüe
  -> vistas de aprendizaje comunes
  -> motor aislado y adaptador visual
  -> progreso y preferencias de la cuenta
\`\`\`

El catálogo actual contiene **157 lecciones y 26 laboratorios interactivos**. Es una fotografía del contenido, no una promesa de cubrir cualquier tema imaginable.

## Una plataforma, no una aplicación por asignatura

La estructura común gestiona navegación, idioma, perfiles, feedback y componentes de aprendizaje. Las asignaturas gestionan su temario. Los plugins gestionan sus cálculos.

Es una restricción útil: una nueva asignatura no debería necesitar su propio sistema de progreso o su propia tarjeta de feedback. Reutilizar también hace que las mejoras lleguen a los contenidos existentes.

Los identificadores estables conservan el progreso al cambiar idioma o selección de asignaturas. Dejar una asignatura no borra lo que ya has hecho.

## El perfil pertenece a la cuenta

Atlas utiliza acceso con Google y un perfil privado en Supabase. El UUID autenticado autoriza la fila, no el nombre mostrado ni el estado guardado en el navegador.

Preferencias, borradores y progreso se guardan automáticamente. La caché del navegador ayuda a conservar cambios pendientes, pero no sustituye la autorización ni crea una identidad alternativa.

## Medir sin pedir datos innecesarios

Las analíticas y el feedback utilizan Supabase Edge Functions y PostgreSQL, separados de la identidad del perfil. El panel de informes es privado.

Los eventos no contienen nombres, correos, fotos, respuestas escritas, borradores ni credenciales. La recogida pasiva respeta desactivación y Global Privacy Control. El feedback deliberado es independiente y no activa las analíticas.

La actividad sirve para ver qué partes se abren y dónde se utiliza ayuda. No demuestra atención ni aprendizaje. Las cifras también dependen de bloqueos, preferencias y cobertura de los eventos.

## Lo siguiente

Me interesa mejorar la relación entre explicación, experimento y práctica, no añadir contenido solo para aumentar el contador. Quiero entender qué recorridos ayudan, dónde se atasca la gente y qué simulaciones hacen visible una idea difícil.

Las primeras personas que lo usan son una oportunidad para aprender de una experiencia real. Todavía no tengo una historia de impacto educativo demostrado que contar. Sí tengo un producto que se puede probar y seguir mejorando.

[Abrir Atlas](https://atlaslearning.es/)
`,Qi={"regularization-in-cnns-internal-activations":{title:"Regularización en CNN: mirar dentro de la red",subtitle:"Cómo mi TFG estudió la regularización como un cambio en la geometría de las representaciones, no solo en la curva de validación.",excerpt:"Comparé siete regularizadores en una misma CNN para estudiar activaciones ocultas, robustez y generalización.",coverAlt:"Radar de regularizadores en precisión y robustez",content:Hi},"diffusion-models-from-sdes-to-images":{title:"Modelos de difusión: de las SDE a las imágenes",subtitle:"Un recorrido por el sistema de generación basado en score que construí con procesos VE, VP y Sub-VP, y distintos samplers.",excerpt:"Una plataforma modular en PyTorch para experimentar con SDE, calendarios de ruido, samplers, condicionamiento, imputación y evaluación.",coverAlt:"Muestras de difusión que progresan de ruido a imágenes",content:$i},"athenai-competition-decision-pipeline":{title:"AthenAI: comprimir miles de algoritmos en un estado de RL",subtitle:"Un pipeline offline con clustering de algoritmos, proxies macro y límites explícitos de backtesting.",excerpt:"Reconstruí un universo diario de algoritmos, agrupé sus comportamientos en superactivos y construí el estado para RL de carteras.",coverAlt:"Diagnósticos de clustering de estrategias de AthenAI",content:Wi},"atlas-building-a-place-to-learn":{title:"Atlas: un lugar para aprender, no solo para leer",subtitle:"Las decisiones de producto e ingeniería de una plataforma interactiva y bilingüe.",excerpt:"Por qué construí Atlas alrededor de experimentos reales, componentes reutilizables y perfiles privados, y qué quiero aprender de sus primeros usuarios.",coverAlt:"Interfaz real de aprendizaje de Atlas",content:Gi}};function kr(e){return e==="en"?zn:zn.map(n=>({...n,...Qi[n.slug],displayDate:new Intl.DateTimeFormat("es-ES",{day:"numeric",month:"long",year:"numeric",timeZone:"Europe/Madrid"}).format(new Date(n.date+"T12:00:00Z"))+(n.displayDate.includes("09:00")?", 09:00":""),readTime:n.readTime.replace("min read","min de lectura")}))}function Xi(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const Yi=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ji=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ki={};function kt(e,n){return(Ki.jsx?Ji:Yi).test(e)}const Zi=/[ \t\n\f\r]/g;function ea(e){return typeof e=="object"?e.type==="text"?vt(e.value):!1:vt(e)}function vt(e){return e.replace(Zi,"")===""}class $e{constructor(n,t,r){this.normal=t,this.property=n,r&&(this.space=r)}}$e.prototype.normal={};$e.prototype.property={};$e.prototype.space=void 0;function vr(e,n){const t={},r={};for(const i of e)Object.assign(t,i.property),Object.assign(r,i.normal);return new $e(t,r,n)}function Pn(e){return e.toLowerCase()}class ne{constructor(n,t){this.attribute=t,this.property=n}}ne.prototype.attribute="";ne.prototype.booleanish=!1;ne.prototype.boolean=!1;ne.prototype.commaOrSpaceSeparated=!1;ne.prototype.commaSeparated=!1;ne.prototype.defined=!1;ne.prototype.mustUseProperty=!1;ne.prototype.number=!1;ne.prototype.overloadedBoolean=!1;ne.prototype.property="";ne.prototype.spaceSeparated=!1;ne.prototype.space=void 0;let na=0;const P=Ae(),G=Ae(),Ln=Ae(),v=Ae(),H=Ae(),Ie=Ae(),re=Ae();function Ae(){return 2**++na}const Dn=Object.freeze(Object.defineProperty({__proto__:null,boolean:P,booleanish:G,commaOrSpaceSeparated:re,commaSeparated:Ie,number:v,overloadedBoolean:Ln,spaceSeparated:H},Symbol.toStringTag,{value:"Module"})),fn=Object.keys(Dn);class Wn extends ne{constructor(n,t,r,i){let o=-1;if(super(n,t),St(this,"space",i),typeof r=="number")for(;++o<fn.length;){const a=fn[o];St(this,fn[o],(r&Dn[a])===Dn[a])}}}Wn.prototype.defined=!0;function St(e,n,t){t&&(e[n]=t)}function Fe(e){const n={},t={};for(const[r,i]of Object.entries(e.properties)){const o=new Wn(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),n[r]=o,t[Pn(r)]=r,t[Pn(o.attribute)]=r}return new $e(n,t,e.space)}const Sr=Fe({properties:{ariaActiveDescendant:null,ariaAtomic:G,ariaAutoComplete:null,ariaBusy:G,ariaChecked:G,ariaColCount:v,ariaColIndex:v,ariaColSpan:v,ariaControls:H,ariaCurrent:null,ariaDescribedBy:H,ariaDetails:null,ariaDisabled:G,ariaDropEffect:H,ariaErrorMessage:null,ariaExpanded:G,ariaFlowTo:H,ariaGrabbed:G,ariaHasPopup:null,ariaHidden:G,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:H,ariaLevel:v,ariaLive:null,ariaModal:G,ariaMultiLine:G,ariaMultiSelectable:G,ariaOrientation:null,ariaOwns:H,ariaPlaceholder:null,ariaPosInSet:v,ariaPressed:G,ariaReadOnly:G,ariaRelevant:null,ariaRequired:G,ariaRoleDescription:H,ariaRowCount:v,ariaRowIndex:v,ariaRowSpan:v,ariaSelected:G,ariaSetSize:v,ariaSort:null,ariaValueMax:v,ariaValueMin:v,ariaValueNow:v,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function Er(e,n){return n in e?e[n]:n}function Tr(e,n){return Er(e,n.toLowerCase())}const ta=Fe({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Ie,acceptCharset:H,accessKey:H,action:null,allow:null,allowFullScreen:P,allowPaymentRequest:P,allowUserMedia:P,alpha:P,alt:null,as:null,async:P,autoCapitalize:null,autoComplete:H,autoFocus:P,autoPlay:P,blocking:H,capture:null,charSet:null,checked:P,cite:null,className:H,closedBy:null,colorSpace:null,cols:v,colSpan:v,command:null,commandFor:null,content:null,contentEditable:G,controls:P,controlsList:H,coords:v|Ie,crossOrigin:null,data:null,dateTime:null,decoding:null,default:P,defer:P,dir:null,dirName:null,disabled:P,download:Ln,draggable:G,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:P,formTarget:null,headers:H,height:v,hidden:Ln,high:v,href:null,hrefLang:null,htmlFor:H,httpEquiv:H,id:null,imageSizes:null,imageSrcSet:null,inert:P,inputMode:null,integrity:null,is:null,isMap:P,itemId:null,itemProp:H,itemRef:H,itemScope:P,itemType:H,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:P,low:v,manifest:null,max:null,maxLength:v,media:null,method:null,min:null,minLength:v,multiple:P,muted:P,name:null,nonce:null,noModule:P,noValidate:P,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:P,optimum:v,pattern:null,ping:H,placeholder:null,playsInline:P,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:P,referrerPolicy:null,rel:H,required:P,reversed:P,rows:v,rowSpan:v,sandbox:H,scope:null,scoped:P,seamless:P,selected:P,shadowRootClonable:P,shadowRootCustomElementRegistry:P,shadowRootDelegatesFocus:P,shadowRootMode:null,shadowRootSerializable:P,shape:null,size:v,sizes:null,slot:null,span:v,spellCheck:G,src:null,srcDoc:null,srcLang:null,srcSet:null,start:v,step:null,style:null,tabIndex:v,target:null,title:null,translate:null,type:null,typeMustMatch:P,useMap:null,value:G,width:v,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:H,axis:null,background:null,bgColor:null,border:v,borderColor:null,bottomMargin:v,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:P,declare:P,event:null,face:null,frame:null,frameBorder:null,hSpace:v,leftMargin:v,link:null,longDesc:null,lowSrc:null,marginHeight:v,marginWidth:v,noResize:P,noHref:P,noShade:P,noWrap:P,object:null,profile:null,prompt:null,rev:null,rightMargin:v,rules:null,scheme:null,scrolling:G,standby:null,summary:null,text:null,topMargin:v,valueType:null,version:null,vAlign:null,vLink:null,vSpace:v,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:P,disablePictureInPicture:P,disableRemotePlayback:P,exportParts:Ie,part:H,prefix:null,property:null,results:v,security:null,unselectable:null},space:"html",transform:Tr}),ra=Fe({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:re,accentHeight:v,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:v,amplitude:v,arabicForm:null,ascent:v,attributeName:null,attributeType:null,azimuth:v,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:v,by:null,calcMode:null,capHeight:v,className:H,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:v,diffuseConstant:v,direction:null,display:null,dur:null,divisor:v,dominantBaseline:null,download:P,dx:null,dy:null,edgeMode:null,editable:null,elevation:v,enableBackground:null,end:null,event:null,exponent:v,externalResourcesRequired:null,fill:null,fillOpacity:v,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Ie,g2:Ie,glyphName:Ie,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:v,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:v,horizOriginX:v,horizOriginY:v,id:null,ideographic:v,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:v,k:v,k1:v,k2:v,k3:v,k4:v,kernelMatrix:re,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:v,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:v,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:v,overlineThickness:v,paintOrder:null,panose1:null,path:null,pathLength:v,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:H,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:v,pointsAtY:v,pointsAtZ:v,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:re,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:re,rev:re,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:re,requiredFeatures:re,requiredFonts:re,requiredFormats:re,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:v,specularExponent:v,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:v,strikethroughThickness:v,string:null,stroke:null,strokeDashArray:re,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:v,strokeOpacity:v,strokeWidth:null,style:null,surfaceScale:v,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:re,tabIndex:v,tableValues:null,target:null,targetX:v,targetY:v,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:re,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:v,underlineThickness:v,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:v,values:null,vAlphabetic:v,vMathematical:v,vectorEffect:null,vHanging:v,vIdeographic:v,version:null,vertAdvY:v,vertOriginX:v,vertOriginY:v,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:v,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Er}),Cr=Fe({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),Ir=Fe({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Tr}),_r=Fe({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),ia={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},aa=/[A-Z]/g,Et=/-[a-z]/g,oa=/^data[-\w.:]+$/i;function sa(e,n){const t=Pn(n);let r=n,i=ne;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&oa.test(n)){if(n.charAt(4)==="-"){const o=n.slice(5).replace(Et,ua);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=n.slice(4);if(!Et.test(o)){let a=o.replace(aa,la);a.charAt(0)!=="-"&&(a="-"+a),n="data"+a}}i=Wn}return new i(r,n)}function la(e){return"-"+e.toLowerCase()}function ua(e){return e.charAt(1).toUpperCase()}const ca=vr([Sr,ta,Cr,Ir,_r],"html"),Gn=vr([Sr,ra,Cr,Ir,_r],"svg");function da(e){return e.join(" ").trim()}var Qn={},Tt=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,pa=/\n/g,ma=/^\s*/,ha=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,fa=/^:\s*/,ga=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,ya=/^[;\s]*/,ba=/^\s+|\s+$/g,xa=`
`,Ct="/",It="*",Ce="",wa="comment",ka="declaration";function va(e,n){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var t=1,r=1;function i(g){var x=g.match(pa);x&&(t+=x.length);var S=g.lastIndexOf(xa);r=~S?g.length-S:r+g.length}function o(){var g={line:t,column:r};return function(x){return x.position=new a(g),u(),x}}function a(g){this.start=g,this.end={line:t,column:r},this.source=n.source}a.prototype.content=e;function s(g){var x=new Error(n.source+":"+t+":"+r+": "+g);if(x.reason=g,x.filename=n.source,x.line=t,x.column=r,x.source=e,!n.silent)throw x}function l(g){var x=g.exec(e);if(x){var S=x[0];return i(S),e=e.slice(S.length),x}}function u(){l(ma)}function d(g){var x;for(g=g||[];x=c();)x!==!1&&g.push(x);return g}function c(){var g=o();if(!(Ct!=e.charAt(0)||It!=e.charAt(1))){for(var x=2;Ce!=e.charAt(x)&&(It!=e.charAt(x)||Ct!=e.charAt(x+1));)++x;if(x+=2,Ce===e.charAt(x-1))return s("End of comment missing");var S=e.slice(2,x-2);return r+=2,i(S),e=e.slice(x),r+=2,g({type:wa,comment:S})}}function m(){var g=o(),x=l(ha);if(x){if(c(),!l(fa))return s("property missing ':'");var S=l(ga),y=g({type:ka,property:_t(x[0].replace(Tt,Ce)),value:S?_t(S[0].replace(Tt,Ce)):Ce});return l(ya),y}}function p(){var g=[];d(g);for(var x;x=m();)x!==!1&&(g.push(x),d(g));return g}return u(),p()}function _t(e){return e?e.replace(ba,Ce):Ce}var Sa=va,Ea=nn&&nn.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Qn,"__esModule",{value:!0});Qn.default=Ca;const Ta=Ea(Sa);function Ca(e,n){let t=null;if(!e||typeof e!="string")return t;const r=(0,Ta.default)(e),i=typeof n=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:a,value:s}=o;i?n(a,s,o):s&&(t=t||{},t[a]=s)}),t}var un={};Object.defineProperty(un,"__esModule",{value:!0});un.camelCase=void 0;var Ia=/^--[a-zA-Z0-9_-]+$/,_a=/-([a-z])/g,Aa=/^[^-]+$/,za=/^-(webkit|moz|ms|o|khtml)-/,Pa=/^-(ms)-/,La=function(e){return!e||Aa.test(e)||Ia.test(e)},Da=function(e,n){return n.toUpperCase()},At=function(e,n){return"".concat(n,"-")},Fa=function(e,n){return n===void 0&&(n={}),La(e)?e:(e=e.toLowerCase(),n.reactCompat?e=e.replace(Pa,At):e=e.replace(za,At),e.replace(_a,Da))};un.camelCase=Fa;var ja=nn&&nn.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Ra=ja(Qn),Na=un;function Fn(e,n){var t={};return!e||typeof e!="string"||(0,Ra.default)(e,function(r,i){r&&i&&(t[(0,Na.camelCase)(r,n)]=i)}),t}Fn.default=Fn;var Ma=Fn;const Oa=yr(Ma),Ar=zr("end"),Xn=zr("start");function zr(e){return n;function n(t){const r=t&&t.position&&t.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function qa(e){const n=Xn(e),t=Ar(e);if(n&&t)return{start:n,end:t}}function Be(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?zt(e.position):"start"in e||"end"in e?zt(e):"line"in e||"column"in e?jn(e):""}function jn(e){return Pt(e&&e.line)+":"+Pt(e&&e.column)}function zt(e){return jn(e&&e.start)+"-"+jn(e&&e.end)}function Pt(e){return e&&typeof e=="number"?e:1}class K extends Error{constructor(n,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",o={},a=!1;if(t&&("line"in t&&"column"in t?o={place:t}:"start"in t&&"end"in t?o={place:t}:"type"in t?o={ancestors:[t],place:t.position}:o={...t}),typeof n=="string"?i=n:!o.cause&&n&&(a=!0,i=n.message,o.cause=n),!o.ruleId&&!o.source&&typeof r=="string"){const l=r.indexOf(":");l===-1?o.ruleId=r:(o.source=r.slice(0,l),o.ruleId=r.slice(l+1))}if(!o.place&&o.ancestors&&o.ancestors){const l=o.ancestors[o.ancestors.length-1];l&&(o.place=l.position)}const s=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=s?s.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=s?s.line:void 0,this.name=Be(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}K.prototype.file="";K.prototype.name="";K.prototype.reason="";K.prototype.message="";K.prototype.stack="";K.prototype.column=void 0;K.prototype.line=void 0;K.prototype.ancestors=void 0;K.prototype.cause=void 0;K.prototype.fatal=void 0;K.prototype.place=void 0;K.prototype.ruleId=void 0;K.prototype.source=void 0;const Yn={}.hasOwnProperty,Ba=new Map,Va=/[A-Z]/g,Ua=new Set(["table","tbody","thead","tfoot","tr"]),Ha=new Set(["td","th"]),Pr="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function $a(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let r;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Za(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Ka(t,n.jsx,n.jsxs)}const i={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:r,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?Gn:ca,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},o=Lr(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function Lr(e,n,t){if(n.type==="element")return Wa(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return Ga(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return Xa(e,n,t);if(n.type==="mdxjsEsm")return Qa(e,n);if(n.type==="root")return Ya(e,n,t);if(n.type==="text")return Ja(e,n)}function Wa(e,n,t){const r=e.schema;let i=r;n.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Gn,e.schema=i),e.ancestors.push(n);const o=Fr(e,n.tagName,!1),a=eo(e,n);let s=Kn(e,n);return Ua.has(n.tagName)&&(s=s.filter(function(l){return typeof l=="string"?!ea(l):!0})),Dr(e,a,o,n),Jn(a,s),e.ancestors.pop(),e.schema=r,e.create(n,o,a,t)}function Ga(e,n){if(n.data&&n.data.estree&&e.evaluater){const r=n.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}He(e,n.position)}function Qa(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);He(e,n.position)}function Xa(e,n,t){const r=e.schema;let i=r;n.name==="svg"&&r.space==="html"&&(i=Gn,e.schema=i),e.ancestors.push(n);const o=n.name===null?e.Fragment:Fr(e,n.name,!0),a=no(e,n),s=Kn(e,n);return Dr(e,a,o,n),Jn(a,s),e.ancestors.pop(),e.schema=r,e.create(n,o,a,t)}function Ya(e,n,t){const r={};return Jn(r,Kn(e,n)),e.create(n,e.Fragment,r,t)}function Ja(e,n){return n.value}function Dr(e,n,t,r){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=r)}function Jn(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function Ka(e,n,t){return r;function r(i,o,a,s){const u=Array.isArray(a.children)?t:n;return s?u(o,a,s):u(o,a)}}function Za(e,n){return t;function t(r,i,o,a){const s=Array.isArray(o.children),l=Xn(r);return n(i,o,a,s,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}function eo(e,n){const t={};let r,i;for(i in n.properties)if(i!=="children"&&Yn.call(n.properties,i)){const o=to(e,i,n.properties[i]);if(o){const[a,s]=o;e.tableCellAlignToStyle&&a==="align"&&typeof s=="string"&&Ha.has(n.tagName)?r=s:t[a]=s}}if(r){const o=t.style||(t.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return t}function no(e,n){const t={};for(const r of n.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const a=o.expression;a.type;const s=a.properties[0];s.type,Object.assign(t,e.evaluater.evaluateExpression(s.argument))}else He(e,n.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const s=r.value.data.estree.body[0];s.type,o=e.evaluater.evaluateExpression(s.expression)}else He(e,n.position);else o=r.value===null?!0:r.value;t[i]=o}return t}function Kn(e,n){const t=[];let r=-1;const i=e.passKeys?new Map:Ba;for(;++r<n.children.length;){const o=n.children[r];let a;if(e.passKeys){const l=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(l){const u=i.get(l)||0;a=l+"-"+u,i.set(l,u+1)}}const s=Lr(e,o,a);s!==void 0&&t.push(s)}return t}function to(e,n,t){const r=sa(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=r.commaSeparated?Xi(t):da(t)),r.property==="style"){let i=typeof t=="object"?t:ro(e,String(t));return e.stylePropertyNameCase==="css"&&(i=io(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?ia[r.property]||r.property:r.attribute,t]}}function ro(e,n){try{return Oa(n,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};const r=t,i=new K("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Pr+"#cannot-parse-style-attribute",i}}function Fr(e,n,t){let r;if(!t)r={type:"Literal",value:n};else if(n.includes(".")){const i=n.split(".");let o=-1,a;for(;++o<i.length;){const s=kt(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};a=a?{type:"MemberExpression",object:a,property:s,computed:!!(o&&s.type==="Literal"),optional:!1}:s}r=a}else r=kt(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(r.type==="Literal"){const i=r.value;return Yn.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);He(e)}function He(e,n){const t=new K("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=Pr+"#cannot-handle-mdx-estrees-without-createevaluater",t}function io(e){const n={};let t;for(t in e)Yn.call(e,t)&&(n[ao(t)]=e[t]);return n}function ao(e){let n=e.replace(Va,oo);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function oo(e){return"-"+e.toLowerCase()}const gn={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},so={};function Zn(e,n){const t=so,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return jr(e,r,i)}function jr(e,n,t){if(lo(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Lt(e.children,n,t)}return Array.isArray(e)?Lt(e,n,t):""}function Lt(e,n,t){const r=[];let i=-1;for(;++i<e.length;)r[i]=jr(e[i],n,t);return r.join("")}function lo(e){return!!(e&&typeof e=="object")}const Dt=document.createElement("i");function et(e){const n="&"+e+";";Dt.innerHTML=n;const t=Dt.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function ce(e,n,t,r){const i=e.length;let o=0,a;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,t=t>0?t:0,r.length<1e4)a=Array.from(r),a.unshift(n,t),e.splice(...a);else for(t&&e.splice(n,t);o<r.length;)a=r.slice(o,o+1e4),a.unshift(n,0),e.splice(...a),o+=1e4,n+=1e4}function ie(e,n){return e.length>0?(ce(e,e.length,0,n),e):n}const Ft={}.hasOwnProperty;function Rr(e){const n={};let t=-1;for(;++t<e.length;)uo(n,e[t]);return n}function uo(e,n){let t;for(t in n){const i=(Ft.call(e,t)?e[t]:void 0)||(e[t]={}),o=n[t];let a;if(o)for(a in o){Ft.call(i,a)||(i[a]=[]);const s=o[a];co(i[a],Array.isArray(s)?s:s?[s]:[])}}}function co(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);ce(e,0,0,r)}function Nr(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function de(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Z=ke(/[A-Za-z]/),J=ke(/[\dA-Za-z]/),po=ke(/[#-'*+\--9=?A-Z^-~]/);function tn(e){return e!==null&&(e<32||e===127)}const Rn=ke(/\d/),mo=ke(/[\dA-Fa-f]/),ho=ke(/[!-/:-@[-`{-~]/);function z(e){return e!==null&&e<-2}function $(e){return e!==null&&(e<0||e===32)}function F(e){return e===-2||e===-1||e===32}const cn=ke(new RegExp("\\p{P}|\\p{S}","u")),_e=ke(/\s/);function ke(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function je(e){const n=[];let t=-1,r=0,i=0;for(;++t<e.length;){const o=e.charCodeAt(t);let a="";if(o===37&&J(e.charCodeAt(t+1))&&J(e.charCodeAt(t+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){const s=e.charCodeAt(t+1);o<56320&&s>56319&&s<57344?(a=String.fromCharCode(o,s),i=1):a="�"}else a=String.fromCharCode(o);a&&(n.push(e.slice(r,t),encodeURIComponent(a)),r=t+i+1,a=""),i&&(t+=i,i=0)}return n.join("")+e.slice(r)}function O(e,n,t,r){const i=r?r-1:1/0;let o=0;return a;function a(l){return F(l)?(e.enter(t),s(l)):n(l)}function s(l){return F(l)&&o++<i?(e.consume(l),s):(e.exit(t),n(l))}}function Mr(e,n,t,r,i,o){let a=0;return s;function s(d){return F(d)?(e.enter(r),l(d)):u(d)}function l(d){return F(d)&&a<o?(e.consume(d),a++,l):(e.exit(r),u(d))}function u(d){return a>=i?n(d):t(d)}}const fo={tokenize:go};function go(e){const n=e.attempt(this.parser.constructs.contentInitial,r,i);let t;return n;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),O(e,n,"linePrefix")}function i(s){return e.enter("paragraph"),o(s)}function o(s){const l=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=l),t=l,a(s)}function a(s){if(s===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(s);return}return z(s)?(e.consume(s),e.exit("chunkText"),o):(e.consume(s),a)}}let rn=class{constructor(){this.index=new Map,this.map=[]}add(n,t,r){jt(this,n,t,r,!1)}addBefore(n,t,r){jt(this,n,t,r,!0)}consume(n){if(this.map.sort(function(o,a){return o[0]-a[0]}),this.map.length===0)return;let t=this.map.length;const r=[];for(;t>0;)t-=1,r.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];r.push(n.slice()),n.length=0;let i=r.pop();for(;i;){for(const o of i)n.push(o);i=r.pop()}this.map.length=0,this.index.clear()}};function jt(e,n,t,r,i){if(t===0&&r.length===0)return;const o=e.index.get(n);if(o){o[1]+=t,i?(r.push(...o[2]),o[2]=r):o[2].push(...r);return}const a=[n,t,r];e.map.push(a),e.index.set(n,a)}const yo={tokenize:bo},Rt={tokenize:xo};function bo(e){const n=this,t=[];let r=0,i,o,a;return s;function s(E){if(r<t.length){const D=t[r];return n.containerState=D[1],e.attempt(D[0].continuation,l,u)(E)}return u(E)}function l(E){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&C();const D=n.events.length;let j=D,k;for(;j--;)if(n.events[j][0]==="exit"&&n.events[j][1].type==="chunkFlow"){k=n.events[j][1].end;break}y(r);let R=D;for(;R<n.events.length;)n.events[R][1].end={...k},R++;const q=new rn;return q.add(j+1,0,n.events.slice(D)),q.add(D,R-D,[]),q.consume(n.events),u(E)}return s(E)}function u(E){if(r===t.length){if(!i)return m(E);if(i.currentConstruct&&i.currentConstruct.concrete)return g(E);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(Rt,d,c)(E)}function d(E){return i&&C(),y(r),m(E)}function c(E){return n.parser.lazy[n.now().line]=r!==t.length,a=n.now().offset,g(E)}function m(E){return n.containerState={},e.attempt(Rt,p,g)(E)}function p(E){return r++,t.push([n.currentConstruct,n.containerState]),m(E)}function g(E){if(E===null){i&&C(),y(0),e.consume(E);return}return i=i||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),x(E)}function x(E){if(E===null){S(e.exit("chunkFlow"),!0),y(0),e.consume(E);return}return z(E)?(e.consume(E),S(e.exit("chunkFlow")),r=0,n.interrupt=void 0,s):(e.consume(E),x)}function S(E,D){const j=n.sliceStream(E);if(D&&j.push(null),E.previous=o,o&&(o.next=E),o=E,i.defineSkip(E.start),i.write(j),n.parser.lazy[E.start.line]){let k=i.events.length;for(;k--;)if(i.events[k][1].start.offset<a&&(!i.events[k][1].end||i.events[k][1].end.offset>a))return;const R=n.events.length;let q=R,B,b;for(;q--;)if(n.events[q][0]==="exit"&&n.events[q][1].type==="chunkFlow"){if(B){b=n.events[q][1].end;break}B=!0}for(y(r),k=R;k<n.events.length;)n.events[k][1].end={...b},k++;const _=new rn;_.add(q+1,0,n.events.slice(R)),_.add(R,k-R,[]),_.consume(n.events)}}function y(E){let D=t.length;for(;D-- >E;){const j=t[D];n.containerState=j[1],j[0].exit.call(n,e)}t.length=E}function C(){i.write([null]),o=void 0,i=void 0,n.containerState._closeFlow=void 0}}function xo(e,n,t){return O(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function an(e){if(e===null||$(e)||_e(e))return 1;if(cn(e))return 2}function dn(e,n,t){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(n=o(n,t),r.push(o))}return n}const Nn={name:"attention",resolveAll:wo,tokenize:ko};function wo(e,n){let t=-1,r;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){let i=t;for(;i--;)if(e[i][0]==="exit"&&e[i][1].type==="attentionSequence"&&e[i][1]._open&&n.sliceSerialize(e[i][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[i][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;const o=e[i][1].end.offset-e[i][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1,a={...e[i][1].end},s={...e[t][1].start};Nt(a,-o),Nt(s,o);const l={type:o>1?"strongSequence":"emphasisSequence",start:a,end:{...e[i][1].end}},u={type:o>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:s},d={type:o>1?"strongText":"emphasisText",start:{...e[i][1].end},end:{...e[t][1].start}},c={type:o>1?"strong":"emphasis",start:{...l.start},end:{...u.end}};e[i][1].end={...l.start},e[t][1].start={...u.end},r=[],e[i][1].end.offset-e[i][1].start.offset&&(r=ie(r,[["enter",e[i][1],n],["exit",e[i][1],n]])),r=ie(r,[["enter",c,n],["enter",l,n],["exit",l,n],["enter",d,n]]),r=ie(r,dn(n.parser.constructs.insideSpan.null,e.slice(i+1,t),n)),r=ie(r,[["exit",d,n],["enter",u,n],["exit",u,n],["exit",c,n]]);let m=0;e[t][1].end.offset-e[t][1].start.offset&&(m=2,r=ie(r,[["enter",e[t][1],n],["exit",e[t][1],n]])),ce(e,i-1,t-i+3,r),t=i+r.length-m-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function ko(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=an(r);let o;return a;function a(l){return o=l,e.enter("attentionSequence"),s(l)}function s(l){if(l===o)return e.consume(l),s;const u=e.exit("attentionSequence"),d=an(l),c=!d||d===2&&i||t.includes(l)&&l!==42&&l!==95,m=!i||i===2&&d||t.includes(r)&&r!==42&&r!==95;return u._open=!!(o===42?c:c&&(i||!m)),u._close=!!(o===42?m:m&&(d||!c)),n(l)}}function Nt(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const vo={name:"autolink",tokenize:So};function So(e,n,t){let r=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(p){return Z(p)?(e.consume(p),a):p===64?t(p):u(p)}function a(p){return p===43||p===45||p===46||J(p)?(r=1,s(p)):u(p)}function s(p){return p===58?(e.consume(p),r=0,l):(p===43||p===45||p===46||J(p))&&r++<32?(e.consume(p),s):(r=0,u(p))}function l(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):p===null||p===32||p===60||tn(p)?t(p):(e.consume(p),l)}function u(p){return p===64?(e.consume(p),d):po(p)?(e.consume(p),u):t(p)}function d(p){return J(p)?c(p):t(p)}function c(p){return p===46?(e.consume(p),r=0,d):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):m(p)}function m(p){if((p===45||J(p))&&r++<63){const g=p===45?m:c;return e.consume(p),g}return t(p)}}const We={partial:!0,tokenize:Eo};function Eo(e,n,t){return r;function r(o){return F(o)?O(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||z(o)?n(o):t(o)}}const Or={continuation:{tokenize:Co},exit:Io,name:"blockQuote",tokenize:To};function To(e,n,t){const r=this;return i;function i(a){if(a===62){const s=r.containerState;return s.open||(e.enter("blockQuote",{_container:!0}),s.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return t(a)}function o(a){return F(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(a))}}function Co(e,n,t){const r=this;return i;function i(a){return F(a)?O(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(Or,n,t)(a)}}function Io(e){e.exit("blockQuote")}const qr={name:"characterEscape",tokenize:_o};function _o(e,n,t){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return ho(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(o)}}const Br={name:"characterReference",tokenize:Ao};function Ao(e,n,t){const r=this;let i=0,o,a;return s;function s(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),l}function l(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,a=J,d(c))}function u(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=mo,d):(e.enter("characterReferenceValue"),o=7,a=Rn,d(c))}function d(c){if(c===59&&i){const m=e.exit("characterReferenceValue");return a===J&&!et(r.sliceSerialize(m))?t(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return a(c)&&i++<o?(e.consume(c),d):t(c)}}const Mn={partial:!0,tokenize:zo};function zo(e,n,t){const r=this;return i;function i(a){return a===null?t(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return r.parser.lazy[r.now().line]?t(a):n(a)}}const Mt={concrete:!0,name:"codeFenced",tokenize:Po};function Po(e,n,t){const r=this,i={partial:!0,tokenize:j};let o=0,a=0,s;return l;function l(k){return u(k)}function u(k){const R=r.events[r.events.length-1];return o=R&&R[1].type==="linePrefix"?R[2].sliceSerialize(R[1],!0).length:0,s=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(k)}function d(k){return k===s?(a++,e.consume(k),d):a<3?t(k):(e.exit("codeFencedFenceSequence"),F(k)?O(e,c,"whitespace")(k):c(k))}function c(k){return k===null||z(k)?(e.exit("codeFencedFence"),r.interrupt?n(k):e.check(Mn,x,D)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),m(k))}function m(k){return k===null||z(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(k)):F(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),O(e,p,"whitespace")(k)):k===96&&k===s?t(k):(e.consume(k),m)}function p(k){return k===null||z(k)?c(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(k))}function g(k){return k===null||z(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(k)):k===96&&k===s?t(k):(e.consume(k),g)}function x(k){return e.attempt(i,D,S)(k)}function S(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),y}function y(k){return o>0&&F(k)?O(e,C,"linePrefix",o+1)(k):C(k)}function C(k){return k===null||z(k)?e.check(Mn,x,D)(k):(e.enter("codeFlowValue"),E(k))}function E(k){return k===null||z(k)?(e.exit("codeFlowValue"),C(k)):(e.consume(k),E)}function D(k){return e.exit("codeFenced"),n(k)}function j(k,R,q){let B=0;return b;function b(M){return k.enter("lineEnding"),k.consume(M),k.exit("lineEnding"),_}function _(M){return k.enter("codeFencedFence"),F(M)?O(k,A,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(M):A(M)}function A(M){return M===s?(k.enter("codeFencedFenceSequence"),V(M)):q(M)}function V(M){return M===s?(B++,k.consume(M),V):B>=a?(k.exit("codeFencedFenceSequence"),F(M)?O(k,W,"whitespace")(M):W(M)):q(M)}function W(M){return M===null||z(M)?(k.exit("codeFencedFence"),R(M)):q(M)}}}const yn={name:"codeIndented",tokenize:Do},Lo={partial:!0,tokenize:Fo};function Do(e,n,t){return r;function r(s){return e.enter("codeIndented"),Mr(e,i,t,"linePrefix",4,4)(s)}function i(s){return s===null?a(s):z(s)?e.attempt(Lo,i,a)(s):(e.enter("codeFlowValue"),o(s))}function o(s){return s===null||z(s)?(e.exit("codeFlowValue"),i(s)):(e.consume(s),o)}function a(s){return e.exit("codeIndented"),n(s)}}function Fo(e,n,t){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?t(a):z(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):Mr(e,n,o,"linePrefix",4,4)(a)}function o(a){return z(a)?i(a):t(a)}}const jo={name:"codeText",previous:No,resolve:Ro,tokenize:Mo};function Ro(e){let n=e.length-4,t=3,r,i;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)i===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(i=r):(r===n||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),n-=r-i-2,r=i+2),i=void 0);return e}function No(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Mo(e,n,t){let r=0,i,o;return a;function a(c){return e.enter("codeText"),e.enter("codeTextSequence"),s(c)}function s(c){return c===96?(e.consume(c),r++,s):(e.exit("codeTextSequence"),l(c))}function l(c){return c===null?t(c):c===32?(e.enter("space"),e.consume(c),e.exit("space"),l):c===96?(o=e.enter("codeTextSequence"),i=0,d(c)):z(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),l):(e.enter("codeTextData"),u(c))}function u(c){return c===null||c===32||c===96||z(c)?(e.exit("codeTextData"),l(c)):(e.consume(c),u)}function d(c){return c===96?(e.consume(c),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(c)):(o.type="codeTextData",u(c))}}class Oo{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,t,r){const i=t||0;this.setCursor(Math.trunc(n));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Oe(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),Oe(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),Oe(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);Oe(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);Oe(this.left,t.reverse())}}}function Oe(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function Vr(e){const n={};let t=-1,r,i,o,a,s,l,u;const d=new Oo(e);for(;++t<d.length;){for(;t in n;)t=n[t];if(r=d.get(t),t&&r[1].type==="chunkFlow"&&d.get(t-1)[1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,o=0,o<l.length&&l[o][1].type==="lineEndingBlank"&&(o+=2),o<l.length&&l[o][1].type==="content"))for(;++o<l.length&&l[o][1].type!=="content";)l[o][1].type==="chunkText"&&(l[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,qo(d,t)),t=n[t],u=!0);else if(r[1]._container){for(o=t,i=void 0;o--;)if(a=d.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},s=d.slice(i,t),s.unshift(r),d.splice(i,t-i+1,s))}}return ce(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function qo(e,n){const t=e.get(n)[1],r=e.get(n)[2];let i=n-1;const o=[];let a=t._tokenizer;a||(a=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const s=a.events,l=[],u={};let d,c,m=-1,p=t,g=0,x=0;const S=[x];for(;p;){for(;e.get(++i)[1]!==p;);o.push(i),p._tokenizer||(d=r.sliceStream(p),p.next||d.push(null),c&&a.defineSkip(p.start),p._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),p._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),c=p,p=p.next}for(p=t;++m<s.length;)s[m][0]==="exit"&&s[m-1][0]==="enter"&&s[m][1].type===s[m-1][1].type&&s[m][1].start.line!==s[m][1].end.line&&(x=m+1,S.push(x),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(a.events=[],p?(p._tokenizer=void 0,p.previous=void 0):S.pop(),m=S.length;m--;){const y=s.slice(S[m],S[m+1]),C=o.pop();l.push([C,C+y.length-1]),e.splice(C,2,y)}for(l.reverse(),m=-1;++m<l.length;)u[g+l[m][0]]=g+l[m][1],g+=l[m][1]-l[m][0]-1;return u}const Bo={resolve:Uo,tokenize:Ho},Vo={partial:!0,tokenize:$o};function Uo(e){return Vr(e),e}function Ho(e,n){let t;return r;function r(s){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),i(s)}function i(s){return s===null?o(s):z(s)?e.check(Vo,a,o)(s):(e.consume(s),i)}function o(s){return e.exit("chunkContent"),e.exit("content"),n(s)}function a(s){return e.consume(s),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function $o(e,n,t){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),O(e,o,"linePrefix")}function o(a){if(a===null||z(a))return t(a);const s=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?n(a):e.interrupt(r.parser.constructs.flow,t,n)(a)}}function Ur(e,n,t,r,i,o,a,s,l){const u=l||Number.POSITIVE_INFINITY;let d=0;return c;function c(y){return y===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(y),e.exit(o),m):y===null||y===32||y===41||tn(y)?t(y):(e.enter(r),e.enter(a),e.enter(s),e.enter("chunkString",{contentType:"string"}),x(y))}function m(y){return y===62?(e.enter(o),e.consume(y),e.exit(o),e.exit(i),e.exit(r),n):(e.enter(s),e.enter("chunkString",{contentType:"string"}),p(y))}function p(y){return y===62?(e.exit("chunkString"),e.exit(s),m(y)):y===null||y===60||z(y)?t(y):(e.consume(y),y===92?g:p)}function g(y){return y===60||y===62||y===92?(e.consume(y),p):p(y)}function x(y){return!d&&(y===null||y===41||$(y))?(e.exit("chunkString"),e.exit(s),e.exit(a),e.exit(r),n(y)):d<u&&y===40?(e.consume(y),d++,x):y===41?(e.consume(y),d--,x):y===null||y===32||y===40||tn(y)?t(y):(e.consume(y),y===92?S:x)}function S(y){return y===40||y===41||y===92?(e.consume(y),x):x(y)}}function Hr(e,n,t,r,i,o){const a=this;let s=0,l;return u;function u(p){return e.enter(r),e.enter(i),e.consume(p),e.exit(i),e.enter(o),d}function d(p){return s>999||p===null||p===91||p===93&&!l||p===94&&!s&&"_hiddenFootnoteSupport"in a.parser.constructs?t(p):p===93?(e.exit(o),e.enter(i),e.consume(p),e.exit(i),e.exit(r),n):z(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),c(p))}function c(p){return p===null||p===91||p===93||z(p)||s++>999?(e.exit("chunkString"),d(p)):(e.consume(p),l||(l=!F(p)),p===92?m:c)}function m(p){return p===91||p===92||p===93?(e.consume(p),s++,c):c(p)}}function $r(e,n,t,r,i,o){let a;return s;function s(m){return m===34||m===39||m===40?(e.enter(r),e.enter(i),e.consume(m),e.exit(i),a=m===40?41:m,l):t(m)}function l(m){return m===a?(e.enter(i),e.consume(m),e.exit(i),e.exit(r),n):(e.enter(o),u(m))}function u(m){return m===a?(e.exit(o),l(a)):m===null?t(m):z(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),O(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(m))}function d(m){return m===a||m===null||z(m)?(e.exit("chunkString"),u(m)):(e.consume(m),m===92?c:d)}function c(m){return m===a||m===92?(e.consume(m),d):d(m)}}function Ve(e,n){let t;return r;function r(i){return z(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t=!0,r):F(i)?O(e,r,t?"linePrefix":"lineSuffix")(i):n(i)}}const Wo={name:"definition",tokenize:Qo},Go={partial:!0,tokenize:Xo};function Qo(e,n,t){const r=this;let i;return o;function o(p){return e.enter("definition"),a(p)}function a(p){return Hr.call(r,e,s,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function s(p){return i=de(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),l):t(p)}function l(p){return $(p)?Ve(e,u)(p):u(p)}function u(p){return Ur(e,d,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function d(p){return e.attempt(Go,c,c)(p)}function c(p){return F(p)?O(e,m,"whitespace")(p):m(p)}function m(p){return p===null||z(p)?(e.exit("definition"),r.parser.defined.push(i),n(p)):t(p)}}function Xo(e,n,t){return r;function r(s){return $(s)?Ve(e,i)(s):t(s)}function i(s){return $r(e,o,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(s)}function o(s){return F(s)?O(e,a,"whitespace")(s):a(s)}function a(s){return s===null||z(s)?n(s):t(s)}}const Yo={name:"hardBreakEscape",tokenize:Jo};function Jo(e,n,t){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return z(o)?(e.exit("hardBreakEscape"),n(o)):t(o)}}const Ko={name:"headingAtx",resolve:Zo,tokenize:es};function Zo(e,n){let t=e.length-2,r=3;if(e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r){const i={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},o={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"};ce(e,r,t-r+1,[["enter",i,n],["enter",o,n],["exit",o,n],["exit",i,n]])}return e}function es(e,n,t){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||$(d)?(e.exit("atxHeadingSequence"),s(d)):t(d)}function s(d){return d===35?(e.enter("atxHeadingSequence"),l(d)):d===null||z(d)?(e.exit("atxHeading"),n(d)):F(d)?O(e,s,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function l(d){return d===35?(e.consume(d),l):(e.exit("atxHeadingSequence"),s(d))}function u(d){return d===null||d===35||$(d)?(e.exit("atxHeadingText"),s(d)):(e.consume(d),u)}}const ns=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Ot=["pre","script","style","textarea"],ts={concrete:!0,name:"htmlFlow",resolveTo:is,tokenize:as},rs={partial:!0,tokenize:os};function is(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function as(e,n,t){const r=this;let i,o,a,s,l;return u;function u(f){return d(f)}function d(f){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(f),c}function c(f){return f===33?(e.consume(f),m):f===47?(e.consume(f),o=!0,x):f===63?(e.consume(f),i=3,r.interrupt?n:h):Z(f)?(e.consume(f),a=String.fromCharCode(f),S):t(f)}function m(f){return f===45?(e.consume(f),i=2,p):f===91?(e.consume(f),i=5,s=0,g):Z(f)?(e.consume(f),i=4,r.interrupt?n:h):t(f)}function p(f){return f===45?(e.consume(f),r.interrupt?n:h):t(f)}function g(f){const se="CDATA[";return f===se.charCodeAt(s++)?(e.consume(f),s===se.length?r.interrupt?n:A:g):t(f)}function x(f){return Z(f)?(e.consume(f),a=String.fromCharCode(f),S):t(f)}function S(f){if(f===null||f===47||f===62||$(f)){const se=f===47,ve=a.toLowerCase();return!se&&!o&&Ot.includes(ve)?(i=1,r.interrupt?n(f):A(f)):ns.includes(a.toLowerCase())?(i=6,se?(e.consume(f),y):r.interrupt?n(f):A(f)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(f):o?C(f):E(f))}return f===45||J(f)?(e.consume(f),a+=String.fromCharCode(f),S):t(f)}function y(f){return f===62?(e.consume(f),r.interrupt?n:A):t(f)}function C(f){return F(f)?(e.consume(f),C):b(f)}function E(f){return f===47?(e.consume(f),b):f===58||f===95||Z(f)?(e.consume(f),D):F(f)?(e.consume(f),E):b(f)}function D(f){return f===45||f===46||f===58||f===95||J(f)?(e.consume(f),D):j(f)}function j(f){return f===61?(e.consume(f),k):F(f)?(e.consume(f),j):E(f)}function k(f){return f===null||f===60||f===61||f===62||f===96?t(f):f===34||f===39?(e.consume(f),l=f,R):F(f)?(e.consume(f),k):q(f)}function R(f){return f===l?(e.consume(f),l=null,B):f===null||z(f)?t(f):(e.consume(f),R)}function q(f){return f===null||f===34||f===39||f===47||f===60||f===61||f===62||f===96||$(f)?j(f):(e.consume(f),q)}function B(f){return f===47||f===62||F(f)?E(f):t(f)}function b(f){return f===62?(e.consume(f),_):t(f)}function _(f){return f===null||z(f)?A(f):F(f)?(e.consume(f),_):t(f)}function A(f){return f===45&&i===2?(e.consume(f),Y):f===60&&i===1?(e.consume(f),Q):f===62&&i===4?(e.consume(f),oe):f===63&&i===3?(e.consume(f),h):f===93&&i===5?(e.consume(f),he):z(f)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(rs,fe,V)(f)):f===null||z(f)?(e.exit("htmlFlowData"),V(f)):(e.consume(f),A)}function V(f){return e.check(Mn,W,fe)(f)}function W(f){return e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),M}function M(f){return f===null||z(f)?V(f):(e.enter("htmlFlowData"),A(f))}function Y(f){return f===45?(e.consume(f),h):A(f)}function Q(f){return f===47?(e.consume(f),a="",ae):A(f)}function ae(f){if(f===62){const se=a.toLowerCase();return Ot.includes(se)?(e.consume(f),oe):A(f)}return Z(f)&&a.length<8?(e.consume(f),a+=String.fromCharCode(f),ae):A(f)}function he(f){return f===93?(e.consume(f),h):A(f)}function h(f){return f===62?(e.consume(f),oe):f===45&&i===2?(e.consume(f),h):A(f)}function oe(f){return f===null||z(f)?(e.exit("htmlFlowData"),fe(f)):(e.consume(f),oe)}function fe(f){return e.exit("htmlFlow"),n(f)}}function os(e,n,t){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(We,n,t)}}const ss={name:"htmlText",tokenize:ls};function ls(e,n,t){const r=this;let i,o,a;return s;function s(h){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(h),l}function l(h){return h===33?(e.consume(h),u):h===47?(e.consume(h),j):h===63?(e.consume(h),E):Z(h)?(e.consume(h),q):t(h)}function u(h){return h===45?(e.consume(h),d):h===91?(e.consume(h),o=0,g):Z(h)?(e.consume(h),C):t(h)}function d(h){return h===45?(e.consume(h),p):t(h)}function c(h){return h===null?t(h):h===45?(e.consume(h),m):z(h)?(a=c,Q(h)):(e.consume(h),c)}function m(h){return h===45?(e.consume(h),p):c(h)}function p(h){return h===62?Y(h):h===45?m(h):c(h)}function g(h){const oe="CDATA[";return h===oe.charCodeAt(o++)?(e.consume(h),o===oe.length?x:g):t(h)}function x(h){return h===null?t(h):h===93?(e.consume(h),S):z(h)?(a=x,Q(h)):(e.consume(h),x)}function S(h){return h===93?(e.consume(h),y):x(h)}function y(h){return h===62?Y(h):h===93?(e.consume(h),y):x(h)}function C(h){return h===null||h===62?Y(h):z(h)?(a=C,Q(h)):(e.consume(h),C)}function E(h){return h===null?t(h):h===63?(e.consume(h),D):z(h)?(a=E,Q(h)):(e.consume(h),E)}function D(h){return h===62?Y(h):E(h)}function j(h){return Z(h)?(e.consume(h),k):t(h)}function k(h){return h===45||J(h)?(e.consume(h),k):R(h)}function R(h){return z(h)?(a=R,Q(h)):F(h)?(e.consume(h),R):Y(h)}function q(h){return h===45||J(h)?(e.consume(h),q):h===47||h===62||$(h)?B(h):t(h)}function B(h){return h===47?(e.consume(h),Y):h===58||h===95||Z(h)?(e.consume(h),b):z(h)?(a=B,Q(h)):F(h)?(e.consume(h),B):Y(h)}function b(h){return h===45||h===46||h===58||h===95||J(h)?(e.consume(h),b):_(h)}function _(h){return h===61?(e.consume(h),A):z(h)?(a=_,Q(h)):F(h)?(e.consume(h),_):B(h)}function A(h){return h===null||h===60||h===61||h===62||h===96?t(h):h===34||h===39?(e.consume(h),i=h,V):z(h)?(a=A,Q(h)):F(h)?(e.consume(h),A):(e.consume(h),W)}function V(h){return h===i?(e.consume(h),i=void 0,M):h===null?t(h):z(h)?(a=V,Q(h)):(e.consume(h),V)}function W(h){return h===null||h===34||h===39||h===60||h===61||h===96?t(h):h===47||h===62||$(h)?B(h):(e.consume(h),W)}function M(h){return h===47||h===62||$(h)?B(h):t(h)}function Y(h){return h===62?(e.consume(h),e.exit("htmlTextData"),e.exit("htmlText"),n):t(h)}function Q(h){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),ae}function ae(h){return F(h)?O(e,he,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h):he(h)}function he(h){return e.enter("htmlTextData"),a(h)}}const nt={name:"labelEnd",resolveAll:ps,resolveTo:ms,tokenize:hs},us={tokenize:fs},cs={tokenize:gs},ds={tokenize:ys};function ps(e){let n=-1;const t=[];for(;++n<e.length;){const r=e[n][1];if(t.push(e[n]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",n+=i}}return e.length!==t.length&&ce(e,0,e.length,t),e}function ms(e,n){let t=e.length,r=0,i,o,a;for(;t--;){const d=e[t][1];if(i){if(d.type==="link"||d.type==="labelLink"&&d._inactive)break;e[t][0]==="enter"&&d.type==="labelLink"&&(d._inactive=!0)}else if(o){if(e[t][0]==="enter"&&(d.type==="labelImage"||d.type==="labelLink")&&!d._balanced&&(i=t,d.type!=="labelLink")){r=2;break}}else d.type==="labelEnd"&&(o=t)}const s={type:e[i][1].type==="labelLink"?"link":"image",start:{...e[i][1].start},end:{...e[e.length-1][1].end}},l={type:"label",start:{...e[i][1].start},end:{...e[o][1].end}},u={type:"labelText",start:{...e[i+r+2][1].end},end:{...e[o-2][1].start}};return a=[["enter",s,n],["enter",l,n]],a=ie(a,e.slice(i+1,i+r+3)),a=ie(a,[["enter",u,n]]),a=ie(a,dn(n.parser.constructs.insideSpan.null,e.slice(i+r+4,o-3),n)),a=ie(a,[["exit",u,n],e[o-2],e[o-1],["exit",l,n]]),a=ie(a,e.slice(o+1)),a=ie(a,[["exit",s,n]]),ce(e,i,e.length,a),e}function hs(e,n,t){const r=this,i=r._labelStarts;let o,a;if(i){for(;i.length>0&&i[i.length-1]._balanced;)i.pop();o=i[i.length-1]}return s;function s(m){return o?o._inactive?c(m):(a=r.parser.defined.includes(de(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(m),e.exit("labelMarker"),e.exit("labelEnd"),l):t(m)}function l(m){return m===40?e.attempt(us,d,a?d:c)(m):m===91?e.attempt(cs,d,a?u:c)(m):a?d(m):c(m)}function u(m){return e.attempt(ds,d,c)(m)}function d(m){return i.pop(),n(m)}function c(m){return o._balanced=!0,t(m)}}function fs(e,n,t){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),i}function i(c){return $(c)?Ve(e,o)(c):o(c)}function o(c){return c===41?d(c):Ur(e,a,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function a(c){return $(c)?Ve(e,l)(c):d(c)}function s(c){return t(c)}function l(c){return c===34||c===39||c===40?$r(e,u,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):d(c)}function u(c){return $(c)?Ve(e,d)(c):d(c)}function d(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),n):t(c)}}function gs(e,n,t){const r=this;return i;function i(s){return Hr.call(r,e,o,a,"reference","referenceMarker","referenceString")(s)}function o(s){return r.parser.defined.includes(de(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(s):t(s)}function a(s){return t(s)}}function ys(e,n,t){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),n):t(o)}}const bs={name:"labelStartImage",resolveAll:nt.resolveAll,tokenize:xs};function xs(e,n,t){const r=this;let i;return o;function o(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),a}function a(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),i=e.exit("labelImage"),s):t(l)}function s(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(l):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),n(l))}}const ws={name:"labelStartLink",resolveAll:nt.resolveAll,tokenize:ks};function ks(e,n,t){const r=this;let i;return o;function o(s){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),i=e.exit("labelLink"),a}function a(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(s):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),n(s))}}const bn={name:"lineEnding",tokenize:vs};function vs(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),O(e,n,"linePrefix")}}const Ze={name:"thematicBreak",tokenize:Ss};function Ss(e,n,t){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,s(u)}function s(u){return u===i?(e.enter("thematicBreakSequence"),l(u)):r>=3&&(u===null||z(u))?(e.exit("thematicBreak"),n(u)):t(u)}function l(u){return u===i?(e.consume(u),r++,l):(e.exit("thematicBreakSequence"),F(u)?O(e,s,"whitespace")(u):s(u))}}const ee={continuation:{tokenize:Is},exit:As,name:"list",tokenize:Cs},Es={partial:!0,tokenize:zs},Ts={partial:!0,tokenize:_s};function Cs(e,n,t){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return s;function s(p){const g=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:Rn(p)){if(r.containerState.type||(r.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(Ze,t,u)(p):u(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(p)}return t(p)}function l(p){return Rn(p)&&++a<10?(e.consume(p),l):(!r.interrupt||a<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),u(p)):t(p)}function u(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(We,r.interrupt?t:d,e.attempt(Es,m,c))}function d(p){return r.containerState.initialBlankLine=!0,o++,m(p)}function c(p){return F(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),m):t(p)}function m(p){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(p)}}function Is(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(We,i,o);function i(s){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,O(e,n,"listItemIndent",r.containerState.size+1)(s)}function o(s){return r.containerState.furtherBlankLines||!F(s)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(s)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Ts,n,a)(s))}function a(s){return r.containerState._closeFlow=!0,r.interrupt=void 0,O(e,e.attempt(ee,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function _s(e,n,t){const r=this;return O(e,i,"listItemIndent",r.containerState.size+1);function i(o){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?n(o):t(o)}}function As(e){e.exit(this.containerState.type)}function zs(e,n,t){const r=this;return O(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const a=r.events[r.events.length-1];return!F(o)&&a&&a[1].type==="listItemPrefixWhitespace"?n(o):t(o)}}const qt={name:"setextUnderline",resolveTo:Ps,tokenize:Ls};function Ps(e,n){const t=new rn;let r=e.length,i,o,a;for(;r--;)if(e[r][0]==="enter"){if(e[r][1].type==="content"){i=r;break}e[r][1].type==="paragraph"&&(o=r)}else e[r][1].type==="content"&&t.add(r,1,[]),!a&&e[r][1].type==="definition"&&(a=r);const s={type:"setextHeading",start:{...e[i][1].start},end:{...e[e.length-1][1].end}};return e[o][1].type="setextHeadingText",a?(t.add(o,0,[["enter",s,n]]),t.add(a+1,0,[["exit",e[i][1],n]]),e[i][1].end={...e[a][1].end}):e[i][1]=s,t.add(e.length,0,[["exit",s,n]]),t.consume(e),e}function Ls(e,n,t){const r=this;let i;return o;function o(u){let d=r.events.length,c;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){c=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),i=u,a(u)):t(u)}function a(u){return e.enter("setextHeadingLineSequence"),s(u)}function s(u){return u===i?(e.consume(u),s):(e.exit("setextHeadingLineSequence"),F(u)?O(e,l,"lineSuffix")(u):l(u))}function l(u){return u===null||z(u)?(e.exit("setextHeadingLine"),n(u)):t(u)}}const Ds={tokenize:Fs};function Fs(e){const n=this,t=e.attempt(We,r,e.attempt(this.parser.constructs.flowInitial,i,O(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Bo,i)),"linePrefix")));return t;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const js={resolveAll:Gr()},Rs=Wr("string"),Ns=Wr("text");function Wr(e){return{resolveAll:Gr(e==="text"?Ms:void 0),tokenize:n};function n(t){const r=this,i=this.parser.constructs[e],o=t.attempt(i,a,s);return a;function a(d){return u(d)?o(d):s(d)}function s(d){if(d===null){t.consume(d);return}return t.enter("data"),t.consume(d),l}function l(d){return u(d)?(t.exit("data"),o(d)):(t.consume(d),l)}function u(d){if(d===null)return!0;const c=i[d];let m=-1;if(c)for(;++m<c.length;){const p=c[m];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function Gr(e){return n;function n(t,r){let i=-1,o;for(;++i<=t.length;)o===void 0?t[i]&&t[i][1].type==="data"&&(o=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==o+2&&(t[o][1].end=t[i-1][1].end,t.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(t,r):t}}function Ms(e,n){const t=new rn;let r=0;for(;++r<=e.length;)if((r===e.length||e[r][1].type==="lineEnding")&&e[r-1][1].type==="data"){const i=e[r-1][1],o=n.sliceStream(i);let a=o.length,s=-1,l=0,u;for(;a--;){const d=o[a];if(typeof d=="string"){for(s=d.length;d.charCodeAt(s-1)===32;)l++,s--;if(s)break;s=-1}else if(d===-2)u=!0,l++;else if(d!==-1){a++;break}}if(n._contentTypeTextTrailing&&r===e.length&&(l=0),l){const d={type:r===e.length||u||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?s:i.start._bufferIndex+s,_index:i.start._index+a,line:i.end.line,column:i.end.column-l,offset:i.end.offset-l},end:{...i.end}};i.end={...d.start},i.start.offset===i.end.offset?Object.assign(i,d):t.add(r,0,[["enter",d,n],["exit",d,n]])}r++}return t.consume(e),e}const Os={42:ee,43:ee,45:ee,48:ee,49:ee,50:ee,51:ee,52:ee,53:ee,54:ee,55:ee,56:ee,57:ee,62:Or},qs={91:Wo},Bs={[-2]:yn,[-1]:yn,32:yn},Vs={35:Ko,42:Ze,45:[qt,Ze],60:ts,61:qt,95:Ze,96:Mt,126:Mt},Us={38:Br,92:qr},Hs={[-5]:bn,[-4]:bn,[-3]:bn,33:bs,38:Br,42:Nn,60:[vo,ss],91:ws,92:[Yo,qr],93:nt,95:Nn,96:jo},$s={null:[Nn,js]},Ws={null:[42,95]},Gs={null:[]},Qs=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Ws,contentInitial:qs,disable:Gs,document:Os,flow:Vs,flowInitial:Bs,insideSpan:$s,string:Us,text:Hs},Symbol.toStringTag,{value:"Module"}));function Xs(e,n,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},o=[];let a=[],s=[];const l={attempt:R(j),check:R(k),consume:C,enter:E,exit:D,interrupt:R(k,{interrupt:!0})},u={code:null,containerState:{},defineSkip:x,events:[],now:g,parser:e,previous:null,sliceSerialize:m,sliceStream:p,write:c};let d=n.tokenize.call(u,l);return n.resolveAll&&o.push(n),u;function c(_){return a=ie(a,_),S(),a[a.length-1]!==null?[]:(q(n,0),u.events=dn(o,u.events,u),u.events)}function m(_,A){return Js(p(_),A)}function p(_){return Ys(a,_)}function g(){const{_bufferIndex:_,_index:A,line:V,column:W,offset:M}=r;return{_bufferIndex:_,_index:A,line:V,column:W,offset:M}}function x(_){i[_.line]=_.column,b()}function S(){for(;r._index<a.length;){const _=a[r._index];if(typeof _=="string"){const A=r._index;for(r._bufferIndex<0&&(r._bufferIndex=0);r._index===A&&r._bufferIndex<_.length;)y(_.charCodeAt(r._bufferIndex))}else y(_)}}function y(_){d=d(_)}function C(_){z(_)?(r.line++,r.column=1,r.offset+=_===-3?2:1,b()):_!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=_}function E(_,A){const V=A||{};return V.type=_,V.start=g(),u.events.push(["enter",V,u]),s.push(V),V}function D(_){const A=s.pop();return A.end=g(),u.events.push(["exit",A,u]),A}function j(_,A){q(_,A.from)}function k(_,A){A.restore()}function R(_,A){return V;function V(W,M,Y){let Q,ae,he,h;return Array.isArray(W)?fe(W):"tokenize"in W?fe([W]):oe(W);function oe(X){return Re;function Re(xe){const ze=xe!==null&&X[xe],Pe=xe!==null&&X.null,Qe=[...Array.isArray(ze)?ze:ze?[ze]:[],...Array.isArray(Pe)?Pe:Pe?[Pe]:[]];return fe(Qe)(xe)}}function fe(X){return Q=X,ae=0,X.length===0?Y:f(X[ae])}function f(X){return Re;function Re(xe){return h=B(),he=X,X.partial||(u.currentConstruct=X),X.name&&u.parser.constructs.disable.null.includes(X.name)?ve():X.tokenize.call(A?Object.assign(Object.create(u),A):u,l,se,ve)(xe)}}function se(X){return _(he,h),M}function ve(X){return h.restore(),++ae<Q.length?f(Q[ae]):Y}}}function q(_,A){_.resolveAll&&!o.includes(_)&&o.push(_),_.resolve&&ce(u.events,A,u.events.length-A,_.resolve(u.events.slice(A),u)),_.resolveTo&&(u.events=_.resolveTo(u.events,u))}function B(){const _=g(),A=u.previous,V=u.currentConstruct,W=u.events.length,M=Array.from(s);return{from:W,restore:Y};function Y(){r=_,u.previous=A,u.currentConstruct=V,u.events.length=W,s=M,b()}}function b(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Ys(e,n){const t=n.start._index,r=n.start._bufferIndex,i=n.end._index,o=n.end._bufferIndex;let a;if(t===i)a=[e[t].slice(r,o)];else{if(a=e.slice(t,i),r>-1){const s=a[0];typeof s=="string"?a[0]=s.slice(r):a.shift()}o>0&&a.push(e[i].slice(0,o))}return a}function Js(e,n){let t=-1;const r=[];let i;for(;++t<e.length;){const o=e[t];let a;if(typeof o=="string")a=o;else switch(o){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=n?" ":"	";break}case-1:{if(!n&&i)continue;a=" ";break}default:a=String.fromCharCode(o)}i=o===-2,r.push(a)}return r.join("")}function Ks(e){const r={constructs:Rr([Qs,...(e||{}).extensions||[]]),content:i(fo),defined:[],document:i(yo),flow:i(Ds),lazy:{},string:i(Rs),text:i(Ns)};return r;function i(o){return a;function a(s){return Xs(r,o,s)}}}function Zs(e){for(;!Vr(e););return e}const Bt=/[\0\t\n\r]/g;function el(){let e=1,n="",t=!0,r;return i;function i(o,a,s){o=n+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o));const l=[];let u=0;for(n="",t&&(o.charCodeAt(0)===65279&&u++,t=void 0);u<o.length;){Bt.lastIndex=u;const d=Bt.exec(o),c=d&&d.index!==void 0?d.index:o.length,m=o.charCodeAt(c);if(!d){n=o.slice(u);break}if(m===10&&u===c&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),u<c&&(l.push(o.slice(u,c)),e+=c-u),m){case 0:{l.push(65533),e++;break}case 9:{const p=Math.ceil(e/4)*4;for(l.push(-2);e++<p;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:r=!0,e=1}u=c+1}return s&&(r&&l.push(-5),n&&l.push(n),l.push(null)),l}}const nl=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function tl(e){return e.replace(nl,rl)}function rl(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),o=i===120||i===88;return Nr(t.slice(o?2:1),o?16:10)}return et(t)||e}const Qr={}.hasOwnProperty;function il(e,n,t){return n&&typeof n=="object"&&(t=n,n=void 0),al(t)(Zs(Ks(t).document().write(el()(e,n,!0))))}function al(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(yt),autolinkProtocol:B,autolinkEmail:B,atxHeading:o(ht),blockQuote:o(Pe),characterEscape:B,characterReference:B,codeFenced:o(Qe),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(Qe,a),codeText:o(_i,a),codeTextData:B,data:B,codeFlowValue:B,definition:o(Ai),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(zi),hardBreakEscape:o(ft),hardBreakTrailing:o(ft),htmlFlow:o(gt,a),htmlFlowData:B,htmlText:o(gt,a),htmlTextData:B,image:o(Pi),label:a,link:o(yt),listItem:o(Li),listItemValue:m,listOrdered:o(bt,c),listUnordered:o(bt),paragraph:o(Di),reference:f,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(ht),strong:o(Fi),thematicBreak:o(Ri)},exit:{atxHeading:l(),atxHeadingSequence:j,autolink:l(),autolinkEmail:ze,autolinkProtocol:xe,blockQuote:l(),characterEscapeValue:b,characterReferenceMarkerHexadecimal:ve,characterReferenceMarkerNumeric:ve,characterReferenceValue:X,characterReference:Re,codeFenced:l(S),codeFencedFence:x,codeFencedFenceInfo:p,codeFencedFenceMeta:g,codeFlowValue:b,codeIndented:l(y),codeText:l(M),codeTextData:b,data:b,definition:l(),definitionDestinationString:D,definitionLabelString:C,definitionTitleString:E,emphasis:l(),hardBreakEscape:l(A),hardBreakTrailing:l(A),htmlFlow:l(V),htmlFlowData:b,htmlText:l(W),htmlTextData:b,image:l(Q),label:he,labelText:ae,lineEnding:_,link:l(Y),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:se,resourceDestinationString:h,resourceTitleString:oe,resource:fe,setextHeading:l(q),setextHeadingLineSequence:R,setextHeadingText:k,strong:l(),thematicBreak:l()}};Xr(n,(e||{}).mdastExtensions||[]);const t={};return r;function r(w){let T={type:"root",children:[]};const L={stack:[T],tokenStack:[],config:n,enter:s,exit:u,buffer:a,resume:d,data:t},N=[];let U=-1;for(;++U<w.length;)if(w[U][1].type==="listOrdered"||w[U][1].type==="listUnordered")if(w[U][0]==="enter")N.push(U);else{const le=N.pop();U=i(w,le,U)}for(U=-1;++U<w.length;){const le=n[w[U][0]];Qr.call(le,w[U][1].type)&&le[w[U][1].type].call(Object.assign({sliceSerialize:w[U][2].sliceSerialize},L),w[U][1])}if(L.tokenStack.length>0){const le=L.tokenStack[L.tokenStack.length-1];(le[1]||Vt).call(L,void 0,le[0])}for(T.position={start:we(w.length>0?w[0][1].start:{line:1,column:1,offset:0}),end:we(w.length>0?w[w.length-2][1].end:{line:1,column:1,offset:0})},U=-1;++U<n.transforms.length;)T=n.transforms[U](T)||T;return T}function i(w,T,L){let N=T-1,U=-1,le=!1,Se,ge,Ne,Me;for(;++N<=L;){const te=w[N];switch(te[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{te[0]==="enter"?U++:U--,Me=void 0;break}case"lineEndingBlank":{te[0]==="enter"&&(Se&&!Me&&!U&&!Ne&&(Ne=N),Me=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Me=void 0}if(!U&&te[0]==="enter"&&te[1].type==="listItemPrefix"||U===-1&&te[0]==="exit"&&(te[1].type==="listUnordered"||te[1].type==="listOrdered")){if(Se){let Le=N;for(ge=void 0;Le--;){const ye=w[Le];if(ye[1].type==="lineEnding"||ye[1].type==="lineEndingBlank"){if(ye[0]==="exit")continue;ge&&(w[ge][1].type="lineEndingBlank",le=!0),ye[1].type="lineEnding",ge=Le}else if(!(ye[1].type==="linePrefix"||ye[1].type==="blockQuotePrefix"||ye[1].type==="blockQuotePrefixWhitespace"||ye[1].type==="blockQuoteMarker"||ye[1].type==="listItemIndent"))break}Ne&&(!ge||Ne<ge)&&(Se._spread=!0),Se.end=Object.assign({},ge?w[ge][1].start:te[1].end),w.splice(ge||N,0,["exit",Se,te[2]]),N++,L++}if(te[1].type==="listItemPrefix"){const Le={type:"listItem",_spread:!1,start:Object.assign({},te[1].start),end:void 0};Se=Le,w.splice(N,0,["enter",Le,te[2]]),N++,L++,Ne=void 0,Me=!0}}}return w[T][1]._spread=le,L}function o(w,T){return L;function L(N){s.call(this,w(N),N),T&&T.call(this,N)}}function a(){this.stack.push({type:"fragment",children:[]})}function s(w,T,L){this.stack[this.stack.length-1].children.push(w),this.stack.push(w),this.tokenStack.push([T,L||void 0]),w.position={start:we(T.start),end:void 0}}function l(w){return T;function T(L){w&&w.call(this,L),u.call(this,L)}}function u(w,T){const L=this.stack.pop(),N=this.tokenStack.pop();if(N)N[0].type!==w.type&&(T?T.call(this,w,N[0]):(N[1]||Vt).call(this,w,N[0]));else throw new Error("Cannot close `"+w.type+"` ("+Be({start:w.start,end:w.end})+"): it’s not open");L.position.end=we(w.end)}function d(){return Zn(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function m(w){if(this.data.expectingFirstListItemValue){const T=this.stack[this.stack.length-2];T.start=Number.parseInt(this.sliceSerialize(w),10),this.data.expectingFirstListItemValue=void 0}}function p(){const w=this.resume(),T=this.stack[this.stack.length-1];T.lang=w}function g(){const w=this.resume(),T=this.stack[this.stack.length-1];T.meta=w}function x(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function S(){const w=this.resume(),T=this.stack[this.stack.length-1];T.value=w.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function y(){const w=this.resume(),T=this.stack[this.stack.length-1];T.value=w.replace(/(\r?\n|\r)$/g,"")}function C(w){const T=this.resume(),L=this.stack[this.stack.length-1];L.label=T,L.identifier=de(this.sliceSerialize(w)).toLowerCase()}function E(){const w=this.resume(),T=this.stack[this.stack.length-1];T.title=w}function D(){const w=this.resume(),T=this.stack[this.stack.length-1];T.url=w}function j(w){const T=this.stack[this.stack.length-1];if(!T.depth){const L=this.sliceSerialize(w).length;T.depth=L}}function k(){this.data.setextHeadingSlurpLineEnding=!0}function R(w){const T=this.stack[this.stack.length-1];T.depth=this.sliceSerialize(w).codePointAt(0)===61?1:2}function q(){this.data.setextHeadingSlurpLineEnding=void 0}function B(w){const L=this.stack[this.stack.length-1].children;let N=L[L.length-1];(!N||N.type!=="text")&&(N=ji(),N.position={start:we(w.start),end:void 0},L.push(N)),this.stack.push(N)}function b(w){const T=this.stack.pop();T.value+=this.sliceSerialize(w),T.position.end=we(w.end)}function _(w){const T=this.stack[this.stack.length-1];if(this.data.atHardBreak){const L=T.children[T.children.length-1];L.position.end=we(w.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(T.type)&&(B.call(this,w),b.call(this,w))}function A(){this.data.atHardBreak=!0}function V(){const w=this.resume(),T=this.stack[this.stack.length-1];T.value=w}function W(){const w=this.resume(),T=this.stack[this.stack.length-1];T.value=w}function M(){const w=this.resume(),T=this.stack[this.stack.length-1];T.value=w}function Y(){const w=this.stack[this.stack.length-1];if(this.data.inReference){const T=this.data.referenceType||"shortcut";w.type+="Reference",w.referenceType=T,delete w.url,delete w.title}else delete w.identifier,delete w.label;this.data.referenceType=void 0}function Q(){const w=this.stack[this.stack.length-1];if(this.data.inReference){const T=this.data.referenceType||"shortcut";w.type+="Reference",w.referenceType=T,delete w.url,delete w.title}else delete w.identifier,delete w.label;this.data.referenceType=void 0}function ae(w){const T=this.sliceSerialize(w),L=this.stack[this.stack.length-2];L.label=tl(T),L.identifier=de(T).toLowerCase()}function he(){const w=this.stack[this.stack.length-1],T=this.resume(),L=this.stack[this.stack.length-1];if(this.data.inReference=!0,L.type==="link"){const N=w.children;L.children=N}else L.alt=T}function h(){const w=this.resume(),T=this.stack[this.stack.length-1];T.url=w}function oe(){const w=this.resume(),T=this.stack[this.stack.length-1];T.title=w}function fe(){this.data.inReference=void 0}function f(){this.data.referenceType="collapsed"}function se(w){const T=this.resume(),L=this.stack[this.stack.length-1];L.label=T,L.identifier=de(this.sliceSerialize(w)).toLowerCase(),this.data.referenceType="full"}function ve(w){this.data.characterReferenceType=w.type}function X(w){const T=this.sliceSerialize(w),L=this.data.characterReferenceType;let N;L?(N=Nr(T,L==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):N=et(T);const U=this.stack[this.stack.length-1];U.value+=N}function Re(w){const T=this.stack.pop();T.position.end=we(w.end)}function xe(w){b.call(this,w);const T=this.stack[this.stack.length-1];T.url=this.sliceSerialize(w)}function ze(w){b.call(this,w);const T=this.stack[this.stack.length-1];T.url="mailto:"+this.sliceSerialize(w)}function Pe(){return{type:"blockquote",children:[]}}function Qe(){return{type:"code",lang:null,meta:null,value:""}}function _i(){return{type:"inlineCode",value:""}}function Ai(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function zi(){return{type:"emphasis",children:[]}}function ht(){return{type:"heading",depth:0,children:[]}}function ft(){return{type:"break"}}function gt(){return{type:"html",value:""}}function Pi(){return{type:"image",title:null,url:"",alt:null}}function yt(){return{type:"link",title:null,url:"",children:[]}}function bt(w){return{type:"list",ordered:w.type==="listOrdered",start:null,spread:w._spread,children:[]}}function Li(w){return{type:"listItem",spread:w._spread,checked:null,children:[]}}function Di(){return{type:"paragraph",children:[]}}function Fi(){return{type:"strong",children:[]}}function ji(){return{type:"text",value:""}}function Ri(){return{type:"thematicBreak"}}}function we(e){return{line:e.line,column:e.column,offset:e.offset}}function Xr(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?Xr(e,r):ol(e,r)}}function ol(e,n){let t;for(t in n)if(Qr.call(n,t))switch(t){case"canContainEols":{const r=n[t];r&&e[t].push(...r);break}case"transforms":{const r=n[t];r&&e[t].push(...r);break}case"enter":case"exit":{const r=n[t];r&&Object.assign(e[t],r);break}}}function Vt(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+Be({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+Be({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+Be({start:n.start,end:n.end})+") is still open")}function sl(e){const n=this;n.parser=t;function t(r){return il(r,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function ll(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function ul(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function cl(e,n){const t=n.value?n.value+`
`:"",r={},i=n.lang?n.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return n.meta&&(o.data={meta:n.meta}),e.patch(n,o),o=e.applyData(n,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(n,o),o}function dl(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function pl(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function ml(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(n.identifier).toUpperCase(),i=je(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let a,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,s+=1,e.footnoteCounts.set(r,s);const l={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(n,l);const u={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(n,u),e.applyData(n,u)}function hl(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function fl(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function Yr(e,n){const t=n.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+r}];const i=e.all(n),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function gl(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return Yr(e,n);const i={src:je(r.url||""),alt:n.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(n,o),e.applyData(n,o)}function yl(e,n){const t={src:je(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,r),e.applyData(n,r)}function bl(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,r),e.applyData(n,r)}function xl(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return Yr(e,n);const i={href:je(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(n)};return e.patch(n,o),e.applyData(n,o)}function wl(e,n){const t={href:je(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function kl(e,n,t){const r=e.all(n),i=t?vl(t):Jr(n),o={},a=[];if(typeof n.checked=="boolean"){const d=r[0];let c;d&&d.type==="element"&&d.tagName==="p"?c=d:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let s=-1;for(;++s<r.length;){const d=r[s];(i||s!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const l=r[r.length-1];l&&(i||l.type!=="element"||l.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:a};return e.patch(n,u),e.applyData(n,u)}function vl(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let r=-1;for(;!n&&++r<t.length;)n=Jr(t[r])}return n}function Jr(e){const n=e.spread;return n??e.children.length>1}function Sl(e,n){const t={},r=e.all(n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const o={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(r,!0)};return e.patch(n,o),e.applyData(n,o)}function El(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Tl(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function Cl(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Il(e,n){const t=e.all(n),r=t.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(n.children[0],a),i.push(a)}if(t.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},s=Xn(n.children[1]),l=Ar(n.children[n.children.length-1]);s&&l&&(a.position={start:s,end:l}),i.push(a)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(n,o),e.applyData(n,o)}function _l(e,n,t){const r=t?t.children:void 0,o=(r?r.indexOf(n):1)===0?"th":"td",a=t&&t.type==="table"?t.align:void 0,s=a?a.length:n.children.length;let l=-1;const u=[];for(;++l<s;){const c=n.children[l],m={},p=a?a[l]:void 0;p&&(m.align=p);let g={type:"element",tagName:o,properties:m,children:[]};c&&(g.children=e.all(c),e.patch(c,g),g=e.applyData(c,g)),u.push(g)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(n,d),e.applyData(n,d)}function Al(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const Ut=9,Ht=32;function zl(e){const n=String(e),t=/\r?\n|\r/g;let r=t.exec(n),i=0;const o=[];for(;r;)o.push($t(n.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(n);return o.push($t(n.slice(i),i>0,!1)),o.join("")}function $t(e,n,t){let r=0,i=e.length;if(n){let o=e.codePointAt(r);for(;o===Ut||o===Ht;)r++,o=e.codePointAt(r)}if(t){let o=e.codePointAt(i-1);for(;o===Ut||o===Ht;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function Pl(e,n){const t={type:"text",value:zl(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function Ll(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const Dl={blockquote:ll,break:ul,code:cl,delete:dl,emphasis:pl,footnoteReference:ml,heading:hl,html:fl,imageReference:gl,image:yl,inlineCode:bl,linkReference:xl,link:wl,listItem:kl,list:Sl,paragraph:El,root:Tl,strong:Cl,table:Il,tableCell:Al,tableRow:_l,text:Pl,thematicBreak:Ll,toml:Xe,yaml:Xe,definition:Xe,footnoteDefinition:Xe};function Xe(){}const Kr=-1,pn=0,Ue=1,on=2,tt=3,rt=4,it=5,at=6,Zr=7,ei=8,{defineProperty:Fl}=Object,ni=typeof self=="object"?self:globalThis,Wt=(e,n)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new ni[e](n)},jl=(e,n)=>{const t=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,a]=n[i];switch(o){case pn:case Kr:return t(a,i);case Ue:{const s=t([],i);for(const l of a)s.push(r(l));return s}case on:{const s=t({},i);for(const[l,u]of a){const d=r(l),c=r(u);d==="__proto__"?Fl(s,d,{value:c,configurable:!0,enumerable:!0,writable:!0}):s[d]=c}return s}case tt:return t(new Date(a),i);case rt:{const{source:s,flags:l}=a;return t(new RegExp(s,l),i)}case it:{const s=t(new Map,i);for(const[l,u]of a)s.set(r(l),r(u));return s}case at:{const s=t(new Set,i);for(const l of a)s.add(r(l));return s}case Zr:{const{name:s,message:l}=a;return t(typeof ni[s]=="function"?Wt(s,l):new Error(l),i)}case ei:return t(BigInt(a),i);case"BigInt":return t(Object(BigInt(a)),i);case"ArrayBuffer":return t(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:s}=new Uint8Array(a);return t(new DataView(s),a)}case"-0":return-0}return t(Wt(o,a),i)};return r},Gt=e=>jl(new Map,e)(0),Te="",{toString:Rl}={},{keys:Nl,is:Ml}=Object,qe=e=>{const n=typeof e;if(n!=="object"||!e)return[pn,n];const t=Rl.call(e).slice(8,-1);switch(t){case"Array":return[Ue,Te];case"Object":return[on,Te];case"Date":return[tt,Te];case"RegExp":return[rt,Te];case"Map":return[it,Te];case"Set":return[at,Te];case"DataView":return[Ue,t]}return t.includes("Array")?[Ue,t]:e instanceof Error?[Zr,e.name||"Error"]:[on,t]},Ye=([e,n])=>e===pn&&(n==="function"||n==="symbol"),Ol=(e,n,t,r)=>{const i=(a,s)=>{const l=r.push(a)-1;return t.set(s,l),l},o=a=>{if(t.has(a))return t.get(a);let[s,l]=qe(a);switch(s){case pn:{let d=a;switch(l){case"bigint":s=ei,d=a.toString();break;case"number":if(!a&&Ml(a,-0))return r.push(["-0"])-1;break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);d=null;break;case"undefined":return i([Kr],a)}return i([s,d],a)}case Ue:{if(l){let m=a;return l==="DataView"?m=new Uint8Array(a.buffer):l==="ArrayBuffer"&&(m=new Uint8Array(a)),i([l,[...m]],a)}const d=[],c=i([s,d],a);for(const m of a)d.push(o(m));return c}case on:{if(l)switch(l){case"BigInt":return i([l,a.toString()],a);case"Boolean":case"Number":case"String":return i([l,a.valueOf()],a)}if(n&&"toJSON"in a)return o(a.toJSON());const d=[],c=i([s,d],a);for(const m of Nl(a))(e||!Ye(qe(a[m])))&&d.push([o(m),o(a[m])]);return c}case tt:return i([s,isNaN(a.getTime())?Te:a.toISOString()],a);case rt:{const{source:d,flags:c}=a;return i([s,{source:d,flags:c}],a)}case it:{const d=[],c=i([s,d],a);for(const[m,p]of a)(e||!(Ye(qe(m))||Ye(qe(p))))&&d.push([o(m),o(p)]);return c}case at:{const d=[],c=i([s,d],a);for(const m of a)(e||!Ye(qe(m)))&&d.push(o(m));return c}}const{message:u}=a;return i([s,{name:l,message:u}],a)};return o},Qt=(e,{json:n,lossy:t}={})=>{const r=[];return Ol(!(n||t),!!n,new Map,r)(e),r},sn=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?Gt(Qt(e,n)):structuredClone(e):(e,n)=>Gt(Qt(e,n));function ql(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function Bl(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function Vl(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||ql,r=e.options.footnoteBackLabel||Bl,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let l=-1;for(;++l<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[l]);if(!u)continue;const d=e.all(u),c=String(u.identifier).toUpperCase(),m=je(c.toLowerCase());let p=0;const g=[],x=e.footnoteCounts.get(c);for(;x!==void 0&&++p<=x;){g.length>0&&g.push({type:"text",value:" "});let C=typeof t=="string"?t:t(l,p);typeof C=="string"&&(C={type:"text",value:C}),g.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+m+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(l,p),className:["data-footnote-backref"]},children:Array.isArray(C)?C:[C]})}const S=d[d.length-1];if(S&&S.type==="element"&&S.tagName==="p"){const C=S.children[S.children.length-1];C&&C.type==="text"?C.value+=" ":S.children.push({type:"text",value:" "}),S.children.push(...g)}else d.push(...g);const y={type:"element",tagName:"li",properties:{id:n+"fn-"+m},children:e.wrap(d,!0)};e.patch(u,y),s.push(y)}if(s.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...sn(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:`
`}]}}const mn=function(e){if(e==null)return Wl;if(typeof e=="function")return hn(e);if(typeof e=="object")return Array.isArray(e)?Ul(e):Hl(e);if(typeof e=="string")return $l(e);throw new Error("Expected function, string, or object as test")};function Ul(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=mn(e[t]);return hn(r);function r(...i){let o=-1;for(;++o<n.length;)if(n[o].apply(this,i))return!0;return!1}}function Hl(e){const n=e;return hn(t);function t(r){const i=r;let o;for(o in e)if(i[o]!==n[o])return!1;return!0}}function $l(e){return hn(n);function n(t){return t&&t.type===e}}function hn(e){return n;function n(t,r,i){return!!(Gl(t)&&e.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function Wl(){return!0}function Gl(e){return e!==null&&typeof e=="object"&&"type"in e}const ti=[],Ql=!0,On=!1,Xl="skip";function ri(e,n,t,r){let i;typeof n=="function"&&typeof t!="function"?(r=t,t=n):i=n;const o=mn(i),a=r?-1:1;s(e,void 0,[])();function s(l,u,d){const c=l&&typeof l=="object"?l:{};if(typeof c.type=="string"){const p=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(m,"name",{value:"node ("+(l.type+(p?"<"+p+">":""))+")"})}return m;function m(){let p=ti,g,x,S;if((!n||o(l,u,d[d.length-1]||void 0))&&(p=Yl(t(l,d)),p[0]===On))return p;if("children"in l&&l.children){const y=l;if(y.children&&p[0]!==Xl)for(x=(r?y.children.length:-1)+a,S=d.concat(y);x>-1&&x<y.children.length;){const C=y.children[x];if(g=s(C,x,S)(),g[0]===On)return g;x=typeof g[1]=="number"?g[1]:x+a}}return p}}}function Yl(e){return Array.isArray(e)?e:typeof e=="number"?[Ql,e]:e==null?ti:[e]}function ot(e,n,t,r){let i,o,a;typeof n=="function"&&typeof t!="function"?(o=void 0,a=n,i=t):(o=n,a=t,i=r),ri(e,o,s,i);function s(l,u){const d=u[u.length-1],c=d?d.children.indexOf(l):void 0;return a(l,c,d)}}const qn={}.hasOwnProperty,Jl={};function Kl(e,n){const t=n||Jl,r=new Map,i=new Map,o=new Map,a={...Dl,...t.handlers},s={all:u,applyData:eu,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:a,one:l,options:t,patch:Zl,wrap:tu};return ot(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const c=d.type==="definition"?r:i,m=String(d.identifier).toUpperCase();c.has(m)||c.set(m,d)}}),s;function l(d,c){const m=d.type,p=s.handlers[m];if(qn.call(s.handlers,m)&&p)return p(s,d,c);if(s.options.passThrough&&s.options.passThrough.includes(m)){if("children"in d){const{children:x,...S}=d,y=sn(S);return y.children=s.all(d),y}return sn(d)}return(s.options.unknownHandler||nu)(s,d,c)}function u(d){const c=[];if("children"in d){const m=d.children;let p=-1;for(;++p<m.length;){const g=s.one(m[p],d);if(g){if(p&&m[p-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=Xt(g.value)),!Array.isArray(g)&&g.type==="element")){const x=g.children[0];x&&x.type==="text"&&(x.value=Xt(x.value))}Array.isArray(g)?c.push(...g):c.push(g)}}}return c}}function Zl(e,n){e.position&&(n.position=qa(e))}function eu(e,n){let t=n;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const a="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:a}}t.type==="element"&&o&&Object.assign(t.properties,sn(o)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function nu(e,n){const t=n.data||{},r="value"in n&&!(qn.call(t,"hProperties")||qn.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function tu(e,n){const t=[];let r=-1;for(n&&t.push({type:"text",value:`
`});++r<e.length;)r&&t.push({type:"text",value:`
`}),t.push(e[r]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function Xt(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function Yt(e,n){const t=Kl(e,n),r=t.one(e,void 0),i=Vl(t),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function ru(e,n){return e&&"run"in e?async function(t,r){const i=Yt(t,{file:r,...n});await e.run(i,r)}:function(t,r){return Yt(t,{file:r,...e||n})}}function Jt(e){if(e)throw e}var en=Object.prototype.hasOwnProperty,ii=Object.prototype.toString,Kt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,er=function(n){return typeof Array.isArray=="function"?Array.isArray(n):ii.call(n)==="[object Array]"},nr=function(n){if(!n||ii.call(n)!=="[object Object]")return!1;var t=en.call(n,"constructor"),r=n.constructor&&n.constructor.prototype&&en.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!t&&!r)return!1;var i;for(i in n);return typeof i>"u"||en.call(n,i)},tr=function(n,t){Kt&&t.name==="__proto__"?Kt(n,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):n[t.name]=t.newValue},rr=function(n,t){if(t==="__proto__")if(en.call(n,t)){if(Zt)return Zt(n,t).value}else return;return n[t]},iu=function e(){var n,t,r,i,o,a,s=arguments[0],l=1,u=arguments.length,d=!1;for(typeof s=="boolean"&&(d=s,s=arguments[1]||{},l=2),(s==null||typeof s!="object"&&typeof s!="function")&&(s={});l<u;++l)if(n=arguments[l],n!=null)for(t in n)r=rr(s,t),i=rr(n,t),s!==i&&(d&&i&&(nr(i)||(o=er(i)))?(o?(o=!1,a=r&&er(r)?r:[]):a=r&&nr(r)?r:{},tr(s,{name:t,newValue:e(d,a,i)})):typeof i<"u"&&tr(s,{name:t,newValue:i}));return s};const xn=yr(iu);function Bn(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function au(){const e=[],n={run:t,use:r};return n;function t(...i){let o=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);s(null,...i);function s(l,...u){const d=e[++o];let c=-1;if(l){a(l);return}for(;++c<i.length;)(u[c]===null||u[c]===void 0)&&(u[c]=i[c]);i=u,d?ou(d,s)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),n}}function ou(e,n){let t;return r;function r(...a){const s=e.length>a.length;let l;s&&a.push(i);try{l=e.apply(this,a)}catch(u){const d=u;if(s&&t)throw d;return i(d)}s||(l&&l.then&&typeof l.then=="function"?l.then(o,i):l instanceof Error?i(l):o(l))}function i(a,...s){t||(t=!0,n(a,...s))}function o(a){i(null,a)}}const pe={basename:su,dirname:lu,extname:uu,join:cu,sep:"/"};function su(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');Ge(e);let t=0,r=-1,i=e.length,o;if(n===void 0||n.length===0||n.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){t=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let a=-1,s=n.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){t=i+1;break}}else a<0&&(o=!0,a=i+1),s>-1&&(e.codePointAt(i)===n.codePointAt(s--)?s<0&&(r=i):(s=-1,r=a));return t===r?r=a:r<0&&(r=e.length),e.slice(t,r)}function lu(e){if(Ge(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.codePointAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function uu(e){Ge(e);let n=e.length,t=-1,r=0,i=-1,o=0,a;for(;n--;){const s=e.codePointAt(n);if(s===47){if(a){r=n+1;break}continue}t<0&&(a=!0,t=n+1),s===46?i<0?i=n:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||t<0||o===0||o===1&&i===t-1&&i===r+1?"":e.slice(i,t)}function cu(...e){let n=-1,t;for(;++n<e.length;)Ge(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":du(t)}function du(e){Ge(e);const n=e.codePointAt(0)===47;let t=pu(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function pu(e,n){let t="",r=0,i=-1,o=0,a=-1,s,l;for(;++a<=e.length;){if(a<e.length)s=e.codePointAt(a);else{if(s===47)break;s=47}if(s===47){if(!(i===a-1||o===1))if(i!==a-1&&o===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(l=t.lastIndexOf("/"),l!==t.length-1){l<0?(t="",r=0):(t=t.slice(0,l),r=t.length-1-t.lastIndexOf("/")),i=a,o=0;continue}}else if(t.length>0){t="",r=0,i=a,o=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(i+1,a):t=e.slice(i+1,a),r=a-i-1;i=a,o=0}else s===46&&o>-1?o++:o=-1}return t}function Ge(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const mu={cwd:hu};function hu(){return"/"}function Vn(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function fu(e){if(typeof e=="string")e=new URL(e);else if(!Vn(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return gu(e)}function gu(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const r=n.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const wn=["history","path","basename","stem","extname","dirname"];class ai{constructor(n){let t;n?Vn(n)?t={path:n}:typeof n=="string"||yu(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":mu.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<wn.length;){const o=wn[r];o in t&&t[o]!==void 0&&t[o]!==null&&(this[o]=o==="history"?[...t[o]]:t[o])}let i;for(i in t)wn.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?pe.basename(this.path):void 0}set basename(n){vn(n,"basename"),kn(n,"basename"),this.path=pe.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?pe.dirname(this.path):void 0}set dirname(n){ir(this.basename,"dirname"),this.path=pe.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?pe.extname(this.path):void 0}set extname(n){if(kn(n,"extname"),ir(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=pe.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){Vn(n)&&(n=fu(n)),vn(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?pe.basename(this.path,this.extname):void 0}set stem(n){vn(n,"stem"),kn(n,"stem"),this.path=pe.join(this.dirname||"",n+(this.extname||""))}fail(n,t,r){const i=this.message(n,t,r);throw i.fatal=!0,i}info(n,t,r){const i=this.message(n,t,r);return i.fatal=void 0,i}message(n,t,r){const i=new K(n,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function kn(e,n){if(e&&e.includes(pe.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+pe.sep+"`")}function vn(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function ir(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function yu(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const bu=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},xu={}.hasOwnProperty;class st extends bu{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=au()}copy(){const n=new st;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];n.use(...r)}return n.data(xn(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(Tn("data",this.frozen),this.namespace[n]=t,this):xu.call(this.namespace,n)&&this.namespace[n]||void 0:n?(Tn("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(n,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=Je(n),r=this.parser||this.Parser;return Sn("parse",r),r(String(t),t)}process(n,t){const r=this;return this.freeze(),Sn("process",this.parser||this.Parser),En("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(o,a){const s=Je(n),l=r.parse(s);r.run(l,s,function(d,c,m){if(d||!c||!m)return u(d);const p=c,g=r.stringify(p,m);vu(g)?m.value=g:m.result=g,u(d,m)});function u(d,c){d||!c?a(d):o?o(c):t(void 0,c)}}}processSync(n){let t=!1,r;return this.freeze(),Sn("processSync",this.parser||this.Parser),En("processSync",this.compiler||this.Compiler),this.process(n,i),or("processSync","process",t),r;function i(o,a){t=!0,Jt(o),r=a}}run(n,t,r){ar(n),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?o(void 0,r):new Promise(o);function o(a,s){const l=Je(t);i.run(n,l,u);function u(d,c,m){const p=c||n;d?s(d):a?a(p):r(void 0,p,m)}}}runSync(n,t){let r=!1,i;return this.run(n,t,o),or("runSync","run",r),i;function o(a,s){Jt(a),i=s,r=!0}}stringify(n,t){this.freeze();const r=Je(t),i=this.compiler||this.Compiler;return En("stringify",i),ar(n),i(n,r)}use(n,...t){const r=this.attachers,i=this.namespace;if(Tn("use",this.frozen),n!=null)if(typeof n=="function")l(n,t);else if(typeof n=="object")Array.isArray(n)?s(n):a(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function o(u){if(typeof u=="function")l(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...c]=u;l(d,c)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");s(u.plugins),u.settings&&(i.settings=xn(!0,i.settings,u.settings))}function s(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const c=u[d];o(c)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function l(u,d){let c=-1,m=-1;for(;++c<r.length;)if(r[c][0]===u){m=c;break}if(m===-1)r.push([u,...d]);else if(d.length>0){let[p,...g]=d;const x=r[m][1];Bn(x)&&Bn(p)&&(p=xn(!0,x,p)),r[m]=[u,p,...g]}}}}const wu=new st().freeze();function Sn(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function En(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Tn(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function ar(e){if(!Bn(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function or(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function Je(e){return ku(e)?e:new ai(e)}function ku(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function vu(e){return typeof e=="string"||Su(e)}function Su(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Eu="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",sr=[],lr={allowDangerousHtml:!0},Tu=/^(https?|ircs?|mailto|xmpp)$/i,Cu=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Iu(e){const n=_u(e),t=Au(e);return zu(n.runSync(n.parse(t),t),e)}function _u(e){const n=e.rehypePlugins||sr,t=e.remarkPlugins||sr,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...lr}:lr;return wu().use(sl).use(t).use(ru,r).use(n)}function Au(e){const n=e.children||"",t=new ai;return typeof n=="string"&&(t.value=n),t}function zu(e,n){const t=n.allowedElements,r=n.allowElement,i=n.components,o=n.disallowedElements,a=n.skipHtml,s=n.unwrapDisallowed,l=n.urlTransform||Pu;for(const d of Cu)Object.hasOwn(n,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+Eu+d.id,void 0);return ot(e,u),$a(e,{Fragment:I.Fragment,components:i,ignoreInvalidStyle:!0,jsx:I.jsx,jsxs:I.jsxs,passKeys:!0,passNode:!0});function u(d,c,m){if(d.type==="raw"&&m&&typeof c=="number")return a?m.children.splice(c,1):m.children[c]={type:"text",value:d.value},c;if(d.type==="element"){let p;for(p in gn)if(Object.hasOwn(gn,p)&&Object.hasOwn(d.properties,p)){const g=d.properties[p],x=gn[p];(x===null||x.includes(d.tagName))&&(d.properties[p]=l(String(g||""),p,d))}}if(d.type==="element"){let p=t?!t.includes(d.tagName):o?o.includes(d.tagName):!1;if(!p&&r&&typeof c=="number"&&(p=!r(d,c,m)),p&&m&&typeof c=="number")return s&&d.children?m.children.splice(c,1,...d.children):m.children.splice(c,1),c}}}function Pu(e){const n=e.indexOf(":"),t=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return n===-1||i!==-1&&n>i||t!==-1&&n>t||r!==-1&&n>r||Tu.test(e.slice(0,n))?e:""}function ur(e,n){const t=String(e);if(typeof n!="string")throw new TypeError("Expected character");let r=0,i=t.indexOf(n);for(;i!==-1;)r++,i=t.indexOf(n,i+n.length);return r}function Lu(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function Du(e,n,t){const i=mn((t||{}).ignore||[]),o=Fu(n);let a=-1;for(;++a<o.length;)ri(e,"text",s);function s(u,d){let c=-1,m;for(;++c<d.length;){const p=d[c],g=m?m.children:void 0;if(i(p,g?g.indexOf(p):void 0,m))return;m=p}if(m)return l(u,d)}function l(u,d){const c=d[d.length-1],m=o[a][0],p=o[a][1];let g=0;const S=c.children.indexOf(u);let y=!1,C=[];m.lastIndex=0;let E=m.exec(u.value);for(;E;){const D=E.index,j={index:E.index,input:E.input,stack:[...d,u]};let k=p(...E,j);if(typeof k=="string"&&(k=k.length>0?{type:"text",value:k}:void 0),k===!1?m.lastIndex=D+1:(g!==D&&C.push({type:"text",value:u.value.slice(g,D)}),Array.isArray(k)?C.push(...k):k&&C.push(k),g=D+E[0].length,y=!0),!m.global)break;E=m.exec(u.value)}return y?(g<u.value.length&&C.push({type:"text",value:u.value.slice(g)}),c.children.splice(S,1,...C)):C=[u],S+C.length}}function Fu(e){const n=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const t=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<t.length;){const i=t[r];n.push([ju(i[0]),Ru(i[1])])}return n}function ju(e){return typeof e=="string"?new RegExp(Lu(e),"g"):e}function Ru(e){return typeof e=="function"?e:function(){return e}}const Cn="phrasing",In=["autolink","link","image","label"];function Nu(){return{transforms:[Hu],enter:{literalAutolink:Ou,literalAutolinkEmail:_n,literalAutolinkHttp:_n,literalAutolinkWww:_n},exit:{literalAutolink:Uu,literalAutolinkEmail:Vu,literalAutolinkHttp:qu,literalAutolinkWww:Bu}}}function Mu(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Cn,notInConstruct:In},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Cn,notInConstruct:In},{character:":",before:"[ps]",after:"\\/",inConstruct:Cn,notInConstruct:In}]}}function Ou(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function _n(e){this.config.enter.autolinkProtocol.call(this,e)}function qu(e){this.config.exit.autolinkProtocol.call(this,e)}function Bu(e){this.config.exit.data.call(this,e);const n=this.stack[this.stack.length-1];n.type,n.url="http://"+this.sliceSerialize(e)}function Vu(e){this.config.exit.autolinkEmail.call(this,e)}function Uu(e){this.exit(e)}function Hu(e){Du(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,$u],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),Wu]],{ignore:["link","linkReference"]})}function $u(e,n,t,r,i){let o="";if(!oi(i)||(/^w/i.test(n)&&(t=n+t,n="",o="http://"),!Gu(t)))return!1;const a=Qu(t+r);if(!a[0])return!1;const s={type:"link",title:null,url:o+n+a[0],children:[{type:"text",value:n+a[0]}]};return a[1]?[s,{type:"text",value:a[1]}]:s}function Wu(e,n,t,r){return!oi(r,!0)||/[-\d_]$/.test(t)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+t,children:[{type:"text",value:n+"@"+t}]}}function Gu(e){const n=e.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function Qu(e){const n=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!n)return[e,void 0];e=e.slice(0,n.index);let t=n[0],r=t.indexOf(")");const i=ur(e,"(");let o=ur(e,")");for(;r!==-1&&i>o;)e+=t.slice(0,r+1),t=t.slice(r+1),r=t.indexOf(")"),o++;return[e,t]}function oi(e,n){const t=e.input.charCodeAt(e.index-1);return(e.index===0||_e(t)||cn(t))&&(!n||t!==47)}si.peek=rc;function Xu(){this.buffer()}function Yu(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function Ju(){this.buffer()}function Ku(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function Zu(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=de(this.sliceSerialize(e)).toLowerCase(),t.label=n}function ec(e){this.exit(e)}function nc(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=de(this.sliceSerialize(e)).toLowerCase(),t.label=n}function tc(e){this.exit(e)}function rc(){return"["}function si(e,n,t,r){const i=t.createTracker(r);let o=i.move("[^");const a=t.enter("footnoteReference"),s=t.enter("reference");return o+=i.move(t.safe(t.associationId(e),{after:"]",before:o})),s(),a(),o+=i.move("]"),o}function ic(){return{enter:{gfmFootnoteCallString:Xu,gfmFootnoteCall:Yu,gfmFootnoteDefinitionLabelString:Ju,gfmFootnoteDefinition:Ku},exit:{gfmFootnoteCallString:Zu,gfmFootnoteCall:ec,gfmFootnoteDefinitionLabelString:nc,gfmFootnoteDefinition:tc}}}function ac(e){let n=!1;return e&&e.firstLineBlank&&(n=!0),{handlers:{footnoteDefinition:t,footnoteReference:si},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function t(r,i,o,a){const s=o.createTracker(a);let l=s.move("[^");const u=o.enter("footnoteDefinition"),d=o.enter("label");return l+=s.move(o.safe(o.associationId(r),{before:l,after:"]"})),d(),l+=s.move("]:"),r.children&&r.children.length>0&&(s.shift(4),l+=s.move((n?`
`:" ")+o.indentLines(o.containerFlow(r,s.current()),n?li:oc))),u(),l}}function oc(e,n,t){return n===0?e:li(e,n,t)}function li(e,n,t){return(t?"":"    ")+e}const sc=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];lt.attention=pc;lt.peek=mc;function lc(){return{canContainEols:["delete"],enter:{strikethrough:cc},exit:{strikethrough:dc}}}function uc(){return{handlers:{delete:lt},unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:sc}]}}function cc(e){this.enter({type:"delete",children:[],position:void 0},e)}function dc(e){this.exit(e)}function lt(e,n,t,r){const i=t.createTracker(r),o=t.stack.includes("strikethrough")?"~":"~~",a=t.enter("strikethrough");let s=i.move(o);return s+=t.containerPhrasing(e,{...i.current(),before:s,after:"~"}),s+=i.move(o),a(),s}function pc(){return{construct:"strikethrough",markers:["~"],sizes:[2,1]}}function mc(){return"~"}function hc(e){return e.length}function fc(e,n){const t=n||{},r=(t.align||[]).concat(),i=t.stringLength||hc,o=[],a=[],s=[],l=[];let u=0,d=-1;for(;++d<e.length;){const x=[],S=[];let y=-1;for(e[d].length>u&&(u=e[d].length);++y<e[d].length;){const C=gc(e[d][y]);if(t.alignDelimiters!==!1){const E=i(C);S[y]=E,(l[y]===void 0||E>l[y])&&(l[y]=E)}x.push(C)}a[d]=x,s[d]=S}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<u;)o[c]=cr(r[c]);else{const x=cr(r);for(;++c<u;)o[c]=x}c=-1;const m=[],p=[];for(;++c<u;){const x=o[c];let S="",y="";x===99?(S=":",y=":"):x===108?S=":":x===114&&(y=":");let C=t.alignDelimiters===!1?1:Math.max(1,l[c]-S.length-y.length);const E=S+"-".repeat(C)+y;t.alignDelimiters!==!1&&(C=S.length+C+y.length,C>l[c]&&(l[c]=C),p[c]=C),m[c]=E}a.splice(1,0,m),s.splice(1,0,p),d=-1;const g=[];for(;++d<a.length;){const x=a[d],S=s[d];c=-1;const y=[];for(;++c<u;){const C=x[c]||"";let E="",D="";if(t.alignDelimiters!==!1){const j=l[c]-(S[c]||0),k=o[c];k===114?E=" ".repeat(j):k===99?j%2?(E=" ".repeat(j/2+.5),D=" ".repeat(j/2-.5)):(E=" ".repeat(j/2),D=E):D=" ".repeat(j)}t.delimiterStart!==!1&&!c&&y.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&C==="")&&(t.delimiterStart!==!1||c)&&y.push(" "),t.alignDelimiters!==!1&&y.push(E),y.push(C),t.alignDelimiters!==!1&&y.push(D),t.padding!==!1&&y.push(" "),(t.delimiterEnd!==!1||c!==u-1)&&y.push("|")}g.push(t.delimiterEnd===!1?y.join("").replace(/ +$/,""):y.join(""))}return g.join(`
`)}function gc(e){return e==null?"":String(e)}function cr(e){const n=typeof e=="string"?e.codePointAt(0):0;return n===67||n===99?99:n===76||n===108?108:n===82||n===114?114:0}const yc=mn(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function bc(e,n,t,r){const i=t.enter("blockquote"),o=t.createTracker(r);o.move("> "),o.shift(2);const a=t.indentLines(t.containerFlow(e,o.current()),xc);return i(),a}function xc(e,n,t){return">"+(t?"":" ")+e}function wc(e,n){return dr(e,n.inConstruct,!0)&&!dr(e,n.notInConstruct,!1)}function dr(e,n,t){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return t;let r=-1;for(;++r<n.length;)if(e.includes(n[r]))return!0;return!1}function pr(e,n,t,r){let i=-1;for(;++i<t.unsafe.length;){const o=t.unsafe[i];if(o.character===`
`&&!o.before&&!o.after&&wc(t.stack,o))return/[\t ]/.test(r.before)?"":" "}return`\\
`}function kc(e,n){const t=String(e);let r=t.indexOf(n),i=r,o=0,a=0;if(typeof n!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++o>a&&(a=o):o=1,i=r+n.length,r=t.indexOf(n,i);return a}function vc(e,n){return!!(n.options.fences===!1&&e.value&&!e.lang&&/[^\n\r ]/.test(e.value)&&!/^[\t ]*(?:[\n\r]|$)|(?:^|[\n\r])[\t ]*$/.test(e.value))}function Sc(e){const n=e.options.fence||"`";if(n!=="`"&&n!=="~")throw new Error("Cannot serialize code with `"+n+"` for `options.fence`, expected `` ` `` or `~`");return n}function Ec(e,n,t,r){const i=Sc(t),o=e.value||"";if(vc(e,t)){const c=t.enter("codeIndented"),m=t.indentLines(o,Tc);return c(),m}const a=t.createTracker(r),s=i.repeat(Math.max(kc(o,i)+1,3)),l=t.enter("codeFenced"),u=i==="`"?"GraveAccent":"Tilde";let d=a.move(s);if(e.lang){const c=t.enter(`codeFencedLang${u}`);d+=a.move(t.safe(e.lang,{before:d,after:" ",encode:["`"],...a.current()})),c()}if(e.lang&&e.meta){const c=t.enter(`codeFencedMeta${u}`);d+=a.move(" "),d+=a.move(t.safe(e.meta,{before:d,after:`
`,encode:["`"],...a.current()})),c()}return d+=a.move(`
`),o&&(d+=a.move(o+`
`)),d+=a.move(s),l(),d}function Tc(e,n,t){return(t?"":"    ")+e}function ut(e){const n=e.options.quote||'"';if(n!=='"'&&n!=="'")throw new Error("Cannot serialize title with `"+n+"` for `options.quote`, expected `\"`, or `'`");return n}function Cc(e,n,t,r){const i=ut(t),o=i==='"'?"Quote":"Apostrophe",a=t.enter("definition");let s=t.enter("label");const l=t.createTracker(r);let u=l.move("[");return u+=l.move(t.safe(t.associationId(e),{before:u,after:"]",...l.current()})),u+=l.move("]: "),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=t.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(t.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(s=t.enter("destinationRaw"),u+=l.move(t.safe(e.url,{before:u,after:e.title?" ":`
`,...l.current()}))),s(),e.title&&(s=t.enter(`title${o}`),u+=l.move(" "+i),u+=l.move(t.safe(e.title,{before:u,after:i,...l.current()})),u+=l.move(i),s()),a(),u}function Ic(e){const n=e.options.emphasis||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize emphasis with `"+n+"` for `options.emphasis`, expected `*`, or `_`");return n}ct.attention=_c;ct.peek=Ac;function ct(e,n,t,r){const i=t.enter("phrasing"),o=t.containerPhrasing({type:"root",children:[e]},r);return i(),o}function _c(e,n){return{construct:"emphasis",markers:Ic(n)==="*"?["*","_"]:["_","*"],sizes:[1]}}function Ac(e,n,t){return t.options.emphasis||"*"}function zc(e){return"&#x"+e.toString(16).toUpperCase()+";"}function Pc(e,n){let t=!1;return ot(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return t=!0,On}),!!((!e.depth||e.depth<3)&&Zn(e)&&(n.options.setext||t))}function Lc(e,n,t,r){const i=Math.max(Math.min(6,e.depth||1),1),o=t.createTracker(r);if(Pc(e,t)){const c=t.enter("headingSetext"),m=t.enter("phrasing"),p=t.containerPhrasing(e,{...o.current(),before:`
`,after:`
`});return m(),c(),p+`
`+(i===1?"=":"-").repeat(p.length-(Math.max(p.lastIndexOf("\r"),p.lastIndexOf(`
`))+1))}const a="#".repeat(i),s=t.enter("headingAtx"),l=t.enter("phrasing");o.move(a+" ");let u=t.containerPhrasing(e,{before:"# ",after:`
`,...o.current()});const d=u.charCodeAt(0);return(d===9||d===32)&&(u=zc(d)+u.slice(1)),u=u?a+" "+u:a,t.options.closeAtx&&(u+=" "+a),l(),s(),u}ui.peek=Dc;function ui(e){return e.value||""}function Dc(){return"<"}ci.peek=Fc;function ci(e,n,t,r){const i=ut(t),o=i==='"'?"Quote":"Apostrophe",a=t.enter("image");let s=t.enter("label");const l=t.createTracker(r);let u=l.move("![");return u+=l.move(t.safe(e.alt,{before:u,after:"]",...l.current()})),u+=l.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=t.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(t.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(s=t.enter("destinationRaw"),u+=l.move(t.safe(e.url,{before:u,after:e.title?" ":")",...l.current()}))),s(),e.title&&(s=t.enter(`title${o}`),u+=l.move(" "+i),u+=l.move(t.safe(e.title,{before:u,after:i,...l.current()})),u+=l.move(i),s()),u+=l.move(")"),a(),u}function Fc(){return"!"}di.peek=jc;function di(e,n,t,r){const i=e.referenceType,o=t.enter("imageReference");let a=t.enter("label");const s=t.createTracker(r);let l=s.move("![");const u=t.safe(e.alt,{before:l,after:"]",...s.current()});l+=s.move(u+"]["),a();const d=t.stack;t.stack=d.filter(function(m){return m!=="phrasing"}),a=t.enter("reference");const c=t.safe(t.associationId(e),{before:l,after:"]",...s.current()});return a(),t.stack=d,o(),i==="full"||!u||u!==c?l+=s.move(c+"]"):i==="shortcut"?l=l.slice(0,-1):l+=s.move("]"),l}function jc(){return"!"}pi.peek=Rc;function pi(e,n,t){let r=e.value||"",i="`",o=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^\n\r ]/.test(r)&&(/^[\n\r ]/.test(r)&&/[\n\r ]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<t.unsafe.length;){const a=t.unsafe[o],s=t.compilePattern(a);if(!a.atBreak)continue;let l;for(;l=s.exec(r);){let u=l.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(l.index+1)}}return i+r+i}function Rc(){return"`"}function mi(e,n){const t=Zn(e);return!!(!n.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(t===e.url||"mailto:"+t===e.url)&&/^[a-z][+\-.a-z]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}hi.peek=Nc;function hi(e,n,t,r){const i=ut(t),o=i==='"'?"Quote":"Apostrophe",a=t.createTracker(r);if(mi(e,t)){const d=t.stack;t.stack=d.filter(function(p){return p!=="phrasing"});const c=t.enter("autolink");let m=a.move("<");return m+=a.move(t.containerPhrasing(e,{before:m,after:">",...a.current()})),m+=a.move(">"),c(),t.stack=d,m}const s=t.enter("link");let l=t.enter("label"),u=a.move("[");return u+=a.move(t.containerPhrasing(e,{before:u,after:"](",...a.current()})),u+=a.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=t.enter("destinationLiteral"),u+=a.move("<"),u+=a.move(t.safe(e.url,{before:u,after:">",...a.current()})),u+=a.move(">")):(l=t.enter("destinationRaw"),u+=a.move(t.safe(e.url,{before:u,after:e.title?" ":")",...a.current()}))),l(),e.title&&(l=t.enter(`title${o}`),u+=a.move(" "+i),u+=a.move(t.safe(e.title,{before:u,after:i,...a.current()})),u+=a.move(i),l()),u+=a.move(")"),s(),u}function Nc(e,n,t){return mi(e,t)?"<":"["}fi.peek=Mc;function fi(e,n,t,r){const i=e.referenceType,o=t.enter("linkReference");let a=t.enter("label");const s=t.createTracker(r);let l=s.move("[");const u=t.containerPhrasing(e,{before:l,after:"]",...s.current()});l+=s.move(u+"]["),a();const d=t.stack;t.stack=d.filter(function(m){return m!=="phrasing"}),a=t.enter("reference");const c=t.safe(t.associationId(e),{before:l,after:"]",...s.current()});return a(),t.stack=d,o(),i==="full"||!u||u!==c?l+=s.move(c+"]"):i==="shortcut"?l=l.slice(0,-1):l+=s.move("]"),l}function Mc(){return"["}function dt(e){const n=e.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function Oc(e){const n=dt(e),t=e.options.bulletOther;if(!t)return n==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===n)throw new Error("Expected `bullet` (`"+n+"`) and `bulletOther` (`"+t+"`) to be different");return t}function qc(e){const n=e.options.bulletOrdered||".";if(n!=="."&&n!==")")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}function gi(e){const n=e.options.rule||"*";if(n!=="*"&&n!=="-"&&n!=="_")throw new Error("Cannot serialize rules with `"+n+"` for `options.rule`, expected `*`, `-`, or `_`");return n}function Bc(e,n,t,r){const i=t.enter("list"),o=t.bulletCurrent;let a=e.ordered?qc(t):dt(t);const s=e.ordered?a==="."?")":".":Oc(t);let l=n&&t.bulletLastUsed?a===t.bulletLastUsed:!1;if(!e.ordered){const d=e.children?e.children[0]:void 0;if((a==="*"||a==="-")&&d&&(!d.children||!d.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(l=!0),gi(t)===a&&d){let c=-1;for(;++c<e.children.length;){const m=e.children[c];if(m&&m.type==="listItem"&&m.children&&m.children[0]&&m.children[0].type==="thematicBreak"){l=!0;break}}}}l&&(a=s),t.bulletCurrent=a;const u=t.containerFlow(e,r);return t.bulletLastUsed=a,t.bulletCurrent=o,i(),u}function Vc(e){const n=e.options.listItemIndent||"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw new Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function Uc(e,n,t,r){const i=Vc(t);let o=t.bulletCurrent||dt(t);n&&n.type==="list"&&n.ordered&&(o=(typeof n.start=="number"&&n.start>-1?n.start:1)+(t.options.incrementListMarker===!1?0:n.children.indexOf(e))+o);let a=o.length+1;(i==="tab"||i==="mixed"&&(n&&n.type==="list"&&n.spread||e.spread))&&(a=Math.ceil(a/4)*4);const s=t.createTracker(r);s.move(o+" ".repeat(a-o.length)),s.shift(a);const l=t.enter("listItem"),u=t.indentLines(t.containerFlow(e,s.current()),d);return l(),u;function d(c,m,p){return m?(p?"":" ".repeat(a))+c:(p?o:o+" ".repeat(a-o.length))+c}}function Hc(e,n,t,r){const i=t.enter("paragraph"),o=t.enter("phrasing"),a=t.containerPhrasing(e,r);return o(),i(),a}function $c(e,n,t,r){if(!e.children.some(function(s){return yc(s)}))return t.containerFlow(e,r);const o=t.enter("phrasing"),a=t.containerPhrasing(e,r);return o(),a}function Wc(e){const n=e.options.strong||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize strong with `"+n+"` for `options.strong`, expected `*`, or `_`");return n}pt.attention=Gc;pt.peek=Qc;function pt(e,n,t,r){const i=t.enter("phrasing"),o=t.containerPhrasing({type:"root",children:[e]},r);return i(),o}function Gc(e,n){return{construct:"strong",markers:Wc(n)==="*"?["*","_"]:["_","*"],sizes:[2]}}function Qc(e,n,t){return t.options.strong||"*"}function Xc(e,n,t,r){return t.safe(e.value,r)}function Yc(e){const n=e.options.ruleRepetition||3;if(n<3)throw new Error("Cannot serialize rules with repetition `"+n+"` for `options.ruleRepetition`, expected `3` or more");return n}function Jc(e,n,t){const r=(gi(t)+(t.options.ruleSpaces?" ":"")).repeat(Yc(t));return t.options.ruleSpaces?r.slice(0,-1):r}const yi={blockquote:bc,break:pr,code:Ec,definition:Cc,emphasis:ct,hardBreak:pr,heading:Lc,html:ui,image:ci,imageReference:di,inlineCode:pi,link:hi,linkReference:fi,list:Bc,listItem:Uc,paragraph:Hc,root:$c,strong:pt,text:Xc,thematicBreak:Jc};function Kc(){return{enter:{table:Zc,tableData:mr,tableHeader:mr,tableRow:nd},exit:{codeText:td,table:ed,tableData:An,tableHeader:An,tableRow:An}}}function Zc(e){const n=e._align;this.enter({type:"table",align:n.map(function(t){return t==="none"?null:t}),children:[]},e),this.data.inTable=!0}function ed(e){this.exit(e),this.data.inTable=void 0}function nd(e){this.enter({type:"tableRow",children:[]},e)}function An(e){this.exit(e)}function mr(e){this.enter({type:"tableCell",children:[]},e)}function td(e){let n=this.resume();this.data.inTable&&(n=n.replace(/\\([\\|])/g,rd));const t=this.stack[this.stack.length-1];t.type,t.value=n,this.exit(e)}function rd(e,n){return n==="|"?n:e}function id(e){const n=e||{},t=n.tableCellPadding,r=n.tablePipeAlign,i=n.stringLength,o=t?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:m,table:a,tableCell:l,tableRow:s}};function a(p,g,x,S){return u(d(p,x,S),p.align)}function s(p,g,x,S){const y=c(p,x,S),C=u([y]);return C.slice(0,C.indexOf(`
`))}function l(p,g,x,S){const y=x.enter("tableCell"),C=x.enter("phrasing"),E=x.containerPhrasing(p,{...S,before:o,after:o});return C(),y(),E}function u(p,g){return fc(p,{align:g,alignDelimiters:r,padding:t,stringLength:i})}function d(p,g,x){const S=p.children;let y=-1;const C=[],E=g.enter("table");for(;++y<S.length;)C[y]=c(S[y],g,x);return E(),C}function c(p,g,x){const S=p.children;let y=-1;const C=[],E=g.enter("tableRow");for(;++y<S.length;)C[y]=l(S[y],p,g,x);return E(),C}function m(p,g,x){let S=yi.inlineCode(p,g,x);return x.stack.includes("tableCell")&&(S=S.replace(/\|/g,"\\$&")),S}}function ad(){return{exit:{taskListCheckValueChecked:hr,taskListCheckValueUnchecked:hr,paragraph:sd}}}function od(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:ld}}}function hr(e){const n=this.stack[this.stack.length-2];n.type,n.checked=e.type==="taskListCheckValueChecked"}function sd(e){const n=this.stack[this.stack.length-2];if(n&&n.type==="listItem"&&typeof n.checked=="boolean"){const t=this.stack[this.stack.length-1];t.type;const r=t.children[0];if(r&&r.type==="text"){const i=n.children;let o=-1,a;for(;++o<i.length;){const s=i[o];if(s.type==="paragraph"){a=s;break}}a===t&&(r.value=r.value.slice(1),r.value.length===0?t.children.shift():t.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,t.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function ld(e,n,t,r){const i=e.children[0],o=typeof e.checked=="boolean"&&i&&i.type==="paragraph",a="["+(e.checked?"x":" ")+"] ",s=t.createTracker(r);o&&s.move(a);let l=yi.listItem(e,n,t,{...r,...s.current()});return o&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),l;function u(d){return d+a}}function ud(){return[Nu(),ic(),lc(),Kc(),ad()]}function cd(e){return{extensions:[Mu(),ac(e),uc(),id(e),od()]}}const dd={tokenize:yd,partial:!0},bi={tokenize:bd,partial:!0},xi={tokenize:xd,partial:!0},wi={tokenize:wd,partial:!0},pd={tokenize:kd,partial:!0},ki={name:"wwwAutolink",tokenize:fd,previous:Si},vi={name:"protocolAutolink",tokenize:gd,previous:Ei},be={name:"emailAutolink",tokenize:hd,previous:Ti},me={};function md(){return{text:me}}let Ee=48;for(;Ee<123;)me[Ee]=be,Ee++,Ee===58?Ee=65:Ee===91&&(Ee=97);me[43]=be;me[45]=be;me[46]=be;me[95]=be;me[72]=[be,vi];me[104]=[be,vi];me[87]=[be,ki];me[119]=[be,ki];function hd(e,n,t){const r=this;let i,o;return a;function a(c){return!Un(c)||!Ti.call(r,r.previous)||mt(r.events)?t(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),s(c))}function s(c){return Un(c)?(e.consume(c),s):c===64?(e.consume(c),l):t(c)}function l(c){return c===46?e.check(pd,d,u)(c):c===45||c===95||J(c)?(o=!0,e.consume(c),l):d(c)}function u(c){return e.consume(c),i=!0,l}function d(c){return o&&i&&Z(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),n(c)):t(c)}}function fd(e,n,t){const r=this;return i;function i(a){return a!==87&&a!==119||!Si.call(r,r.previous)||mt(r.events)?t(a):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(dd,e.attempt(bi,e.attempt(xi,o),t),t)(a))}function o(a){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),n(a)}}function gd(e,n,t){const r=this;let i="",o=!1;return a;function a(c){return(c===72||c===104)&&Ei.call(r,r.previous)&&!mt(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),e.consume(c),s):t(c)}function s(c){if(Z(c)&&i.length<5)return i+=String.fromCodePoint(c),e.consume(c),s;if(c===58){const m=i.toLowerCase();if(m==="http"||m==="https")return e.consume(c),l}return t(c)}function l(c){return c===47?(e.consume(c),o?u:(o=!0,l)):t(c)}function u(c){return c===null||tn(c)||$(c)||_e(c)||cn(c)?t(c):e.attempt(bi,e.attempt(xi,d),t)(c)}function d(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),n(c)}}function yd(e,n,t){let r=0;return i;function i(a){return(a===87||a===119)&&r<3?(r++,e.consume(a),i):a===46&&r===3?(e.consume(a),o):t(a)}function o(a){return a===null?t(a):n(a)}}function bd(e,n,t){let r,i,o;return a;function a(u){return u===46||u===95?e.check(wi,l,s)(u):u===null||$(u)||_e(u)||u!==45&&cn(u)?l(u):(o=!0,e.consume(u),a)}function s(u){return u===95?r=!0:(i=r,r=void 0),e.consume(u),a}function l(u){return i||r||!o?t(u):n(u)}}function xd(e,n){let t=0,r=0;return i;function i(a){return a===40?(t++,e.consume(a),i):a===41&&r<t?o(a):a===33||a===34||a===38||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===60||a===63||a===93||a===95||a===126?e.check(wi,n,o)(a):a===null||$(a)||_e(a)?n(a):(e.consume(a),i)}function o(a){return a===41&&r++,e.consume(a),i}}function wd(e,n,t){return r;function r(s){return s===33||s===34||s===39||s===41||s===42||s===44||s===46||s===58||s===59||s===63||s===95||s===126?(e.consume(s),r):s===38?(e.consume(s),o):s===93?(e.consume(s),i):s===60||s===null||$(s)||_e(s)?n(s):t(s)}function i(s){return s===null||s===40||s===91||$(s)||_e(s)?n(s):r(s)}function o(s){return Z(s)?a(s):t(s)}function a(s){return s===59?(e.consume(s),r):Z(s)?(e.consume(s),a):t(s)}}function kd(e,n,t){return r;function r(o){return e.consume(o),i}function i(o){return J(o)?t(o):n(o)}}function Si(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||$(e)}function Ei(e){return!Z(e)}function Ti(e){return!(e===47||Un(e))}function Un(e){return e===43||e===45||e===46||e===95||J(e)}function mt(e){let n=e.length,t=!1;for(;n--;){const r=e[n][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){t=!0;break}if(r._gfmAutolinkLiteralWalkedInto){t=!1;break}}return e.length>0&&!t&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),t}const vd={tokenize:zd,partial:!0};function Sd(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:Id,continuation:{tokenize:_d},exit:Ad}},text:{91:{name:"gfmFootnoteCall",tokenize:Cd},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Ed,resolveTo:Td}}}}function Ed(e,n,t){const r=this;let i=r.events.length;const o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let a;for(;i--;){const l=r.events[i][1];if(l.type==="labelImage"){a=l;break}if(l.type==="gfmFootnoteCall"||l.type==="labelLink"||l.type==="label"||l.type==="image"||l.type==="link")break}return s;function s(l){if(!a||!a._balanced)return t(l);const u=de(r.sliceSerialize({start:a.end,end:r.now()}));return u.codePointAt(0)!==94||!o.includes(u.slice(1))?t(l):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(l),e.exit("gfmFootnoteCallLabelMarker"),n(l))}}function Td(e,n){let t=e.length;for(;t--;)if(e[t][1].type==="labelImage"&&e[t][0]==="enter"){e[t][1];break}e[t+1][1].type="data",e[t+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[t+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[t+3][1].end),end:Object.assign({},e[t+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const o={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},a={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},s=[e[t+1],e[t+2],["enter",r,n],e[t+3],e[t+4],["enter",i,n],["exit",i,n],["enter",o,n],["enter",a,n],["exit",a,n],["exit",o,n],e[e.length-2],e[e.length-1],["exit",r,n]];return e.splice(t,e.length-t+1,...s),e}function Cd(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o=0,a;return s;function s(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),l}function l(c){return c!==94?t(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(c){if(o>999||c===93&&!a||c===null||c===91||$(c))return t(c);if(c===93){e.exit("chunkString");const m=e.exit("gfmFootnoteCallString");return i.includes(de(r.sliceSerialize(m)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),n):t(c)}return $(c)||(a=!0),o++,e.consume(c),c===92?d:u}function d(c){return c===91||c===92||c===93?(e.consume(c),o++,u):u(c)}}function Id(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o,a=0,s;return l;function l(g){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(g){return g===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",d):t(g)}function d(g){if(a>999||g===93&&!s||g===null||g===91||$(g))return t(g);if(g===93){e.exit("chunkString");const x=e.exit("gfmFootnoteDefinitionLabelString");return o=de(r.sliceSerialize(x)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),m}return $(g)||(s=!0),a++,e.consume(g),g===92?c:d}function c(g){return g===91||g===92||g===93?(e.consume(g),a++,d):d(g)}function m(g){return g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),i.includes(o)||i.push(o),O(e,p,"gfmFootnoteDefinitionWhitespace")):t(g)}function p(g){return n(g)}}function _d(e,n,t){return e.check(We,n,e.attempt(vd,n,t))}function Ad(e){e.exit("gfmFootnoteDefinition")}function zd(e,n,t){const r=this;return O(e,i,"gfmFootnoteDefinitionIndent",5);function i(o){const a=r.events[r.events.length-1];return a&&a[1].type==="gfmFootnoteDefinitionIndent"&&a[2].sliceSerialize(a[1],!0).length===4?n(o):t(o)}}function Pd(e){let t=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:o,resolveAll:i};return t==null&&(t=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(a,s){let l=-1;for(;++l<a.length;)if(a[l][0]==="enter"&&a[l][1].type==="strikethroughSequenceTemporary"&&a[l][1]._close){let u=l;for(;u--;)if(a[u][0]==="exit"&&a[u][1].type==="strikethroughSequenceTemporary"&&a[u][1]._open&&a[l][1].end.offset-a[l][1].start.offset===a[u][1].end.offset-a[u][1].start.offset){a[l][1].type="strikethroughSequence",a[u][1].type="strikethroughSequence";const d={type:"strikethrough",start:Object.assign({},a[u][1].start),end:Object.assign({},a[l][1].end)},c={type:"strikethroughText",start:Object.assign({},a[u][1].end),end:Object.assign({},a[l][1].start)},m=[["enter",d,s],["enter",a[u][1],s],["exit",a[u][1],s],["enter",c,s]],p=s.parser.constructs.insideSpan.null;p&&ce(m,m.length,0,dn(p,a.slice(u+1,l),s)),ce(m,m.length,0,[["exit",c,s],["enter",a[l][1],s],["exit",a[l][1],s],["exit",d,s]]),ce(a,u-1,l-u+3,m),l=u+m.length-2;break}}for(l=-1;++l<a.length;)a[l][1].type==="strikethroughSequenceTemporary"&&(a[l][1].type="data");return a}function o(a,s,l){const u=this.previous,d=this.events;let c=0;return m;function m(g){return u===126&&d[d.length-1][1].type!=="characterEscape"?l(g):(a.enter("strikethroughSequenceTemporary"),p(g))}function p(g){const x=an(u);if(g===126)return c>1?l(g):(a.consume(g),c++,p);if(c<2&&!t)return l(g);const S=a.exit("strikethroughSequenceTemporary"),y=an(g);return S._open=!y||y===2&&!!x,S._close=!x||x===2&&!!y,s(g)}}}class Ld{constructor(){this.map=[],this.index=new Map}add(n,t,r){Dd(this,n,t,r)}consume(n){if(this.map.sort(function(o,a){return o[0]-a[0]}),this.map.length===0)return;let t=this.map.length;const r=[];for(;t>0;)t-=1,r.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];r.push(n.slice()),n.length=0;let i=r.pop();for(;i;){for(const o of i)n.push(o);i=r.pop()}this.map.length=0,this.index.clear()}}function Dd(e,n,t,r){if(t===0&&r.length===0)return;const i=e.index.get(n);if(i){i[1]+=t,i[2].push(...r);return}const o=[n,t,r];e.map.push(o),e.index.set(n,o)}function Fd(e,n){let t=!1;const r=[];for(;n<e.length;){const i=e[n];if(t){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[n-1][1].type==="tableDelimiterMarker"){const o=r.length-1;r[o]=r[o]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(t=!0);n+=1}return r}function jd(){return{flow:{null:{name:"table",tokenize:Rd,resolveAll:Nd}}}}function Rd(e,n,t){const r=this;let i=0,o=0,a;return s;function s(b){let _=r.events.length-1;for(;_>-1;){const{type:W}=r.events[_][1];if(W==="lineEnding"||W==="linePrefix")_--;else break}const A=_>-1?r.events[_][1].type:null,V=A==="tableHead"||A==="tableRow"?k:l;return V===k&&r.parser.lazy[r.now().line]?t(b):V(b)}function l(b){return e.enter("tableHead"),e.enter("tableRow"),u(b)}function u(b){return b===124||(a=!0,o+=1),d(b)}function d(b){return b===null?t(b):z(b)?o>1?(o=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),p):t(b):F(b)?O(e,d,"whitespace")(b):(o+=1,a&&(a=!1,i+=1),b===124?(e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),a=!0,d):(e.enter("data"),c(b)))}function c(b){return b===null||b===124||$(b)?(e.exit("data"),d(b)):(e.consume(b),b===92?m:c)}function m(b){return b===92||b===124?(e.consume(b),c):c(b)}function p(b){return r.interrupt=!1,r.parser.lazy[r.now().line]?t(b):(e.enter("tableDelimiterRow"),a=!1,F(b)?O(e,g,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(b):g(b))}function g(b){return b===45||b===58?S(b):b===124?(a=!0,e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),x):j(b)}function x(b){return F(b)?O(e,S,"whitespace")(b):S(b)}function S(b){return b===58?(o+=1,a=!0,e.enter("tableDelimiterMarker"),e.consume(b),e.exit("tableDelimiterMarker"),y):b===45?(o+=1,y(b)):b===null||z(b)?D(b):j(b)}function y(b){return b===45?(e.enter("tableDelimiterFiller"),C(b)):j(b)}function C(b){return b===45?(e.consume(b),C):b===58?(a=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(b),e.exit("tableDelimiterMarker"),E):(e.exit("tableDelimiterFiller"),E(b))}function E(b){return F(b)?O(e,D,"whitespace")(b):D(b)}function D(b){return b===124?g(b):b===null||z(b)?!a||i!==o?j(b):(e.exit("tableDelimiterRow"),e.exit("tableHead"),n(b)):j(b)}function j(b){return t(b)}function k(b){return e.enter("tableRow"),R(b)}function R(b){return b===124?(e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),R):b===null||z(b)?(e.exit("tableRow"),n(b)):F(b)?O(e,R,"whitespace")(b):(e.enter("data"),q(b))}function q(b){return b===null||b===124||$(b)?(e.exit("data"),R(b)):(e.consume(b),b===92?B:q)}function B(b){return b===92||b===124?(e.consume(b),q):q(b)}}function Nd(e,n){let t=-1,r=!0,i=0,o=[0,0,0,0],a=[0,0,0,0],s=!1,l=0,u,d,c;const m=new Ld;for(;++t<e.length;){const p=e[t],g=p[1];p[0]==="enter"?g.type==="tableHead"?(s=!1,l!==0&&(fr(m,n,l,u,d),d=void 0,l=0),u={type:"table",start:Object.assign({},g.start),end:Object.assign({},g.end)},m.add(t,0,[["enter",u,n]])):g.type==="tableRow"||g.type==="tableDelimiterRow"?(r=!0,c=void 0,o=[0,0,0,0],a=[0,t+1,0,0],s&&(s=!1,d={type:"tableBody",start:Object.assign({},g.start),end:Object.assign({},g.end)},m.add(t,0,[["enter",d,n]])),i=g.type==="tableDelimiterRow"?2:d?3:1):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")?(r=!1,a[2]===0&&(o[1]!==0&&(a[0]=a[1],c=Ke(m,n,o,i,void 0,c),o=[0,0,0,0]),a[2]=t)):g.type==="tableCellDivider"&&(r?r=!1:(o[1]!==0&&(a[0]=a[1],c=Ke(m,n,o,i,void 0,c)),o=a,a=[o[1],t,0,0])):g.type==="tableHead"?(s=!0,l=t):g.type==="tableRow"||g.type==="tableDelimiterRow"?(l=t,o[1]!==0?(a[0]=a[1],c=Ke(m,n,o,i,t,c)):a[1]!==0&&(c=Ke(m,n,a,i,t,c)),i=0):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")&&(a[3]=t)}for(l!==0&&fr(m,n,l,u,d),m.consume(n.events),t=-1;++t<n.events.length;){const p=n.events[t];p[0]==="enter"&&p[1].type==="table"&&(p[1]._align=Fd(n.events,t))}return e}function Ke(e,n,t,r,i,o){const a=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",s="tableContent";t[0]!==0&&(o.end=Object.assign({},De(n.events,t[0])),e.add(t[0],0,[["exit",o,n]]));const l=De(n.events,t[1]);if(o={type:a,start:Object.assign({},l),end:Object.assign({},l)},e.add(t[1],0,[["enter",o,n]]),t[2]!==0){const u=De(n.events,t[2]),d=De(n.events,t[3]),c={type:s,start:Object.assign({},u),end:Object.assign({},d)};if(e.add(t[2],0,[["enter",c,n]]),r!==2){const m=n.events[t[2]],p=n.events[t[3]];if(m[1].end=Object.assign({},p[1].end),m[1].type="chunkText",m[1].contentType="text",t[3]>t[2]+1){const g=t[2]+1,x=t[3]-t[2]-1;e.add(g,x,[])}}e.add(t[3]+1,0,[["exit",c,n]])}return i!==void 0&&(o.end=Object.assign({},De(n.events,i)),e.add(i,0,[["exit",o,n]]),o=void 0),o}function fr(e,n,t,r,i){const o=[],a=De(n.events,t);i&&(i.end=Object.assign({},a),o.push(["exit",i,n])),r.end=Object.assign({},a),o.push(["exit",r,n]),e.add(t+1,0,o)}function De(e,n){const t=e[n],r=t[0]==="enter"?"start":"end";return t[1][r]}const Md={name:"tasklistCheck",tokenize:qd};function Od(){return{text:{91:Md}}}function qd(e,n,t){const r=this;return i;function i(l){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?t(l):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),o)}function o(l){return $(l)?(e.enter("taskListCheckValueUnchecked"),e.consume(l),e.exit("taskListCheckValueUnchecked"),a):l===88||l===120?(e.enter("taskListCheckValueChecked"),e.consume(l),e.exit("taskListCheckValueChecked"),a):t(l)}function a(l){return l===93?(e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),s):t(l)}function s(l){return z(l)?n(l):F(l)?e.check({tokenize:Bd},n,t)(l):t(l)}}function Bd(e,n,t){return O(e,r,"whitespace");function r(i){return i===null?t(i):n(i)}}function Vd(e){return Rr([md(),Sd(),Pd(e),jd(),Od()])}const Ud={};function Hd(e){const n=this,t=e||Ud,r=n.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),o=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),a=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(Vd(t)),o.push(ud()),a.push(cd(t))}const Ci={blue:{text:"text-[#0071e3]",bg:"bg-[#e8f2ff]",border:"border-[#0071e3]/20"},green:{text:"text-[#188038]",bg:"bg-[#eaf7ef]",border:"border-[#34a853]/20"},purple:{text:"text-[#7b2ff7]",bg:"bg-[#f0e9ff]",border:"border-[#7b2ff7]/20"}},Ii=({post:e,featured:n=!1})=>I.jsx("div",{className:`relative overflow-hidden bg-white ${n?"min-h-[380px]":"h-60"}`,children:I.jsx("img",{src:e.coverImage,alt:e.coverAlt,className:"absolute inset-0 h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.025]"})}),gr=({post:e,featured:n=!1})=>{const{t}=ln(),r=Ci[e.accent];return I.jsxs($n,{to:`/blog/${e.slug}`,className:`group overflow-hidden rounded-lg border border-black/[0.08] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl ${n?"grid gap-0 lg:grid-cols-[1.05fr_0.95fr]":"flex h-full min-h-[520px] flex-col"}`,children:[I.jsx(Ii,{post:e,featured:n}),I.jsxs("div",{className:"flex flex-col p-6 sm:p-8",children:[I.jsxs("div",{className:"mb-5 flex flex-wrap items-center gap-3 text-sm text-muted-foreground",children:[I.jsxs("span",{className:`meta-pill ${r.border} ${r.bg} ${r.text}`,children:[I.jsx(wr,{className:"h-4 w-4"}),t(e.category)]}),I.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[I.jsx(xr,{className:"h-4 w-4"}),e.readTime]})]}),I.jsx("h2",{className:`${n?"text-3xl md:text-4xl":"text-2xl"} font-bold tracking-tight text-foreground`,children:t(e.title)}),I.jsx("p",{className:"mt-3 text-sm font-medium text-muted-foreground",children:e.displayDate}),I.jsx("p",{className:"mt-5 leading-relaxed text-muted-foreground",children:t(e.excerpt)}),I.jsxs("div",{className:"mt-auto pt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-dark",children:[t("Read article"),I.jsx(qi,{className:"h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]})]})]})},$d=()=>{const{t:e,language:n}=ln(),[t,...r]=kr(n).filter(i=>!i.slug.startsWith("atlas-"));return I.jsx("main",{id:"main",tabIndex:-1,className:"flex-1 w-full bg-[#f5f5f7] pt-28 pb-20",children:I.jsxs("section",{className:"mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8",children:[I.jsxs("div",{className:"mb-12",children:[I.jsx("span",{className:"meta-pill mb-4 border-blue-100 bg-blue-50 text-primary-dark",children:e("Writing")}),I.jsx("h1",{className:"max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-6xl",children:e("Field notes.")}),I.jsx("p",{className:"mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground",children:e("Experiments, equations, and what I learned from them.","Experimentos, ecuaciones y lo que aprendí de ellos.")})]}),I.jsx(gr,{post:t,featured:!0}),I.jsx("div",{className:"mt-8 grid gap-6 md:grid-cols-2",children:r.map(i=>I.jsx(gr,{post:i},i.slug))})]})})},Wd=({post:e})=>{const{t:n}=ln(),t=Ci[e.accent];return I.jsx("main",{id:"main",tabIndex:-1,className:"flex-1 w-full bg-[#f5f5f7] pt-28 pb-20",children:I.jsxs("article",{className:"mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8",children:[I.jsxs($n,{to:"/blog",className:"mb-10 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:text-primary-dark",children:[I.jsx(br,{className:"h-4 w-4"}),n("Back to blog")]}),I.jsxs("header",{children:[I.jsxs("span",{className:`meta-pill ${t.border} ${t.bg} ${t.text}`,children:[I.jsx(wr,{className:"h-4 w-4"}),n(e.category)]}),I.jsx("h1",{className:"mt-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl",children:n(e.title)}),I.jsx("p",{className:"mt-5 text-xl leading-relaxed text-muted-foreground",children:n(e.subtitle)}),I.jsxs("div",{className:"mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground",children:[I.jsxs("span",{className:"inline-flex items-center gap-2",children:[I.jsx(Vi,{className:"h-4 w-4"}),n("Adam Maltoni")]}),I.jsxs("span",{className:"inline-flex items-center gap-2",children:[I.jsx(Bi,{className:"h-4 w-4"}),e.displayDate]}),I.jsxs("span",{className:"inline-flex items-center gap-2",children:[I.jsx(xr,{className:"h-4 w-4"}),e.readTime]})]}),I.jsx("div",{className:"mt-8 overflow-hidden rounded-lg border border-black/[0.08] bg-white shadow-sm",children:I.jsx(Ii,{post:e,featured:!0})})]}),I.jsx("div",{className:"blog-prose mt-10",children:I.jsx(Iu,{remarkPlugins:[Hd],components:{a:({node:r,...i})=>I.jsx("a",{...i,target:"_blank",rel:"noopener noreferrer"}),img:({node:r,...i})=>I.jsx("img",{...i,loading:"lazy",decoding:"async",className:"my-9 w-full rounded-xl border border-black/[0.08] bg-white p-2 shadow-lg shadow-black/[0.06]"}),table:({children:r})=>I.jsx("div",{className:"blog-table-scroll",tabIndex:0,role:"region","aria-label":n("Research results table"),children:I.jsx("table",{children:r})}),code:({node:r,className:i,children:o,...a})=>!i?I.jsx("code",{...a,className:"rounded bg-gray-100 px-1.5 py-0.5 text-[0.9em] text-foreground",children:o}):I.jsx("code",{...a,className:i,children:o})},children:e.content})})]})})},Yd=()=>{const{t:e,language:n}=ln(),{slug:t}=Ni(),r=xt.useMemo(()=>kr(n),[n]),i=t?r.find(o=>o.slug===t):void 0;return xt.useEffect(()=>{const o=document.title;return document.title=`${(i==null?void 0:i.title)??e(t?"Article not found":"Writing")} | Adam Maltoni`,()=>{document.title=o}},[i,t,e]),I.jsxs("div",{className:"blog-page flex min-h-screen flex-col bg-background",children:[I.jsx("a",{className:"skip-link",href:"#main",children:e("Skip to content")}),I.jsx(Mi,{}),t?i?I.jsx(Wd,{post:i}):I.jsx("main",{id:"main",tabIndex:-1,className:"flex flex-1 items-center justify-center px-4 pt-28 pb-20",children:I.jsxs("div",{className:"max-w-xl text-center",children:[I.jsx("h1",{className:"text-4xl font-bold tracking-tight text-foreground",children:e("Article not found")}),I.jsx("p",{className:"mt-4 text-muted-foreground",children:e("The article you are looking for is not available in this portfolio.")}),I.jsxs($n,{to:"/blog",className:"mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background",children:[I.jsx(br,{className:"h-4 w-4"}),e("Back to blog")]})]})}):I.jsx($d,{}),I.jsx(Oi,{})]})};export{Yd as default};
