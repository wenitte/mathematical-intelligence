# 

Source: https://proofwiki.org/wiki/Localic_Functor_is_Covariant


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\mathbf{Top}$ denote the category of topological spaces.
Let $\mathbf{Loc_*}$ denote the category of locales with localic mappings.

Then:

the localic functor $\mathbf {Lc} : \mathbf{Top} \to \mathbf{Loc_*}$ is a covariant functor
Proof
Object Functor is Well-Defined
Let $T$ be a topological space.

By definition of localic object functor:

$\map {\mathbf {Lc}} T$ is the locale of $T$

From Locale of Topological Space is Locale:

$\map {\mathbf {Lc}} T$ is a locale

By definition of category of locales with localic mappings:

$\map {\mathbf {Lc}} T$ is an object of $\mathbf{Loc_*}$

It follows that the object functor of $\mathbf{Lc}$ is well-defined.
$\Box$

Arrow Functor is Well-Defined
Let $f$ be a continuous mapping between topological spaces.

By definition of localic arrow functor:

$\map {\mathbf {Lc}} f$ is the localic mapping induced by $f$

By definition of localic mapping induced by continuous mapping:

$\map {\mathbf {Lc}} f$ is a localic mapping

By definition of category of locales with localic mappings:

$\map {\mathbf {Lc}} f$ is a morphism of $\mathbf{Loc_*}$

It follows that the arrow functor of $\mathbf{Lc}$ is well-defined.
$\Box$

Arrow Functor Preserves Composites
Let $f$ and $g$ be continuous mappings such that $g \circ f$ exists.

Let $\map \Omega f$ denote the frame homomorphism of $f$.
By definition of localic mapping induced by continuous mapping:

$\tuple{\map {\mathbf {Lc}} f, \map \Omega f}$ is a Galois connection

Let $\map \Omega g$ denote the frame homomorphism of $g$.
By definition of localic mapping induced by continuous mapping:

$\tuple{\map {\mathbf {Lc}} g, \map \Omega g}$ is a Galois connection

Let $\map \Omega {g \circ f}$ denote the frame homomorphism of $g \circ f$.
By definition of localic mapping induced by continuous mapping:

$\tuple{\map {\mathbf {Lc}} {g \circ f}, \map \Omega {g \circ f}}$ is a Galois connection

From Composition of Galois Connections is Galois Connection:

$\tuple{\map {\mathbf {Lc}} g \circ \map {\mathbf {Lc}} f, \map \Omega f \circ \map \Omega g}$ is a Galois connection

From Frame of Open Sets Functor is Contravariant

$\map \Omega {g \circ f} = \map \Omega f \circ \map \Omega g$

From Galois Connection is Unique for Given Lower Adjoint:

$\map {\mathbf {Lc}} {g \circ f} = \map {\mathbf {Lc}} g \circ \map {\mathbf {Lc}} f$

It follows that the arrow functor of $\mathbf{Lc}$ preserves composites.
$\Box$

Arrow Functor Preserves Identities
Let $T = \struct{S, \tau}$ be a topological space.
Let $\operatorname{id}_T:T \to T$ be the identity of $T$.

Let $\map \Omega {\operatorname{id}_T}$ denote the frame homomorphism of $\operatorname{id}_T$.
By definition of localic mapping induced by continuous mapping:

$\tuple{\map {\mathbf {Lc}} {\operatorname{id}_T}, \map \Omega {\operatorname{id}_T}}$ is a Galois connection

From Frame of Open Sets Functor is Contravariant:

$\map \Omega {\operatorname{id}_T} = \operatorname{id}_{\map \Omega T}$
where $\operatorname{id}_{\map \Omega T}: \map \Omega T \to \map \Omega T$ is the identity mapping on $\map \Omega T$.

From Identity Mapping forms Galois Connection:

$\tuple{\operatorname{id}_{\map \Omega T},\operatorname{id}_{\map \Omega T}}$ is a Galois connection.

From Galois Connection is Unique for Given Lower Adjoint:

$\map {\mathbf {Lc}} {\operatorname{id}_T} = \operatorname{id}_{\map \Omega T}$

It follows that the arrow functor of $\mathbf{Lc}$ preserves identities.
$\Box$

It follows that $\mathbf {Lc}$ is a covariant functor by definition.
$\blacksquare$

Sources
2012: Jorge Picado and Aleš Pultr: Frames and Locales: Chapter $\text{II}$: Frames and Locales. Spectra, $\S 2.$ Locales and localic maps, $2.4$ Definition




