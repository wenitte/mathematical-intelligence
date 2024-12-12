# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_8128

Example of Use of Divisor Count Function
$\map {\sigma_0} {8128} = 10$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$8128 = 2^6 \times 127$
Thus:














\(\ds \map {\sigma_0} {8128}\)

\(=\)







\(\ds \map {\sigma_0} {2^6 \times 127^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {6 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 14\)










The divisors of $496$ can be enumerated as:

$1, 2, 4, 8, 16, 32, 64, 127, 254, 508, 1016, 2032, 4064, 8128$
This sequence is A133024 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





