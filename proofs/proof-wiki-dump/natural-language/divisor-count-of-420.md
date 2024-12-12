# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_420

Example of Use of Divisor Count Function
$\map {\sigma_0} {420} = 24$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$420 = 2^2 \times 3 \times 5 \times 7$
Thus:














\(\ds \map {\sigma_0} {420}\)

\(=\)







\(\ds \map {\sigma_0} {2^2 \times 3^1 \times 5^1 \times 7^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {2 + 1} \paren {1 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 24\)










The divisors of $420$ can be enumerated as:

$1, 2, 3, 4, 5, 6, 7, 10, 12, 14, 15, 20, 21, 28, 30, 35, 42, 60, 70, 84, 105, 140, 210, 420$
This sequence is A018444 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





