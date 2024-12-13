# 

Source: https://proofwiki.org/wiki/Neighborhood_in_Metric_Space_has_Subset_Neighborhood

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $a \in A$ be a point in $M$.
Let $N$ be a neighborhood of $a$ in $M$.

Then there exists a neighborhood $N'$ of $a$ such that:

$(1): \quad N' \subseteq N$
$(2): \quad N'$ is a neighborhood of each of its points.


Proof
By definition of neighborhood:

$\exists \epsilon \in \R_{>0}: \map {B_\epsilon} a \subseteq N$
By Open Ball is Neighborhood of all Points Inside, $N' = \map {B_\epsilon} a$ fulfils the conditions of the statement.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 4$: Open Balls and Neighborhoods: Theorem $4.8: \ N \, 5$




