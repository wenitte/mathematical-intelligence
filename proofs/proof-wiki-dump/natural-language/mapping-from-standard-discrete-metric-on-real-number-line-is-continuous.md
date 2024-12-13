# 

Source: https://proofwiki.org/wiki/Mapping_from_Standard_Discrete_Metric_on_Real_Number_Line_is_Continuous

Theorem
Let $\R$ be the real number line.
Let $\struct {\R, d_1}$ be the metric space such that $d_1$ be the Euclidean metric on $\R$.
Let $\struct {\R, d_2}$ be the metric space such that $d_2$ be the standard discrete metric on $\R$.

Let $f: \tuple {\R, d_2} \to \tuple {\R, d_1}$ be a real function.

Then $f$ is $\tuple {d_2, d_1}$-continuous on $\R$.


Proof
Let $\epsilon \in \R: \epsilon > 0$.
Let $\delta = 1$.
Let $x \in \R$.

Let $y \in \R$ such that $\map {d_2} {x, y} < \delta$.
That is, $\map {d_2} {x, y} < 1$.
By the definition of the standard discrete metric on $\R$, that would mean that $\map {d_2} {x, y} = 0$ and so $x = y$.
Thus $\map f x = \map f y$.
By definition of a metric, that means:

$\map {d_1} {\map f x, \map f y} = 0 < \epsilon$
Thus the conditions for $\tuple {d_2, d_1}$-continuity at a point are fulfilled.
This is true for all $x \in \R$.
So by definition $f$ is $\tuple {d_2, d_1}$-continuous on $\R$.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{III}$: Metric Spaces: The Definition




