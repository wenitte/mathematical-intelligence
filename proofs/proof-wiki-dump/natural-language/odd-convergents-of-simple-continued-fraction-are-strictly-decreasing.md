# 

Source: https://proofwiki.org/wiki/Odd_Convergents_of_Simple_Continued_Fraction_are_Strictly_Decreasing

Theorem
Let $n \in \N \cup \set \infty$ be an extended natural number.
Let $\sqbrk {a_0, a_1, \ldots}$ be a simple continued fraction in $\R$ of length $n$.
Let $p_0, p_1, p_2, \ldots$ and $q_0, q_1, q_2, \ldots$ be its numerators and denominators.
Let $\sequence {C_0, C_1, \ldots}$ be its sequence of convergents.

The odd convergents satisfy $C_1 > C_3 > C_5 > \cdots$


Proof
Let $ k \ge 3$ be an odd integer.
From Difference between Adjacent Convergents But One of Simple Continued Fraction:

$C_k - C_{k - 2} = \dfrac {\paren {-1}^k a_k} {q_k q_{k - 2} } = \dfrac {-a_k} {q_k q_{k - 2} }$
By definition of simple continued fraction, $a_k > 0$.
By Convergents of Simple Continued Fraction are Rationals in Canonical Form, $q_k > 0$ and $q_{k - 2} > 0$.
Thus $C_k < C_{k - 2}$.
$\blacksquare$


Also see
Even Convergents of Simple Continued Fraction are Strictly Increasing
Properties of Convergents of Continued Fractions




