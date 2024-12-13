# 

Source: https://proofwiki.org/wiki/Invertible_Continuous_Linear_Operator_is_Bijective



Theorem
Let $\struct {X, \norm {\, \cdot \,} }$ be the normed vector space.
Let $\map {CL} X := \map {CL} {X, X}$ be a continuous linear transformation space.
Let $I \in \map {CL} X$ be the identity element.
Suppose $A \in \map {CL} X$ is invertible.

Then $A$ is bijective.


Proof
$A$ is injective
Let $x, y \in X$ be such that $\map A x = \map A y$.
Then:

$A^{-1} \circ \map A x = A^{-1} \circ \map A y$
where $A^{-1}$ is the inverse of $A$.
By definition:

$A^{-1} \circ A = I$
Hence:

$x = y$
By definition, $A$ is injective.
$\Box$

$A$ is surjective
Let $y \in X$
Then:

$x := \map {A^{-1} } y \in X$
Moreover:














\(\ds \map A x\)

\(=\)







\(\ds A \circ \map {A^{-1} } y\)




















\(\ds \)

\(=\)







\(\ds \map I y\)




















\(\ds \)

\(=\)







\(\ds y\)









Hence:

$\forall y \in X : \exists x \in X : \map A x = y$
By definition, $A$ is surjective.
$\Box$
By definition, $A$ is bijective.
$\blacksquare$

Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.4$: Composition of continuous linear transformations




