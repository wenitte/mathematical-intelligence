# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_148

Example of Use of Divisor Count Function
$\map {\sigma_0} {148} = 6$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$148 = 2^2 \times 37$
Thus:














\(\ds \map {\sigma_0} {148}\)

\(=\)







\(\ds \map {\sigma_0} {2^2 \times 37^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {2 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 6\)










The divisors of $148$ can be enumerated as:

$1, 2, 4, 37, 74, 148$
This sequence is A018304 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$




