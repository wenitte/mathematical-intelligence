# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_Non-Square_Semiprime/Examples/206

Example of Divisor Sum of Non-Square Semiprime
$\map {\sigma_1} {206} = 312$
where $\sigma_1$ denotes the divisor sum function.


Proof 1
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$206 = 2 \times 103$
Hence:














\(\ds \map {\sigma_1} {206}\)

\(=\)







\(\ds \frac {2^2 - 1} {2 - 1} \times \frac {103^2 - 1} {103 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac 3 1 \times \frac {10 \, 608} {102}\)




















\(\ds \)

\(=\)







\(\ds 3 \times 104\)




















\(\ds \)

\(=\)







\(\ds 312\)









$\blacksquare$


Proof 2
We have that:

$206 = 2 \times 103$
and so by definition is a semiprime whose prime factors are distinct.

Hence:














\(\ds \map {\sigma_1} {206}\)

\(=\)







\(\ds \paren {2 + 1} \paren {103 + 1}\)





Divisor Sum of Non-Square Semiprime














\(\ds \)

\(=\)







\(\ds 3 \times 104\)




















\(\ds \)

\(=\)







\(\ds 312\)









$\blacksquare$





