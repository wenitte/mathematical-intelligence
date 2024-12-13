# 

Source: https://proofwiki.org/wiki/No_Arithmetic_Sequence_of_4_Primes_with_Common_Difference_2

Definition
There exist no $n \in \Z_{>0}$ such that $n, n + 2, n + 4, n + 6$ are all prime.


Corollary
Let $n \in \Z$.
Let $\map {S_k} n = \set {n, n + 2, n + 4, \ldots, n + 2 k}$ where $k > 2$.
Then it can not be the case that all elements of $S$ are primes.


Proof
Aiming for a contradiction, suppose $S$ is a set of $4$ prime numbers of the form $n, n + 2, n + 4, n + 6$.
$S$ must contain as a subset a set of primes $\set {n, n + 2, n + 4}$
From Unique Sequence of Consecutive Odd Numbers which are Prime, the only one of these is $\set {3, 5, 7}$.
The only sets of the form $\set {n, n + 2, n + 4, n + 6}$ containing $\set {3, 5, 7}$ are:

$(1): \quad \set {1, 3, 5, 7}$: as $1$ is by convention not a prime, then this is not $S$.
$(2): \quad \set {3, 5, 7, 9}$: as $9 = 3 \times 3$ is not a prime, then this is not $S$.
There are no more possible $\set {n, n + 2, n + 4, n + 6}$ all prime.
Hence, by Proof by Contradiction, $S$ does not exist.
$\blacksquare$





