# 

Source: https://proofwiki.org/wiki/Orthogonality_of_Resolution_of_the_Identity_evaluated_at_Disjoint_Sets

Theorem
Let $X$ be a topological space.
Let $\map \BB X$ be the Borel $\sigma$-algebra of $X$.
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\map B {\HH}$ be the space of bounded linear transformations on $\HH$.
Let $\EE : \map \BB X \to \map B {\HH}$ be a resolution of the identity.
Let $A, B \in \map \BB X$ be such that $A \cap B = \O$.

Then:

$\innerprod {\map \EE A x} {\map \EE B y} = 0$
for each $x, y \in \HH$.


Proof
From $(2)$ in the definition of a resolution of the identity, we have:

$\map \EE A \map \EE B = \map \EE {A \cap B} = \map \EE \O$
From $(1)$ in the definition of a resolution of the identity, we then have:

$\map \EE A \map \EE B = 0$
From Hilbert Space Projections with Zero Product are Pointwise Orthogonal, we therefore havE:

$\innerprod {\map \EE A x} {\map \EE B y} = 0$
for each $x, y \in \HH$.
$\blacksquare$





