# 

Source: https://proofwiki.org/wiki/Derivative_of_Natural_Logarithm_Function/Proof_3

Theorem
Let $\ln x$ be the natural logarithm function.
Then:

$\map {\dfrac \d {\d x} } {\ln x} = \dfrac 1 x$


Proof
This proof assumes the definition of the natural logarithm as the inverse of the exponential function as defined by differential equation:

$y = \dfrac {\d y} {\d x}$
$y = e^x \iff \ln y = x$













\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds y\)





Definition of Exponential Function














\(\ds \int \frac 1 y \rd y\)

\(=\)







\(\ds \int \rd x\)





Solution to Separable Differential Equation














\(\ds \)

\(=\)







\(\ds x + C_0\)





Integral of Constant where that constant is $1$














\(\ds \)

\(=\)







\(\ds \ln y + C_0\)





Definition 2 of Natural Logarithm: $x = \ln y$



The result follows from the definition of the antiderivative and the defined  initial condition:

$\tuple {x_0, y_0} = \tuple {0, 1}$
$\blacksquare$





