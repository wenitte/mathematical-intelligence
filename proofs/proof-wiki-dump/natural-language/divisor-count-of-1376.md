# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_1376

Example of Use of Divisor Count Function
$\map {\sigma_0} {1376} = 12$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$1376 = 2^5 \times 43$
Thus:














\(\ds \map {\sigma_0} {1376}\)

\(=\)







\(\ds \map {\sigma_0} {2^5 \times 43^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {5 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 12\)










The divisors of $1376$ can be enumerated as:

$1, 2, 4, 8, 16, 32, 43, 86, 172, 344, 688, 1376$
$\blacksquare$





