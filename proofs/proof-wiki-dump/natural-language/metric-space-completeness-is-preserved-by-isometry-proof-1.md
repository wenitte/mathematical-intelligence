# 

Source: https://proofwiki.org/wiki/Metric_Space_Completeness_is_Preserved_by_Isometry/Proof_1

Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $\phi: M_1 \to M_2$ be an isometry.

If $M_1$ is complete then so is $M_2$.


Proof
Let $\tau_1$ be the topology on $A_1$ induced by $d_1$.
Let $\tau_2$ be the topology on $A_2$ induced by $d_2$.
Let $\sequence {x_n}$ be a Cauchy sequence in $A_2$.
From Inverse of Isometry of Metric Spaces is Isometry, $\phi^{-1}$ is an isometry.
Since Isometric Image of Cauchy Sequence is Cauchy Sequence, $\sequence {\map {\phi^{-1} } {x_n} }$ is a Cauchy sequence.
Since $M_1$ is a complete metric space, $\sequence {\map {\phi^{-1} } {x_n} }$ converges.
Since Isometry Preserves Sequence Convergence, $\sequence {\map \phi {\map {\phi^{-1} } {x_n} } }$ converges.
But:

$\sequence {\map \phi {\map {\phi^{-1} } {x_n} } } = \sequence {x_n}$
so $\sequence {x_n}$ converges.
Thus each Cauchy sequence in $M_2$ converges.
It follows by definition that so $M_2$ is a complete metric space.
$\blacksquare$





