# 

Source: https://proofwiki.org/wiki/Residue_Classes_form_Partition_of_Integers

Theorem
Let $m \in \Z_{>0}$ be a (strictly) positive integer.
Let $\Z_m$ be the set of residue classes modulo $m$:

$\Z_m = \set {\eqclass 0 m, \eqclass 1 m, \dotsc, \eqclass {m - 1} m}$

Then $\Z_m$ forms a partition of $\Z$.


Proof
By definition of the set of residue classes modulo $m$, $\Z_m$ is the quotient set of congruence modulo $m$:

$\Z_m = \dfrac \Z {\RR_m}$
where $\RR_m$ is the congruence relation modulo $m$ on the set of all $a, b \in \Z$:

$\RR_m = \set {\tuple {a, b} \in \Z \times \Z: \exists k \in \Z: a = b + k m}$

By the Fundamental Theorem on Equivalence Relations, $\Z_m$ is a partition of $\Z$.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 18.2$: Congruence classes




