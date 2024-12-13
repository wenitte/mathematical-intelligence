# 

Source: https://proofwiki.org/wiki/Limit_of_Integer_to_Reciprocal_Power/Proof_1

Theorem
Let $\sequence {x_n}$ be the real sequence defined as $x_n = n^{1/n}$, using exponentiation.
Then $\sequence {x_n}$ converges with a limit of $1$.


Proof
From Number to Reciprocal Power is Decreasing we have that the real sequence $\sequence {n^{1/n} }$ is decreasing for $n \ge 3$.
Now, as $n^{1 / n} > 0$ for all positive $n$, it follows that $\sequence {n^{1 / n} }$ is bounded below (by $0$, for a start).
Thus the subsequence of $\sequence {n^{1 / n} }$ consisting of all the terms of $\sequence {n^{1 / n} }$ where $n \ge 3$ is convergent by the Monotone Convergence Theorem (Real Analysis).
Now we need to demonstrate that this limit is in fact $1$.
Let $n^{1 / n} \to l$ as $n \to \infty$.

Having established this, we can investigate the subsequence $\sequence {\paren {2 n}^{1 / {2 n} } }$.
By Limit of Subsequence equals Limit of Real Sequence, this will converge to $l$ also.
From Limit of Root of Positive Real Number, we have that $2^{1 / {2 n} } \to 1$ as $n \to \infty$.
So $n^{1 / {2 n} } \to l$ as $n \to \infty$ by the Combination Theorem for Sequences.
Thus:

$n^{1 / n} = n^{1 / {2 n} } \cdot n^{1 / {2 n} } \to l \cdot l = l^2$
as $n \to \infty$.
So $l^2 = l$, and as $l \ge 1$ the result follows.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Exercise $\S 5.7 \ (1)$




