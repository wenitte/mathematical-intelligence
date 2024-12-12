# 

Source: https://proofwiki.org/wiki/Finite_Intersection_of_Open_Sets_of_Metric_Space_is_Open



Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $U_1, U_2, \ldots, U_n$ be open sets in $M$.

Then $\ds U = \bigcap_{i \mathop = 1}^n U_i$ is open in $M$.

That is, a finite intersection of open subsets is open.


Proof 1
Let $x \in U$.
By the definition of intersection:

$\forall i \in \closedint 1 n: x \in U_i$.
Thus, since $U_i$ is open in $M$:

$\forall i \in \closedint 1 n: \exists \epsilon_i \in \R_{>0}: \map {B_{\epsilon_i} } x \subseteq U_i$
where $\map {B_{\epsilon_i} } x$ is the open $\epsilon_i$-ball of $x$.

Let $\ds \epsilon = \min_{i \mathop = 1}^n \set {\epsilon_i}$.
Then, by Open Ball contains Smaller Open Ball:

$\forall i \in \closedint 1 n: \map {B_\epsilon} x \subseteq \map {B_{\epsilon_i} } x$

By definition of intersection:

$\map {B_\epsilon} x \subseteq U$
The result follows.
$\blacksquare$


Proof 2
Aiming for a contradiction, suppose $U$ is not open in $M$.
By definition of open set, there exists a $y \in U$ such that:

$\ds \forall \epsilon \in \R_{>0}: \map {B_\epsilon} y \setminus \bigcap_{i \mathop = 1}^n U_i \ne \O$.
By De Morgan's law, we have

$\ds \bigcup_{i \mathop = 1}^n \paren {\map {B_\epsilon} y \setminus U_i} \ne \O$.
Thus, there exists $i \in \closedint 1 n$ such that $\map {B_\epsilon} y \setminus U_i \ne \O$.
As $U_i$ is open and $\epsilon$ is arbitrarily given, by Open Ball of Point Inside Open Ball, $y \notin U_i$. This is a contradiction.
Thus, $U$ is open in $M$.
$\blacksquare$


Also see
Infinite Intersection of Open Sets of Metric Space may not be Open for how this result breaks down for an infinite number of open sets.


Sources
1953: Walter Rudin: Principles of Mathematical Analysis ... (previous) ... (next): $2.24 c$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 6$: Open Sets and Closed Sets: Theorem $6.4$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.3$: Open sets in metric spaces: Proposition $2.3.17$




