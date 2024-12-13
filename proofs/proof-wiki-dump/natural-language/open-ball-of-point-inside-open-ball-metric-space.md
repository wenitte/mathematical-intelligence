# 

Source: https://proofwiki.org/wiki/Open_Ball_of_Point_Inside_Open_Ball/Metric_Space



Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $\map {B_\epsilon} x$ be an open $\epsilon$-ball in $M = \struct {A, d}$.
Let $y \in \map {B_\epsilon} x$.

Then:

$\exists \delta \in \R: \map {B_\delta} y \subseteq \map {B_\epsilon} x$

That is, for every point in an open $\epsilon$-ball in a metric space, there exists an open $\delta$-ball of that point entirely contained within that open $\epsilon$-ball.


Proof
Let $\delta = \epsilon - \map d {x, y}$.
From the definition of open ball, this is strictly positive, since $y \in \map {B_\epsilon} x$.
If $z \in \map {B_\delta} y$, then $\map d {y, z} < \delta$.
So:

$\map d {x, z} \le \map d {x, y} + \map d {y, z} < \map d {x, y} + \delta = \epsilon$
Thus $z \in \map {B_\epsilon} x$.
So $\map {B_\delta} y \subseteq \map {B_\epsilon} x$.
$\blacksquare$


Illustration
This diagram illustrates the proof of Open Ball of Point Inside Open Ball: Metric Space in $M = \struct {\R^2, d_2}$:


In $\R^2$, we can draw a circle of radius $\delta$ whose center is $y$ lying entirely within the larger circle of radius $\epsilon$ whose center is $x$ .


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.3$: Open sets in metric spaces: Lemma $2.3.7$




