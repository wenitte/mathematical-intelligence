# 

Source: https://proofwiki.org/wiki/Open_Set_may_not_be_Open_Ball

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $U \subseteq M$ be an open set of $M$.

Then it is not necessarily the case that $U$ is an open ball of some $x \in A$.


Proof
Consider the Euclidean space $\R^2$.
Let:

$U \subseteq \R^2: U = \set {\tuple {x_1, x_2}: a < x_1 < b, c < x_2 < d}$
Let $x = \tuple {x_1, x_2} \in U$.
Then $\map {B_\epsilon} x \subseteq U$ when $\epsilon = \min \set {x_1 - a, b - x_1, x_2 - c, d - x_2}$:


So by definition, $U$ is open in $M$.
However, $U$ is not an open ball.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.3$: Open sets in metric spaces




