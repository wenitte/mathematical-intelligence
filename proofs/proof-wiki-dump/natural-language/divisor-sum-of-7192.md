# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_7192

Example of Divisor Sum of Integer
$\map {\sigma_1} {7192} = 14 \, 400$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer:

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$7192 = 2^3 \times 29 \times 31$

Hence:














\(\ds \map {\sigma_1} {7192}\)

\(=\)







\(\ds \frac {2^4 - 1} {2 - 1} \times \paren {29 + 1} \times \paren {31 + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {15} 1 \times 30 \times 32\)




















\(\ds \)

\(=\)







\(\ds \paren {3 \times 5} \times \paren {2 \times 3 \times 5} \times 2^5\)




















\(\ds \)

\(=\)







\(\ds 2^6 \times 3^2 \times 5^2\)




















\(\ds \)

\(=\)







\(\ds 14 \, 400\)









$\blacksquare$





