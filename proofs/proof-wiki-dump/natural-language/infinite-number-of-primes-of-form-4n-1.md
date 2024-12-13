# 

Source: https://proofwiki.org/wiki/Infinite_Number_of_Primes_of_form_4n_-_1



Theorem
There are infinitely many prime numbers of the form $4 n - 1$.


Proof
Aiming for a contradiction, suppose the contrary.
That is, suppose there is a finite number of prime numbers of the form $4 n - 1$.
Let there be $k$ of them: $p_1, p_2, \ldots, p_k$.
Let $S = \set {p_1, p_2, \ldots, p_k}$.
Let $N$ be constructed as:

$\ds N = 4 \prod_{i \mathop = 1}^k p_i - 1$

If $N$ is a prime number, then it is of the form $4 n - 1$.
But then we have that $N \notin S$, which means that $S$ is not the complete set of prime numbers of the form $4 n - 1$.
Therefore $N$ must be composite.

Suppose all the prime factors of $N$ are of the form $4 n + 1$.
Then from Product of Integers of form $4 n + 1$ it follows that $N$ itself is of the form $4 n + 1$.
Therefore $N$ must have at least one prime factor $p$ of the form $4 n - 1$.
Suppose $p \in S$.
We have that:

$\ds p \divides 4 \prod_{i \mathop = 1}^k p_i$
and so:

$\ds p \divides 4 \prod_{i \mathop = 1}^k p_i - p$
So:

$N = q p + \left({p - 1}\right)$
where:

$q = \dfrac {\ds 4 \prod_{i \mathop = 1}^k p_i - p} p$

So applying the Euclidean Algorithm:














\(\ds \gcd \set {N, p}\)

\(=\)







\(\ds \gcd \set {p - 1, p}\)




















\(\ds \)

\(=\)







\(\ds \gcd \set {p - 1, 1}\)




















\(\ds \)

\(=\)







\(\ds 1\)









So if $p \in S$, then it cannot be a divisor of $N$.
Therefore there must be a prime numbers of the form $4 n - 1$ which is not in $S$.
Therefore $S$ is not the complete set of prime numbers of the form $4 n - 1$.
Therefore the assumption that $S$ is finite was false.
Hence the result.
$\blacksquare$


Also presented as
Some sources present this result as:

There are infinitely many prime numbers congruent to $3 \pmod 4$.


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $2$: Some Properties of $\Z$: Exercise $2.15$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.2$: Divisibility and factorization in $\mathbf Z$: Exercise $8$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.16$: The Sequence of Primes: Theorem $3$




