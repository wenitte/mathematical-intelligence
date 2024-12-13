# 

Source: https://proofwiki.org/wiki/Pointwise_Product_of_Measurable_Functions_is_Measurable

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $f, g: X \to \overline \R$ be $\Sigma$-measurable functions.

Then the pointwise product $f \cdot g: X \to \overline \R$ is also $\Sigma$-measurable.


Proof
By Measurable Function is Pointwise Limit of Simple Functions, we find sequences $\sequence {f_n}_{n \mathop \in \N}, \sequence {g_n}_{n \mathop \in \N}$ such that:

$\ds f = \lim_{n \mathop \to \infty} f_n$
$\ds g = \lim_{n \mathop \to \infty} g_n$
where the limits are pointwise.
It follows that for all $x \in X$:

$\map f x \cdot \map g x = \ds \lim_{n \mathop \to \infty} \map {f_n} x \cdot \map {g_n} x$

This article, or a section of it, needs explaining.In particular: There needs to be a bunch of results establishing such equalities of convergence in function spacesYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
so that we have the pointwise limit:

$\ds f \cdot g = \lim_{n \mathop \to \infty} f_n \cdot g_n$
By Pointwise Product of Simple Functions is Simple Function, $f \cdot g$ is a pointwise limit of simple functions.
By Simple Function is Measurable, $f \cdot g$ is a pointwise limit of measurable functions.

Hence $f \cdot g$ is measurable, by Pointwise Limit of Measurable Functions is Measurable.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $8.10$




