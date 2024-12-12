# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_180

Example of Divisor Sum of Integer
$\map {\sigma_1} {180} = 546$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$180 = 2^2 \times 3^2 \times 5$

Hence:














\(\ds \map {\sigma_1} {180}\)

\(=\)







\(\ds \frac {2^3 - 1} {2 - 1} \times \frac {3^3 - 1} {3 - 1} \times \frac {5^2 - 1} {5 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac 7 1 \times \frac {26} 2 \times \frac {24} 4\)




















\(\ds \)

\(=\)







\(\ds 7 \times 13 \times 6\)




















\(\ds \)

\(=\)







\(\ds 546\)









$\blacksquare$





