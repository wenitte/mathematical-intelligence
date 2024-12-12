# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_1430

Example of Use of Divisor Count Function
$\map {\sigma_0} {1430} = 16$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$1430 = 2 \times 5 \times 11 \times 13$
Thus:














\(\ds \map {\sigma_0} {1430}\)

\(=\)







\(\ds \map {\sigma_0} {2^1 \times 5^1 \times 11^1 \times 13^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + 1} \paren {1 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 16\)










The divisors of $1430$ can be enumerated as:

$1, 2, 5, 10, 11, 13, 22, 26, 55, 65, 110, 130, 143, 286, 715, 1430$
$\blacksquare$





