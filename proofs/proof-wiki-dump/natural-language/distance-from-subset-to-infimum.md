# 

Source: https://proofwiki.org/wiki/Distance_from_Subset_to_Infimum

Theorem
Let $S \subseteq \R$ be a subset of the real numbers.
Suppose that the infimum $\inf S$ of $S$ exists.

Then:

$\map d {\inf S, S} = 0$
where $\map d {\inf S, S}$ is the distance between $\inf S$ and $S$.


Proof
By Distance between Element and Subset is Nonnegative:

$\map d {\inf S, S} \ge 0$
By definition of infimum:

$\forall \epsilon > 0: \exists s \in S: \map d {\inf S, s} < \epsilon$
meaning that, by nature of the infimum and the definition of $\map d {\inf S, S}$:

$\forall \epsilon > 0: \map d {\inf S, S} < \epsilon$

Together, these two observations lead to the conclusion that:

$\map d {\inf S, S} = 0$
as desired.
$\blacksquare$





