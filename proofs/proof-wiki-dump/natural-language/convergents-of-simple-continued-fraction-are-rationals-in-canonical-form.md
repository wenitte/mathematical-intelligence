# 

Source: https://proofwiki.org/wiki/Convergents_of_Simple_Continued_Fraction_are_Rationals_in_Canonical_Form

Theorem
Let $n \in \N \cup \set \infty$ be an extended natural number.
Let $\sqbrk {a_0, a_1, a_2, \ldots}$ be a simple continued fraction in $\R$ of length $n$.
Let $p_0, p_1, p_2, \ldots$ and $q_0, q_1, q_2, \ldots$ be its numerators and denominators.

For all $k \ge 1$, $\dfrac {p_k} {q_k}$ is in canonical form:

$p_k$ and $q_k$ are coprime
$q_k > 0$.


Proof
Let $k \ge 1$.
Let $d = \gcd \set {p_k, q_k}$.
From Common Divisor Divides Integer Combination:

$p_k q_{k - 1} - p_{k - 1} q_k$ is a multiple of $d$.

From Difference between Adjacent Convergents of Simple Continued Fraction:

$d \divides \paren {-1}^{k + 1}$
where $\divides$ denotes divisibility.
It follows that:

$d = 1$

By:

$q_0 = 1$
Denominators of Simple Continued Fraction are Strictly Increasing
It follows that $q_k > 0$ for all $k \ge 0$.
$\blacksquare$





