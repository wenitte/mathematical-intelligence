# 

Source: https://proofwiki.org/wiki/Scalar-Valued_Measure_associated_with_Resolution_of_Identity_is_Positive_Measure_if_Equal_Vectors

Theorem
Let $X$ be a topological space.
Let $\map \BB X$ be the Borel $\sigma$-algebra of $X$.
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\map B {\HH}$ be the space of bounded linear transformations on $\HH$.
Let $\EE : \map \BB X \to \map B {\HH}$ be a resolution of the identity.
For each $x, y \in \HH$, define $\EE_{x, y} : \map \BB X \to \C$ by:

$\map {\EE_{x, y} } A = \innerprod {\map \EE A x} y$
for each $A \in \map \BB X$.

If $x = y$, then $\EE_{x, y} := \EE_x$ is a measure with total variation $\norm x^2$. 


Proof
Let $A \in \map \BB X$. 
We then have:














\(\ds \map {\EE_x} A\)

\(=\)







\(\ds \innerprod {\map \EE A x} x\)




















\(\ds \)

\(=\)







\(\ds \innerprod {\map \EE A^2 x} x\)





Orthogonal Projection is Projection














\(\ds \)

\(=\)







\(\ds \innerprod {\map \EE A x} {\map \EE A x}\)





from Characterization of Projections, $\map \EE A$ is Hermitian














\(\ds \)

\(=\)







\(\ds \norm {\map \EE A x}^2\)





Definition of Inner Product Norm














\(\ds \)

\(\ge\)







\(\ds 0\)









Hence $\EE_x$ is a measure.

Let $\norm {\EE_x}$ be the total variation of $\EE_x$.
Then:














\(\ds \norm {\EE_x}\)

\(=\)







\(\ds \map {\EE_x} X\)





Definition of Total Variation














\(\ds \)

\(=\)







\(\ds \innerprod {\map \EE X x} x\)




















\(\ds \)

\(=\)







\(\ds \innerprod x x\)





$(1)$ in Definition of Resolution of the Identity














\(\ds \)

\(=\)







\(\ds \norm x^2\)





Definition of Inner Product Norm



$\blacksquare$





