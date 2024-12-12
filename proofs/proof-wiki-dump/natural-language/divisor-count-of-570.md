# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_570

Example of Use of Divisor Count Function
$\map {\sigma_0} {570} = 16$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$570 = 2 \times 3 \times 5 \times 19$
Thus:














\(\ds \map {\sigma_0} {570}\)

\(=\)







\(\ds \map {\sigma_0} {2^1 \times 3^1 \times 5^1 \times 19^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + 1} \paren {1 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 16\)










The divisors of $570$ can be enumerated as:

$1, 2, 3, 5, 6, 10, 15, 19, 30, 38, 57, 95, 114, 190, 285, 570$
This sequence is A018524 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





