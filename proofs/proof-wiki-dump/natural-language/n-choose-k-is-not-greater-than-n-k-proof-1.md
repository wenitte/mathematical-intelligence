# 

Source: https://proofwiki.org/wiki/N_Choose_k_is_not_greater_than_n%5Ek/Proof_1

Theorem
$\forall n \in \Z, k \in \Z: 1 \le k \le n: \dbinom n k < n^k$
where $\dbinom n k$ is a binomial coefficient.
Equality holds when $k = 0$ and $k = 1$.


Proof
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





