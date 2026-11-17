import{c as Hn,l as qr,a as nn,g as bi,j as C,u as ln,b as jr,r as vt,N as Mr,L as $n,A as yi,F as Or,d as Br}from"./index-Coerga0Q.js";import{C as Vr}from"./calendar-BP3xc5Fk.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=Hn("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=Hn("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=Hn("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]),xt=e=>`/${e}`,Hr={slug:"atlas-building-a-place-to-learn",title:"Atlas: Building a Place to Learn, Not Just Read",subtitle:"The product and engineering decisions behind an interactive, bilingual learning platform.",excerpt:"Why I built Atlas around real experiments, reusable learning components, and private cloud profiles, and what I am learning from its first users.",date:"2026-10-13",displayDate:"13 October 2026",readTime:"5 min read",category:"Building Atlas",accent:"blue",coverImage:xt("projects/atlas-learning.png"),coverAlt:"The real Atlas symbolic AI learning interface",content:`There is a big difference between reading an explanation of an algorithm and being able to work through one of its decisions. That gap is what I wanted Atlas to address.

The platform brings theory, worked examples, interactive laboratories, and guided practice into the same learning pathway. It currently covers symbolic AI, deep learning, and generative AI in English and Spanish. The first adoption figure is modest: **30+ unique users**, based on the current reported count. I treat that as a reason to keep listening, not as a finished validation of the product.

![The symbolic AI curriculum and learning pathway in Atlas.](${xt("projects/atlas-learning.png")})

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
`},ue=e=>`/${e}`,Ln=[{slug:"regularization-in-cnns-internal-activations",title:"Regularization in CNNs: Looking Inside the Network",subtitle:"How my thesis treated regularization as a change in representation geometry, not just a better validation curve.",excerpt:"My TFG compared seven regularizers on the same CNN and asked what they do to hidden activations, robustness, and generalization.",date:"2026-07-18",displayDate:"Published on 18 July 2026, 09:00",readTime:"21 min read",category:"Thesis",coverImage:ue("blog-plots/regularization-radar.png"),coverAlt:"Radar plot comparing CNN regularizers across evaluation metrics",accent:"blue",content:`Most regularization explanations eventually collapse into one plot: the training curve keeps going down, the validation curve stops improving, and the gap between them is called overfitting. That picture is useful, but it hides the object that I actually wanted to study in my TFG: the internal representation learned by the network.

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

That is the kind of restraint that makes a competition project more useful after the competition is over.`}];Ln.push(Hr);const $r=`La mayoría de las explicaciones de regularización terminan en el mismo gráfico: la curva de entrenamiento sigue bajando, la de validación deja de mejorar y llamamos sobreajuste a la distancia entre ambas. Es una imagen útil, pero deja fuera lo que quería estudiar en mi TFG: la representación interna que aprende la red.

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
`,Qr=`La explicación de difusión en una frase es casi demasiado limpia: añadir ruido hasta convertir una imagen en ruido gaussiano y aprender a invertir el proceso. Es una buena intuición, pero oculta la pregunta que hizo interesante este proyecto:

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
`,Wr=`En un concurso de finance-RL, lo tentador es ir directamente al agente: elegir PPO, definir acciones, entrenar y dibujar una curva de capital bonita. AthenAI me llevó en la dirección contraria.

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
`,Gr=`Hay una diferencia importante entre leer la explicación de un algoritmo y poder seguir una de sus decisiones. Quería que Atlas ayudara a cerrar esa distancia.

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
`,Xr=`Quasi tutte le spiegazioni della regolarizzazione finiscono per ridursi a un solo grafico: la curva di addestramento continua a scendere, quella di validazione smette di migliorare e la distanza tra le due si chiama overfitting. È un'immagine utile, ma nasconde proprio l'oggetto che volevo studiare nella mia tesi triennale: la rappresentazione interna che la rete impara.\r
\r
La domanda dietro la tesi era:\r
\r
**Quando due CNN raggiungono un'accuratezza di validazione simile, organizzano l'informazione al loro interno nello stesso modo?**\r
\r
La risposta è stata no. La regolarizzazione non cambiava solo il punteggio finale. Cambiava il modo in cui le attivazioni si distribuivano, si comprimevano, saturavano e reagivano alle perturbazioni. Il progetto è diventato un tentativo di rendere misurabile quella differenza.\r
\r
Detto così sembra ovvio, ma non è da lì che sono partito. Il mio primo istinto era fare il confronto classico tra regolarizzatori, ordinarli per accuratezza di validazione e scrivere la discussione attorno a quella tabella. Più checkpoint ispezionavo, meno mi convinceva. Alcuni modelli erano accurati ma internamente "affilati". Altri non erano in cima alla classifica sulla validazione pulita, eppure resistevano molto meglio al rumore sui parametri. La tesi è diventata interessante solo quando ho smesso di trattare l'accuratezza come tutta la storia e ho cominciato a trattare la rete come un sistema con uno stato nascosto.\r
\r
## L'impostazione: un modello volutamente noioso\r
\r
Lo scopo del progetto non era costruire un classificatore allo stato dell'arte. Volevo una CNN abbastanza grande da andare in overfitting, ma abbastanza semplice da poter attribuire i cambi di comportamento al regolarizzatore e non a trucchi architetturali.\r
\r
L'architettura è rimasta fissa in tutti gli esperimenti:\r
\r
\`\`\`text\r
immagine di input\r
  -> conv1: conv 3x3, 32 canali, ReLU, max-pool 2x2\r
  -> conv2: conv 3x3, 64 canali, ReLU, max-pool 2x2\r
  -> conv3: conv 3x3, 128 canali, ReLU, max-pool 2x2\r
  -> flatten\r
  -> fc1: 128 unità nascoste, ReLU\r
  -> fc2: logit delle classi\r
\`\`\`\r
\r
Per CIFAR-10 e SVHN questo significa che l'ultimo tensore convoluzionale è 4x4x128, che poi diventa un vettore di 2048 feature prima della rappresentazione densa a 128 dimensioni. Il modello di base arrivava a un'accuratezza di addestramento quasi perfetta su CIFAR-10 dopo 60 epoche, ed era esattamente quello che mi serviva: un modello con abbastanza capacità da memorizzare.\r
\r
Ho confrontato sette strategie di regolarizzazione:\r
\r
- Penalizzazione L1.\r
- Penalizzazione L2.\r
- Dropout.\r
- Early stopping.\r
- Rumore gaussiano iniettato durante l'addestramento.\r
- Data augmentation.\r
- Batch normalization.\r
\r
I dataset erano CIFAR-10, SVHN, CIFAR-100 e FashionMNIST. Ognuno metteva sotto sforzo l'impostazione in modo diverso: CIFAR-10 era il dominio principale dell'analisi, SVHN era più omogeneo, CIFAR-100 metteva in luce i limiti di capacità e FashionMNIST produceva un regime vicino al tetto, in cui quasi tutti i metodi erano già forti.\r
\r
## Perché l'accuratezza di validazione era una lente troppo piccola\r
\r
L'accuratezza di validazione ti dice se il classificatore ha azzeccato le etichette. Non ti dice se la rete ha usato una rappresentazione compatta, caotica o collassata. Nella tesi ho trattato le attivazioni nascoste come oggetti empirici che si possono raccogliere e misurare.\r
\r
Per ogni checkpoint addestrato caricavo il modello in modalità di valutazione e registravo dei forward hook su tre livelli:\r
\r
- conv1, il primo estrattore di feature.\r
- conv3, la rappresentazione convoluzionale più profonda.\r
- fc1, lo spazio latente denso subito prima della classificazione.\r
\r
La pipeline basata sugli hook era questa:\r
\r
\`\`\`text\r
per ogni dataset:\r
  per ogni metodo di regolarizzazione:\r
    per ogni valore dell'iperparametro:\r
      addestra per 60 epoche, salvando i checkpoint\r
      per le epoche selezionate:\r
        carica il checkpoint in modalità eval\r
        passa i dati di validazione nel modello\r
        cattura le attivazioni di conv1, conv3 e fc1\r
        converti le attivazioni in metriche confrontabili\r
\`\`\`\r
\r
Il dropout era disattivato in fase di estrazione e la batch normalization usava le statistiche apprese, quindi le attivazioni catturate riflettevano il modello addestrato così come lavora in inferenza.\r
\r
La scelta di progetto chiave è stata usare gli stessi intervalli del modello di base per discretizzare le attivazioni. Dividevo l'intervallo di attivazione osservato in bin e rappresentavo ogni esempio con un vettore ordinato di identificativi di bin. Questo conservava l'identità dei neuroni meglio di un istogramma globale. Due stati che hanno semplicemente lo stesso numero di neuroni attivi non dovrebbero essere trattati automaticamente come lo stesso stato interno.\r
\r
## Tre segnali interni\r
\r
La tesi usava tre metriche principali sulle attivazioni.\r
\r
**La percentuale di attivazioni uniche** misurava quanti stati discretizzati diversi comparivano in un passaggio di validazione:\r
\r
\`\`\`text\r
unique_pctg = numero di vettori di stato unici / numero di esempi di validazione\r
\`\`\`\r
\r
Se questo valore è troppo basso, molti input collassano nello stesso codice interno. Se è troppo alto, il modello potrebbe rappresentare ogni input in modo troppo specifico.\r
\r
**L'entropia di Shannon** misurava quanto era concentrato l'istogramma delle attivazioni:\r
\r
\`\`\`text\r
H = - somma sui bin di p_i log(p_i)\r
\`\`\`\r
\r
Un'entropia bassa significa che le attivazioni si concentrano in pochi bin. Un'entropia alta significa che sono più distribuite.\r
\r
**Il rapporto di dispersione** confrontava la deviazione standard delle attivazioni di un modello regolarizzato con quella del modello di base senza regolarizzazione:\r
\r
\`\`\`text\r
dispersion_ratio = std_attivazioni_regolarizzato / std_attivazioni_base\r
\`\`\`\r
\r
È utile perché la dispersione grezza dipende dal livello e dal dataset. Un rapporto minore di uno significa che il regolarizzatore ha compresso la distribuzione delle attivazioni rispetto al modello di base.\r
\r
Queste metriche non hanno niente di magico. Sono volutamente semplici. Il loro valore è che permettono di parlare della regolarizzazione come geometria delle rappresentazioni, e non solo come un intervento sul punteggio di validazione.\r
\r
## Cosa dicevano prima di tutto i risultati di accuratezza\r
\r
I risultati esterni non sorprendevano a grandi linee, ma erano importanti come punto di riferimento. Data augmentation e batch normalization davano i miglioramenti più forti di accuratezza di validazione in tutti i domini valutati. Dropout e L2 stavano in genere a metà. Rumore gaussiano, early stopping e L1 erano più deboli, a volte appena migliori del modello di base.\r
\r
Su CIFAR-10, per esempio, i metodi migliori del report erano:\r
\r
| Metodo | Accuratezza di validazione | Stati unici in fc1 | Entropia in fc1 | Rapporto di dispersione in fc1 |\r
| --- | ---: | ---: | ---: | ---: |\r
| Data augmentation | 0.785 | 89.22% | 1.78 | 0.46 |\r
| BatchNorm | 0.770 | 84.30% | 1.53 | 0.41 |\r
| Dropout | 0.727 | 37.23% | 1.17 | 0.29 |\r
| L2 | 0.714 | 97.93% | 2.09 | 0.57 |\r
| Modello di base | 0.694 | 99.98% | 2.87 | 1.06 |\r
\r
Anche il divario di generalizzazione raccontava qualcosa di importante. Su CIFAR-10 il modello di base, L2 e il rumore gaussiano arrivavano a un'accuratezza di addestramento vicina a 1.0 mantenendo un divario di circa 0.30. La data augmentation riduceva quel divario a circa 0.09. La batch normalization aveva ancora un divario più ampio, intorno a 0.23, il che suggerisce che parte del suo valore venisse dallo stabilizzare l'ottimizzazione più che dall'impedire la memorizzazione.\r
\r
Ma la parte più interessante era cosa succedeva leggendo insieme accuratezza e struttura interna.\r
\r
## La zona intermedia\r
\r
Lo schema principale era che i modelli forti tendevano a stare in una fascia intermedia di diversità interna, soprattutto in fc1. Troppo poca diversità sembrava compressione o sottoutilizzo della rappresentazione. Troppa diversità sembrava memorizzazione o specializzazione rumorosa.\r
\r
Per questo il modello di base non era solo "peggiore perché aveva meno accuratezza di validazione". Produceva anche percentuali di stati unici quasi massime ed entropia alta in fc1 su CIFAR-10. Usava molti stati interni distinti, ma quella diversità non si traduceva in una generalizzazione migliore. Al contrario, data augmentation e batch normalization comprimevano la distribuzione delle attivazioni pur conservando abbastanza varietà da classificare bene.\r
\r
Il dropout era particolarmente interessante. Non vinceva la classifica sulla validazione pulita, ma produceva una rappresentazione fc1 molto più compressa e più avanti mostrava una forte robustezza sui parametri. Questa distinzione conta: se leggi solo l'accuratezza, il dropout sembra semplicemente discreto. Se ispezioni la geometria interna e il comportamento sotto perturbazione, diventa un regolarizzatore qualitativamente diverso.\r
\r
## Conta anche il tempo\r
\r
La tesi non si limitava a ispezionare l'ultimo checkpoint. Seguiva l'evoluzione degli stati interni nel corso di 60 epoche. In molti casi l'accuratezza di validazione saliva in fretta nelle prime 10 epoche e poi si stabilizzava, mentre la diversità interna continuava a crescere.\r
\r
SVHN lo rendeva particolarmente visibile. Il modello di base e quello con rumore gaussiano arrivavano presto a circa il 90% di accuratezza di validazione, ma le loro percentuali di stati unici continuavano a crescere fino alla fine dell'addestramento. La data augmentation cresceva più lentamente e finiva con un divario di generalizzazione molto più piccolo.\r
\r
È un'idea diagnostica utile: oltre un certo punto, continuare ad addestrare può rendere la rappresentazione sempre più complicata senza miglioramenti significativi in validazione. La rete continua a cambiare al suo interno, ma non necessariamente in un modo che aiuti a generalizzare.\r
\r
## La robustezza cambiava la classifica\r
\r
La tesi includeva due esperimenti di perturbazione.\r
\r
Nel primo ho aggiunto rumore gaussiano alle immagini di validazione lasciando fissi i pesi del modello. Questo misurava il degrado con input rumorosi. Qui la storia non era "il miglior modello sui dati puliti è il più robusto". Anzi, data augmentation e BatchNorm, forti nella validazione pulita, peggioravano bruscamente con rumore gaussiano intenso a livello di pixel. Su CIFAR-10, con rumore sull'input sigma = 0.2, la data augmentation conservava circa il 49.7% della sua accuratezza pulita e BatchNorm circa il 34.9%, mentre il modello di base e L2 ne conservavano circa il 71.3% e il 69.0%.\r
\r
Questo non significa che il modello di base sia migliore. Significa che la robustezza dipende dalla perturbazione. La data augmentation era stata addestrata con invarianze a ritaglio e ribaltamento orizzontale, non con rumore gaussiano arbitrario sui pixel. Un metodo può migliorare la generalizzazione sui dati puliti e restare fragile davanti a un'altra famiglia di corruzioni.\r
\r
Nel secondo ho aggiunto rumore gaussiano direttamente ai pesi di conv1, conv3 e fc1. Era un'approssimazione pratica della geometria del minimo appreso. Se una piccola perturbazione dei parametri distrugge l'accuratezza, probabilmente il modello si trova in una regione più ripida della superficie di loss.\r
\r
È qui che il dropout si distingueva. Con rumore sui pesi sigma = 0.15, il dropout aveva una ritenzione costantemente alta tra livelli e dataset. Su CIFAR-10 conservava l'83.1% in conv1, il 77.5% in conv3 e l'86.1% in fc1. BatchNorm, nonostante le ottime prestazioni sui dati puliti, crollava di più nei livelli convoluzionali, con ritenzioni su CIFAR-10 del 51.2% in conv1 e del 42.0% in conv3.\r
\r
Il grafico radar qui sotto è la versione compatta di questa tensione. Ogni asse è normalizzato all'interno del dataset, quindi non va letto come una scala di misura assoluta. È una vista di profilo: accuratezza di validazione, robustezza al rumore sui dati, robustezza al rumore sui pesi in conv1/conv3/fc1 e coerenza tra livelli. La parte utile non è che incoroni un vincitore. La parte utile è che rende visibile la forma di ogni regolarizzatore.\r
\r
Il profilo che ho usato si può pensare come un piccolo vettore multiobiettivo per regolarizzatore e dataset:\r
\r
\`\`\`text\r
v_metodo,dataset =\r
  [\r
    val_acc,\r
    retention_data_noise_sigma_0.20,\r
    retention_weight_noise_conv1_sigma_0.15,\r
    retention_weight_noise_conv3_sigma_0.15,\r
    retention_weight_noise_fc1_sigma_0.15,\r
    inter_layer_consistency\r
  ]\r
\r
normalized_axis_value =\r
  15 + 85 * (x - min_axis) / (max_axis - min_axis)\r
\`\`\`\r
\r
Il minimo a 15 mantiene visibile un metodo debole senza fingere che valga zero, e la normalizzazione min-max per asse evita che il radar mescoli percentuali grezze con misure di robustezza eterogenee.\r
\r
![Grafici radar che confrontano i regolarizzatori per accuratezza, robustezza al rumore sui dati e sui pesi e coerenza tra livelli, su CIFAR-10, SVHN, CIFAR-100 e FashionMNIST.](/blog-plots/regularization-radar.png)\r
\r
Il grafico rendeva difficile ignorare una cosa: nessun metodo riempie la stella. La data augmentation spinge molto l'accuratezza pulita, soprattutto nei dataset di immagini in cui l'augmentation corrisponde alle invarianze del compito, ma non domina tutti gli assi di robustezza. Il dropout è meno brillante nella tabella di accuratezza, eppure la sua impronta sotto rumore sui pesi è costantemente ampia. BatchNorm ha un profilo forte in diversi domini ma può diventare fragile quando la perturbazione colpisce i parametri convoluzionali. L2 mantiene spesso uno spazio di stati interni ampio, che in termini di entropia può sembrare sano ma non significa automaticamente una generalizzazione migliore.\r
\r
Mi piace questa visualizzazione perché impedisce la frase pigra "il regolarizzatore X è il migliore". Costringe alla domanda successiva: migliore su quale asse, su quale dataset e contro quale perturbazione?\r
\r
La lezione non è che BatchNorm sia cattiva. La lezione è che lo stesso metodo può essere eccellente per l'ottimizzazione e fragile sotto perturbazione dei parametri. Quella differenza è invisibile se l'unica colonna del foglio di calcolo è l'accuratezza di validazione.\r
\r
## La conclusione pratica\r
\r
Alla fine del progetto non pensavo più alla regolarizzazione come a una classifica di tecniche. La pensavo come un insieme di bias con modi di fallire diversi.\r
\r
La data augmentation era la scelta migliore quando la priorità era la prestazione in validazione su immagini pulite. Il dropout era il candidato più forte quando contava la stabilità dei parametri. L2 e perfino il modello di base potevano sembrare relativamente resistenti al rumore stocastico sull'input, anche se sacrificavano la prestazione sui dati puliti. BatchNorm era potente ma "affilata" nell'estrattore di feature convoluzionale.\r
\r
Questa risposta condizionale è meno ordinata di una classifica, ma è più vicina a come userei davvero i risultati. Se addestrassi un piccolo modello di visione per un contesto in cui la distribuzione degli input è pulita e l'augmentation cattura le invarianze attese, comincerei dall'augmentation. Se mi interessassero compressione, pruning, pesi rumorosi in produzione o piccole perturbazioni dell'hardware, riguarderei il dropout e non lo scarterei solo perché ha perso la gara sulla validazione pulita. Se un modello mostrasse entropia alta, alta percentuale di stati unici e un divario ampio, lo tratterei come un campanello d'allarme e non, per default, come una "rappresentazione ricca".\r
\r
Così la risposta della tesi a "qual è il regolarizzatore migliore?" era volutamente condizionale:\r
\r
\`\`\`text\r
se la priorità è l'accuratezza sui dati puliti:\r
  di solito la data augmentation è la più forte\r
se la priorità è la piattezza / robustezza dei parametri:\r
  il dropout è più interessante\r
se la priorità è resistere al rumore sull'input:\r
  analizza con attenzione L2 e i comportamenti simili al modello di base\r
se il dataset è troppo facile o troppo difficile per l'architettura:\r
  l'accuratezza può nascondere l'effetto interno del regolarizzatore\r
\`\`\`\r
\r
Il risultato principale non era un nuovo regolarizzatore. Era un argomento di misura: le metriche sulle attivazioni interne possono fare da diagnostica per la sotto- e la sovra-regolarizzazione. Non sostituiscono l'accuratezza di validazione, ma spiegano cose che l'accuratezza schiaccia.\r
\r
## Cosa estenderei\r
\r
La prima estensione sarebbe ripetere il protocollo su architetture più profonde come ResNet-18 o VGG-16. La seconda sarebbe studiare combinazioni di regolarizzatori, visto che i modelli reali usano raramente un solo metodo alla volta. La terza sarebbe confrontare la similarità delle rappresentazioni con CKA, per verificare se due regolarizzatori con metriche diverse imparano davvero spazi strutturalmente simili.\r
\r
L'idea a più lungo termine è uno strumento diagnostico automatico: addestri un modello, estrai le attivazioni, calcoli le curve di entropia, dispersione e stati unici e segnali le rappresentazioni che sembrano collassate o troppo disperse, prima di affidarti solo al comportamento tardivo in validazione.\r
\r
Per me il valore della tesi è stato questo. Ha trasformato la CNN da una scatola nera che restituisce un numero di accuratezza in un sistema dinamico i cui stati interni si possono misurare, confrontare e mettere in discussione.\r
`,Yr=`La versione in una frase della generazione di immagini con la diffusione è quasi troppo pulita: aggiungi rumore finché un'immagine diventa statico gaussiano, poi impari a invertire il processo. È una buona intuizione, ma nasconde la domanda di ingegneria che ha reso interessante questo progetto:\r
\r
**Che cos'è esattamente "il processo" che invertiamo, e in quanti modi possiamo invertirlo?**\r
\r
In questo progetto ho lavorato a un sistema modulare di generazione di immagini costruito attorno alla diffusione basata sullo score. L'obiettivo non era addestrare un enorme modello da produzione. Era costruire una piattaforma sperimentale pratica in cui si potessero cambiare il processo di diffusione, lo schedule del rumore, il sampler e la modalità di condizionamento senza riscrivere tutto il sistema.\r
\r
Il sistema supportava dataset di immagini in scala di grigi e RGB, addestrava un modello di score in stile U-Net, generava campioni a partire dal rumore, li valutava con metriche standard e includeva modalità di generazione controllata come il condizionamento per classe e l'imputazione.\r
\r
La parte che mi è piaciuta di più è che il progetto si è rifiutato di restare un singolo notebook. Il codice di diffusione diventa fuorviante molto in fretta quando SDE, scheduler, sampler e visualizzazione sono tutti intrecciati. Puoi ottenere una griglia di immagini, ma non riesci a capire se un miglioramento viene dal processo, dal metodo di integrazione, da un trucco di condizionamento o solo da un seed fortunato. Volevo che il pacchetto rendesse queste scelte abbastanza esplicite da far fallire un esperimento sbagliato almeno per un motivo rintracciabile.\r
\r
## Lo score è la direzione per tornare ai dati\r
\r
Il processo in avanti parte da un'immagine pulita x_0 e la corrompe progressivamente in x_t. Per un modello di diffusione a tempo continuo, questa corruzione si può descrivere come una SDE:\r
\r
\`\`\`text\r
dx = f(x, t) dt + g(t) dw\r
\`\`\`\r
\r
Qui f è il drift, g controlla l'intensità della diffusione e dw è rumore browniano. Il modello non deve imparare questo processo in avanti: lo scegliamo noi.\r
\r
L'apprendimento avviene nella direzione inversa. Il modello impara una funzione di score:\r
\r
\`\`\`text\r
score(x_t, t) ~= gradient_x log p_t(x_t)\r
\`\`\`\r
\r
Intuitivamente, lo score punta verso le regioni in cui il campione rumoroso somiglia di più a qualcosa che potrebbe venire dalla distribuzione dei dati a quel livello di rumore. Il campionamento diventa allora navigazione numerica: si parte dal rumore, si chiede ripetutamente alla rete di score da che parte stanno i dati e si integra all'indietro.\r
\r
Le due equazioni a cui tornavo sempre erano l'obiettivo di denoising score matching e la dinamica a tempo inverso. In termini di implementazione, il modello impara un campo vettoriale condizionato dal tempo:\r
\r
\`\`\`text\r
theta* = argmin_theta E_t,x0,z [\r
  lambda(t) || s_theta(x_t, t, y) - target_score(x_t, x0, t) ||_2^2\r
]\r
\r
SDE inversa:\r
dx = [f(x,t) - g(t)^2 * s_theta(x,t)] dt + g(t) d_w_bar\r
\r
ODE del flusso di probabilità:\r
dx = [f(x,t) - 0.5 * g(t)^2 * s_theta(x,t)] dt\r
\`\`\`\r
\r
Ecco perché l'astrazione dei sampler contava. Euler-Maruyama, Predictor-Corrector e Probability Flow ODE non sono varianti estetiche: sono modi diversi di usare lo stesso campo di score appreso.\r
\r
Un ciclo di addestramento molto compresso è così:\r
\r
\`\`\`text\r
per ogni immagine x0 del dataset:\r
  campiona il tempo t\r
  campiona il rumore z\r
  costruisci l'immagine rumorosa xt con la SDE scelta\r
  chiedi a ScoreNet(xt, t, condizione) di prevedere la direzione dello score/rumore\r
  aggiorna la rete con una loss di denoising score matching\r
\`\`\`\r
\r
Questo è il nucleo concettuale. Il resto del progetto consiste nel rendere ogni blocco esplicito e sostituibile.\r
\r
## Tre processi in avanti: VE, VP e Sub-VP\r
\r
Il report implementava tre famiglie di processi di diffusione.\r
\r
**Variance Exploding (VE)** si comporta come un processo di tipo moto browniano in cui la varianza cresce nel tempo. Non c'è un termine di drift che riporti indietro il campione: l'immagine si degrada perché la dispersione aumenta. VE è concettualmente diretto e utile per capire le SDE basate sullo score, ma la sua scala del rumore può crescere in modo aggressivo.\r
\r
**Variance Preserving (VP)** aggiunge rumore mantenendo sotto controllo la varianza complessiva. Nel report del progetto, VP è descritto con un processo di tipo Ornstein-Uhlenbeck in cui sia il drift sia la diffusione dipendono dal tempo. L'immagine diventa progressivamente meno informativa, ma la distribuzione non esplode semplicemente verso l'esterno.\r
\r
**Sub-Variance Preserving (Sub-VP)** modifica i coefficienti di VP in modo che il passaggio dall'immagine al rumore sia più graduale. È abbastanza vicino a VP da condividerne gran parte della struttura, ma abbastanza diverso da rendere i confronti interessanti.\r
\r
Il senso pratico di implementarli tutti e tre era semplice: il processo di diffusione non è un dettaglio di sfondo. Cambia la geometria segnale-rumore vista durante l'addestramento e il comportamento numerico che si incontra durante il campionamento.\r
\r
## Schedule del rumore: lineare contro coseno\r
\r
Per VP e Sub-VP il sistema aveva bisogno di uno schedule che controllasse la velocità con cui si introduce il rumore. Ho implementato due opzioni:\r
\r
- Uno schedule lineare, facile da ragionare, che cambia l'intensità del rumore in modo diretto.\r
- Uno schedule a coseno, che cambia in modo più morbido e spesso dà un percorso di degrado più naturale.\r
\r
Lo schedule è una di quelle piccole scelte che in pratica diventano grandi. Se il modello vede troppo rumore troppo presto, l'apprendimento diventa inefficiente. Se la corruzione è troppo delicata, il modello potrebbe non imparare il regime ad alto rumore che serve all'inizio del campionamento. Un sistema di diffusione è meno un singolo algoritmo e più una catena di decisioni numeriche compatibili.\r
\r
## La ScoreNet e perché una U-Net è la scelta naturale\r
\r
Il modello di score usava un'architettura in stile U-Net con l'informazione temporale iniettata nella rete. Le U-Net funzionano bene qui perché il denoising è insieme locale e globale. La texture locale conta, ma il modello ha bisogno anche di contesto a lungo raggio per ricostruire una struttura coerente.\r
\r
Il sistema usava embedding di Fourier per il tempo e, nei casi condizionati, l'informazione di classe veniva iniettata insieme all'embedding temporale. Quindi il modello imparava non solo:\r
\r
\`\`\`text\r
score(x_t, t)\r
\`\`\`\r
\r
ma, quando c'erano etichette:\r
\r
\`\`\`text\r
score(x_t, t | y)\r
\`\`\`\r
\r
Questa distinzione conta per la generazione controllata. Se y è un'etichetta di classe, come una cifra in MNIST, il campo di score cambia: il modello deve guidare il campione rumoroso verso immagini plausibili che appartengano anche a quella classe.\r
\r
## Il campionamento è analisi numerica con la giacca dell'IA generativa\r
\r
Una volta addestrata la rete di score, generare immagini diventa integrare. Si parte da rumore casuale e si procede all'indietro attraverso la dinamica inversa appresa. Il progetto implementava quattro sampler.\r
\r
**Euler-Maruyama** è l'integratore stocastico di base. Combina un aggiornamento di tipo drift con un termine di rumore casuale. È semplice, veloce e un buon punto di riferimento, ma può richiedere molti passi per risultati di alta qualità.\r
\r
**Predictor-Corrector** migliora il percorso inverso di base alternando due mosse: un passo predittore che fa avanzare la SDE inversa e un passo correttore che rifinisce il campione, spesso con aggiornamenti di tipo Langevin. Può produrre immagini migliori, ma i passi correttori in più aumentano il calcolo.\r
\r
**Probability Flow ODE** trasforma il processo stocastico inverso in un'equazione differenziale ordinaria deterministica. Questo elimina la componente casuale durante il campionamento. Il risultato è spesso più deterministico e ripetibile; la diversità dipende più direttamente dal rumore iniziale.\r
\r
**Exponential Integrator** usa funzioni esponenziali per trattare con più cura parti della dinamica inversa. Nell'implementazione può anche diventare deterministico quando il parametro di rumore è zero, avvicinandosi concettualmente alla Probability Flow ODE in quel regime. Il report segnala un vincolo di compatibilità importante: il processo VE non si usa con l'Exponential Integrator.\r
\r
L'API di campionamento rendeva esplicito il compromesso:\r
\r
\`\`\`text\r
carica il modello addestrato\r
scegli il processo di diffusione\r
scegli un sampler compatibile\r
scegli il numero di passi e i parametri del sampler\r
genera un batch\r
mostra i campioni\r
\`\`\`\r
\r
Può sembrare normale modularità del software, ma per i modelli di diffusione è una cosa importante. Un sampler non è solo un dettaglio di implementazione: fa parte del comportamento del modello.\r
\r
Uno dei controlli utili è stato misurare i tempi delle combinazioni di sampler invece di guardare solo le immagini finali. Il grafico qui sotto non è un benchmark universale: viene da un contesto sperimentale piccolo, quindi non interpreterei troppo i rapporti tra CPU e CUDA. Ma cattura la forma ingegneristica del problema: in questa configurazione Predictor-Corrector costa poco, Euler-Maruyama pesa di più e l'Exponential Integrator sta nel mezzo, comportandosi in modo diverso dai sampler stocastici.\r
\r
![Tempo medio di campionamento per sampler e dispositivo in un esperimento Sub-VP su MNIST con la cifra 3.](/blog-plots/diffusion-sampler-runtime.png)\r
\r
Questo conta perché la scelta del sampler non riguarda solo la qualità visiva. Cambia la latenza, la ripetibilità e il numero di passi inversi che ci si può permettere. In un notebook didattico quel compromesso può restare nascosto. In un pacchetto riutilizzabile va messo in evidenza, perché il sampler "migliore" secondo una metrica può essere quello sbagliato per un flusso di lavoro interattivo.\r
\r
## Condizionamento: spingere il campione verso una classe\r
\r
Il sistema includeva la generazione condizionata per classe quando il dataset aveva etichette. Il modello può essere addestrato con embedding di classe, così la generazione può chiedere una categoria specifica:\r
\r
\`\`\`text\r
classe del campione = 3\r
parti da rumore gaussiano\r
esegui il processo inverso con score(x_t, t | classe=3)\r
restituisci immagini che dovrebbero somigliare a quella classe\r
\`\`\`\r
\r
Il report discute anche la classifier-free guidance. L'idea di base è imparare sia il comportamento condizionato sia quello non condizionato, e poi combinarli durante il campionamento:\r
\r
\`\`\`text\r
guided_score =\r
  unconditional_score\r
  + guidance_scale * (conditional_score - unconditional_score)\r
\`\`\`\r
\r
Aumentare la scala di guidance spinge di più verso la condizione di classe. Con troppa poca guidance il segnale di classe è debole; con troppa la diversità può risentirne. Una delle osservazioni utili del progetto è stata che l'intensità della guidance si può regolare nel tempo per bilanciare precisione visiva e varietà.\r
\r
## Imputazione: la diffusione come modifica vincolata\r
\r
L'imputazione era l'altro meccanismo di controllo. Invece di generare liberamente tutta l'immagine, il modello riceve un'immagine osservata in parte e una maschera binaria che indica quale regione manca. Il processo inverso è vincolato in modo che i pixel osservati restino fissi mentre la regione mancante viene rigenerata.\r
\r
Il ciclo concettuale è:\r
\r
\`\`\`text\r
dati l'immagine originale x e la maschera M:\r
  tieni fissa la regione osservata\r
  diffondi o inizializza la regione mancante\r
  a ogni passo inverso:\r
    aggiorna solo la regione mascherata con il modello di score\r
    ripristina i pixel osservati dall'immagine nota\r
\`\`\`\r
\r
Questo trasforma la diffusione da "fammi un'immagine" a "completa questa immagine in modo coerente con il suo contesto". È una versione piccola dello stesso principio dietro molti flussi moderni di modifica delle immagini: il modello ha imparato una distribuzione sulle immagini e la maschera vincola dove può muoversi.\r
\r
![Demo di imputazione su MNIST: cifre originali, input mascherati e ricostruzione delle regioni mancanti.](/blog-plots/diffusion-imputation.png)\r
\r
La demo di imputazione è piccola, ma è un buon test per capire se l'implementazione fa davvero generazione condizionata e non solo campionamento non condizionato con una maschera disegnata sopra. I pixel osservati vanno reimposti durante il processo inverso, altrimenti il campione si allontana dal contesto noto. Quel minuscolo dettaglio di implementazione è proprio il tipo di cosa che separa una spiegazione della diffusione da uno strumento di diffusione.\r
\r
## Valutazione: non fidarti della griglia più bella\r
\r
Il progetto includeva un modulo di metriche con tre misure comuni per la generazione di immagini.\r
\r
**Bit per dimensione (BPD)** stima quanto bene il modello spiega la distribuzione dei dati, normalizzato per la dimensionalità dell'immagine.\r
\r
**Frechet Inception Distance (FID)** confronta le statistiche delle immagini generate con quelle delle immagini reali in uno spazio di feature di Inception. Più basso è meglio, e la metrica si usa spesso come approssimazione grossolana del realismo visivo e della somiglianza tra distribuzioni.\r
\r
**Inception Score (IS)** cerca di premiare immagini che siano sia classificabili sia diverse tra le classi.\r
\r
Queste metriche sono imperfette, soprattutto su piccoli esperimenti accademici e dataset semplici. Includerle però conta, perché le griglie di immagini sono pericolosamente convincenti. Un campione generato può sembrare promettente mentre il modello sta collassando in diversità, oppure la metrica può sembrare accettabile mentre le immagini sono sfocate. L'approccio sano è guardare entrambe le cose.\r
\r
## La forma del software\r
\r
Il report descrive il sistema come un pacchetto e non come un singolo notebook. Il design principale separava:\r
\r
- Definizioni dei processi di diffusione.\r
- Schedule del rumore.\r
- L'architettura ScoreNet.\r
- Routine di addestramento.\r
- Algoritmi di campionamento.\r
- Configurazione in YAML o dizionario.\r
- Strumenti di condizionamento e imputazione.\r
- Funzioni di valutazione.\r
- Notebook per addestramento, generazione, valutazione ed esempi avanzati.\r
\r
L'orchestratore centrale era una classe sul modello di DiffusionExperiment che nascondeva i collegamenti all'utente. Un flusso tipico era:\r
\r
\`\`\`text\r
experiment = DiffusionExperiment(config)\r
experiment.train(dataset)\r
experiment.sample_and_plot(sampler="predictor_corrector")\r
experiment.evaluate(metrics=["bpd", "fid", "is"])\r
\`\`\`\r
\r
L'implementazione gestiva anche requisiti pratici: input in scala di grigi o RGB, normalizzazione in [-1, 1], formato dei tensori PyTorch, salvataggio e caricamento dei modelli, rilevamento di CPU/GPU, test dei componenti chiave e notebook che eseguono i flussi in ordine.\r
\r
## Cosa hanno mostrato le demo\r
\r
Il report descrive cinque notebook dimostrativi.\r
\r
Il primo addestrava modelli sulla cifra 3 di MNIST, con le varianti VE, VP e Sub-VP e schedule lineari o a coseno. Il secondo confrontava i metodi di campionamento dei modelli addestrati: Euler-Maruyama, Predictor-Corrector, Probability Flow ODE ed Exponential Integrator. Il terzo passava alle immagini a colori con la classe barca di CIFAR-10. Il quarto valutava i campioni generati con BPD, FID e IS. Il quinto mostrava il condizionamento per classe e l'imputazione sulle cifre di MNIST.\r
\r
I risultati erano volutamente presentati tenendo conto di un calcolo modesto. Addestrare da zero un modello basato su U-Net, con dimensioni ridotte e un numero limitato di passi, non può competere con i grandi sistemi di diffusione. Ma le immagini generate erano abbastanza coerenti da dimostrare che il sistema aveva imparato relazioni utili tra rumore, informazione di classe e forma visiva.\r
\r
![Progressione dei campioni Sub-VP con Predictor-Corrector: dal rumore casuale a immagini di barche di CIFAR-10.](/blog-plots/diffusion-denoising-samples.png)\r
\r
Non presenterei questi campioni come risultato artistico. Sono più utili come prova in fase di debug. Il lato sinistro è ancora rumore, il lato destro ha imparato la struttura della classe, e il centro della pipeline è dove di solito emergono piccoli errori di normalizzazione, di scala dei timestep o di compatibilità del sampler. Quando un'immagine generata sembra sbagliata, il bug raramente è solo "il modello è scarso": può essere il target dello score, la funzione di probabilità marginale, l'embedding del timestep, la varianza del passo inverso o il percorso di condizionamento.\r
\r
Questo rende il progetto prezioso come piattaforma sperimentale: non "guarda, ho ricreato un modello di frontiera", ma "guarda, ogni pezzo importante della generazione di immagini basata sullo score è implementato, sostituibile e testabile".\r
\r
## La lezione che ne ho tratto\r
\r
I modelli di diffusione vengono spesso insegnati come se l'idea chiave fosse solo un denoising ripetuto. Costruirne uno rende più chiara la vera struttura. Un modello di diffusione è una pila:\r
\r
\`\`\`text\r
preprocessing dei dati\r
  -> SDE in avanti\r
  -> schedule del rumore\r
  -> rete di score\r
  -> obiettivo di addestramento\r
  -> sampler/integratore\r
  -> regola di condizionamento\r
  -> metrica di valutazione\r
\`\`\`\r
\r
Ogni livello si può cambiare. Ogni cambiamento ha conseguenze matematiche e software. VE, VP e Sub-VP definiscono geometrie del rumore diverse. Euler-Maruyama e Probability Flow ODE esprimono idee diverse sulla stocasticità durante il campionamento. Il condizionamento per classe e l'imputazione trasformano la generazione in una navigazione controllata nella distribuzione di immagini appresa.\r
\r
La parte più utile del progetto è stata vedere come la matematica diventa ingegneria. Le equazioni ti dicono come dovrebbe essere il processo; il design del pacchetto decide se puoi davvero confrontare le varianti senza smontare il sistema.\r
\r
È il tipo di progetto di IA generativa che mi piace: non solo una galleria di campioni, ma un piccolo laboratorio in cui i pezzi in movimento dell'algoritmo sono visibili.\r
`,Jr=`La versione allettante di un progetto di RL finanziario per una competizione è saltare subito all'agente. Scegli PPO, definisci uno spazio delle azioni, addestri una policy, disegni una bella curva di equity. Il progetto AthenAI mi ha spinto nella direzione opposta.\r
\r
La parte difficile non era la sigla dopo la parola "agente". La parte difficile era costruire una rappresentazione dello stato da cui un agente potesse imparare in modo onesto.\r
\r
Ho affrontato la sfida meno come "me ne intendo di finanza" e più come un problema di apprendimento delle rappresentazioni con regole sul leakage insolitamente severe. Ogni idea attraente doveva superare un test semplice: questo segnale potrebbe esistere al momento della decisione, e codifica per sbaglio la performance futura? Se la risposta non era chiara, la feature doveva scendere a diagnostica o a lavoro futuro.\r
\r
L'universo grezzo conteneva migliaia di file di algoritmi di trading proprietari, ognuno con righe OHLC intraday. C'era anche un file di operazioni del benchmark. Un'impostazione di RL ingenua tratterebbe ogni algoritmo come un asset e chiederebbe a un modello di allocare direttamente tra tutti. È fragile per tre motivi:\r
\r
- Molte serie di algoritmi sono brevi, sparse, costanti o rotte.\r
- L'universo non è stazionario.\r
- Il deployment non dovrebbe dipendere da API macroeconomiche in tempo reale, anche se le etichette macro sono utili in addestramento.\r
\r
Così il progetto è diventato una pipeline offline a strati:\r
\r
\`\`\`text\r
CSV grezzi degli algoritmi\r
  -> ricostruzione delle chiusure giornaliere\r
  -> filtro di qualità\r
  -> codifica di rendimenti e operazioni\r
  -> feature di personalità\r
  -> clustering comportamentale\r
  -> serie temporali per cluster\r
  -> feature di stato su finestre mobili\r
  -> strati di proxy macro\r
  -> interfaccia RL/backtesting\r
\`\`\`\r
\r
È meno spettacolare di "ho addestrato un bot di trading". Ed è anche più onesto.\r
\r
![Pipeline offline di AthenAI: dai file originali della competizione ai rendimenti giornalieri, personalità statica, clustering per fattori, stato dei proxy e interfaccia RL/backtesting.](/blog-plots/athenai-pipeline.png)\r
\r
## La competizione come problema di portafoglio offline\r
\r
L'impostazione formale era un problema sequenziale di gestione del portafoglio. A ogni data di decisione il sistema osserva lo stato attuale dell'universo di algoritmi e sceglie un'allocazione del capitale. La ricompensa arriva dopo, attraverso i rendimenti del portafoglio, corretti per rischio e costi.\r
\r
In notazione, un'azione di portafoglio si può scrivere come un vettore su C unità investibili:\r
\r
\`\`\`text\r
w_t in simplex(C)\r
sum_c w_t,c = 1\r
w_t,c >= 0\r
\`\`\`\r
\r
Il modello mentale utile è un MDP vincolato, con la differenza che lo stato viene ricostruito offline e lo spazio delle azioni è un universo compresso di cluster:\r
\r
\`\`\`text\r
s_t = [cluster_features_t, proxy_scores_t, alive_mask_t, w_t-1]\r
a_t = w_t\r
\r
r_t+1 =\r
  dot(w_t, R_t+1)\r
  - cost_rate * ||w_t - w_t-1||_1\r
  - risk_penalty * max(0, drawdown_t+1 - drawdown_limit)\r
\`\`\`\r
\r
Quell'ultimo termine non voleva essere la funzione di ricompensa definitiva da produzione. Era un promemoria di design: nel RL di portafoglio l'agente va penalizzato per percorsi di equity fragili, non solo premiato per i rendimenti puntuali.\r
\r
Ma l'universo originale aveva troppi algoritmi grezzi perché quello fosse uno spazio delle azioni pulito. La scelta di design centrale è stata comprimere il comportamento degli algoritmi in "superasset" a livello di cluster prima di tentare il RL.\r
\r
Il report è attento al perimetro: lo strato finale di RL è stato sviluppato come interfaccia DQN/backtesting, non come risultato PPO completo da produzione. PPO e SAC sono buoni candidati futuri per l'allocazione continua, ma l'artefatto attuale è soprattutto la ricostruzione dei dati, la costruzione dello stato, il clustering, la modellazione dei proxy e l'impalcatura per il RL.\r
\r
## Ricostruire il pannello giornaliero\r
\r
Ogni file di algoritmo conserva righe OHLC intraday con timestamp e prezzi di chiusura. Il primo passo è stato ridurre ogni algoritmo a una chiusura giornaliera:\r
\r
\`\`\`text\r
P_i,t = ultima chiusura osservata per l'algoritmo i nel giorno t\r
\`\`\`\r
\r
Da lì il sistema calcolava rendimenti giornalieri semplici e logaritmici:\r
\r
\`\`\`text\r
r_i,t = clip(P_i,t / P_i,t-1 - 1, -0.50, 0.50)\r
l_i,t = clip(log(P_i,t) - log(P_i,t-1), -0.50, 0.50)\r
\`\`\`\r
\r
La soglia di clipping è ampia per scelta. Non serve a sopprimere la normale variazione di una strategia. Impedisce che salti di chiusura rotti dominino le statistiche mobili, la PCA e il clustering basato sulle distanze.\r
\r
Nell'analisi rigenerata documentata nel report, la pipeline ha letto 14,761 file di algoritmi e prodotto 8,879,120 righe giornaliere. Dei 13,663 identificativi con righe utilizzabili, 9,491 hanno superato il filtro di qualità. Quell'insieme accettato rappresentava circa il 69.5% degli algoritmi osservati, con una mediana di 639 osservazioni giornaliere e una copertura di calendario mediana dell'84.6%.\r
\r
Questi numeri sono il primo risultato importante. Prima che ci sia un modello, c'è un universo ricostruito.\r
\r
## Il filtro di qualità evitava il leakage di performance\r
\r
Il filtro di qualità non selezionava gli algoritmi "buoni". Selezionava serie temporali utilizzabili.\r
\r
Un algoritmo passava se aveva abbastanza osservazioni, abbastanza copertura di calendario, più di due valori di chiusura distinti e una volatilità dei rendimenti non trascurabile:\r
\r
\`\`\`text\r
accettato se:\r
  n_i >= 60\r
  coverage_i >= 0.70\r
  unique_closes_i > 2\r
  std(return_i) > 1e-9\r
\`\`\`\r
\r
È un tipo di prudenza importante. Filtrare per Sharpe, rendimento o drawdown in questa fase avrebbe fatto filtrare la performance ex post in ogni risultato a valle. Il filtro eliminava solo le serie troppo brevi, troppo sparse o di fatto costanti.\r
\r
La distribuzione dei rendimenti giornalieri accettati aveva comunque un grande picco intorno allo zero e code spesse, che è quello che mi aspetterei da curve di strategie: molti algoritmi fanno poco in un dato giorno, mentre un gruppo più piccolo fa movimenti discreti. Il report indica per l'universo accettato un rendimento giornaliero medio di circa -0.008%, una deviazione standard dello 0.493% e quantili 1%/99% di -1.67% e 1.53%.\r
\r
## Il benchmark era una traccia, non un oracolo\r
\r
Il file del benchmark conteneva 5,394 operazioni su 271 algoritmi distinti, con un periodo di detenzione mediano di 26 giorni di calendario. Includeva nome del prodotto, volume con segno, data di apertura, data di chiusura, importo investito, AUM e campi di equity a fine giornata.\r
\r
L'ho codificato come traccia di posizioni:\r
\r
\`\`\`text\r
h_i,t = somma dei volumi con segno delle operazioni aperte sull'algoritmo i al tempo t\r
w_i,t = h_i,t / (epsilon + sum_k abs(h_k,t))\r
\`\`\`\r
\r
È utile per analisi forensi e controlli di coerenza. Mostra dove si è mosso il benchmark nell'universo di algoritmi. Ma non va trattato come l'etichetta di una policy ottimale. Il benchmark operava solo su 271 algoritmi di un universo molto più grande, e le aperture erano concentrate nell'ultima parte del campione. Questo lo rende informativo, ma rischioso come unico obiettivo di imitation learning.\r
\r
## Feature di personalità degli algoritmi\r
\r
L'idea di modellazione principale era che gli algoritmi non dovessero essere colonne anonime. Ognuno ha un profilo di comportamento: volatilità, forma del drawdown, rischio di coda, autocorrelazione, momentum e stabilità. L'ho chiamata la sua personalità statica.\r
\r
Per ogni algoritmo accettato la pipeline calcolava feature come:\r
\r
- Rendimento medio e deviazione standard.\r
- Volatilità annualizzata.\r
- Rapporti di Sharpe e Sortino.\r
- Quantili empirici e rapporti tra le code.\r
- Asimmetria e curtosi in eccesso.\r
- Drawdown massimo e ulcer index.\r
- Profondità media del drawdown e tempo passato in drawdown.\r
- Autocorrelazione dei rendimenti a un giorno.\r
- Autocorrelazione dei rendimenti in valore assoluto.\r
- Momentum logaritmico a 120 giorni.\r
- Diagnostica di stabilità tra la prima e la seconda metà del campione.\r
\r
Le formule note sono semplici ma utili:\r
\r
\`\`\`text\r
Sharpe_i  = sqrt(252) * mean(r_i) / std(r_i)\r
Sortino_i = sqrt(252) * mean(r_i) / downside_std(r_i)\r
\r
drawdown_i,t = P_i,t / max_previous_price_i,t - 1\r
max_drawdown_i = min_t drawdown_i,t\r
\`\`\`\r
\r
Questo vettore di feature dava un significato economico allo strato di clustering. Due algoritmi possono avere lo stesso rendimento medio ma comportamenti completamente diversi nelle code, nella persistenza del drawdown e nell'esposizione a fattori comuni.\r
\r
## Fattori interni ed esposizioni\r
\r
La pipeline costruiva anche feature di fattori interni. Il più semplice è il fattore di mercato dell'universo di algoritmi:\r
\r
\`\`\`text\r
market_factor_t = rendimento medio degli algoritmi vivi al tempo t\r
\`\`\`\r
\r
Calcolava anche fattori PCA su una matrice di rendimenti standardizzata. Ogni algoritmo riceveva poi esposizioni stimate con regressione ridge al mercato interno e ai fattori PCA. Lo scopo non era creare un modello fattoriale perfetto, ma aggiungere informazione di co-movimento al vettore di personalità statica.\r
\r
L'input del clustering era più o meno:\r
\r
\`\`\`text\r
algorithm_vector_i =\r
  [personality_i, factor_exposures_i, R2_i, residual_volatility_i]\r
\`\`\`\r
\r
I vettori venivano scalati in modo robusto con mediana e scarto interquartile, e poi raggruppati.\r
\r
## Cluster comportamentali come superasset\r
\r
La configurazione di clustering principale nel report era behavioral_k100_v1: 100 cluster appresi dalle feature di personalità e dalla diagnostica fattoriale, scalate in modo robusto. Il progetto implementava anche una famiglia di cluster basata su embedding di correlazione/PCA, ma la configurazione comportamentale a 100 cluster era la compressione principale a valle.\r
\r
I rendimenti per cluster si costruivano facendo la media dei rendimenti degli algoritmi vivi in ogni cluster:\r
\r
\`\`\`text\r
R_c,t = rendimento medio degli algoritmi assegnati al cluster c e vivi al tempo t\r
alive_ratio_c,t = algoritmi vivi nel cluster c al tempo t / algoritmi totali nel cluster c\r
\`\`\`\r
\r
È qui che il problema di apprendimento cambiava. Invece di chiedere a un modello di capire direttamente circa 9.5k serie di algoritmi accettati, lo stato ora aveva 100 superasset coerenti nel comportamento, ognuno con metadati, feature mobili e maschere di attività.\r
\r
Quella compressione non è estetica. È il contributo principale dell'implementazione.\r
\r
![Diagnostica del clustering comportamentale: vista PCA robusta, profilo delle dimensioni dei cluster, mappa rischio-rendimento dei cluster e profilo di hit rate del momentum.](/blog-plots/athenai-clusters.png)\r
\r
La figura del clustering è la parte del progetto che mostrerei per prima in un colloquio. Dice più di "ho usato k-means". La vista PCA verifica se gli algoritmi accettati hanno outlier evidenti e una struttura di co-movimento. La distribuzione delle dimensioni verifica se la compressione ha prodotto pochi cluster giganti e molti minuscoli. I pannelli di rischio-rendimento e hit rate danno ai cluster una consistenza comportamentale che uno stato di RL può davvero usare. I cluster non sono etichette per una dashboard; sono il nuovo vocabolario dello spazio delle azioni.\r
\r
## Feature di stato su finestre\r
\r
Lo strato di stato usava più orizzonti, perché il mercato non si muove a una sola velocità:\r
\r
- 5 e 10 giorni per la reazione a breve termine e i salti.\r
- 20 giorni per una vista da mese di borsa e la volatilità realizzata.\r
- 60 giorni per proxy trimestrali di Sharpe e drawdown.\r
- 120 giorni per il momentum più lento nello strato di personalità.\r
\r
Dai rendimenti per cluster la pipeline calcolava feature a livello di universo come ampiezza, dispersione, code, volatilità mobile, correlazioni mobili, propensione ai salti e proxy di drawdown.\r
\r
Per esempio:\r
\r
\`\`\`text\r
breadth_t = frazione di cluster con rendimento positivo in t\r
dispersion_t = deviazione standard trasversale dei rendimenti dei cluster in t\r
\`\`\`\r
\r
Questo conta perché i regimi di stress si manifestano spesso come schemi congiunti: ampiezza in calo, correlazione in aumento, volatilità più alta, code sinistre più spesse. Un singolo rendimento aggregato non può catturare quella struttura.\r
\r
![Stato interno dell'universo ricostruito dai rendimenti dei cluster: rendimento di mercato, ampiezza trasversale, volatilità e correlazioni mobili.](/blog-plots/athenai-state.png)\r
\r
Questo grafico è proprio il motivo per cui non volevo uno stato fatto solo dei rendimenti recenti del portafoglio. Fattore di mercato, ampiezza, volatilità e correlazione si muovono con ritmi diversi. L'ampiezza è rumorosa ma dà la partecipazione trasversale. La volatilità si raggruppa. Le correlazioni hanno picchi e poi decadono. Un agente di portafoglio dovrebbe vedere queste differenze, perché implicano costi diversi per le azioni: a volte la risposta giusta è ridurre il turnover, a volte ruotare tra cluster, a volte semplicemente non fidarsi dello strato di proxy.\r
\r
## Proxy macro senza dipendere da dati macro in tempo reale\r
\r
Il vincolo della competizione rendeva delicati i dati macro esterni. VIX, rendimenti dei Treasury e rendimenti dei fattori sono un contesto prezioso in addestramento, ma dipendere da API esterne in tempo reale al momento del deployment avrebbe indebolito il design offline.\r
\r
Il compromesso è stato uno strato di proxy:\r
\r
\`\`\`text\r
in addestramento:\r
  scarica i dati macro/fattoriali esterni\r
  crea i target\r
  addestra modelli proxy interni dalle feature dell'universo di algoritmi\r
\r
in previsione:\r
  usa solo feature interne e modelli proxy addestrati\r
\`\`\`\r
\r
Il report documenta diversi strati di proxy.\r
\r
Il **proxy dei picchi del VIX** cercava di prevedere grandi variazioni future del log VIX. La sua AUC era intorno a 0.50 +/- 0.10, in pratica come la baseline. La calibrazione ha migliorato l'expected calibration error da 0.036 a 0.0007, ma il segnale di classificazione era debole.\r
\r
Il **proxy della direzione dei tassi** prevedeva se il rendimento del Treasury a 10 anni sarebbe sceso, rimasto neutro o salito su un orizzonte di 10 giorni. Era il proxy più forte, con un'accuratezza sul segno documentata dell'80.6% +/- 10.8% e una diagnostica di leakage con target rimescolati che separava target reali e permutati.\r
\r
Il **proxy interno di risk-off** usava il rendimento minimo futuro a 10 giorni del fattore di mercato dei cluster e marcava come risk-off il decile inferiore. Nel target rigenerato la soglia era -0.301% e il tasso di positivi il 9.93%. L'AUC del modello attuale era intorno a 0.46 +/- 0.10, quindi la definizione del target era utile, ma il predittore non era ancora forte.\r
\r
Il **monitor dei fattori** aggregava mensilmente le feature dell'universo e cercava di prevedere il segno di fattori in stile Fama-French, soprattutto il momentum. Con solo 54 osservazioni mensili, è stato trattato come uno strato diagnostico e di lavoro futuro più che come un segnale forte da produzione.\r
\r
È in questa sezione che secondo me il report è più solido: riporta risultati negativi. Lo scopo non era fingere che ogni proxy funzionasse. Era capire quali concetti macro l'universo interno riesce oggi a ricostruire e quali no.\r
\r
## L'interfaccia di RL\r
\r
Dopo il clustering e la costruzione dei proxy, lo stato di decisione si può scrivere così:\r
\r
\`\`\`text\r
s_t = [\r
  feature mobili dei cluster,\r
  stato interno dell'universo,\r
  punteggi/probabilità dei proxy,\r
  maschera degli algoritmi vivi,\r
  allocazione precedente\r
]\r
\`\`\`\r
\r
L'allocazione precedente conta perché i costi di transazione dipendono dal turnover:\r
\r
\`\`\`text\r
portfolio_return_t+1 =\r
  dot(w_t, cluster_returns_t+1)\r
  - cost_rate * L1_norm(w_t - w_t-1)\r
\`\`\`\r
\r
Il backtest segue poi l'equity:\r
\r
\`\`\`text\r
E_t+1 = E_t * (1 + portfolio_return_t+1)\r
\`\`\`\r
\r
e riporta metriche come Sharpe, drawdown massimo, percentuale di periodi positivi e rapporto di Calmar.\r
\r
Il repository attuale include l'impalcatura per DQN: replay buffer, rete target, selezione delle azioni epsilon-greedy, loss Smooth L1 e strumenti di backtesting. Poiché DQN lavora con azioni discrete, il simplesso continuo del portafoglio andrebbe discretizzato in azioni come mantenere l'allocazione precedente, spostare peso verso un cluster scelto, passare alla liquidità o scegliere tra panieri di cluster predefiniti.\r
\r
Per una futura versione ad allocazione continua avrebbero senso PPO o SAC. Ma il report non dichiara prestazioni PPO concluse, e non dovrebbe farlo nemmeno questo articolo.\r
\r
## Cosa ha mostrato il benchmark\r
\r
Il file dei rendimenti annuali del benchmark mostrava rendimenti positivi in ogni anno disponibile. L'anno migliore è stato il 2022 con il 7.13%, seguito dal 2024 con il 6.99%. Il più debole è stato il 2020 con lo 0.54%, con l'avvertenza che il file mensile comincia a giugno 2020. Componendo il file dei rendimenti mensili si ottiene un rendimento totale del 22.95%, con un drawdown massimo a risoluzione mensile del -1.87%.\r
\r
![Diagnostica del benchmark: rendimenti anno per anno, rendimento cumulato mensile, mappa di calore mensile e drawdown realizzato.](/blog-plots/athenai-benchmark.png)\r
\r
Quel drawdown va letto con attenzione. Si basa sui rendimenti mensili del benchmark, non su un'equity infra-mensile inventata. Di nuovo, il tema è la prudenza: riportare quello che i dati sostengono e non riempire con l'immaginazione la risoluzione che manca.\r
\r
## Cosa ha ottenuto davvero il progetto\r
\r
Il sistema finale non era una policy di trading finita. Era una pipeline di stato e modellazione costruita in modo verificabile:\r
\r
- Ha ricostruito un grande universo di algoritmi in un pannello giornaliero.\r
- Ha filtrato gli algoritmi per affidabilità e non per performance ex post.\r
- Ha codificato le operazioni del benchmark come traccia di azioni.\r
- Ha costruito feature di personalità statica per ogni algoritmo accettato.\r
- Ha compresso circa 9.5k algoritmi accettati in 100 cluster comportamentali.\r
- Ha costruito rendimenti per cluster, maschere di attività e feature mobili.\r
- Ha addestrato e valutato strati di proxy macro con controlli espliciti sul leakage.\r
- Ha esposto lo stato risultante a un'interfaccia DQN/backtesting.\r
\r
L'osservazione più importante è stata che il clustering cambiava il problema di apprendimento. Invece di presentare a un agente di RL migliaia di colonne di algoritmi sparse e rumorose, il modello riceve un insieme più piccolo di serie temporali coerenti nel comportamento, con metadati interpretabili.\r
\r
## La lezione\r
\r
Molto lavoro di ML applicato si vince o si perde prima che il modello si addestri. Questo progetto ne è un buon esempio. Le decisioni interessanti non erano solo nell'algoritmo di RL; erano nella rappresentazione:\r
\r
\`\`\`text\r
Che cos'è un asset?\r
Che cosa conta come vivo?\r
Quali filtri fanno trapelare la performance?\r
Quali segnali macro sono ammessi in deployment?\r
Che cosa deve vedere lo spazio delle azioni?\r
Come si riportano onestamente i risultati non supportati?\r
\`\`\`\r
\r
La pipeline di AthenAI mi ha insegnato che un sistema offline di RL finanziario va costruito come una catena di prove. Ogni trasformazione ha bisogno di una ragione, ogni target di una storia sul leakage, e ogni affermazione finale va limitata a quello che gli artefatti rigenerati sostengono.\r
\r
È questo tipo di prudenza a rendere un progetto di competizione più utile anche dopo che la competizione è finita.\r
`,Kr=`C'è una grande differenza tra leggere la spiegazione di un algoritmo e riuscire a seguire una delle sue decisioni. È quella distanza che volevo che Atlas aiutasse a colmare.\r
\r
La piattaforma riunisce teoria, esempi svolti, laboratori interattivi e pratica guidata in un unico percorso. Oggi copre IA simbolica, deep learning e IA generativa, in inglese e spagnolo. Il primo dato di adozione è modesto: **più di 30 utenti unici**, secondo il conteggio che ho oggi. Lo prendo come un motivo per continuare ad ascoltare, non come la prova definitiva che il prodotto funziona.\r
\r
![Il programma di IA simbolica e il percorso di apprendimento in Atlas.](/projects/atlas-learning.png)\r
\r
## Un percorso di apprendimento, non una cartella di documenti\r
\r
Ogni lezione segue quattro fasi: **Capire, Esplorare, Risolvere, Verificare**. La distinzione conta perché ogni fase chiede di fare qualcosa di diverso.\r
\r
Una spiegazione introduce il concetto e un esempio svolto rende concreto il ragionamento. Un laboratorio permette poi di cambiare un input e di ispezionare gli stati che ne risultano. La pratica aggiunge suggerimenti progressivi e una soluzione ragionata. Le domande spiegate e l'autovalutazione offrono un altro modo per verificare di aver capito.\r
\r
Non è un sistema di correzione automatica delle risposte libere. Le risposte scritte sono bozze da confrontare con soluzioni ragionate. L'interfaccia deve renderlo chiaro, invece di far credere che aver completato una fase dimostri padronanza.\r
\r
## Gli esperimenti hanno bisogno di motori veri\r
\r
Una simulazione deve essere più di un'animazione con un nome convincente. Quando chi impara cambia un input, il processo numerico o logico deve cambiare con lui. Gli stati intermedi devono essere ispezionabili e i limiti dell'esperimento devono essere espliciti.\r
\r
In Atlas i motori di simulazione specifici di ogni materia sono isolati dagli strati comuni di account e contenuti. Questa separazione permette di testare un calcolo indipendentemente dall'interfaccia che lo mostra. Evita anche che un nuovo corso diventi una nuova applicazione, con la propria autenticazione e la propria logica dei progressi.\r
\r
L'architettura è volutamente modulare:\r
\r
\`\`\`text\r
manifest del corso + contenuti bilingui delle lezioni\r
  -> viste di apprendimento comuni\r
  -> motore di simulazione isolato e adattatore visivo\r
  -> progressi e preferenze legati all'account\r
\`\`\`\r
\r
Il catalogo attuale contiene **157 lezioni e 26 laboratori interattivi**. Sono una fotografia dei contenuti, non la promessa che ogni argomento immaginabile sia già coperto.\r
\r
## Una piattaforma, non un'app per materia\r
\r
La struttura comune gestisce navigazione, preferenze di lingua, profili, feedback e componenti di apprendimento. I corsi gestiscono il proprio programma. I plugin di simulazione gestiscono i calcoli scientifici di cui hanno bisogno.\r
\r
Questo crea un vincolo utile: aggiungere una materia deve riusare la piattaforma esistente, non introdurre un altro insieme di impostazioni, suggerimenti, menu o profili. Identità stabili per le lezioni conservano i progressi quando i contenuti evolvono. Spagnolo e inglese devono coincidere su identità e significato numerico anche quando la prosa è diversa.\r
\r
## Salvare fa parte del prodotto\r
\r
L'accesso con Google crea o recupera un profilo privato nel cloud. Supabase fornisce l'autenticazione e lo strato dei profili su database; a determinare a chi appartiene un profilo è l'identità verificata dell'account, non un nome visualizzato né la cache del browser.\r
\r
Lingua, preferenze, bozze e progressi appartengono a quell'account. La persistenza nel browser fa da cache interna. La parte difficile della sincronizzazione non è mostrare un'icona di salvataggio: è conservare il lavoro in sospeso e rendere comprensibili errori e cambi di sessione.\r
\r
Volevo che l'esperienza normale di apprendimento evitasse una serie di decisioni tra salvataggio locale e cloud. Chi impara deve poter tornare al proprio lavoro senza dover capire l'implementazione che c'è sotto.\r
\r
## Imparare dall'uso senza raccogliere l'apprendimento stesso\r
\r
La telemetria d'uso e il feedback volontario hanno scopi diversi. Eventi minimi possono aiutare a capire dove si usa il prodotto; una segnalazione volontaria può spiegare dove una lezione o un'interazione va migliorata.\r
\r
La pipeline di analisi usa Supabase Edge Functions e PostgreSQL. Le identità usate nelle analisi sono separate dalla proprietà dell'account. Nomi, foto del profilo, risposte scritte, bozze e credenziali non hanno posto in quegli eventi. Contano anche le preferenze di opt-out già espresse e il Global Privacy Control. Una preferenza predefinita non dovrebbe mai essere presentata come consenso esplicito.\r
\r
## La prossima domanda utile\r
\r
Atlas è online, ma i primi utenti non ne fanno un prodotto finito. La domanda che mi interessa è se l'esperienza di apprendimento è chiara, se gli esperimenti aiutano qualcuno a ragionare e dove la piattaforma intralcia.\r
\r
È questo il lavoro che voglio continuare a documentare: decisioni concrete, cosa fa davvero l'implementazione e cosa cambia dopo che le persone la usano.\r
\r
[Apri Atlas](https://atlaslearning.es/)\r
`,Zr={"regularization-in-cnns-internal-activations":{title:"Regularización en CNN: mirar dentro de la red",subtitle:"Cómo mi TFG estudió la regularización como un cambio en la geometría de las representaciones, no solo en la curva de validación.",excerpt:"Comparé siete regularizadores en una misma CNN para estudiar activaciones ocultas, robustez y generalización.",coverAlt:"Radar de regularizadores en precisión y robustez",content:$r},"diffusion-models-from-sdes-to-images":{title:"Modelos de difusión: de las SDE a las imágenes",subtitle:"Un recorrido por el sistema de generación basado en score que construí con procesos VE, VP y Sub-VP, y distintos samplers.",excerpt:"Una plataforma modular en PyTorch para experimentar con SDE, calendarios de ruido, samplers, condicionamiento, imputación y evaluación.",coverAlt:"Muestras de difusión que progresan de ruido a imágenes",content:Qr},"athenai-competition-decision-pipeline":{title:"AthenAI: comprimir miles de algoritmos en un estado de RL",subtitle:"Un pipeline offline con clustering de algoritmos, proxies macro y límites explícitos de backtesting.",excerpt:"Reconstruí un universo diario de algoritmos, agrupé sus comportamientos en superactivos y construí el estado para RL de carteras.",coverAlt:"Diagnósticos de clustering de estrategias de AthenAI",content:Wr},"atlas-building-a-place-to-learn":{title:"Atlas: un lugar para aprender, no solo para leer",subtitle:"Las decisiones de producto e ingeniería de una plataforma interactiva y bilingüe.",excerpt:"Por qué construí Atlas alrededor de experimentos reales, componentes reutilizables y perfiles privados, y qué quiero aprender de sus primeros usuarios.",coverAlt:"Interfaz real de aprendizaje de Atlas",content:Gr}},ea={"regularization-in-cnns-internal-activations":{title:"Regolarizzazione nelle CNN: guardare dentro la rete",subtitle:"Come la mia tesi triennale ha trattato la regolarizzazione come un cambiamento nella geometria delle rappresentazioni, non solo come una curva di validazione migliore.",excerpt:"Ho confrontato sette regolarizzatori sulla stessa CNN per studiare attivazioni nascoste, robustezza e generalizzazione.",coverAlt:"Radar dei regolarizzatori per accuratezza e robustezza",content:Xr},"diffusion-models-from-sdes-to-images":{title:"Modelli di diffusione: dalle SDE alle immagini",subtitle:"Un percorso nel sistema di generazione basato sullo score che ho costruito con processi VE, VP e Sub-VP e diversi sampler.",excerpt:"Una piattaforma modulare in PyTorch per sperimentare con SDE, schedule del rumore, sampler, condizionamento, imputazione e valutazione.",coverAlt:"Campioni di diffusione che passano dal rumore alle immagini",content:Yr},"athenai-competition-decision-pipeline":{title:"AthenAI: comprimere migliaia di algoritmi in uno stato di RL",subtitle:"Una pipeline offline con clustering degli algoritmi, proxy macroeconomici e limiti espliciti del backtesting.",excerpt:"Ho ricostruito un universo giornaliero di algoritmi, raggruppato i loro comportamenti in superasset e costruito lo stato per il RL di portafoglio.",coverAlt:"Diagnostica del clustering delle strategie di AthenAI",content:Jr},"atlas-building-a-place-to-learn":{title:"Atlas: un posto per imparare, non solo per leggere",subtitle:"Le scelte di prodotto e di ingegneria dietro una piattaforma interattiva e bilingue.",excerpt:"Perché ho costruito Atlas attorno a esperimenti veri, componenti riutilizzabili e profili privati, e cosa voglio imparare dai primi utenti.",coverAlt:"La vera interfaccia di apprendimento di Atlas",content:Kr}},na={es:Zr,it:ea},ta={en:"min read",es:"min de lectura",it:"min di lettura"};function wi(e){if(e==="en")return Ln;const n=na[e]??{};return Ln.map(t=>({...t,...n[t.slug],displayDate:new Intl.DateTimeFormat(qr(e),{day:"numeric",month:"long",year:"numeric",timeZone:"Europe/Madrid"}).format(new Date(t.date+"T12:00:00Z"))+(t.displayDate.includes("09:00")?", 09:00":""),readTime:t.readTime.replace("min read",ta[e])}))}function ia(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const ra=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,aa=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,oa={};function wt(e,n){return(oa.jsx?aa:ra).test(e)}const sa=/[ \t\n\f\r]/g;function la(e){return typeof e=="object"?e.type==="text"?kt(e.value):!1:kt(e)}function kt(e){return e.replace(sa,"")===""}class $e{constructor(n,t,i){this.normal=t,this.property=n,i&&(this.space=i)}}$e.prototype.normal={};$e.prototype.property={};$e.prototype.space=void 0;function ki(e,n){const t={},i={};for(const r of e)Object.assign(t,r.property),Object.assign(i,r.normal);return new $e(t,i,n)}function An(e){return e.toLowerCase()}class ne{constructor(n,t){this.attribute=t,this.property=n}}ne.prototype.attribute="";ne.prototype.booleanish=!1;ne.prototype.boolean=!1;ne.prototype.commaOrSpaceSeparated=!1;ne.prototype.commaSeparated=!1;ne.prototype.defined=!1;ne.prototype.mustUseProperty=!1;ne.prototype.number=!1;ne.prototype.overloadedBoolean=!1;ne.prototype.property="";ne.prototype.spaceSeparated=!1;ne.prototype.space=void 0;let ua=0;const A=Te(),W=Te(),Pn=Te(),k=Te(),H=Te(),Ce=Te(),ie=Te();function Te(){return 2**++ua}const Dn=Object.freeze(Object.defineProperty({__proto__:null,boolean:A,booleanish:W,commaOrSpaceSeparated:ie,commaSeparated:Ce,number:k,overloadedBoolean:Pn,spaceSeparated:H},Symbol.toStringTag,{value:"Module"})),fn=Object.keys(Dn);class Qn extends ne{constructor(n,t,i,r){let o=-1;if(super(n,t),zt(this,"space",r),typeof i=="number")for(;++o<fn.length;){const a=fn[o];zt(this,fn[o],(i&Dn[a])===Dn[a])}}}Qn.prototype.defined=!0;function zt(e,n,t){t&&(e[n]=t)}function Ne(e){const n={},t={};for(const[i,r]of Object.entries(e.properties)){const o=new Qn(i,e.transform(e.attributes||{},i),r,e.space);e.mustUseProperty&&e.mustUseProperty.includes(i)&&(o.mustUseProperty=!0),n[i]=o,t[An(i)]=i,t[An(o.attribute)]=i}return new $e(n,t,e.space)}const zi=Ne({properties:{ariaActiveDescendant:null,ariaAtomic:W,ariaAutoComplete:null,ariaBusy:W,ariaChecked:W,ariaColCount:k,ariaColIndex:k,ariaColSpan:k,ariaControls:H,ariaCurrent:null,ariaDescribedBy:H,ariaDetails:null,ariaDisabled:W,ariaDropEffect:H,ariaErrorMessage:null,ariaExpanded:W,ariaFlowTo:H,ariaGrabbed:W,ariaHasPopup:null,ariaHidden:W,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:H,ariaLevel:k,ariaLive:null,ariaModal:W,ariaMultiLine:W,ariaMultiSelectable:W,ariaOrientation:null,ariaOwns:H,ariaPlaceholder:null,ariaPosInSet:k,ariaPressed:W,ariaReadOnly:W,ariaRelevant:null,ariaRequired:W,ariaRoleDescription:H,ariaRowCount:k,ariaRowIndex:k,ariaRowSpan:k,ariaSelected:W,ariaSetSize:k,ariaSort:null,ariaValueMax:k,ariaValueMin:k,ariaValueNow:k,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function Ii(e,n){return n in e?e[n]:n}function Si(e,n){return Ii(e,n.toLowerCase())}const ca=Ne({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Ce,acceptCharset:H,accessKey:H,action:null,allow:null,allowFullScreen:A,allowPaymentRequest:A,allowUserMedia:A,alpha:A,alt:null,as:null,async:A,autoCapitalize:null,autoComplete:H,autoFocus:A,autoPlay:A,blocking:H,capture:null,charSet:null,checked:A,cite:null,className:H,closedBy:null,colorSpace:null,cols:k,colSpan:k,command:null,commandFor:null,content:null,contentEditable:W,controls:A,controlsList:H,coords:k|Ce,crossOrigin:null,data:null,dateTime:null,decoding:null,default:A,defer:A,dir:null,dirName:null,disabled:A,download:Pn,draggable:W,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:A,formTarget:null,headers:H,height:k,hidden:Pn,high:k,href:null,hrefLang:null,htmlFor:H,httpEquiv:H,id:null,imageSizes:null,imageSrcSet:null,inert:A,inputMode:null,integrity:null,is:null,isMap:A,itemId:null,itemProp:H,itemRef:H,itemScope:A,itemType:H,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:A,low:k,manifest:null,max:null,maxLength:k,media:null,method:null,min:null,minLength:k,multiple:A,muted:A,name:null,nonce:null,noModule:A,noValidate:A,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:A,optimum:k,pattern:null,ping:H,placeholder:null,playsInline:A,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:A,referrerPolicy:null,rel:H,required:A,reversed:A,rows:k,rowSpan:k,sandbox:H,scope:null,scoped:A,seamless:A,selected:A,shadowRootClonable:A,shadowRootCustomElementRegistry:A,shadowRootDelegatesFocus:A,shadowRootMode:null,shadowRootSerializable:A,shape:null,size:k,sizes:null,slot:null,span:k,spellCheck:W,src:null,srcDoc:null,srcLang:null,srcSet:null,start:k,step:null,style:null,tabIndex:k,target:null,title:null,translate:null,type:null,typeMustMatch:A,useMap:null,value:W,width:k,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:H,axis:null,background:null,bgColor:null,border:k,borderColor:null,bottomMargin:k,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:A,declare:A,event:null,face:null,frame:null,frameBorder:null,hSpace:k,leftMargin:k,link:null,longDesc:null,lowSrc:null,marginHeight:k,marginWidth:k,noResize:A,noHref:A,noShade:A,noWrap:A,object:null,profile:null,prompt:null,rev:null,rightMargin:k,rules:null,scheme:null,scrolling:W,standby:null,summary:null,text:null,topMargin:k,valueType:null,version:null,vAlign:null,vLink:null,vSpace:k,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:A,disablePictureInPicture:A,disableRemotePlayback:A,exportParts:Ce,part:H,prefix:null,property:null,results:k,security:null,unselectable:null},space:"html",transform:Si}),da=Ne({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:ie,accentHeight:k,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:k,amplitude:k,arabicForm:null,ascent:k,attributeName:null,attributeType:null,azimuth:k,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:k,by:null,calcMode:null,capHeight:k,className:H,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:k,diffuseConstant:k,direction:null,display:null,dur:null,divisor:k,dominantBaseline:null,download:A,dx:null,dy:null,edgeMode:null,editable:null,elevation:k,enableBackground:null,end:null,event:null,exponent:k,externalResourcesRequired:null,fill:null,fillOpacity:k,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Ce,g2:Ce,glyphName:Ce,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:k,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:k,horizOriginX:k,horizOriginY:k,id:null,ideographic:k,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:k,k,k1:k,k2:k,k3:k,k4:k,kernelMatrix:ie,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:k,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:k,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:k,overlineThickness:k,paintOrder:null,panose1:null,path:null,pathLength:k,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:H,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:k,pointsAtY:k,pointsAtZ:k,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ie,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ie,rev:ie,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ie,requiredFeatures:ie,requiredFonts:ie,requiredFormats:ie,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:k,specularExponent:k,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:k,strikethroughThickness:k,string:null,stroke:null,strokeDashArray:ie,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:k,strokeOpacity:k,strokeWidth:null,style:null,surfaceScale:k,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ie,tabIndex:k,tableValues:null,target:null,targetX:k,targetY:k,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ie,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:k,underlineThickness:k,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:k,values:null,vAlphabetic:k,vMathematical:k,vectorEffect:null,vHanging:k,vIdeographic:k,version:null,vertAdvY:k,vertOriginX:k,vertOriginY:k,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:k,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Ii}),_i=Ne({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),Ci=Ne({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Si}),Ei=Ne({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),pa={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},ma=/[A-Z]/g,It=/-[a-z]/g,ha=/^data[-\w.:]+$/i;function fa(e,n){const t=An(n);let i=n,r=ne;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&ha.test(n)){if(n.charAt(4)==="-"){const o=n.slice(5).replace(It,ba);i="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=n.slice(4);if(!It.test(o)){let a=o.replace(ma,ga);a.charAt(0)!=="-"&&(a="-"+a),n="data"+a}}r=Qn}return new r(i,n)}function ga(e){return"-"+e.toLowerCase()}function ba(e){return e.charAt(1).toUpperCase()}const ya=ki([zi,ca,_i,Ci,Ei],"html"),Wn=ki([zi,da,_i,Ci,Ei],"svg");function va(e){return e.join(" ").trim()}var Gn={},St=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,xa=/\n/g,wa=/^\s*/,ka=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,za=/^:\s*/,Ia=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Sa=/^[;\s]*/,_a=/^\s+|\s+$/g,Ca=`
`,_t="/",Ct="*",_e="",Ea="comment",Ta="declaration";function La(e,n){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var t=1,i=1;function r(g){var v=g.match(xa);v&&(t+=v.length);var z=g.lastIndexOf(Ca);i=~z?g.length-z:i+g.length}function o(){var g={line:t,column:i};return function(v){return v.position=new a(g),u(),v}}function a(g){this.start=g,this.end={line:t,column:i},this.source=n.source}a.prototype.content=e;function s(g){var v=new Error(n.source+":"+t+":"+i+": "+g);if(v.reason=g,v.filename=n.source,v.line=t,v.column=i,v.source=e,!n.silent)throw v}function l(g){var v=g.exec(e);if(v){var z=v[0];return r(z),e=e.slice(z.length),v}}function u(){l(wa)}function d(g){var v;for(g=g||[];v=c();)v!==!1&&g.push(v);return g}function c(){var g=o();if(!(_t!=e.charAt(0)||Ct!=e.charAt(1))){for(var v=2;_e!=e.charAt(v)&&(Ct!=e.charAt(v)||_t!=e.charAt(v+1));)++v;if(v+=2,_e===e.charAt(v-1))return s("End of comment missing");var z=e.slice(2,v-2);return i+=2,r(z),e=e.slice(v),i+=2,g({type:Ea,comment:z})}}function m(){var g=o(),v=l(ka);if(v){if(c(),!l(za))return s("property missing ':'");var z=l(Ia),b=g({type:Ta,property:Et(v[0].replace(St,_e)),value:z?Et(z[0].replace(St,_e)):_e});return l(Sa),b}}function p(){var g=[];d(g);for(var v;v=m();)v!==!1&&(g.push(v),d(g));return g}return u(),p()}function Et(e){return e?e.replace(_a,_e):_e}var Aa=La,Pa=nn&&nn.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Gn,"__esModule",{value:!0});Gn.default=Na;const Da=Pa(Aa);function Na(e,n){let t=null;if(!e||typeof e!="string")return t;const i=(0,Da.default)(e),r=typeof n=="function";return i.forEach(o=>{if(o.type!=="declaration")return;const{property:a,value:s}=o;r?n(a,s,o):s&&(t=t||{},t[a]=s)}),t}var un={};Object.defineProperty(un,"__esModule",{value:!0});un.camelCase=void 0;var Ra=/^--[a-zA-Z0-9_-]+$/,Fa=/-([a-z])/g,qa=/^[^-]+$/,ja=/^-(webkit|moz|ms|o|khtml)-/,Ma=/^-(ms)-/,Oa=function(e){return!e||qa.test(e)||Ra.test(e)},Ba=function(e,n){return n.toUpperCase()},Tt=function(e,n){return"".concat(n,"-")},Va=function(e,n){return n===void 0&&(n={}),Oa(e)?e:(e=e.toLowerCase(),n.reactCompat?e=e.replace(Ma,Tt):e=e.replace(ja,Tt),e.replace(Fa,Ba))};un.camelCase=Va;var Ua=nn&&nn.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Ha=Ua(Gn),$a=un;function Nn(e,n){var t={};return!e||typeof e!="string"||(0,Ha.default)(e,function(i,r){i&&r&&(t[(0,$a.camelCase)(i,n)]=r)}),t}Nn.default=Nn;var Qa=Nn;const Wa=bi(Qa),Ti=Li("end"),Xn=Li("start");function Li(e){return n;function n(t){const i=t&&t.position&&t.position[e]||{};if(typeof i.line=="number"&&i.line>0&&typeof i.column=="number"&&i.column>0)return{line:i.line,column:i.column,offset:typeof i.offset=="number"&&i.offset>-1?i.offset:void 0}}}function Ga(e){const n=Xn(e),t=Ti(e);if(n&&t)return{start:n,end:t}}function Be(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Lt(e.position):"start"in e||"end"in e?Lt(e):"line"in e||"column"in e?Rn(e):""}function Rn(e){return At(e&&e.line)+":"+At(e&&e.column)}function Lt(e){return Rn(e&&e.start)+"-"+Rn(e&&e.end)}function At(e){return e&&typeof e=="number"?e:1}class K extends Error{constructor(n,t,i){super(),typeof t=="string"&&(i=t,t=void 0);let r="",o={},a=!1;if(t&&("line"in t&&"column"in t?o={place:t}:"start"in t&&"end"in t?o={place:t}:"type"in t?o={ancestors:[t],place:t.position}:o={...t}),typeof n=="string"?r=n:!o.cause&&n&&(a=!0,r=n.message,o.cause=n),!o.ruleId&&!o.source&&typeof i=="string"){const l=i.indexOf(":");l===-1?o.ruleId=i:(o.source=i.slice(0,l),o.ruleId=i.slice(l+1))}if(!o.place&&o.ancestors&&o.ancestors){const l=o.ancestors[o.ancestors.length-1];l&&(o.place=l.position)}const s=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=s?s.column:void 0,this.fatal=void 0,this.file="",this.message=r,this.line=s?s.line:void 0,this.name=Be(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}K.prototype.file="";K.prototype.name="";K.prototype.reason="";K.prototype.message="";K.prototype.stack="";K.prototype.column=void 0;K.prototype.line=void 0;K.prototype.ancestors=void 0;K.prototype.cause=void 0;K.prototype.fatal=void 0;K.prototype.place=void 0;K.prototype.ruleId=void 0;K.prototype.source=void 0;const Yn={}.hasOwnProperty,Xa=new Map,Ya=/[A-Z]/g,Ja=new Set(["table","tbody","thead","tfoot","tr"]),Ka=new Set(["td","th"]),Ai="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Za(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let i;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");i=so(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");i=oo(t,n.jsx,n.jsxs)}const r={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:i,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?Wn:ya,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},o=Pi(r,e,void 0);return o&&typeof o!="string"?o:r.create(e,r.Fragment,{children:o||void 0},void 0)}function Pi(e,n,t){if(n.type==="element")return eo(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return no(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return io(e,n,t);if(n.type==="mdxjsEsm")return to(e,n);if(n.type==="root")return ro(e,n,t);if(n.type==="text")return ao(e,n)}function eo(e,n,t){const i=e.schema;let r=i;n.tagName.toLowerCase()==="svg"&&i.space==="html"&&(r=Wn,e.schema=r),e.ancestors.push(n);const o=Ni(e,n.tagName,!1),a=lo(e,n);let s=Kn(e,n);return Ja.has(n.tagName)&&(s=s.filter(function(l){return typeof l=="string"?!la(l):!0})),Di(e,a,o,n),Jn(a,s),e.ancestors.pop(),e.schema=i,e.create(n,o,a,t)}function no(e,n){if(n.data&&n.data.estree&&e.evaluater){const i=n.data.estree.body[0];return i.type,e.evaluater.evaluateExpression(i.expression)}He(e,n.position)}function to(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);He(e,n.position)}function io(e,n,t){const i=e.schema;let r=i;n.name==="svg"&&i.space==="html"&&(r=Wn,e.schema=r),e.ancestors.push(n);const o=n.name===null?e.Fragment:Ni(e,n.name,!0),a=uo(e,n),s=Kn(e,n);return Di(e,a,o,n),Jn(a,s),e.ancestors.pop(),e.schema=i,e.create(n,o,a,t)}function ro(e,n,t){const i={};return Jn(i,Kn(e,n)),e.create(n,e.Fragment,i,t)}function ao(e,n){return n.value}function Di(e,n,t,i){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=i)}function Jn(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function oo(e,n,t){return i;function i(r,o,a,s){const u=Array.isArray(a.children)?t:n;return s?u(o,a,s):u(o,a)}}function so(e,n){return t;function t(i,r,o,a){const s=Array.isArray(o.children),l=Xn(i);return n(r,o,a,s,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}function lo(e,n){const t={};let i,r;for(r in n.properties)if(r!=="children"&&Yn.call(n.properties,r)){const o=co(e,r,n.properties[r]);if(o){const[a,s]=o;e.tableCellAlignToStyle&&a==="align"&&typeof s=="string"&&Ka.has(n.tagName)?i=s:t[a]=s}}if(i){const o=t.style||(t.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=i}return t}function uo(e,n){const t={};for(const i of n.attributes)if(i.type==="mdxJsxExpressionAttribute")if(i.data&&i.data.estree&&e.evaluater){const o=i.data.estree.body[0];o.type;const a=o.expression;a.type;const s=a.properties[0];s.type,Object.assign(t,e.evaluater.evaluateExpression(s.argument))}else He(e,n.position);else{const r=i.name;let o;if(i.value&&typeof i.value=="object")if(i.value.data&&i.value.data.estree&&e.evaluater){const s=i.value.data.estree.body[0];s.type,o=e.evaluater.evaluateExpression(s.expression)}else He(e,n.position);else o=i.value===null?!0:i.value;t[r]=o}return t}function Kn(e,n){const t=[];let i=-1;const r=e.passKeys?new Map:Xa;for(;++i<n.children.length;){const o=n.children[i];let a;if(e.passKeys){const l=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(l){const u=r.get(l)||0;a=l+"-"+u,r.set(l,u+1)}}const s=Pi(e,o,a);s!==void 0&&t.push(s)}return t}function co(e,n,t){const i=fa(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=i.commaSeparated?ia(t):va(t)),i.property==="style"){let r=typeof t=="object"?t:po(e,String(t));return e.stylePropertyNameCase==="css"&&(r=mo(r)),["style",r]}return[e.elementAttributeNameCase==="react"&&i.space?pa[i.property]||i.property:i.attribute,t]}}function po(e,n){try{return Wa(n,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};const i=t,r=new K("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:i,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw r.file=e.filePath||void 0,r.url=Ai+"#cannot-parse-style-attribute",r}}function Ni(e,n,t){let i;if(!t)i={type:"Literal",value:n};else if(n.includes(".")){const r=n.split(".");let o=-1,a;for(;++o<r.length;){const s=wt(r[o])?{type:"Identifier",name:r[o]}:{type:"Literal",value:r[o]};a=a?{type:"MemberExpression",object:a,property:s,computed:!!(o&&s.type==="Literal"),optional:!1}:s}i=a}else i=wt(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(i.type==="Literal"){const r=i.value;return Yn.call(e.components,r)?e.components[r]:r}if(e.evaluater)return e.evaluater.evaluateExpression(i);He(e)}function He(e,n){const t=new K("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=Ai+"#cannot-handle-mdx-estrees-without-createevaluater",t}function mo(e){const n={};let t;for(t in e)Yn.call(e,t)&&(n[ho(t)]=e[t]);return n}function ho(e){let n=e.replace(Ya,fo);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function fo(e){return"-"+e.toLowerCase()}const gn={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},go={};function Zn(e,n){const t=go,i=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,r=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return Ri(e,i,r)}function Ri(e,n,t){if(bo(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Pt(e.children,n,t)}return Array.isArray(e)?Pt(e,n,t):""}function Pt(e,n,t){const i=[];let r=-1;for(;++r<e.length;)i[r]=Ri(e[r],n,t);return i.join("")}function bo(e){return!!(e&&typeof e=="object")}const Dt=document.createElement("i");function et(e){const n="&"+e+";";Dt.innerHTML=n;const t=Dt.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function ce(e,n,t,i){const r=e.length;let o=0,a;if(n<0?n=-n>r?0:r+n:n=n>r?r:n,t=t>0?t:0,i.length<1e4)a=Array.from(i),a.unshift(n,t),e.splice(...a);else for(t&&e.splice(n,t);o<i.length;)a=i.slice(o,o+1e4),a.unshift(n,0),e.splice(...a),o+=1e4,n+=1e4}function re(e,n){return e.length>0?(ce(e,e.length,0,n),e):n}const Nt={}.hasOwnProperty;function Fi(e){const n={};let t=-1;for(;++t<e.length;)yo(n,e[t]);return n}function yo(e,n){let t;for(t in n){const r=(Nt.call(e,t)?e[t]:void 0)||(e[t]={}),o=n[t];let a;if(o)for(a in o){Nt.call(r,a)||(r[a]=[]);const s=o[a];vo(r[a],Array.isArray(s)?s:s?[s]:[])}}}function vo(e,n){let t=-1;const i=[];for(;++t<n.length;)(n[t].add==="after"?e:i).push(n[t]);ce(e,0,0,i)}function qi(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function de(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Z=we(/[A-Za-z]/),J=we(/[\dA-Za-z]/),xo=we(/[#-'*+\--9=?A-Z^-~]/);function tn(e){return e!==null&&(e<32||e===127)}const Fn=we(/\d/),wo=we(/[\dA-Fa-f]/),ko=we(/[!-/:-@[-`{-~]/);function L(e){return e!==null&&e<-2}function $(e){return e!==null&&(e<0||e===32)}function N(e){return e===-2||e===-1||e===32}const cn=we(new RegExp("\\p{P}|\\p{S}","u")),Ee=we(/\s/);function we(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function Re(e){const n=[];let t=-1,i=0,r=0;for(;++t<e.length;){const o=e.charCodeAt(t);let a="";if(o===37&&J(e.charCodeAt(t+1))&&J(e.charCodeAt(t+2)))r=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){const s=e.charCodeAt(t+1);o<56320&&s>56319&&s<57344?(a=String.fromCharCode(o,s),r=1):a="�"}else a=String.fromCharCode(o);a&&(n.push(e.slice(i,t),encodeURIComponent(a)),i=t+r+1,a=""),r&&(t+=r,r=0)}return n.join("")+e.slice(i)}function M(e,n,t,i){const r=i?i-1:1/0;let o=0;return a;function a(l){return N(l)?(e.enter(t),s(l)):n(l)}function s(l){return N(l)&&o++<r?(e.consume(l),s):(e.exit(t),n(l))}}function ji(e,n,t,i,r,o){let a=0;return s;function s(d){return N(d)?(e.enter(i),l(d)):u(d)}function l(d){return N(d)&&a<o?(e.consume(d),a++,l):(e.exit(i),u(d))}function u(d){return a>=r?n(d):t(d)}}const zo={tokenize:Io};function Io(e){const n=e.attempt(this.parser.constructs.contentInitial,i,r);let t;return n;function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),M(e,n,"linePrefix")}function r(s){return e.enter("paragraph"),o(s)}function o(s){const l=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=l),t=l,a(s)}function a(s){if(s===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(s);return}return L(s)?(e.consume(s),e.exit("chunkText"),o):(e.consume(s),a)}}let rn=class{constructor(){this.index=new Map,this.map=[]}add(n,t,i){Rt(this,n,t,i,!1)}addBefore(n,t,i){Rt(this,n,t,i,!0)}consume(n){if(this.map.sort(function(o,a){return o[0]-a[0]}),this.map.length===0)return;let t=this.map.length;const i=[];for(;t>0;)t-=1,i.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];i.push(n.slice()),n.length=0;let r=i.pop();for(;r;){for(const o of r)n.push(o);r=i.pop()}this.map.length=0,this.index.clear()}};function Rt(e,n,t,i,r){if(t===0&&i.length===0)return;const o=e.index.get(n);if(o){o[1]+=t,r?(i.push(...o[2]),o[2]=i):o[2].push(...i);return}const a=[n,t,i];e.map.push(a),e.index.set(n,a)}const So={tokenize:_o},Ft={tokenize:Co};function _o(e){const n=this,t=[];let i=0,r,o,a;return s;function s(I){if(i<t.length){const D=t[i];return n.containerState=D[1],e.attempt(D[0].continuation,l,u)(I)}return u(I)}function l(I){if(i++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,r&&_();const D=n.events.length;let R=D,w;for(;R--;)if(n.events[R][0]==="exit"&&n.events[R][1].type==="chunkFlow"){w=n.events[R][1].end;break}b(i);let F=D;for(;F<n.events.length;)n.events[F][1].end={...w},F++;const O=new rn;return O.add(R+1,0,n.events.slice(D)),O.add(D,F-D,[]),O.consume(n.events),u(I)}return s(I)}function u(I){if(i===t.length){if(!r)return m(I);if(r.currentConstruct&&r.currentConstruct.concrete)return g(I);n.interrupt=!!(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(Ft,d,c)(I)}function d(I){return r&&_(),b(i),m(I)}function c(I){return n.parser.lazy[n.now().line]=i!==t.length,a=n.now().offset,g(I)}function m(I){return n.containerState={},e.attempt(Ft,p,g)(I)}function p(I){return i++,t.push([n.currentConstruct,n.containerState]),m(I)}function g(I){if(I===null){r&&_(),b(0),e.consume(I);return}return r=r||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:r,contentType:"flow",previous:o}),v(I)}function v(I){if(I===null){z(e.exit("chunkFlow"),!0),b(0),e.consume(I);return}return L(I)?(e.consume(I),z(e.exit("chunkFlow")),i=0,n.interrupt=void 0,s):(e.consume(I),v)}function z(I,D){const R=n.sliceStream(I);if(D&&R.push(null),I.previous=o,o&&(o.next=I),o=I,r.defineSkip(I.start),r.write(R),n.parser.lazy[I.start.line]){let w=r.events.length;for(;w--;)if(r.events[w][1].start.offset<a&&(!r.events[w][1].end||r.events[w][1].end.offset>a))return;const F=n.events.length;let O=F,B,y;for(;O--;)if(n.events[O][0]==="exit"&&n.events[O][1].type==="chunkFlow"){if(B){y=n.events[O][1].end;break}B=!0}for(b(i),w=F;w<n.events.length;)n.events[w][1].end={...y},w++;const E=new rn;E.add(O+1,0,n.events.slice(F)),E.add(F,w-F,[]),E.consume(n.events)}}function b(I){let D=t.length;for(;D-- >I;){const R=t[D];n.containerState=R[1],R[0].exit.call(n,e)}t.length=I}function _(){r.write([null]),o=void 0,r=void 0,n.containerState._closeFlow=void 0}}function Co(e,n,t){return M(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function an(e){if(e===null||$(e)||Ee(e))return 1;if(cn(e))return 2}function dn(e,n,t){const i=[];let r=-1;for(;++r<e.length;){const o=e[r].resolveAll;o&&!i.includes(o)&&(n=o(n,t),i.push(o))}return n}const qn={name:"attention",resolveAll:Eo,tokenize:To};function Eo(e,n){let t=-1,i;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){let r=t;for(;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&n.sliceSerialize(e[r][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[r][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;const o=e[r][1].end.offset-e[r][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1,a={...e[r][1].end},s={...e[t][1].start};qt(a,-o),qt(s,o);const l={type:o>1?"strongSequence":"emphasisSequence",start:a,end:{...e[r][1].end}},u={type:o>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:s},d={type:o>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[t][1].start}},c={type:o>1?"strong":"emphasis",start:{...l.start},end:{...u.end}};e[r][1].end={...l.start},e[t][1].start={...u.end},i=[],e[r][1].end.offset-e[r][1].start.offset&&(i=re(i,[["enter",e[r][1],n],["exit",e[r][1],n]])),i=re(i,[["enter",c,n],["enter",l,n],["exit",l,n],["enter",d,n]]),i=re(i,dn(n.parser.constructs.insideSpan.null,e.slice(r+1,t),n)),i=re(i,[["exit",d,n],["enter",u,n],["exit",u,n],["exit",c,n]]);let m=0;e[t][1].end.offset-e[t][1].start.offset&&(m=2,i=re(i,[["enter",e[t][1],n],["exit",e[t][1],n]])),ce(e,r-1,t-r+3,i),t=r+i.length-m-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function To(e,n){const t=this.parser.constructs.attentionMarkers.null,i=this.previous,r=an(i);let o;return a;function a(l){return o=l,e.enter("attentionSequence"),s(l)}function s(l){if(l===o)return e.consume(l),s;const u=e.exit("attentionSequence"),d=an(l),c=!d||d===2&&r||t.includes(l)&&l!==42&&l!==95,m=!r||r===2&&d||t.includes(i)&&i!==42&&i!==95;return u._open=!!(o===42?c:c&&(r||!m)),u._close=!!(o===42?m:m&&(d||!c)),n(l)}}function qt(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const Lo={name:"autolink",tokenize:Ao};function Ao(e,n,t){let i=0;return r;function r(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(p){return Z(p)?(e.consume(p),a):p===64?t(p):u(p)}function a(p){return p===43||p===45||p===46||J(p)?(i=1,s(p)):u(p)}function s(p){return p===58?(e.consume(p),i=0,l):(p===43||p===45||p===46||J(p))&&i++<32?(e.consume(p),s):(i=0,u(p))}function l(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):p===null||p===32||p===60||tn(p)?t(p):(e.consume(p),l)}function u(p){return p===64?(e.consume(p),d):xo(p)?(e.consume(p),u):t(p)}function d(p){return J(p)?c(p):t(p)}function c(p){return p===46?(e.consume(p),i=0,d):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):m(p)}function m(p){if((p===45||J(p))&&i++<63){const g=p===45?m:c;return e.consume(p),g}return t(p)}}const Qe={partial:!0,tokenize:Po};function Po(e,n,t){return i;function i(o){return N(o)?M(e,r,"linePrefix")(o):r(o)}function r(o){return o===null||L(o)?n(o):t(o)}}const Mi={continuation:{tokenize:No},exit:Ro,name:"blockQuote",tokenize:Do};function Do(e,n,t){const i=this;return r;function r(a){if(a===62){const s=i.containerState;return s.open||(e.enter("blockQuote",{_container:!0}),s.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return t(a)}function o(a){return N(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(a))}}function No(e,n,t){const i=this;return r;function r(a){return N(a)?M(e,o,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(Mi,n,t)(a)}}function Ro(e){e.exit("blockQuote")}const Oi={name:"characterEscape",tokenize:Fo};function Fo(e,n,t){return i;function i(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),r}function r(o){return ko(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(o)}}const Bi={name:"characterReference",tokenize:qo};function qo(e,n,t){const i=this;let r=0,o,a;return s;function s(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),l}function l(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,a=J,d(c))}function u(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=wo,d):(e.enter("characterReferenceValue"),o=7,a=Fn,d(c))}function d(c){if(c===59&&r){const m=e.exit("characterReferenceValue");return a===J&&!et(i.sliceSerialize(m))?t(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return a(c)&&r++<o?(e.consume(c),d):t(c)}}const jn={partial:!0,tokenize:jo};function jo(e,n,t){const i=this;return r;function r(a){return a===null?t(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return i.parser.lazy[i.now().line]?t(a):n(a)}}const jt={concrete:!0,name:"codeFenced",tokenize:Mo};function Mo(e,n,t){const i=this,r={partial:!0,tokenize:R};let o=0,a=0,s;return l;function l(w){return u(w)}function u(w){const F=i.events[i.events.length-1];return o=F&&F[1].type==="linePrefix"?F[2].sliceSerialize(F[1],!0).length:0,s=w,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(w)}function d(w){return w===s?(a++,e.consume(w),d):a<3?t(w):(e.exit("codeFencedFenceSequence"),N(w)?M(e,c,"whitespace")(w):c(w))}function c(w){return w===null||L(w)?(e.exit("codeFencedFence"),i.interrupt?n(w):e.check(jn,v,D)(w)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),m(w))}function m(w){return w===null||L(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(w)):N(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),M(e,p,"whitespace")(w)):w===96&&w===s?t(w):(e.consume(w),m)}function p(w){return w===null||L(w)?c(w):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(w))}function g(w){return w===null||L(w)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(w)):w===96&&w===s?t(w):(e.consume(w),g)}function v(w){return e.attempt(r,D,z)(w)}function z(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),b}function b(w){return o>0&&N(w)?M(e,_,"linePrefix",o+1)(w):_(w)}function _(w){return w===null||L(w)?e.check(jn,v,D)(w):(e.enter("codeFlowValue"),I(w))}function I(w){return w===null||L(w)?(e.exit("codeFlowValue"),_(w)):(e.consume(w),I)}function D(w){return e.exit("codeFenced"),n(w)}function R(w,F,O){let B=0;return y;function y(j){return w.enter("lineEnding"),w.consume(j),w.exit("lineEnding"),E}function E(j){return w.enter("codeFencedFence"),N(j)?M(w,T,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(j):T(j)}function T(j){return j===s?(w.enter("codeFencedFenceSequence"),V(j)):O(j)}function V(j){return j===s?(B++,w.consume(j),V):B>=a?(w.exit("codeFencedFenceSequence"),N(j)?M(w,Q,"whitespace")(j):Q(j)):O(j)}function Q(j){return j===null||L(j)?(w.exit("codeFencedFence"),F(j)):O(j)}}}const bn={name:"codeIndented",tokenize:Bo},Oo={partial:!0,tokenize:Vo};function Bo(e,n,t){return i;function i(s){return e.enter("codeIndented"),ji(e,r,t,"linePrefix",4,4)(s)}function r(s){return s===null?a(s):L(s)?e.attempt(Oo,r,a)(s):(e.enter("codeFlowValue"),o(s))}function o(s){return s===null||L(s)?(e.exit("codeFlowValue"),r(s)):(e.consume(s),o)}function a(s){return e.exit("codeIndented"),n(s)}}function Vo(e,n,t){const i=this;return r;function r(a){return i.parser.lazy[i.now().line]?t(a):L(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),r):ji(e,n,o,"linePrefix",4,4)(a)}function o(a){return L(a)?r(a):t(a)}}const Uo={name:"codeText",previous:$o,resolve:Ho,tokenize:Qo};function Ho(e){let n=e.length-4,t=3,i,r;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(i=t;++i<n;)if(e[i][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(i=t-1,n++;++i<=n;)r===void 0?i!==n&&e[i][1].type!=="lineEnding"&&(r=i):(i===n||e[i][1].type==="lineEnding")&&(e[r][1].type="codeTextData",i!==r+2&&(e[r][1].end=e[i-1][1].end,e.splice(r+2,i-r-2),n-=i-r-2,i=r+2),r=void 0);return e}function $o(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Qo(e,n,t){let i=0,r,o;return a;function a(c){return e.enter("codeText"),e.enter("codeTextSequence"),s(c)}function s(c){return c===96?(e.consume(c),i++,s):(e.exit("codeTextSequence"),l(c))}function l(c){return c===null?t(c):c===32?(e.enter("space"),e.consume(c),e.exit("space"),l):c===96?(o=e.enter("codeTextSequence"),r=0,d(c)):L(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),l):(e.enter("codeTextData"),u(c))}function u(c){return c===null||c===32||c===96||L(c)?(e.exit("codeTextData"),l(c)):(e.consume(c),u)}function d(c){return c===96?(e.consume(c),r++,d):r===i?(e.exit("codeTextSequence"),e.exit("codeText"),n(c)):(o.type="codeTextData",u(c))}}class Wo{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const i=t??Number.POSITIVE_INFINITY;return i<this.left.length?this.left.slice(n,i):n>this.left.length?this.right.slice(this.right.length-i+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-i+this.left.length).reverse())}splice(n,t,i){const r=t||0;this.setCursor(Math.trunc(n));const o=this.right.splice(this.right.length-r,Number.POSITIVE_INFINITY);return i&&Me(this.left,i),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),Me(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),Me(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);Me(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);Me(this.left,t.reverse())}}}function Me(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function Vi(e){const n={};let t=-1,i,r,o,a,s,l,u;const d=new Wo(e);for(;++t<d.length;){for(;t in n;)t=n[t];if(i=d.get(t),t&&i[1].type==="chunkFlow"&&d.get(t-1)[1].type==="listItemPrefix"&&(l=i[1]._tokenizer.events,o=0,o<l.length&&l[o][1].type==="lineEndingBlank"&&(o+=2),o<l.length&&l[o][1].type==="content"))for(;++o<l.length&&l[o][1].type!=="content";)l[o][1].type==="chunkText"&&(l[o][1]._isInFirstContentOfListItem=!0,o++);if(i[0]==="enter")i[1].contentType&&(Object.assign(n,Go(d,t)),t=n[t],u=!0);else if(i[1]._container){for(o=t,r=void 0;o--;)if(a=d.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(r&&(d.get(r)[1].type="lineEndingBlank"),a[1].type="lineEnding",r=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;r&&(i[1].end={...d.get(r)[1].start},s=d.slice(r,t),s.unshift(i),d.splice(r,t-r+1,s))}}return ce(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function Go(e,n){const t=e.get(n)[1],i=e.get(n)[2];let r=n-1;const o=[];let a=t._tokenizer;a||(a=i.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const s=a.events,l=[],u={};let d,c,m=-1,p=t,g=0,v=0;const z=[v];for(;p;){for(;e.get(++r)[1]!==p;);o.push(r),p._tokenizer||(d=i.sliceStream(p),p.next||d.push(null),c&&a.defineSkip(p.start),p._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),p._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),c=p,p=p.next}for(p=t;++m<s.length;)s[m][0]==="exit"&&s[m-1][0]==="enter"&&s[m][1].type===s[m-1][1].type&&s[m][1].start.line!==s[m][1].end.line&&(v=m+1,z.push(v),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(a.events=[],p?(p._tokenizer=void 0,p.previous=void 0):z.pop(),m=z.length;m--;){const b=s.slice(z[m],z[m+1]),_=o.pop();l.push([_,_+b.length-1]),e.splice(_,2,b)}for(l.reverse(),m=-1;++m<l.length;)u[g+l[m][0]]=g+l[m][1],g+=l[m][1]-l[m][0]-1;return u}const Xo={resolve:Jo,tokenize:Ko},Yo={partial:!0,tokenize:Zo};function Jo(e){return Vi(e),e}function Ko(e,n){let t;return i;function i(s){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),r(s)}function r(s){return s===null?o(s):L(s)?e.check(Yo,a,o)(s):(e.consume(s),r)}function o(s){return e.exit("chunkContent"),e.exit("content"),n(s)}function a(s){return e.consume(s),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,r}}function Zo(e,n,t){const i=this;return r;function r(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),M(e,o,"linePrefix")}function o(a){if(a===null||L(a))return t(a);const s=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?n(a):e.interrupt(i.parser.constructs.flow,t,n)(a)}}function Ui(e,n,t,i,r,o,a,s,l){const u=l||Number.POSITIVE_INFINITY;let d=0;return c;function c(b){return b===60?(e.enter(i),e.enter(r),e.enter(o),e.consume(b),e.exit(o),m):b===null||b===32||b===41||tn(b)?t(b):(e.enter(i),e.enter(a),e.enter(s),e.enter("chunkString",{contentType:"string"}),v(b))}function m(b){return b===62?(e.enter(o),e.consume(b),e.exit(o),e.exit(r),e.exit(i),n):(e.enter(s),e.enter("chunkString",{contentType:"string"}),p(b))}function p(b){return b===62?(e.exit("chunkString"),e.exit(s),m(b)):b===null||b===60||L(b)?t(b):(e.consume(b),b===92?g:p)}function g(b){return b===60||b===62||b===92?(e.consume(b),p):p(b)}function v(b){return!d&&(b===null||b===41||$(b))?(e.exit("chunkString"),e.exit(s),e.exit(a),e.exit(i),n(b)):d<u&&b===40?(e.consume(b),d++,v):b===41?(e.consume(b),d--,v):b===null||b===32||b===40||tn(b)?t(b):(e.consume(b),b===92?z:v)}function z(b){return b===40||b===41||b===92?(e.consume(b),v):v(b)}}function Hi(e,n,t,i,r,o){const a=this;let s=0,l;return u;function u(p){return e.enter(i),e.enter(r),e.consume(p),e.exit(r),e.enter(o),d}function d(p){return s>999||p===null||p===91||p===93&&!l||p===94&&!s&&"_hiddenFootnoteSupport"in a.parser.constructs?t(p):p===93?(e.exit(o),e.enter(r),e.consume(p),e.exit(r),e.exit(i),n):L(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),c(p))}function c(p){return p===null||p===91||p===93||L(p)||s++>999?(e.exit("chunkString"),d(p)):(e.consume(p),l||(l=!N(p)),p===92?m:c)}function m(p){return p===91||p===92||p===93?(e.consume(p),s++,c):c(p)}}function $i(e,n,t,i,r,o){let a;return s;function s(m){return m===34||m===39||m===40?(e.enter(i),e.enter(r),e.consume(m),e.exit(r),a=m===40?41:m,l):t(m)}function l(m){return m===a?(e.enter(r),e.consume(m),e.exit(r),e.exit(i),n):(e.enter(o),u(m))}function u(m){return m===a?(e.exit(o),l(a)):m===null?t(m):L(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),M(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(m))}function d(m){return m===a||m===null||L(m)?(e.exit("chunkString"),u(m)):(e.consume(m),m===92?c:d)}function c(m){return m===a||m===92?(e.consume(m),d):d(m)}}function Ve(e,n){let t;return i;function i(r){return L(r)?(e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),t=!0,i):N(r)?M(e,i,t?"linePrefix":"lineSuffix")(r):n(r)}}const es={name:"definition",tokenize:ts},ns={partial:!0,tokenize:is};function ts(e,n,t){const i=this;let r;return o;function o(p){return e.enter("definition"),a(p)}function a(p){return Hi.call(i,e,s,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function s(p){return r=de(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),l):t(p)}function l(p){return $(p)?Ve(e,u)(p):u(p)}function u(p){return Ui(e,d,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function d(p){return e.attempt(ns,c,c)(p)}function c(p){return N(p)?M(e,m,"whitespace")(p):m(p)}function m(p){return p===null||L(p)?(e.exit("definition"),i.parser.defined.push(r),n(p)):t(p)}}function is(e,n,t){return i;function i(s){return $(s)?Ve(e,r)(s):t(s)}function r(s){return $i(e,o,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(s)}function o(s){return N(s)?M(e,a,"whitespace")(s):a(s)}function a(s){return s===null||L(s)?n(s):t(s)}}const rs={name:"hardBreakEscape",tokenize:as};function as(e,n,t){return i;function i(o){return e.enter("hardBreakEscape"),e.consume(o),r}function r(o){return L(o)?(e.exit("hardBreakEscape"),n(o)):t(o)}}const os={name:"headingAtx",resolve:ss,tokenize:ls};function ss(e,n){let t=e.length-2,i=3;if(e[i][1].type==="whitespace"&&(i+=2),t-2>i&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(i===t-1||t-4>i&&e[t-2][1].type==="whitespace")&&(t-=i+1===t?2:4),t>i){const r={type:"atxHeadingText",start:e[i][1].start,end:e[t][1].end},o={type:"chunkText",start:e[i][1].start,end:e[t][1].end,contentType:"text"};ce(e,i,t-i+1,[["enter",r,n],["enter",o,n],["exit",o,n],["exit",r,n]])}return e}function ls(e,n,t){let i=0;return r;function r(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&i++<6?(e.consume(d),a):d===null||$(d)?(e.exit("atxHeadingSequence"),s(d)):t(d)}function s(d){return d===35?(e.enter("atxHeadingSequence"),l(d)):d===null||L(d)?(e.exit("atxHeading"),n(d)):N(d)?M(e,s,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function l(d){return d===35?(e.consume(d),l):(e.exit("atxHeadingSequence"),s(d))}function u(d){return d===null||d===35||$(d)?(e.exit("atxHeadingText"),s(d)):(e.consume(d),u)}}const us=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Mt=["pre","script","style","textarea"],cs={concrete:!0,name:"htmlFlow",resolveTo:ps,tokenize:ms},ds={partial:!0,tokenize:hs};function ps(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function ms(e,n,t){const i=this;let r,o,a,s,l;return u;function u(f){return d(f)}function d(f){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(f),c}function c(f){return f===33?(e.consume(f),m):f===47?(e.consume(f),o=!0,v):f===63?(e.consume(f),r=3,i.interrupt?n:h):Z(f)?(e.consume(f),a=String.fromCharCode(f),z):t(f)}function m(f){return f===45?(e.consume(f),r=2,p):f===91?(e.consume(f),r=5,s=0,g):Z(f)?(e.consume(f),r=4,i.interrupt?n:h):t(f)}function p(f){return f===45?(e.consume(f),i.interrupt?n:h):t(f)}function g(f){const se="CDATA[";return f===se.charCodeAt(s++)?(e.consume(f),s===se.length?i.interrupt?n:T:g):t(f)}function v(f){return Z(f)?(e.consume(f),a=String.fromCharCode(f),z):t(f)}function z(f){if(f===null||f===47||f===62||$(f)){const se=f===47,ke=a.toLowerCase();return!se&&!o&&Mt.includes(ke)?(r=1,i.interrupt?n(f):T(f)):us.includes(a.toLowerCase())?(r=6,se?(e.consume(f),b):i.interrupt?n(f):T(f)):(r=7,i.interrupt&&!i.parser.lazy[i.now().line]?t(f):o?_(f):I(f))}return f===45||J(f)?(e.consume(f),a+=String.fromCharCode(f),z):t(f)}function b(f){return f===62?(e.consume(f),i.interrupt?n:T):t(f)}function _(f){return N(f)?(e.consume(f),_):y(f)}function I(f){return f===47?(e.consume(f),y):f===58||f===95||Z(f)?(e.consume(f),D):N(f)?(e.consume(f),I):y(f)}function D(f){return f===45||f===46||f===58||f===95||J(f)?(e.consume(f),D):R(f)}function R(f){return f===61?(e.consume(f),w):N(f)?(e.consume(f),R):I(f)}function w(f){return f===null||f===60||f===61||f===62||f===96?t(f):f===34||f===39?(e.consume(f),l=f,F):N(f)?(e.consume(f),w):O(f)}function F(f){return f===l?(e.consume(f),l=null,B):f===null||L(f)?t(f):(e.consume(f),F)}function O(f){return f===null||f===34||f===39||f===47||f===60||f===61||f===62||f===96||$(f)?R(f):(e.consume(f),O)}function B(f){return f===47||f===62||N(f)?I(f):t(f)}function y(f){return f===62?(e.consume(f),E):t(f)}function E(f){return f===null||L(f)?T(f):N(f)?(e.consume(f),E):t(f)}function T(f){return f===45&&r===2?(e.consume(f),Y):f===60&&r===1?(e.consume(f),G):f===62&&r===4?(e.consume(f),oe):f===63&&r===3?(e.consume(f),h):f===93&&r===5?(e.consume(f),he):L(f)&&(r===6||r===7)?(e.exit("htmlFlowData"),e.check(ds,fe,V)(f)):f===null||L(f)?(e.exit("htmlFlowData"),V(f)):(e.consume(f),T)}function V(f){return e.check(jn,Q,fe)(f)}function Q(f){return e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),j}function j(f){return f===null||L(f)?V(f):(e.enter("htmlFlowData"),T(f))}function Y(f){return f===45?(e.consume(f),h):T(f)}function G(f){return f===47?(e.consume(f),a="",ae):T(f)}function ae(f){if(f===62){const se=a.toLowerCase();return Mt.includes(se)?(e.consume(f),oe):T(f)}return Z(f)&&a.length<8?(e.consume(f),a+=String.fromCharCode(f),ae):T(f)}function he(f){return f===93?(e.consume(f),h):T(f)}function h(f){return f===62?(e.consume(f),oe):f===45&&r===2?(e.consume(f),h):T(f)}function oe(f){return f===null||L(f)?(e.exit("htmlFlowData"),fe(f)):(e.consume(f),oe)}function fe(f){return e.exit("htmlFlow"),n(f)}}function hs(e,n,t){return i;function i(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),e.attempt(Qe,n,t)}}const fs={name:"htmlText",tokenize:gs};function gs(e,n,t){const i=this;let r,o,a;return s;function s(h){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(h),l}function l(h){return h===33?(e.consume(h),u):h===47?(e.consume(h),R):h===63?(e.consume(h),I):Z(h)?(e.consume(h),O):t(h)}function u(h){return h===45?(e.consume(h),d):h===91?(e.consume(h),o=0,g):Z(h)?(e.consume(h),_):t(h)}function d(h){return h===45?(e.consume(h),p):t(h)}function c(h){return h===null?t(h):h===45?(e.consume(h),m):L(h)?(a=c,G(h)):(e.consume(h),c)}function m(h){return h===45?(e.consume(h),p):c(h)}function p(h){return h===62?Y(h):h===45?m(h):c(h)}function g(h){const oe="CDATA[";return h===oe.charCodeAt(o++)?(e.consume(h),o===oe.length?v:g):t(h)}function v(h){return h===null?t(h):h===93?(e.consume(h),z):L(h)?(a=v,G(h)):(e.consume(h),v)}function z(h){return h===93?(e.consume(h),b):v(h)}function b(h){return h===62?Y(h):h===93?(e.consume(h),b):v(h)}function _(h){return h===null||h===62?Y(h):L(h)?(a=_,G(h)):(e.consume(h),_)}function I(h){return h===null?t(h):h===63?(e.consume(h),D):L(h)?(a=I,G(h)):(e.consume(h),I)}function D(h){return h===62?Y(h):I(h)}function R(h){return Z(h)?(e.consume(h),w):t(h)}function w(h){return h===45||J(h)?(e.consume(h),w):F(h)}function F(h){return L(h)?(a=F,G(h)):N(h)?(e.consume(h),F):Y(h)}function O(h){return h===45||J(h)?(e.consume(h),O):h===47||h===62||$(h)?B(h):t(h)}function B(h){return h===47?(e.consume(h),Y):h===58||h===95||Z(h)?(e.consume(h),y):L(h)?(a=B,G(h)):N(h)?(e.consume(h),B):Y(h)}function y(h){return h===45||h===46||h===58||h===95||J(h)?(e.consume(h),y):E(h)}function E(h){return h===61?(e.consume(h),T):L(h)?(a=E,G(h)):N(h)?(e.consume(h),E):B(h)}function T(h){return h===null||h===60||h===61||h===62||h===96?t(h):h===34||h===39?(e.consume(h),r=h,V):L(h)?(a=T,G(h)):N(h)?(e.consume(h),T):(e.consume(h),Q)}function V(h){return h===r?(e.consume(h),r=void 0,j):h===null?t(h):L(h)?(a=V,G(h)):(e.consume(h),V)}function Q(h){return h===null||h===34||h===39||h===60||h===61||h===96?t(h):h===47||h===62||$(h)?B(h):(e.consume(h),Q)}function j(h){return h===47||h===62||$(h)?B(h):t(h)}function Y(h){return h===62?(e.consume(h),e.exit("htmlTextData"),e.exit("htmlText"),n):t(h)}function G(h){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),ae}function ae(h){return N(h)?M(e,he,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h):he(h)}function he(h){return e.enter("htmlTextData"),a(h)}}const nt={name:"labelEnd",resolveAll:xs,resolveTo:ws,tokenize:ks},bs={tokenize:zs},ys={tokenize:Is},vs={tokenize:Ss};function xs(e){let n=-1;const t=[];for(;++n<e.length;){const i=e[n][1];if(t.push(e[n]),i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd"){const r=i.type==="labelImage"?4:2;i.type="data",n+=r}}return e.length!==t.length&&ce(e,0,e.length,t),e}function ws(e,n){let t=e.length,i=0,r,o,a;for(;t--;){const d=e[t][1];if(r){if(d.type==="link"||d.type==="labelLink"&&d._inactive)break;e[t][0]==="enter"&&d.type==="labelLink"&&(d._inactive=!0)}else if(o){if(e[t][0]==="enter"&&(d.type==="labelImage"||d.type==="labelLink")&&!d._balanced&&(r=t,d.type!=="labelLink")){i=2;break}}else d.type==="labelEnd"&&(o=t)}const s={type:e[r][1].type==="labelLink"?"link":"image",start:{...e[r][1].start},end:{...e[e.length-1][1].end}},l={type:"label",start:{...e[r][1].start},end:{...e[o][1].end}},u={type:"labelText",start:{...e[r+i+2][1].end},end:{...e[o-2][1].start}};return a=[["enter",s,n],["enter",l,n]],a=re(a,e.slice(r+1,r+i+3)),a=re(a,[["enter",u,n]]),a=re(a,dn(n.parser.constructs.insideSpan.null,e.slice(r+i+4,o-3),n)),a=re(a,[["exit",u,n],e[o-2],e[o-1],["exit",l,n]]),a=re(a,e.slice(o+1)),a=re(a,[["exit",s,n]]),ce(e,r,e.length,a),e}function ks(e,n,t){const i=this,r=i._labelStarts;let o,a;if(r){for(;r.length>0&&r[r.length-1]._balanced;)r.pop();o=r[r.length-1]}return s;function s(m){return o?o._inactive?c(m):(a=i.parser.defined.includes(de(i.sliceSerialize({start:o.end,end:i.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(m),e.exit("labelMarker"),e.exit("labelEnd"),l):t(m)}function l(m){return m===40?e.attempt(bs,d,a?d:c)(m):m===91?e.attempt(ys,d,a?u:c)(m):a?d(m):c(m)}function u(m){return e.attempt(vs,d,c)(m)}function d(m){return r.pop(),n(m)}function c(m){return o._balanced=!0,t(m)}}function zs(e,n,t){return i;function i(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),r}function r(c){return $(c)?Ve(e,o)(c):o(c)}function o(c){return c===41?d(c):Ui(e,a,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function a(c){return $(c)?Ve(e,l)(c):d(c)}function s(c){return t(c)}function l(c){return c===34||c===39||c===40?$i(e,u,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):d(c)}function u(c){return $(c)?Ve(e,d)(c):d(c)}function d(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),n):t(c)}}function Is(e,n,t){const i=this;return r;function r(s){return Hi.call(i,e,o,a,"reference","referenceMarker","referenceString")(s)}function o(s){return i.parser.defined.includes(de(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?n(s):t(s)}function a(s){return t(s)}}function Ss(e,n,t){return i;function i(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),r}function r(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),n):t(o)}}const _s={name:"labelStartImage",resolveAll:nt.resolveAll,tokenize:Cs};function Cs(e,n,t){const i=this;let r;return o;function o(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),a}function a(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),r=e.exit("labelImage"),s):t(l)}function s(l){return l===94&&"_hiddenFootnoteSupport"in i.parser.constructs?t(l):(i._labelStarts=i._labelStarts||[],i._labelStarts.push(r),n(l))}}const Es={name:"labelStartLink",resolveAll:nt.resolveAll,tokenize:Ts};function Ts(e,n,t){const i=this;let r;return o;function o(s){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),r=e.exit("labelLink"),a}function a(s){return s===94&&"_hiddenFootnoteSupport"in i.parser.constructs?t(s):(i._labelStarts=i._labelStarts||[],i._labelStarts.push(r),n(s))}}const yn={name:"lineEnding",tokenize:Ls};function Ls(e,n){return t;function t(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),M(e,n,"linePrefix")}}const Ze={name:"thematicBreak",tokenize:As};function As(e,n,t){let i=0,r;return o;function o(u){return e.enter("thematicBreak"),a(u)}function a(u){return r=u,s(u)}function s(u){return u===r?(e.enter("thematicBreakSequence"),l(u)):i>=3&&(u===null||L(u))?(e.exit("thematicBreak"),n(u)):t(u)}function l(u){return u===r?(e.consume(u),i++,l):(e.exit("thematicBreakSequence"),N(u)?M(e,s,"whitespace")(u):s(u))}}const ee={continuation:{tokenize:Rs},exit:qs,name:"list",tokenize:Ns},Ps={partial:!0,tokenize:js},Ds={partial:!0,tokenize:Fs};function Ns(e,n,t){const i=this,r=i.events[i.events.length-1];let o=r&&r[1].type==="linePrefix"?r[2].sliceSerialize(r[1],!0).length:0,a=0;return s;function s(p){const g=i.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!i.containerState.marker||p===i.containerState.marker:Fn(p)){if(i.containerState.type||(i.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(Ze,t,u)(p):u(p);if(!i.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(p)}return t(p)}function l(p){return Fn(p)&&++a<10?(e.consume(p),l):(!i.interrupt||a<2)&&(i.containerState.marker?p===i.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),u(p)):t(p)}function u(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||p,e.check(Qe,i.interrupt?t:d,e.attempt(Ps,m,c))}function d(p){return i.containerState.initialBlankLine=!0,o++,m(p)}function c(p){return N(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),m):t(p)}function m(p){return i.containerState.size=o+i.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(p)}}function Rs(e,n,t){const i=this;return i.containerState._closeFlow=void 0,e.check(Qe,r,o);function r(s){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,M(e,n,"listItemIndent",i.containerState.size+1)(s)}function o(s){return i.containerState.furtherBlankLines||!N(s)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,a(s)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,e.attempt(Ds,n,a)(s))}function a(s){return i.containerState._closeFlow=!0,i.interrupt=void 0,M(e,e.attempt(ee,n,t),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function Fs(e,n,t){const i=this;return M(e,r,"listItemIndent",i.containerState.size+1);function r(o){const a=i.events[i.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===i.containerState.size?n(o):t(o)}}function qs(e){e.exit(this.containerState.type)}function js(e,n,t){const i=this;return M(e,r,"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function r(o){const a=i.events[i.events.length-1];return!N(o)&&a&&a[1].type==="listItemPrefixWhitespace"?n(o):t(o)}}const Ot={name:"setextUnderline",resolveTo:Ms,tokenize:Os};function Ms(e,n){const t=new rn;let i=e.length,r,o,a;for(;i--;)if(e[i][0]==="enter"){if(e[i][1].type==="content"){r=i;break}e[i][1].type==="paragraph"&&(o=i)}else e[i][1].type==="content"&&t.add(i,1,[]),!a&&e[i][1].type==="definition"&&(a=i);const s={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[o][1].type="setextHeadingText",a?(t.add(o,0,[["enter",s,n]]),t.add(a+1,0,[["exit",e[r][1],n]]),e[r][1].end={...e[a][1].end}):e[r][1]=s,t.add(e.length,0,[["exit",s,n]]),t.consume(e),e}function Os(e,n,t){const i=this;let r;return o;function o(u){let d=i.events.length,c;for(;d--;)if(i.events[d][1].type!=="lineEnding"&&i.events[d][1].type!=="linePrefix"&&i.events[d][1].type!=="content"){c=i.events[d][1].type==="paragraph";break}return!i.parser.lazy[i.now().line]&&(i.interrupt||c)?(e.enter("setextHeadingLine"),r=u,a(u)):t(u)}function a(u){return e.enter("setextHeadingLineSequence"),s(u)}function s(u){return u===r?(e.consume(u),s):(e.exit("setextHeadingLineSequence"),N(u)?M(e,l,"lineSuffix")(u):l(u))}function l(u){return u===null||L(u)?(e.exit("setextHeadingLine"),n(u)):t(u)}}const Bs={tokenize:Vs};function Vs(e){const n=this,t=e.attempt(Qe,i,e.attempt(this.parser.constructs.flowInitial,r,M(e,e.attempt(this.parser.constructs.flow,r,e.attempt(Xo,r)),"linePrefix")));return t;function i(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function r(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const Us={resolveAll:Wi()},Hs=Qi("string"),$s=Qi("text");function Qi(e){return{resolveAll:Wi(e==="text"?Qs:void 0),tokenize:n};function n(t){const i=this,r=this.parser.constructs[e],o=t.attempt(r,a,s);return a;function a(d){return u(d)?o(d):s(d)}function s(d){if(d===null){t.consume(d);return}return t.enter("data"),t.consume(d),l}function l(d){return u(d)?(t.exit("data"),o(d)):(t.consume(d),l)}function u(d){if(d===null)return!0;const c=r[d];let m=-1;if(c)for(;++m<c.length;){const p=c[m];if(!p.previous||p.previous.call(i,i.previous))return!0}return!1}}}function Wi(e){return n;function n(t,i){let r=-1,o;for(;++r<=t.length;)o===void 0?t[r]&&t[r][1].type==="data"&&(o=r,r++):(!t[r]||t[r][1].type!=="data")&&(r!==o+2&&(t[o][1].end=t[r-1][1].end,t.splice(o+2,r-o-2),r=o+2),o=void 0);return e?e(t,i):t}}function Qs(e,n){const t=new rn;let i=0;for(;++i<=e.length;)if((i===e.length||e[i][1].type==="lineEnding")&&e[i-1][1].type==="data"){const r=e[i-1][1],o=n.sliceStream(r);let a=o.length,s=-1,l=0,u;for(;a--;){const d=o[a];if(typeof d=="string"){for(s=d.length;d.charCodeAt(s-1)===32;)l++,s--;if(s)break;s=-1}else if(d===-2)u=!0,l++;else if(d!==-1){a++;break}}if(n._contentTypeTextTrailing&&i===e.length&&(l=0),l){const d={type:i===e.length||u||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?s:r.start._bufferIndex+s,_index:r.start._index+a,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...d.start},r.start.offset===r.end.offset?Object.assign(r,d):t.add(i,0,[["enter",d,n],["exit",d,n]])}i++}return t.consume(e),e}const Ws={42:ee,43:ee,45:ee,48:ee,49:ee,50:ee,51:ee,52:ee,53:ee,54:ee,55:ee,56:ee,57:ee,62:Mi},Gs={91:es},Xs={[-2]:bn,[-1]:bn,32:bn},Ys={35:os,42:Ze,45:[Ot,Ze],60:cs,61:Ot,95:Ze,96:jt,126:jt},Js={38:Bi,92:Oi},Ks={[-5]:yn,[-4]:yn,[-3]:yn,33:_s,38:Bi,42:qn,60:[Lo,fs],91:Es,92:[rs,Oi],93:nt,95:qn,96:Uo},Zs={null:[qn,Us]},el={null:[42,95]},nl={null:[]},tl=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:el,contentInitial:Gs,disable:nl,document:Ws,flow:Ys,flowInitial:Xs,insideSpan:Zs,string:Js,text:Ks},Symbol.toStringTag,{value:"Module"}));function il(e,n,t){let i={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const r={},o=[];let a=[],s=[];const l={attempt:F(R),check:F(w),consume:_,enter:I,exit:D,interrupt:F(w,{interrupt:!0})},u={code:null,containerState:{},defineSkip:v,events:[],now:g,parser:e,previous:null,sliceSerialize:m,sliceStream:p,write:c};let d=n.tokenize.call(u,l);return n.resolveAll&&o.push(n),u;function c(E){return a=re(a,E),z(),a[a.length-1]!==null?[]:(O(n,0),u.events=dn(o,u.events,u),u.events)}function m(E,T){return al(p(E),T)}function p(E){return rl(a,E)}function g(){const{_bufferIndex:E,_index:T,line:V,column:Q,offset:j}=i;return{_bufferIndex:E,_index:T,line:V,column:Q,offset:j}}function v(E){r[E.line]=E.column,y()}function z(){for(;i._index<a.length;){const E=a[i._index];if(typeof E=="string"){const T=i._index;for(i._bufferIndex<0&&(i._bufferIndex=0);i._index===T&&i._bufferIndex<E.length;)b(E.charCodeAt(i._bufferIndex))}else b(E)}}function b(E){d=d(E)}function _(E){L(E)?(i.line++,i.column=1,i.offset+=E===-3?2:1,y()):E!==-1&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===a[i._index].length&&(i._bufferIndex=-1,i._index++)),u.previous=E}function I(E,T){const V=T||{};return V.type=E,V.start=g(),u.events.push(["enter",V,u]),s.push(V),V}function D(E){const T=s.pop();return T.end=g(),u.events.push(["exit",T,u]),T}function R(E,T){O(E,T.from)}function w(E,T){T.restore()}function F(E,T){return V;function V(Q,j,Y){let G,ae,he,h;return Array.isArray(Q)?fe(Q):"tokenize"in Q?fe([Q]):oe(Q);function oe(X){return Fe;function Fe(ve){const Le=ve!==null&&X[ve],Ae=ve!==null&&X.null,Ge=[...Array.isArray(Le)?Le:Le?[Le]:[],...Array.isArray(Ae)?Ae:Ae?[Ae]:[]];return fe(Ge)(ve)}}function fe(X){return G=X,ae=0,X.length===0?Y:f(X[ae])}function f(X){return Fe;function Fe(ve){return h=B(),he=X,X.partial||(u.currentConstruct=X),X.name&&u.parser.constructs.disable.null.includes(X.name)?ke():X.tokenize.call(T?Object.assign(Object.create(u),T):u,l,se,ke)(ve)}}function se(X){return E(he,h),j}function ke(X){return h.restore(),++ae<G.length?f(G[ae]):Y}}}function O(E,T){E.resolveAll&&!o.includes(E)&&o.push(E),E.resolve&&ce(u.events,T,u.events.length-T,E.resolve(u.events.slice(T),u)),E.resolveTo&&(u.events=E.resolveTo(u.events,u))}function B(){const E=g(),T=u.previous,V=u.currentConstruct,Q=u.events.length,j=Array.from(s);return{from:Q,restore:Y};function Y(){i=E,u.previous=T,u.currentConstruct=V,u.events.length=Q,s=j,y()}}function y(){i.line in r&&i.column<2&&(i.column=r[i.line],i.offset+=r[i.line]-1)}}function rl(e,n){const t=n.start._index,i=n.start._bufferIndex,r=n.end._index,o=n.end._bufferIndex;let a;if(t===r)a=[e[t].slice(i,o)];else{if(a=e.slice(t,r),i>-1){const s=a[0];typeof s=="string"?a[0]=s.slice(i):a.shift()}o>0&&a.push(e[r].slice(0,o))}return a}function al(e,n){let t=-1;const i=[];let r;for(;++t<e.length;){const o=e[t];let a;if(typeof o=="string")a=o;else switch(o){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=n?" ":"	";break}case-1:{if(!n&&r)continue;a=" ";break}default:a=String.fromCharCode(o)}r=o===-2,i.push(a)}return i.join("")}function ol(e){const i={constructs:Fi([tl,...(e||{}).extensions||[]]),content:r(zo),defined:[],document:r(So),flow:r(Bs),lazy:{},string:r(Hs),text:r($s)};return i;function r(o){return a;function a(s){return il(i,o,s)}}}function sl(e){for(;!Vi(e););return e}const Bt=/[\0\t\n\r]/g;function ll(){let e=1,n="",t=!0,i;return r;function r(o,a,s){o=n+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o));const l=[];let u=0;for(n="",t&&(o.charCodeAt(0)===65279&&u++,t=void 0);u<o.length;){Bt.lastIndex=u;const d=Bt.exec(o),c=d&&d.index!==void 0?d.index:o.length,m=o.charCodeAt(c);if(!d){n=o.slice(u);break}if(m===10&&u===c&&i)l.push(-3),i=void 0;else switch(i&&(l.push(-5),i=void 0),u<c&&(l.push(o.slice(u,c)),e+=c-u),m){case 0:{l.push(65533),e++;break}case 9:{const p=Math.ceil(e/4)*4;for(l.push(-2);e++<p;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:i=!0,e=1}u=c+1}return s&&(i&&l.push(-5),n&&l.push(n),l.push(null)),l}}const ul=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function cl(e){return e.replace(ul,dl)}function dl(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const r=t.charCodeAt(1),o=r===120||r===88;return qi(t.slice(o?2:1),o?16:10)}return et(t)||e}const Gi={}.hasOwnProperty;function pl(e,n,t){return n&&typeof n=="object"&&(t=n,n=void 0),ml(t)(sl(ol(t).document().write(ll()(e,n,!0))))}function ml(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(bt),autolinkProtocol:B,autolinkEmail:B,atxHeading:o(ht),blockQuote:o(Ae),characterEscape:B,characterReference:B,codeFenced:o(Ge),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(Ge,a),codeText:o(Er,a),codeTextData:B,data:B,codeFlowValue:B,definition:o(Tr),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(Lr),hardBreakEscape:o(ft),hardBreakTrailing:o(ft),htmlFlow:o(gt,a),htmlFlowData:B,htmlText:o(gt,a),htmlTextData:B,image:o(Ar),label:a,link:o(bt),listItem:o(Pr),listItemValue:m,listOrdered:o(yt,c),listUnordered:o(yt),paragraph:o(Dr),reference:f,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(ht),strong:o(Nr),thematicBreak:o(Fr)},exit:{atxHeading:l(),atxHeadingSequence:R,autolink:l(),autolinkEmail:Le,autolinkProtocol:ve,blockQuote:l(),characterEscapeValue:y,characterReferenceMarkerHexadecimal:ke,characterReferenceMarkerNumeric:ke,characterReferenceValue:X,characterReference:Fe,codeFenced:l(z),codeFencedFence:v,codeFencedFenceInfo:p,codeFencedFenceMeta:g,codeFlowValue:y,codeIndented:l(b),codeText:l(j),codeTextData:y,data:y,definition:l(),definitionDestinationString:D,definitionLabelString:_,definitionTitleString:I,emphasis:l(),hardBreakEscape:l(T),hardBreakTrailing:l(T),htmlFlow:l(V),htmlFlowData:y,htmlText:l(Q),htmlTextData:y,image:l(G),label:he,labelText:ae,lineEnding:E,link:l(Y),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:se,resourceDestinationString:h,resourceTitleString:oe,resource:fe,setextHeading:l(O),setextHeadingLineSequence:F,setextHeadingText:w,strong:l(),thematicBreak:l()}};Xi(n,(e||{}).mdastExtensions||[]);const t={};return i;function i(x){let S={type:"root",children:[]};const P={stack:[S],tokenStack:[],config:n,enter:s,exit:u,buffer:a,resume:d,data:t},q=[];let U=-1;for(;++U<x.length;)if(x[U][1].type==="listOrdered"||x[U][1].type==="listUnordered")if(x[U][0]==="enter")q.push(U);else{const le=q.pop();U=r(x,le,U)}for(U=-1;++U<x.length;){const le=n[x[U][0]];Gi.call(le,x[U][1].type)&&le[x[U][1].type].call(Object.assign({sliceSerialize:x[U][2].sliceSerialize},P),x[U][1])}if(P.tokenStack.length>0){const le=P.tokenStack[P.tokenStack.length-1];(le[1]||Vt).call(P,void 0,le[0])}for(S.position={start:xe(x.length>0?x[0][1].start:{line:1,column:1,offset:0}),end:xe(x.length>0?x[x.length-2][1].end:{line:1,column:1,offset:0})},U=-1;++U<n.transforms.length;)S=n.transforms[U](S)||S;return S}function r(x,S,P){let q=S-1,U=-1,le=!1,ze,ge,qe,je;for(;++q<=P;){const te=x[q];switch(te[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{te[0]==="enter"?U++:U--,je=void 0;break}case"lineEndingBlank":{te[0]==="enter"&&(ze&&!je&&!U&&!qe&&(qe=q),je=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:je=void 0}if(!U&&te[0]==="enter"&&te[1].type==="listItemPrefix"||U===-1&&te[0]==="exit"&&(te[1].type==="listUnordered"||te[1].type==="listOrdered")){if(ze){let Pe=q;for(ge=void 0;Pe--;){const be=x[Pe];if(be[1].type==="lineEnding"||be[1].type==="lineEndingBlank"){if(be[0]==="exit")continue;ge&&(x[ge][1].type="lineEndingBlank",le=!0),be[1].type="lineEnding",ge=Pe}else if(!(be[1].type==="linePrefix"||be[1].type==="blockQuotePrefix"||be[1].type==="blockQuotePrefixWhitespace"||be[1].type==="blockQuoteMarker"||be[1].type==="listItemIndent"))break}qe&&(!ge||qe<ge)&&(ze._spread=!0),ze.end=Object.assign({},ge?x[ge][1].start:te[1].end),x.splice(ge||q,0,["exit",ze,te[2]]),q++,P++}if(te[1].type==="listItemPrefix"){const Pe={type:"listItem",_spread:!1,start:Object.assign({},te[1].start),end:void 0};ze=Pe,x.splice(q,0,["enter",Pe,te[2]]),q++,P++,qe=void 0,je=!0}}}return x[S][1]._spread=le,P}function o(x,S){return P;function P(q){s.call(this,x(q),q),S&&S.call(this,q)}}function a(){this.stack.push({type:"fragment",children:[]})}function s(x,S,P){this.stack[this.stack.length-1].children.push(x),this.stack.push(x),this.tokenStack.push([S,P||void 0]),x.position={start:xe(S.start),end:void 0}}function l(x){return S;function S(P){x&&x.call(this,P),u.call(this,P)}}function u(x,S){const P=this.stack.pop(),q=this.tokenStack.pop();if(q)q[0].type!==x.type&&(S?S.call(this,x,q[0]):(q[1]||Vt).call(this,x,q[0]));else throw new Error("Cannot close `"+x.type+"` ("+Be({start:x.start,end:x.end})+"): it’s not open");P.position.end=xe(x.end)}function d(){return Zn(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function m(x){if(this.data.expectingFirstListItemValue){const S=this.stack[this.stack.length-2];S.start=Number.parseInt(this.sliceSerialize(x),10),this.data.expectingFirstListItemValue=void 0}}function p(){const x=this.resume(),S=this.stack[this.stack.length-1];S.lang=x}function g(){const x=this.resume(),S=this.stack[this.stack.length-1];S.meta=x}function v(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function z(){const x=this.resume(),S=this.stack[this.stack.length-1];S.value=x.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function b(){const x=this.resume(),S=this.stack[this.stack.length-1];S.value=x.replace(/(\r?\n|\r)$/g,"")}function _(x){const S=this.resume(),P=this.stack[this.stack.length-1];P.label=S,P.identifier=de(this.sliceSerialize(x)).toLowerCase()}function I(){const x=this.resume(),S=this.stack[this.stack.length-1];S.title=x}function D(){const x=this.resume(),S=this.stack[this.stack.length-1];S.url=x}function R(x){const S=this.stack[this.stack.length-1];if(!S.depth){const P=this.sliceSerialize(x).length;S.depth=P}}function w(){this.data.setextHeadingSlurpLineEnding=!0}function F(x){const S=this.stack[this.stack.length-1];S.depth=this.sliceSerialize(x).codePointAt(0)===61?1:2}function O(){this.data.setextHeadingSlurpLineEnding=void 0}function B(x){const P=this.stack[this.stack.length-1].children;let q=P[P.length-1];(!q||q.type!=="text")&&(q=Rr(),q.position={start:xe(x.start),end:void 0},P.push(q)),this.stack.push(q)}function y(x){const S=this.stack.pop();S.value+=this.sliceSerialize(x),S.position.end=xe(x.end)}function E(x){const S=this.stack[this.stack.length-1];if(this.data.atHardBreak){const P=S.children[S.children.length-1];P.position.end=xe(x.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(S.type)&&(B.call(this,x),y.call(this,x))}function T(){this.data.atHardBreak=!0}function V(){const x=this.resume(),S=this.stack[this.stack.length-1];S.value=x}function Q(){const x=this.resume(),S=this.stack[this.stack.length-1];S.value=x}function j(){const x=this.resume(),S=this.stack[this.stack.length-1];S.value=x}function Y(){const x=this.stack[this.stack.length-1];if(this.data.inReference){const S=this.data.referenceType||"shortcut";x.type+="Reference",x.referenceType=S,delete x.url,delete x.title}else delete x.identifier,delete x.label;this.data.referenceType=void 0}function G(){const x=this.stack[this.stack.length-1];if(this.data.inReference){const S=this.data.referenceType||"shortcut";x.type+="Reference",x.referenceType=S,delete x.url,delete x.title}else delete x.identifier,delete x.label;this.data.referenceType=void 0}function ae(x){const S=this.sliceSerialize(x),P=this.stack[this.stack.length-2];P.label=cl(S),P.identifier=de(S).toLowerCase()}function he(){const x=this.stack[this.stack.length-1],S=this.resume(),P=this.stack[this.stack.length-1];if(this.data.inReference=!0,P.type==="link"){const q=x.children;P.children=q}else P.alt=S}function h(){const x=this.resume(),S=this.stack[this.stack.length-1];S.url=x}function oe(){const x=this.resume(),S=this.stack[this.stack.length-1];S.title=x}function fe(){this.data.inReference=void 0}function f(){this.data.referenceType="collapsed"}function se(x){const S=this.resume(),P=this.stack[this.stack.length-1];P.label=S,P.identifier=de(this.sliceSerialize(x)).toLowerCase(),this.data.referenceType="full"}function ke(x){this.data.characterReferenceType=x.type}function X(x){const S=this.sliceSerialize(x),P=this.data.characterReferenceType;let q;P?(q=qi(S,P==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):q=et(S);const U=this.stack[this.stack.length-1];U.value+=q}function Fe(x){const S=this.stack.pop();S.position.end=xe(x.end)}function ve(x){y.call(this,x);const S=this.stack[this.stack.length-1];S.url=this.sliceSerialize(x)}function Le(x){y.call(this,x);const S=this.stack[this.stack.length-1];S.url="mailto:"+this.sliceSerialize(x)}function Ae(){return{type:"blockquote",children:[]}}function Ge(){return{type:"code",lang:null,meta:null,value:""}}function Er(){return{type:"inlineCode",value:""}}function Tr(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Lr(){return{type:"emphasis",children:[]}}function ht(){return{type:"heading",depth:0,children:[]}}function ft(){return{type:"break"}}function gt(){return{type:"html",value:""}}function Ar(){return{type:"image",title:null,url:"",alt:null}}function bt(){return{type:"link",title:null,url:"",children:[]}}function yt(x){return{type:"list",ordered:x.type==="listOrdered",start:null,spread:x._spread,children:[]}}function Pr(x){return{type:"listItem",spread:x._spread,checked:null,children:[]}}function Dr(){return{type:"paragraph",children:[]}}function Nr(){return{type:"strong",children:[]}}function Rr(){return{type:"text",value:""}}function Fr(){return{type:"thematicBreak"}}}function xe(e){return{line:e.line,column:e.column,offset:e.offset}}function Xi(e,n){let t=-1;for(;++t<n.length;){const i=n[t];Array.isArray(i)?Xi(e,i):hl(e,i)}}function hl(e,n){let t;for(t in n)if(Gi.call(n,t))switch(t){case"canContainEols":{const i=n[t];i&&e[t].push(...i);break}case"transforms":{const i=n[t];i&&e[t].push(...i);break}case"enter":case"exit":{const i=n[t];i&&Object.assign(e[t],i);break}}}function Vt(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+Be({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+Be({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+Be({start:n.start,end:n.end})+") is still open")}function fl(e){const n=this;n.parser=t;function t(i){return pl(i,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function gl(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function bl(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function yl(e,n){const t=n.value?n.value+`
`:"",i={},r=n.lang?n.lang.split(/\s+/):[];r.length>0&&(i.className=["language-"+r[0]]);let o={type:"element",tagName:"code",properties:i,children:[{type:"text",value:t}]};return n.meta&&(o.data={meta:n.meta}),e.patch(n,o),o=e.applyData(n,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(n,o),o}function vl(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function xl(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function wl(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",i=String(n.identifier).toUpperCase(),r=Re(i.toLowerCase()),o=e.footnoteOrder.indexOf(i);let a,s=e.footnoteCounts.get(i);s===void 0?(s=0,e.footnoteOrder.push(i),a=e.footnoteOrder.length):a=o+1,s+=1,e.footnoteCounts.set(i,s);const l={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+r,id:t+"fnref-"+r+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(n,l);const u={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(n,u),e.applyData(n,u)}function kl(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function zl(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function Yi(e,n){const t=n.referenceType;let i="]";if(t==="collapsed"?i+="[]":t==="full"&&(i+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+i}];const r=e.all(n),o=r[0];o&&o.type==="text"?o.value="["+o.value:r.unshift({type:"text",value:"["});const a=r[r.length-1];return a&&a.type==="text"?a.value+=i:r.push({type:"text",value:i}),r}function Il(e,n){const t=String(n.identifier).toUpperCase(),i=e.definitionById.get(t);if(!i)return Yi(e,n);const r={src:Re(i.url||""),alt:n.alt};i.title!==null&&i.title!==void 0&&(r.title=i.title);const o={type:"element",tagName:"img",properties:r,children:[]};return e.patch(n,o),e.applyData(n,o)}function Sl(e,n){const t={src:Re(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const i={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,i),e.applyData(n,i)}function _l(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const i={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,i),e.applyData(n,i)}function Cl(e,n){const t=String(n.identifier).toUpperCase(),i=e.definitionById.get(t);if(!i)return Yi(e,n);const r={href:Re(i.url||"")};i.title!==null&&i.title!==void 0&&(r.title=i.title);const o={type:"element",tagName:"a",properties:r,children:e.all(n)};return e.patch(n,o),e.applyData(n,o)}function El(e,n){const t={href:Re(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const i={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function Tl(e,n,t){const i=e.all(n),r=t?Ll(t):Ji(n),o={},a=[];if(typeof n.checked=="boolean"){const d=i[0];let c;d&&d.type==="element"&&d.tagName==="p"?c=d:(c={type:"element",tagName:"p",properties:{},children:[]},i.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let s=-1;for(;++s<i.length;){const d=i[s];(r||s!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!r?a.push(...d.children):a.push(d)}const l=i[i.length-1];l&&(r||l.type!=="element"||l.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:a};return e.patch(n,u),e.applyData(n,u)}function Ll(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let i=-1;for(;!n&&++i<t.length;)n=Ji(t[i])}return n}function Ji(e){const n=e.spread;return n??e.children.length>1}function Al(e,n){const t={},i=e.all(n);let r=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++r<i.length;){const a=i[r];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const o={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(i,!0)};return e.patch(n,o),e.applyData(n,o)}function Pl(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Dl(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function Nl(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Rl(e,n){const t=e.all(n),i=t.shift(),r=[];if(i){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([i],!0)};e.patch(n.children[0],a),r.push(a)}if(t.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},s=Xn(n.children[1]),l=Ti(n.children[n.children.length-1]);s&&l&&(a.position={start:s,end:l}),r.push(a)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(r,!0)};return e.patch(n,o),e.applyData(n,o)}function Fl(e,n,t){const i=t?t.children:void 0,o=(i?i.indexOf(n):1)===0?"th":"td",a=t&&t.type==="table"?t.align:void 0,s=a?a.length:n.children.length;let l=-1;const u=[];for(;++l<s;){const c=n.children[l],m={},p=a?a[l]:void 0;p&&(m.align=p);let g={type:"element",tagName:o,properties:m,children:[]};c&&(g.children=e.all(c),e.patch(c,g),g=e.applyData(c,g)),u.push(g)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(n,d),e.applyData(n,d)}function ql(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const Ut=9,Ht=32;function jl(e){const n=String(e),t=/\r?\n|\r/g;let i=t.exec(n),r=0;const o=[];for(;i;)o.push($t(n.slice(r,i.index),r>0,!0),i[0]),r=i.index+i[0].length,i=t.exec(n);return o.push($t(n.slice(r),r>0,!1)),o.join("")}function $t(e,n,t){let i=0,r=e.length;if(n){let o=e.codePointAt(i);for(;o===Ut||o===Ht;)i++,o=e.codePointAt(i)}if(t){let o=e.codePointAt(r-1);for(;o===Ut||o===Ht;)r--,o=e.codePointAt(r-1)}return r>i?e.slice(i,r):""}function Ml(e,n){const t={type:"text",value:jl(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function Ol(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const Bl={blockquote:gl,break:bl,code:yl,delete:vl,emphasis:xl,footnoteReference:wl,heading:kl,html:zl,imageReference:Il,image:Sl,inlineCode:_l,linkReference:Cl,link:El,listItem:Tl,list:Al,paragraph:Pl,root:Dl,strong:Nl,table:Rl,tableCell:ql,tableRow:Fl,text:Ml,thematicBreak:Ol,toml:Xe,yaml:Xe,definition:Xe,footnoteDefinition:Xe};function Xe(){}const Ki=-1,pn=0,Ue=1,on=2,tt=3,it=4,rt=5,at=6,Zi=7,er=8,{defineProperty:Vl}=Object,nr=typeof self=="object"?self:globalThis,Qt=(e,n)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new nr[e](n)},Ul=(e,n)=>{const t=(r,o)=>(e.set(o,r),r),i=r=>{if(e.has(r))return e.get(r);const[o,a]=n[r];switch(o){case pn:case Ki:return t(a,r);case Ue:{const s=t([],r);for(const l of a)s.push(i(l));return s}case on:{const s=t({},r);for(const[l,u]of a){const d=i(l),c=i(u);d==="__proto__"?Vl(s,d,{value:c,configurable:!0,enumerable:!0,writable:!0}):s[d]=c}return s}case tt:return t(new Date(a),r);case it:{const{source:s,flags:l}=a;return t(new RegExp(s,l),r)}case rt:{const s=t(new Map,r);for(const[l,u]of a)s.set(i(l),i(u));return s}case at:{const s=t(new Set,r);for(const l of a)s.add(i(l));return s}case Zi:{const{name:s,message:l}=a;return t(typeof nr[s]=="function"?Qt(s,l):new Error(l),r)}case er:return t(BigInt(a),r);case"BigInt":return t(Object(BigInt(a)),r);case"ArrayBuffer":return t(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:s}=new Uint8Array(a);return t(new DataView(s),a)}case"-0":return-0}return t(Qt(o,a),r)};return i},Wt=e=>Ul(new Map,e)(0),Se="",{toString:Hl}={},{keys:$l,is:Ql}=Object,Oe=e=>{const n=typeof e;if(n!=="object"||!e)return[pn,n];const t=Hl.call(e).slice(8,-1);switch(t){case"Array":return[Ue,Se];case"Object":return[on,Se];case"Date":return[tt,Se];case"RegExp":return[it,Se];case"Map":return[rt,Se];case"Set":return[at,Se];case"DataView":return[Ue,t]}return t.includes("Array")?[Ue,t]:e instanceof Error?[Zi,e.name||"Error"]:[on,t]},Ye=([e,n])=>e===pn&&(n==="function"||n==="symbol"),Wl=(e,n,t,i)=>{const r=(a,s)=>{const l=i.push(a)-1;return t.set(s,l),l},o=a=>{if(t.has(a))return t.get(a);let[s,l]=Oe(a);switch(s){case pn:{let d=a;switch(l){case"bigint":s=er,d=a.toString();break;case"number":if(!a&&Ql(a,-0))return i.push(["-0"])-1;break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);d=null;break;case"undefined":return r([Ki],a)}return r([s,d],a)}case Ue:{if(l){let m=a;return l==="DataView"?m=new Uint8Array(a.buffer):l==="ArrayBuffer"&&(m=new Uint8Array(a)),r([l,[...m]],a)}const d=[],c=r([s,d],a);for(const m of a)d.push(o(m));return c}case on:{if(l)switch(l){case"BigInt":return r([l,a.toString()],a);case"Boolean":case"Number":case"String":return r([l,a.valueOf()],a)}if(n&&"toJSON"in a)return o(a.toJSON());const d=[],c=r([s,d],a);for(const m of $l(a))(e||!Ye(Oe(a[m])))&&d.push([o(m),o(a[m])]);return c}case tt:return r([s,isNaN(a.getTime())?Se:a.toISOString()],a);case it:{const{source:d,flags:c}=a;return r([s,{source:d,flags:c}],a)}case rt:{const d=[],c=r([s,d],a);for(const[m,p]of a)(e||!(Ye(Oe(m))||Ye(Oe(p))))&&d.push([o(m),o(p)]);return c}case at:{const d=[],c=r([s,d],a);for(const m of a)(e||!Ye(Oe(m)))&&d.push(o(m));return c}}const{message:u}=a;return r([s,{name:l,message:u}],a)};return o},Gt=(e,{json:n,lossy:t}={})=>{const i=[];return Wl(!(n||t),!!n,new Map,i)(e),i},sn=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?Wt(Gt(e,n)):structuredClone(e):(e,n)=>Wt(Gt(e,n));function Gl(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function Xl(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function Yl(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||Gl,i=e.options.footnoteBackLabel||Xl,r=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let l=-1;for(;++l<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[l]);if(!u)continue;const d=e.all(u),c=String(u.identifier).toUpperCase(),m=Re(c.toLowerCase());let p=0;const g=[],v=e.footnoteCounts.get(c);for(;v!==void 0&&++p<=v;){g.length>0&&g.push({type:"text",value:" "});let _=typeof t=="string"?t:t(l,p);typeof _=="string"&&(_={type:"text",value:_}),g.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+m+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof i=="string"?i:i(l,p),className:["data-footnote-backref"]},children:Array.isArray(_)?_:[_]})}const z=d[d.length-1];if(z&&z.type==="element"&&z.tagName==="p"){const _=z.children[z.children.length-1];_&&_.type==="text"?_.value+=" ":z.children.push({type:"text",value:" "}),z.children.push(...g)}else d.push(...g);const b={type:"element",tagName:"li",properties:{id:n+"fn-"+m},children:e.wrap(d,!0)};e.patch(u,b),s.push(b)}if(s.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...sn(a),id:"footnote-label"},children:[{type:"text",value:r}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:`
`}]}}const mn=function(e){if(e==null)return eu;if(typeof e=="function")return hn(e);if(typeof e=="object")return Array.isArray(e)?Jl(e):Kl(e);if(typeof e=="string")return Zl(e);throw new Error("Expected function, string, or object as test")};function Jl(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=mn(e[t]);return hn(i);function i(...r){let o=-1;for(;++o<n.length;)if(n[o].apply(this,r))return!0;return!1}}function Kl(e){const n=e;return hn(t);function t(i){const r=i;let o;for(o in e)if(r[o]!==n[o])return!1;return!0}}function Zl(e){return hn(n);function n(t){return t&&t.type===e}}function hn(e){return n;function n(t,i,r){return!!(nu(t)&&e.call(this,t,typeof i=="number"?i:void 0,r||void 0))}}function eu(){return!0}function nu(e){return e!==null&&typeof e=="object"&&"type"in e}const tr=[],tu=!0,Mn=!1,iu="skip";function ir(e,n,t,i){let r;typeof n=="function"&&typeof t!="function"?(i=t,t=n):r=n;const o=mn(r),a=i?-1:1;s(e,void 0,[])();function s(l,u,d){const c=l&&typeof l=="object"?l:{};if(typeof c.type=="string"){const p=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(m,"name",{value:"node ("+(l.type+(p?"<"+p+">":""))+")"})}return m;function m(){let p=tr,g,v,z;if((!n||o(l,u,d[d.length-1]||void 0))&&(p=ru(t(l,d)),p[0]===Mn))return p;if("children"in l&&l.children){const b=l;if(b.children&&p[0]!==iu)for(v=(i?b.children.length:-1)+a,z=d.concat(b);v>-1&&v<b.children.length;){const _=b.children[v];if(g=s(_,v,z)(),g[0]===Mn)return g;v=typeof g[1]=="number"?g[1]:v+a}}return p}}}function ru(e){return Array.isArray(e)?e:typeof e=="number"?[tu,e]:e==null?tr:[e]}function ot(e,n,t,i){let r,o,a;typeof n=="function"&&typeof t!="function"?(o=void 0,a=n,r=t):(o=n,a=t,r=i),ir(e,o,s,r);function s(l,u){const d=u[u.length-1],c=d?d.children.indexOf(l):void 0;return a(l,c,d)}}const On={}.hasOwnProperty,au={};function ou(e,n){const t=n||au,i=new Map,r=new Map,o=new Map,a={...Bl,...t.handlers},s={all:u,applyData:lu,definitionById:i,footnoteById:r,footnoteCounts:o,footnoteOrder:[],handlers:a,one:l,options:t,patch:su,wrap:cu};return ot(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const c=d.type==="definition"?i:r,m=String(d.identifier).toUpperCase();c.has(m)||c.set(m,d)}}),s;function l(d,c){const m=d.type,p=s.handlers[m];if(On.call(s.handlers,m)&&p)return p(s,d,c);if(s.options.passThrough&&s.options.passThrough.includes(m)){if("children"in d){const{children:v,...z}=d,b=sn(z);return b.children=s.all(d),b}return sn(d)}return(s.options.unknownHandler||uu)(s,d,c)}function u(d){const c=[];if("children"in d){const m=d.children;let p=-1;for(;++p<m.length;){const g=s.one(m[p],d);if(g){if(p&&m[p-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=Xt(g.value)),!Array.isArray(g)&&g.type==="element")){const v=g.children[0];v&&v.type==="text"&&(v.value=Xt(v.value))}Array.isArray(g)?c.push(...g):c.push(g)}}}return c}}function su(e,n){e.position&&(n.position=Ga(e))}function lu(e,n){let t=n;if(e&&e.data){const i=e.data.hName,r=e.data.hChildren,o=e.data.hProperties;if(typeof i=="string")if(t.type==="element")t.tagName=i;else{const a="children"in t?t.children:[t];t={type:"element",tagName:i,properties:{},children:a}}t.type==="element"&&o&&Object.assign(t.properties,sn(o)),"children"in t&&t.children&&r!==null&&r!==void 0&&(t.children=r)}return t}function uu(e,n){const t=n.data||{},i="value"in n&&!(On.call(t,"hProperties")||On.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function cu(e,n){const t=[];let i=-1;for(n&&t.push({type:"text",value:`
`});++i<e.length;)i&&t.push({type:"text",value:`
`}),t.push(e[i]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function Xt(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function Yt(e,n){const t=ou(e,n),i=t.one(e,void 0),r=Yl(t),o=Array.isArray(i)?{type:"root",children:i}:i||{type:"root",children:[]};return r&&o.children.push({type:"text",value:`
`},r),o}function du(e,n){return e&&"run"in e?async function(t,i){const r=Yt(t,{file:i,...n});await e.run(r,i)}:function(t,i){return Yt(t,{file:i,...e||n})}}function Jt(e){if(e)throw e}var en=Object.prototype.hasOwnProperty,rr=Object.prototype.toString,Kt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,ei=function(n){return typeof Array.isArray=="function"?Array.isArray(n):rr.call(n)==="[object Array]"},ni=function(n){if(!n||rr.call(n)!=="[object Object]")return!1;var t=en.call(n,"constructor"),i=n.constructor&&n.constructor.prototype&&en.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!t&&!i)return!1;var r;for(r in n);return typeof r>"u"||en.call(n,r)},ti=function(n,t){Kt&&t.name==="__proto__"?Kt(n,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):n[t.name]=t.newValue},ii=function(n,t){if(t==="__proto__")if(en.call(n,t)){if(Zt)return Zt(n,t).value}else return;return n[t]},pu=function e(){var n,t,i,r,o,a,s=arguments[0],l=1,u=arguments.length,d=!1;for(typeof s=="boolean"&&(d=s,s=arguments[1]||{},l=2),(s==null||typeof s!="object"&&typeof s!="function")&&(s={});l<u;++l)if(n=arguments[l],n!=null)for(t in n)i=ii(s,t),r=ii(n,t),s!==r&&(d&&r&&(ni(r)||(o=ei(r)))?(o?(o=!1,a=i&&ei(i)?i:[]):a=i&&ni(i)?i:{},ti(s,{name:t,newValue:e(d,a,r)})):typeof r<"u"&&ti(s,{name:t,newValue:r}));return s};const vn=bi(pu);function Bn(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function mu(){const e=[],n={run:t,use:i};return n;function t(...r){let o=-1;const a=r.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);s(null,...r);function s(l,...u){const d=e[++o];let c=-1;if(l){a(l);return}for(;++c<r.length;)(u[c]===null||u[c]===void 0)&&(u[c]=r[c]);r=u,d?hu(d,s)(...u):a(null,...u)}}function i(r){if(typeof r!="function")throw new TypeError("Expected `middelware` to be a function, not "+r);return e.push(r),n}}function hu(e,n){let t;return i;function i(...a){const s=e.length>a.length;let l;s&&a.push(r);try{l=e.apply(this,a)}catch(u){const d=u;if(s&&t)throw d;return r(d)}s||(l&&l.then&&typeof l.then=="function"?l.then(o,r):l instanceof Error?r(l):o(l))}function r(a,...s){t||(t=!0,n(a,...s))}function o(a){r(null,a)}}const pe={basename:fu,dirname:gu,extname:bu,join:yu,sep:"/"};function fu(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');We(e);let t=0,i=-1,r=e.length,o;if(n===void 0||n.length===0||n.length>e.length){for(;r--;)if(e.codePointAt(r)===47){if(o){t=r+1;break}}else i<0&&(o=!0,i=r+1);return i<0?"":e.slice(t,i)}if(n===e)return"";let a=-1,s=n.length-1;for(;r--;)if(e.codePointAt(r)===47){if(o){t=r+1;break}}else a<0&&(o=!0,a=r+1),s>-1&&(e.codePointAt(r)===n.codePointAt(s--)?s<0&&(i=r):(s=-1,i=a));return t===i?i=a:i<0&&(i=e.length),e.slice(t,i)}function gu(e){if(We(e),e.length===0)return".";let n=-1,t=e.length,i;for(;--t;)if(e.codePointAt(t)===47){if(i){n=t;break}}else i||(i=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function bu(e){We(e);let n=e.length,t=-1,i=0,r=-1,o=0,a;for(;n--;){const s=e.codePointAt(n);if(s===47){if(a){i=n+1;break}continue}t<0&&(a=!0,t=n+1),s===46?r<0?r=n:o!==1&&(o=1):r>-1&&(o=-1)}return r<0||t<0||o===0||o===1&&r===t-1&&r===i+1?"":e.slice(r,t)}function yu(...e){let n=-1,t;for(;++n<e.length;)We(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":vu(t)}function vu(e){We(e);const n=e.codePointAt(0)===47;let t=xu(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function xu(e,n){let t="",i=0,r=-1,o=0,a=-1,s,l;for(;++a<=e.length;){if(a<e.length)s=e.codePointAt(a);else{if(s===47)break;s=47}if(s===47){if(!(r===a-1||o===1))if(r!==a-1&&o===2){if(t.length<2||i!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(l=t.lastIndexOf("/"),l!==t.length-1){l<0?(t="",i=0):(t=t.slice(0,l),i=t.length-1-t.lastIndexOf("/")),r=a,o=0;continue}}else if(t.length>0){t="",i=0,r=a,o=0;continue}}n&&(t=t.length>0?t+"/..":"..",i=2)}else t.length>0?t+="/"+e.slice(r+1,a):t=e.slice(r+1,a),i=a-r-1;r=a,o=0}else s===46&&o>-1?o++:o=-1}return t}function We(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const wu={cwd:ku};function ku(){return"/"}function Vn(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function zu(e){if(typeof e=="string")e=new URL(e);else if(!Vn(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return Iu(e)}function Iu(e){if(e.hostname!==""){const i=new TypeError('File URL host must be "localhost" or empty on darwin');throw i.code="ERR_INVALID_FILE_URL_HOST",i}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const i=n.codePointAt(t+2);if(i===70||i===102){const r=new TypeError("File URL path must not include encoded / characters");throw r.code="ERR_INVALID_FILE_URL_PATH",r}}return decodeURIComponent(n)}const xn=["history","path","basename","stem","extname","dirname"];class ar{constructor(n){let t;n?Vn(n)?t={path:n}:typeof n=="string"||Su(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":wu.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let i=-1;for(;++i<xn.length;){const o=xn[i];o in t&&t[o]!==void 0&&t[o]!==null&&(this[o]=o==="history"?[...t[o]]:t[o])}let r;for(r in t)xn.includes(r)||(this[r]=t[r])}get basename(){return typeof this.path=="string"?pe.basename(this.path):void 0}set basename(n){kn(n,"basename"),wn(n,"basename"),this.path=pe.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?pe.dirname(this.path):void 0}set dirname(n){ri(this.basename,"dirname"),this.path=pe.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?pe.extname(this.path):void 0}set extname(n){if(wn(n,"extname"),ri(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=pe.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){Vn(n)&&(n=zu(n)),kn(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?pe.basename(this.path,this.extname):void 0}set stem(n){kn(n,"stem"),wn(n,"stem"),this.path=pe.join(this.dirname||"",n+(this.extname||""))}fail(n,t,i){const r=this.message(n,t,i);throw r.fatal=!0,r}info(n,t,i){const r=this.message(n,t,i);return r.fatal=void 0,r}message(n,t,i){const r=new K(n,t,i);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function wn(e,n){if(e&&e.includes(pe.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+pe.sep+"`")}function kn(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function ri(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function Su(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const _u=function(e){const i=this.constructor.prototype,r=i[e],o=function(){return r.apply(o,arguments)};return Object.setPrototypeOf(o,i),o},Cu={}.hasOwnProperty;class st extends _u{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=mu()}copy(){const n=new st;let t=-1;for(;++t<this.attachers.length;){const i=this.attachers[t];n.use(...i)}return n.data(vn(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(Sn("data",this.frozen),this.namespace[n]=t,this):Cu.call(this.namespace,n)&&this.namespace[n]||void 0:n?(Sn("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...i]=this.attachers[this.freezeIndex];if(i[0]===!1)continue;i[0]===!0&&(i[0]=void 0);const r=t.call(n,...i);typeof r=="function"&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=Je(n),i=this.parser||this.Parser;return zn("parse",i),i(String(t),t)}process(n,t){const i=this;return this.freeze(),zn("process",this.parser||this.Parser),In("process",this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(o,a){const s=Je(n),l=i.parse(s);i.run(l,s,function(d,c,m){if(d||!c||!m)return u(d);const p=c,g=i.stringify(p,m);Lu(g)?m.value=g:m.result=g,u(d,m)});function u(d,c){d||!c?a(d):o?o(c):t(void 0,c)}}}processSync(n){let t=!1,i;return this.freeze(),zn("processSync",this.parser||this.Parser),In("processSync",this.compiler||this.Compiler),this.process(n,r),oi("processSync","process",t),i;function r(o,a){t=!0,Jt(o),i=a}}run(n,t,i){ai(n),this.freeze();const r=this.transformers;return!i&&typeof t=="function"&&(i=t,t=void 0),i?o(void 0,i):new Promise(o);function o(a,s){const l=Je(t);r.run(n,l,u);function u(d,c,m){const p=c||n;d?s(d):a?a(p):i(void 0,p,m)}}}runSync(n,t){let i=!1,r;return this.run(n,t,o),oi("runSync","run",i),r;function o(a,s){Jt(a),r=s,i=!0}}stringify(n,t){this.freeze();const i=Je(t),r=this.compiler||this.Compiler;return In("stringify",r),ai(n),r(n,i)}use(n,...t){const i=this.attachers,r=this.namespace;if(Sn("use",this.frozen),n!=null)if(typeof n=="function")l(n,t);else if(typeof n=="object")Array.isArray(n)?s(n):a(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function o(u){if(typeof u=="function")l(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...c]=u;l(d,c)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");s(u.plugins),u.settings&&(r.settings=vn(!0,r.settings,u.settings))}function s(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const c=u[d];o(c)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function l(u,d){let c=-1,m=-1;for(;++c<i.length;)if(i[c][0]===u){m=c;break}if(m===-1)i.push([u,...d]);else if(d.length>0){let[p,...g]=d;const v=i[m][1];Bn(v)&&Bn(p)&&(p=vn(!0,v,p)),i[m]=[u,p,...g]}}}}const Eu=new st().freeze();function zn(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function In(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Sn(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function ai(e){if(!Bn(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function oi(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function Je(e){return Tu(e)?e:new ar(e)}function Tu(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Lu(e){return typeof e=="string"||Au(e)}function Au(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Pu="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",si=[],li={allowDangerousHtml:!0},Du=/^(https?|ircs?|mailto|xmpp)$/i,Nu=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Ru(e){const n=Fu(e),t=qu(e);return ju(n.runSync(n.parse(t),t),e)}function Fu(e){const n=e.rehypePlugins||si,t=e.remarkPlugins||si,i=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...li}:li;return Eu().use(fl).use(t).use(du,i).use(n)}function qu(e){const n=e.children||"",t=new ar;return typeof n=="string"&&(t.value=n),t}function ju(e,n){const t=n.allowedElements,i=n.allowElement,r=n.components,o=n.disallowedElements,a=n.skipHtml,s=n.unwrapDisallowed,l=n.urlTransform||Mu;for(const d of Nu)Object.hasOwn(n,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+Pu+d.id,void 0);return ot(e,u),Za(e,{Fragment:C.Fragment,components:r,ignoreInvalidStyle:!0,jsx:C.jsx,jsxs:C.jsxs,passKeys:!0,passNode:!0});function u(d,c,m){if(d.type==="raw"&&m&&typeof c=="number")return a?m.children.splice(c,1):m.children[c]={type:"text",value:d.value},c;if(d.type==="element"){let p;for(p in gn)if(Object.hasOwn(gn,p)&&Object.hasOwn(d.properties,p)){const g=d.properties[p],v=gn[p];(v===null||v.includes(d.tagName))&&(d.properties[p]=l(String(g||""),p,d))}}if(d.type==="element"){let p=t?!t.includes(d.tagName):o?o.includes(d.tagName):!1;if(!p&&i&&typeof c=="number"&&(p=!i(d,c,m)),p&&m&&typeof c=="number")return s&&d.children?m.children.splice(c,1,...d.children):m.children.splice(c,1),c}}}function Mu(e){const n=e.indexOf(":"),t=e.indexOf("?"),i=e.indexOf("#"),r=e.indexOf("/");return n===-1||r!==-1&&n>r||t!==-1&&n>t||i!==-1&&n>i||Du.test(e.slice(0,n))?e:""}function ui(e,n){const t=String(e);if(typeof n!="string")throw new TypeError("Expected character");let i=0,r=t.indexOf(n);for(;r!==-1;)i++,r=t.indexOf(n,r+n.length);return i}function Ou(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function Bu(e,n,t){const r=mn((t||{}).ignore||[]),o=Vu(n);let a=-1;for(;++a<o.length;)ir(e,"text",s);function s(u,d){let c=-1,m;for(;++c<d.length;){const p=d[c],g=m?m.children:void 0;if(r(p,g?g.indexOf(p):void 0,m))return;m=p}if(m)return l(u,d)}function l(u,d){const c=d[d.length-1],m=o[a][0],p=o[a][1];let g=0;const z=c.children.indexOf(u);let b=!1,_=[];m.lastIndex=0;let I=m.exec(u.value);for(;I;){const D=I.index,R={index:I.index,input:I.input,stack:[...d,u]};let w=p(...I,R);if(typeof w=="string"&&(w=w.length>0?{type:"text",value:w}:void 0),w===!1?m.lastIndex=D+1:(g!==D&&_.push({type:"text",value:u.value.slice(g,D)}),Array.isArray(w)?_.push(...w):w&&_.push(w),g=D+I[0].length,b=!0),!m.global)break;I=m.exec(u.value)}return b?(g<u.value.length&&_.push({type:"text",value:u.value.slice(g)}),c.children.splice(z,1,..._)):_=[u],z+_.length}}function Vu(e){const n=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const t=!e[0]||Array.isArray(e[0])?e:[e];let i=-1;for(;++i<t.length;){const r=t[i];n.push([Uu(r[0]),Hu(r[1])])}return n}function Uu(e){return typeof e=="string"?new RegExp(Ou(e),"g"):e}function Hu(e){return typeof e=="function"?e:function(){return e}}const _n="phrasing",Cn=["autolink","link","image","label"];function $u(){return{transforms:[Ku],enter:{literalAutolink:Wu,literalAutolinkEmail:En,literalAutolinkHttp:En,literalAutolinkWww:En},exit:{literalAutolink:Ju,literalAutolinkEmail:Yu,literalAutolinkHttp:Gu,literalAutolinkWww:Xu}}}function Qu(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:_n,notInConstruct:Cn},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:_n,notInConstruct:Cn},{character:":",before:"[ps]",after:"\\/",inConstruct:_n,notInConstruct:Cn}]}}function Wu(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function En(e){this.config.enter.autolinkProtocol.call(this,e)}function Gu(e){this.config.exit.autolinkProtocol.call(this,e)}function Xu(e){this.config.exit.data.call(this,e);const n=this.stack[this.stack.length-1];n.type,n.url="http://"+this.sliceSerialize(e)}function Yu(e){this.config.exit.autolinkEmail.call(this,e)}function Ju(e){this.exit(e)}function Ku(e){Bu(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Zu],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),ec]],{ignore:["link","linkReference"]})}function Zu(e,n,t,i,r){let o="";if(!or(r)||(/^w/i.test(n)&&(t=n+t,n="",o="http://"),!nc(t)))return!1;const a=tc(t+i);if(!a[0])return!1;const s={type:"link",title:null,url:o+n+a[0],children:[{type:"text",value:n+a[0]}]};return a[1]?[s,{type:"text",value:a[1]}]:s}function ec(e,n,t,i){return!or(i,!0)||/[-\d_]$/.test(t)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+t,children:[{type:"text",value:n+"@"+t}]}}function nc(e){const n=e.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function tc(e){const n=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!n)return[e,void 0];e=e.slice(0,n.index);let t=n[0],i=t.indexOf(")");const r=ui(e,"(");let o=ui(e,")");for(;i!==-1&&r>o;)e+=t.slice(0,i+1),t=t.slice(i+1),i=t.indexOf(")"),o++;return[e,t]}function or(e,n){const t=e.input.charCodeAt(e.index-1);return(e.index===0||Ee(t)||cn(t))&&(!n||t!==47)}sr.peek=dc;function ic(){this.buffer()}function rc(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function ac(){this.buffer()}function oc(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function sc(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=de(this.sliceSerialize(e)).toLowerCase(),t.label=n}function lc(e){this.exit(e)}function uc(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=de(this.sliceSerialize(e)).toLowerCase(),t.label=n}function cc(e){this.exit(e)}function dc(){return"["}function sr(e,n,t,i){const r=t.createTracker(i);let o=r.move("[^");const a=t.enter("footnoteReference"),s=t.enter("reference");return o+=r.move(t.safe(t.associationId(e),{after:"]",before:o})),s(),a(),o+=r.move("]"),o}function pc(){return{enter:{gfmFootnoteCallString:ic,gfmFootnoteCall:rc,gfmFootnoteDefinitionLabelString:ac,gfmFootnoteDefinition:oc},exit:{gfmFootnoteCallString:sc,gfmFootnoteCall:lc,gfmFootnoteDefinitionLabelString:uc,gfmFootnoteDefinition:cc}}}function mc(e){let n=!1;return e&&e.firstLineBlank&&(n=!0),{handlers:{footnoteDefinition:t,footnoteReference:sr},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function t(i,r,o,a){const s=o.createTracker(a);let l=s.move("[^");const u=o.enter("footnoteDefinition"),d=o.enter("label");return l+=s.move(o.safe(o.associationId(i),{before:l,after:"]"})),d(),l+=s.move("]:"),i.children&&i.children.length>0&&(s.shift(4),l+=s.move((n?`
`:" ")+o.indentLines(o.containerFlow(i,s.current()),n?lr:hc))),u(),l}}function hc(e,n,t){return n===0?e:lr(e,n,t)}function lr(e,n,t){return(t?"":"    ")+e}const fc=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];lt.attention=xc;lt.peek=wc;function gc(){return{canContainEols:["delete"],enter:{strikethrough:yc},exit:{strikethrough:vc}}}function bc(){return{handlers:{delete:lt},unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:fc}]}}function yc(e){this.enter({type:"delete",children:[],position:void 0},e)}function vc(e){this.exit(e)}function lt(e,n,t,i){const r=t.createTracker(i),o=t.stack.includes("strikethrough")?"~":"~~",a=t.enter("strikethrough");let s=r.move(o);return s+=t.containerPhrasing(e,{...r.current(),before:s,after:"~"}),s+=r.move(o),a(),s}function xc(){return{construct:"strikethrough",markers:["~"],sizes:[2,1]}}function wc(){return"~"}function kc(e){return e.length}function zc(e,n){const t=n||{},i=(t.align||[]).concat(),r=t.stringLength||kc,o=[],a=[],s=[],l=[];let u=0,d=-1;for(;++d<e.length;){const v=[],z=[];let b=-1;for(e[d].length>u&&(u=e[d].length);++b<e[d].length;){const _=Ic(e[d][b]);if(t.alignDelimiters!==!1){const I=r(_);z[b]=I,(l[b]===void 0||I>l[b])&&(l[b]=I)}v.push(_)}a[d]=v,s[d]=z}let c=-1;if(typeof i=="object"&&"length"in i)for(;++c<u;)o[c]=ci(i[c]);else{const v=ci(i);for(;++c<u;)o[c]=v}c=-1;const m=[],p=[];for(;++c<u;){const v=o[c];let z="",b="";v===99?(z=":",b=":"):v===108?z=":":v===114&&(b=":");let _=t.alignDelimiters===!1?1:Math.max(1,l[c]-z.length-b.length);const I=z+"-".repeat(_)+b;t.alignDelimiters!==!1&&(_=z.length+_+b.length,_>l[c]&&(l[c]=_),p[c]=_),m[c]=I}a.splice(1,0,m),s.splice(1,0,p),d=-1;const g=[];for(;++d<a.length;){const v=a[d],z=s[d];c=-1;const b=[];for(;++c<u;){const _=v[c]||"";let I="",D="";if(t.alignDelimiters!==!1){const R=l[c]-(z[c]||0),w=o[c];w===114?I=" ".repeat(R):w===99?R%2?(I=" ".repeat(R/2+.5),D=" ".repeat(R/2-.5)):(I=" ".repeat(R/2),D=I):D=" ".repeat(R)}t.delimiterStart!==!1&&!c&&b.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&_==="")&&(t.delimiterStart!==!1||c)&&b.push(" "),t.alignDelimiters!==!1&&b.push(I),b.push(_),t.alignDelimiters!==!1&&b.push(D),t.padding!==!1&&b.push(" "),(t.delimiterEnd!==!1||c!==u-1)&&b.push("|")}g.push(t.delimiterEnd===!1?b.join("").replace(/ +$/,""):b.join(""))}return g.join(`
`)}function Ic(e){return e==null?"":String(e)}function ci(e){const n=typeof e=="string"?e.codePointAt(0):0;return n===67||n===99?99:n===76||n===108?108:n===82||n===114?114:0}const Sc=mn(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function _c(e,n,t,i){const r=t.enter("blockquote"),o=t.createTracker(i);o.move("> "),o.shift(2);const a=t.indentLines(t.containerFlow(e,o.current()),Cc);return r(),a}function Cc(e,n,t){return">"+(t?"":" ")+e}function Ec(e,n){return di(e,n.inConstruct,!0)&&!di(e,n.notInConstruct,!1)}function di(e,n,t){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return t;let i=-1;for(;++i<n.length;)if(e.includes(n[i]))return!0;return!1}function pi(e,n,t,i){let r=-1;for(;++r<t.unsafe.length;){const o=t.unsafe[r];if(o.character===`
`&&!o.before&&!o.after&&Ec(t.stack,o))return/[\t ]/.test(i.before)?"":" "}return`\\
`}function Tc(e,n){const t=String(e);let i=t.indexOf(n),r=i,o=0,a=0;if(typeof n!="string")throw new TypeError("Expected substring");for(;i!==-1;)i===r?++o>a&&(a=o):o=1,r=i+n.length,i=t.indexOf(n,r);return a}function Lc(e,n){return!!(n.options.fences===!1&&e.value&&!e.lang&&/[^\n\r ]/.test(e.value)&&!/^[\t ]*(?:[\n\r]|$)|(?:^|[\n\r])[\t ]*$/.test(e.value))}function Ac(e){const n=e.options.fence||"`";if(n!=="`"&&n!=="~")throw new Error("Cannot serialize code with `"+n+"` for `options.fence`, expected `` ` `` or `~`");return n}function Pc(e,n,t,i){const r=Ac(t),o=e.value||"";if(Lc(e,t)){const c=t.enter("codeIndented"),m=t.indentLines(o,Dc);return c(),m}const a=t.createTracker(i),s=r.repeat(Math.max(Tc(o,r)+1,3)),l=t.enter("codeFenced"),u=r==="`"?"GraveAccent":"Tilde";let d=a.move(s);if(e.lang){const c=t.enter(`codeFencedLang${u}`);d+=a.move(t.safe(e.lang,{before:d,after:" ",encode:["`"],...a.current()})),c()}if(e.lang&&e.meta){const c=t.enter(`codeFencedMeta${u}`);d+=a.move(" "),d+=a.move(t.safe(e.meta,{before:d,after:`
`,encode:["`"],...a.current()})),c()}return d+=a.move(`
`),o&&(d+=a.move(o+`
`)),d+=a.move(s),l(),d}function Dc(e,n,t){return(t?"":"    ")+e}function ut(e){const n=e.options.quote||'"';if(n!=='"'&&n!=="'")throw new Error("Cannot serialize title with `"+n+"` for `options.quote`, expected `\"`, or `'`");return n}function Nc(e,n,t,i){const r=ut(t),o=r==='"'?"Quote":"Apostrophe",a=t.enter("definition");let s=t.enter("label");const l=t.createTracker(i);let u=l.move("[");return u+=l.move(t.safe(t.associationId(e),{before:u,after:"]",...l.current()})),u+=l.move("]: "),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=t.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(t.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(s=t.enter("destinationRaw"),u+=l.move(t.safe(e.url,{before:u,after:e.title?" ":`
`,...l.current()}))),s(),e.title&&(s=t.enter(`title${o}`),u+=l.move(" "+r),u+=l.move(t.safe(e.title,{before:u,after:r,...l.current()})),u+=l.move(r),s()),a(),u}function Rc(e){const n=e.options.emphasis||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize emphasis with `"+n+"` for `options.emphasis`, expected `*`, or `_`");return n}ct.attention=Fc;ct.peek=qc;function ct(e,n,t,i){const r=t.enter("phrasing"),o=t.containerPhrasing({type:"root",children:[e]},i);return r(),o}function Fc(e,n){return{construct:"emphasis",markers:Rc(n)==="*"?["*","_"]:["_","*"],sizes:[1]}}function qc(e,n,t){return t.options.emphasis||"*"}function jc(e){return"&#x"+e.toString(16).toUpperCase()+";"}function Mc(e,n){let t=!1;return ot(e,function(i){if("value"in i&&/\r?\n|\r/.test(i.value)||i.type==="break")return t=!0,Mn}),!!((!e.depth||e.depth<3)&&Zn(e)&&(n.options.setext||t))}function Oc(e,n,t,i){const r=Math.max(Math.min(6,e.depth||1),1),o=t.createTracker(i);if(Mc(e,t)){const c=t.enter("headingSetext"),m=t.enter("phrasing"),p=t.containerPhrasing(e,{...o.current(),before:`
`,after:`
`});return m(),c(),p+`
`+(r===1?"=":"-").repeat(p.length-(Math.max(p.lastIndexOf("\r"),p.lastIndexOf(`
`))+1))}const a="#".repeat(r),s=t.enter("headingAtx"),l=t.enter("phrasing");o.move(a+" ");let u=t.containerPhrasing(e,{before:"# ",after:`
`,...o.current()});const d=u.charCodeAt(0);return(d===9||d===32)&&(u=jc(d)+u.slice(1)),u=u?a+" "+u:a,t.options.closeAtx&&(u+=" "+a),l(),s(),u}ur.peek=Bc;function ur(e){return e.value||""}function Bc(){return"<"}cr.peek=Vc;function cr(e,n,t,i){const r=ut(t),o=r==='"'?"Quote":"Apostrophe",a=t.enter("image");let s=t.enter("label");const l=t.createTracker(i);let u=l.move("![");return u+=l.move(t.safe(e.alt,{before:u,after:"]",...l.current()})),u+=l.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=t.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(t.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(s=t.enter("destinationRaw"),u+=l.move(t.safe(e.url,{before:u,after:e.title?" ":")",...l.current()}))),s(),e.title&&(s=t.enter(`title${o}`),u+=l.move(" "+r),u+=l.move(t.safe(e.title,{before:u,after:r,...l.current()})),u+=l.move(r),s()),u+=l.move(")"),a(),u}function Vc(){return"!"}dr.peek=Uc;function dr(e,n,t,i){const r=e.referenceType,o=t.enter("imageReference");let a=t.enter("label");const s=t.createTracker(i);let l=s.move("![");const u=t.safe(e.alt,{before:l,after:"]",...s.current()});l+=s.move(u+"]["),a();const d=t.stack;t.stack=d.filter(function(m){return m!=="phrasing"}),a=t.enter("reference");const c=t.safe(t.associationId(e),{before:l,after:"]",...s.current()});return a(),t.stack=d,o(),r==="full"||!u||u!==c?l+=s.move(c+"]"):r==="shortcut"?l=l.slice(0,-1):l+=s.move("]"),l}function Uc(){return"!"}pr.peek=Hc;function pr(e,n,t){let i=e.value||"",r="`",o=-1;for(;new RegExp("(^|[^`])"+r+"([^`]|$)").test(i);)r+="`";for(/[^\n\r ]/.test(i)&&(/^[\n\r ]/.test(i)&&/[\n\r ]$/.test(i)||/^`|`$/.test(i))&&(i=" "+i+" ");++o<t.unsafe.length;){const a=t.unsafe[o],s=t.compilePattern(a);if(!a.atBreak)continue;let l;for(;l=s.exec(i);){let u=l.index;i.charCodeAt(u)===10&&i.charCodeAt(u-1)===13&&u--,i=i.slice(0,u)+" "+i.slice(l.index+1)}}return r+i+r}function Hc(){return"`"}function mr(e,n){const t=Zn(e);return!!(!n.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(t===e.url||"mailto:"+t===e.url)&&/^[a-z][+\-.a-z]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}hr.peek=$c;function hr(e,n,t,i){const r=ut(t),o=r==='"'?"Quote":"Apostrophe",a=t.createTracker(i);if(mr(e,t)){const d=t.stack;t.stack=d.filter(function(p){return p!=="phrasing"});const c=t.enter("autolink");let m=a.move("<");return m+=a.move(t.containerPhrasing(e,{before:m,after:">",...a.current()})),m+=a.move(">"),c(),t.stack=d,m}const s=t.enter("link");let l=t.enter("label"),u=a.move("[");return u+=a.move(t.containerPhrasing(e,{before:u,after:"](",...a.current()})),u+=a.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=t.enter("destinationLiteral"),u+=a.move("<"),u+=a.move(t.safe(e.url,{before:u,after:">",...a.current()})),u+=a.move(">")):(l=t.enter("destinationRaw"),u+=a.move(t.safe(e.url,{before:u,after:e.title?" ":")",...a.current()}))),l(),e.title&&(l=t.enter(`title${o}`),u+=a.move(" "+r),u+=a.move(t.safe(e.title,{before:u,after:r,...a.current()})),u+=a.move(r),l()),u+=a.move(")"),s(),u}function $c(e,n,t){return mr(e,t)?"<":"["}fr.peek=Qc;function fr(e,n,t,i){const r=e.referenceType,o=t.enter("linkReference");let a=t.enter("label");const s=t.createTracker(i);let l=s.move("[");const u=t.containerPhrasing(e,{before:l,after:"]",...s.current()});l+=s.move(u+"]["),a();const d=t.stack;t.stack=d.filter(function(m){return m!=="phrasing"}),a=t.enter("reference");const c=t.safe(t.associationId(e),{before:l,after:"]",...s.current()});return a(),t.stack=d,o(),r==="full"||!u||u!==c?l+=s.move(c+"]"):r==="shortcut"?l=l.slice(0,-1):l+=s.move("]"),l}function Qc(){return"["}function dt(e){const n=e.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function Wc(e){const n=dt(e),t=e.options.bulletOther;if(!t)return n==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===n)throw new Error("Expected `bullet` (`"+n+"`) and `bulletOther` (`"+t+"`) to be different");return t}function Gc(e){const n=e.options.bulletOrdered||".";if(n!=="."&&n!==")")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}function gr(e){const n=e.options.rule||"*";if(n!=="*"&&n!=="-"&&n!=="_")throw new Error("Cannot serialize rules with `"+n+"` for `options.rule`, expected `*`, `-`, or `_`");return n}function Xc(e,n,t,i){const r=t.enter("list"),o=t.bulletCurrent;let a=e.ordered?Gc(t):dt(t);const s=e.ordered?a==="."?")":".":Wc(t);let l=n&&t.bulletLastUsed?a===t.bulletLastUsed:!1;if(!e.ordered){const d=e.children?e.children[0]:void 0;if((a==="*"||a==="-")&&d&&(!d.children||!d.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(l=!0),gr(t)===a&&d){let c=-1;for(;++c<e.children.length;){const m=e.children[c];if(m&&m.type==="listItem"&&m.children&&m.children[0]&&m.children[0].type==="thematicBreak"){l=!0;break}}}}l&&(a=s),t.bulletCurrent=a;const u=t.containerFlow(e,i);return t.bulletLastUsed=a,t.bulletCurrent=o,r(),u}function Yc(e){const n=e.options.listItemIndent||"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw new Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function Jc(e,n,t,i){const r=Yc(t);let o=t.bulletCurrent||dt(t);n&&n.type==="list"&&n.ordered&&(o=(typeof n.start=="number"&&n.start>-1?n.start:1)+(t.options.incrementListMarker===!1?0:n.children.indexOf(e))+o);let a=o.length+1;(r==="tab"||r==="mixed"&&(n&&n.type==="list"&&n.spread||e.spread))&&(a=Math.ceil(a/4)*4);const s=t.createTracker(i);s.move(o+" ".repeat(a-o.length)),s.shift(a);const l=t.enter("listItem"),u=t.indentLines(t.containerFlow(e,s.current()),d);return l(),u;function d(c,m,p){return m?(p?"":" ".repeat(a))+c:(p?o:o+" ".repeat(a-o.length))+c}}function Kc(e,n,t,i){const r=t.enter("paragraph"),o=t.enter("phrasing"),a=t.containerPhrasing(e,i);return o(),r(),a}function Zc(e,n,t,i){if(!e.children.some(function(s){return Sc(s)}))return t.containerFlow(e,i);const o=t.enter("phrasing"),a=t.containerPhrasing(e,i);return o(),a}function ed(e){const n=e.options.strong||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize strong with `"+n+"` for `options.strong`, expected `*`, or `_`");return n}pt.attention=nd;pt.peek=td;function pt(e,n,t,i){const r=t.enter("phrasing"),o=t.containerPhrasing({type:"root",children:[e]},i);return r(),o}function nd(e,n){return{construct:"strong",markers:ed(n)==="*"?["*","_"]:["_","*"],sizes:[2]}}function td(e,n,t){return t.options.strong||"*"}function id(e,n,t,i){return t.safe(e.value,i)}function rd(e){const n=e.options.ruleRepetition||3;if(n<3)throw new Error("Cannot serialize rules with repetition `"+n+"` for `options.ruleRepetition`, expected `3` or more");return n}function ad(e,n,t){const i=(gr(t)+(t.options.ruleSpaces?" ":"")).repeat(rd(t));return t.options.ruleSpaces?i.slice(0,-1):i}const br={blockquote:_c,break:pi,code:Pc,definition:Nc,emphasis:ct,hardBreak:pi,heading:Oc,html:ur,image:cr,imageReference:dr,inlineCode:pr,link:hr,linkReference:fr,list:Xc,listItem:Jc,paragraph:Kc,root:Zc,strong:pt,text:id,thematicBreak:ad};function od(){return{enter:{table:sd,tableData:mi,tableHeader:mi,tableRow:ud},exit:{codeText:cd,table:ld,tableData:Tn,tableHeader:Tn,tableRow:Tn}}}function sd(e){const n=e._align;this.enter({type:"table",align:n.map(function(t){return t==="none"?null:t}),children:[]},e),this.data.inTable=!0}function ld(e){this.exit(e),this.data.inTable=void 0}function ud(e){this.enter({type:"tableRow",children:[]},e)}function Tn(e){this.exit(e)}function mi(e){this.enter({type:"tableCell",children:[]},e)}function cd(e){let n=this.resume();this.data.inTable&&(n=n.replace(/\\([\\|])/g,dd));const t=this.stack[this.stack.length-1];t.type,t.value=n,this.exit(e)}function dd(e,n){return n==="|"?n:e}function pd(e){const n=e||{},t=n.tableCellPadding,i=n.tablePipeAlign,r=n.stringLength,o=t?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:m,table:a,tableCell:l,tableRow:s}};function a(p,g,v,z){return u(d(p,v,z),p.align)}function s(p,g,v,z){const b=c(p,v,z),_=u([b]);return _.slice(0,_.indexOf(`
`))}function l(p,g,v,z){const b=v.enter("tableCell"),_=v.enter("phrasing"),I=v.containerPhrasing(p,{...z,before:o,after:o});return _(),b(),I}function u(p,g){return zc(p,{align:g,alignDelimiters:i,padding:t,stringLength:r})}function d(p,g,v){const z=p.children;let b=-1;const _=[],I=g.enter("table");for(;++b<z.length;)_[b]=c(z[b],g,v);return I(),_}function c(p,g,v){const z=p.children;let b=-1;const _=[],I=g.enter("tableRow");for(;++b<z.length;)_[b]=l(z[b],p,g,v);return I(),_}function m(p,g,v){let z=br.inlineCode(p,g,v);return v.stack.includes("tableCell")&&(z=z.replace(/\|/g,"\\$&")),z}}function md(){return{exit:{taskListCheckValueChecked:hi,taskListCheckValueUnchecked:hi,paragraph:fd}}}function hd(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:gd}}}function hi(e){const n=this.stack[this.stack.length-2];n.type,n.checked=e.type==="taskListCheckValueChecked"}function fd(e){const n=this.stack[this.stack.length-2];if(n&&n.type==="listItem"&&typeof n.checked=="boolean"){const t=this.stack[this.stack.length-1];t.type;const i=t.children[0];if(i&&i.type==="text"){const r=n.children;let o=-1,a;for(;++o<r.length;){const s=r[o];if(s.type==="paragraph"){a=s;break}}a===t&&(i.value=i.value.slice(1),i.value.length===0?t.children.shift():t.position&&i.position&&typeof i.position.start.offset=="number"&&(i.position.start.column++,i.position.start.offset++,t.position.start=Object.assign({},i.position.start)))}}this.exit(e)}function gd(e,n,t,i){const r=e.children[0],o=typeof e.checked=="boolean"&&r&&r.type==="paragraph",a="["+(e.checked?"x":" ")+"] ",s=t.createTracker(i);o&&s.move(a);let l=br.listItem(e,n,t,{...i,...s.current()});return o&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),l;function u(d){return d+a}}function bd(){return[$u(),pc(),gc(),od(),md()]}function yd(e){return{extensions:[Qu(),mc(e),bc(),pd(e),hd()]}}const vd={tokenize:Sd,partial:!0},yr={tokenize:_d,partial:!0},vr={tokenize:Cd,partial:!0},xr={tokenize:Ed,partial:!0},xd={tokenize:Td,partial:!0},wr={name:"wwwAutolink",tokenize:zd,previous:zr},kr={name:"protocolAutolink",tokenize:Id,previous:Ir},ye={name:"emailAutolink",tokenize:kd,previous:Sr},me={};function wd(){return{text:me}}let Ie=48;for(;Ie<123;)me[Ie]=ye,Ie++,Ie===58?Ie=65:Ie===91&&(Ie=97);me[43]=ye;me[45]=ye;me[46]=ye;me[95]=ye;me[72]=[ye,kr];me[104]=[ye,kr];me[87]=[ye,wr];me[119]=[ye,wr];function kd(e,n,t){const i=this;let r,o;return a;function a(c){return!Un(c)||!Sr.call(i,i.previous)||mt(i.events)?t(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),s(c))}function s(c){return Un(c)?(e.consume(c),s):c===64?(e.consume(c),l):t(c)}function l(c){return c===46?e.check(xd,d,u)(c):c===45||c===95||J(c)?(o=!0,e.consume(c),l):d(c)}function u(c){return e.consume(c),r=!0,l}function d(c){return o&&r&&Z(i.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),n(c)):t(c)}}function zd(e,n,t){const i=this;return r;function r(a){return a!==87&&a!==119||!zr.call(i,i.previous)||mt(i.events)?t(a):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(vd,e.attempt(yr,e.attempt(vr,o),t),t)(a))}function o(a){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),n(a)}}function Id(e,n,t){const i=this;let r="",o=!1;return a;function a(c){return(c===72||c===104)&&Ir.call(i,i.previous)&&!mt(i.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),r+=String.fromCodePoint(c),e.consume(c),s):t(c)}function s(c){if(Z(c)&&r.length<5)return r+=String.fromCodePoint(c),e.consume(c),s;if(c===58){const m=r.toLowerCase();if(m==="http"||m==="https")return e.consume(c),l}return t(c)}function l(c){return c===47?(e.consume(c),o?u:(o=!0,l)):t(c)}function u(c){return c===null||tn(c)||$(c)||Ee(c)||cn(c)?t(c):e.attempt(yr,e.attempt(vr,d),t)(c)}function d(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),n(c)}}function Sd(e,n,t){let i=0;return r;function r(a){return(a===87||a===119)&&i<3?(i++,e.consume(a),r):a===46&&i===3?(e.consume(a),o):t(a)}function o(a){return a===null?t(a):n(a)}}function _d(e,n,t){let i,r,o;return a;function a(u){return u===46||u===95?e.check(xr,l,s)(u):u===null||$(u)||Ee(u)||u!==45&&cn(u)?l(u):(o=!0,e.consume(u),a)}function s(u){return u===95?i=!0:(r=i,i=void 0),e.consume(u),a}function l(u){return r||i||!o?t(u):n(u)}}function Cd(e,n){let t=0,i=0;return r;function r(a){return a===40?(t++,e.consume(a),r):a===41&&i<t?o(a):a===33||a===34||a===38||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===60||a===63||a===93||a===95||a===126?e.check(xr,n,o)(a):a===null||$(a)||Ee(a)?n(a):(e.consume(a),r)}function o(a){return a===41&&i++,e.consume(a),r}}function Ed(e,n,t){return i;function i(s){return s===33||s===34||s===39||s===41||s===42||s===44||s===46||s===58||s===59||s===63||s===95||s===126?(e.consume(s),i):s===38?(e.consume(s),o):s===93?(e.consume(s),r):s===60||s===null||$(s)||Ee(s)?n(s):t(s)}function r(s){return s===null||s===40||s===91||$(s)||Ee(s)?n(s):i(s)}function o(s){return Z(s)?a(s):t(s)}function a(s){return s===59?(e.consume(s),i):Z(s)?(e.consume(s),a):t(s)}}function Td(e,n,t){return i;function i(o){return e.consume(o),r}function r(o){return J(o)?t(o):n(o)}}function zr(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||$(e)}function Ir(e){return!Z(e)}function Sr(e){return!(e===47||Un(e))}function Un(e){return e===43||e===45||e===46||e===95||J(e)}function mt(e){let n=e.length,t=!1;for(;n--;){const i=e[n][1];if((i.type==="labelLink"||i.type==="labelImage")&&!i._balanced){t=!0;break}if(i._gfmAutolinkLiteralWalkedInto){t=!1;break}}return e.length>0&&!t&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),t}const Ld={tokenize:jd,partial:!0};function Ad(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:Rd,continuation:{tokenize:Fd},exit:qd}},text:{91:{name:"gfmFootnoteCall",tokenize:Nd},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Pd,resolveTo:Dd}}}}function Pd(e,n,t){const i=this;let r=i.events.length;const o=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let a;for(;r--;){const l=i.events[r][1];if(l.type==="labelImage"){a=l;break}if(l.type==="gfmFootnoteCall"||l.type==="labelLink"||l.type==="label"||l.type==="image"||l.type==="link")break}return s;function s(l){if(!a||!a._balanced)return t(l);const u=de(i.sliceSerialize({start:a.end,end:i.now()}));return u.codePointAt(0)!==94||!o.includes(u.slice(1))?t(l):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(l),e.exit("gfmFootnoteCallLabelMarker"),n(l))}}function Dd(e,n){let t=e.length;for(;t--;)if(e[t][1].type==="labelImage"&&e[t][0]==="enter"){e[t][1];break}e[t+1][1].type="data",e[t+3][1].type="gfmFootnoteCallLabelMarker";const i={type:"gfmFootnoteCall",start:Object.assign({},e[t+3][1].start),end:Object.assign({},e[e.length-1][1].end)},r={type:"gfmFootnoteCallMarker",start:Object.assign({},e[t+3][1].end),end:Object.assign({},e[t+3][1].end)};r.end.column++,r.end.offset++,r.end._bufferIndex++;const o={type:"gfmFootnoteCallString",start:Object.assign({},r.end),end:Object.assign({},e[e.length-1][1].start)},a={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},s=[e[t+1],e[t+2],["enter",i,n],e[t+3],e[t+4],["enter",r,n],["exit",r,n],["enter",o,n],["enter",a,n],["exit",a,n],["exit",o,n],e[e.length-2],e[e.length-1],["exit",i,n]];return e.splice(t,e.length-t+1,...s),e}function Nd(e,n,t){const i=this,r=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let o=0,a;return s;function s(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),l}function l(c){return c!==94?t(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(c){if(o>999||c===93&&!a||c===null||c===91||$(c))return t(c);if(c===93){e.exit("chunkString");const m=e.exit("gfmFootnoteCallString");return r.includes(de(i.sliceSerialize(m)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),n):t(c)}return $(c)||(a=!0),o++,e.consume(c),c===92?d:u}function d(c){return c===91||c===92||c===93?(e.consume(c),o++,u):u(c)}}function Rd(e,n,t){const i=this,r=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let o,a=0,s;return l;function l(g){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(g){return g===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",d):t(g)}function d(g){if(a>999||g===93&&!s||g===null||g===91||$(g))return t(g);if(g===93){e.exit("chunkString");const v=e.exit("gfmFootnoteDefinitionLabelString");return o=de(i.sliceSerialize(v)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),m}return $(g)||(s=!0),a++,e.consume(g),g===92?c:d}function c(g){return g===91||g===92||g===93?(e.consume(g),a++,d):d(g)}function m(g){return g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),r.includes(o)||r.push(o),M(e,p,"gfmFootnoteDefinitionWhitespace")):t(g)}function p(g){return n(g)}}function Fd(e,n,t){return e.check(Qe,n,e.attempt(Ld,n,t))}function qd(e){e.exit("gfmFootnoteDefinition")}function jd(e,n,t){const i=this;return M(e,r,"gfmFootnoteDefinitionIndent",5);function r(o){const a=i.events[i.events.length-1];return a&&a[1].type==="gfmFootnoteDefinitionIndent"&&a[2].sliceSerialize(a[1],!0).length===4?n(o):t(o)}}function Md(e){let t=(e||{}).singleTilde;const i={name:"strikethrough",tokenize:o,resolveAll:r};return t==null&&(t=!0),{text:{126:i},insideSpan:{null:[i]},attentionMarkers:{null:[126]}};function r(a,s){let l=-1;for(;++l<a.length;)if(a[l][0]==="enter"&&a[l][1].type==="strikethroughSequenceTemporary"&&a[l][1]._close){let u=l;for(;u--;)if(a[u][0]==="exit"&&a[u][1].type==="strikethroughSequenceTemporary"&&a[u][1]._open&&a[l][1].end.offset-a[l][1].start.offset===a[u][1].end.offset-a[u][1].start.offset){a[l][1].type="strikethroughSequence",a[u][1].type="strikethroughSequence";const d={type:"strikethrough",start:Object.assign({},a[u][1].start),end:Object.assign({},a[l][1].end)},c={type:"strikethroughText",start:Object.assign({},a[u][1].end),end:Object.assign({},a[l][1].start)},m=[["enter",d,s],["enter",a[u][1],s],["exit",a[u][1],s],["enter",c,s]],p=s.parser.constructs.insideSpan.null;p&&ce(m,m.length,0,dn(p,a.slice(u+1,l),s)),ce(m,m.length,0,[["exit",c,s],["enter",a[l][1],s],["exit",a[l][1],s],["exit",d,s]]),ce(a,u-1,l-u+3,m),l=u+m.length-2;break}}for(l=-1;++l<a.length;)a[l][1].type==="strikethroughSequenceTemporary"&&(a[l][1].type="data");return a}function o(a,s,l){const u=this.previous,d=this.events;let c=0;return m;function m(g){return u===126&&d[d.length-1][1].type!=="characterEscape"?l(g):(a.enter("strikethroughSequenceTemporary"),p(g))}function p(g){const v=an(u);if(g===126)return c>1?l(g):(a.consume(g),c++,p);if(c<2&&!t)return l(g);const z=a.exit("strikethroughSequenceTemporary"),b=an(g);return z._open=!b||b===2&&!!v,z._close=!v||v===2&&!!b,s(g)}}}class Od{constructor(){this.map=[],this.index=new Map}add(n,t,i){Bd(this,n,t,i)}consume(n){if(this.map.sort(function(o,a){return o[0]-a[0]}),this.map.length===0)return;let t=this.map.length;const i=[];for(;t>0;)t-=1,i.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];i.push(n.slice()),n.length=0;let r=i.pop();for(;r;){for(const o of r)n.push(o);r=i.pop()}this.map.length=0,this.index.clear()}}function Bd(e,n,t,i){if(t===0&&i.length===0)return;const r=e.index.get(n);if(r){r[1]+=t,r[2].push(...i);return}const o=[n,t,i];e.map.push(o),e.index.set(n,o)}function Vd(e,n){let t=!1;const i=[];for(;n<e.length;){const r=e[n];if(t){if(r[0]==="enter")r[1].type==="tableContent"&&i.push(e[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(r[1].type==="tableContent"){if(e[n-1][1].type==="tableDelimiterMarker"){const o=i.length-1;i[o]=i[o]==="left"?"center":"right"}}else if(r[1].type==="tableDelimiterRow")break}else r[0]==="enter"&&r[1].type==="tableDelimiterRow"&&(t=!0);n+=1}return i}function Ud(){return{flow:{null:{name:"table",tokenize:Hd,resolveAll:$d}}}}function Hd(e,n,t){const i=this;let r=0,o=0,a;return s;function s(y){let E=i.events.length-1;for(;E>-1;){const{type:Q}=i.events[E][1];if(Q==="lineEnding"||Q==="linePrefix")E--;else break}const T=E>-1?i.events[E][1].type:null,V=T==="tableHead"||T==="tableRow"?w:l;return V===w&&i.parser.lazy[i.now().line]?t(y):V(y)}function l(y){return e.enter("tableHead"),e.enter("tableRow"),u(y)}function u(y){return y===124||(a=!0,o+=1),d(y)}function d(y){return y===null?t(y):L(y)?o>1?(o=0,i.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),p):t(y):N(y)?M(e,d,"whitespace")(y):(o+=1,a&&(a=!1,r+=1),y===124?(e.enter("tableCellDivider"),e.consume(y),e.exit("tableCellDivider"),a=!0,d):(e.enter("data"),c(y)))}function c(y){return y===null||y===124||$(y)?(e.exit("data"),d(y)):(e.consume(y),y===92?m:c)}function m(y){return y===92||y===124?(e.consume(y),c):c(y)}function p(y){return i.interrupt=!1,i.parser.lazy[i.now().line]?t(y):(e.enter("tableDelimiterRow"),a=!1,N(y)?M(e,g,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(y):g(y))}function g(y){return y===45||y===58?z(y):y===124?(a=!0,e.enter("tableCellDivider"),e.consume(y),e.exit("tableCellDivider"),v):R(y)}function v(y){return N(y)?M(e,z,"whitespace")(y):z(y)}function z(y){return y===58?(o+=1,a=!0,e.enter("tableDelimiterMarker"),e.consume(y),e.exit("tableDelimiterMarker"),b):y===45?(o+=1,b(y)):y===null||L(y)?D(y):R(y)}function b(y){return y===45?(e.enter("tableDelimiterFiller"),_(y)):R(y)}function _(y){return y===45?(e.consume(y),_):y===58?(a=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(y),e.exit("tableDelimiterMarker"),I):(e.exit("tableDelimiterFiller"),I(y))}function I(y){return N(y)?M(e,D,"whitespace")(y):D(y)}function D(y){return y===124?g(y):y===null||L(y)?!a||r!==o?R(y):(e.exit("tableDelimiterRow"),e.exit("tableHead"),n(y)):R(y)}function R(y){return t(y)}function w(y){return e.enter("tableRow"),F(y)}function F(y){return y===124?(e.enter("tableCellDivider"),e.consume(y),e.exit("tableCellDivider"),F):y===null||L(y)?(e.exit("tableRow"),n(y)):N(y)?M(e,F,"whitespace")(y):(e.enter("data"),O(y))}function O(y){return y===null||y===124||$(y)?(e.exit("data"),F(y)):(e.consume(y),y===92?B:O)}function B(y){return y===92||y===124?(e.consume(y),O):O(y)}}function $d(e,n){let t=-1,i=!0,r=0,o=[0,0,0,0],a=[0,0,0,0],s=!1,l=0,u,d,c;const m=new Od;for(;++t<e.length;){const p=e[t],g=p[1];p[0]==="enter"?g.type==="tableHead"?(s=!1,l!==0&&(fi(m,n,l,u,d),d=void 0,l=0),u={type:"table",start:Object.assign({},g.start),end:Object.assign({},g.end)},m.add(t,0,[["enter",u,n]])):g.type==="tableRow"||g.type==="tableDelimiterRow"?(i=!0,c=void 0,o=[0,0,0,0],a=[0,t+1,0,0],s&&(s=!1,d={type:"tableBody",start:Object.assign({},g.start),end:Object.assign({},g.end)},m.add(t,0,[["enter",d,n]])),r=g.type==="tableDelimiterRow"?2:d?3:1):r&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")?(i=!1,a[2]===0&&(o[1]!==0&&(a[0]=a[1],c=Ke(m,n,o,r,void 0,c),o=[0,0,0,0]),a[2]=t)):g.type==="tableCellDivider"&&(i?i=!1:(o[1]!==0&&(a[0]=a[1],c=Ke(m,n,o,r,void 0,c)),o=a,a=[o[1],t,0,0])):g.type==="tableHead"?(s=!0,l=t):g.type==="tableRow"||g.type==="tableDelimiterRow"?(l=t,o[1]!==0?(a[0]=a[1],c=Ke(m,n,o,r,t,c)):a[1]!==0&&(c=Ke(m,n,a,r,t,c)),r=0):r&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")&&(a[3]=t)}for(l!==0&&fi(m,n,l,u,d),m.consume(n.events),t=-1;++t<n.events.length;){const p=n.events[t];p[0]==="enter"&&p[1].type==="table"&&(p[1]._align=Vd(n.events,t))}return e}function Ke(e,n,t,i,r,o){const a=i===1?"tableHeader":i===2?"tableDelimiter":"tableData",s="tableContent";t[0]!==0&&(o.end=Object.assign({},De(n.events,t[0])),e.add(t[0],0,[["exit",o,n]]));const l=De(n.events,t[1]);if(o={type:a,start:Object.assign({},l),end:Object.assign({},l)},e.add(t[1],0,[["enter",o,n]]),t[2]!==0){const u=De(n.events,t[2]),d=De(n.events,t[3]),c={type:s,start:Object.assign({},u),end:Object.assign({},d)};if(e.add(t[2],0,[["enter",c,n]]),i!==2){const m=n.events[t[2]],p=n.events[t[3]];if(m[1].end=Object.assign({},p[1].end),m[1].type="chunkText",m[1].contentType="text",t[3]>t[2]+1){const g=t[2]+1,v=t[3]-t[2]-1;e.add(g,v,[])}}e.add(t[3]+1,0,[["exit",c,n]])}return r!==void 0&&(o.end=Object.assign({},De(n.events,r)),e.add(r,0,[["exit",o,n]]),o=void 0),o}function fi(e,n,t,i,r){const o=[],a=De(n.events,t);r&&(r.end=Object.assign({},a),o.push(["exit",r,n])),i.end=Object.assign({},a),o.push(["exit",i,n]),e.add(t+1,0,o)}function De(e,n){const t=e[n],i=t[0]==="enter"?"start":"end";return t[1][i]}const Qd={name:"tasklistCheck",tokenize:Gd};function Wd(){return{text:{91:Qd}}}function Gd(e,n,t){const i=this;return r;function r(l){return i.previous!==null||!i._gfmTasklistFirstContentOfListItem?t(l):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),o)}function o(l){return $(l)?(e.enter("taskListCheckValueUnchecked"),e.consume(l),e.exit("taskListCheckValueUnchecked"),a):l===88||l===120?(e.enter("taskListCheckValueChecked"),e.consume(l),e.exit("taskListCheckValueChecked"),a):t(l)}function a(l){return l===93?(e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),s):t(l)}function s(l){return L(l)?n(l):N(l)?e.check({tokenize:Xd},n,t)(l):t(l)}}function Xd(e,n,t){return M(e,i,"whitespace");function i(r){return r===null?t(r):n(r)}}function Yd(e){return Fi([wd(),Ad(),Md(e),Ud(),Wd()])}const Jd={};function Kd(e){const n=this,t=e||Jd,i=n.data(),r=i.micromarkExtensions||(i.micromarkExtensions=[]),o=i.fromMarkdownExtensions||(i.fromMarkdownExtensions=[]),a=i.toMarkdownExtensions||(i.toMarkdownExtensions=[]);r.push(Yd(t)),o.push(bd()),a.push(yd(t))}const _r={blue:{text:"text-[#0071e3]",bg:"bg-[#e8f2ff]",border:"border-[#0071e3]/20"},green:{text:"text-[#188038]",bg:"bg-[#eaf7ef]",border:"border-[#34a853]/20"},purple:{text:"text-[#7b2ff7]",bg:"bg-[#f0e9ff]",border:"border-[#7b2ff7]/20"}},Cr=({post:e,featured:n=!1})=>C.jsx("div",{className:`relative overflow-hidden bg-white ${n?"min-h-[380px]":"h-60"}`,children:C.jsx("img",{src:e.coverImage,alt:e.coverAlt,className:"absolute inset-0 h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.025]"})}),gi=({post:e,featured:n=!1})=>{const{t}=ln(),i=_r[e.accent];return C.jsxs($n,{to:`/blog/${e.slug}`,className:`group overflow-hidden rounded-lg border border-black/[0.08] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl ${n?"grid gap-0 lg:grid-cols-[1.05fr_0.95fr]":"flex h-full min-h-[520px] flex-col"}`,children:[C.jsx(Cr,{post:e,featured:n}),C.jsxs("div",{className:"flex flex-col p-6 sm:p-8",children:[C.jsxs("div",{className:"mb-5 flex flex-wrap items-center gap-3 text-sm text-muted-foreground",children:[C.jsxs("span",{className:`meta-pill ${i.border} ${i.bg} ${i.text}`,children:[C.jsx(xi,{className:"h-4 w-4"}),t(e.category)]}),C.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[C.jsx(vi,{className:"h-4 w-4"}),e.readTime]})]}),C.jsx("h2",{className:`${n?"text-3xl md:text-4xl":"text-2xl"} font-bold tracking-tight text-foreground`,children:t(e.title)}),C.jsx("p",{className:"mt-3 text-sm font-medium text-muted-foreground",children:e.displayDate}),C.jsx("p",{className:"mt-5 leading-relaxed text-muted-foreground",children:t(e.excerpt)}),C.jsxs("div",{className:"mt-auto pt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-dark",children:[t("Read article"),C.jsx(Br,{className:"h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]})]})]})},Zd=()=>{const{t:e,language:n}=ln(),[t,...i]=wi(n).filter(r=>!r.slug.startsWith("atlas-"));return C.jsx("main",{id:"main",tabIndex:-1,className:"flex-1 w-full bg-[#f5f5f7] pt-28 pb-20",children:C.jsxs("section",{className:"mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8",children:[C.jsxs("div",{className:"mb-12",children:[C.jsx("span",{className:"meta-pill mb-4 border-blue-100 bg-blue-50 text-primary-dark",children:e("Writing")}),C.jsx("h1",{className:"max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-6xl",children:e("Field notes.")}),C.jsx("p",{className:"mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground",children:e("Experiments, equations, and what I learned from them.","Experimentos, ecuaciones y lo que aprendí de ellos.")})]}),C.jsx(gi,{post:t,featured:!0}),C.jsx("div",{className:"mt-8 grid gap-6 md:grid-cols-2",children:i.map(r=>C.jsx(gi,{post:r},r.slug))})]})})},ep=({post:e})=>{const{t:n}=ln(),t=_r[e.accent];return C.jsx("main",{id:"main",tabIndex:-1,className:"flex-1 w-full bg-[#f5f5f7] pt-28 pb-20",children:C.jsxs("article",{className:"mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8",children:[C.jsxs($n,{to:"/blog",className:"mb-10 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:text-primary-dark",children:[C.jsx(yi,{className:"h-4 w-4"}),n("Back to blog")]}),C.jsxs("header",{children:[C.jsxs("span",{className:`meta-pill ${t.border} ${t.bg} ${t.text}`,children:[C.jsx(xi,{className:"h-4 w-4"}),n(e.category)]}),C.jsx("h1",{className:"mt-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl",children:n(e.title)}),C.jsx("p",{className:"mt-5 text-xl leading-relaxed text-muted-foreground",children:n(e.subtitle)}),C.jsxs("div",{className:"mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground",children:[C.jsxs("span",{className:"inline-flex items-center gap-2",children:[C.jsx(Ur,{className:"h-4 w-4"}),n("Adam Maltoni")]}),C.jsxs("span",{className:"inline-flex items-center gap-2",children:[C.jsx(Vr,{className:"h-4 w-4"}),e.displayDate]}),C.jsxs("span",{className:"inline-flex items-center gap-2",children:[C.jsx(vi,{className:"h-4 w-4"}),e.readTime]})]}),C.jsx("div",{className:"mt-8 overflow-hidden rounded-lg border border-black/[0.08] bg-white shadow-sm",children:C.jsx(Cr,{post:e,featured:!0})})]}),C.jsx("div",{className:"blog-prose mt-10",children:C.jsx(Ru,{remarkPlugins:[Kd],components:{a:({node:i,...r})=>C.jsx("a",{...r,target:"_blank",rel:"noopener noreferrer"}),img:({node:i,...r})=>C.jsx("img",{...r,loading:"lazy",decoding:"async",className:"my-9 w-full rounded-xl border border-black/[0.08] bg-white p-2 shadow-lg shadow-black/[0.06]"}),table:({children:i})=>C.jsx("div",{className:"blog-table-scroll",tabIndex:0,role:"region","aria-label":n("Research results table"),children:C.jsx("table",{children:i})}),code:({node:i,className:r,children:o,...a})=>!r?C.jsx("code",{...a,className:"rounded bg-gray-100 px-1.5 py-0.5 text-[0.9em] text-foreground",children:o}):C.jsx("code",{...a,className:r,children:o})},children:e.content})})]})})},rp=()=>{const{t:e,language:n}=ln(),{slug:t}=jr(),i=vt.useMemo(()=>wi(n),[n]),r=t?i.find(o=>o.slug===t):void 0;return vt.useEffect(()=>{const o=document.title;return document.title=`${(r==null?void 0:r.title)??e(t?"Article not found":"Writing")} | Adam Maltoni`,()=>{document.title=o}},[r,t,e]),C.jsxs("div",{className:"blog-page flex min-h-screen flex-col bg-background",children:[C.jsx("a",{className:"skip-link",href:"#main",children:e("Skip to content")}),C.jsx(Mr,{}),t?r?C.jsx(ep,{post:r}):C.jsx("main",{id:"main",tabIndex:-1,className:"flex flex-1 items-center justify-center px-4 pt-28 pb-20",children:C.jsxs("div",{className:"max-w-xl text-center",children:[C.jsx("h1",{className:"text-4xl font-bold tracking-tight text-foreground",children:e("Article not found")}),C.jsx("p",{className:"mt-4 text-muted-foreground",children:e("The article you are looking for is not available in this portfolio.")}),C.jsxs($n,{to:"/blog",className:"mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background",children:[C.jsx(yi,{className:"h-4 w-4"}),e("Back to blog")]})]})}):C.jsx(Zd,{}),C.jsx(Or,{})]})};export{rp as default};
