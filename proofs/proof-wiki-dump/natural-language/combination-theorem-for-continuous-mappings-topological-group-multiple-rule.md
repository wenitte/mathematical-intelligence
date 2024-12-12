# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Continuous_Mappings/Topological_Group/Multiple_Rule

Theorem
Let $\struct {S, \tau_{_S} }$ be a topological space.
Let $\struct {G, *, \tau_{_G} }$ be a topological group.

Let $\lambda \in G$.
Let $f: \struct {S, \tau_{_S} } \to \struct {G, \tau_{_G} }$ be a continuous mapping.

Let $\lambda * f: S \to G$ be the mapping defined by:

$\forall x \in S: \map {\paren {\lambda * f} } x = \lambda * \map f x$
Let $f * \lambda : S \to G$ be the mapping defined by:

$\forall x \in S: \map {\paren {f * \lambda} } x = \map f x * \lambda$

Then:

$\lambda * f: \struct {S, \tau_{_S} } \to \struct {G, \tau_{_G} }$ is a continuous mapping
$f * \lambda: \struct {S, \tau_{_S} } \to \struct {G, \tau_{_G} }$ is a continuous mapping.


Proof
By definition, a topological group is a topological semigroup.
Hence $\struct {G, *, \tau_{_G}}$ is a topological semigroup.
From Multiple Rule for Continuous Mappings to Topological Semigroup:

$\lambda * f, f * \lambda: \struct {S, \tau_{_S} } \to \struct {G, \tau_{_G} }$ are continuous mappings.
$\blacksquare$


Also see
Multiple Rule for Continuous Mappings to Topological Semigroup




