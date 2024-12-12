# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_910

Example of Use of Divisor Count Function
$\map {\sigma_0} {910} = 16$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$910 = 2 \times 5 \times 7 \times 13$
Thus:














\(\ds \map {\sigma_0} {910}\)

\(=\)







\(\ds \map {\sigma_0} {2^1 \times 5^1 \times 7^1 \times 13^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + 1} \paren {1 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 16\)










The divisors of $910$ can be enumerated as:

$1, 2, 5, 7, 10, 13, 14, 26, 35, 65, 70, 91, 130, 182, 455, 910$
This sequence is A018717 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





