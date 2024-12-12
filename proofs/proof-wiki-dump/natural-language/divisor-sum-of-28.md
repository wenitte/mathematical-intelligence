# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_28

Example of Divisor Sum of Integer
$\map {\sigma_1} {28} = 56$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer:

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$28 = 2^2 \times 7$

Hence:














\(\ds \map {\sigma_1} {28}\)

\(=\)







\(\ds \frac {2^3 - 1} {2 - 1} \times \frac {7^2 - 1} {7 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac 8 1 \times \frac {49 - 1} 6\)




















\(\ds \)

\(=\)







\(\ds 7 \times 8\)




















\(\ds \)

\(=\)







\(\ds 56\)









$\blacksquare$





