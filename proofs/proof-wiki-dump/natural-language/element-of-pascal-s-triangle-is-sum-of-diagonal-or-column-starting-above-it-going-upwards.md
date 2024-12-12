# 

Source: https://proofwiki.org/wiki/Element_of_Pascal%27s_Triangle_is_Sum_of_Diagonal_or_Column_starting_above_it_going_Upwards

Theorem
Consider Pascal's triangle:


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

Let $\tuple {n, m}$ be the element in the $n$th row and $m$th column.
Then:

$\tuple {n, m} = \ds \sum_{k \mathop \ge 0} \tuple {n - k - 1, m - 1}$
and:

$\tuple {n, m} = \ds \sum_{k \mathop \ge 0} \tuple {n - k - 1, m - k - 1}$


Proof
We have $\tuple {n, m} = \dbinom n m$, and we have:














\(\ds \sum_{k \mathop \ge 0} \binom {n - k - 1} {m - 1}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - m} \binom {m - 1 + k} {m - 1}\)




















\(\ds \)

\(=\)







\(\ds \binom {m - 1 + n - m + 1} {m - 1 + 1}\)





Rising Sum of Binomial Coefficients














\(\ds \)

\(=\)







\(\ds \binom n m\)




















\(\ds \sum_{k \mathop \ge 0} \binom {n - k - 1} {m - k - 1}\)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \binom {n - k - 1} {n - k - 1 - \paren {m - k - 1} }\)





Symmetry Rule for Binomial Coefficients














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \binom {n - k - 1} {n - m}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{m - 1} \binom {n - m + k} {n - m}\)




















\(\ds \)

\(=\)







\(\ds \binom {n - m + m - 1 + 1} {m - 1 + 1}\)





Rising Sum of Binomial Coefficients














\(\ds \)

\(=\)







\(\ds \binom n m\)









$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $35$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $35$




