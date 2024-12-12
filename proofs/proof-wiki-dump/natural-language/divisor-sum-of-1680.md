# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_1680

Example of Divisor Sum of Integer
$\map {\sigma_1} {1680} = 5952$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$1680 = 2^4 \times 3 \times 5 \times 7$

Hence:














\(\ds \map {\sigma_1} {1680}\)

\(=\)







\(\ds \frac {2^5 - 1} {2 - 1} \times \paren {3 + 1} \times \paren {5 + 1} \times \paren {7 + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {31} 1 \times 4 \times 6 \times 8\)




















\(\ds \)

\(=\)







\(\ds 31 \times 2^2 \times \times \paren {2 \times 3} \times 2^3\)




















\(\ds \)

\(=\)







\(\ds 2^6 \times 3 \times 31\)




















\(\ds \)

\(=\)







\(\ds 5952\)









$\blacksquare$





