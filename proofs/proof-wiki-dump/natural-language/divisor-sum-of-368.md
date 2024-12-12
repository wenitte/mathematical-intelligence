# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_368

Example of Divisor Sum of Integer
$\map {\sigma_1} {368} = 744$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$368 = 2^4 \times 23$

Hence:














\(\ds \map {\sigma_1} {368}\)

\(=\)







\(\ds \frac {2^5 - 1} {2 - 1} \times \paren {23 + 1}\)




















\(\ds \)

\(=\)







\(\ds 31 \times 24\)




















\(\ds \)

\(=\)







\(\ds 2^3 \times 3 \times 31\)




















\(\ds \)

\(=\)







\(\ds 744\)









$\blacksquare$





