# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_12,285

Example of Divisor Sum of Integer
$\map {\sigma_1} {12 \, 285} = 26 \, 880$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$12 \, 285 = 3^3 \times 5 \times 7 \times 13$

Hence:














\(\ds \map {\sigma_1} {12 \, 285}\)

\(=\)







\(\ds \frac {3^4 - 1} {3 - 1} \times \paren {5 + 1} \times \paren {7 + 1} \times \paren {13 + 1}\)




















\(\ds \)

\(=\)







\(\ds 40 \times 6 \times 8 \times 14\)




















\(\ds \)

\(=\)







\(\ds \paren {2^3 \times 5} \times \paren {2 \times 3} \times 2^3 \times \paren {2 \times 7}\)




















\(\ds \)

\(=\)







\(\ds 2^8 \times 3 \times 5 \times 7\)




















\(\ds \)

\(=\)







\(\ds 26 \, 880\)









$\blacksquare$





