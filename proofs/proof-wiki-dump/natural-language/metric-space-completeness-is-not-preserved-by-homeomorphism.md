# 

Source: https://proofwiki.org/wiki/Metric_Space_Completeness_is_not_Preserved_by_Homeomorphism

Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $\phi: M_1 \to M_2$ be a homeomorphism.

If $M_1$ is complete then it is not necessarily the case that so is $M_2$.


Proof
Let $\Z_{>0}$ be the set of (strictly) positive integers.
Let $d: \Z_{>0} \times \Z_{>0} \to \R$ be the usual (Euclidean) metric on $\Z_{>0}$.
Let $\delta: \Z_{>0} \times \Z_{>0} \to \R$ be the metric on $\Z_{>0}$ defined as:

$\forall x, y \in \Z_{>0}: \map \delta {x, y} = \dfrac {\size {x - y} } {x y}$
Let $\tau_d$ denote the metric topology for $d$.
Let $\tau_\delta$ denote the metric topology for $\delta$.

From Topologies induced by Usual Metric and Scaled Euclidean Metric on Positive Integers are Homeomorphic:

$\tau_d$ and $\tau_\delta$ are homeomorphic.

This article, or a section of it, needs explaining.In particular: review link above: the topologies are equivalent but they are not themselves homeomorphic metric spacesYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
From Positive Integers under Usual Metric is Complete Metric Space:

$\struct {\Z_{>0}, d}$ is a complete metric space.
However, from Positive Integers under Scaled Euclidean Metric is not Complete Metric Space:

$\struct {\Z_{>0}, \delta}$ is not a complete metric space.

Hence the result.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $5$: Metric Spaces: Complete Metric Spaces




