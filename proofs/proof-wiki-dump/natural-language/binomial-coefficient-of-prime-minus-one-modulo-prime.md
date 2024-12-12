# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_of_Prime_Minus_One_Modulo_Prime

Theorem
Let $p$ be a prime number.

Then:

$0 \le k \le p - 1 \implies \dbinom {p - 1} k \equiv \left({-1}\right)^k \pmod p$
where $\dbinom {p - 1} k$ denotes a binomial coefficient.


Proof
From Binomial Coefficient of Prime, we have:

$\dbinom p k \equiv 0 \pmod p$
when $1 \le k \le p - 1$.
From Pascal's Rule:

$\dbinom {p-1} k + \dbinom {p - 1} {k - 1} = \dbinom p k \equiv 0 \pmod p$
This certainly holds for $k = 1$, and so we have:

$\dbinom {p - 1} 1 + \dbinom {p - 1} 0 = \dbinom p 1 \equiv 0 \pmod p$
But from Binomial Coefficient with Zero:

$\dbinom {p - 1} 0 = 1 \equiv 1 \pmod p$
So:

$\dbinom {p - 1} 1 \equiv -1 \pmod p$
Then:

$\dbinom {p - 1} 2 + \dbinom {p - 1} 1 = \dbinom p 2 \equiv 0 \pmod p$
and so:

$\dbinom {p - 1} 2 \equiv 1 \pmod p$
The result follows.
$\blacksquare$


Sources
1991: Ivan Niven, Herbert S. Zuckerman and Hugh L. Montgomery: An Introduction to the Theory of Numbers (5th ed.): $\S 2.1$: Exercise $44$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $10 \ \text{(c)}$




