# 

Source: https://proofwiki.org/wiki/Composition_of_Continuous_Mapping_on_Compact_Space_Preserves_Uniform_Convergence

Theorem
Let $\struct{ X, d_X }$ be a compact metric space.
Let $\struct{ Y, d_Y }, \struct{ Z, d_Z }$ be metric spaces.
Let $\phi : Y \to Z$ be a continuous mapping.
For all $n \in \N$, let $f_n : X \to Y$ be a continuous mapping.
Let $f: X \to Y$ be a mapping such that $\sequence {f_n}_{n \in \N}$ converges to $f$ uniformly on $X$.

Then the sequence $\sequence {\phi \circ f_n}_{n \in \N}$ converges to $\phi \circ f$ uniformly on $X$.


Proof
Aiming for a contradiction, suppose that $\sequence {\phi \circ f_n}_{n \in \N}$ do not converge to $\phi \circ f$ uniformly.
This implies that there exists $\epsilon \in \R_{>0}$ such that for all $n \in \N$, there exist $N_n \ge n$ and $x_n \in X$ such that:

$\map {d_Z}{ \map { \phi \circ f_{N_n} }{ x_n } , \map { \phi \circ f }{ x_n} } \ge \epsilon$
From Compact Subspace of Metric Space is Sequentially Compact in Itself, it follows that $\struct{ X, d_X }$ is sequentially compact in itself.
This implies that there exist $x' \in X$ and a subsequence $\sequence {x_{n_m} }_{m \in \N}$ such that $x_{n_m} \to x'$ for $m \to \infty$.
We calculate:














\(\ds \epsilon\)

\(\le\)







\(\ds \lim_{m \mathop \to \infty} \map {d_Z}{ \map { \phi \circ f_{N_{n_m} } }{ x_{n_m} } , \map { \phi \circ f }{ x_{n_m} } }\)




















\(\ds \)

\(=\)







\(\ds \map {d_Z}{ \lim_{m \mathop \to \infty} \map { \phi \circ f_{N_{n_m} } }{ x_{n_m} } , \lim_{m \mathop \to \infty} \map { \phi \circ f }{ x_{n_m} } }\)





by Metric is Continous Mapping and definition of continuity














\(\ds \)

\(=\)







\(\ds \map {d_Z}{ \map { \phi \circ f }{ x' } , \lim_{m \mathop \to \infty} \map { \phi \circ f }{ x_{n_m} } }\)





by Uniformly Convergent Sequence Evaluated on Convergent Sequence














\(\ds \)

\(=\)







\(\ds \map {d_Z}{ \map { \phi \circ f }{ x' } , \map { \phi \circ f }{ x' } }\)





by Composite of Continuous Mappings between Metric Spaces is Continuous














\(\ds \)

\(=\)







\(\ds 0\)









which is a contradiction, as $\epsilon > 0$.
$\blacksquare$





