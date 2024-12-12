# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_364

Example of Divisor Sum of Integer
$\map {\sigma_1} {364} = 784$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$364 = 2^2 \times 7 \times 13$

Hence:














\(\ds \map {\sigma_1} {364}\)

\(=\)







\(\ds \frac {2^3 - 1} {2 - 1} \times \frac {7^2 - 1} {7 - 1} \times \frac {13^2 - 1} {13 - 1}\)





Divisor Sum of Integer














\(\ds \)

\(=\)







\(\ds \frac 7 1 \times \frac {8 \times 6} 6 \times \frac {14 \times 12} {12}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds 7 \times 8 \times 14\)




















\(\ds \)

\(=\)







\(\ds 7 \times 2^3 \times \paren {2 \times 7}\)




















\(\ds \)

\(=\)







\(\ds 2^4 \times 7^2\)




















\(\ds \)

\(=\)







\(\ds \paren {2^2 \times 7}^2\)




















\(\ds \)

\(=\)







\(\ds 28^2\)




















\(\ds \)

\(=\)







\(\ds 784\)









$\blacksquare$





