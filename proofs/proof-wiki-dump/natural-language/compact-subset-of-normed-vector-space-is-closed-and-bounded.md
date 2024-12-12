# 

Source: https://proofwiki.org/wiki/Compact_Subset_of_Normed_Vector_Space_is_Closed_and_Bounded



Theorem
Let $\struct {X, \norm {\,\cdot\,}}$ be a normed vector space.
Let $K \subset X$ be a compact subset.

Then $K$ is closed and bounded.


Proof
Closedness
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence in $K$.
Suppose, $\sequence {x_n}_{n \mathop \in \N}$ converges to $L \in K$. 
Then there is a subsequence $\sequence {x_{n_k}}_{k \mathop \in \N}$ convergent to $L' \in K$. 
But $\sequence {x_{n_k}}_{k \mathop \in \N}$ is a subsequence of $\sequence {x_n}_{n \mathop \in \N}$.
Hence, $\sequence {x_{n_k}}_{k \mathop \in \N}$ converges to $L$.
By uniqueness of limits, $L = L'$.
By definition, $K$ is closed.


Boundedness
Suppose, $K$ is not bounded.
Then:

$\forall n \in \N : \exists x_n \in K: \norm {x_n} > n$
Therefore, no subsequence of $\sequence {x_n}_{n \mathop \in \N}$ is convergent.
Hence, $K$ is not compact.
This is in contradiction with the assumption.
Thus, $K$ is bounded.
$\blacksquare$

Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 1.5$: Normed and Banach spaces. Compact sets




