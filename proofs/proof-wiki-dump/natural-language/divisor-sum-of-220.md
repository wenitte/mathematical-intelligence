# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_220

Example of Divisor Sum of Integer
$\map {\sigma_1} {220} = 504$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$220 = 2^2 \times 5 \times 11$
Hence:














\(\ds \map {\sigma_1} {220}\)

\(=\)







\(\ds \frac {2^3 - 1} {2 - 1} \times \frac {5^2 - 1} {5 - 1} \times \frac {11^2 - 1} {11 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac 7 1 \times \frac {6 \times 4} 4 \times \frac {12 \times 10} {10}\)




















\(\ds \)

\(=\)







\(\ds 7 \times 6 \times 12\)




















\(\ds \)

\(=\)







\(\ds 7 \times \paren {2 \times 3} \times \paren {2^2 \times 3}\)




















\(\ds \)

\(=\)







\(\ds 2^3 \times 3^2 \times 7\)




















\(\ds \)

\(=\)







\(\ds 504\)









$\blacksquare$





