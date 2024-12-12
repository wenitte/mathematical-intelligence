# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_464

Example of Use of Divisor Count Function
$\map {\sigma_0} {464} = 10$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$464 = 2^4 \times 29$
Thus:














\(\ds \map {\sigma_0} {464}\)

\(=\)







\(\ds \map {\sigma_0} {2^4 \times 29^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {4 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 10\)










The divisors of $464$ can be enumerated as:

$1, 2, 4, 8, 16, 29, 58, 116, 232, 464$
This sequence is A018469 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





