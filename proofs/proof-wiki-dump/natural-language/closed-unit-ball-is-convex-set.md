# 

Source: https://proofwiki.org/wiki/Closed_Unit_Ball_is_Convex_Set

Theorem
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space.
Let $\map {B_1^-} 0$ be the closed unit ball in $X$.

Then $\map {B_1^-} 0$ is convex.


Proof
Let $x, y \in \map {B_1^-} 0$.
Let $\alpha \in \closedint 0 1$ be arbitrary.
Then:














\(\ds \norm {\paren {1 - \alpha} x + \alpha y}\)

\(\le\)







\(\ds \norm {\paren {1 - \alpha} x} + \norm {\alpha y}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \size {1 - \alpha} \norm x + \size \alpha \norm y\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \paren {1 - \alpha} \norm x + \alpha \norm y\)





Definition of Convex Set (Vector Space): $0 \le \alpha \le 1$














\(\ds \)

\(\le\)







\(\ds \paren {1 - \alpha} + \alpha\)





$x, y \in \map {B_1^-} 0$














\(\ds \)

\(=\)







\(\ds 1\)









Therefore, $\paren {1 - \alpha}x + \alpha y \in \map {B_1^-} 0$.
By definition, $\map {B_1^-} 0$ is convex.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 2.$ Orthogonality: Exercise $1$
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.2$: Normed and Banach spaces. Normed spaces
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $3.1$: Norms




