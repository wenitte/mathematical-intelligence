# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_630

Example of Use of Divisor Count Function
$\map {\sigma_0} {630} = 24$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$630 = 2 \times 3^2 \times 5 \times 7$
Thus:














\(\ds \map {\sigma_0} {630}\)

\(=\)







\(\ds \map {\sigma_0} {2^1 \times 3^2 \times 5^1 \times 7^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + 1} \paren {2 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 24\)










The divisors of $630$ can be enumerated as:

$1, 2, 3, 5, 6, 7, 9, 10, 14, 15, 18, 21, 30, 35, 42, 45, 63, 70, 90, 105, 126, 210, 315, 630$
This sequence is A018559 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





