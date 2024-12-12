# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_1,705,636

Example of Divisor Sum of Integer
$\map {\sigma_1} {1 \, 705 \, 636} = 2 \, 989 \, 441$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$1 \, 705 \, 636 = 2^2 \times 653^2$
Hence:














\(\ds \map {\sigma_1} {1 \, 705 \, 636}\)

\(=\)







\(\ds \frac {2^3 - 1} {2 - 1} \times \frac {653^3 - 1} {653 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac 7 1 \times \frac {278 \, 445 \, 076} {652}\)




















\(\ds \)

\(=\)







\(\ds 7 \times 427 \, 063\)




















\(\ds \)

\(=\)







\(\ds \paren {7^2 \times 13^2 \times 19^2}^2\)




















\(\ds \)

\(=\)







\(\ds 1729^2\)




















\(\ds \)

\(=\)







\(\ds 2 \, 989 \, 441\)









$\blacksquare$





