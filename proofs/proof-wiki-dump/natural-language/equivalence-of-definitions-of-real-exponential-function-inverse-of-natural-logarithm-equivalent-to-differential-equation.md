# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Real_Exponential_Function/Inverse_of_Natural_Logarithm_equivalent_to_Differential_Equation



Theorem
The following definitions of the concept of real exponential function are equivalent:

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





