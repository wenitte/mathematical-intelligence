# 

Source: https://proofwiki.org/wiki/Characterization_of_P-adic_Unit_has_Square_Root_in_P-adic_Units



Theorem
Let $\Z_p$ be the $p$-adic integers for some prime $p \ne 2$.
Let $Z_p^\times$ be the set of $p$-adic units. 
Let $u \in Z_p^\times$ be a $p$-adic unit.
Let $u = c_0 + c_1p + c_2p^2 + \ldots$ be the $p$-adic expansion of $u$.

The following statements are equivalent::

$(1)\quad \exists x \in \Z_p^\times : x^2 = u$
$(2)\quad c_0$ is a quadratic residue of $p$
$(3)\quad \exists y \in \Z_p : y^2 \equiv u \pmod{p\Z_p}$


Proof
From Partial Sum Congruent to P-adic Integer Modulo Power of p:

$u \equiv c_0 \pmod {p\Z_p}$
$(1)$ implies $(2)$
Let there exist $x \in \Z_p^\times$ such that $x^2 = u$
Then:
$x^2 \equiv c_0 \pmod {p\Z_p}$

Let $x = x_0 + x_1p + x_2p^2 + x_3p^3 + \ldots$ be the $p$-adic expansion of $x$.
From Partial Sum Congruent to P-adic Integer Modulo Power of p:

$x \equiv x_0 \pmod {p\Z_p}$
Then:

$x_0^2 \equiv x^2 \equiv c_0 \pmod {p\Z_p}$

By definition of quadratic residue:

$c_0$ is a quadratic residue of $p$
$\Box$

$(2)$ implies $(3)$
Let $c_0$ be a quadratic residue of $p$.
By definition of quadratic residue:

$\exists x_0 \in \Z : x_0^2 \equiv c_0 \pmod {p\Z_p}$

Then:

$x_0^2 \equiv u \pmod {p\Z_p}$
$\Box$

$(3)$ implies $(1)$
Let there exist $y \in \Z_p$ such that $y^2 \equiv u \pmod {p\Z_p}$

Let $y = y_0 + y_1 p + y_2 p^2 + y_3 p^3 + \ldots$ be the $p$-adic expansion of $y$.
By definition of $p$-adic expansion:

$y_0 \in {0, 1, \ldots, p - 1}$
From P-adic Expansion of P-adic Unit:

$y_0 \ne 0$.
Hence:

$y_0 \in {1, 2, \ldots, p - 1}$
It follows that:

$p \nmid y_0$

From Partial Sum Congruent to P-adic Integer Modulo Power of p:

$y \equiv y_0 \pmod {p \Z_p}$
Then:

$y_0^2 \equiv y^2 \equiv u \pmod {p \Z_p}$

Let $F \in \Z \sqbrk X$ be the polynomial:

$\map F X = X^2 - u$
By definition of formal derivative the formal derivative of $F$ is:

$\map {F'} X = 2X$

We have:

$\map F {y_0} \equiv 0 \pmod p$
and

$\map {F'} {y_0} = 2 y_0$

By hypothesis:

$p \nmid 2$
From the contrapositive statement of Euclid's Lemma for Prime Divisors:

$p \nmid 2 y_0$
Hence:

$\map {F'} {y_0} = 2 y_0 \not \equiv 0 \pmod p$

From Congruence Modulo Equivalence for Integers in P-adic Integers:

$\map F {y_0} \equiv 0 \pmod {p \Z}$
and

$\map {F'} {y_0} \not \equiv 0 \pmod {p \Z}$

From Hensel's Lemma for P-adic Integers:

$\exists x \in \Z_p : \map F x = 0$
That is:

$\exists x \in \Z_p : x^2 = u$

It remains to show that $x \in \Z_p^\times$.
We have:














\(\ds \norm x_p^2\)

\(=\)







\(\ds \norm {x^2}_p\)





Non-Archimedean Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(=\)







\(\ds \norm u_p\)




















\(\ds \)

\(=\)







\(\ds 1\)





P-adic Unit has Norm Equal to One








\(\ds \leadsto \ \ \)





\(\ds \norm x_p\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \Z_p^\times\)





P-adic Unit has Norm Equal to One



$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.4$ Hensel's Lemma $\Q_p$, Theorem $3.4.3$
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.7$ Hensel's Lemma and Congruences: Exercise $36$




