# 

Source: https://proofwiki.org/wiki/Denominators_of_Simple_Continued_Fraction_are_Strictly_Increasing

Theorem
Let $N \in \N \cup \set \infty$ be an extended natural number.
Let $\sqbrk {a_0, a_1, a_2, \ldots}$ be a simple continued fraction in $\R$ of length $N$.
Let $q_0, q_1, q_2, \ldots$ be its denominators.

Then with the possible exception of $q_0 = q_1$, the sequence $\sequence {q_n}$ is strictly increasing.


Proof
By definition of simple continued fraction, all partial denominators of $\sqbrk {a_0, a_1, a_2, \ldots}$ are strictly positive integers, with the possible exception of $a_0$.
So:

$q_1 = a_1 \ge 1 = q_0$
$q_2 = a_2 a_1 + 1 \ge a_1 + 1 > a_1 = q_1$
hence:

$1 = q_0 \le q_1 < q_2$
Suppose $q_k > q_{k - 1} \ge 1$ for some $k \ge 2$.
Then:

$q_{k + 1} = a_{k + 1} q_k + q_{k - 1} \ge q_k + q_{k - 1} \ge q_k + 1 > q_k$
So, by induction, $\sequence {q_n}$ is strictly increasing except when possibly $q_0 = q_1 = 1$.
$\blacksquare$


Also see
Lower Bounds for Denominators of Simple Continued Fraction




