# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_1260

Example of Use of Divisor Count Function
$\map {\sigma_0} {1260} = 36$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$1260 = 2^2 \times 3^2 \times 5 \times 7$
Thus:














\(\ds \map {\sigma_0} {1260}\)

\(=\)







\(\ds \map {\sigma_0} {2^2 \times 3^2 \times 5^1 \times 7^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {2 + 1} \paren {2 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 36\)










The divisors of $1260$ can be enumerated as:

$1, 2, 3, 4, 5, 6, 7, 9, 10, 12, 14, 15, 18, 20, 21, 28, 30, 35, 36, 42, 45, 60, 63, 70, 84, 90, 105, 126, 140, 180, 210, 252, 315, 420, 630, 1260$
This sequence is A178877 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





