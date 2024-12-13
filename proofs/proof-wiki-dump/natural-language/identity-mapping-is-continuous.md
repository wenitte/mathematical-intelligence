# 

Source: https://proofwiki.org/wiki/Identity_Mapping_is_Continuous



Theorem
Let $T = \struct {S, \tau}$ be a topological space.

The identity mapping $I_S: S \to S$ defined as:

$\forall x \in S: \map {I_S} x = x$
is a continuous mapping.


Metric Space
Let $M = \struct {A, d}$ be a metric space.

The identity mapping $I_A: A \to A$ defined as:

$\forall x \in A: \map {I_A} x = x$
is a continuous mapping.


Proof
Let $U \in \tau$.
We have Identity Mapping is Bijection.
So $I_S^{-1}$ is well-defined and:

$\forall x \in U: \map {I_S^{-1} } x = x$
Thus $I_S^{-1} \sqbrk U = U \in \tau$.
Hence, by definition of continuous mapping, $I_S$ is continuous.
$\blacksquare$


Also see
Definition:Finer Topology
Definition:Coarser Topology
Identity Mapping to Coarser Topology is Continuous


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.1$: Topological Spaces: Proposition $3.1.10 \ \text{(a)}$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 5$




