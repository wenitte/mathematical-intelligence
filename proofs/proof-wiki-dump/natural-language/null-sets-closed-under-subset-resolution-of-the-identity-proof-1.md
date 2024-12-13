# 

Source: https://proofwiki.org/wiki/Null_Sets_Closed_under_Subset/Resolution_of_the_Identity/Proof_1

Theorem
Let $X$ be a topological space.
Let $\map \BB X$ be the Borel $\sigma$-algebra of $X$.
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\map B {\HH}$ be the space of bounded linear transformations on $\HH$.
Let $\EE : \map \BB X \to \map B {\HH}$ be a resolution of the identity.
Let $E, E' \in \map \BB X$ be such that:

$E \subseteq E'$ and $\map \EE {E'} = {\mathbf 0}_{\map B \HH}$

Then $\map \EE E = {\mathbf 0}_{\map B \HH}$.


Proof
For each $x, y \in \HH$, define $\EE_{x, y} : \map \BB X \to \C$ by:

$\map {\EE_{x, y} } A = \innerprod {\map \EE A x} y$
for each $A \in \map \BB X$.
We then have:

$\map {\EE_{x, y} } {E'} = 0$
for each $x, y \in \HH$.
From Null Sets Closed under Subset, we have $\map {\EE_{x, y} } E = 0$ for each $x, y \in \HH$.
That is, $\innerprod {\map \EE E x} y = 0$ for all $x, y \in \HH$.
From Linear Subspace Dense iff Zero Orthocomplement, we have $\HH^\bot = \set { {\mathbf 0}_\HH}$ and hence $\map \EE E x = {\mathbf 0}_\HH$ for each $x \in \HH$.
Hence $\map \EE E = {\mathbf 0}_{\map B \HH}$.
$\blacksquare$





