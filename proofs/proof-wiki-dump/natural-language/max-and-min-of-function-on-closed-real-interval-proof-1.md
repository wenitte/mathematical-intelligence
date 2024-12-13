# 

Source: https://proofwiki.org/wiki/Max_and_Min_of_Function_on_Closed_Real_Interval/Proof_1

Theorem
Let $f$ be a real function which is continuous on the closed interval $\closedint a b$.

Then $f$ reaches a maximum and a minimum on $\closedint a b$.


Proof
From Image of Closed Real Interval is Bounded, we have that $f$ is bounded on $\closedint a b$.
Let $d$ be the supremum of $f$ on $\closedint a b$.
Consider a sequence $\sequence {x_n}$ in $\closedint a b$ such that $\size {\map f {x_n} } \to d$ as $n \to \infty$.
From the corollary to Limit of Sequence to Zero Distance Point, this can always be found.
Now $\closedint a b$ is a closed interval
So from Convergent Subsequence in Closed Interval, $\sequence {x_n}$ has a subsequence $\sequence {x_{n_r} }$ which converges to some $\xi \in \closedint a b$.
Because $f$ is continuous on $\closedint a b$, it follows from Limit of Image of Sequence that $\map f {x_{n_r} } \to \map f \xi$ as $r \to \infty$.
So $\map f \xi = d$ and thus the supremum $d$ is indeed a maximum.

A similar argument shows that the infimum is a minimum.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 9.12$




