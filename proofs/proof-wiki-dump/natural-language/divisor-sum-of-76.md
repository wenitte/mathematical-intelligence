# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_76

Example of Divisor Sum of Integer
$\map {\sigma_1} {76} = 140$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$76 = 2^2 \times 19$

Hence:














\(\ds \map {\sigma_1} {76}\)

\(=\)







\(\ds \frac {2^3 - 1} {2 - 1} \times \frac {19^2 - 1} {19 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac 7 1 \times \frac {360} {18}\)




















\(\ds \)

\(=\)







\(\ds 7 \times 20\)




















\(\ds \)

\(=\)







\(\ds 140\)









$\blacksquare$





