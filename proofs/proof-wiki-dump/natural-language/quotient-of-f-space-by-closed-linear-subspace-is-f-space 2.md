# 

Source: https://proofwiki.org/wiki/Quotient_of_F-Space_by_Closed_Linear_Subspace_is_F-Space

Theorem
Let $K$ be a topological field.
Let $\struct {X, d}$ be an $F$-space.
Let $N$ be a closed linear subspace of $X$. 
Let $X/N$ be the quotient vector space of $X$ modulo $N$.
Let $d_N$ be the quotient metric on $X/N$ induced by $d$.

Then $\struct {X/N, d_N}$ is an $F$-Space.


Proof
Let $\pi : X \to X/N$ be a quotient mapping.
Let $\tau_N$ be the quotient topology of $X$ modulo $N$.
From Quotient Metric on Vector Space induces Quotient Topology, $d_N$ induces $\tau_N$ and $d_N$ is an invariant metric. 
From Quotient Topological Vector Space is Topological Vector Space, $\struct {X/N, \tau_N}$ is a topological vector space.
To establish that $\struct {X/N, d_N}$ is an $F$-space, we only need to show that each Cauchy sequence in $\struct {X/N, d_N}$ converges.
Let $\sequence {u_n}_{n \mathop \in \N}$ be a Cauchy sequence in $\struct {X/N, d_N}$.
Pick $n_1 \in \N$ so that:

$\map {d_N} {u_n, u_m} < 2^{-1}$ for all $n, m \ge n_1$.
Now for each $j \ge 2$, inductively pick $n_j > n_{j - 1}$ such that:

$\map {d_N} {u_n, u_m} < 2^{-j}$ for all $n, m \ge n_j$
Then for each $j \in \N$, we have:

$\map {d_N} {u_{n_j}, u_{n_{j + 1} } } < 2^{-j}$
For each $j \in \N$, pick $v_j \in X$ such that $\map \pi {v_j} = u_{n_j}$.
Then for $j \ge 2$, we have: 

$\ds \inf_{z \mathop \in N} \map d {v_j - v_{j + 1}, z} < 2^{-j}$
So there exists $z_j \in N$ such that:

$\map d {v_j - v_{j + 1}, z_j} < 2^{-j}$
Then since $d$ is invariant, we have:

$\map d {v_j, v_{j + 1} + z_j} < 2^{-j}$
Set $x_1 = v_1$ and $x_j = v_j + z_{j - 1}$ for $j \ge 2$.
Then, we have:

$\map d {x_j, x_{j + 1} } < 2^{-j}$ for each $j \in \N$
and:

$\map \pi {x_j} = \map \pi {v_j} = u_{n_j}$
from Kernel of Quotient Mapping.
Now, by Metric Space Axiom $(\text M 3)$, we have, for each $m > n$:

$\ds \map d {x_n, x_m} \le \sum_{j \mathop = n}^{m - 1} \map d {x_j, x_{j + 1} } < \sum_{j \mathop = n}^{m - 1} 2^{-j}$
From Sum of Infinite Geometric Sequence, we have:

$\ds \sum_{j \mathop = 0}^\infty 2^{-j}$ converges.
From Cauchy's Convergence Criterion for Series, it follows that for each $\epsilon > 0$ there exists $N \in \N$ such that for $m > n \ge 0$, we have:

$\ds \sum_{j \mathop = n}^{m - 1} 2^{-j} < \epsilon$
so that:

$\map d {x_n, x_m} < \epsilon$
Hence $\sequence {x_n}_{n \mathop \in \N}$ is a Cauchy sequence.
Since $\struct {X, d}$ is an $F$-space, it is in particular a complete metric space.
So $\sequence {x_n}_{n \mathop \in \N}$ converges to $x$.
From the definition of the quotient topology, $\pi$ is continuous.
From Continuous Mapping is Sequentially Continuous, $\pi$ is sequentially continuous.
So $\map \pi {x_j} \to \map \pi x$ as $j \to \infty$.
That is, $u_{n_j} \to \map \pi x$ as $j \to \infty$.
From Convergent Subsequence of Cauchy Sequence, it follows that $\sequence {u_n}_{n \mathop \in \N}$ converges to $\map \pi x$.
Hence every Cauchy sequence in $\struct {X/N, d_N}$ converges.
Hence $\struct {X/N, d_N}$ is a complete metric space.
Hence $\struct {X/N, d_N}$ is an $F$-space.
$\blacksquare$





