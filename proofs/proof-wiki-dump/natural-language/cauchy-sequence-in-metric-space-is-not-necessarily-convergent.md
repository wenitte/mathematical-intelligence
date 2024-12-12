# 

Source: https://proofwiki.org/wiki/Cauchy_Sequence_in_Metric_Space_is_not_necessarily_Convergent

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $\sequence {x_n}$ be a Cauchy sequence in $M$.

Then it is not necessarily the case that $M$ is a convergent sequence in $M$.


Proof
Let $A \subseteq \R$ be the set of all points on $\R$ defined as:

$A := \set {\dfrac 1 n : n \in \Z_{>0} }$
Let $M = \struct {A, \tau_d}$ be the integer reciprocal space under the usual (Euclidean) topology.
Let $\sequence {x_n}$ be a sequence in $A$ that converges to the limit $l \in A$.
From Integer Reciprocal Space contains Cauchy Sequence with no Limit, $\sequence {x_n}$ is a Cauchy sequence in $M$ which does not converge in $M$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $5$: Metric Spaces: Complete Metric Spaces




