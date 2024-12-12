# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_264

Example of Use of Divisor Count Function
$\map {\sigma_0} {264} = 16$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$264 = 2^3 \times 3 \times 11$
Thus:














\(\ds \map {\sigma_0} {264}\)

\(=\)







\(\ds \map {\sigma_0} {2^3 \times 3^1 \times 11^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {3 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 16\)










The divisors of $264$ can be enumerated as:

$1, 2, 3, 4, 6, 8, 11, 12, 22, 24, 33, 44, 66, 88, 132, 264$
This sequence is A018362 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





