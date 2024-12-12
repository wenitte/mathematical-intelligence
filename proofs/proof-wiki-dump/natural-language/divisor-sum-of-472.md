# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_472

Example of Divisor Sum of Integer
$\map {\sigma_1} {472} = 900$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer:

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$472 = 2^3 \times 59$

Hence:














\(\ds \map {\sigma_1} {472}\)

\(=\)







\(\ds \frac {2^4 - 1} {2 - 1} \times \frac {59^2 - 1} {59 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {15} 1 \times \frac {60 \times 58} {58}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds 15 \times 60\)




















\(\ds \)

\(=\)







\(\ds \paren {3 \times 5} \times \paren {2^2 \times 3 \times 5}\)




















\(\ds \)

\(=\)







\(\ds 2^2 \times 3^2 \times 5^2\)




















\(\ds \)

\(=\)







\(\ds \paren {2 \times 3 \times 5}^2\)




















\(\ds \)

\(=\)







\(\ds 30^2\)




















\(\ds \)

\(=\)







\(\ds 900\)









$\blacksquare$





