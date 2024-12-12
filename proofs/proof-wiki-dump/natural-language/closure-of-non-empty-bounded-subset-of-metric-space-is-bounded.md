# 

Source: https://proofwiki.org/wiki/Closure_of_Non-Empty_Bounded_Subset_of_Metric_Space_is_Bounded

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $S \subseteq A$ be bounded in $M$.

Then:

$\map \cl S$ is also bounded in $M$.
where $\map \cl S$ denotes the closure of $S$ in $M$.


Proof
By definition of bounded:

$S$ is bounded if and only if:
$\exists K \in \R: \forall x, y \in M': \map {d_B} {x, y} \le K$
That is, such that $S$ has a diameter $K$.

From Diameter of Closure of Subset is Diameter of Subset, if $S$ has a diameter $K$, then so does $\map \cl S$.
That is, $\map \cl S$ is also bounded.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 32$




