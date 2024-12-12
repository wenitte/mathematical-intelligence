# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_15,472

Example of Divisor Sum of Integer
$\map {\sigma_1} {15 \, 472} = 30 \, 008$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer:

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$15 \, 472 = 2^4 \times 967$

Hence:














\(\ds \map {\sigma_1} {15 \, 472}\)

\(=\)







\(\ds \frac {2^5 - 1} {2 - 1} \times \frac {967^2 - 1} {967 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {31} 1 \times \frac {968 \times 966} {966}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds 31 \times 968\)




















\(\ds \)

\(=\)







\(\ds 31 \times \paren {2^3 \times 11^2}\)




















\(\ds \)

\(=\)







\(\ds 30 \, 008\)









$\blacksquare$





