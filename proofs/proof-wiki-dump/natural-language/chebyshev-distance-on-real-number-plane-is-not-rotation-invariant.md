# 

Source: https://proofwiki.org/wiki/Chebyshev_Distance_on_Real_Number_Plane_is_not_Rotation_Invariant

Theorem
Let $r_\alpha: \R^2 \to \R^2$ denote the rotation of the Euclidean plane about the origin through an angle of $\alpha$.
Let $d_\infty$ denote the Chebyshev distance on $\R^2$.

Then it is not necessarily the case that:

$\forall x, y \in \R^2: \map {d_\infty} {\map {r_\alpha} x, \map {r_\alpha} y} = \map {d_\infty} {x, y}$


Proof
Proof by Counterexample:
Let $x = \tuple {0, 0}$ and $y = \tuple {1, 1}$ be arbitrary points in $\R^2$.
Then:














\(\ds \map {d_\infty} {x, y}\)

\(=\)







\(\ds \map {d_\infty} {\tuple {0, 0}, \tuple {1, 1} }\)





Definition of $x$ and $y$














\(\ds \)

\(=\)







\(\ds \max \set {\size {0 - 1}, \size {0 - 1} }\)





Definition of Chebyshev Distance on Real Number Plane














\(\ds \)

\(=\)







\(\ds 1\)










Now let $\alpha = \dfrac \pi 4 = 45 \degrees$.














\(\ds \map {d_\infty} {\map {r_\alpha} x, \map {r_\alpha} y}\)

\(=\)







\(\ds \map {d_\infty} {\tuple {0, 0}, \tuple {0, \sqrt 2} }\)





Definition of Plane Rotation














\(\ds \)

\(=\)







\(\ds \max \set {\size {0 - 0}, \size {0 - \sqrt 2} }\)





Definition of Chebyshev Distance on Real Number Plane














\(\ds \)

\(=\)







\(\ds \sqrt 2\)





simplification














\(\ds \)

\(\ne\)







\(\ds 1\)









$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 22$




