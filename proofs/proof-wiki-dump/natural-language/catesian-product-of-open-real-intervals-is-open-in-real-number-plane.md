# 

Source: https://proofwiki.org/wiki/Catesian_Product_of_Open_Real_Intervals_is_Open_in_Real_Number_Plane

Theorem
Let $\struct {\R^2, d}$ denote the real number plane with the Euclidean metric.
Let $\openint a b$ and $\openint c d$ be open real intervals.

Then their Cartesian product:

$S = \openint a b \times \openint c d$
is an open set of $\struct {\R^2, d}$.


Proof
Let $P = \tuple {x, y} \in S$.
Then by definition:

$a < x < b$
and:

$c < y < d$
Let $\epsilon = \min \set {x - a, b - x, y - c, d - y}$
By definition, $\epsilon > 0$.
Consider the open ball $\map {B_\epsilon} P$.
Let $Q = \tuple {x_0, y_0} \in \map {B_\epsilon} P$ be an arbitrary point in $\map {B_\epsilon} P$.
By definition of $\map {B_\epsilon} P$:

$\size {x - x_0} < \epsilon$
and:

$\size {y - y_0} < \epsilon$
Hence we have:

$\size {x - x_0} < x - a$
$\size {x - x_0} < b - x$
$\size {y - y_0} < y - c$
$\size {y - y_0} < d - y$
and so:

$Q \in S$
Thus we have that:

$\map {B_\epsilon} P \subseteq S$
Hence the result by definition of open set.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 11$




