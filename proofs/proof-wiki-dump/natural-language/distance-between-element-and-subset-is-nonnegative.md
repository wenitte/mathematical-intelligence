# 

Source: https://proofwiki.org/wiki/Distance_between_Element_and_Subset_is_Nonnegative

Theorem
Let $\struct {M, d}$ be a metric space.
Let $x \in M$ and $S \subseteq M$.

Then:

$\map d {x, S} \ge 0$
where $\map d {x, S}$ is the distance between $x$ and $S$.


Proof
By definition of the distance between $x$ and $S$:

$\map d {x, S} = \ds \inf_{s \mathop \in S} \map d {x, s}$
From the metric space axioms:

$\forall s \in M: \map d {x, s} \ge 0$
Hence by the nature of the infimum:

$\map d {x, S} \ge 0$
as desired.
$\blacksquare$





