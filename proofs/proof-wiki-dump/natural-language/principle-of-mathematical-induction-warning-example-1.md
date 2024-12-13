# 

Source: https://proofwiki.org/wiki/Principle_of_Mathematical_Induction/Warning/Example_1

Example of Incorrect Use of Principle of Mathematical Induction
Let $L_k$ denote the $k$th Lucas number.
Let $F_k$ denote the $k$th Fibonacci number.

Given that $L_n = F_n$ for $n = 1, 2, \ldots, k$, we see that:














\(\ds L_{k + 1}\)

\(=\)







\(\ds L_k + L_{k - 1}\)





Definition 1 of Lucas Number














\(\ds \)

\(=\)







\(\ds F_k + F_{k - 1}\)





by assumption














\(\ds \)

\(=\)







\(\ds F_{k + 1}\)





Definition of Fibonacci Number




Hence:

$\forall n \in \Z_{>0}: F_n = L_n$


Refutation
We have made the assumption that $L_n = F_n$ for $n = 1, 2, \ldots, k$.
However, we have that:

$L_2 = 3$
while:

$F_2 = 1$
Hence as the base case has been demonstrated to be false, the proof is invalid.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {1-1}$ Principle of Mathematical Induction: Exercise $14$




