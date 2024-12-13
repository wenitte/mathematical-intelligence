# 

Source: https://proofwiki.org/wiki/Limit_of_Subsequence_equals_Limit_of_Sequence/Real_Numbers

Theorem
Let $\sequence {x_n}$ be a sequence in $\R$.
Let $l \in \R$ such that:

$\ds \lim_{n \mathop \to \infty} x_n = l$
Let $\sequence {x_{n_r} }$ be a subsequence of $\sequence {x_n}$.

Then:

$\ds \lim_{r \mathop \to \infty} x_{n_r} = l$

That is, the limit of a convergent sequence equals the limit of a subsequence of it.


Proof
Let $\epsilon > 0$.
As $\ds \lim_{n \mathop \to \infty} x_n = l$, it follows that:

$\exists N: \forall n > N: \size {x_n - l} < \epsilon$

Now let $R = N$.
Then from Strictly Increasing Sequence of Natural Numbers‎:

$\forall r > R: n_r \ge r$
Thus $n_r > N$ and so:

$\size {x_n - l} < \epsilon$

The result follows.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: $\S 5.2$




