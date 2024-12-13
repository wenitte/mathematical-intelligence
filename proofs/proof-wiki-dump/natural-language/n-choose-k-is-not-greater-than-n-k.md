# 

Source: https://proofwiki.org/wiki/N_Choose_k_is_not_greater_than_n%5Ek

Theorem
$\forall n \in \Z, k \in \Z: 1 \le k \le n: \dbinom n k < n^k$
where $\dbinom n k$ is a binomial coefficient.
Equality holds when $k = 0$ and $k = 1$.


Proof 1
First let $k > 1$.














\(\ds \binom n k\)

\(=\)







\(\ds \frac {n!} {k! \, \paren {n - k}!}\)





Definition of Binomial Coefficient














\(\ds \)

\(<\)







\(\ds \frac {n!} {\paren {n - k}!}\)





as $k! > 0$ by Definition of Factorial














\(\ds \)

\(=\)







\(\ds \underbrace {n \paren {n - 1} \cdots (n - k + 1)}_{k \text { factors} }\)





expanding the factorials














\(\ds \)

\(<\)







\(\ds n^k\)





for all $n, k$ here considered



For $k > 1$, the product has at least two factors.
Hence at least one factor is strictly less than $n$.
$\Box$

Let $k < 0$.
By definition of binomial coefficient:

$\dbinom n k = 0$
while $n^k > 0$.
Hence the result follows for $k < 0$.
$\Box$

Finally let $0 \le k \le 1$.
From Binomial Coefficient with Zero:

$\dbinom n 0 = 1 = n^0$
From Binomial Coefficient with One:

$\dbinom n 1 = n = n^1$
So equality holds when $k = 0$ or $k = 1$.
$\Box$

Hence the result has been shown to hold for all $k \in \Z$.
$\blacksquare$


Proof 2
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





