# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Euler%27s_Number


This page has been identified as a candidate for refactoring of medium complexity.In particular: We do not want Proof 1 and Proof 2 here. Instead, each of the subproofs is to be made modules of the one overall proof and multiplicated accordingly.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
The following definitions of the concept of Euler's Number are equivalent:

Limit of Series
The series $\ds \sum_{n \mathop = 0}^\infty \frac 1 {n!}$ converges to a limit.
This limit is Euler's number $e$.


Limit of Sequence
The sequence $\sequence {x_n}$ defined as $x_n = \paren {1 + \dfrac 1 n}^n$ converges to a limit as $n$ increases without bound.
That limit is called Euler's number and is denoted $e$.


Base of Logarithm
Euler's number $e$ can be defined as the number satisfied by:

$\ln e = 1$
where $\ln e$ denotes the natural logarithm of $e$.
That $e$ is unique follows from Logarithm is Strictly Increasing.


Exponential Function
Euler's number $e$ can be defined as the number satisfied by:

$e := \exp 1 = e^1$
where $\exp 1$ denotes the exponential function of $1$.


Proof 1
See Equivalence of Definitions of Real Exponential Function: Inverse of Natural Logarithm implies Limit of Sequence for how $\ds \lim_{n \mathop \to \infty} \paren {1 + \frac 1 n}^n = e$ follows from the definition of $e$ as the number satisfied by $\ln e = 1$.
See Euler's Number: Limit of Sequence implies Limit of Series for how $\ds e = \sum_{n \mathop = 0}^\infty \frac 1 {n!}$ follows from $\ds \lim_{n \mathop \to \infty} \paren {1 + \frac 1 n}^n = e$.
Now suppose $e$ is defined as $\ds e = \sum_{n \mathop = 0}^\infty \frac 1 {n!}$.
Let us consider the series $\ds \map f x = \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}$.
From Series of Power over Factorial Converges, this is convergent for all $x$.
We differentiate $\map f x$ with respect to $x$ term by term (justified by Power Series is Differentiable on Interval of Convergence), and get:














\(\ds \map {D_x} {\map f x}\)

\(=\)







\(\ds \map {D_x} 1 + \map {D_x} {\frac x {1!} } + \map {D_x} {\frac {x^2} {2!} } + \map {D_x} {\frac {x^3} {3!} } + \cdots + \map {D_x} {\frac {x^n} {n!} } + \map {D_x} {\frac {x^{n + 1} } {\paren {n + 1}!} } + \cdots\)




















\(\ds \)

\(=\)







\(\ds 0 + 1 + \frac {2 x} {2!} + \frac {3 x^2} {3!} + \cdots + \frac {n x^{n - 1} } {n!} + \frac {\paren {n + 1} x^n} {\paren {n + 1}!} + \cdots\)




















\(\ds \)

\(=\)







\(\ds 1 + \frac x {1!} + \frac {x^2} {2!} + \cdots + \frac {x^{n - 1} } {\paren {n - 1}!} + \frac {x^n} {n!} \cdots\)




















\(\ds \)

\(=\)







\(\ds \map f x\)









Thus we have:

$\map {D_x} {\map f x} = \map f x$
From Derivative of Exponential Function:

$\map f x = e^x$
From Derivative of Inverse Function:

$\map {D_x} {\map {f^{-1} } x} = \dfrac 1 {\map {f^{-1} } x}$
Hence from Derivative of Natural Logarithm Function:

$\map {f^{-1} } x = \ln x$
It follows that $e$ can be defined as that number such that $\ln e = 1$.
Hence all the definitions of $e$ as given here are equivalent.
$\blacksquare$


Proof 2
1 implies 2
This is proved in Euler's Number: Limit of Sequence implies Limit of Series.
$\Box$


2 implies 3
This is proved in Euler's Number: Limit of Sequence implies Base of Logarithm.
$\Box$


3 implies 4
Let $e$ be the unique solution to the equation $\ln x = 1$.
We want to show that $\exp 1 = e$, where $\exp$ is the exponential function.














\(\ds \exp 1 = 0\)

\(\leadstoandfrom\)







\(\ds \map \ln {\exp 1} = \ln e\)





Logarithm is Strictly Increasing and Strictly Concave: Corollary














\(\ds \)

\(\leadstoandfrom\)







\(\ds 1 = \ln e\)





Exponential is Inverse of Logarithm and Inverse of Inverse



where the final equation holds by hypothesis.
Hence the result.
$\Box$


4 implies 1
Let $e = \exp 1$, where $\exp$ denotes the exponential function.
We want to show that:

$\ds \sum_{n \mathop = 0}^\infty \frac 1 {n!} = e$
By definition of $\exp$:

$\ds \sum_{n \mathop = 0}^\infty \frac 1 {n!} = \exp 1$
We also have that $\exp 1 = e$ by hypothesis.
Hence the result.
$\blacksquare$


Also see
Equivalence of Definitions of Exponential Function




