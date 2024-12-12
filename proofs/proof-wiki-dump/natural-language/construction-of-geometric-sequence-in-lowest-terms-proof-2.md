# 

Source: https://proofwiki.org/wiki/Construction_of_Geometric_Sequence_in_Lowest_Terms/Proof_2

Theorem
It is possible to find a geometric sequence of integers $G_n$ of length $n + 1$ with a given common ratio such that $G_n$ is in its lowest terms.

In the words of Euclid:

To find numbers in continued proportion, as many as may be prescribed, and the least of those that are in a given ratio.
(The Elements: Book $\text{VIII}$: Proposition $2$)


Proof
Let the required length of the geometric sequence $P$ be $n$.
Let $r$ be the given common ratio.
From Common Ratio in Integer Geometric Sequence is Rational, $r$ is a rational number.
Let $r = \dfrac p q$ be in canonical form.
Thus, by definition:

$p \perp q$

Let $a$ be the first term of $P$.
Then the sequence $P$ is:

$P = \tuple {a, a \dfrac p q, a \dfrac {p^2} {q^2}, \ldots, a \dfrac {p^n} {q^n} }$
All the elements of $P$ are natural numbers, so, in particular:

$a \dfrac {p^n} {q^n} \in \N$

From Powers of Coprime Numbers are Coprime:

$p^n \perp q^n$
and so from Euclid's Lemma:

$q^n \divides a$

Thus:

$a = k q^n$
for some $k \in \N$, and so:

$P = \tuple {k q^n, k p q^{n - 1}, k p^2 q^{n - 2}, \ldots, k p^{n - 1} q, k p^n}$
From Geometric Sequence with Coprime Extremes is in Lowest Terms:

$k q^n \perp k p^n$
from which it follows that $k = 1$.

It follows that the required geometric sequence is:

$P = \tuple {q^n, p q^{n - 1}, p^2 q^{n - 2}, \ldots, p^{n - 1} q, p^n}$
$\blacksquare$





