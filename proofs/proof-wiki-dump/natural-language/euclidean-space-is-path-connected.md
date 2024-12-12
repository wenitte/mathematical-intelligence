# 

Source: https://proofwiki.org/wiki/Euclidean_Space_is_Path-Connected

Theorem
Let $\R^n$ be the $n$-dimensional Euclidean space for $n \in \N$ a natural number.

Then $\R^n$ is path-connected.


Proof
Let $\mathbf x, \mathbf y \in \R^n$ be arbitrary points of $\R^n$.
Define $l: \closedint 0 1 \to \R^n$ by:

$\map l t = \paren {1 - t} \mathbf x + t \mathbf y$
Then $\map l 0 = 1 \mathbf x + 0 \mathbf y = \mathbf x$, whereas $\map l 1 = 0 \mathbf x + 1 \mathbf y = \mathbf y$.

Finally, it remains to show that $l$ is continuous. 
Fix $\epsilon > 0$ and suppose that $t, t' \in \closedint 0 1$ are such that $\size {t - t'} < \dfrac {\epsilon} {1 + \norm {\mathbf x} + \norm {\mathbf y} }$.
Then:














\(\ds \map l t - \map l {t'}\)

\(=\)







\(\ds \paren {1 - t} \mathbf x + t \mathbf y - \paren {\paren {1 - t'} \mathbf x + t' \mathbf y}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {1 - t} - \paren {1 - t'} } \mathbf x + \paren {t - t'} \mathbf y\)




















\(\ds \)

\(=\)







\(\ds \paren {t' - t} \mathbf x + \paren {t - t'} \mathbf y\)









We can now estimate the norm of this last expression:














\(\ds \norm {\paren {t' - t} \mathbf x + \paren {t - t'} \mathbf y}\)

\(\le\)







\(\ds \norm {\paren {t' - t} \mathbf x} + \norm {\paren {t - t'} \mathbf y}\)





Triangle Inequality for Vectors in Euclidean Space














\(\ds \)

\(=\)







\(\ds \size {t' - t} \norm {\mathbf x} + \size {t - t'} \norm {\mathbf y}\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \size {t' - t} \paren {\norm {\mathbf x} + \norm {\mathbf y} }\)




















\(\ds \)

\(<\)







\(\ds \frac \epsilon {1 + \norm {\mathbf x} + \norm {\mathbf y} } \paren {\norm {\mathbf x} + \norm {\mathbf y} }\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)









Since $\epsilon$ was arbitrary, we conclude that $l$ is continuous.
Therefore, it forms a path from $\mathbf x$ to $\mathbf y$.

Since $\mathbf x$ and $\mathbf y$ were arbitrary, it follows that $\R^n$ is path-connected.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{III}$: Metric Spaces: Path-Connectedness
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $6.3$: Path-connectedness: Examples $6.3.4$




