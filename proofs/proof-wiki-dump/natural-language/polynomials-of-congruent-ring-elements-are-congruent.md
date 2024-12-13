# 

Source: https://proofwiki.org/wiki/Polynomials_of_Congruent_Ring_Elements_are_Congruent

Theorem
Let $R$ be a commutative ring with unity.
Let $I$ be an ideal of $R$.

Let $x, y \in R$.
Let:

$x \equiv y \pmod I$
where the notation indicates congruence modulo $I$.

Let $\map F X \in R \sqbrk X$ be a polynomial in one variable over $R$.

Then:

$\ds \map F x \equiv \map F y \pmod I$


Proof
Let $\map F X = \ds \sum_{k \mathop = 0}^r a_k X^k$ where $X$ is the indeterminate and $a_0, a_1, \ldots, a_r \in R$.
It has to be shown:

$\ds \sum_{k \mathop = 0}^r a_k x^k \equiv \sum_{k \mathop = 0}^r a_k y^k \pmod I$

From Left Cosets are Equal iff Product with Inverse in Subgroup:

$\forall a, b \in R: a \equiv b \pmod I  \iff a + I = b + I$

We have:














\(\ds \paren {\sum_{k \mathop = 0}^r a_k x^k} + I\)

\(=\)







\(\ds \sum_{k \mathop = 0}^r \paren {a_k x^k + I}\)





Quotient Ring Addition is Well-Defined














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^r \paren {\paren{a + I} \paren{x+ I}^k}\)





Quotient Ring Product is Well-Defined














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^r \paren {\paren{a + I} \paren{y+ I}^k}\)





Left Cosets are Equal iff Product with Inverse in Subgroup














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^r \paren {a_k y^k + I}\)





Quotient Ring Product is Well-Defined














\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop = 0}^r a_k r^k} + I\)





Quotient Ring Addition is Well-Defined








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^r a_k x^k\)

\(\equiv\)







\(\ds \sum_{k \mathop = 0}^r a_k y^k \pmod I\)





Left Cosets are Equal iff Product with Inverse in Subgroup



$\blacksquare$





