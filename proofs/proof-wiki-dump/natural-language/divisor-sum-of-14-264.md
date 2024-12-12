# 

Source: https://proofwiki.org/wiki/Divisor_Sum_of_14,264

Example of Divisor Sum of Integer
$\map {\sigma_1} {14 \, 264} = 26 \, 760$
where $\sigma_1$ denotes the divisor sum function.


Proof
From Divisor Sum of Integer

$\ds \map {\sigma_1} n = \prod_{1 \mathop \le i \mathop \le r} \frac {p_i^{k_i + 1} - 1} {p_i - 1}$
where $n = \ds \prod_{1 \mathop \le i \mathop \le r} p_i^{k_i}$ denotes the prime decomposition of $n$.

We have that:

$14 \, 264 = 2^3 \times 1783$

Hence:














\(\ds \map {\sigma_1} {14 \, 264}\)

\(=\)







\(\ds \frac {2^4 - 1} {2 - 1} \times \frac {1783^2 - 1} {1783 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {15} 1 \times \frac {1784 \times 1782} {1782}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds 15 \times 1784\)




















\(\ds \)

\(=\)







\(\ds \paren {3 \times 5} \times \paren {2^3 \times 223}\)




















\(\ds \)

\(=\)







\(\ds 26 \, 760\)









$\blacksquare$





