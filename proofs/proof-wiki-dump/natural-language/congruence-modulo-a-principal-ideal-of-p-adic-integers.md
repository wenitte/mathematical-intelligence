# 

Source: https://proofwiki.org/wiki/Congruence_Modulo_a_Principal_Ideal_of_P-adic_Integers



Theorem
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers for some prime $p$.
Let $\Z_p$ be the $p$-adic integers.
For any $\epsilon \in \R_{>0}$ and $a \in \Q_p$ let $\map B a$ denote the open ball of center $a$ of radius $\epsilon$. 
For any $\epsilon \in \R_{>0}$ and $a \in \Q_p$ let $\map { {B_\epsilon}^-} a$ denote the closed ball of center $a$ of radius $\epsilon$. 
For any $a \in \Z_p$ and $n \in \N$ let $a + p^n\Z_p$ denote the coset of $a$ modulo $p^n\Z_p$. 
For any $a, b \in \Z_p$ and $n \in \N$ let $x \equiv y \pmod{p^n \Z_p}$ denote congruence modulo the principal ideal $p^n\Z_p$.

Let $x, y \in \Z_p$.
Let $k \in \N$.

The following statements are equivalent:

$(1)\quad x \equiv y \pmod{p^{k+1} \Z_p}$
$(2)\quad x \in y + p^{k+1} \Z_p$
$(3)\quad x + p^{k+1} \Z_p = y + p^{k+1} \Z_p$
$(4)\quad x \in \map {B_{p^{-k}}} y$
$(5)\quad \norm{x - y}_p < p^{-k}$
$(6)\quad \map {B_{p^{-k}}} x = \map {B_{p^{-k}}} y$
$(7)\quad x \in \map {B^{\,-}_{p^{-k-1}}} y$
$(8)\quad \norm{x - y}_p \le p^{-k-1}$
$(9)\quad \map {B^{\,-}_{p^{-k-1}}} x = \map {B^{\,-}_{p^{-k-1}}} y$


Proof
Condition (1) is Equivalent to Condition (3)
We have:














\(\ds x \equiv y \pmod{p^{k+1} \Z_p}\)

\(\iff\)







\(\ds x - y \in p^{k+1} \Z_p\)





Definition of Congruence Modulo an Ideal














\(\ds \)

\(\iff\)







\(\ds x + p^{k+1} \Z_p = y + p^{k+1} \Z_p\)





Cosets are Equal iff Product with Inverse in Subgroup



$\Box$

Conditions (2), (3), (4), (5) and (6) are equivalent
Follows directly from Characterization of Open Ball in P-adic Numbers.
$\Box$

Conditions (2), (7), (8) and (9) are equivalent
Follows directly from Characterization of Closed Ball in P-adic Numbers.
$\blacksquare$





