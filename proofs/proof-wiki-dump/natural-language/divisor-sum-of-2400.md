# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_2400

Example of Divisor Sum of Integer
$\map {\sigma_1} {2400} = 7812$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$2400 = 2^5 \times 3 \times 5^2$

Hence:














\(\ds \map {\sigma_1} {2400}\)

\(=\)







\(\ds \frac {2^6 - 1} {2 - 1} \times \paren {3 + 1} \times \frac {5^3 - 1} {5 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {63} 1 \times 4 \times \frac {124} 4\)




















\(\ds \)

\(=\)







\(\ds 63 \times 4 \times 31\)




















\(\ds \)

\(=\)







\(\ds \paren {3^2 \times 7} \times 2^2 \times 31\)




















\(\ds \)

\(=\)







\(\ds 7812\)









$\blacksquare$





