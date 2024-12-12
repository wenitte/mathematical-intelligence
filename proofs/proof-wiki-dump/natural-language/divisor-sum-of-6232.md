# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_6232

Example of Divisor Sum of Integer
$\map {\sigma_1} {6232} = 12 \, 600$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$6232 = 2^3 \times 19 \times 41$

Hence:














\(\ds \map {\sigma_1} {6232}\)

\(=\)







\(\ds \frac {2^4 - 1} {2 - 1} \times \paren {19 + 1} \times \paren {41 + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {15} 1 \times 20 \times 42\)




















\(\ds \)

\(=\)







\(\ds \paren {3 \times 5} \times \paren {2^2 \times 5} \times \paren {2 \times 3 \times 7}\)




















\(\ds \)

\(=\)







\(\ds 2^3 \times 3^2 \times 5^2 \times 7\)




















\(\ds \)

\(=\)







\(\ds 12 \, 600\)









$\blacksquare$





