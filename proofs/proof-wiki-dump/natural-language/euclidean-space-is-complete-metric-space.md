# 

Source: https://proofwiki.org/wiki/Euclidean_Space_is_Complete_Metric_Space

Theorem
Let $m$ be a positive integer.
Then the Euclidean space $\R^m$, along with the Euclidean metric, forms a complete metric space.


Proof
Let $\sequence {\tuple {x_{n, 1}, x_{n, 2}, \ldots, x_{n, m} } }_{n \mathop \in \N} $ be a Cauchy sequence in $\R^m$.
Let $\epsilon > 0$.
Then $\dfrac \epsilon m > 0$.
We have that Real Number Line is Complete Metric Space.
Therefore:

$\exists y_1, y_2, \ldots, y_m \in \R$ and $N_1, N_2, \ldots, N_m \in \N$ (depending on $\epsilon$)
such that:

$\forall k \in \N: 1 \le k \le m: \forall n_k > N_k: \sequence {x_{n, k} – y_k}  < \dfrac \epsilon m$

From Euclidean Space is Normed Vector Space:

$\ds \norm {\tuple {x_{n, 1}, x_{n, 2}, \ldots, x_{n, m} } - \tuple {y_1, y_2, \ldots, y_m} } \le \sum_{k \mathop = 1}^m \size {x_{n, k} – y_k} < \epsilon$
Hence the Euclidean space is a complete metric space.
$\blacksquare$


Sources
1953: Walter Rudin: Principles of Mathematical Analysis ... (previous) ... (next): $3.11 \text c$




