# 

Source: https://proofwiki.org/wiki/Image_of_Closed_Real_Interval_is_Bounded

Theorem
Let $f$ be a real function which is continuous on the closed interval $\closedint a b$.

Then $f$ is bounded on $\closedint a b$.


Proof
Suppose $f$ is not bounded on $\closedint a b$.
Then from the corollary to Limit of Sequence to Zero Distance Point, there exists a sequence $\sequence {x_n}$ in $\closedint a b$ such that $\size {\map f {x_n} } \to +\infty$ as $n \to \infty$.
Since $\closedint a b$ is a closed interval, from Convergent Subsequence in Closed Interval, $\sequence {x_n}$ has a subsequence $\sequence {x_n}$ which converges to some $\xi \in \closedint a b$.
Because $f$ is continuous on $\closedint a b$, it follows from Limit of Image of Sequence that $\map f {x_{n_r} } \to \map f \xi$ as $r \to \infty$.
But this contradicts our supposition that there exists a sequence $\sequence {x_n}$ in $\closedint a b$ such that $\size {\map f {x_n} } \to +\infty$ as $n \to \infty$.
The result follows.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $5$: Compact spaces: $5.1$: Motivation: Proposition $5.1.1$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 9.11$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): continuous function (vii)




