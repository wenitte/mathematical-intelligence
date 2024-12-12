# 

Source: https://proofwiki.org/wiki/Chebyshev%27s_Sum_Inequality/Discrete/Also_presented_as

Chebyshev's Sum Inequality (Discrete): Also presented as
Some sources present Chebyshev's sum inequality as:

$\ds n \sum_{k \mathop = 1}^n a_k b_k \ge \paren {\sum_{k \mathop = 1}^n a_k} \paren {\sum_{k \mathop = 1}^n b_k}$
where:

$a_1, a_2, \ldots, a_n$ are real numbers such that:
$a_1 \ge a_2 \ge \cdots \ge a_n$
$b_1, b_2, \ldots, b_n$ are real numbers such that:
$b_1 \ge b_2 \ge \cdots \ge b_n$


Proof
We have by hypothesis that the sequences $\sequence {a_k}$ and $\sequence {b_k}$ are both decreasing.
For $j, k \in \set {1, 2, \ldots, n}$, consider:

$\paren {a_j - a_k} \paren {b_j - b_k}$
Therefore $a_j - a_k$ and $b_j - b_k$ have the same sign for all $j, k \in \set {1, 2, \ldots, n}$.
So:

$\forall j, k \in \set {1, 2, \ldots, n}: \paren {a_j - a_k} \paren {b_j - b_k} \ge 0$

Hence:














\(\ds 0\)

\(\le\)







\(\ds \sum_{j \mathop = 1}^n \sum_{k \mathop = 1}^n \paren {a_j - a_k} \paren {b_j - b_k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \sum_{k \mathop = 1}^n \paren {a_j b_j - a_k b_j - a_j b_k + a_k b_k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \sum_{k \mathop = 1}^n a_j b_j - \sum_{j \mathop = 1}^n \sum_{k \mathop = 1}^n a_k b_j - \sum_{j \mathop = 1}^n \sum_{k \mathop = 1}^n a_j b_k + \sum_{j \mathop = 1}^n \sum_{k \mathop = 1}^n a_k b_k\)




















\(\ds \)

\(=\)







\(\ds n \sum_{j \mathop = 1}^n a_j b_j - \sum_{k \mathop = 1}^n a_k \sum_{j \mathop = 1}^n b_j - \sum_{j \mathop = 1}^n a_j \sum_{k \mathop = 1}^n b_k + n \sum_{k \mathop = 1}^n a_k b_k\)





General Distributivity Theorem














\(\ds \)

\(=\)







\(\ds 2 n \sum_{k \mathop = 1}^n a_k b_k - 2 \sum_{k \mathop = 1}^n a_k \sum_{k \mathop = 1}^n b_k\)





renaming and gathering equal terms














\(\ds \)

\(=\)







\(\ds n \sum_{k \mathop = 1}^n a_k b_k - \sum_{k \mathop = 1}^n a_k \sum_{k \mathop = 1}^n b_k\)





dividing through by $2$




Then we may manipulate it into the required form:












\(\ds \)

\(=\)







\(\ds \dfrac 1 n \sum_{k \mathop = 1}^n a_k b_k - \dfrac 1 {n^2} \sum_{k \mathop = 1}^n a_k \sum_{k \mathop = 1}^n b_k\)





dividing through by $n^2$








\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 n \sum_{k \mathop = 1}^n a_k b_k\)

\(\ge\)







\(\ds \paren {\dfrac 1 n \sum_{k \mathop = 1}^n a_k} \paren {\dfrac 1 n \sum_{k \mathop = 1}^n b_k}\)









The result follows.
$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.2$ Inequalities: Chebyshev's Inequality: $3.2.7$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 36$: Inequalities: Chebyshev's Inequality: $36.11$




