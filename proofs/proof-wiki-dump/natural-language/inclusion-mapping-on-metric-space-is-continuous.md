# 

Source: https://proofwiki.org/wiki/Inclusion_Mapping_on_Metric_Space_is_Continuous

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $\struct {H, d_H}$ be a metric subspace of $M$.

Then the inclusion mapping $i_H: H \to A$ is continuous.


Proof
Let $a \in H$.
Let $\epsilon \in \R_{>0}$.
Let $\delta = \epsilon$.

Then:














\(\ds \map {d_H} {a, y}\)

\(<\)







\(\ds \delta\)





for some $y \in H$








\(\ds \leadsto \ \ \)





\(\ds \map d {\map {i_H} a, \map {i_H} y}\)

\(=\)







\(\ds \map d {a, y}\)




















\(\ds \)

\(=\)







\(\ds \map {d_H} {a, y}\)




















\(\ds \)

\(<\)







\(\ds \delta\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









So by definition $d_H$ is continuous at $a$.
As $a \in H$ is arbitrary, it follows that $d_H$ is continuous on $H$.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 7$: Subspaces and Equivalence of Metric Spaces: Theorem $7.2$




