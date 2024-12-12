# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_1638

Example of Use of Divisor Count Function
$\map {\sigma_0} {1638} = 24$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$1638 = 2 \times 3^2 \times 7 \times 13$
Thus:














\(\ds \map {\sigma_0} {1638}\)

\(=\)







\(\ds \map {\sigma_0} {2^1 \times 3^2 \times 7^1 \times 13^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + 1} \paren {2 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 24\)










The divisors of $1638$ can be enumerated as:

$1, 2, 3, 6, 7, 9, 13, 14, 18, 21, 26, 39, 42, 63, 78, 91, 117, 126, 182, 234, 273, 546, 819, 1638$
$\blacksquare$





