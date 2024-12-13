# 

Source: https://proofwiki.org/wiki/Intersection_of_Neighborhoods_in_Metric_Space_is_Neighborhood



Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $a \in A$ be a point in $M$.
Let $N, N'$ be neighborhoods of $a$ in $M$.

Then $N \cap N'$ is a neighborhood of $a$ in $M$.


Proof
By definition of neighborhood:

$\exists \epsilon_1 \in \R_{>0}: \map {B_{\epsilon_1} } a \subseteq N$
where $\map {B_{\epsilon_1} } a$ is the open $\epsilon_1$-ball of $a$ in $M$.

$\exists \epsilon_2 \in \R_{>0}: \map {B_{\epsilon_2} } a \subseteq N'$
where $\map {B_{\epsilon_2} } a$ is the open $\epsilon_2$-ball of $a$ in $M$.
Thus by definition of intersection:

$\map {B_\epsilon} a \subseteq N \cap N'$
where $\epsilon = \min \set {\epsilon_1, \epsilon_2}$
The result follows by definition of neighborhood of $a$.
$\blacksquare$


Also see
Intersection of Neighborhoods in Topological Space is Neighborhood


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 4$: Open Balls and Neighborhoods: Theorem $4.8: \ N \, 4$




