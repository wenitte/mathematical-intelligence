# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_360

Example of Use of Divisor Count Function
$\map {\sigma_0} {360} = 24$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$360 = 2^3 \times 3^2 \times 5$
Thus:














\(\ds \map {\sigma_0} {360}\)

\(=\)







\(\ds \map {\sigma_0} {2^3 \times 3^2 \times 5^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {3 + 1} \paren {2 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 24\)










The divisors of $360$ can be enumerated as:

$1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36, 40, 45, 60, 72, 90, 120, 180, 360$
This sequence is A018412 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





