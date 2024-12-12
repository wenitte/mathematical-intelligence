# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Real_Exponential_Function



Theorem
The following definitions of the concept of Real Exponential Function are equivalent:

As a Power Series Expansion
The exponential function can be defined as a power series:

$\exp x := \ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}$
As a Limit of a Sequence
The exponential function can be defined as the following limit of a sequence:

$\exp x := \ds \lim_{n \mathop \to +\infty} \paren {1 + \frac x n}^n$
As an Extension of the Rational Exponential
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
Inverse of Natural Logarithm implies Limit of Sequence
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


Limit of Sequence implies Power Series Expansion
Let $\exp x$ be the real function defined as the limit of the sequence:

$\exp x := \ds \lim_{n \mathop \to \infty} \paren {1 + \frac x n}^n$
From the General Binomial Theorem:














\(\ds \paren {1 + \frac x n}^n\)

\(=\)







\(\ds 1 + x + \frac {n \paren {n - 1} x^2} {2! \ n^2} + \frac {n \paren {n - 1} \paren {n - 2} x^3} {3! \ n^3} + \cdots\)




















\(\ds \)

\(=\)







\(\ds \frac {x^0} {0!} + \frac {x^1} {1!} + \paren {\frac {n - 1} n} \frac {x^2} {2!} + \paren {\frac {\paren {n - 1} \paren {n - 2} } {n^2} } \frac {x^3} {3!} + \cdots\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds \paren {1 + \frac x n}^n - \paren {\frac {x^0} {0!} + \frac {x^1} {1!} + \paren {\frac {n - 1} n} \frac {x^2} {2!} + \paren {\frac {\paren {n - 1} \paren {n - 2} } {n^2} } \frac {x^3} {3!} + \cdots}\)









From Power over Factorial, this converges to:

$\exp x - \paren {\dfrac {x^0} {0!} + \dfrac {x^1} {1!} + \dfrac {x^2} {2!} + \dfrac {x^3} {3!} + \cdots} = 0$
as $n \to +\infty$.








\(\ds \leadsto \ \ \)





\(\ds \exp x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}\)









$\blacksquare$


Limit of Sequence implies Extension of Rational Exponential
Let the restriction of the exponential function to the rationals be defined as:

$\ds \exp \restriction_\Q: x \mapsto \lim_{n \mathop \to +\infty} \paren {1 + \frac x n}^n$

Thus, let $e$ be Euler's Number defined as:

$e = \ds \lim_{n \mathop \to +\infty} \paren {1 + \frac 1 n}^n$

For $x = 0$:














\(\ds \exp \restriction_\Q \paren 0\)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {1 + \frac 0 n}^n\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds e^0\)









For $x \ne 0$:














\(\ds \map {\exp \restriction_\Q} x\)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {1 + \frac x n}^n\)




















\(\ds \)

\(=\)







\(\ds \lim_{\paren {n / x} \mathop \to +\infty} \paren {\paren {1 + \frac 1 {\paren {n / x} } }^{\paren {n / x} } }^x\)





Exponent Combination Laws














\(\ds \)

\(=\)







\(\ds e^x\)









where the continuity in the last step follows a fortiori from Power Function to Rational Power permits Unique Continuous Extension.

For $x \in \R \setminus \Q$, we invoke Power Function to Rational Power permits Unique Continuous Extension.
$\blacksquare$


Extension of Rational Exponential implies Solution of Differential Equation
Let $\exp x$ be the real function defined as the extension of rational exponential.

Then we have:














\(\ds \map {D_x} {\exp x}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \exp {x + h} - \exp x} h\)





Definition of Derivative














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\exp x \cdot \exp h - \exp x} h\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\exp x \paren {\exp h - 1} } h\)




















\(\ds \)

\(=\)







\(\ds \exp x \paren {\lim_{h \mathop \to 0} \frac {\exp h - 1} h}\)





Multiple Rule for Limits of Real Functions, as $\exp x$ is constant














\(\ds \)

\(=\)







\(\ds \exp x\)





Derivative of Exponential at Zero: Proof 2




The application of Derivative of Exponential at Zero is not circular as the referenced proof does not depend on $D_x \exp x = \exp x$.
$\Box$















\(\ds \exp 0\)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {1 + \frac 0 n}^n\)




















\(\ds \)

\(=\)







\(\ds 1\)









$\blacksquare$


Power Series Expansion equivalent to Solution of Differential Equation
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


Inverse of Natural Logarithm equivalent to Solution of Differential Equation
Inverse of Natural Logarithm implies Solution of Differential Equation
Let $\exp x$ be the real function defined as the inverse of the natural logarithm:

$y = \exp x \iff x = \ln y$

Then:














\(\ds x\)

\(=\)







\(\ds \ln y\)




















\(\ds \)

\(=\)







\(\ds \int_{t \mathop = 1}^{t \mathop = y} \frac 1 t \rd t\)





Definition 1 of Natural Logarithm








\(\ds \leadsto \ \ \)





\(\ds \map {D_y} x\)

\(=\)







\(\ds D_y \int_{t \mathop = 1}^{t \mathop = y} \frac 1 t \rd t\)





Differentiation with respect to $y$














\(\ds \frac {\d x} {\d y}\)

\(=\)







\(\ds \frac 1 y\)





Fundamental Theorem of Calculus








\(\ds \leadstoandfrom \ \ \)





\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds y\)





Derivative of Inverse Function



This proves that $y$ is a solution of the differential equation.

It remains to be proven that $y$ fulfills the initial condition: 














\(\ds \map f 0\)

\(=\)







\(\ds 1\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map {f^{-1} } 1\)

\(=\)







\(\ds 0\)





Image of Element under Inverse Mapping














\(\ds \bigintlimits {\ln y} {y \mathop = 1} {}\)

\(=\)







\(\ds \int_{t \mathop = 1}^{t \mathop = 1} \frac 1 t \rd t\)




















\(\ds \)

\(=\)







\(\ds 0\)





Integral on Zero Interval



That is:
$\exp x$ is the particular solution of the differential equation:

$\dfrac {\d y} {\d x} = y$
satisfying the initial condition $\map f 0 = 1$.
$\Box$


Solution of Differential Equation implies Inverse of Natural Logarithm
Let $\exp x$ be the real function defined as the particular solution of the differential equation:

$\dfrac {\d y} {\d x} = y$
satisfying the initial condition $\map f  = 1$.

Thus:














\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d y}\)

\(=\)







\(\ds \frac 1 y\)





Derivative of Inverse Function








\(\ds \leadsto \ \ \)





\(\ds \int \rd x\)

\(=\)







\(\ds \int \frac 1 y \rd y\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds x + C\)

\(=\)







\(\ds \int_{t \mathop = 1}^{t \mathop = y} \frac 1 t \rd t\)





Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds \ln y\)





Definition 1 of Natural Logarithm




To solve for $C$, put $\tuple {x_0, y_0} = \tuple {0, 1}$:














\(\ds 0 + C\)

\(=\)







\(\ds \int_{t \mathop = 1}^{t \mathop = 1}\frac 1 t \rd t\)














\(\ds \leadsto \ \ \)





\(\ds C\)

\(=\)







\(\ds 0\)





Integral on Zero Interval




That is:

$y = \exp x \iff x = \ln y$
$\blacksquare$


Also see
Equivalence of Definitions of Complex Exponential Function
Equivalence of Definitions of Euler's Number
Equivalence of Definitions of Real Natural Logarithm




