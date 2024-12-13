# 

Source: https://proofwiki.org/wiki/Metric_formed_by_Arc_Length_on_Circle_is_Lipschitz_Equivalent_to_Euclidean_Metric

Theorem
Let $A \subseteq \R^2$ be the set defined as:

$A = \set {\tuple {x_1, x_2}: x_1^2 + y_2^2 = 1}$
Thus from Equation of Unit Circle, $A$ is the unit circle embedded in the Cartesian plane.
Let $d: A^2 \to \R$ be the metric defined as:

$\forall \tuple {x, y} \in A^2: \map d {x, y} = \begin {cases} 0 & : x = y \\ \pi & : x = -y \\ l & : \text {otherwise} \end {cases}$
where:

$x$ and $y$ are of the form $\tuple {x_1, x_2}$
$l$ denotes the length of the minor arc of $A$ between $x$ and $y$.

Then $d$ is Lipschitz equivalent to the Euclidean metric $d_2$ on $A$.


Proof
That $d$ forms a metric is demonstrated in Arc Length on Circle forms Metric.
Let $p_1 = \tuple {x_1, y_1}$ and $p_2 = \tuple {x_2, y_2}$ be points in $A$.
We have that $\map {d_2} {p_1, p_2}$ is the length of a line segment between $p_1$ and $p_2$.
This can never be longer than the length of the arc between $p_1$ and $p_2$.
Hence:

$\map {d_2} {p_1, p_2} \le \map d {p_1, p_2}$
Then we have that $\map d {p_1, p_2}$ is at most $\pi$ times the diameter of $A$
Hence:

$\map d {p_1, p_2} \le \dfrac \pi 2 \map {d_2} {p_1, p_2}$
The result follows by definition of Lipschitz equivalence.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 19$




