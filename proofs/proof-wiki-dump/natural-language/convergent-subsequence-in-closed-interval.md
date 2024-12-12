# 

Source: https://proofwiki.org/wiki/Convergent_Subsequence_in_Closed_Interval

Theorem
Let $\closedint a b$ be a closed real interval.

Then every sequence of points of $\closedint a b$ contains a subsequence which converges to a point in $\closedint a b$.


Proof
Let $\sequence {x_n}$ be a sequence in $\closedint a b$.
Since $\closedint a b$ is bounded in $\R$, it follows that $\sequence {x_n}$ is a bounded sequence.
By the Bolzano-Weierstrass Theorem, $\sequence {x_n}$ has a subsequence $\sequence {x_{n_r} }$ which is convergent.

Suppose $x_{n_r} \to l$ as $n \to \infty$.
Since $a \le x_{n_r} \le b$, from Lower and Upper Bounds for Sequences it follows that $a \le l \le b$.

So $\sequence {x_{n_r} }$ converges to a point in $\closedint a b$.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Exercise $\S 5.21 \ (4)$




