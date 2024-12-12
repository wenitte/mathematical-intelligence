# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_1312

Example of Use of Divisor Count Function
$\map {\sigma_0} {1312} = 12$
where ${\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$1312 = 2^5 \times 41$
Thus:














\(\ds \map {\sigma_0} {1312}\)

\(=\)







\(\ds \map {\sigma_0} {2^5 \times 41^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {5 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 12\)










The divisors of $1312$ can be enumerated as:

$1, 2, 4, 8, 16, 32, 41, 82, 164, 328, 656, 1312$
$\blacksquare$





