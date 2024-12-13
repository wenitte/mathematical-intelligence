# 

Source: https://proofwiki.org/wiki/Isomorphism_Preserves_Identity/Proof_1

Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be algebraic structures.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be an isomorphism.

Then $\circ$ has an identity $e_S$ if and only if $\map \phi {e_S}$ is the identity for $*$.


Proof
Let $\struct {S, \circ}$ be an algebraic structure in which $\circ$ has an identity $e_S$.
Then $\forall x \in S: x \circ e_S = x = e_S \circ x$.
The result follows directly from the morphism property of $\circ$ under $\phi$:














\(\ds \map \phi {x \circ e_S}\)

\(=\)







\(\ds \map \phi x\)




















\(\ds \)

\(=\)







\(\ds \map \phi {e_S \circ x}\)




















\(\ds \map \phi x * \map \phi {e_S}\)

\(=\)







\(\ds \map \phi x\)




















\(\ds \)

\(=\)







\(\ds \map \phi {e_S} * \map \phi x\)










As $\phi$ is an isomorphism, it follows from Inverse of Algebraic Structure Isomorphism is Isomorphism that $\phi^{-1}$ is also a isomorphism.
Thus the result for $\map \phi {e_S}$ can be applied to $\map {\phi^{-1} } {\map \phi {e_S} }$.
$\blacksquare$





