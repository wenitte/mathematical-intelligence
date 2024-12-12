# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_945

Example of Use of Divisor Count Function
$\map {\sigma_0} {945} = 16$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$945 = 3^3 \times 5 \times 7$
Thus:














\(\ds \map {\sigma_0} {945}\)

\(=\)







\(\ds \map {\sigma_0} {3^3 \times 5^1 \times 7^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {3 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 16\)










The divisors of $945$ can be enumerated as:

$1, 3, 5, 7, 9, 15, 21, 27, 35, 45, 63, 105, 135, 189, 315, 945$
This sequence is A018736 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





