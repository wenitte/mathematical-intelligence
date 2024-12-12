# 

Source: https://proofwiki.org/wiki/Euclid%27s_Theorem/Corollary_2/Proof_1

Corollary to Euclid's Theorem
There is no largest prime number.


Proof
Let $\mathbb P$ be the set of all prime numbers.
Aiming for a contradiction, suppose there exists a largest prime number $p_m$.
Then:

$\mathbb P \subseteq \closedint 1 {p_m} = \set {1, 2, \ldots, p_m}$
and so $\mathbb P$ is a finite set.
By Euclid's Theorem, there exists a prime number $q$ such that $q \notin \mathbb P$.
But that means $q \notin \closedint 1 {p_m}$.
That is, $q > p_m$.
So $p_m$ is not the largest prime number after all.

Hence the result, by Proof by Contradiction.
$\blacksquare$





