# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_2924

Example of Divisor Sum of Integer
$\map {\sigma_1} {2924} = 5544$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$2924 = 2^2 \times 17 \times 43$

Hence:














\(\ds \map {\sigma_1} {2924}\)

\(=\)







\(\ds \frac {2^3 - 1} {2 - 1} \times \paren {17 + 1} \times \paren {43 + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac 7 1 \times 18 \times 44\)




















\(\ds \)

\(=\)







\(\ds 7 \times \paren {2 \times 3^2} \times \paren {2^2 \times 11}\)




















\(\ds \)

\(=\)







\(\ds 2^3 \times 3^2 \times 7 \times 11\)




















\(\ds \)

\(=\)







\(\ds 5544\)









$\blacksquare$




