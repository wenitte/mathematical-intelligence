# 

Source: https://proofwiki.org/wiki/Half-Range_Fourier_Cosine_Series_over_Negative_Range

Theorem
Let $\map f x$ be a real function defined on the open real interval $\openint 0 \lambda$.
Let $f$ be expressed using the half-range Fourier cosine series over $\openint 0 \lambda$:

$\ds \map C x \sim \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty a_n \cos \frac {n \pi x} \lambda$
where:

$a_n = \ds \frac 2 \lambda \int_0^\lambda \map f x \cos \frac {n \pi x} \lambda \rd x$
for all $n \in \Z_{\ge 0}$.

Then over the closed real interval $\openint {-\lambda} 0$, $\map C x$ takes the values:

$\map C x = \map f {-x}$



This page has been identified as a candidate for refactoring of basic complexity.In particular: This following bit depends upon what happens at $x = 0$ which needs to be carefully considered, so put it here as a corollaryUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
That is, the real function expressed by the half-range Fourier cosine series over $\openint 0 \lambda$ is an even function over $\openint {-\lambda} \lambda$.


Proof
From Fourier Series for Even Function over Symmetric Range, $\map C x$ is the Fourier series of an even real function over the interval $\openint 0 \lambda$.
We have that $\map C x \sim \map f x$ over $\openint 0 \lambda$.
Thus over $\openint {-\lambda} 0$ it follows that $\map C x = \map f {-x}$.
$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter One: $\S 6$. Half-Range Cosine Series




