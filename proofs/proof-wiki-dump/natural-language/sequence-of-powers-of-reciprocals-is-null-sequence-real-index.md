# 

Source: https://proofwiki.org/wiki/Sequence_of_Powers_of_Reciprocals_is_Null_Sequence/Real_Index

Theorem
Let $r \in \R_{>0}$ be a strictly positive real number.
Let $\sequence {x_n}$ be the sequence in $\R$ defined as:

$x_n = \dfrac 1 {n^r}$

Then $\sequence {x_n}$ is a null sequence.


Proof
Let $\epsilon > 0$.
We need to show that:

$\exists N \in \N: n > N \implies \size {\dfrac 1 {n^r} } < \epsilon$
That is, that $n^r > 1 / \epsilon$.

Let us choose $N = \ceiling {\paren {1 / \epsilon}^{1/r} }$.
By Reciprocal of Strictly Positive Real Number is Strictly Positive and power of positive real number is positive, it follows that:

$\paren {\dfrac 1 \epsilon}^{1/r} \gt 0$

Then by Positive Power Function on Non-negative Reals is Strictly Increasing:

$\forall n > N: n^r > N^r \ge 1 / \epsilon$
$\blacksquare$


Also see
This result and Sequence of Powers of Number less than One‎ are sometimes referred to as the basic null sequences.

Limit at Infinity of x^n




