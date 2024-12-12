# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_192

Example of Use of Divisor Count Function
$\map {\sigma_0} {192} = 14$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$192 = 2^6 \times 3$
Thus:














\(\ds \map {\sigma_0} {192}\)

\(=\)







\(\ds \map {\sigma_0} {2^6 \times 3^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {6 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 14\)










The divisors of $192$ can be enumerated as:

$1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 192$
This sequence is A018328 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





