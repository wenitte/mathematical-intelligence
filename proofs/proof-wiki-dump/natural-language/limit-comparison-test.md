# 

Source: https://proofwiki.org/wiki/Limit_Comparison_Test

Theorem
Let $\sequence {a_n}$ and $\sequence {b_n}$ be sequences in $\R$.
Let $\ds \frac {a_n} {b_n} \to l$ as $n \to \infty$ where $l \in \R_{>0}$.

Then the series $\ds \sum_{n \mathop = 1}^\infty a_n$ and $\ds \sum_{n \mathop = 1}^\infty b_n$ are either both convergent or both divergent.


Proof
Let $\ds \sum_{n \mathop = 1}^\infty b_n$ be convergent.
Then by Terms in Convergent Series Converge to Zero, $\sequence {b_n}$ converges to zero.
A Convergent Sequence is Bounded.
So it follows that:

$\exists H: \forall n \in \N_{>0}: a_n \le H b_n$
Thus, by the corollary to the Comparison Test, $\ds \sum_{n \mathop = 1}^\infty a_n$ is convergent.

Since $l > 0$, from Sequence Converges to Within Half Limit:

$\exists N: \forall n > N: a_n > \dfrac 1 2 l b_n$
Hence the convergence of $\ds \sum_{n \mathop = 1}^\infty a_n$ implies the convergence of $\ds \sum_{n \mathop = 1}^\infty b_n$.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 6.26 \ (2)$




