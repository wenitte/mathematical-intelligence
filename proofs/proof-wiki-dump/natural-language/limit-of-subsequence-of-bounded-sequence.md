# 

Source: https://proofwiki.org/wiki/Limit_of_Subsequence_of_Bounded_Sequence

Theorem
Let $\sequence {x_n}$ be a sequence in $\R$.
Let $\sequence {x_n}$ be bounded.
Let $b \in \R$ be a real number.
Suppose that $\forall N: \exists n > N: x_n \ge b$.

Then $\sequence {x_n}$ has a subsequence which converges to a limit $l \ge b$.


Proof
Let us pick $N \in \N$.
Then $\exists n_1 > N: x_{n_1} \ge b$.
Again, $\exists n_2 > n_1: x_{n_2} \ge b$.
And so on: for each $n_k$ we find, $\exists n_{k+1} > n_k: x_{n_{k+1}} \ge b$.
In this way we can build a subsequence of $\sequence {x_n}$ each of whose terms are $b$ or bigger.
By the Bolzano-Weierstrass Theorem, this subsequence itself contains a subsequence $\sequence {x_{n_r} }$ which is convergent.
Now, suppose $x_{n_r} \to l$ as $r \to \infty$.
Since $x_{n_r} \ge b$ it follows from Lower and Upper Bounds for Sequences that $l \ge b$.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Exercise $\S 5.15 \ (3)$




