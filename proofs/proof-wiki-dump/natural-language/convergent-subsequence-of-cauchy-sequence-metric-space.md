# 

Source: https://proofwiki.org/wiki/Convergent_Subsequence_of_Cauchy_Sequence/Metric_Space



Theorem
Let $\struct {A, d}$ be a metric space.
Let $\sequence {x_n}_{n \mathop \in \N}$ be a Cauchy sequence in $A$. 
Let $x \in A$.

Then $\sequence {x_n}$ converges to $x$ if and only if it has a subsequence that converges to $x$.


Proof
Necessary Condition
If $\sequence {x_n}$ converges to $x$, it trivially follows that $\sequence {x_n}$ is a subsequence of itself that converges to $x$.
$\Box$


Sufficient Condition
Suppose that $\sequence {x_{n_k} }$ is a subsequence of $\sequence {x_n}$ that converges to $x$.

Let $\epsilon$ be a strictly positive real number.
By the definition of a Cauchy sequence, there exists a real number $M$ such that:

$\forall i, j \in \N: i, j > M \implies \map d {x_i, x_j} < \dfrac \epsilon 2$
By the definition of convergence, there exists a real number $N$ such that:

$\forall k \in \N: k > N \implies \map d {x_{n_k}, x} < \dfrac \epsilon 2$
By the Axiom of Archimedes, there exists a natural number $K > \max \set {M, N}$.
Therefore, by Metric Space Axiom $(\text M 2)$: Triangle Inequality:

$\forall m \in \N: m > K \implies \map d {x_m, x} \le \map d {x_m, x_K} + \map d {x_K, x} < \dfrac \epsilon 2 + \dfrac \epsilon 2 = \epsilon$
That is, $\sequence {x_n}$ converges to $x$.
$\blacksquare$





