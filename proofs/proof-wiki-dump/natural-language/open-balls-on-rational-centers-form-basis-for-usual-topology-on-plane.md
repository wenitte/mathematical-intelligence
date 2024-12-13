# 

Source: https://proofwiki.org/wiki/Open_Balls_on_Rational_Centers_form_Basis_for_Usual_Topology_on_Plane

Theorem
Let $\R^2$ be the real number plane with the usual (Euclidean) topology.
Let $S$ be the set defined as:

$S = \set {\tuple {x, y} \in \R^2: x, y \in \Q}$
That is, let $S$ be the set of all points in $\R^2$ whose coordinates are rational numbers.

Let $\BB$ denote the set defined as:

$\BB = \set {\map {B_q} s: s \in S, q \in \Q}$
That is, let $\BB$ be the set of all open $q$-balls with centers in $S$ and rational radius.

Then $\BB$ forms a basis for $\R^2$.


Proof
Let $d: \R^2 \times \R^2 \to \R$ be the usual (Euclidean) metric on $\R^2$.
Let $U$ be an open set of $\R^2$.
Let $z = \tuple {x, y} \in U$.
Then by definition of open set:

$\exists \epsilon \in \R_{>0}: \map {B_\epsilon} z \subseteq U$
By Rationals are Everywhere Dense in Reals:

$\exists \tuple {x', y'}$ such that:
$\size {x - x'} < \dfrac \epsilon 5$
$\size {y - y'} < \dfrac \epsilon 5$
Let $s = \tuple {x', y'}$.
Then:

$\map d {z, s}< \dfrac {e \sqrt 2} 5 < \dfrac \epsilon 3$
Let $q \in \Q$ such that $\dfrac \epsilon 3 < q \le \dfrac {2 \epsilon} 3$.
Then:

$z \in \map {B_q} s \subseteq \map {B_\epsilon} z \subseteq U$

As $z$ is arbitrary, it follows that $U$ is the union of open balls with centers in $S$ and rational radius.
Hence the result.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.2$: Bases: Example $3.2.7$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 8$




