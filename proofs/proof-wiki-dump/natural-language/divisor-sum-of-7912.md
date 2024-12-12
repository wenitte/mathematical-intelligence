# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_7912

Example of Divisor Sum of Integer
$\map {\sigma_1} {7912} = 15 \, 840$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer:

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$7912 = 2^3 \times 23 \times 43$

Hence:














\(\ds \map {\sigma_1} {7912}\)

\(=\)







\(\ds \frac {2^4 - 1} {2 - 1} \times \paren {23 + 1} \times \paren {43 + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {15} 1 \times 24 \times 44\)




















\(\ds \)

\(=\)







\(\ds \paren {3 \times 5} \times \paren {2^3 \times 3} \times \paren {2^2 \times 11}\)




















\(\ds \)

\(=\)







\(\ds 2^5 \times 3^2 \times 5 \times 11\)




















\(\ds \)

\(=\)







\(\ds 15 \, 840\)









$\blacksquare$





