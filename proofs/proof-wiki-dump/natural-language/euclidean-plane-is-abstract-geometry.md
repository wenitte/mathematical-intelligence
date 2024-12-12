# 

Source: https://proofwiki.org/wiki/Euclidean_Plane_is_Abstract_Geometry



Theorem
The Euclidean plane $\struct {\R^2, L_E}$ is an abstract geometry.


Proof
We will show that the axioms for an abstract geometry hold.


Axiom 1
Let $P = \tuple {x_1, y_1}$ and $Q = \tuple {x_2, y_2}$ be two distinct points in $\struct {\R^2, L_E}$.
If $x_1 = x_2 = a$ then $P, Q \in L_a$.
If $x_1 \ne x_2$ then let:

$m = \dfrac {y_2 - y_1} {x_2 - x_1}$
$b = y_2 - m x_2$
Then $P, Q \in L_{m,b}$, since:

$b + m x_1 = y_2 - m \paren {x_2 - x_1} = y_2 - \paren {y_2 - y_1} = y_1$
$b + m x_2 = y_2 - m \paren {x_2 - x_2} = y_2$
So any two points in $\R^2$ lie on a line in $L_E$.
$\Box$


Axiom 2
Let $a \in \R$ be arbitrary.
Then:

$\tuple {a, 0}, \tuple {a, 1} \in L_a$

Let $m, b \in \R$ be arbiitrary.
Then:

$\tuple {0, b}, \tuple {1, m + b} \in L_{m, b}$

So every line in $L_E$ has at least two distinct points.
$\Box$

Hence $\struct {\R^2, L_E}$ is an abstract geometry.
$\blacksquare$


Sources
1991: Richard S. Millman and George D. Parker: Geometry: A Metric Approach with Models (2nd ed.) ... (previous) ... (next): $\S 2.1$




