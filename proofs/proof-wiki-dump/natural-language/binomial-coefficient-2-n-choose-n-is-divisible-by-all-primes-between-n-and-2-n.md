# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_2_n_Choose_n_is_Divisible_by_All_Primes_between_n_and_2_n

Theorem
Let $\dbinom {2 n} n$ denote a binomial coefficient.

Then for all prime numbers $p$ such that $n < p < 2 n$:

$p \divides \dbinom {2 n} n$
where $\divides$ denotes divisibility.


Proof
By definition of binomial coefficient:














\(\ds \dbinom {2 n} n\)

\(=\)







\(\ds \dfrac {\paren {2 n}!} {\paren {n!}^2}\)





where $n!$ denotes the factorial of $n$








\(\ds \leadsto \ \ \)





\(\ds \dbinom {2 n} n \paren {n!}^2\)

\(=\)







\(\ds \paren {2 n}!\)










Let $\mathbb P$ denote the set of prime numbers.
Let $p \in \mathbb P$ such that $n < p < 2 n$.
By definition of factorial:

$p \divides \paren {2 n}!$
That is:

$p \divides \dbinom {2 n} n \paren {n!}^2$

From Prime iff Coprime to all Smaller Positive Integers:

$p \nmid n!$
where $\nmid$ denotes non-divisibility.
and so:

$p \nmid \paren {n!}^2$

But from Euclid's Lemma for Prime Divisors, $p$ is a divisor of either $\dbinom {2 n} n$ or $\paren {n!}^2$.
Hence it must be the case that:

$p \divides \dbinom {2 n} n$
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.2$: Divisibility and factorization in $\mathbf Z$: Exercise $3$




