# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_1485

Example of Use of Divisor Count Function
$\map {\sigma_0} {1485} = 16$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$1485 = 3^3 \times 5 \times 11$
Thus:














\(\ds \map {\sigma_0} {1485}\)

\(=\)







\(\ds \map {\sigma_0} {3^3 \times 5^1 \times 11^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {3 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 16\)









The divisors of $1485$ can be enumerated as:

$1, 3, 5, 9, 11, 15, 27, 33, 45, 55, 99, 135, 165, 297, 495, 1485$
This sequence is A018606 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).

$\blacksquare$





