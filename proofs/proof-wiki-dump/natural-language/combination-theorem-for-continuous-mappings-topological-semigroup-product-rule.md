# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Continuous_Mappings/Topological_Semigroup/Product_Rule

Theorem
Let $\struct {S, \tau_{_S} }$ be a topological space.
Let $\struct {G, *, \tau_{_G} }$ be a topological semigroup.

Let $f, g: \struct {S, \tau_{_S} } \to \struct {G, \tau_{_G} }$ be continuous mappings.

Let $f * g: S \to G$ be the mapping defined by:

$\forall x \in S: \map {\paren {f * g} } x = \map f x * \map g x$

Then:

$f * g: \struct{S, \tau_{_S} } \to \struct {G, \tau_{_G} }$ is a continuous mapping.


Proof
Let $f \times g: S \to G \times G$ be the mapping defined by:

$\forall x \in S : \map {\paren {f \times g} } x = \tuple {\map f x, \map g x}$
From Pointwise Operation is Composite of Operation with Mapping to Cartesian Product:

$f * g = * \circ \paren {f \times g}$

Let $\tau$ be the product topology on $G \times G$.
From Corollary to Continuous Mapping to Product Space:

$f \times g : \struct{S, \tau_{_S}} \to \struct {G \times G, \tau}$ is a continuous mapping.
Now $* : \struct {G \times G, \tau} \to \struct {G, \tau_{_G} }$ is continuous by definition of a topological semigroup.
From Composite of Continuous Mappings is Continuous:

$* \circ \paren {f \times g}$ is continuous.
The result follows.
$\blacksquare$





