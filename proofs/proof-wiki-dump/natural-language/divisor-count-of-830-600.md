# 

Source: https://proofwiki.org/wiki/Divisor_Count_of_830,600

Example of Use of Divisor Count Function
$\map {\sigma_0} {830 \, 600} = 24$
where $\sigma_0$ denotes the divisor count function.


Proof
From Divisor Count Function from Prime Decomposition:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$
where:

$r$ denotes the number of distinct prime factors in the prime decomposition of $n$
$k_j$ denotes the multiplicity of the $j$th prime in the prime decomposition of $n$.

We have that:

$830 \, 600 = 2^3 \times 5^2 \times 4153$
Thus:














\(\ds \map {\sigma_0} {830 \, 600}\)

\(=\)







\(\ds \map {\sigma_0} {2^3 \times 5^2 \times 4153^1}\)




















\(\ds \)

\(=\)







\(\ds \paren {3 + 1} \paren {2 + 1} \paren {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 2^3 \times 3\)




















\(\ds \)

\(=\)







\(\ds 24\)









$\blacksquare$





