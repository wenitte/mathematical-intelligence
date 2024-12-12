# 

Source: https://proofwiki.org/wiki/Element_of_Leibniz_Harmonic_Triangle_as_Sum_of_Elements_on_Diagonal_from_Below/Lemma_1

Theorem
Consider the Leibniz harmonic triangle:

$\begin{array}{r|rrrrrr}
n & 0 & 1 & 2 & 3 & 4 & 5 \\
\hline
0  & \frac 1 1 \\
1  & \frac 1 2 & \frac 1 2 \\
2  & \frac 1 3 & \frac 1 6 &  \frac 1 3 \\
3  & \frac 1 4 & \frac 1 {12} & \frac 1 {12} & \frac 1 4 \\
4  & \frac 1 5 & \frac 1 {20} & \frac 1 {30} & \frac 1 {20} & \frac 1 5 \\
5  & \frac 1 6 & \frac 1 {30} & \frac 1 {60} & \frac 1 {60} & \frac 1 {30} & \frac 1 6 \\
\end{array}$

Let $\tuple {n, m}$ be the element in the $n$th row and $m$th column.
Then:

$\tuple {n, m} = \tuple {n + 1, m} + \tuple {n + 1, m + 1}$
That is, each number in the Leibniz harmonic triangle is equal to the sum of the number below it and the number to the right of that number.
This is similar to Pascal's Rule for Pascal's triangle.


Proof













\(\ds \tuple {n + 1, m} + \tuple {n + 1, m + 1}\)

\(=\)







\(\ds \frac 1 {\paren {n + 2} \binom {n + 1} m} + \frac 1 {\paren {n + 2} \binom {n + 1} {m + 1} }\)





Definition of Leibniz Harmonic Triangle














\(\ds \)

\(=\)







\(\ds \frac {\paren {n + 1 - m}! m!} {\paren {n + 2} \paren {n + 1}!} + \frac {\paren {n + 1 - m - 1}! \paren {m + 1}!} {\paren {n + 2} \paren {n + 1}!}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \frac {\paren {n - m}! m!} {\paren {n + 2} \paren {n + 1}!} \paren {n + 1 - m + m + 1}\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \frac {\paren {n - m}! m!} {\paren {n + 1} n!}\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \frac 1 {\paren {n + 1} \binom n m}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \tuple {n, m}\)





Definition of Leibniz Harmonic Triangle



$\blacksquare$





