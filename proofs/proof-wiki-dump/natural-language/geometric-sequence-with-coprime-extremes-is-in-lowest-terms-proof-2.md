# 

Source: https://proofwiki.org/wiki/Geometric_Sequence_with_Coprime_Extremes_is_in_Lowest_Terms/Proof_2

Theorem
Let $G_n = \sequence {a_0, a_1, \ldots, a_n}$ be a geometric sequence of integers.
Let:

$a_0 \perp a_n$
where $\perp$ denotes coprimality.

Then $G_n$ is in its lowest terms.


Proof
Let $G_n = \sequence {a_0, a_1, \ldots, a_n}$ be natural numbers in geometric sequence such that $a_0 \perp a_n$.
Aiming for a contradiction, suppose $G\,'_n = \sequence {b_0, b_1, \cdots, b_n}$ be another set of natural numbers in geometric sequence with the same common ratio where:

$\forall k \in \N_{\le n}: a_k > b_k$
By definition of geometric sequence:

$a_0 = r^n a_n$
$b_0 = r^n b_n$
Hence:

$\dfrac {a_0} {a_n} = \dfrac {b_0} {b_n}$
By hypothesis:

$a_0 \perp a_n$
Thus $\dfrac {a_0} {a_n}$ is in canonical form.
From Canonical Form of Rational Number is Unique it follows that $a_0$ and $a_n$ are the only two integers fulfilling these conditions.
Thus:

$\forall p, q: \dfrac p q = \dfrac {a_0} {a_n}: a_0 \le p, a_n \le q$
But it was supposed that:

$b_0 < a_0$
$b_n < a_n$
From this contradiction it follows that there can be no such $b_0, \ldots, b_n$.
Hence the result.
$\blacksquare$





