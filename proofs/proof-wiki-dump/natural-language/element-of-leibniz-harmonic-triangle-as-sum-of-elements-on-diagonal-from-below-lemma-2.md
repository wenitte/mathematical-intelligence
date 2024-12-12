# 

Source: https://proofwiki.org/wiki/Element_of_Leibniz_Harmonic_Triangle_as_Sum_of_Elements_on_Diagonal_from_Below/Lemma_2



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

$\ds \forall r \in \N_{>0}: \tuple {n, m} = \tuple {n + r, m + r} + \sum_{k \mathop = 1}^r \tuple {n + k, m + k - 1}$
That is, each number in the Leibniz harmonic triangle is equal to the sum of the number below it, $\paren {r - 1}$ numbers diagonally below that number, and the number to the right of the last number.
This is similar to Rising Sum of Binomial Coefficients (Hockey-stick Identity) for Pascal's triangle.


Proof
Proof by induction:
For all $r \in \N_{>0}$, let $\map P r$ be the proposition:

$\ds \tuple {n, m} = \tuple {n + r, m + r} + \sum_{k \mathop = 1}^r \tuple {n + k, m + k - 1}$


Basis for the Induction
$\map P 1$ is:

$\tuple {n, m} = \tuple {n + 1, m + 1} + \tuple {n + 1, m}$
which is shown in Lemma 1.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P s$ is true, where $s \ge 1$, then it logically follows that $\map P {s + 1}$ is true.

So this is our induction hypothesis:

$\ds \tuple {n, m} = \tuple {n + s, m + s} + \sum_{k \mathop = 1}^s \tuple {n + k, m + k - 1}$

Then we need to show:

$\ds \tuple {n, m} = \tuple {n + s + 1, m + s + 1} + \sum_{k \mathop = 1}^{s + 1} \tuple {n + k, m + k - 1}$


Induction Step
This is our induction step:














\(\ds \)

\(\)







\(\ds \tuple {n + s + 1, m + s + 1} + \sum_{k \mathop = 1}^{s + 1} \tuple {n + k, m + k - 1}\)




















\(\ds \)

\(=\)







\(\ds \tuple {n + s + 1, m + s + 1} + \tuple {n + s + 1, m + s + 1 - 1} + \sum_{k \mathop = 1}^s \tuple {n + k, m + k - 1}\)




















\(\ds \)

\(=\)







\(\ds \tuple {n + s, m + s} + \sum_{k \mathop = 1}^s \tuple {n + k, m + k - 1}\)





Lemma 1














\(\ds \)

\(=\)







\(\ds \tuple {n, m}\)





Induction Hypothesis



So $\map P s \implies \map P {s + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall r \in \N_{>0}: \tuple {n, m} = \tuple {n + r, m + r} + \sum_{k \mathop = 1}^r \tuple {n + k, m + k - 1}$
$\blacksquare$





