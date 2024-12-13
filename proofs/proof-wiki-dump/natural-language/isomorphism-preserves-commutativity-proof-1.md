# 

Source: https://proofwiki.org/wiki/Isomorphism_Preserves_Commutativity/Proof_1

Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be algebraic structures.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be an isomorphism.

Then $\circ$ is commutative if and only if $*$ is commutative.


Proof
Let $\struct {S, \circ}$ be an algebraic structure in which $\circ$ is commutative.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be an isomorphism.
As an isomorphism is surjective, it follows that:

$\forall u, v \in T: \exists x, y \in S: \map \phi x = u, \map \phi y = v$

So:














\(\ds u * v\)

\(=\)







\(\ds \map \phi x * \map \phi y\)





as $\phi$ is a surjection














\(\ds \)

\(=\)







\(\ds \map \phi {x \circ y}\)





Morphism Property














\(\ds \)

\(=\)







\(\ds \map \phi {y \circ x}\)





Commutativity of $\circ$














\(\ds \)

\(=\)







\(\ds \map \phi y * \map \phi x\)





Morphism Property














\(\ds \)

\(=\)







\(\ds v * u\)





by definition as above




As $\phi$ is an isomorphism, it follows from Inverse of Algebraic Structure Isomorphism is Isomorphism that $\phi^{-1}$ is also a isomorphism.
Thus the result for $\phi$ can be applied to $\phi^{-1}$.
$\blacksquare$





