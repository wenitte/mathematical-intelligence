# 

Source: https://proofwiki.org/wiki/Group_Epimorphism_is_Isomorphism_iff_Kernel_is_Trivial



Theorem
Let $\struct {G, \oplus}$ and $\struct {H, \odot}$ be groups.
Let $\phi: \struct {G, \oplus} \to \struct {H, \odot}$ be a group epimorphism.
Let $e_G$ and $e_H$ be the identities of $G$ and $H$ respectively.
Let $K = \map \ker \phi$ be the kernel of $\phi$.

Then:

the epimorphism $\phi$ is an isomorphism
if and only if

$K = \set {e_G}$


Proof 1
Necessary Condition
Let $\phi$ be an isomorphism.
Then by definition $\phi$ is a bijective homomorphism.
Thus by definition of bijection, $\phi$ is an injection.
By definition of injection, there exists exactly one element $x$ of $G$ such that $\map \phi x = e_H$.
From Epimorphism Preserves Identity, that element $x$ is $e_G$:

$\map \phi {e_G} = e_H$
Thus by definition of kernel:

$\map \ker \phi = \set {e_G}$
$\Box$


Sufficient Condition
Let $K := \map \ker \phi = \set {e_G}$.
From the Quotient Theorem for Epimorphisms:

$\RR_\phi$ is compatible with $\oplus$
and thus from Kernel is Normal Subgroup of Domain:

$K \lhd G$
From Congruence Relation induces Normal Subgroup, $\RR_\phi$ is the equivalence defined by $K$.
Let $\RR_K$ be the congruence modulo $K$ induced by $K$.

Suppose $\map \phi x = \map \phi y$.
Then:

$x \mathop {\RR_K} y$
as $\RR_\phi = \RR_K$ from Congruence Modulo Subgroup is Equivalence Relation.
Thus by Congruence Class Modulo Subgroup is Coset:

$x \oplus y^{-1} \in K$
Hence:

$x \oplus y^{-1} = e_G$
and so:

$x = y$
Thus $\phi$ is injective.
By definition, an injective epimorphism is a isomorphism.
$\blacksquare$


Proof 2
From Kernel is Trivial iff Group Monomorphism, $\phi$ is a monomorphism if and only if $K = \set {e_G}$.
By definition, a group $G$ is an epimorphism is an isomorphism if and only if $G$ is also a monomorphism.
Hence the result.
$\blacksquare$





