# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_616

Example of Use of Divisor Count Function
$\map {\sigma_0} {616} = 16$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$616 = 2^3 \times 7 \times 11$
Thus:














\(\ds \map {\sigma_0} {616}\)

\(=\)







\(\ds \map {\sigma_0} {2^3 \times 7^1 \times 11^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {3 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 16\)










The divisors of $616$ can be enumerated as:

$1, 2, 4, 7, 8, 11, 14, 22, 28, 44, 56, 77, 88, 154, 308, 616$
This sequence is A018552 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





