# 

Source: https://proofwiki.org/wiki/Set_is_Open_iff_Union_of_Open_Balls


This page has been identified as a candidate for refactoring of medium complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $U \subseteq A$.

Then $U$ is open in $M$ if and only if it is a union of open balls.


Proof 1
Necessary Condition
Let $U$ be open in $M$.
Let $a \in U$.
Then by definition of open set:

$\exists \delta_a \in \R_{>0}: \map {B_{\delta_a} } {a, d} \subseteq U$
where $\map {B_{\delta_a} } {a, d}$ is the open $\delta_a$-ball of $a$ in $M$.
Therefore:

$\ds U = \bigcup_{a \mathop \in U} \map {B_{\delta_a} } {a, d}$
and so $U$ is a union of open balls.
$\Box$


Sufficient Condition
Let $U$ be a union of open balls of $M$.
Let the centers of these open balls be the elements of an indexing set $I$.
Then $U$ can be written as:

$\ds U = \bigcup_{a \mathop \in I} \map {B_{\delta_a} } {a, d}$
where $\delta_a \in \R_{>0}$ is the radius of the open ball of $a$.

Let $x \in U$.
Then by definition of union:

$\exists a \in I: x \in \map {B_{\delta_a} } {a, d}$
From Open Ball is Neighborhood of all Points Inside, $\map {B_{\delta_a} } {a, d}$ is a neighborhood of $x$.
By Set is Subset of Union of Family:

$\map {B_{\delta_a} } {a, d} \subseteq U$
From Superset of Neighborhood in Metric Space is Neighborhood, it follows that $U$ is a neighborhood of $x$.
Since $x$ is arbitrary, it follows that $U$ is a neighborhood of each of its points.
Hence by definition, $U$ is open in $M$.
$\blacksquare$


Proof 2
Necessary Condition
See Proof 1.
$\Box$


Sufficient Condition
Aiming for a contradiction, suppose $U$ is a union of open balls but not open.
As $U$ is not open, there is a $y \in U$ such that for any $\epsilon \in \R_{>0}$, $\map {B_\epsilon} y \setminus U \ne \O$.
As $U$ is a union of open balls, there is an $x \in U$ and $r \in \R_{>0}$ such that $y \in \map {B_r} x$.
By Open Ball of Point Inside Open Ball, there exists a $\delta \in \R_{>0}$ such that $\map {B_\delta} y \subseteq \map {B_r} x$.
This is contradicted by the assumption.
Thus, $U$ has to be open.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 6$: Open Sets and Closed Sets: Theorem $6.2$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 10$




