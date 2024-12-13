# 

Source: https://proofwiki.org/wiki/Open_Ball_in_Real_Number_Plane_under_Chebyshev_Distance

Theorem
Let $\R^2$ be the real number plane.
Let $d_\infty: \R^2 \times \R^2 \to \R$ be the Chebyshev Distance on $\R^2$:

$\ds \map {d_\infty} {x, y} := \max \set {\size {x_1 - y_1}, \size {x_2 - y_2} }$
where $x = \tuple {x_1, x_2}, y = \tuple {y_1, y_2} \in \R^2$.

For $a \in \R^2$, let $\map {B_\epsilon} a$ be the open $\epsilon$-ball at $a$.

Then $\map {B_\epsilon} a$ is the interior of the square centered at $a$ and whose sides are of length $2 \epsilon$ parallel to the coordinate axes.


Proof
Let $a = \tuple {a_1, a_2}$.
From Open Ball in Cartesian Product under Chebyshev Distance:

$\map {B_\epsilon} {a; d_\infty} = \map {B_\epsilon} {a_1; d} \times \map {B_\epsilon} {a_2; d}$
where $d$ is the usual (Euclidean) topology.
From Open Ball in Real Number Line is Open Interval:

$\map {B_\epsilon} {a_1; d} \times \map {B_\epsilon} {a_2; d} = \openint {a_1 - \epsilon} {a_1 + \epsilon} \times \openint {a_2 - \epsilon} {a_2 + \epsilon}$
That is:

$x \in \map {B_\epsilon} {a; d_\infty} \iff \paren {a_2 - \epsilon < x_2 < a_2 + \epsilon} \land \paren {a_2 - \epsilon < x_2 < a_2 + \epsilon}$
from which the result follows.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.3$: Open sets in metric spaces: Example $2.3.3$




