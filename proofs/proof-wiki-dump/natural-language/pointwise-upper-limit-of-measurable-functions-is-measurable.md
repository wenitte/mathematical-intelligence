# 

Source: https://proofwiki.org/wiki/Pointwise_Upper_Limit_of_Measurable_Functions_is_Measurable

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\sequence {f_n}_{n \mathop \in \N}$, $f_n: X \to \overline \R$ be a sequence of $\Sigma$-measurable functions.

Then the pointwise upper limit $\ds \limsup_{n \mathop \to \infty} f_n: X \to \overline \R$ is also $\Sigma$-measurable.


Proof
By definition of upper limit, we have:

$\ds \limsup_{n \mathop \to \infty} f_n = \inf_{m \mathop \in \N} \sup_{n \mathop \ge m} f_n$

The result follows from combining:

Pointwise Supremum of Measurable Functions is Measurable
Pointwise Infimum of Measurable Functions is Measurable
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $8.9$




