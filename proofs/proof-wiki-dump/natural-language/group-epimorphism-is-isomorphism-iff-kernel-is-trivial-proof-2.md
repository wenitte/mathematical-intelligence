# 

Source: https://proofwiki.org/wiki/Group_Epimorphism_is_Isomorphism_iff_Kernel_is_Trivial/Proof_2

Theorem
Let $\struct {G, \oplus}$ and $\struct {H, \odot}$ be groups.
Let $\phi: \struct {G, \oplus} \to \struct {H, \odot}$ be a group epimorphism.
Let $e_G$ and $e_H$ be the identities of $G$ and $H$ respectively.
Let $K = \map \ker \phi$ be the kernel of $\phi$.

Then:

the epimorphism $\phi$ is an isomorphism
if and only if

$K = \set {e_G}$


Proof
From Kernel is Trivial iff Group Monomorphism, $\phi$ is a monomorphism if and only if $K = \set {e_G}$.
By definition, a group $G$ is an epimorphism is an isomorphism if and only if $G$ is also a monomorphism.
Hence the result.
$\blacksquare$





