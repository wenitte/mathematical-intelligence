# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_288

Example of Divisor Sum of Integer
$\map {\sigma_1} {288} = 819$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$288 = 2^5 \times 3^2$

Hence:














\(\ds \map {\sigma_1} {288}\)

\(=\)







\(\ds \frac {2^6 - 1} {2 - 1} \times \frac {3^3 - 1} {3 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {63} 1 \times \frac {26} 2\)




















\(\ds \)

\(=\)







\(\ds 3^2 \times 7 \times 13\)




















\(\ds \)

\(=\)







\(\ds 819\)









$\blacksquare$




