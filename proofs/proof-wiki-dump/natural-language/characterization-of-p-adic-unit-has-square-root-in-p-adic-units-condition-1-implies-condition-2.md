# 

Source: https://proofwiki.org/wiki/Characterization_of_P-adic_Unit_has_Square_Root_in_P-adic_Units/Condition_1_implies_Condition_2

Theorem
Let $\Z_p$ be the $p$-adic integers for some prime $p \ne 2$.
Let $Z_p^\times$ be the set of $p$-adic units. 
Let $u \in Z_p^\times$ be a $p$-adic unit.
Let $u = c_0 + c_1p + c_2p^2 + \ldots$ be the $p$-adic expansion of $u$.
Let there exist $x \in \Z_p^\times$ such that $x^2 = u$.

Then:

$c_0$ is a quadratic residue of $p$
Proof
From Partial Sum Congruent to P-adic Integer Modulo Power of p:

$u \equiv c_0 \pmod {p\Z_p}$

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
$\blacksquare$





