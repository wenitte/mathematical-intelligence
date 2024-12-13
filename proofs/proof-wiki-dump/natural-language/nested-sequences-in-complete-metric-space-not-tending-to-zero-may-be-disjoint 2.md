# 

Source: https://proofwiki.org/wiki/Nested_Sequences_in_Complete_Metric_Space_not_Tending_to_Zero_may_be_Disjoint

Theorem
Let $M = \struct {A, d}$ be a complete metric space.
Let $\family {S_k}_{k \mathop \in \N}$ be a nested sequence of closed balls in $M$.
Let the radii of $\family {S_k}_{k \mathop \in \N}$ be convergent in $M$, but not to zero.

Then it is not necessarily the case that their intersection $\ds \bigcap S_k$ is non-empty.


Proof
Let $M = \struct {A, d}$ be Sierpinski's metric space:

$A = \set {x_i: i = 1, 2, 3, \ldots}$
$\map d {x_i, x_j} = 1 + \dfrac 1 {i + j}$

Let $S_k = \set {y \in A: \map d {y, x_k} \le 1 + \dfrac 1 {2 n} }$.
From Nested Sequence of Closed Balls in Sierpinski's Metric Space with Empty Intersection:

$\ds \bigcap S_k = \O$
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $5$: Metric Spaces: Complete Metric Spaces




