# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_3655

Example of Use of Divisor Count Function
$\map {\sigma_0} {3655} = 8$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$3655 = 5 \times 17 \times 43$
Thus:














\(\ds \map {\sigma_0} {3655}\)

\(=\)







\(\ds \map {\sigma_0} {5^1 \times 17^1 \times 43^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 8\)










The divisors of $3655$ can be enumerated as:

$1, 5, 17, 44, 85, 215, 731, 3655$
$\blacksquare$





