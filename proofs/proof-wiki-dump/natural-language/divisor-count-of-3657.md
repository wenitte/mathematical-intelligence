# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_3657

Example of Use of Divisor Count Function
$\map {\sigma_0} {3657} = 8$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$3657 = 3 \times 23 \times 53$
Thus:














\(\ds \map {\sigma_0} {3657}\)

\(=\)







\(\ds \map {\sigma_0} {3^1 \times 23^1 \times 53^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 8\)










The divisors of $3657$ can be enumerated as:

$1, 3, 23, 53, 69, 159, 1219, 3657$
$\blacksquare$





