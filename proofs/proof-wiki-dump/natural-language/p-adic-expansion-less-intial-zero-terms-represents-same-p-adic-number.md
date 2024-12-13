# 

Source: https://proofwiki.org/wiki/P-adic_Expansion_Less_Intial_Zero_Terms_Represents_Same_P-adic_Number

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $a$ be a $p$-adic number, that is left coset, in $\Q_p$.
Let $\ds \sum_{i \mathop = m}^\infty d_i p^i$ be a $p$-adic expansion that represents $a$.
Let $l$ be the first index $i \ge m$ such that $d_i \ne 0$

Then the series:

$\ds \sum_{i \mathop = l}^\infty d_i p^i$
also represents $a$.


Proof
Let $\sequence {\alpha_n}$ be the sequence of partial sums:

$\ds \forall n \in \N: \alpha _n = \sum_{i \mathop = 0}^n d_{n + m} p^{n + m}$
Let $\sequence {\beta_n}$ be the sequence of partial sums:

$\ds \forall n \in \N: \beta _n = \sum_{i \mathop = 0}^n d_{n + l} p^{n + l}$
Then:














\(\ds \beta_n\)

\(=\)







\(\ds \sum_{i \mathop = 0}^n d_{n + l} p^{n + l}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = l}^{n + l} d_n p^n\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = m}^{l - 1} d_n p^n  +  \sum_{i \mathop = l}^{n + l} d_n p^n\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = m}^{n + l} d_n p^n\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^{n + l - m} d_{n + m} p^{n + m}\)




















\(\ds \)

\(=\)







\(\ds \alpha_{n + l - m}\)










By definition of $l$:

$m \le l$
So:

$\forall n \in \N : n + l - m \ge n$
Thus $\sequence {\beta_n}$ is a subsequence of $\sequence {\alpha_n}$ by definition.

From Subsequence of Cauchy Sequence in Normed Division Ring is Cauchy Sequence:

$\ds \sum_{i \mathop = l}^\infty d_i p^i$ is a Cauchy Sequence in $\Q$.
From Subsequence is Equivalent to Cauchy Sequence:

$\ds \lim_{n \mathop \to \infty} {\alpha_n - \beta_n} = 0$
That is, the sequence $\sequence {\alpha_n - \beta_n}$ is a null sequence.

By definition of $p$-adic number:

$\sequence {\alpha_n}$ and $\sequence {\beta_n}$ represent the same $p$-adic number
Since $\sequence {\alpha_n}$ represents $a$, it follows that $\sequence {\beta_n}$ represents $a$.
$\blacksquare$





