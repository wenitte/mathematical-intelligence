# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_1184

Example of Divisor Sum of Integer
$\map {\sigma_1} {1184} = 2394$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$1184 = 2^5 \times 37$
Hence:














\(\ds \map {\sigma_1} {1184}\)

\(=\)







\(\ds \frac {2^6 - 1} {2 - 1} \times \frac {37^2 - 1} {37 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {63} 1 \times \frac {38 \times 36} {36}\)




















\(\ds \)

\(=\)







\(\ds 63 \times 38\)




















\(\ds \)

\(=\)







\(\ds \paren {3^2 \times 7} \times \paren {2 \times 19}\)




















\(\ds \)

\(=\)







\(\ds 2 \times 3^2 \times 7 \times 19\)




















\(\ds \)

\(=\)







\(\ds 2394\)









$\blacksquare$





