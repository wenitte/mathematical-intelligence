# 

Source: https://proofwiki.org/wiki/Second_Column_and_Diagonal_of_Pascal%27s_Triangle_consist_of_Triangular_Numbers

Theorem
The $2$nd column and $2$nd diagonal of Pascal's triangle consists of the set of triangular numbers.


Proof
Recall Pascal's triangle:

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

By definition, the entry in row $n$ and column $m$ contains the binomial coefficient $\dbinom n m$.
Thus the $2$nd column contains all the elements of the form $\dbinom n 2$.

The $m$th diagonal consists of the elements in column $n - m$.
Thus the $m$th diagonal contains the binomial coefficients $\dbinom n {n - m}$.
By Symmetry Rule for Binomial Coefficients:

$\dbinom n {n - m} = \dbinom n m$
Thus the $2$nd diagonal also contains the binomial coefficients $\dbinom n 2$.

By Binomial Coefficient with Two: Corollary, the triangular numbers are precisely those numbers of the form $\dbinom n 2$.
Hence the result.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $15$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $15$




