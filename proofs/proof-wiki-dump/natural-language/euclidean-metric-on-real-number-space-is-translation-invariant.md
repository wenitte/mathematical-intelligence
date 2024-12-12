# 

Source: https://proofwiki.org/wiki/Euclidean_Metric_on_Real_Number_Space_is_Translation_Invariant

Theorem
Let $\tau_{\mathbf t}: \R^n \to \R^n$ denote the translation of the real Euclidean space of $n$ dimensions by the vector $\mathbf t = \tuple {t_1, t_2, \ldots, t_n}$.
Let $d_2$ denote the Euclidean metric on $\R^n$.

Then $d_2$ is unchanged by application of $\tau$:

$\forall \mathbf x, \mathbf y \in \R^n: \map {d_2} {\map \tau {\mathbf x}, \map \tau {\mathbf y} } = \map {d_2} {\mathbf x, \mathbf y}$


Proof
Let $\mathbf x = \tuple {x_1, x_2, \ldots, x_n}$ and $\mathbf y = \tuple {y_1, y_2, \ldots, y_n}$ be arbitrary points in $\R^n$.
Then:














\(\ds \map {d_2} {\map \tau {\mathbf x}, \map \tau {\mathbf y} }\)

\(=\)







\(\ds \map {d_2} {\mathbf x - \mathbf t, \mathbf y - \mathbf t}\)





Definition of Translation in Euclidean Space














\(\ds \)

\(=\)







\(\ds \sqrt {\paren {\sum_{i \mathop = 1}^n \paren {\paren {x_i - t_i} - \paren {y_i - t_i} }^2} }\)





Definition of $\mathbf t$, Definition of Euclidean Metric on Real Vector Space














\(\ds \)

\(=\)







\(\ds \sqrt {\paren {\sum_{i \mathop = 1}^n \paren {x_i - y_i}^2} }\)





simplification














\(\ds \)

\(=\)







\(\ds \map {d_2} {\mathbf x, \mathbf y}\)





Definition of Euclidean Metric on Real Vector Space



$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 21$
where the exercise is limited to the Euclidean plane




