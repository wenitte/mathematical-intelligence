# 

Source: https://proofwiki.org/wiki/Composite_of_Monomorphisms_is_Monomorphism

Theorem
Let:

$\struct {S_1, \circ_1, \circ_2, \ldots, \circ_n}$
$\struct {S_2, *_1, *_2, \ldots, *_n}$
$\struct {S_3, \oplus_1, \oplus_2, \ldots, \oplus_n}$
be algebraic structures.
Let:

$\phi: \struct {S_1, \circ_1, \circ_2, \ldots, \circ_n} \to \struct {S_2, *_1, *_2, \ldots, *_n}$
$\psi: \struct {S_2, *_1, *_2, \ldots, *_n} \to \struct {S_3, \oplus_1, \oplus_2, \ldots, \oplus_n}$
be monomorphisms.
Then the composite of $\phi$ and $\psi$ is also a monomorphism.


Proof
From Composite of Homomorphisms on Algebraic Structure is Homomorphism, $\psi \circ \phi$ is a homomorphism.
From Composite of Injections is Injection, $\psi \circ \phi$ is an injection.
A monomorphism is an injective homorphism.
Hence $\psi \circ \phi$ is a monomorphism.
$\blacksquare$


Sources
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\S 1.2$




