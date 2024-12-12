# 

Source: https://proofwiki.org/wiki/Binomial_Theorem/Examples/(1_%2B_x)%5E7

Example of Use of Binomial Theorem
$\paren {1 + x}^7 = 1 + 7 x + 21 x^2 + 35 x^3 + 35 x^4 + 21 x^5 + 7 x^6 + x^7$


Proof













\(\ds \paren {1 + x}^7\)

\(=\)







\(\ds \sum_k \binom 7 k x^k 1^{7 - k}\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds \binom 7 0 x^0 + \binom 7 1 x^1 + \binom 7 2 x^2 + \binom 7 3 x^3 + \binom 7 4 x^4 + \binom 7 5 x^5 + \binom 7 6 x^6 + \binom 7 7 x^7\)





Outside of the range $0 \le k \le 7$, $\dbinom 7 k = 0$














\(\ds \)

\(=\)







\(\ds 1 + 7 x + 21 x^2 + 35 x^3 + 35 x^4 + 21 x^5 + 7 x^6 + x^7\)










As can be seen, the digits are those from the $7$th row of Pascal's triangle:

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
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $35$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $35$




