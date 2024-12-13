# 

Source: https://proofwiki.org/wiki/Number_of_Primes_is_Infinite/Proof_6

Theorem
The number of primes is infinite.


Proof
Let $p_1, p_2, \ldots, p_j$ be the first $j$ primes.
For each real $x$ and natural number $j$, let:

$\map {M_j} x = \set {n \in \N \mid n \le x, \, n \text { is not divisible by any prime } p \text { with } p > p_j}$
Define:

$\map {N_j} x = \# \map {M_j} x$
Let $n \in \map {M_j} x$ for some $x$, $j$. 
We can write: 

$n = n_*^2 m$
where $n_*$ and $m$ are integers with $m$ square-free.
By the Fundamental Theorem of Arithmetic, we may uniquely write: 

$\ds m = \prod_{i \mathop = 1}^j p_j^{e_j}$
where $e_j \in \set {0, 1}$.
Since there are $2$ choices for each $e_j$, there are $2^j$ possible values of $m$.
Note that since $m \ge 1$, we have: 

$n_*^2 \le n \le x$
so:

$n_* \le \sqrt n \le \sqrt x$
So, there at most $\sqrt x$ possible values of $n_*$. 
So, there are at most $2^j \sqrt x$ possible values of $n$.
That is:

$\map {N_j} x \le 2^j \sqrt x$
Aiming for a contradiction, suppose that there are only finitely many primes.
In particular, assume that there are $k$ primes. 
Then:

$\map {N_k} x = x$
for each $x$, since there are no primes exceeding $p_k$. 
So, we have: 

$x \le 2^k \sqrt x$
for all $x$. 
But this does not hold for all $x$, for example taking $x = 2^{2 k} + 1$. 
So, we have arrived at a contradiction.
So there are infinitely many primes.
$\blacksquare$





