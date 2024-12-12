# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_1080

Example of Divisor Sum of Integer
$\map {\sigma_1} {1080} = 3600$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$1080 = 2^3 \times 3^3 \times 5$
Hence:














\(\ds \map {\sigma_1} {1080}\)

\(=\)







\(\ds \frac {2^4 - 1} {2 - 1} \times \frac {3^4 - 1} {3 - 1}  \times \paren {5 + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {15} 1 \times \frac {80} 2 \times 6\)




















\(\ds \)

\(=\)







\(\ds \paren {3 \times 5} \times \paren {2^3 \times 5} \times \paren {2 \times 3}\)




















\(\ds \)

\(=\)







\(\ds 2^4 \times 3^2 \times 5^2\)




















\(\ds \)

\(=\)







\(\ds 3600\)









$\blacksquare$





