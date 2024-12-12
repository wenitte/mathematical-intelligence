# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_14,288

Example of Divisor Sum of Integer
$\map {\sigma_1} {14 \, 288} = 29 \, 760$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$14 \, 288 = 2^4 \times 19 \times 47$

Hence:














\(\ds \map {\sigma_1} {14 \, 288}\)

\(=\)







\(\ds \frac {2^5 - 1} {2 - 1} \times \frac {19^2 - 1} {19 - 1} \times \frac {47^2 - 1} {47 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {31} 1 \times \frac {20 \times 18} {18} \times \frac {48 \times 46} {46}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds 31 \times 20 \times 48\)




















\(\ds \)

\(=\)







\(\ds 31 \times \paren {2^2 \times 5} \times \paren {2^4 \times 3}\)




















\(\ds \)

\(=\)







\(\ds 2^6 \times 3 \times 5 \times 31\)




















\(\ds \)

\(=\)







\(\ds 29 \, 760\)









$\blacksquare$





