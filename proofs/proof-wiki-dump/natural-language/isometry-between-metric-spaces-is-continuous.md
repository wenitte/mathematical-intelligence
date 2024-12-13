# 

Source: https://proofwiki.org/wiki/Isometry_between_Metric_Spaces_is_Continuous



Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $\phi: M_1 \to M_2$ be an isometry.

Then $\phi: M_1 \to M_2$ is a continuous mapping.


Corollary
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $\phi: M_1 \to M_2$ be an isometry.

Then its inverse $\phi^{-1}: M_2 \to M_1$ is a continuous mapping.


Proof
Let $a \in A_1$.
Let $\epsilon \in \R_{>0}$.
Let $\delta = \epsilon$.

Then:














\(\ds \map {d_1} {a, y}\)

\(<\)







\(\ds \delta\)





for some $y \in A_1$








\(\ds \leadsto \ \ \)





\(\ds \map {d_2} {\map \phi a, \map \phi y}\)

\(<\)







\(\ds \delta\)





as $\map {d_2} {\map \phi a, \map \phi y} = \map {d_1} {a, y}$














\(\ds \)

\(=\)







\(\ds \epsilon\)









So by definition $\phi$ is continuous at $a$.
As $a \in H$ is arbitrary, it follows that $d_H$ is continuous on $H$.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 7$: Subspaces and Equivalence of Metric Spaces: Lemma $7.5$




