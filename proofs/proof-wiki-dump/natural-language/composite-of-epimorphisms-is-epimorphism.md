# 

Source: https://proofwiki.org/wiki/Composite_of_Epimorphisms_is_Epimorphism

Theorem
Let:

$\struct {S_1, \circ_1, \circ_2, \ldots, \circ_n}$
$\struct {S_2, *_1, *_2, \ldots, *_n}$
$\struct {S_3, \oplus_1, \oplus_2, \ldots, \oplus_n}$
be algebraic structures.
Let:

$\phi: \struct {S_1, \circ_1, \circ_2, \ldots, \circ_n} \to \struct {S_2, *_1, *_2, \ldots, *_n}$
$\psi: \struct {S_2, *_1, *_2, \ldots, *_n} \to \struct {S_3, \oplus_1, \oplus_2, \ldots, \oplus_n}$
be epimorphisms.
Then the composite of $\phi$ and $\psi$ is also an epimorphism.


Proof
From Composite of Homomorphisms on Algebraic Structure is Homomorphism, $\psi \circ \phi$ is a homomorphism.
From Composite of Surjections is Surjection, $\psi \circ \phi$ is a surjection.
An epimorphism is a surjective homomorphism.
Hence $\psi \circ \phi$ is an epimorphism.
$\blacksquare$


Sources
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\S 1.2$




