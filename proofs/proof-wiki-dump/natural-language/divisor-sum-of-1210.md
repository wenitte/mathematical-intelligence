# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_1210

Example of Divisor Sum of Integer
$\map {\sigma_1} {1210} = 2394$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$1210 = 2 \times 5 \times 11^2$

Hence:














\(\ds \map {\sigma_1} {1210}\)

\(=\)







\(\ds \paren {2 + 1} \times \paren {5 + 1} \times \frac {11^3 - 1} {11 - 1}\)




















\(\ds \)

\(=\)







\(\ds 3 \times 6 \times \frac {1330} {10}\)




















\(\ds \)

\(=\)







\(\ds 3 \times 6 \times 133\)




















\(\ds \)

\(=\)







\(\ds 3 \times \paren {2 \times 3} \times \paren {7 \times 19}\)




















\(\ds \)

\(=\)







\(\ds 2 \times 3^2 \times 7 \times 19\)




















\(\ds \)

\(=\)







\(\ds 2394\)









$\blacksquare$




