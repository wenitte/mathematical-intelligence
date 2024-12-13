# 

Source: https://proofwiki.org/wiki/Null_Sets_Closed_under_Subset/Resolution_of_the_Identity

Theorem
Let $X$ be a topological space.
Let $\map \BB X$ be the Borel $\sigma$-algebra of $X$.
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\map B {\HH}$ be the space of bounded linear transformations on $\HH$.
Let $\EE : \map \BB X \to \map B {\HH}$ be a resolution of the identity.
Let $E, E' \in \map \BB X$ be such that:

$E \subseteq E'$ and $\map \EE {E'} = {\mathbf 0}_{\map B \HH}$

Then $\map \EE E = {\mathbf 0}_{\map B \HH}$.


Proof 1
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


Proof 2
Let $\le_{\map B \HH}$ be the canonical preordering on $\map B \HH$.
From Measure is Monotone: Resolution of the Identity, we have:

$\map \EE E \le_{\map B \HH} \map \EE {E'} = {\mathbf 0}_{\map B \HH}$
On the other hand from Bounds on Projection in Unital C*-Algebra, we have:

${\mathbf 0}_{\map B \HH} \le_{\map B \HH} \map \EE E$
From Canonical Preordering of C*-Algebra is Antisymmetric, we then have:

$\map \EE E = {\mathbf 0}_{\map B \HH}$
$\blacksquare$





