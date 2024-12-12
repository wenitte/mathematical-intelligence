# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_248

Example of Divisor Sum of Integer
$\map {\sigma_1} {248} = 480$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer:

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$248 = 2^3 \times 31$

Hence:














\(\ds \map {\sigma_1} {248}\)

\(=\)







\(\ds \frac {2^4 - 1} {2 - 1} \times \frac {31^2 - 1} {31 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {15} 1 \times \frac {32 \times 30} {30}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds 15 \times 32\)




















\(\ds \)

\(=\)







\(\ds \paren {3 \times 5} \times 2^5\)




















\(\ds \)

\(=\)







\(\ds 480\)









$\blacksquare$





