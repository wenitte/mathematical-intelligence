# 

Source: https://proofwiki.org/wiki/Convergent_Subsequence_of_Cauchy_Sequence/Normed_Vector_Space



Theorem
Let $\struct {X, \norm {\,\cdot\,} }$ be a normed vector space.
Let $\sequence{x_n}_{n \mathop \in \N}$ be a Cauchy sequence in $\struct {X, \norm {\,\cdot\,} }$. 
Let $x \in X$.

Then $\sequence {x_n}$ converges to $x$ if and only if $\sequence {x_n}$ has a subsequence that converges to $x$.


Proof
Necessary Condition
Suppose is a Cauchy sequence$\sequence {x_n}$ which converges to $x$.
By Limit of Subsequence equals Limit of Sequence, $\sequence{x_n}$ has a subsequence of itself that converges to $x$.
$\Box$


Sufficient Condition
Suppose that $\sequence {x_{n_k}}$ is a subsequence of $\sequence {x_n}$ that converges to $x$.

Let $\epsilon$ be a strictly positive real number.
By the definition of a Cauchy sequence, there exists a real number $M$ such that:

$\ds \forall i, j \in \N: i, j > M \implies \norm {x_i - x_j} < \frac \epsilon 2$
By the definition of convergence, there exists a real number $N$ such that:

$\ds \forall k \in \N: k > N \implies \norm {x_{n_k} - x} < \frac \epsilon 2$
By the Axiom of Archimedes, there exists a natural number $K > \max \set {M, N}$.
Therefore, by the triangle inequality:

$\ds \forall m \in \N: m > K \implies \norm {x_m - x} \le \norm {x_m - x_K} + \norm {x_K - x} < \frac \epsilon 2 + \frac \epsilon 2 = \epsilon$
That is, $\sequence {x_n}$ converges to $x$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




