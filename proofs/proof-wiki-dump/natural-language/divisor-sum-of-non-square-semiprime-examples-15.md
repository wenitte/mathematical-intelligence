# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_Non-Square_Semiprime/Examples/15

Example of Divisor Sum of Non-Square Semiprime
$\map {\sigma_1} {15} = 24$
where $\sigma_1$ denotes the divisor sum function.


Proof 1
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$15 = 3 \times 5$
Hence:














\(\ds \map {\sigma_1} {15}\)

\(=\)







\(\ds \frac {3^2 - 1} {3 - 1} \times \frac {5^2 - 1} {5 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac 8 2 \times \frac {24} 4\)




















\(\ds \)

\(=\)







\(\ds 4 \times 6\)




















\(\ds \)

\(=\)







\(\ds 24\)









$\blacksquare$


Proof 2
We have that:

$15 = 3 \times 5$
and so by definition is a semiprime whose prime factors are distinct.

Hence:














\(\ds \map {\sigma_1} {15}\)

\(=\)







\(\ds \paren {3 + 1} \paren {5 + 1}\)





Divisor Sum of Non-Square Semiprime














\(\ds \)

\(=\)







\(\ds 4 \times 6\)




















\(\ds \)

\(=\)







\(\ds 24\)









$\blacksquare$





