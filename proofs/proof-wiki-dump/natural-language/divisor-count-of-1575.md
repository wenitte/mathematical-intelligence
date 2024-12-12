# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_1575

Example of Use of Divisor Count Function
$\map {\sigma_0} {1575} = 18$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$1575 = 3^2 \times 5^2 \times 7$
Thus:














\(\ds \map {\sigma_0} {1575}\)

\(=\)







\(\ds \map {\sigma_0} {3^2 \times 5^2 \times 7^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {2 + 1} \paren {2 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 18\)










The divisors of $1575$ can be enumerated as:

$1, 3, 5, 7, 9, 15, 21, 25, 35, 45, 63, 75, 105, 175, 225, 315, 525, 1575$
$\blacksquare$





