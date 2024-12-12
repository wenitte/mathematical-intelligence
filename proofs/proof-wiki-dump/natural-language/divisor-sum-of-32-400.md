# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_32,400

Example of Divisor Sum of Integer
$\map {\sigma_1} {32 \, 400} = 116 \, 281$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$32 \, 400 = 2^4 \times 3^4 \times 5^2$
Hence:














\(\ds \map {\sigma_1} {32 \, 400}\)

\(=\)







\(\ds \frac {2^5 - 1} {2 - 1} \times \frac {3^5 - 1} {3 - 1} \times \frac {5^3 - 1} {5 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {31} 1 \times \frac {242} 2 \times \frac {124} 4\)




















\(\ds \)

\(=\)







\(\ds 31 \times 121 \times 31\)




















\(\ds \)

\(=\)







\(\ds \paren {31 \times 11}^2\)




















\(\ds \)

\(=\)







\(\ds 341^2\)




















\(\ds \)

\(=\)







\(\ds 116 \, 281\)









$\blacksquare$





