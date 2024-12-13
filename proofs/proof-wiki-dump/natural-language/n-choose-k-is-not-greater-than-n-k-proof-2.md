# 

Source: https://proofwiki.org/wiki/N_Choose_k_is_not_greater_than_n%5Ek/Proof_2

Theorem
$\forall n \in \Z, k \in \Z: 1 \le k \le n: \dbinom n k < n^k$
where $\dbinom n k$ is a binomial coefficient.
Equality holds when $k = 0$ and $k = 1$.


Proof
We dismiss the cases where $k < 0$ by observing that in such cases $\dbinom n k = 0$ while $n^k > 0$.
Similarly we dismiss $k = 0$: we have $\dbinom n 0 = 1 = n^0$.

Let:

$N = \set {1, \ldots, n}$
$K = \set {1, \ldots, k}$
From Cardinality of Set of Strictly Increasing Mappings, $\dbinom n k$ is the number of strictly increasing mappings from $K$ to $N$.
From Cardinality of Set of All Mappings, $n^k$ is the number of all mappings from $K$ to $N$.
For $k = 1$ there is exactly 1 mapping from $K$ to $N$ which is trivially strictly increasing.

Otherwise we have that $K$ has more than one element, and so therefore does $n$.
The mapping $f: K \to N: \forall s \in K: \map f s = 1$ is clearly not a strictly increasing mapping.
So not all mappings from $K$ to $N$ are strictly increasing.
Hence a strict inequality holds, and so $\dbinom n k < n^k$.
$\blacksquare$





