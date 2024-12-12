# 

Source: https://proofwiki.org/wiki/Epimorphism_Preserves_Groups



Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be algebraic structures.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be an epimorphism.
Let $\struct {S, \circ}$ be a group.

Then $\struct {T, *}$ is also a group.


Proof
From Epimorphism Preserves Semigroups, if $\struct {S, \circ}$ is a semigroup then so is $\struct {T, *}$.
From Epimorphism Preserves Identity, if $\struct {S, \circ}$ has an identity $e_S$, then $\map \phi {e_S}$ is the identity for $*$.
From Epimorphism Preserves Inverses, if $x^{-1}$ is an inverse of $x$ for $\circ$, then $\map \phi {x^{-1} }$ is an inverse of $\map \phi x$ for $*$.
The result follows from the definition of group.
$\blacksquare$


Warning
Note that this result is applied to epimorphisms.
For a general homomorphism which is not surjective, nothing definite can be said about the behaviour of the elements of its codomain which are not part of its image.


Also see
Isomorphism Preserves Groups
Epimorphism Preserves Associativity
Epimorphism Preserves Commutativity
Epimorphism Preserves Identity
Epimorphism Preserves Inverses
Epimorphism Preserves Semigroups
Epimorphism Preserves Distributivity


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Theorem $12.2$: Corollary
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.1$




