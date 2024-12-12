# 

Source: https://proofwiki.org/wiki/Geometric_Sequence_of_Integers_with_Integer_Common_Ratio



Theorem
Let $P = \sequence {a_j}_{1 \mathop \le j \mathop \le n}$ be a geometric sequence of length $n$ consisting entirely of integers.
Let $r$ be the common ratio of $P$.

Then $r$ is an integer if and only if:

$\forall i, j \in \set {1, 2, \ldots, n}, i \le j: a_i \divides a_j$

That is, terms of $P$ divide later terms of $P$ if and only if $r$ is an integer.


Proof
Necessary Condition
Let $r$ be an integer.
By definition of geometric sequence, the terms of $P$ are in the form:

$a_k = b r^{k - 1}$
where $b$ and $k$ are integers.
It follows from Integer Multiplication is Closed that $a_k$ is an integer.
$\Box$


Sufficient Condition
From Common Ratio in Integer Geometric Sequence is Rational, $r$ is a rational number.
Let $r$ be expressed in canonical form as:

$r = \dfrac p q$
where, by definition of canonical form, $p \perp q$, that is, $p$ is coprime to $q$.

From Form of Geometric Sequence of Integers, the terms of $P$ are in the form:

$(1): \quad a_j = k q^{j - 1} p^{n - j}$

Let $a_i \divides a_j$.
From Powers of Coprime Numbers are Coprime:

$(2): \quad q^{j - i} \perp p^{j - i}$

Then:














\(\ds a_i\)

\(\divides\)







\(\ds a_j\)














\(\ds \leadsto \ \ \)





\(\ds k q^{i - 1} p^{n - i}\)

\(\divides\)







\(\ds k q^{j - 1} p^{n - j}\)





from $(1)$








\(\ds \leadsto \ \ \)

\(\ds \exists m \in \Z: \, \)



\(\ds m \paren {k q^{j - 1} p^{n - i} } q^{j - i}\)

\(=\)







\(\ds \paren {k q^{j - 1} p^{n - i} } p^{j - i}\)





Definition of Divisor of Integer








\(\ds \leadsto \ \ \)





\(\ds m q^{j - i}\)

\(=\)







\(\ds p^{j - i}\)





dividing both sides by $k q^{j - 1} p^{n - i}$








\(\ds \leadsto \ \ \)





\(\ds q^{j - i}\)

\(\divides\)







\(\ds p^{j - i}\)





Definition of Divisor of Integer




But from $(2)$:

$q^{j - i} \perp p^{j - i}$
Thus $q^{j - i} \divides p^{j - i}$ can happen only when $q^{j - 1} = q = 1$.
That is, when $r$ is an integer.
$\blacksquare$





