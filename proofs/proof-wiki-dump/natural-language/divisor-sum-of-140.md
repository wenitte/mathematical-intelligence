# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_140

Example of Divisor Sum of Integer
$\map {\sigma_1} {140} = 336$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer:

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$140 = 2^2 \times 5 \times 7$
Hence:














\(\ds \map {\sigma_1} {140}\)

\(=\)







\(\ds \frac {2^3 - 1} {2 - 1} \times \frac {5^2 - 1} {5 - 1} \times \frac {7^2 - 1} {7 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac 7 1 \times \frac {6 \times 4} 4 \times \frac {8 \times 6} 6\)




















\(\ds \)

\(=\)







\(\ds 7 \times 6 \times 8\)




















\(\ds \)

\(=\)







\(\ds 7 \times \paren {2 \times 3} \times 2^3\)




















\(\ds \)

\(=\)







\(\ds 2^4 \times 3 \times 7\)




















\(\ds \)

\(=\)







\(\ds 336\)









$\blacksquare$





