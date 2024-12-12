# 

Source: https://proofwiki.org/wiki/Binomial_Theorem/Examples/11%5E4

Example of Use of Binomial Theorem
$11^4 = \left({10 + 1}\right)^4 = 14 \, 641$


Proof













\(\ds 11^4\)

\(=\)







\(\ds \left({10 + 1}\right)^4\)




















\(\ds \)

\(=\)







\(\ds \sum_k \binom 4 k 10^k 1^{4 - k}\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds \binom 4 0 + 10 \binom 4 1 + 10^2 \binom 4 2 + 10^3 \binom 4 3 + 10^4 \binom 4 4\)





Outside of the range $0 \le k \le 4$, $\dbinom 4 k = 0$














\(\ds \)

\(=\)







\(\ds 1 + 10 \times 4 + 100 \times 6 + 1000 \times 4 + 10 \, 000\)




















\(\ds \)

\(=\)







\(\ds 14 \, 641\)










As can be seen, the digits are those from the $4$th row of Pascal's triangle:

$\begin{array}{r|rrrrrrrrrr}
n & \binom n 0 & \binom n 1 & \binom n 2 & \binom n 3 & \binom n 4 & \binom n 5 & \binom n 6 & \binom n 7 & \binom n 8 & \binom n 9 & \binom n {10} & \binom n {11} & \binom n {12} \\
\hline
0  & 1 &  0 &  0 &   0 &   0 &   0 &   0 &   0 &   0 &  0  &  0 &  0 & 0 \\
1  & 1 &  1 &  0 &   0 &   0 &   0 &   0 &   0 &   0 &  0  &  0 &  0 & 0 \\
2  & 1 &  2 &  1 &   0 &   0 &   0 &   0 &   0 &   0 &  0  &  0 &  0 & 0 \\
3  & 1 &  3 &  3 &   1 &   0 &   0 &   0 &   0 &   0 &  0  &  0 &  0 & 0 \\
4  & 1 &  4 &  6 &   4 &   1 &   0 &   0 &   0 &   0 &  0  &  0 &  0 & 0 \\
5  & 1 &  5 & 10 &  10 &   5 &   1 &   0 &   0 &   0 &  0  &  0 &  0 & 0 \\
6  & 1 &  6 & 15 &  20 &  15 &   6 &   1 &   0 &   0 &  0  &  0 &  0 & 0 \\
7  & 1 &  7 & 21 &  35 &  35 &  21 &   7 &   1 &   0 &  0  &  0 &  0 & 0 \\
8  & 1 &  8 & 28 &  56 &  70 &  56 &  28 &   8 &   1 &  0  &  0 &  0 & 0 \\
9  & 1 &  9 & 36 &  84 & 126 & 126 &  84 &  36 &   9 &  1  &  0 &  0 & 0 \\
10 & 1 & 10 & 45 & 120 & 210 & 252 & 210 & 120 &  45 &  10 &  1 &  0 & 0 \\
11 & 1 & 11 & 55 & 165 & 330 & 462 & 462 & 330 & 165 &  55 & 11 &  1 & 0 \\
12 & 1 & 12 & 66 & 220 & 495 & 792 & 924 & 792 & 495 & 220 & 66 & 12 & 1 \\
\end{array}$

$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $5$




