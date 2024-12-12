# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_33,817,088

Example of Divisor Sum of Integer
$\map {\sigma_1} {33 \, 817 \, 088} = 67 \, 832 \, 061$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$33 \, 817 \, 088 = 2^9 \times 257^2$

Hence:














\(\ds \map {\sigma_1} {33 \, 817 \, 088}\)

\(=\)







\(\ds \frac {2^{10} - 1} {2 - 1} \times \frac {257^3 - 1} {257 - 1}\)




















\(\ds \)

\(=\)







\(\ds 1023 \times \frac {16 \, 974 \, 592} {256}\)




















\(\ds \)

\(=\)







\(\ds 1023 \times 66 \, 307\)




















\(\ds \)

\(=\)







\(\ds \paren {3 \times 11 \times 31} \times \paren {61 \times 1087}\)




















\(\ds \)

\(=\)







\(\ds 67 \, 832 \, 061\)









$\blacksquare$





