# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_5040

Example of Use of Divisor Count Function
$\map {\sigma_0} {5040} = 60$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$5040 = 2^4 \times 3^2 \times 5 \times 7$
Thus:














\(\ds \map {\sigma_0} {5040}\)

\(=\)







\(\ds \map {\sigma_0} {2^4 \times 3^2 \times 5^1 \times 7^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {4 + 1} \paren {2 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 60\)










The divisors of $5040$ can be enumerated as:

$1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 24, 28, 30, 35, 36, 40, 42, 45, 48, 56, 60, 63, 70, 72, 80, 84, 90,$
$105, 112, 120, 126, 140, 144, 168, 180, 210, 240, 252, 280, 315, 336, 360, 420, 504, 560, 630, 720, 840, 1008, 1260, 1680, 2520, 5040$
This sequence is A178858 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





