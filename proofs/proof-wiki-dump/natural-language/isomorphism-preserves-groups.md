# 

Source: https://proofwiki.org/wiki/Isomorphism_Preserves_Groups



Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be algebraic structures.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be an isomorphism.

If $\struct {S, \circ}$ is a group, then so is $\struct {T, *}$.


Proof 1
From Isomorphism Preserves Semigroups, if $\struct {S, \circ}$ is a semigroup then so is $\struct {T, *}$.
From Isomorphism Preserves Identity, if $\struct {S, \circ}$ has an identity $e_S$, then $\map \phi {e_S}$ is the identity for $*$.
From Isomorphism Preserves Inverses, if $x^{-1}$ is an inverse of $x$ for $\circ$, then $\map \phi {x^{-1} }$ is an inverse of $\map \phi x$ for $*$.
The result follows from the definition of group.
$\blacksquare$


Proof 2
An isomorphism is an epimorphism.
The result follows as a direct corollary of Epimorphism Preserves Groups.
$\blacksquare$


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.5$: Exercise $3.4$




