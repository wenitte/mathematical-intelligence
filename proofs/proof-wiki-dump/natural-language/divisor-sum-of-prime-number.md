# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_Prime_Number



Theorem
Let $n$ be a positive integer.
Let $\map {\sigma_1} n$ be the divisor sum function of $n$.

Then $\map {\sigma_1} n = n + 1$ if and only if $n$ is prime.


Proof
From Rule of Transposition, we may replace the only if statement by its contrapositive.
Therefore, the following suffices:


Sufficient Condition
Suppose $n$ is a prime.
By definition, the only positive divisors of $n$ are $1$ and $n$ itself.
Therefore $\map {\sigma_1} n$, defined as the sum of the divisors of $n$, equals $n + 1$.
$\Box$


Necessary Condition
Suppose $n$ is not a prime.
From One Divides all Integers and Integer Divides Itself, both $1$ and $n$ are divisors of $n$.
As $n$ is composite:

$\exists r, s \in \N: r, s > 1: r s = n$
Trivially, both $r$ and $s$ are divisors of $n$.
Hence:

$\map {\sigma_1} n \ge n + 1 + r + s > n + 1$
$\blacksquare$


Also see
Divisor Sum of Power of Prime


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $1$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1$




