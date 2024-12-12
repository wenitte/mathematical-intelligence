# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_270

Example of Use of Divisor Count Function
$\map {\sigma_0} {270} = 16$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$270 = 2 \times 3^3 \times 5$
Thus:














\(\ds \map {\sigma_0} {270}\)

\(=\)







\(\ds \map {\sigma_0} {2^1 \times 3^3 \times 5^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + 1} \paren {3 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 16\)










The divisors of $270$ can be enumerated as:

$1, 2, 3, 5, 6, 9, 10, 15, 18, 27, 30, 45, 54, 90, 135, 270$
$\blacksquare$





