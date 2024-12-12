# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_368

Example of Use of Divisor Count Function
$\map {\sigma_0} {368} = 10$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$368 = 2^4 \times 23$
Thus:














\(\ds \map {\sigma_0} {368}\)

\(=\)







\(\ds \map {\sigma_0} {2^4 \times 23^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {4 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 10\)










The divisors of $368$ can be enumerated as:

$1, 2, 4, 8, 16, 23, 46, 92, 184, 368$
This sequence is A018416 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





