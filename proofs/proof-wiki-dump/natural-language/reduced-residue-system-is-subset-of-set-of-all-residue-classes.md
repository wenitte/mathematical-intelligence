# 

Source: https://proofwiki.org/wiki/Reduced_Residue_System_is_Subset_of_Set_of_All_Residue_Classes

Theorem
Let $\Z_m$ be the set of set of residue classes modulo $m$.
Let $\Z'_m$ be the reduced residue system modulo $m$.

Then:

$\forall m \in \Z_{> 1}: \O \subset \Z'_m \subset \Z_m$


Proof
By definition of reduced residue system modulo $m$:

$\Z'_m = \set {x \in \Z_m: x \perp m}$
From Subset of Set with Propositional Function:

$\Z'_m \subseteq \Z_m$

We have that:

$\gcd \set {m, 0} = m$
Thus it follows that:

$m > 1 \implies \gcd \set {m, 0} \ne 1$
So:

$\eqclass 0 m \notin \Z'_m$
However:

$\eqclass 0 m \in \Z_m$
so:

$\Z'_m \ne \Z_m$
Thus:

$\Z'_m \subset \Z_m$

Then:

$\eqclass 1 m = 1 \implies 1 \perp m$
So:

$\forall m \in \Z: \eqclass 1 m \in \Z'_m$
Thus:

$\Z'_m \ne \O$
and therefore:

$\O \subset \Z'_m$
$\blacksquare$





