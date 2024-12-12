# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_350

Example of Use of Divisor Count Function
$\map {\sigma_0} {350} = 12$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$350 = 2 \times 5^2 \times 7$
Thus:














\(\ds \map {\sigma_0} {350}\)

\(=\)







\(\ds \map {\sigma_0} {2^1 \times 5^2 \times 7^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + 1} \paren {2 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 12\)










The divisors of $350$ can be enumerated as:

$1, 2, 5, 7, 10, 14, 25, 35, 50, 70, 175, 350$
This sequence is A018406 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





