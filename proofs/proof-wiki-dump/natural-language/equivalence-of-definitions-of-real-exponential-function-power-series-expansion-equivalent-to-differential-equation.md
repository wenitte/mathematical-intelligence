# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Real_Exponential_Function/Power_Series_Expansion_equivalent_to_Differential_Equation



Theorem
The following definitions of the concept of real exponential function are equivalent:

As a Power Series Expansion
The exponential function can be defined as a power series:

$\exp x := \ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}$
As the Solution of a Differential Equation
The exponential function can be defined as the unique solution $y = \map f x$ to the first order ODE:

$\dfrac {\d y} {\d x} = y$
satisfying the initial condition $\map f 0 = 1$.


Proof
Power Series Expansion implies Solution of Differential Equation
Let $\exp x$ be the real function defined as the sum of the power series:

$\exp x := \ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}$

Let $y = \ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}$.

Then:














\(\ds \dfrac {\d y} {\d x}\)

\(=\)







\(\ds \dfrac \d {\d x} \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {\frac {x^0} {0!} + \sum_{n \mathop = 1}^\infty \frac {x^n} {n!} }\)





extracting the zeroth term














\(\ds \)

\(=\)







\(\ds 0 + \sum_{n \mathop = 1}^\infty \frac {n x^{n - 1} } {n!}\)





Power Rule for Derivatives and Derivative of Constant














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {x^{n - 1} } {\paren {n - 1}!}\)





simplifying














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds y\)










Setting $x = 0$ we find:














\(\ds \map y 0\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {0^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds \frac {0^0} {0!} + \sum_{n \mathop = 1}^\infty \frac {0^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds \frac {0^0} {0!}\)





as $0^n = 0$ for all $n > 0$














\(\ds \)

\(=\)







\(\ds 1\)





Definition of $0^0$



$\blacksquare$


This article needs to be linked to other articles.In particular: uniform convergenceYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
That is:
$\exp x$ is the particular solution of the differential equation:

$\dfrac {\d y} {\d x} = y$
satisfying the initial condition $\map f 0 = 1$.
$\Box$


Solution of Differential Equation implies Power Series Expansion
Let $\exp x$ be the real function defined as the particular solution of the differential equation:

$\dfrac {\d y} {\d x} = y$
satisfying the initial condition $\map f 0 = 1$.

We have Taylor Series Expansion for Exponential Function:

From Higher Derivatives of Exponential Function, we have:

$\forall n \in \N: \map {f^{\paren n} } {\exp x} = \exp x$

Since $\exp 0 = 1$, the Taylor series expansion for $\exp x$ about $0$ is given by:

$\ds \exp x = \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}$

From Radius of Convergence of Power Series over Factorial, we know that this power series expansion converges for all $x \in \R$.
From Taylor's Theorem, we know that

$\ds \exp x = 1 + \frac x {1!} + \frac {x^2} {2!} + \cdots + \frac {x^{n - 1} } {\paren {n - 1}!} + \frac {x^n} {n!} \map \exp \eta$
where $0 \le \eta \le x$.
Hence:














\(\ds \size {\exp x - \paren {1 + \frac x {1!} + \frac {x^2} {2!} + \cdots + \frac {x^{n - 1} } {\paren {n - 1}!} } }\)

\(=\)







\(\ds \size {\frac {x^n} {n!} \map \exp \eta}\)




















\(\ds \)

\(\le\)







\(\ds \frac {\size {x^n} } {n!} \map \exp {\size x}\)





Exponential is Strictly Increasing














\(\ds \)

\(\to\)







\(\ds 0\)

\(\ds \text { as } n \to \infty\)



Series of Power over Factorial Converges




So the partial sums of the power series converge to $\exp x$.
The result follows.
$\blacksquare$





