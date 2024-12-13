# 

Source: https://proofwiki.org/wiki/Group_Direct_Product_of_Cyclic_Groups/Corollary

Theorem
Let $n_1, n_2, \ldots, n_s$ be a finite sequence of integers, all greater than $1$, such that for any pair of them $n_i$ and $n_j$, $n_i \perp n_j$.
Let $G_i$ be a cyclic group of order $n_i$ for each $i: 1 \le i \le s$.
Then $G_1 \times G_2 \times \cdots \times G_s$ is cyclic of order $n_1 n_2 \ldots n_s$.


Proof
When $s = 1$ the result is trivial.

Assume the result holds for $s = k$.
Then $H = G_1 \times G_2 \times \ldots \times G_k$ is cyclic of order $n_1 n_2 \ldots n_k$.
Applying the main result to $H \times G_{k + 1}$ gives us the result for $s = k + 1$.
The result follows by induction.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $13$: Direct products: Corollary $13.2$




