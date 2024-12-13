# 

Source: https://proofwiki.org/wiki/Number_as_Sum_of_Distinct_Primes

Theorem
For $n \ne 1, 4, 6$, $n$ can be expressed as the sum of distinct primes.


Proof
Let $S = \set {s_n}_{n \mathop \in N}$ be the set of primes.
Then $S = \set {2, 3, 5, 7, 11, 13, \dots}$.

By Bertrand-Chebyshev Theorem:

$s_{n + 1} \le 2 s_n$ for all $n \in \N$.
We observe that every integer $n$ where $6 < n \le 6 + s_6 = 19$ can be expressed as a sum of distinct elements in $\set {s_1, \dots, s_5} = \set {2, 3, 5, 7, 11}$.
Hence the result by Richert's Theorem.
$\Box$

Here is a demonstration of our claim:














\(\ds 1\)

\(\text {is}\)







\(\ds \text {less than the smallest prime } 2\)




















\(\ds 2\)

\(=\)







\(\ds 2\)




















\(\ds 3\)

\(=\)







\(\ds 3\)




















\(\ds 4\)

\(\ne\)







\(\ds 2 + 3\)




















\(\ds 5\)

\(=\)







\(\ds 5\)




















\(\ds 6\)

\(\ne\)







\(\ds 2 + 3 \text { or } 2 + 5\)




















\(\ds 7\)

\(=\)







\(\ds 7\)




















\(\ds 8\)

\(=\)







\(\ds 3 + 5\)




















\(\ds 9\)

\(=\)







\(\ds 2 + 7\)




















\(\ds 10\)

\(=\)







\(\ds 2 + 3 + 5\)




















\(\ds 11\)

\(=\)







\(\ds 11\)




















\(\ds 12\)

\(=\)







\(\ds 2 + 3 + 7\)




















\(\ds 13\)

\(=\)







\(\ds 2 + 11\)




















\(\ds 14\)

\(=\)







\(\ds 3 + 11\)




















\(\ds 15\)

\(=\)







\(\ds 3 + 5 + 7\)




















\(\ds 16\)

\(=\)







\(\ds 5 + 11\)




















\(\ds 17\)

\(=\)







\(\ds 2 + 3 + 5 + 7\)




















\(\ds 18\)

\(=\)







\(\ds 2 + 5 + 11\)




















\(\ds 19\)

\(=\)







\(\ds 3 + 5 + 11\)









$\blacksquare$





