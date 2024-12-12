# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_76

Example of Use of Divisor Count Function
$\map {\sigma_0} {76} = 6$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$76 = 2^2 \times 19$
Thus:














\(\ds \map {\sigma_0} {76}\)

\(=\)







\(\ds \map {\sigma_0} {2^2 \times 19^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {2 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 6\)










The divisors of $76$ can be enumerated as:

$1, 2, 4, 19, 38, 76$
This sequence is A018273 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





