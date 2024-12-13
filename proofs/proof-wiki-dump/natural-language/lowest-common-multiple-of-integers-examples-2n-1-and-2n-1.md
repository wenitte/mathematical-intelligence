# 

Source: https://proofwiki.org/wiki/Lowest_Common_Multiple_of_Integers/Examples/2n-1_and_2n%2B1

Example of Lowest Common Multiple of Integers
Let $n \in \Z_{>0}$ be a strictly positive integer.
The lowest common multiple of $2 n - 1$ and $2 n + 1$ is:

$\lcm \set {2 n - 1, 2 n + 1} = 4 n^2 - 1$


Proof
We find the greatest common divisor of $2 n - 1$ and $2 n + 1$ using the Euclidean Algorithm:




\(\text {(1)}: \quad\)









\(\ds 2 n + 1\)

\(=\)







\(\ds 1 \times \paren {2 n - 1} + 2\)










\(\text {(2)}: \quad\)









\(\ds 2 n - 1\)

\(=\)







\(\ds 2 \times \paren {n - 1} + 1\)










\(\text {(3)}: \quad\)









\(\ds n - 1\)

\(=\)







\(\ds 1 \times \paren {n - 1}\)










Thus $\gcd \set {2 n - 1, 2 n + 1} = 1$.
Hence by definition $n$ and $n + 1$ are coprime.

Thus:














\(\ds \lcm \set {2 n - 1, 2 n + 1}\)

\(=\)







\(\ds \paren {2 n + 1} \paren {2 n - 1}\)





LCM equals Product iff Coprime














\(\ds \)

\(=\)







\(\ds \paren {2 n}^2 - 1\)





Difference of Two Squares



The result follows.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-2}$ Divisibility: Exercise $5 \ \text {(f)}$




