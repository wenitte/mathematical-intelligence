# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_45

Example of Use of Divisor Count Function
$\map {\sigma_0} {45} = 6$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$45 = 3^2 \times 5$
Thus:














\(\ds \map {\sigma_0} {45}\)

\(=\)







\(\ds \map {\sigma_0} {3^2 \times 5^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {2 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 6\)










The divisors of $45$ can be enumerated as:

$1, 3, 5, 9, 15, 45$
This sequence is A018260 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





