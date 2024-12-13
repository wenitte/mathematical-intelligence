# 

Source: https://proofwiki.org/wiki/Isometry_Preserves_Sequence_Convergence/Proof_1

Theorem
Let $M_1 = \struct {S_1, d_1}$ and $M_2 = \struct {S_2, d_2}$ both be metric spaces or pseudometric spaces.
Let $\phi: S_1 \to S_2$ be an isometry.
Let $\sequence {x_n}$ be an infinite sequence in $S_1$.
Suppose that $\sequence {x_n}$ converges to a point $p \in S_1$.

Then $\sequence {\map \phi {x_n}}$ converges to $\map \phi p$.


Proof













\(\ds \)

\(\)







\(\ds \lim_{n \mathop \to \infty} \map {d_2} {\map \phi {x_n}, \map \phi p}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {d_1} {x_n, p}\)





Definition 1 of Isometry (Metric Spaces)














\(\ds \)

\(=\)







\(\ds 0\)





Definition 3 of Convergent Sequence



Hence, by definition, $\sequence {\map \phi {x_n}}$ converges to $\map \phi p$.
$\blacksquare$





