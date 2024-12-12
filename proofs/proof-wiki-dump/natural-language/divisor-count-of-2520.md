# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_2520

Example of Use of Divisor Count Function
$\map {\sigma_0} {2520} = 48$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$2520 = 2^3 \times 3^2 \times 5 \times 7$
Thus:














\(\ds \map {\sigma_0} {2520}\)

\(=\)







\(\ds \map {\sigma_0} {2^3 \times 3^2 \times 5^1 \times 7^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {3 + 1} \paren {2 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 48\)










The divisors of $2520$ can be enumerated as:

$1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 18, 20, 21, 24, 28, 30, 35, 36, 40, 42, 45, 56, 60, 63, 70, 72,$
$84, 90, 105, 120, 126, 140, 168, 180, 210, 252, 280, 315, 360, 420, 504, 630, 840, 1260, 2520$
This sequence is A165412 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





