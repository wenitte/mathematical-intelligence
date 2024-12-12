# 

Source: https://proofwiki.org/wiki/Factorial_Divisible_by_Prime_Power

Theorem
Let $n \in \Z: n \ge 1$.
Let $p$ be a prime number.
Let $n$ be expressed in base $p$ notation:

$\ds n = \sum_{j \mathop = 0}^m r_j p^j$
where $0 \le r_j < p$.

Let $n!$ be the factorial of $n$.
Let $p^\mu$ be the largest power of $p$ which divides $n!$, that is:

$p^\mu \divides n!$
$p^{\mu + 1} \nmid n!$

Then:

$\mu = \dfrac {n - \map {s_p} n} {p - 1}$
where $\map {s_p} n$ is the digit sum of $n$.


Proof
If $p > n$, then $\map {s_p} n = n$ and we have that:

$\dfrac {n - \map {s_p} n} {p - 1} = 0$
which ties in with the fact that $\floor {\dfrac n p} = 0$.
Hence the result holds for $p > n$.

So, let $p \le n$.
From De Polignac's Formula, we have that:














\(\ds \mu\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac n {p^k} }\)




















\(\ds \)

\(=\)







\(\ds \floor {\frac n p} + \floor {\frac n {p^2} } + \floor {\frac n {p^3} } + \cdots + \floor {\frac n {p^s} }\)









where $p^s < n < p^{s + 1}$.

From Quotient and Remainder to Number Base: General Result:

$\ds \floor {\frac n {p^k} } = \sqbrk {r_m r_{m - 1} \ldots r_{k + 1} r_k}_p = \sum_{j \mathop = 0}^{m - k} r_j p^j$
where $0 \le r_j < p$.
Hence:














\(\ds \mu\)

\(=\)







\(\ds \sum_{k \mathop > 0} \paren {\sum_{j \mathop = 0}^{m - k} r_j p^j}\)




















\(\ds \)

\(=\)







\(\ds r_m p^{m - 1} + r_{m - 1} p^{m - 2} + \cdots + r_2 p + r_1\)




















\(\ds \)

\(+\)







\(\ds r_m p^{m - 2} + r_{m - 1} p^{m - 3} + \cdots + r_2\)




















\(\ds \)

\(+\)







\(\ds \cdots\)




















\(\ds \)

\(+\)







\(\ds r_m p + r_{m - 1}\)




















\(\ds \)

\(+\)







\(\ds r_m\)




















\(\ds \)

\(=\)







\(\ds r_m \sum_{j \mathop = 0}^{m - 1} p^j + r_{m - 1} \sum_{j \mathop = 0}^{m - 2} p^j + \cdots + r_2 \sum_{j \mathop = 0}^1 p^j + r_1 \sum_{j \mathop = 0}^0 p^j\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^m \paren {r_k \sum_{j \mathop = 0}^{k - 1} p^j}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^m \paren {r_k \frac {p^k - 1} {p - 1} }\)





from Sum of Geometric Sequence














\(\ds \)

\(=\)







\(\ds \frac 1 {p - 1} \paren {\sum_{k \mathop = 1}^m r_k p^k - \sum_{k \mathop = 1}^m r_k}\)









Hence the result.
$\blacksquare$


Historical Note
This result is due to Adrien-Marie Legendre, who published it in Essai sur la Théorie des Nombres (2nd edition) in $1808$.





