# 

Source: https://proofwiki.org/wiki/Monomorphism_Image_is_Isomorphic_to_Domain

Theorem
The image of a monomorphism is isomorphic to its domain.

That is, if $\phi: S_1 \to S_2$ is a monomorphism, then:

$\phi: S_1 \to \Img \phi$
is an isomorphism.


Proof
Let $\struct {S_1, \circ_1}$ and $\struct {S_2, \circ_2}$ be closed algebraic structures.
Let $\phi$ be a monomorphism from $\struct {S_1, \circ_1}$ to $\struct {S_2, \circ_2}$.
Let $T = \Img \phi$ be the image of $\phi$.
By Morphism Property Preserves Closure, $\struct {T, \circ_2}$ is closed.
As $\phi$ is a monomorphism, it is by definition an injective homomorphism.
From Restriction of Injection is Injection, $\phi: S_1 \to \Img \phi$ is an injection.
From Restriction of Mapping to Image is Surjection, $\phi: S_1 \to \Img \phi$ is a surjection.
Thus $\phi \to \Img \phi$ is by definition a bijection.
Thus $\phi: S_1 \to \Img \phi$ is a bijective homomorphism.
Hence, by definition, $\phi: S_1 \to \Img \phi$ is an isomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 47.6$ Homomorphisms and their elementary properties




