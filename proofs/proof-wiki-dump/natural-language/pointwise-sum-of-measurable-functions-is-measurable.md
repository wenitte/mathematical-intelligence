# 

Source: https://proofwiki.org/wiki/Pointwise_Sum_of_Measurable_Functions_is_Measurable



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $f, g: X \to \overline \R$ be $\Sigma$-measurable functions.
Assume that the pointwise sum $f + g: X \to \overline \R$ is well-defined.

Then $f + g$ is a $\Sigma$-measurable function.


General Result
Let $\sequence {\alpha_n}_{n \mathop \in \N}$ be a sequence of real numbers.
Let $\sequence {f_n}_{n \mathop \in \N}$ be a sequence of $\Sigma$-measurable functions $f_n : X \to \overline \R$ such that: 

for each $N \in \N$ and $x \in X$, the sum $\ds \sum_{n \mathop = 1}^N \alpha_n \map {f_n} x$ is well-defined.

Then: 

$\ds \sum_{n \mathop = 1}^N \alpha_n f_n$ is $\Sigma$-measurable.


Proof
By Measurable Function is Pointwise Limit of Simple Functions, we find sequences $\sequence {f_n}_{n \mathop \in \N}, \sequence {g_n}_{n \mathop \in \N}$ such that:

$\ds f = \lim_{n \mathop \to \infty} f_n$
$\ds g = \lim_{n \mathop \to \infty} g_n$
where the limits are pointwise.
It follows that for all $x \in X$:

$\map f x + \map g x = \ds \lim_{n \mathop \to \infty} \map {f_n} x + \map {g_n} x$

This article, or a section of it, needs explaining.In particular: There needs to be a bunch of results establishing such equalities of convergence in function spacesYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
so that we have the pointwise limit:

$\ds f + g = \lim_{n \mathop \to \infty} f_n + g_n$
By Pointwise Sum of Simple Functions is Simple Function, $f + g$ is a pointwise limit of simple functions.
By Simple Function is Measurable, $f + g$ is a pointwise limit of measurable functions.

Hence $f + g$ is measurable, by Pointwise Limit of Measurable Functions is Measurable.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $8.10$




