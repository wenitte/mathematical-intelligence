# 

Source: https://proofwiki.org/wiki/Geometric_Sequence_in_Lowest_Terms_has_Coprime_Extremes

Theorem
A geometric sequence of integers in lowest terms has extremes which are coprime.

In the words of Euclid:

If as many numbers as we please in continued proportion be the least of those which have the same ratio with them, the extremes of them are prime to one another.
(The Elements: Book $\text{VIII}$: Proposition $3$)


Proof 1
Let $a_0, a_1, a_2, \ldots, a_n$ be natural numbers.
Let $\sequence {a_k}_{0 \mathop \le k \mathop \le n}$ be a geometric sequence with common ratio $r$.
Let $a_0, a_1, \ldots, a_n$ be the smallest such natural numbers.
From Proposition $33$ of Book $\text{VII} $: Least Ratio of Numbers, let $d_0, d_1$ be the smallest natural numbers such that $d_1 = r d_0$.
From Proposition $2$ of Book $\text{VIII} $: Construction of Geometric Sequence in Lowest Terms one can build a sequence of $3, 4, \ldots, n$ terms with the same property.
Let the geometric sequence so constructed with $n$ terms be $\sequence {b_k}_{0 \mathop \le k \mathop \le n}$.
From Proposition $22$ of Book $\text{VII} $: Numbers forming Fraction in Lowest Terms are Coprime, $d_0$ and $d_1$ are coprime.
From Porism to Proposition $2$ of Book $\text{VIII} $: Construction of Geometric Sequence in Lowest Terms, each of the extreme terms of the intermediate geometric sequences is a power of a natural number.
From Proposition $27$ of Book $\text{VII} $: Powers of Coprime Numbers are Coprime, each of those extreme terms is coprime.
We have that $a_0, \ldots, a_n$ are the smallest such natural numbers such that $\sequence {a_k}_{0 \mathop \le k \mathop \le n}$ is a geometric sequence with common ratio $r$.
We have also constructed $b_0, \ldots, b_n$ to have the same property.
Thus:

$a_0 = b_0, a_1 = b_1, \ldots, a_n = b_n$
and the result follows.
$\blacksquare$


Proof 2
Let $P$ be a geometric sequence of natural numbers of length $n$.
Let the common ratio of $P$ be expressed in canonical form as $\dfrac p q$.
From Construction of Geometric Sequence in Lowest Terms:

$P = \paren {q^n, p q^{n - 1}, p^2 q^{n - 2}, \ldots, p^{n - 1} q, p^n}$
By definition of canonical form:

$p \perp q$
It follows from Powers of Coprime Numbers are Coprime that:

$p^n \perp q^n$
Hence the result.
$\blacksquare$





