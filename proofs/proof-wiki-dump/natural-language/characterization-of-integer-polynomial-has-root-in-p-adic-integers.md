# 

Source: https://proofwiki.org/wiki/Characterization_of_Integer_Polynomial_has_Root_in_P-adic_Integers

Theorem
Let $\Z_p$ be the $p$-adic integers for some prime $p$.
Let $\map F X \in \Z \sqbrk X$ be a polynomial with integer coefficients.
Let $a \in \Z_p$.

Then:

$\map F a  = 0$
if and only if

there exists a sequence $\sequence{a_n}$ of integers:
$(1)\quad\ds\lim_{n \mathop \to \infty} {a_n} = a$
$(2)\quad\map F {a_n} \equiv 0 \mod {p^{n+1}}$

That is, a polynomial with integer coefficients has a root if and only if it has an integer root modulo $p^k$ for every $k \in \N_{>0}$.

Proof
From Characterization of Polynomial has Root in P-adic Integers:

$\map F a  = 0$
if and only if

there exists a sequence $\sequence{a_n}$ of integers:
$(1)\quad\ds\lim_{n \mathop \to \infty} {a_n} = a$
$(2)\quad\map F {a_n} \equiv 0 \mod {p^{n+1}\Z_p}$
By definition of a polynomial with integer coefficients:

$\forall n \in \N_{>0} : \map F {a_n} \in \Z$
From Congruence Modulo Equivalence for Integers in P-adic Integers:

$\map F a  = 0$
if and only if

there exists a sequence $\sequence{a_n}$ of integers:
$(1)\quad\ds\lim_{n \mathop \to \infty} {a_n} = a$
$(2)\quad\map F {a_n} \equiv 0 \mod {p^{n+1}}$
$\blacksquare$

Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.7$ Hensel's Lemma and Congruences: Theorem $1.42$




