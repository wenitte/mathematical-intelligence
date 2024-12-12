# 

Source: https://proofwiki.org/wiki/Definition:Extended_Pascal%27s_Triangle

Theorem
Pascal's triangle can be extended for binomial coefficients of negative integers as follows:

$\begin{array}{r|rrrrrrrrrr}
n & \binom n 0 & \binom n 1 & \binom n 2 & \binom n 3 & \binom n 4 & \binom n 5 & \binom n 6 & \binom n 7 & \binom n 8 & \binom n 9 & \binom n {10} & \binom n {11} & \binom n {12} \\
\hline
-3 & 1 & -3 &  6 & -10 &  15 & -21 &  28 & -36 &  45 & -55  &  66 & -78 &  91 \\
-2 & 1 & -2 &  3 &  -4 &   5 &  -6 &   7 &  -8 &   9 & -10  &  11 & -12 &  13 \\
-1 & 1 & -1 &  1 &  -1 &   1 &  -1 &   1 &  -1 &   1 &  -1  &   1 &  -1 &   1 \\

0 & 1 &  0 &  0 &   0 &   0 &   0 &   0 &   0 &   0 &   0  &   0 &   0 &   0 \\
1 & 1 &  1 &  0 &   0 &   0 &   0 &   0 &   0 &   0 &   0  &   0 &   0 &   0 \\
2 & 1 &  2 &  1 &   0 &   0 &   0 &   0 &   0 &   0 &   0  &   0 &   0 &   0 \\
3 & 1 &  3 &  3 &   1 &   0 &   0 &   0 &   0 &   0 &   0  &   0 &   0 &   0 \\
4 & 1 &  4 &  6 &   4 &   1 &   0 &   0 &   0 &   0 &   0  &   0 &   0 &   0 \\
5 & 1 &  5 & 10 &  10 &   5 &   1 &   0 &   0 &   0 &   0  &   0 &   0 &   0 \\
6 & 1 &  6 & 15 &  20 &  15 &   6 &   1 &   0 &   0 &   0  &   0 &   0 &   0 \\

\end{array}$


Construction
The numbers for negatively indexed binomial coefficients can be found by application of Pascal's Rule:

$\dbinom n k = \dbinom {n + 1} k - \dbinom n {k - 1}$
From Binomial Coefficient with Zero, we have:

$\forall n \in \Z: \dbinom n 0 = 1$
Thus:














\(\ds \dbinom {-1} 1\)

\(=\)







\(\ds \dbinom 0 1 - \dbinom {-1} 0\)




















\(\ds \)

\(=\)







\(\ds 0 - 1\)




















\(\ds \)

\(=\)







\(\ds -1\)
























\(\ds \dbinom {-1} 2\)

\(=\)







\(\ds \dbinom 0 2 - \dbinom {-1} 1\)




















\(\ds \)

\(=\)







\(\ds 0 - \left({-1}\right)\)




















\(\ds \)

\(=\)







\(\ds 1\)









and so on.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $6$




