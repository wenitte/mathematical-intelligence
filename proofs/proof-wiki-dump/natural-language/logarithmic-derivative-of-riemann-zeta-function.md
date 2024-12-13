# 

Source: https://proofwiki.org/wiki/Logarithmic_Derivative_of_Riemann_Zeta_Function

Theorem
Let $\zeta$ be the Riemann zeta function:

$\ds \forall s \in \C: \map \Re s > 1: \map \zeta s = \sum_{n \mathop \ge 1} n^{-s}$

Then for all $s \in \C$ with $\map \Re s > 1$:

$\ds -\frac {\map {\zeta'} s} {\map \zeta s} = \sum_{n \mathop \ge 1} \map \Lambda n n^{-s}$
where $\Lambda$ is von Mangoldt's function.


Proof
By Sum of Reciprocals of Powers as Euler Product:

$\ds \map \zeta s = \prod_p \frac 1 {1 - p^{-s} }$
where $p$ ranges over the primes.

From Laws of Logarithms:

$\ds \ln \map \zeta s = - \sum_p \map \ln {1 - p^{-s} }$

This article, or a section of it, needs explaining.In particular: Is the above equality really true for complex logarithm? I believe no. Probably, we need to check the identity on $\R_{>1}$, and later extend it to $\map \Re s > 1$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Taking the derivative:














\(\ds \frac {\map {\zeta'} s} {\map \zeta s}\)

\(=\)







\(\ds -\sum_p \frac {\paren {\ln p} p^{-s} } {1 - p^{-s} }\)





Logarithmic Derivative of Infinite Product of Analytic Functions and Derivative of Riemann Zeta Function














\(\ds \)

\(=\)







\(\ds -\sum_p \paren {\ln p} \paren {\frac 1 {1 - p^{-s} } - 1}\)




















\(\ds \)

\(=\)







\(\ds -\sum_p \paren {\ln p} \sum_{n \mathop \ge 1} p^{-n s}\)





Sum of Infinite Geometric Sequence




Also, by the definition of $\Lambda$:

$\ds \sum_{n \mathop \ge 1} \map \Lambda n n^{-s} = \sum_p \paren {\ln p} \sum_{n \mathop \ge 1} p^{-n s}$
and the proof is complete.
$\blacksquare$





