# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_840

Example of Use of Divisor Count Function
$\map {\sigma_0} {840} = 32$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$840 = 2^3 \times 3 \times 5 \times 7$
Thus:














\(\ds \map {\sigma_0} {840}\)

\(=\)







\(\ds \map {\sigma_0} {2^3 \times 3^1 \times 5^1 \times 7^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {3 + 1} \paren {1 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 32\)










The divisors of $840$ can be enumerated as:

$1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 15, 20, 21, 24, 28, 30, 35, 40, 42, 56, 60, 70, 84, 105, 120, 140, 168, 210, 280, 420, 840$
This sequence is A018676 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





