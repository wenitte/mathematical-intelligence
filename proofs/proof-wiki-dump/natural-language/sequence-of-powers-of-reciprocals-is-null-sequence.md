# 

Source: https://proofwiki.org/wiki/Sequence_of_Powers_of_Reciprocals_is_Null_Sequence



Theorem
Let $r \in \Q_{>0}$ be a strictly positive rational number.
Let $\sequence {x_n}$ be the sequence in $\R$ defined as:

$x_n = \dfrac 1 {n^r}$

Then $\sequence {x_n}$ is a null sequence.


Real Index
If $r \in \R_{>0}$ is a strictly positive real number, the same result applies.
However, the result is specifically stated for a rational index, as this definition is used in the course of derivation of the existence of a power to a real index.

Let $r \in \R_{>0}$ be a strictly positive real number.
Let $\sequence {x_n}$ be the sequence in $\R$ defined as:

$x_n = \dfrac 1 {n^r}$

Then $\sequence {x_n}$ is a null sequence.


Corollary
Let $\sequence {x_n}$ be the sequence in $\R$ defined as:

$x_n = \dfrac 1 n$

Then $\sequence {x_n}$ is a null sequence.


Proof
Let $\epsilon \in \R_{>0}$.
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

Limit at Infinity of $x^n$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: Exercise $\S 4.6 \ (2)$




