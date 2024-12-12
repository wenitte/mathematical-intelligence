# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_17,296

Example of Divisor Sum of Integer
$\map {\sigma_1} {17 \, 296} = 35 \, 712$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$17 \, 296 = 2^4 \times 23 \times 47$

Hence:














\(\ds \map {\sigma_1} {17 \, 296}\)

\(=\)







\(\ds \frac {2^5 - 1} {2 - 1} \times \paren {23 + 1} \times \paren {47 + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {31} 1 \times 24 \times 48\)




















\(\ds \)

\(=\)







\(\ds 31 \times \paren {2^3 \times 3} \times \paren {2^4 \times 3}\)




















\(\ds \)

\(=\)







\(\ds 2^7 \times 3^2 \times 31\)




















\(\ds \)

\(=\)







\(\ds 35 \, 712\)









$\blacksquare$





