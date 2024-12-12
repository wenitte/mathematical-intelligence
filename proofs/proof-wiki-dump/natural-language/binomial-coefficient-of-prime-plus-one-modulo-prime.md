# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_of_Prime_Plus_One_Modulo_Prime

Theorem
Let $p$ be a prime number.

Then:

$2 \le k \le p - 1 \implies \dbinom {p + 1} k \equiv 0 \pmod p$
where $\dbinom {p + 1} k$ denotes a binomial coefficient.


Proof
From Binomial Coefficient of Prime, we have:

$\dbinom p k \equiv 0 \pmod p$
when $1 \le k \le p - 1$.
From Pascal's Rule:

$\dbinom {p + 1} k = \dbinom p {k - 1} + \dbinom p k$
The result follows immediately.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $10 \ \text{(d)}$




