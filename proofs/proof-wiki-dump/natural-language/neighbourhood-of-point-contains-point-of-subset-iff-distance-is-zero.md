# 

Source: https://proofwiki.org/wiki/Neighbourhood_of_Point_Contains_Point_of_Subset_iff_Distance_is_Zero



Theorem
Let $M = \struct {X, d}$ be a metric space.
Let $A \subseteq X$ be a non-empty subset of $X$.
Let $x \in X$.

Then every neighborhood of $x$ contains a point of $A$ if and only if:

$\map d {x, A} = 0$
where $\map d {x, A}$ denotes the distance from $x$ to $A$.


Proof
Sufficient Condition
Let $x \in X$.
Let every neighborhood of $x$ contain a point in $A$.
Every open ball $\map {B_\epsilon} x$ centered at $x$ is seen to be a neighborhood of $x$ in $M$.

But then this implies that for every $\epsilon \in \R_{\gt 0}$ there must exists a $y \in A$ such that:

$\map d {x, y} < \epsilon$

From this it is seen that $\map d {x, A} = 0$.
$\Box$


Necessary Condition
Let $\map d {x, A} = 0$ for $x \in X$.
Let $S$ be a neighborhood of $x$ in $M$.

From the definition of a neighborhood, there exists an open ball $\map {B_\epsilon} x$ centered at $x$ such that:

$\map {B_\epsilon} x \subseteq S$

We have that:

$\epsilon < 0$
and
$\map d {x, A} = 0$
Hence there must exists a $y \in A$ such that:

$\map d {x, y} < \epsilon \implies \map {B_\epsilon} x \cap A \ne \O$
If otherwise then $\epsilon$ would be a lower bound for $\set {\map d {x, y} : y \in A}$ that is greater than $0$, which is a contradiction.

Then from Set Intersection Preserves Subsets we have:

$\map {B_\epsilon} x \cap A \subseteq S \cap A$
and so:

$\map {B_\epsilon} x \cap A \ne \O \implies S \cap A \ne \O$

Hence the result.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 5$: Limits: Exercise $8$




