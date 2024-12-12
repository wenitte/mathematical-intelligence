# 

Source: https://proofwiki.org/wiki/Closed_and_Bounded_Subset_of_Normed_Vector_Space_is_not_necessarily_Compact/Proof_2

Theorem
Let $\struct {X, \norm {\,\cdot\,} }$ be a normed vector space.
Let $K \subset X$ be a closed and bounded subset.

Then $K$ is not necessarily compact.


Proof
Let $\struct {\CC \closedint 0 1, \norm {\, \cdot \,}_\infty}$ be the normed vector space of continuous on closed interval real-valued functions with supremum norm.
Consider a closed unit ball with the center at $0$ at $\struct {\CC, \norm {\, \cdot \,}_\infty}$:

$K := \set {x \in \CC \closedint 0 1 : \norm x_\infty \le 1}$.
We have that $K$ is bounded and closed.
Consider the following sequence of graphs:

$\map {x_n} t = \begin{cases}
2^{n + 2} t & : \ds \sum_{i \mathop = 1}^n \frac 1 {2^i} \le t < \sum_{i \mathop = 1}^n \frac 1 {2^i} + \frac 1 {2^{n + 2}}  \\
\ds 1 - 2^{n + 2} \paren {t - \paren {\sum_{i \mathop = 1}^n \frac 1 {2^i} + \frac 1 {2^{n + 2}}}} & : \ds \sum_{i \mathop = 1}^n \frac 1 {2^i} + \frac 1 {2^{n + 2}} \le t \le \sum_{i \mathop = 1}^{n + 1} \frac 1 {2^i} \\
0 & : \text {otherwise}
\end{cases}$
where $n \in \N$.
We have that:

$\forall n,m \in \N : n \ne m \implies \norm {x_n - x_m}_\infty = 1$
Hence, $\sequence {x_n}_{n \mathop \in \N}$ is not a Cauchy sequence.
We have that every convergent sequence is a Cauchy sequence.
Hence, $\sequence {x_n}_{n \mathop \in \N}$ is not convergent.
Therefore, any subsequence of $\sequence {x_n}_{n \mathop \in \N}$ is also divergent.
Thus, a closed unit ball, which is closed and bounded, is not compact in $\struct {\CC \closedint 0 1, \norm {\, \cdot \,}_\infty}$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 1.5$: Normed and Banach spaces. Compact sets




