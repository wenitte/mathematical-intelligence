# 

Source: https://proofwiki.org/wiki/Chebyshev_Distance_on_Real_Number_Plane_is_Translation_Invariant

Theorem
Let $\tau_{\mathbf t}: \R^2 \to \R^2$ denote the translation of the Euclidean plane by the vector $\mathbf t = \begin {pmatrix} a \\ b \end {pmatrix}$.
Let $d_\infty$ denote the Chebyshev distance on $\R^2$.

Then $d_1$ is unchanged by application of $\tau$:

$\forall x, y \in \R^2: \map {d_\infty} {\map \tau x, \map \tau y} = \map {d_\infty} {x, y}$


Proof
Let $x = \tuple {x_1, x_2}$ and $y = \tuple {y_1, y_2}$ be arbitrary points in $\R^2$.
Then:














\(\ds \map {d_\infty} {\map \tau x, \map \tau y}\)

\(=\)







\(\ds \map {d_\infty} {x - \mathbf t, y - \mathbf t}\)





Definition of Translation in Euclidean Space














\(\ds \)

\(=\)







\(\ds \max \set {\size {\paren {x_1 - a} - \paren {y_1 - a} }, \size {\paren {x_2 - b} - \paren {y_2 - b} } }\)





Definition of $\mathbf t$, Definition of Chebyshev Distance on Real Number Plane














\(\ds \)

\(=\)







\(\ds \max \set {\size {x_1 - y_1}, \size {x_2 - y_2} }\)





simplification














\(\ds \)

\(=\)







\(\ds \map {d_\infty} {x, y}\)





Definition of Chebyshev Distance on Real Number Plane



$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 22$




