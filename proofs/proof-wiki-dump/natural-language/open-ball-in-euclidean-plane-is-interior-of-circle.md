# 

Source: https://proofwiki.org/wiki/Open_Ball_in_Euclidean_Plane_is_Interior_of_Circle

Theorem
Let $\R^2$ be the real number plane with the usual (Euclidean) metric.
Let $x = \tuple {x_1, x_2} \in \R^2$ be a point in $\R^2$.
Let $\map {B_\epsilon} x$ be the open $\epsilon$-ball at $x$.

Then $\map {B_\epsilon} x$ is the interior of the circle whose center is $x$ and whose radius is $\epsilon$.


Proof
Let $S = \map {B_\epsilon} x$ be an open $\epsilon$-ball at $x$.
Let $y = \tuple {y_1, y_2} \in \map {B_\epsilon} x$.
Then:














\(\ds y\)

\(\in\)

\(\, \ds \map {B_\epsilon} x \, \)





\(\ds \)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map d {y, x}\)

\(<\)

\(\, \ds \epsilon \, \)





\(\ds \)





Definition of Open $\epsilon$-Ball








\(\ds \leadstoandfrom \ \ \)





\(\ds \sqrt {\paren {y_1 - x_1}^2 + \paren {y_2 - x_2}^2}\)

\(<\)

\(\, \ds \epsilon \, \)





\(\ds \)





Definition of Real Number Plane with Euclidean Metric








\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {y_1 - x_1}^2 + \paren {y_2 - x_2}^2\)

\(<\)

\(\, \ds \epsilon^2 \, \)





\(\ds \)









But from Equation of Circle:

$\paren {y_1 - x_1}^2 + \paren {y_2 - x_2}^2 = \epsilon^2$
is the equation of a circle whose center is $\tuple {x_1, x_2}$ and whose radius is $\epsilon$.

The result follows by definition of interior and Open Ball of Point Inside Open Ball.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.3$: Open sets in metric spaces: Example $2.3.2$




