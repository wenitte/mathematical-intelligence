# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_224

Example of Use of Divisor Count Function
$\map {\sigma_0} {224} = 12$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$224 = 2^5 \times 7$
Thus:














\(\ds \map {\sigma_0} {224}\)

\(=\)







\(\ds \map {\sigma_0} {2^5 \times 7^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {5 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 12\)










The divisors of $224$ can be enumerated as:

$1, 2, 4, 7, 8, 14, 16, 28, 32, 56, 112, 224$
This sequence is A018341 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





