# 

Source: https://proofwiki.org/wiki/Characterization_of_Integer_has_Square_Root_in_P-adic_Integers



Theorem
Let $\Z_p$ be the $p$-adic integers for some prime $p \ne 2$.
Let $a \in Z$ be an integer such that $p \nmid a$.

Then:

$\exists x \in \Z_p : x^2 = a$
if and only if

$a$ is a quadratic residue of $p$.

That is, an integer $a$ not divisible by $p$ has a square root in $\Z_p$ ($p \ne 2$) if and only if $a$ is a quadratic residue of $p$.

Proof
Let $F \in \Z[X]$ be the polynomial:

$\map F X = X^2 - a$
By definition of formal derivative the formal derivative of $F$ is:

$\map {F'} X = 2X$
Necessary Condition
Let there exist $x$ such that $x^2 = a$.
By definition of root of polynomial:

$\map F X$ has a root in $\Z_p$.

From Characterization of Integer Polynomial has Root in P-adic Integers:

there exists an integer sequence $\sequence {a_n}$ such that:
$(1) \quad \ds \lim_{n \mathop \to \infty} {a_n} = a$
$(2) \quad \map F {a_n} \equiv 0 \mod {p^{n + 1} }$

We have:

$a_0^2 - a \equiv 0 \pmod p$
That is:

$a_0^2 \equiv a \pmod p$

Hence by definition:

$a$ is a quadratic residue of $p$.
$\Box$

Sufficient Condition
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

Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.7$ Hensel's Lemma and Congruences: Theorem $1.43$




