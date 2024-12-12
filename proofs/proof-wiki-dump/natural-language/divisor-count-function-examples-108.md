# 

Source: https://proofwiki.org/wiki/Divisor_Count_Function/Examples/108

Example of Use of Divisor Count Function
$\map {\sigma_0} {108} = 12$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$108 = 2^2 \times 3^3$
Thus:














\(\ds \map {\sigma_0} {108}\)

\(=\)







\(\ds \map {\sigma_0} {2^2 \times 3^3}\)




















\(\ds \)

\(=\)







\(\ds \paren {2 + 1} \paren {3 + 1}\)




















\(\ds \)

\(=\)







\(\ds 12\)










The divisors of $108$ can be enumerated as:

$1, 2, 3, 4, 6, 9, 12, 18, 27, 36, 54, 108$
This sequence is A018287 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





