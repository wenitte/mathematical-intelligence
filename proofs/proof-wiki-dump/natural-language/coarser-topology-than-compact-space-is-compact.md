# 

Source: https://proofwiki.org/wiki/Coarser_Topology_than_Compact_Space_is_Compact

Theorem
Let $S$ be a set.
Let $\tau_1$ and $\tau_2$ be topologies on $S$ such that $\tau_1$ is coarser than $\tau_2$:

$\tau_1 \subseteq \tau_2$
Let $\struct {S, \tau_2}$ be a compact space.

Then $\struct {S, \tau_1}$ is also compact.


Proof
Let $\struct {S, \tau_2}$ be a compact space as asserted.
Let $I_S: \struct {S, \tau_2} \to \struct {S, \tau_1}$ denote the identity mapping on $S$:

$\forall x \in S: \map {I_S} x = x$
From Identity Mapping to Coarser Topology is Continuous, $I_S$ is continuous.
We also have the result Identity Mapping is Surjection.
Hence we apply Compactness is Preserved under Continuous Surjection.
The result follows.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $5$: Compact spaces: Exercise $5.10: 4$




