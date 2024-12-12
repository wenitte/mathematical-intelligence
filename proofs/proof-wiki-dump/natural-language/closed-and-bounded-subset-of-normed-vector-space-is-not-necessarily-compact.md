# 

Source: https://proofwiki.org/wiki/Closed_and_Bounded_Subset_of_Normed_Vector_Space_is_not_necessarily_Compact

Theorem
Let $\struct {X, \norm {\,\cdot\,} }$ be a normed vector space.
Let $K \subset X$ be a closed and bounded subset.

Then $K$ is not necessarily compact.


Proof 1
Let $\struct {\ell^2, \norm {\, \cdot \,}}_2$ be the 2-sequence space.
Let $K$ be a closed unit ball in $\struct {\ell^2, \norm {\, \cdot \,}}_2$:

$K := \set {\mathbf x \in \ell^2 : \norm {\mathbf x}_2 \le 1}$
$K$ is bounded and closed.
Let $\sequence {\mathbf x_n}_{n \mathop \in \N}$ be a sequence such that:

$\mathbf x_n := \tuple {0, \ldots 0, 1, 0, \ldots}$
where $1$ is in the $n$-th component of $\mathbf x_n$.
Then:

$\forall n \in \N : \mathbf x_n \in K \subset \ell^2$
However:

$\forall n, m \in \N : n \ne m : \norm {\mathbf x_n - \mathbf x_m}_2 = \sqrt 2$
In other words, $\sequence {\mathbf x_n}$ is not a Cauchy sequence.
By Convergent Subsequence of Cauchy Sequence, $\sequence {\mathbf x_n}$ has no convergent subsequence.
Therefore, a closed and bounded space $K$ has a sequence $\sequence {\mathbf x_n}_{n \mathop \in \N}$ which contains a non-convergent subsequence.
$\blacksquare$


Proof 2
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





