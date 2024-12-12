# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_4030

Example of Use of Divisor Count Function
$\map {\sigma_0} {4030} = 16$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$4030 = 2 \times 5 \times 13 \times 31$
Thus:














\(\ds \map {\sigma_0} {4030}\)

\(=\)







\(\ds \map {\sigma_0} {2^1 \times 5^1 \times 13^1 \times 31^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + 1} \paren {1 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 16\)










The divisors of $4030$ can be enumerated as:

$1, 2, 5, 10, 13, 26, 31, 62, 65, 130, 155, 310, 403, 806, 2015, 4030$
$\blacksquare$





