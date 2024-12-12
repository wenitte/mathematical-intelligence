# 

Source: https://proofwiki.org/wiki/Arithmetic_Mean_is_Weighted_Mean_with_Equal_Weights

Theorem
Let $S = \sequence {x_1, x_2, \ldots, x_n}$ be a set of real numbers.
Let $W$ be a weight function to be applied to the terms of $S$ such that:

$\forall x \in S: \map W x = c$
where $c$ is a real constant.
Let $\bar x$ denote the weighted mean of $S$ with respect to $W$.
Then:

$\bar x = A_n$
where $A_n$ denotes the arithmetic mean of $S$.


Proof













\(\ds \bar x\)

\(=\)







\(\ds \dfrac {\ds \sum_{i \mathop = 1}^n \map W {x_i} x_i} {\ds \sum_{i \mathop = 1}^n \map W {x_i} }\)





Definition of Weighted Mean














\(\ds \)

\(=\)







\(\ds \dfrac {\ds \sum_{i \mathop = 1}^n c x_i} {\ds \sum_{i \mathop = 1}^n c}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \dfrac {c \ds \sum_{i \mathop = 1}^n x_i} {c \ds \sum_{i \mathop = 1}^n 1}\)





Linear Combination of Indexed Summations














\(\ds \)

\(=\)







\(\ds \dfrac {c \ds \sum_{i \mathop = 1}^n x_i} {c \cdot n}\)





Summation of Unity over Elements














\(\ds \)

\(=\)







\(\ds \dfrac 1 n \ds \sum_{i \mathop = 1}^n x_i\)





dividing top and bottom by $c$














\(\ds \)

\(=\)







\(\ds A_n\)





Definition of Arithmetic Mean



$\blacksquare$





