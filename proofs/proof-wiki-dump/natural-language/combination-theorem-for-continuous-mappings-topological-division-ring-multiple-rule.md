# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Continuous_Mappings/Topological_Division_Ring/Multiple_Rule

Theorem
Let $\struct {S, \tau_{_S} }$ be a topological space.
Let $\struct {R, +, *, \tau_{_R} }$ be a topological division ring.

Let $\lambda \in R$.
Let $f: \struct {S, \tau_{_S} } \to \struct {R, \tau_{_R} }$ be a continuous mapping.

Let $\lambda * f: S \to R$ be the mapping defined by:

$\forall x \in S: \map {\paren {\lambda * f} } x = \lambda * \map f x$
Let $f * \lambda : S \to R$ be the mapping defined by:

$\forall x \in S: \map {\paren {f * \lambda} } x = \map f x * \lambda$

Then 

$\lambda * f: \struct {S, \tau_{_S} } \to \struct {R, \tau_{_R} }$ is continuous
$f * \lambda: \struct {S, \tau_{_S} } \to \struct {R, \tau_{_R} }$ is continuous.


Proof
By definition of a topological division ring:

$\struct {R, +, *, \tau_{_R} }$ is a topological ring.
From Multiple Rule for Continuous Mappings to Topological Ring:

$\lambda * f, f * \lambda: \struct {S, \tau_{_S} } \to \struct {R, \tau_{_R} }$ are continuous mappings.
$\blacksquare$


Also see
Multiple Rule for Continuous Mappings to Topological Ring




