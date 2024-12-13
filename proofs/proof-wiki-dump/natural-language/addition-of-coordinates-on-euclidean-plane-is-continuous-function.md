# 

Source: https://proofwiki.org/wiki/Addition_of_Coordinates_on_Euclidean_Plane_is_Continuous_Function

Theorem
Let $\struct {\R^2, d_2}$ be the real number plane with the usual (Euclidean) metric.
Let $f: \R^2 \to \R$ be the real-valued function defined as:

$\forall \tuple {x_1, x_2} \in \R^2: \map f {x_1, x_2} = x_1 + x_2$

Then $f$ is continuous.


Proof
First we note that:














\(\ds \)

\(\)







\(\ds \size {\paren {x_1 + x_2} - \paren {y_1 + y_2} }\)




















\(\ds \)

\(=\)







\(\ds \size {\paren {x_1 - y_1} + \paren {x_2 - y_2} }\)




















\(\ds \)

\(\le\)







\(\ds \size {x_1 - y_1} + \size {x_2 - y_2}\)





Triangle Inequality for Real Numbers




\(\text {(1)}: \quad\)









\(\ds \)

\(\le\)







\(\ds \sqrt 2 \sqrt {\paren {x_1 - y_1}^2 + \paren {x_2 - y_2}^2}\)





$p$-Product Metrics on Real Vector Space are Topologically Equivalent




Let $\epsilon \in \R_{>0}$.
Let $x = \tuple {x_1, x_2} \in \R^2$.
Let $\delta = \dfrac \epsilon {\sqrt 2}$.
Then:










\(\ds \forall y = \tuple {y_1, y_2} \in \R^2: \, \)



\(\ds \map {d_2} {x, y}\)

\(<\)







\(\ds \delta\)














\(\ds \leadsto \ \ \)





\(\ds \sqrt {\paren {x_1 - y_1}^2 + \paren {x_2 - y_2}^2}\)

\(<\)







\(\ds \delta\)





Definition of Euclidean Metric on Real Number Plane








\(\ds \leadsto \ \ \)





\(\ds \sqrt 2 \sqrt {\paren {x_1 - y_1}^2 + \paren {x_2 - y_2}^2}\)

\(<\)







\(\ds \delta \sqrt 2\)














\(\ds \leadsto \ \ \)





\(\ds \size {\paren {x_1 + x_2} - \paren {y_1 + y_2} }\)

\(<\)







\(\ds \epsilon\)





from $(1)$








\(\ds \leadsto \ \ \)





\(\ds \size {\map f x - \map f y}\)

\(<\)







\(\ds \epsilon\)





Definition of $f$








\(\ds \leadsto \ \ \)





\(\ds \map d {\map f x, \map f y}\)

\(<\)







\(\ds \epsilon\)





Definition of Euclidean Metric on Real Number Line




Thus it has been demonstrated that:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall y \in \R^2: \map {d_2} {x, y} < \delta \implies \map d {\map f x, \map f y} < \epsilon$
Hence by definition of continuity at a point, $f$ is continuous at $x$.
As $x$ is chosen arbitrarily, it follows that $f$ is continuous for all $x \in \R^2$.
The result follows by definition of continuous mapping.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 3$: Continuity: Exercise $3$



