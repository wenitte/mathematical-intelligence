# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_1,857,437,604

Example of Divisor Sum of Integer
$\map {\sigma_1} {1 \, 857 \, 437 \, 604} = 5 \, 168 \, 743 \, 489$
where $\sigma_1$ denotes the divisor sum.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{i \mathop = 1}^r \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop = 1}^r p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$1 \, 857 \, 437 \, 604 = 2^2 \times 3^2 \times 11^2 \times 653^2$
Hence:














\(\ds \map {\sigma_1} {1 \, 857 \, 437 \, 604}\)

\(=\)







\(\ds \frac {2^3 - 1} {2 - 1} \times \frac {3^3 - 1} {3 - 1} \times \frac {11^3 - 1} {11 - 1} \times \frac {653^3 - 1} {653 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac 7 1 \times \frac {26} 2 \times \frac {1330} {10} \times \frac {278 \, 445 \, 076} {652}\)




















\(\ds \)

\(=\)







\(\ds 7 \times 13 \times 133 \times 427 \, 063\)




















\(\ds \)

\(=\)







\(\ds 7 \times 13 \times \paren {7 \times 19} \times \paren {7 \times 13^2 \times 19^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {7 \times 13 \times 19}^3\)




















\(\ds \)

\(=\)







\(\ds 1729^3\)




















\(\ds \)

\(=\)







\(\ds 5 \, 168 \, 743 \, 489\)









$\blacksquare$





