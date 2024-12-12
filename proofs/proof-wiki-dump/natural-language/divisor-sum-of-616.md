# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_616

Example of Divisor Sum of Integer
$\map {\sigma_1} {616} = 1440$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer:

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$616 = 2^3 \times 7 \times 11$

Hence:














\(\ds \map {\sigma_1} {616}\)

\(=\)







\(\ds \frac {2^4 - 1} {2 - 1} \times \paren {7 + 1} \times \paren {11 + 1}\)




















\(\ds \)

\(=\)







\(\ds 15 \times 8 \times 12\)




















\(\ds \)

\(=\)







\(\ds \paren {3 \times 5} \times 2^3 \times \paren {2^2 \times 3}\)




















\(\ds \)

\(=\)







\(\ds 2^5 \times 3^2 \times 5\)




















\(\ds \)

\(=\)







\(\ds 1440\)









$\blacksquare$





