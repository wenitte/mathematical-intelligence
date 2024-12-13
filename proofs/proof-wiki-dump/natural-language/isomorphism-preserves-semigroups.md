# 

Source: https://proofwiki.org/wiki/Isomorphism_Preserves_Semigroups

Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be algebraic structures.
Let $\phi: S \to T$ be an isomorphism.

If $\struct {S, \circ}$ is a semigroup, then so is $\struct {T, *}$.


Proof 1
If $\struct {S, \circ}$ is a semigroup, then by definition it is closed.
From Morphism Property Preserves Closure, $\struct {T, *}$ is therefore also closed.

If $\struct {S, \circ}$ is a semigroup, then by definition $\circ$ is associative.
From Isomorphism Preserves Associativity, $*$ is therefore also associative.

So $\struct {T, *}$ is closed, and $*$ is associative, and therefore by definition, $\struct {T, *}$ is a semigroup.
$\blacksquare$


Proof 2
An isomorphism is an epimorphism.
The result follows as a direct corollary of Epimorphism Preserves Semigroups.
$\blacksquare$





