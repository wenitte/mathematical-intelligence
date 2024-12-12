# 

Source: https://proofwiki.org/wiki/Cauchy_Sequence_in_Positive_Integers_under_Usual_Metric_is_eventually_Constant

Theorem
Let $\Z_{>0}$ be the set of (strictly) positive integers.
Let $d: \Z_{>0} \times \Z_{>0} \to \R$ be the usual (Euclidean) metric on $\Z_{>0}$.

Let $\sequence {x_n}$ be a Cauchy sequence in $\struct {\Z_{>0}, d}$.
Then:

$\exists m, n \in \Z_{>0}: \forall r > n: x_r = m$
That is, $\sequence {x_n}$ is eventually constant.


Proof
Let $\sequence {x_n}$ be a Cauchy sequence in $\struct {\Z_{>0}, d}$.
By definition:

$\forall \epsilon \in \R_{>0}: \exists N \in \N: \forall m, n \in \N: m, n \ge N: \map d {x_n, x_m} < \epsilon$
Let $\epsilon < 1$, say: $\epsilon = \dfrac 1 2$.
By the definition of $d$:

$\forall m, n \in \N: x_m \ne x_n \implies \map d {x_m, x_n} \ge 1$
So the only possible way for:

$\forall m, n \in \N: m, n \ge N: \map d {x_n, x_m} < \epsilon$
is for $x_m = x_n$.
Hence the result.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $32$. Special Subsets of the Real Line: $10$




