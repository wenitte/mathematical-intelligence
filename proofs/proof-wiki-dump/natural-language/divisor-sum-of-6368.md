# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_6368

Example of Divisor Sum of Integer
$\map {\sigma_1} {6368} = 12 \, 600$
where $\sigma_1$ denotes the Divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$6368 = 2^5 \times 199$

Hence:














\(\ds \map {\sigma_1} {6368}\)

\(=\)







\(\ds \frac {2^6 - 1} {2 - 1} \times \paren {199 + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {63} 1 \times 200\)




















\(\ds \)

\(=\)







\(\ds \paren {3^2 \times 7} \times \paren {2^3 \times 5^2}\)




















\(\ds \)

\(=\)







\(\ds 2^3 \times 3^2 \times 5^2 \times 7\)




















\(\ds \)

\(=\)







\(\ds 12 \, 600\)









$\blacksquare$





