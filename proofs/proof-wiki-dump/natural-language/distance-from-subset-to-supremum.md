# 

Source: https://proofwiki.org/wiki/Distance_from_Subset_to_Supremum

Theorem
Let $S \subseteq \R$ be a subset of the real numbers.
Suppose that the supremum $\sup S$ of $S$ exists.

Then:

$\map d {\sup S, S} = 0$
where $\map d {\sup S, S}$ is the distance between $\sup S$ and $S$.


Proof
By Distance between Element and Subset is Nonnegative:

$\map d {\sup S, S} \ge 0$
By definition of supremum:

$\forall \epsilon > 0: \exists s \in S: \map d {\sup S, s} < \epsilon$
meaning that, by nature of the infimum and the definition of $\map d {\sup S, S}$:

$\forall \epsilon > 0: \map d {\sup S, S} < \epsilon$

Together, these two observations lead to the conclusion that:

$\map d {\sup S, S} = 0$
as desired.
$\blacksquare$


Also see
Distance from Subset to Infimum




