# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Real_Exponential_Function/Inverse_of_Natural_Logarithm_implies_Limit_of_Sequence



Theorem
The following definition of the concept of the real exponential function:

As the Inverse of the Natural Logarithm
Consider the natural logarithm $\ln x$, which is defined on the open interval $\openint 0 {+\infty}$.
From Logarithm is Strictly Increasing:

$\ln x$ is strictly increasing.
From Inverse of Strictly Monotone Function:

the inverse of $\ln x$ always exists.

The inverse of the natural logarithm function is called the exponential function, which is denoted as $\exp$.
Thus for $x \in \R$, we have:

$y = \exp x \iff x = \ln y$

implies the following definition:

As the Limit of a Sequence
The exponential function can be defined as the following limit of a sequence:

$\exp x := \ds \lim_{n \mathop \to +\infty} \paren {1 + \frac x n}^n$


Proof
Let $\exp x$ be the real function defined as the inverse of the natural logarithm:

$y = \exp x \iff x = \ln y$

Let $\left \langle {x_n} \right \rangle$ be the sequence in $\R$ defined as:

$x_n = \paren {1 + \dfrac x n}^n$

First it needs to be noted that $\sequence {x_n}$ does indeed converge to a limit.
From Equivalence of Definitions of Real Exponential Function: Limit of Sequence implies Power Series Expansion, we have:

$\ds \lim_{n \mathop \to \infty} \paren {1 + \dfrac x n}^n = \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}$
From Series of Power over Factorial Converges, the right hand side is indeed shown to converge to a limit.

It will next be shown that:

$\ds \map \ln {\lim_{n \mathop \to \infty} \sequence {x_n} } = x$

We have:














\(\ds \map \ln {\paren {1 + \frac x n}^n}\)

\(=\)







\(\ds n \, \map \ln {1 + x n^{-1} }\)





Logarithms of Powers














\(\ds \)

\(=\)







\(\ds x \frac {\map \ln {1 + x n^{-1} } } {x n^{-1} }\)





multiplying by $1 = \dfrac {x n^{-1} } {x n^{-1} }$



From Limit of Sequence is Limit of Real Function, we can consider the differentiable analogue of the sequence.
From Derivative of Logarithm at One we have:

$\ds \lim_{x \mathop \to 0} \frac {\map \ln {1 + x} } x = 1$

But $x n^{-1} \to 0$ as $n \to \infty$ from Sequence of Powers of Reciprocals is Null Sequence.
Thus:

$\ds x \frac {\map \ln {1 + x n^{-1} } } {x n^{-1} } \to x$
as $n \to \infty$.

From Exponential Function is Continuous:

$\paren {1 + \dfrac x n}^n = \exp \paren {n \map \ln {1 + \dfrac x n} } \to \exp x = e^x$
as $n \to \infty$.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 14.7 \ (3)$




