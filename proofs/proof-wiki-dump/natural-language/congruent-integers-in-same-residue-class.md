# 

Source: https://proofwiki.org/wiki/Congruent_Integers_in_Same_Residue_Class

Theorem
Let $m \in \Z_{>0}$ be a (strictly) positive integer.
Let $\Z_m$ be the set of residue classes modulo $m$:

$\Z_m = \set {\eqclass 0 m, \eqclass 1 m, \dotsc, \eqclass {m - 1} m}$

Let $a, b \in \set {0, 1, \ldots, m -1 }$.
Then:

$\eqclass a m = \eqclass b m \iff a \equiv b \pmod m$


Proof
By definition of the set of residue classes modulo $m$, $\Z_m$ is the quotient set of congruence modulo $m$:

$\Z_m = \dfrac \Z {\RR_m}$
where $\RR_m$ is the congruence relation modulo $m$ on the set of all $a, b \in \Z$:

$\RR_m = \set {\tuple {a, b} \in \Z \times \Z: \exists k \in \Z: a = b + k m}$

By the Fundamental Theorem on Equivalence Relations, $\Z_m$ is a partition of $\Z$.
Thus:

$\eqclass a m = \eqclass b m$
if and only if:

$x \in \eqclass a m \iff x \in \eqclass b m$
if and only if:

$a \equiv b \pmod m$
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 18.1$: Congruence classes




