# 

Source: https://proofwiki.org/wiki/Isomorphism_Preserves_Semigroups/Proof_1

Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be algebraic structures.
Let $\phi: S \to T$ be an isomorphism.

If $\struct {S, \circ}$ is a semigroup, then so is $\struct {T, *}$.


Proof
If $\struct {S, \circ}$ is a semigroup, then by definition it is closed.
From Morphism Property Preserves Closure, $\struct {T, *}$ is therefore also closed.

If $\struct {S, \circ}$ is a semigroup, then by definition $\circ$ is associative.
From Isomorphism Preserves Associativity, $*$ is therefore also associative.

So $\struct {T, *}$ is closed, and $*$ is associative, and therefore by definition, $\struct {T, *}$ is a semigroup.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups




