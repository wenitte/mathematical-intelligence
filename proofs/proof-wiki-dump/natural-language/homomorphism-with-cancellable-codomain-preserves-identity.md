# 

Source: https://proofwiki.org/wiki/Homomorphism_with_Cancellable_Codomain_Preserves_Identity



Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be algebraic structures.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be a homomorphism.
Let $\struct {S, \circ}$ have an identity $e_S$.
Let $\struct {T, *}$ have an identity $e_T$.
Let every element of $\struct {T, *}$ be cancellable.

Then $\map \phi {e_S}$ is the identity $e_T$.


Proof
Let $\struct {S, \circ}$ be an algebraic structure in which $\circ$ has an identity $e_S$.
Let $\struct {T, *}$ be an algebraic structure in which $*$ has an identity $e_T$.
Let $\struct {T, *}$ be such that every element is cancellable.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be a homomorphism.

Every element of $\struct {T, *}$ is cancellable.
Suppose there is an idempotent element in $\struct {T, *}$
So from Identity is only Idempotent Cancellable Element, it must be the identity $e_T$.
Thus:














\(\ds \map \phi {e_S} * \map \phi {e_S}\)

\(=\)







\(\ds \map \phi {e_S \circ e_S}\)





Definition of Morphism Property














\(\ds \)

\(=\)







\(\ds \map \phi {e_S}\)





Definition of Identity Element




So $\map \phi {e_S}$ is idempotent in $\struct {T, *}$ and the result follows.
$\blacksquare$


Also see
Epimorphism Preserves Identity
Homomorphism with Identity Preserves Inverses


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Theorem $12.3: \ 1^\circ$




