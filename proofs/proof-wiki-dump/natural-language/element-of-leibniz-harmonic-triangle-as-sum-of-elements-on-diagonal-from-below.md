# 

Source: https://proofwiki.org/wiki/Element_of_Leibniz_Harmonic_Triangle_as_Sum_of_Elements_on_Diagonal_from_Below



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

$\tuple {n, m} = \ds \sum_{k \mathop \ge 0} \tuple {n + 1 + k, m + k}$


Lemma 1
$\tuple {n, m} = \tuple {n + 1, m} + \tuple {n + 1, m + 1}$
That is, each number in the Leibniz harmonic triangle is equal to the sum of the number below it and the number to the right of that number.


Lemma 2
$\ds \forall r \in \N_{>0}: \tuple {n, m} = \tuple {n + r, m + r} + \sum_{k \mathop = 1}^r \tuple {n + k, m + k - 1}$
That is, each number in the Leibniz harmonic triangle is equal to the sum of the number below it, $\paren {r - 1}$ numbers diagonally below that number, and the number to the right of the last number.


Proof
Taking $r \to \infty$ in Lemma 2:














\(\ds \sum_{k \mathop \ge 0} \tuple {n + 1 + k, m + k}\)

\(=\)







\(\ds \sum_{k \mathop \ge 1} \tuple {n + k, m + k - 1}\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \lim_{r \to \infty} \paren {\tuple {n, m} - \tuple {n + r, m + r} }\)





Lemma 2














\(\ds \)

\(=\)







\(\ds \tuple {n, m} - \lim_{r \to \infty} \frac 1 {\paren {n + r + 1} \binom {n + r}{m + r} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {n, m}\)









$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $35$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $35$




