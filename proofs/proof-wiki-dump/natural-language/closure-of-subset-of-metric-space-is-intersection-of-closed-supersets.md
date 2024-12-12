# 

Source: https://proofwiki.org/wiki/Closure_of_Subset_of_Metric_Space_is_Intersection_of_Closed_Supersets

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $H \subseteq A$ be a subset of $A$.
Let $H^-$ denote the closure of $H$.

Then $H^-$ is the intersection of all closed sets of $M$ of which $H$ is a subset.


Proof
Let $\mathbb K$ be the set of all closed sets $K$ of $M$ such that $H \subseteq K$.

From Closure of Subset of Closed Set of Metric Space is Subset:

$\forall K \in \mathbb K: H^- \subseteq K$
From Intersection is Largest Subset:

$\ds H^- \subseteq \bigcap \mathbb K$
$\Box$

From Closure of Subset of Metric Space is Closed, $H^-$ is closed.
From Subset of Metric Space is Subset of its Closure, $H \subseteq H^-$.
So $H^-$ is, by definition, a closed set of $M$ which contains $H$.
But $\ds \bigcap \mathbb K$ is the intersection of all closed sets of $M$ which contain $H$.
So from Intersection is Subset it follows that:

$\ds \bigcap \mathbb K \subseteq H^-$
$\Box$

Finally, we have that:

$\ds H^- \subseteq \bigcap \mathbb K$
$\ds \bigcap \mathbb K \subseteq H^-$
So by definition of set equality:

$\ds H^- = \bigcap \mathbb K$
which is what we needed to prove.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 6$: Open Sets and Closed Sets: Exercise $6$




