# 

Source: https://proofwiki.org/wiki/De_Polignac%27s_Formula/Technique

Theorem
Let $n!$ be the factorial of $n$.
Let $p$ be a prime number.
Let $\mu$ be defined as:

$\ds \mu = \sum_{k \mathop > 0} \floor {\frac n {p^k} }$

When calculating $\mu$, the easiest way to calculate the next term is simply to divide the previous term by $p$ and discard the remainder:

$\floor {\dfrac n {p^{k + 1} } } = \floor {\floor {\dfrac n {p^k} } / p}$


Proof
From Floor of $\dfrac {x + m} n$: Corollary:

$\floor {\dfrac {x + m} n} = \floor {\dfrac {\floor x + m} n}$
which is valid for all integers $m, n$ such that $n > 0$.
In this instance, $m = 0$ and $n = p$, while $x = \dfrac n {p^k}$.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: $(8)$




