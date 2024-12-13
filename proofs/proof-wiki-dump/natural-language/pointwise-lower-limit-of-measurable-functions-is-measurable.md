# 

Source: https://proofwiki.org/wiki/Pointwise_Lower_Limit_of_Measurable_Functions_is_Measurable

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\sequence {f_n}_{n \mathop \in \N}$, $f_n: X \to \overline \R$ be a sequence of $\Sigma$-measurable functions.

Then the pointwise lower limit:

$\ds \liminf_{n \mathop \to \infty} f_n: X \to \overline \R$
is also $\Sigma$-measurable.


Proof
By definition of limit inferior, we have:

$\ds \liminf_{n \mathop \to \infty} f_n = \sup_{m \mathop \in \N} \ \inf_{n \mathop \ge m} f_n$

The result follows from combining:

Pointwise Infimum of Measurable Functions is Measurable
Pointwise Supremum of Measurable Functions is Measurable
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $8.9$




