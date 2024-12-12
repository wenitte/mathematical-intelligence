# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_357

Example of Use of Divisor Count Function
$\map {\sigma_0} {357} = 8$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$357 = 3 \times 7 \times 17$
Thus:














\(\ds \map {\sigma_0} {357}\)

\(=\)







\(\ds \map {\sigma_0} {3^1 \times 7^1 \times 17^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 8\)










The divisors of $357$ can be enumerated as:

$1, 3, 7, 17, 21, 51, 119, 357$
This sequence is A018411 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





