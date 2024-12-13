# 

Source: https://proofwiki.org/wiki/Point_in_Hilbert_Sequence_Space_has_no_Compact_Neighborhood

Theorem
Let $A$ be the set of all real sequences $\sequence {x_i}$ such that the series $\ds \sum_{i \mathop \ge 0} x_i^2$ is convergent.
Let $\ell^2 = \struct {A, d_2}$ be the Hilbert sequence space on $\R$.

Then no point of $\ell^2$ has a compact neighborhood.


Proof
From Hilbert Sequence Space is Metric Space, $\ell^2$ is a metric space.
Let $x = \sequence {x_i} \in A$ be a point of $\ell^2$.
Consider the closed $\epsilon$-ball of $x$ in $\ell^2$:

$\map { {B_\epsilon}^-} x := \set {y \in A: \map {d_2} {x, y} \le \epsilon}$
for some $\epsilon \in \R_{>0}$.

Consider the point:

$\sequence {y_n} = \tuple {x_1, x_2, \ldots, x_{n - 1}, x_n + \epsilon, x_{n + 1}, \ldots}$
We have that $\sequence {y_n} \in \map { {B_\epsilon}^-} x$.
But for $m \ne n$ we have that:

$\map {d_2} {y_m, y_n} = \epsilon \sqrt 2$
and so $\sequence {y_n}$ has no convergent subsequence.

Thus $\map { {B_\epsilon}^-} x$ is not compact.
So $x$ has no compact neighborhood.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $36$. Hilbert Space: $3$




