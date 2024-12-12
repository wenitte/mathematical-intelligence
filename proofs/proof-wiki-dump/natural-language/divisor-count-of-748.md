# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_748

Example of Use of Divisor Count Function
$\map {\sigma_0} {748} = 12$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$748 = 2^2 \times 11 \times 17$
Thus:














\(\ds \map {\sigma_0} {748}\)

\(=\)







\(\ds \map {\sigma_0} {2^2 \times 11^1 \times 17^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {2 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 12\)










The divisors of $748$ can be enumerated as:

$1, 2, 4, 11, 17, 22, 34, 44, 68, 187, 374, 748$
This sequence is A018625 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





