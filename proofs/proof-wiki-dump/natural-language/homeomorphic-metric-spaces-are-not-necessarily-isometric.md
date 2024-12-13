# 

Source: https://proofwiki.org/wiki/Homeomorphic_Metric_Spaces_are_not_necessarily_Isometric

Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $M_1$ and $M_2$ be homeomorphic.

Then it is not necessarily the case that $M_1$ and $M_2$ are isometric.


Proof
Consider the spaces $\struct {\openint 0 4, d}$ and $\struct {\openint 0 1, d}$, where $d$ is the Euclidean Metric.
By Open Real Intervals are Homeomorphic, they are homeomorphic.

Let $\phi: \openint 0 4 \to \openint 0 1$ be a mapping.
Then:














\(\ds \map d {\map \phi 1, \map \phi 3}\)

\(\le\)







\(\ds \map d {0, 1}\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(<\)







\(\ds 2\)




















\(\ds \)

\(=\)







\(\ds \map d {1, 3}\)









showing that $\phi$ cannot be an isometry.

Therefore the two spaces above are not isometric.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 7$: Subspaces and Equivalence of Metric Spaces




