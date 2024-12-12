# 

Source: https://proofwiki.org/wiki/Binomial_Theorem/Abel%27s_Generalisation/x%2By_%3D_0

Theorem
Consider Abel's Generalisation of Binomial Theorem:

$\ds \paren {x + y}^n = \sum_k \binom n k x \paren {x - k z}^{k - 1} \paren {y + k z}^{n - k}$

This holds in the special case where $x + y = 0$.


Proof
As $x + y = 0$, we can substitute $y = -x$, and so:

$\ds \sum_k \binom n k x \paren {x - k z}^{k - 1} \paren {-x + k z}^{n - k} = 0$
is to be proved.

So:














\(\ds \sum_k \binom n k x \paren {x - k z}^{k - 1} \paren {-x + k z}^{n - k}\)

\(=\)







\(\ds \sum_k \binom n k x \paren {x - k z}^{k - 1} \paren {-1}^{n - k} \paren {x - k z}^{n - k}\)




















\(\ds \)

\(=\)







\(\ds \sum_k \binom n k \paren {-1}^{n - k} x \paren {x - k z}^{n - 1}\)










Then Sum over $k$ of $\dbinom r k$ by $\paren {-1}^{r - k}$ by Polynomial can be applied:

$\ds \sum_k \binom r k \paren {-1}^{r - k} \map {P_r} k = r! \, b_r$
where:

$\map {P_r} k = b_0 + b_1 k + \cdots + b_r k^r$ is a polynomial in $k$ of degree $r$.

As the coefficient of $k^n = 0$, we have:

$\ds \sum_k \binom n k \paren {-1}^{n - k} \paren {b_0 + b_1 k + \cdots + b_{n - 1} k^n + b_n 0} = 0$
Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $50$




