# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_75

Example of Use of Divisor Count Function
$\map {\sigma_0} {75} = 6$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$75 = 3 \times 5^2$
Thus:














\(\ds \map {\sigma_0} {75}\)

\(=\)







\(\ds \map {\sigma_0} {3^1 \times 5^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + 1} \paren {2 + 1}\)




















\(\ds \)

\(=\)







\(\ds 6\)










The divisors of $75$ can be enumerated as:

$1, 3, 5, 15, 25, 75$
This sequence is A018272 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





