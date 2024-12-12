# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_9272

Example of Divisor Sum of Integer
$\map {\sigma_1} {9272} = 18 \, 600$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer:

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$9272 = 2^3 \times 19 \times 61$

Hence:














\(\ds \map {\sigma_1} {9272}\)

\(=\)







\(\ds \frac {2^4 - 1} {2 - 1} \times \paren {19 + 1} \times \paren {61 + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {15} 1 \times 20 \times 62\)




















\(\ds \)

\(=\)







\(\ds \paren {3 \times 5} \times \paren {2^2 \times 5} \times \paren {2 \times 31}\)




















\(\ds \)

\(=\)







\(\ds 2^3 \times 3 \times 5^2 \times 31\)




















\(\ds \)

\(=\)







\(\ds 18 \, 600\)









$\blacksquare$





