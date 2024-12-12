# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_3600

Example of Use of Divisor Count Function
$\map {\sigma_0} {3600} = 45$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$3600 = 2^4 \times 3^2 \times 5^2$
Thus:














\(\ds \map {\sigma_0} {3600}\)

\(=\)







\(\ds \map {\sigma_0} {2^4 \times 3^2 \times 5^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {4 + 1} \paren {2 + 1} \paren {2 + 1}\)




















\(\ds \)

\(=\)







\(\ds 45\)










The divisors of $3600$ can be enumerated as:

$1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20, 24, 25, 30, 36, 40, 45, 48, 50, 60, 72, 75, 80, 90, 100,$
$120, 144, 150, 180, 200, 225, 240, 300, 360, 400, 450, 600, 720, 900, 1200, 1800, 3600$
This sequence is A035303 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





