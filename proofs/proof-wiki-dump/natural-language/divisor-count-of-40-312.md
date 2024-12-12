# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_40,312

Example of Use of Divisor Count Function
$\map {\sigma_0} {40 \, 312} = 8$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$40 \, 312 = 2^3 \times 5039$

Thus:














\(\ds \map {\sigma_0} {40 \, 312}\)

\(=\)







\(\ds \map {\sigma_0} {2^3 \times 5039^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {3 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 8\)










The divisors of $40 \, 312$ can be enumerated as:

$1, 2, 4, 8, 5039, 10 \, 078, 20 \, 156, 40 \, 312$
$\blacksquare$





