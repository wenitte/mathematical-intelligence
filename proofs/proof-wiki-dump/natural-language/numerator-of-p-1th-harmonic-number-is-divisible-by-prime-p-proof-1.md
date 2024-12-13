# 

Source: https://proofwiki.org/wiki/Numerator_of_p-1th_Harmonic_Number_is_Divisible_by_Prime_p/Proof_1

Theorem
Let $p$ be an odd prime.
Consider the harmonic number $H_{p - 1}$ expressed in canonical form.

The numerator of $H_{p - 1}$ is divisible by $p$.


Proof
Add the terms of $H_{p - 1}$ using the definition of rational addition to obtain $\dfrac m n$.
Do not cancel common prime factors from $m$ and $n$.
It is seen that $n = \paren {p - 1}!$
Hence $p$ is not a divisor of $n$.

The numerator $m$ is seen to be:

$m = \dfrac {\paren {p - 1}!} 1 + \dfrac {\paren {p - 1}!} 2 + \cdots + \dfrac {\paren {p - 1}!} {p - 1}$
Thus it is sufficient to show that $m$ is a multiple of $p$.
Each term in this sum is an integer of the form $\dfrac {\paren {p - 1}!} k$.
For each $k \in \set {1, 2, \ldots, p - 1}$, define $k'= - \dfrac {\paren {p - 1}!} k \bmod p$.
By Wilson's Theorem

$k k' \equiv -\paren {p - 1}! \equiv 1 \pmod p$
Therefore

$k' \equiv k^{-1} \pmod p$
From the corollary to Reduced Residue System under Multiplication forms Abelian Group:

$\struct {\Z'_p, \times}$ is an abelian group.
Since Inverse in Group is Unique, the set:

$\set {1', 2', \ldots, \paren {p - 1}'}$
is merely the set:

$\set {1, 2, \ldots, p - 1}$
in a different order.
Thus 














\(\ds m\)

\(=\)







\(\ds \dfrac {\paren {p - 1}!} 1 + \dfrac {\paren {p - 1}!} 2 + \cdots + \dfrac {\paren {p - 1}!} {p - 1}\)




















\(\ds \)

\(\equiv\)







\(\ds 1 + 2 + \cdots + p - 1\)

\(\ds \pmod p\)


















\(\ds \)

\(\equiv\)







\(\ds \frac {p \paren {p - 1} } 2\)

\(\ds \pmod p\)



Closed Form for Triangular Numbers














\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod p\)







$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.7$: Harmonic Numbers: Exercise $17$




