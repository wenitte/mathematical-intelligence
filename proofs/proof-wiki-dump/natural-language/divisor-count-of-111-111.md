# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_111,111

Example of Use of Divisor Count Function
$\map {\sigma_0} {111 \, 111} = 32$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$111 \, 111 = 3 \times 7 \times 11 \times 13 \times 37$
Thus:














\(\ds \map {\sigma_0} {111 \, 111}\)

\(=\)







\(\ds \map {\sigma_0} {3^1 \times 7^1 \times 11^1 \times 13^1 \times 37^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + 1} \paren {1 + 1} \paren {1 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 32\)










The divisors of $111 \, 111$ can be enumerated as:

$1, 3, 7, 11, 13, 21, 33, 37, 39, 77, 91, 111, 143, 231,$
$259, 273, 407, 429, 481, 777, 1001, 1221, 1443, 2849,$
$3003, 3367, 5291, 8547, 10101, 15873, 37037, 111111$
This sequence is A109492 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
$\blacksquare$





