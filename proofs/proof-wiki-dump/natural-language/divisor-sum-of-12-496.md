# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_12,496

Example of Divisor Sum of Integer
$\map {\sigma_1} {12 \, 496} = 26 \, 784$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$12 \, 496 = 2^4 \times 11 \times 71$

Hence:














\(\ds \map {\sigma_1} {12 \, 496}\)

\(=\)







\(\ds \frac {2^5 - 1} {2 - 1} \times \frac {11^2 - 1} {11 - 1} \times \frac {71^2 - 1} {71 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {31} 1 \times \frac {12 \times 10} {10} \times \frac {72 \times 70} {70}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds 31 \times 12 \times 72\)




















\(\ds \)

\(=\)







\(\ds 31 \times \paren {2^2 \times 3} \times \paren {2^3 \times 3^2}\)




















\(\ds \)

\(=\)







\(\ds 2^5 \times 3^3 \times 31\)




















\(\ds \)

\(=\)







\(\ds 26 \, 784\)









$\blacksquare$





