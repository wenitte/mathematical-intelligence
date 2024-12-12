# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_Integer/Examples/207

Example of Divisor Sum of Integer
$\map {\sigma_1} {207} = 312$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$207 = 3^2 \times 23$

Hence:














\(\ds \map {\sigma_1} {207}\)

\(=\)







\(\ds \frac {3^3 - 1} {3 - 1} \times \frac {23^2 - 1} {23 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {26} 2 \times \frac {24 \times 22} {22}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds 13 \times 24\)




















\(\ds \)

\(=\)







\(\ds 312\)









$\blacksquare$





