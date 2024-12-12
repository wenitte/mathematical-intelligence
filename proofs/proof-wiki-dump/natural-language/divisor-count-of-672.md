# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_672

Example of Use of Divisor Count Function
$\map {\sigma_0} {672} = 24$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$672 = 2^5 \times 3 \times 7$
Thus:














\(\ds \map {\sigma_0} {672}\)

\(=\)







\(\ds \map {\sigma_0} {2^5 \times 3^1 \times 7^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {5 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 24\)










The divisors of $672$ can be enumerated as:

$1, 2, 3, 4, 6, 7, 8, 12, 14, 16, 21, 24, 28, 32, 42, 48, 56, 84, 96, 112, 168, 224, 336, 672$
This sequence is A018585 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





