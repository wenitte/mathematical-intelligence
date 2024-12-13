# 

Source: https://proofwiki.org/wiki/Open_Ball_in_Euclidean_Plus_Metric_is_Subset_of_Equivalent_Ball_in_Euclidean_Metric

Theorem
Let $\R$ be the set of real numbers.
Let $d: \R \times \R \to \R$ be the Euclidean plus metric:

$\map d {x, y} := \size {x - y} + \ds \sum_{i \mathop = 1}^\infty 2^{-i} \map \inf {1, \size {\max_{j \mathop \le i} \frac 1 {\size {x - r_j} } - \max_{j \mathop \le i} \frac 1 {\size {y - r_j} } } }$
Let $d': \R \times \R \to \R$ be the Euclidean metric.

Let $\epsilon \in \R_{>0}$ be a (strictly) positive real number.
Let $\map {B_\epsilon} {p; d}$ be an open $\epsilon$-ball of $p$ in $\R$ on $d$.
Let $\map {B'_\epsilon} {p; d'}$ be an open $\epsilon$-ball of $p$ in $\R$ on $d'$.

Then:

$\map {B_\epsilon} {p; d} \subseteq \map {B'_\epsilon} {p; d'}$


Proof
Let $p \in \R$.
Let $\epsilon \in \R_{>0}$.
Let $x \in \map {B_\epsilon} {p; d}$.

Then:














\(\ds \map d {x, p}\)

\(<\)







\(\ds \epsilon\)














\(\ds \leadsto \ \ \)





\(\ds \epsilon\)

\(>\)







\(\ds \size {x - y} + \sum_{i \mathop = 1}^\infty 2^{-i} \map \inf {1, \size {\max_{j \mathop \le i} \frac 1 {\size {x - r_j} } - \max_{j \mathop \le i} \frac 1 {\size {y - r_j} } } }\)




















\(\ds \)

\(\ge\)







\(\ds \size {x - y}\)




















\(\ds \)

\(=\)







\(\ds \map {d'} {x, p}\)









Thus:

$x \in \map {B_\epsilon} {p; d} \implies x \in \map {B_\epsilon} {p; d'}$
and the result follows by Definition of Subset.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $30$. The Rational Numbers: $5$




