# 

Source: https://proofwiki.org/wiki/Finite_Subspace_of_Dense-in-itself_Metric_Space_is_not_Open

Theorem
Let $M = \struct {A, d}$ be a metric space that is dense-in-itself.
Let $U$ be a finite subset of $A$.

Then $U$ is not an open set of $M$.


Proof
Let $U = \set {x_0, x_1, \ldots, x_n}$.
Aiming for a contradiction, suppose $U$ is open.
Let:

$\ds D = \min_{i \mathop \ne j} \map d {x_i, x_j}$
Let $x_j \in U$.
Consider the open ball $\map {B_{D/2} } {x_j}$ of $x_j$.
From Open Ball of Metric Space is Open Set, $\map {B_{D/2} } {x_j}$ is an open set.
Then from Finite Intersection of Open Sets of Metric Space is Open, we can see that $U \cap \map {B_{D/2} } {x_j}$ is also an open set.
However, we have that:

$\dfrac D 2 < \ds \min_{i \mathop \ne j} \map d {x_i, x_j}$
Thus the open ball $\map {B_{D / 2} } {x_j}$ is simply the singleton $\set {x_j}$.
But then $x_j$ is an isolated point of $M$.
This contradicts the fact that $M$ is dense-in-itself.
So in fact, $U$ cannot be open.
The result follows.
$\blacksquare$





