# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_10,744

Example of Divisor Sum of Integer
$\map {\sigma_1} {10 \, 744} = 21 \, 600$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer:

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$10 \, 744 = 2^3 \times 17 \times 79$

Hence:














\(\ds \map {\sigma_1} {10 \, 744}\)

\(=\)







\(\ds \frac {2^4 - 1} {2 - 1} \times \paren {17 + 1} \times \paren {79 + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {15} 1 \times 18 \times 80\)




















\(\ds \)

\(=\)







\(\ds \paren {3 \times 5} \times \paren {2 \times 3^2} \times \paren {2^4 \times 5}\)




















\(\ds \)

\(=\)







\(\ds 2^5 \times 3^3 \times 5^2\)




















\(\ds \)

\(=\)







\(\ds 21 \, 600\)









$\blacksquare$





