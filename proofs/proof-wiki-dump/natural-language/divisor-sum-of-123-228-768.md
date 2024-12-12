# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_123,228,768

Example of Divisor Sum of Integer
$\map {\sigma_1} {123 \, 228 \, 768} = 350 \, 584 \, 416$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$123 \, 228 \, 768 = 2^5 \times 3 \times 13 \times 293 \times 337$

Hence:














\(\ds \map {\sigma_1} {123 \, 228 \, 768}\)

\(=\)







\(\ds \frac {2^6 - 1} {2 - 1} \paren {3 + 1} \paren {13 + 1} \paren {293 + 1} \paren {337 + 1}\)




















\(\ds \)

\(=\)







\(\ds 63 \times 4 \times 14 \times 294 \times 338\)




















\(\ds \)

\(=\)







\(\ds \paren {3^2 \times 7} \times 2^2 \times \paren {2 \times 7} \times \paren {2 \times 3 \times 7^2} \times \paren {2 \times 13^2}\)




















\(\ds \)

\(=\)







\(\ds 2^5 \times 3^3 \times 7^4 \times 13^2\)




















\(\ds \)

\(=\)







\(\ds 350 \, 584 \, 416\)









$\blacksquare$





