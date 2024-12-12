# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_5564

Example of Divisor Sum of Integer
$\map {\sigma_1} {5564} = 10 \, 584$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $\ds n = \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$5564 = 2^2 \times 13 \times 107$

Hence:














\(\ds \map {\sigma_1} {5020}\)

\(=\)







\(\ds \frac {2^3 - 1} {2 - 1} \times \paren {13 + 1} \times \paren {107 + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac 7 1 \times 14 \times 108\)




















\(\ds \)

\(=\)







\(\ds 7 \times \paren {2 \times 7} \times \paren {2^2 \times 3^3}\)




















\(\ds \)

\(=\)







\(\ds 2^3 \times 3^3 \times 7^2\)




















\(\ds \)

\(=\)







\(\ds 10 \, 584\)









$\blacksquare$





