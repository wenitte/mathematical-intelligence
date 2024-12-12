# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Continuous_Mappings/Normed_Division_Ring/Multiple_Rule

Theorem
Let $\struct {S, \tau_{_S} }$ be a topological space.
Let $\struct {R, +, *, \norm {\,\cdot\,} }$ be a normed division ring.
Let $\tau_{_R}$ be the topology induced by the norm $\norm{\,\cdot\,}$.

Let $\lambda \in R$.
Let $f: \struct {S, \tau_{_S} } \to \struct {R, \tau_{_R} }$ be a continuous mappings.

Let $\lambda * f: S \to R$ be the mapping defined by:

$\forall x \in S: \map {\paren {\lambda * f} } x = \lambda * \map f x$
Let $f * \lambda: S \to R$ be the mapping defined by:

$\forall x \in S: \map {\paren {f * \lambda} } x = \map f x * \lambda$

Then:

$\lambda * f: \struct {S, \tau_{_S} } \to \struct {R, \tau_{_R} }$ is continuous
$f * \lambda: \struct {S, \tau_{_S} } \to \struct {R, \tau_{_R} }$ is continuous.


Proof
From Corollary to Normed Division Ring Operations are Continuous:

$\struct {R, +, *, \tau_{_R} }$ is a topological division ring.
From Multiple Rule for Continuous Mappings to Topological Division Ring:

$\lambda * f, f * \lambda: \struct {S, \tau_{_S} } \to \struct {R, \tau_{_R} }$ are continuous mappings.
$\blacksquare$


Also see
Multiple Rule for Continuous Mappings to Topological Division Ring




