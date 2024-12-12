# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Euler%27s_Number/Proof_1



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


Proof
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





