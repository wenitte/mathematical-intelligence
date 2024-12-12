# 

Source: https://proofwiki.org/wiki/Form_of_Geometric_Sequence_of_Integers

Theorem
Let $P = \sequence {a_j}_{0 \mathop \le j \mathop \le n}$ be a geometric sequence of length $n + 1$ consisting of integers only.

Then the $j$th term of $P$ is given by:

$a_j = k p^{n - j} q^j$
where:

the common ratio of $P$ expressed in canonical form is $\dfrac q p$
$k$ is an integer.


Corollary
Let $p$ and $q$ be integers.
Then the finite sequence $P = \sequence {a_j}_{0 \mathop \le j \mathop \le n}$ defined as:

$a_j = p^j q^{n - j}$
is a geometric sequence whose common ratio is $\dfrac p q$.


Proof
Let $r$ be the common ratio of $P$.
From Common Ratio in Integer Geometric Sequence is Rational, $r$ is a rational number.
Let $r = \dfrac q p$ be in canonical form.
Thus, by definition:

$p \perp q$

Let $a$ be the first term of $P$.
Then the sequence $P$ is:

$P = \paren {a, a \dfrac q p, a \dfrac {q^2} {p^2}, \ldots, a \dfrac {q^n} {p^n} }$
All the elements of $P$ are integers, so, in particular:

$a \dfrac {q^n} {p^n} \in \Z$

We have that: 

$p \perp q$
From Powers of Coprime Numbers are Coprime:

$q^n \perp p^n$
and so from Euclid's Lemma:

$p^n \divides a$

Thus:

$a = k p^n$
for some $k \in \Z$, and so:

$P = \paren {k p^n, k q p^{n - 1}, k q^2 p^{n - 2}, \ldots, k q^{n - 1} p, k q^n}$
$\blacksquare$





