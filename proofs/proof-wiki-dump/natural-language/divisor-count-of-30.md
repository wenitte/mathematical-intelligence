# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_30

Example of Use of Divisor Count Function
$\map {\sigma_0} {30} = 8$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\map {\sigma_0} n = \ds \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$30 = 2 \times 3 \times 5$
Thus:














\(\ds \map {\sigma_0} {30}\)

\(=\)







\(\ds \map {\sigma_0} {2^1 \times 3^1 \times 5^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 8\)










The divisors of $30$ can be enumerated as:

$1, 2, 3, 5, 6, 10, 15, 30$
This sequence is A018255 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





