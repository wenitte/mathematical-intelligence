# 

Source: https://proofwiki.org/wiki/Number_as_Sum_of_Distinct_Primes_greater_than_11

Theorem
Every number greater than $45$ can be expressed as the sum of distinct primes greater than $11$.


Proof
Let $S = \set {s_n}_{n \mathop \in N}$ be the set of primes greater than $11$ ordered by size.
Then $S = \set {11, 13, 17, 19, 23, 29, 31, 37, 41, 43, \dots}$.

By Bertrand-Chebyshev Theorem:

$s_{n + 1} \le 2 s_n$ for all $n \in \N$.
We observe that every integer $n$ where $45 < n \le 45 + s_{11} = 92$ can be expressed as a sum of distinct elements in $\set {s_1, \dots, s_{10}} = \set {11, 13, 17, 19, 23, 29, 31, 37, 41, 43}$.
Hence the result by Richert's Theorem.
$\Box$

Here is a demonstration of our claim:














\(\ds 46\)

\(=\)







\(\ds 17 + 29\)




















\(\ds 47\)

\(=\)







\(\ds 11 + 17 + 19\)




















\(\ds 48\)

\(=\)







\(\ds 19 + 29\)




















\(\ds 49\)

\(=\)







\(\ds 13 + 17 + 19\)




















\(\ds 50\)

\(=\)







\(\ds 19 + 31\)




















\(\ds 51\)

\(=\)







\(\ds 11 + 17 + 23\)




















\(\ds 52\)

\(=\)







\(\ds 23 + 29\)




















\(\ds 53\)

\(=\)







\(\ds 13 + 17 + 23\)




















\(\ds 54\)

\(=\)







\(\ds 23 + 31\)




















\(\ds 55\)

\(=\)







\(\ds 13 + 19 + 23\)




















\(\ds 56\)

\(=\)







\(\ds 19 + 37\)




















\(\ds 57\)

\(=\)







\(\ds 11 + 17 + 29\)




















\(\ds 58\)

\(=\)







\(\ds 17 + 41\)




















\(\ds 59\)

\(=\)







\(\ds 13 + 17 + 29\)




















\(\ds 60\)

\(=\)







\(\ds 19 + 41\)




















\(\ds 61\)

\(=\)







\(\ds 13 + 19 + 29\)




















\(\ds 62\)

\(=\)







\(\ds 19 + 43\)




















\(\ds 63\)

\(=\)







\(\ds 13 + 19 + 31\)




















\(\ds 64\)

\(=\)







\(\ds 23 + 41\)




















\(\ds 65\)

\(=\)







\(\ds 11 + 17 + 37\)




















\(\ds 66\)

\(=\)







\(\ds 23 + 43\)




















\(\ds 67\)

\(=\)







\(\ds 13 + 17 + 37\)




















\(\ds 68\)

\(=\)







\(\ds 31 + 37\)




















\(\ds 69\)

\(=\)







\(\ds 13 + 19 + 37\)




















\(\ds 70\)

\(=\)







\(\ds 11 + 17 + 19 + 23\)




















\(\ds 71\)

\(=\)







\(\ds 17 + 23 + 31\)




















\(\ds 72\)

\(=\)







\(\ds 13 + 17 + 19 + 23\)




















\(\ds 73\)

\(=\)







\(\ds 19 + 23 + 31\)




















\(\ds 74\)

\(=\)







\(\ds 11 + 13 + 19 + 31\)




















\(\ds 75\)

\(=\)







\(\ds 13 + 19 + 43\)




















\(\ds 76\)

\(=\)







\(\ds 11 + 17 + 19 + 29\)




















\(\ds 77\)

\(=\)







\(\ds 17 + 19 + 41\)




















\(\ds 78\)

\(=\)







\(\ds 11 + 17 + 19 + 31\)




















\(\ds 79\)

\(=\)







\(\ds 17 + 19 + 43\)




















\(\ds 80\)

\(=\)







\(\ds 13 + 17 + 19 + 31\)




















\(\ds 81\)

\(=\)







\(\ds 17 + 23 + 41\)




















\(\ds 82\)

\(=\)







\(\ds 11 + 17 + 23 + 31\)




















\(\ds 83\)

\(=\)







\(\ds 19 + 23 + 41\)




















\(\ds 84\)

\(=\)







\(\ds 13 + 17 + 23 + 31\)




















\(\ds 85\)

\(=\)







\(\ds 19 + 23 + 43\)




















\(\ds 86\)

\(=\)







\(\ds 13 + 19 + 23 + 31\)




















\(\ds 87\)

\(=\)







\(\ds 17 + 29 + 41\)




















\(\ds 88\)

\(=\)







\(\ds 11 + 17 + 29 + 31\)




















\(\ds 89\)

\(=\)







\(\ds 19 + 29 + 41\)




















\(\ds 90\)

\(=\)







\(\ds 13 + 17 + 29 + 31\)




















\(\ds 91\)

\(=\)







\(\ds 19 + 31 + 41\)




















\(\ds 92\)

\(=\)







\(\ds 13 + 19 + 29 + 31\)









$\blacksquare$


Sources
1980: Hansraj Gupta: Selected Topics in Number Theory
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $45$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $45$




