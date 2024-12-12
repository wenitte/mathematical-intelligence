# 

Source: https://proofwiki.org/wiki/Characterisation_of_Cauchy_Sequence_in_Non-Archimedean_Norm/Corollary_1

Theorem
Let $\norm {\,\cdot\,}_p$ be the $p$-adic norm on the rationals $\Q$ for some prime $p$.
Let $\sequence {x_n}$ be a sequence of integers such that:

$\forall n: x_{n + 1} \equiv x_n \pmod {p^n}$

Then:

$\sequence {x_n}$ is a Cauchy sequence in $\struct {\Q, \norm {\,\cdot\,}_p}$.


Proof
By hypothesis:

$\forall n \in \N: p^n \divides \paren {x_{n + 1} - x_n}$
By the definition of the $p$-adic norm:

$\forall n \in \N: \norm {x_{n + 1} - x_n}_p \le \dfrac 1 {p^n}$
From Sequence of Powers of Number less than One:

$\ds \lim_{n \mathop \to \infty} \dfrac 1 {p^n} = 0$
From the Squeeze Theorem for Real Sequences:

$\ds \lim_{n \mathop \to \infty} \norm{x_{n+1} - x_n}_p = 0$.
From P-adic Norm on Rational Numbers is Non-Archimedean Norm, the $p$-adic norm is  non-Archimedean.
From Characterisation of Cauchy Sequence in Non-Archimedean Norm:

$\sequence {x_n}$ is a Cauchy sequence in $\struct {\Q, \norm {\,\cdot\,}_p}$.
$\blacksquare$





