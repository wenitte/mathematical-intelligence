# 

Source: https://proofwiki.org/wiki/Cauchy_Sequence_is_Bounded/Metric_Space

Theorem
Let $M = \struct {A, d}$ be a metric space.

Then every Cauchy sequence in $M$ is bounded.


Proof
Let $\sequence {x_n}$ be a Cauchy sequence in $M$.
By definition:

$\forall \epsilon > 0: \exists N \in \N: \forall m, n > N: \map d {x_n, x_m} < \epsilon$
Particularly, setting $\epsilon = 1$:

$\exists N_1: \forall m, n > N_1: \map d {x_n, x_m} < 1$
Note that since $N_1 \ge N_1$, this means that:

$\forall n \ge N_1: \map d {x_n, x_{N_1} } < 1$

To show $\sequence {x_n}$ is bounded, we need to show that there exists $a \in A$ and $K \in \R$ such that $\map d {x_n, a} \le K$ for all $x_n \in \sequence {x_n}$.

Let $K'$ be the maximum distance from $x_{N_1}$ to any of the earlier terms in the sequence.
That is, $K' = \max \set {\map d {x_{N_1}, x_1}, \map d {x_{N_1},  x_2}, \ldots, \map d {x_{N_1}, x_{N_1 - 1} } }$

Then:

Each $x_n$ for $n \ge N_1$ satisfies $\map d {x_{N_1}, x_n} \le 1$ by choice of $N_1$ as mentioned above
Each $x_n$ for $n < N_1$ satisfies $\map d {x_{N_1}, x_n} \le K'$ by choice of $K'$.

Thus, taking $a = x_{N_1}$ and $K = \max \set {K', 1}$, we have shown that each $x_n$ satisfies $\map d {a, x_n} \le K$.

So, $\sequence {x_n}$ is bounded.
$\blacksquare$


Sources
1957: Tom M. Apostol: Mathematical Analysis ... (previous) ... (next): $\S 12$-$2$: Convergent and divergent sequences




