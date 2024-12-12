# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_510

Example of Divisor Sum of Integer
$\map {\sigma_1} {510} = 1296$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer: Corollary

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$510 = 2 \times 3 \times 5 \times 17$

Hence:














\(\ds \map {\sigma_1} {510}\)

\(=\)







\(\ds \paren {2 + 1} \paren {3 + 1} \paren {5 + 1} \paren {17 + 1}\)




















\(\ds \)

\(=\)







\(\ds 3 \times 4 \times 6 \times 18\)




















\(\ds \)

\(=\)







\(\ds 3 \times 2^2 \times \paren {2 \times 3} \times \paren {2 × 3^2}\)




















\(\ds \)

\(=\)







\(\ds 2^4 \times 3^4\)




















\(\ds \)

\(=\)







\(\ds \paren {2^2 \times 3^2}^2\)




















\(\ds \)

\(=\)







\(\ds 36^2\)




















\(\ds \)

\(=\)







\(\ds 1296\)









$\blacksquare$





