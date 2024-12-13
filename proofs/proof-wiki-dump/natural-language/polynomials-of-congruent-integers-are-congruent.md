# 

Source: https://proofwiki.org/wiki/Polynomials_of_Congruent_Integers_are_Congruent

Theorem
Let $x, y, m \in \Z$ be integers where $m \ne 0$.
Let:

$x \equiv y \pmod m$
where the notation indicates congruence modulo $m$.
Let $a_0, a_1, \ldots, a_r$ be integers.

Then:

$\ds \sum_{k \mathop = 0}^r a_k x^k \equiv \sum_{k \mathop = 0}^r a_k y^k \pmod m$


Proof
We have that:

$x \equiv y \pmod m$
From Congruence of Powers:

$x^k \equiv y^k \pmod m$
From Modulo Multiplication is Well-Defined:

$\forall k \in \set {0, 2, \ldots, r}: a_k x^k \equiv a_k y^k \pmod m$

The result follows from Modulo Addition is Well-Defined.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {4-1}$ Basic Properties of Congruences: Exercise $3$




