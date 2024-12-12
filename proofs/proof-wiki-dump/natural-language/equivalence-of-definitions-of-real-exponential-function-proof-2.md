# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Real_Exponential_Function/Proof_2



Theorem
The following definitions of the exponential function are equivalent.

As a Power Series Expansion
The exponential function can be defined as a power series:

$\exp x := \ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}$
As a Limit of a Sequence
The exponential function can be defined as the following limit of a sequence:

$\exp x := \ds \lim_{n \mathop \to +\infty} \paren {1 + \frac x n}^n$
As an Extension of a Rational Exponential
Let $e$ denote Euler's number.
Let $f: \Q \to \R$ denote the real-valued function defined as:

$\map f x = e^x$
That is, let $\map f x$ denote $e$ to the power of $x$, for rational $x$.

Then $\exp : \R \to \R$ is defined to be the unique continuous extension of $f$ to $\R$.
$\map \exp x$ is called the exponential of $x$.

As the Inverse of the Natural Logarithm
Consider the natural logarithm $\ln x$, which is defined on the open interval $\openint 0 {+\infty}$.
From Logarithm is Strictly Increasing:

$\ln x$ is strictly increasing.
From Inverse of Strictly Monotone Function:

the inverse of $\ln x$ always exists.

The inverse of the natural logarithm function is called the exponential function, which is denoted as $\exp$.
Thus for $x \in \R$, we have:

$y = \exp x \iff x = \ln y$
As the Solution of a Differential Equation
The exponential function can be defined as the unique solution $y = \map f x$ to the first order ODE:

$\dfrac {\d y} {\d x} = y$
satisfying the initial condition $\map f 0 = 1$.


Proof
From Derivative of Exponential Function and Exponential of Zero, each definition of $\exp$ satisfies the following:

$(1): \quad D_x \exp = \exp$
$(2): \quad \map \exp 0 = 1$
on $\R$.
From Exponential Function is Well-Defined, such a solution is unique.

Thus they all are all equivalent.
$\blacksquare$





