# 

Source: https://proofwiki.org/wiki/Open_Ball_is_Convex_Set

Theorem
Let $V$ be a normed vector space with norm $\norm {\,\cdot\,}$ over $\R$ or $\C$.

An open ball in the metric induced by $\norm {\,\cdot\,}$ is a convex set.


Proof
Let $v \in V$ and $\epsilon \in \R_{>0}$.
Denote the open $\epsilon$-ball of $v$ as $\map {B_\epsilon} v$.
Let $x, y \in \map {B_\epsilon} v$.
Then $x + t \paren {y - x}$ lies on line segment joining $x$ and $y$ for all $t \in \closedint 0 1$.
The distance between $x + t \paren {y - x}$ and $v$ is:














\(\ds \norm {x + t \paren {y - x} - v}\)

\(=\)







\(\ds \norm {\paren {1 - t} \paren {x - v} + t \paren {y - v} }\)




















\(\ds \)

\(\le\)







\(\ds \norm {\paren {1 - t} \paren {x - v} } + \norm {t \paren {y - v} }\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \paren {1 - t} \norm {x - v} + t \norm {y - v}\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(<\)







\(\ds \paren {1 - t} \epsilon + t \epsilon\)





as $x, y \in \map {B_\epsilon} v$














\(\ds \)

\(=\)







\(\ds \epsilon\)









Hence, $x + t \paren {y - x} \in \map {B_\epsilon} v$.
Thus, by definition, $\map {B_\epsilon} v$ is a convex set.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 2.$ Orthogonality
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $3.1$: Norms




