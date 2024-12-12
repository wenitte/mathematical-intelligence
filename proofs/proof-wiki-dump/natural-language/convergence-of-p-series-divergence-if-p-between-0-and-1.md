# 

Source: https://proofwiki.org/wiki/Convergence_of_P-Series/Divergence_if_p_between_0_and_1

Theorem
Let $p$ be a complex number.
Let $0 < \map \Re p \le 1$.
Then the $p$-series:

$\ds \sum_{n \mathop = 1}^\infty n^{-p}$
diverges.


Proof
Lemma
Let $p = x + i y$ be a complex number where $x, y \in \R$ such that:

$x > 0$
$x \ne 1$

Then:

$\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^x}$ converges if and only if $\ds \lim_{P \mathop \to \infty} \dfrac {P^{1 - x} } {1 - x}$ converges.
$\Box$

Hence, the convergence of the $p$-series is dependent on the convergence of: 

$\ds \lim_{t \mathop \to \infty} \frac {t^{1 - x} } {1 - x}$

Suppose $0 < x < 1$.
Then:














\(\ds \lim_{t \mathop \to \infty} \frac {t^{1 - x} } {1 - x}\)

\(=\)







\(\ds \frac 1 {1 - x} \lim_{t \mathop \to \infty} t^{1 - x}\)




















\(\ds \)

\(\to\)







\(\ds +\infty\)





Limit at Infinity of $x^n$




The special case of $x = 1$ is covered by Integral of Reciprocal is Divergent.
Hence the result from the Cauchy Integral Test.
$\blacksquare$





