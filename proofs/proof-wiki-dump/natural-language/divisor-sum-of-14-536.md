# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_14,536

Example of Divisor Sum of Integer
$\map {\sigma_1} {14 \, 536} = 28 \, 800$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$14 \, 536 = 2^3 \times 23 \times 79$

Hence:














\(\ds \map {\sigma_1} {14 \, 536}\)

\(=\)







\(\ds \frac {2^4 - 1} {2 - 1} \times \frac {23^2 - 1} {23 - 1} \times \frac {79^2 - 1} {79 - 1}\)





Divisor Sum of Integer














\(\ds \)

\(=\)







\(\ds \frac {15} 1 \times \frac {24 \times 22} {22} \times \frac {80 \times 78} {78}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds 15 \times 24 \times 80\)




















\(\ds \)

\(=\)







\(\ds \paren {3 \times 5} \times \paren {2^3 \times 3} \times \paren {2^4 \times 5}\)




















\(\ds \)

\(=\)







\(\ds 2^7 \times 3^2 \times 5^2\)




















\(\ds \)

\(=\)







\(\ds 28 \, 800\)









$\blacksquare$





