# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_836

Example of Use of Divisor Count Function
$\map {\sigma_0} {836} = 12$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$836 = 2^2 \times 11 \times 19$
Thus:














\(\ds \map {\sigma_0} {836}\)

\(=\)







\(\ds \map {\sigma_0} {2^2 \times 11^1 \times 19^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {2 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 12\)










The divisors of $836$ can be enumerated as:

$1, 2, 4, 11, 19, 22, 38, 44, 76, 209, 418, 836$
This sequence is A018674 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





