# 

Source: https://proofwiki.org/wiki/P-adic_Expansion_is_a_Cauchy_Sequence_in_P-adic_Norm



Theorem
Let $p$ be a prime number.
Let $\norm {\,\cdot\,}_p$ be the $p$-adic norm on the rationals numbers $\Q$.
Let $\ds \sum_{n \mathop = m}^\infty d_n p^n$ be a $p$-adic expansion.

Then the sequence of partial sums of the series:

$\ds \sum_{n \mathop = m}^\infty d_n p^n$
is a Cauchy sequence in the valued field  $\struct{\Q, \norm{\,\cdot\,}_p}$.


Corollary 1
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic Numbers.

Then the sequence of partial sums of the series:

$\ds \sum_{n \mathop = m}^\infty d_n p^n$
represents a $p$-adic number of $\struct {\Q_p,\norm {\,\cdot\,}_p}$.


Corollary 2
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Then the sequence of partial sums of the series:

$\ds \sum_{n \mathop = m}^\infty d_n p^n$
converges to a $p$-adic number in $\struct{\Q_p, \norm{\,\cdot\,}_p}$.


Proof
Let $\sequence {s_N}$ be the sequence of partial sums defined by:

$\forall N \in \Z_{\ge m}: s_N = \ds \sum_{n \mathop = m}^N d_n p^n$

From Sequence of Consecutive Integers Modulo Power of p is Cauchy in P-adic Norm:

the sequence $\sequence {s_N}$ is a Cauchy sequence if:
$\forall N \in \Z_{\ge m}: s_{N + 1} \equiv s_N \pmod {p^n}$

Now for all $N \in \Z_{\ge m}$:














\(\ds s_{N + 1} - s_N\)

\(=\)







\(\ds \sum_{n \mathop = m}^{N + 1} d_n p^ n - \sum_{n \mathop = m}^{N} d_n p^n\)





Definition of Partial Sum














\(\ds \)

\(=\)







\(\ds d_{N + 1} p^{N + 1}\)














\(\ds \leadsto \ \ \)





\(\ds s_{N + 1}\)

\(\equiv\)







\(\ds s_N \pmod {p^N}\)





Definition of Congruence modulo $p^N$



The result follows.
$\blacksquare$


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.4$ The field of $p$-adic numbers $\Q_p$




