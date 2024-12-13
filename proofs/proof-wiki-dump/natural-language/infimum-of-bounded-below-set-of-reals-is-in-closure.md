# 

Source: https://proofwiki.org/wiki/Infimum_of_Bounded_Below_Set_of_Reals_is_in_Closure



Theorem
Let $\R$ be the real number line with the  usual (Euclidean} metric.
Let $H \subseteq \R$ be a bounded below subset of $\R$ such that $H \ne \O$.
Let $l = \map \inf H$ be the infimum of $H$.

Then:

$l \in \map \cl H$
where $\map \cl H$ denotes the closure of $H$ in $\R$.


Proof
Let $\epsilon \in \R_{>0}$ be a strictly positive real number.
Let $\map {B_\epsilon} l$ be the open $\epsilon$-ball of $l$ in $\R$.
From Distance from Subset of Real Numbers:

$\map d {l, H} = 0$
Thus by definition of distance from subset:

$\exists x \in H: \map d {l, x} < \epsilon$
Thus $x \in \map {B_\epsilon} l$.
As $x \in H$ and $x \in \map {B_\epsilon} l$, from the definition of intersection:

$x \in H \cap \map {B_\epsilon} l$
The result follows from Condition for Point being in Closure.
$\blacksquare$


Also see
Supremum of Bounded Above Set of Reals is in Closure


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.7$: Definitions: Examples $3.7.13$




