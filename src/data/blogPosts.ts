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
    subtitle: 'A concise technical summary of my thesis on how regularization changes CNN behavior beyond validation accuracy.',
    excerpt:
      'My TFG studied seven regularization techniques not only by accuracy, but by the internal activation dynamics they induce in convolutional neural networks.',
    date: '2026-07-18',
    displayDate: 'Published on 18 July 2026, 09:00',
    readTime: '8 min read',
    category: 'Thesis',
    coverImage: asset('blog-regularization-cover.svg'),
    coverAlt: 'Technical diagram of CNN activation layers and regularization metrics',
    accent: 'blue',
    content: `Most regularization work is explained through the final validation curve: did the model overfit less, did accuracy improve, did loss become smoother. For my thesis, I wanted to look one level deeper.

The central question was simple: **when two CNNs reach similar external performance, are they internally behaving in the same way?**

## A) What I compared

I trained the same convolutional architecture under several regularization strategies:

- L1 and L2 penalties.
- Dropout.
- Early stopping.
- Gaussian noise.
- Data augmentation.
- Batch Normalization.

The experiments were centered on CIFAR-10 and SVHN, with additional cross-domain validation ideas around CIFAR-100 and Fashion-MNIST. The goal was not to build the largest model, but to keep the architecture stable enough that the regularization effect could be compared cleanly.

## B) Why accuracy was not enough

Accuracy tells us whether the final classifier is useful, but it says very little about the path the representation takes. Two models can converge to close validation scores while using their hidden layers differently.

So the analysis looked at three internal signals:

- **Shannon entropy**, to estimate how distributed or concentrated the activations were.
- **Dispersion ratios**, to compare each method against a baseline behavior.
- **Unique activation states**, to detect how much of the internal state space the network actually used.

This turns regularization from a single performance trick into a measurable change in representation dynamics.

## C) The pipeline

The experiment had three stages:

\`\`\`text
train checkpoints -> collect activations -> compute internal metrics
\`\`\`

After training each model, activations were extracted layer by layer. The analysis scripts then computed entropy, dispersion, and state-space coverage so each regularizer could be compared externally and internally.

## D) What the project taught me

The useful lesson was that regularization is not only about reducing overfitting. It also changes how the model uses its representational capacity.

Some methods mainly stabilize the training process. Others reshape the internal activation distribution. Some can improve external performance while also making intermediate representations less brittle.

That distinction matters when we care about robustness, interpretability, or understanding why a model generalizes.

## E) What I would extend next

The next step would be to connect these internal metrics with robustness tests in a more systematic way: noise in the input, perturbations in the weights, and distribution shifts between datasets.

The thesis became useful because it treats the CNN not as a black box that returns an accuracy score, but as a dynamic system whose internal states can be measured.`,
  },
  {
    slug: 'diffusion-models-from-sdes-to-images',
    title: 'Diffusion Models from SDEs to Images',
    subtitle: 'A practical summary of the diffusion-based image generation system I built for an advanced machine learning project.',
    excerpt:
      'A modular PyTorch package for score-based image generation, covering diffusion processes, sampling strategies, conditioning, and evaluation.',
    date: '2025-05-28',
    displayDate: 'Published on 28 May 2025, 09:00',
    readTime: '7 min read',
    category: 'Generative AI',
    coverImage: asset('blog-diffusion-cover.svg'),
    coverAlt: 'Abstract diagram of diffusion denoising paths and sampling blocks',
    accent: 'purple',
    content: `Diffusion models are often introduced visually: start from noise, denoise step by step, get an image. That intuition is correct, but the interesting part is what makes the denoising process controllable.

In this project, I built a modular PyTorch system for diffusion-based image generation with a focus on **score-based modeling** and stochastic differential equations.

## A) The core idea

The forward process gradually corrupts data with noise. The model learns the score function needed to reverse that corruption.

At sampling time, we do the opposite:

\`\`\`text
noise -> reverse dynamics -> denoised sample -> evaluation
\`\`\`

The implementation supported multiple diffusion processes, including VE, VP, and Sub-VP variants, so the system could compare how different noise schedules affect training and generation.

## B) Why modularity mattered

The project was designed as a research package, not just as a notebook. That meant separating:

- Diffusion process definitions.
- Score network training.
- Sampling algorithms.
- Conditional generation utilities.
- Evaluation metrics and benchmarking.

That separation made it easier to test new samplers or conditioning modes without rewriting the whole project.

## C) Sampling strategies

I worked with several sampling approaches, including Euler-Maruyama style updates, predictor-corrector logic, probability flow ODE ideas, and exponential integrator variants.

The practical tradeoff is always the same: better sample quality usually costs more computation. A clean benchmarking layer helped compare that cost instead of relying on visual impressions.

## D) Conditioning and evaluation

The system also explored conditional generation tasks such as class conditioning, colorization, and image imputation. Those tasks are useful because they test whether the model has learned more than a generic image prior.

Evaluation included FID, Inception Score, bits-per-dimension, and runtime profiling. The goal was to make the outputs inspectable both visually and quantitatively.

## E) What I took away

The best part of the project was seeing how the math maps to engineering decisions. A diffusion model is not a single algorithm. It is a stack of choices: process, network, sampler, conditioning mechanism, and metric.

Treating those choices as interchangeable modules made the system much easier to reason about and improve.`,
  },
  {
    slug: 'athenai-competition-decision-pipeline',
    title: 'AthenAI: Building a Decision Pipeline Under Competition Pressure',
    subtitle: 'A short technical write-up on turning noisy signals into an interpretable model workflow for the AthenAI challenge.',
    excerpt:
      'The AthenAI work focused on validation, ranking, and readable reasoning: a compact decision pipeline designed for a judged technical challenge.',
    date: '2026-09-14',
    displayDate: 'Published on 14 September 2026, 09:00',
    readTime: '6 min read',
    category: 'Applied ML',
    coverImage: asset('blog-athenai-cover.svg'),
    coverAlt: 'Signal, model, and decision pipeline diagram for AthenAI',
    accent: 'green',
    content: `Competition projects are different from coursework. The problem is not only to train a model, but to make a chain of decisions that is fast, explainable, and defensible.

The AthenAI project was a compact version of that: noisy signals, limited time, and a judging context where technical reasoning mattered as much as raw output.

## A) The pipeline mindset

Instead of treating the model as the whole project, I structured the work as a pipeline:

\`\`\`text
signals -> validation -> model comparison -> ranking -> explanation
\`\`\`

That framing helped avoid a common trap: optimizing a metric without understanding whether the signal was stable enough to trust.

## B) Signal quality first

The first layer was basic but important:

- Check missingness and outlier behavior.
- Compare feature windows.
- Test whether transformations created more stable inputs.
- Keep track of evaluation leakage risks.

This part is not glamorous, but it is where many model improvements actually come from.

## C) Model comparison without overclaiming

The modeling step focused on comparing decision rules and feature sets under the same validation assumptions. I cared less about declaring a universal best model and more about understanding which choices were robust under different slices of the data.

That made the final output easier to defend: the result was not just a score, but a short technical argument.

## D) Readable outputs

For a challenge setting, readable reporting is part of the system. The final pipeline needed to explain:

- Why a signal was used.
- How the model was evaluated.
- What failure modes remained.
- Which decisions were strong enough to keep.

That discipline made the project stronger and helped turn the result into a scholarship-winning submission.

## E) The lesson

The most useful lesson was restraint. In applied ML, especially under time pressure, the strongest system is often the one that is easiest to audit.

Good validation, clear assumptions, and concise reasoning beat a complicated model that nobody can explain.`,
  },
];
