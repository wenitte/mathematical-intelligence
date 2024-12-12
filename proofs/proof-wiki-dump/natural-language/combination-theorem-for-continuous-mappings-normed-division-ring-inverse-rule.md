# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Continuous_Mappings/Normed_Division_Ring/Inverse_Rule

Theorem
Let $\struct {S, \tau_{_S} }$ be a topological space.
Let $\struct {R, +, *, \norm {\,\cdot\,} }$ be a normed division ring.
Let $\tau_{_R}$ be the topology induced by the norm $\norm{\,\cdot\,}$.

Let $g: \struct {S, \tau_{_S} } \to \struct {R, \tau_{_R} }$ be continuous mappings.

Let $U = S \setminus \set {x: \map g x = 0}$
Let $g^{-1}: U \to R$ denote the mapping defined by:

$\forall x \in U : \map {g^{-1} } x = \map g x^{-1}$
Let $\tau_{_U}$ be the subspace topology on $U$.

Then:

$g^{-1}: \struct {U, \tau_{_U} } \to \struct {R, \tau_{_R} }$ is continuous.


Proof
From Corollary to Normed Division Ring Operations are Continuous:

$\struct {R, +, *, \tau_{_R} }$ is a topological division ring.
From Inverse Rule for Continuous Mappings to Topological Division Ring:

$g^{-1}: \struct {U, \tau_{_U} } \to \struct {R, \tau_{_R} }$ is a continuous mapping.
$\blacksquare$


Also see
Inverse Rule for Continuous Mappings to Topological Division Ring




