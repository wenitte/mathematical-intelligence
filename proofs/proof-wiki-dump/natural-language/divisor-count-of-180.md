# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_180

Example of Use of Divisor Count Function
$\map {\sigma_0} {180} = 18$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$180 = 2^2 \times 3^2 \times 5$
Thus:














\(\ds \map {\sigma_0} {180}\)

\(=\)







\(\ds \map {\sigma_0} {2^2 \times 3^2 \times 5^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {2 + 1} \paren {2 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 18\)










The divisors of $180$ can be enumerated as:

$1, 2, 3, 4, 5, 6, 9, 10, 12, 15, 18, 20, 30, 36, 45, 60, 90, 180$
This sequence is A018321 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





