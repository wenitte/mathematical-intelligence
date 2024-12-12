# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_600

Example of Divisor Sum of Integer
$\map {\sigma_1} {600} = 1860$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer:

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$600 = 2^3 \times 3 \times 5^2$

Hence:














\(\ds \map {\sigma_1} {600}\)

\(=\)







\(\ds \frac {2^4 - 1} {2 - 1} \times \paren {3 + 1} \times \frac {5^3 - 1} {5 - 1}\)




















\(\ds \)

\(=\)







\(\ds 15 \times 4 \times 31\)




















\(\ds \)

\(=\)







\(\ds \paren {3 \times 5} \times 2^2 \times 31\)




















\(\ds \)

\(=\)







\(\ds 1860\)









$\blacksquare$





