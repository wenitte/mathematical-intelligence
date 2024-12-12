# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_270

Example of Divisor Sum of Integer
$\map {\sigma_1} {270} = 720$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$270 = 2 \times 3^3 \times 5$

Hence:














\(\ds \map {\sigma_1} {270}\)

\(=\)







\(\ds \paren {2 + 1} \times \frac {3^4 - 1} {3 - 1} \times \paren {5 + 1}\)




















\(\ds \)

\(=\)







\(\ds 3 \times \frac {81 - 1} 2 \times 6\)




















\(\ds \)

\(=\)







\(\ds 3 \times 40 \times 6\)




















\(\ds \)

\(=\)







\(\ds 3 \times \paren {2^3 \times 5} \times \paren {2 \times 3}\)




















\(\ds \)

\(=\)







\(\ds 2^4 \times 3^2 \times 5\)




















\(\ds \)

\(=\)







\(\ds 720\)









$\blacksquare$





