# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_42

Example of Use of Divisor Count Function
$\map {\sigma_0} {42} = 8$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$42 = 2 \times 3 \times 7$
Thus:














\(\ds \map {\sigma_0} {42}\)

\(=\)







\(\ds \map {\sigma_0} {2^1 \times 3^1 \times 7^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 8\)










The divisors of $42$ can be enumerated as:

$1, 2, 3, 6, 7, 14, 21, 42$
$\blacksquare$





