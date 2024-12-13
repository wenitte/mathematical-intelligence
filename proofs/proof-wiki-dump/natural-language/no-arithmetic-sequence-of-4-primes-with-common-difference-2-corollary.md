# 

Source: https://proofwiki.org/wiki/No_Arithmetic_Sequence_of_4_Primes_with_Common_Difference_2/Corollary

Definition
Let $n \in \Z$.
Let $\map {S_k} n = \set {n, n + 2, n + 4, \ldots, n + 2 k}$ where $k > 2$.
Then it can not be the case that all elements of $S$ are primes.


Proof
From Unique Sequence of Consecutive Odd Numbers which are Prime the set $\map {S_2} 3 = \set {3, 5, 7}$ consists only of primes.
From No Arithmetic Sequence of 4 Primes with Common Difference 2, the set $\map {S_3} n$ contains at least one non-prime.
As $\map {S_{k - 1} } n \subset \map {S_k} n$ it follows that for $k \ge 4$, the set $\map {S_k} n$ also contains at least one non-prime.
$\blacksquare$





