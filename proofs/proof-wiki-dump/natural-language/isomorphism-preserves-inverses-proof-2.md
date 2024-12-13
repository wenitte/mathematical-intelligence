# 

Source: https://proofwiki.org/wiki/Isomorphism_Preserves_Inverses/Proof_2

Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be algebraic structures.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be an isomorphism.
Let $\struct {S, \circ}$ have an identity $e_S$.

Then $x^{-1}$ is an inverse of $x$ for $\circ$ if and only if $\map \phi {x^{-1} }$ is an inverse of $\map \phi x$ for $*$.

That is, if and only if:

$\map \phi {x^{-1} } = \paren {\map \phi x}^{-1}$


Proof
We have that an isomorphism is a homomorphism which is also a bijection.
By definition, an epimorphism is a homomorphism which is also a surjection.
That is, an isomorphism is an epimorphism which is also an injection.
Thus Epimorphism Preserves Inverses can be applied.
$\blacksquare$





