# 

Source: https://proofwiki.org/wiki/Addition_of_Coordinates_on_Cartesian_Plane_under_Chebyshev_Distance_is_Continuous_Function

Theorem
Let $\R^2$ be the real number plane.
Let $d_\infty$ be the Chebyshev distance on $\R^2$.
Let $f: \R^2 \to \R$ be the real-valued function defined as:

$\forall \tuple {x_1, x_2} \in \R^2: \map f {x_1, x_2} = x_1 + x_2$

Then $f$ is continuous.


Proof
First we note that:














\(\ds \size {\paren {x_1 + x_2} - \paren {y_1 + y_2} }\)

\(=\)







\(\ds \size {\paren {x_1 - y_1} + \paren {x_2 - y_2} }\)




















\(\ds \)

\(\le\)







\(\ds \size {x_1 - y_1} + \size {x_2 - y_2}\)





Triangle Inequality for Real Numbers




\(\text {(1)}: \quad\)









\(\ds \)

\(\le\)







\(\ds 2 \max \set {\size {x_1 - y_1}, \size {x_2 - y_2} }\)










Let $\epsilon \in \R_{>0}$.
Let $x = \tuple {x_1, x_2} \in \R^2$.
Let $\delta = \dfrac \epsilon 2$.
Then:










\(\ds \forall y = \tuple {y_1, y_2} \in \R^2: \, \)



\(\ds \map {d_\infty} {x, y}\)

\(<\)







\(\ds \delta\)














\(\ds \leadsto \ \ \)





\(\ds \max \set {\size {x_1 - y_1}, \size {x_2 - y_2} }\)

\(<\)







\(\ds \delta\)





Definition of Chebyshev Distance on Real Number Plane








\(\ds \leadsto \ \ \)





\(\ds 2 \max \set {\size {x_1 - y_1}, \size {x_2 - y_2} }\)

\(<\)







\(\ds \epsilon\)





Definition of $\epsilon$








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





Definition of Usual Metric on $\R$




Thus it has been demonstrated that:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall y \in \R^2: \map {d_\infty} {x, y} < \delta \implies \map d {\map f x, \map f y} < \epsilon$
Hence by definition of continuity at a point, $f$ is continuous at $x$.
As $x$ was chosen arbitrarily, it follows that $f$ is continuous for all $x \in \R^2$.
The result follows by definition of continuous mapping.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 3$: Continuity: Exercise $3$




