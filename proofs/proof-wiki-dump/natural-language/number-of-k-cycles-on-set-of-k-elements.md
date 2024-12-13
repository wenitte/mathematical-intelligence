# 

Source: https://proofwiki.org/wiki/Number_of_k-Cycles_on_Set_of_k_Elements

Theorem
Let $k \in \N$ be a natural number.
Let $S_k$ denote the symmetric group on $k$ letters.

The number of elements of $S_k$ which are $k$-cycles is $\paren {k - 1}!$.


Proof
Let $\N_k$ denote the set $\set {1, 2, \ldots, k}$.
Let $\pi$ be a $k$-cycle in $S_k$.
By definition, $\pi$ moves all $k$ elements of $\set {1, 2, \ldots, k}$.
Let $j \in \N_k$ be an arbitrary element of $\N_k$.
By definition of $k$-cycle, $k$ is the smallest integer such that $\map {\pi^k} j = j$.

Thus for each $r \in \set {1, 2, \ldots, k}$, $\map {\pi^r} j$ is a different element of $\N_k$.
That is:

$\set {\map {\pi^r} j: r \in \N_k} = \N_k$

Let $\pi$ and $\rho$ be $k$-cycles in $S_k$ such that $\pi \ne \rho$.
From the above, the distinguishing feature of $\rho$ and $\pi$ is the order of elements of $\N_k \setminus \set j$ that $\map {\pi^r} j$ and $\map {\rho^r} j$ move $j$ to for $1 \le r < k$.
Each different ordered $\paren {k - 1}$-tuple of $\N_k \setminus \set j$ corresponds to a different $k$-cycle of $S_k$
Thus there are as many $k$-cycles of $S_k$ as there are different ordered $\paren {k - 1}$-tuples of $\N_k \setminus \set j$.
From Number of Permutations, there are $\paren {k - 1}!$ different ordered $\paren {k - 1}$-tuples of $\N_k \setminus \set j$.
Hence the result.
$\blacksquare$





