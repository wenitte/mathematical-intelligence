# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_1050

Example of Divisor Sum of Integer
$\map {\sigma_1} {1050} = 2976$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer: Corollary

$\ds \map {\sigma_1} n = \prod_{\substack {1 \mathop \le i \mathop \le r \\ k_i \mathop > 1} } \frac {p_i^{k_i + 1} - 1} {p_i - 1} \prod_{\substack {1 \mathop \le i \mathop \le r \\ k_i \mathop = 1} } \paren {p_i + 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$1050 = 2 \times 3 \times 5^2 \times 7$
Hence:














\(\ds \map {\sigma_1} {1050}\)

\(=\)







\(\ds \paren {2 + 1} \paren {3 + 1} \times \frac {5^3 - 1} {5 - 1} \times \paren {7 + 1}\)




















\(\ds \)

\(=\)







\(\ds 3 \times 4 \times \frac {124} 4 \times 8\)




















\(\ds \)

\(=\)







\(\ds 3 \times 2^2 \times 31 \times 2^3\)




















\(\ds \)

\(=\)







\(\ds 2^5 \times 3 \times 31\)




















\(\ds \)

\(=\)







\(\ds 2976\)









$\blacksquare$





