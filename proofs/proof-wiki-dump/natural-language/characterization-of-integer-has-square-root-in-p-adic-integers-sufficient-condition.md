# 

Source: https://proofwiki.org/wiki/Characterization_of_Integer_has_Square_Root_in_P-adic_Integers/Sufficient_Condition

Theorem
Let $\Z_p$ be the $p$-adic integers for some prime $p \ne 2$.
Let $a \in Z$ be an integer such that $p \nmid a$.
Let $a$ be a quadratic residue of $p$.

Then:

$\exists x \in \Z_p : x^2 = a$
Proof
Let $F \in \Z[X]$ be the polynomial:

$\map F X = X^2 - a$
By definition of formal derivative the formal derivative of $F$ is:

$\map {F'} X = 2X$

Let $a$ be a quadratic residue of $p$.
By definition of quadratic residue of $p$:

$\exists b \in \Z : a \equiv b^2 \pmod p$

Then:

$\map F b = b^2 - a \equiv 0 \pmod p$
and

$\map {F'} b = 2b$

By hypothesis:

$p \nmid 2$
and

$p \nmid b^2$
From the contrapositive statement of Divisor Divides Multiple:

$p \nmid b$
From the contrapositive statement of Euclid's Lemma for Prime Divisors:

$p \nmid 2b$
Hence:

$\map {F'} b = 2b \not\equiv 0 \pmod p$

From Congruence Modulo Equivalence for Integers in P-adic Integers:

$\map F b \equiv 0 \pmod {p\Z}$
and

$\map {F'} b \not\equiv 0 \pmod {p\Z}$

From Hensel's Lemma for P-adic Integers:

$\exists x \in \Z_p : \map F x = 0$
That is:

$\exists x \in \Z_p : x^2 = a$
$\blacksquare$





