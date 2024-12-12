# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_involving_Prime

Theorem
Let $p$ be a prime number.
Let $\dbinom n p$ be a binomial coefficient.

Then:

$\dbinom n p \equiv \floor {\dfrac n p} \pmod p$
where:

$\floor {\dfrac n p}$
denotes the floor function.


Proof
Follows directly from Lucas' Theorem:

$\dbinom n k \equiv \dbinom {\floor {n / p} } {\floor {k / p} } \dbinom {n \bmod p} {k \bmod p} \pmod p$
where $k = p$.

Then:

$k \bmod p = 0$
and so by Binomial Coefficient with Zero:

$\dbinom {n \bmod p} {k \bmod p} = 1$
Also:

$\floor {k / p} = 1$
and by Binomial Coefficient with One:

$\dbinom {\floor {n / p} } {\floor {k / p} } = \floor {\dfrac n p}$

Thus:

$\dbinom n p \equiv \floor {\dfrac n p} \times 1 \pmod p$
Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $10 \ \text{(a)}$




