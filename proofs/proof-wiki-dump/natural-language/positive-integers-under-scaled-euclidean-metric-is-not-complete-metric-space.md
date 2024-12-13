# 

Source: https://proofwiki.org/wiki/Positive_Integers_under_Scaled_Euclidean_Metric_is_not_Complete_Metric_Space

Theorem
Let $\Z_{>0}$ be the set of (strictly) positive integers.
Let $\delta: \Z_{>0} \times \Z_{>0} \to \R$ be the scaled Euclidean metric on $\Z_{>0}$ defined as:

$\forall x, y \in \Z_{>0}: \map \delta {x, y} = \dfrac {\size {x - y} } {x y}$

Then $\struct {\Z_{>0}, \delta}$ is not a complete metric space.


Proof
Consider the sequence $\sequence {x_n}$ in $\Z_{>0}$ defined as:

$\forall n \in \N: x_n = n$
From Cauchy Sequence in Positive Integers under Scaled Euclidean Metric:

$\sequence {x_n}$ is a Cauchy sequence in $\struct {\Z_{>0}, \delta}$.
But $\sequence {x_n}$ is not convergent to any $m \in \Z_{>0}$.
Hence the result, by definition of complete metric space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $32$. Special Subsets of the Real Line: $10$




