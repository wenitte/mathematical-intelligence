# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_168

Example of Divisor Sum of Integer
$\map {\sigma_1} {168} = 480$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$168 = 2^3 \times 3 \times 7$

Hence:














\(\ds \map {\sigma_1} {168}\)

\(=\)







\(\ds \frac {2^4 - 1} {2 - 1} \times \frac {3^2 - 1} {3 - 1} \times \frac {7^2 - 1} {7 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {15} 1 \times \frac {4 \times 2} 2 \times \frac {8 \times 6} 6\)




















\(\ds \)

\(=\)







\(\ds 15 \times 4 \times 8\)




















\(\ds \)

\(=\)







\(\ds \paren {3 \times 5} 2^2 \times 2^3\)




















\(\ds \)

\(=\)







\(\ds 2^5 \times 3 \times 5\)




















\(\ds \)

\(=\)







\(\ds 480\)









$\blacksquare$





