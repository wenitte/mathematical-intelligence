# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_720,720

Example of Use of Divisor Count Function
$\map {\sigma_0} {720 \, 720} = 240$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$720 \, 720 = 2^4 \times 3^2 \times 5 \times 7 \times 11 \times 13$
Thus:














\(\ds \map {\sigma_0} {720 \, 720}\)

\(=\)







\(\ds \map {\sigma_0} {2^4 \times 3^2 \times 5^1 \times 7^1 \times 11^1 \times 13^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {4 + 1} \paren {2 + 1} \paren {1 + 1} \paren {1 + 1} \paren {1 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 2^4 \times 3 \times 5\)




















\(\ds \)

\(=\)







\(\ds 240\)









$\blacksquare$




