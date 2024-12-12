# 

Source: https://proofwiki.org/wiki/Derivative_of_Real_Area_Hyperbolic_Sine_of_x_over_a/Corollary_2

Theorem
$\map {\dfrac \d {\d x} } {\ln \size {x - \sqrt {x^2 + a^2} } } = -\dfrac 1 {\sqrt {x^2 + a^2} }$


Proof













\(\ds -\map \arsinh {\frac x a}\)

\(=\)







\(\ds \map \arsinh {-\frac x a}\)





Inverse Hyperbolic Sine is Odd Function














\(\ds \)

\(=\)







\(\ds \map \ln {-\paren {\frac x a} + \sqrt {\paren {-\frac x a}^2 + a^2} }\)





Definition of Real Area Hyperbolic Sine














\(\ds \)

\(=\)







\(\ds \map \ln {-\frac x a + \dfrac 1 a \sqrt {x^2 + a^2} }\)




















\(\ds \)

\(=\)







\(\ds \map \ln {-\dfrac 1 a \paren {x - \sqrt {x^2 + a^2} } }\)




















\(\ds \)

\(=\)







\(\ds \map \ln {-x + \sqrt {x^2 + a^2} } - \ln a\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds \ln \size {x - \sqrt {x^2 + a^2} } - \ln a\)





as $\sqrt {x^2 + a^2} > -x$








\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac \d {\d x} } {\ln \size {x - \sqrt {x^2 + a^2} } }\)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {-\map \arsinh {\frac x a} + \ln a}\)





Sum of Logarithms














\(\ds \)

\(=\)







\(\ds -\dfrac 1 {\sqrt {x^2 + a^2} } + \map {\dfrac \d {\d x} } {\ln a}\)





Derivative of Real Area Hyperbolic Sine of x over a














\(\ds \)

\(=\)







\(\ds -\dfrac 1 {\sqrt {x^2 + a^2} } + 0\)





Derivative of Constant



$\blacksquare$


Sources
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text {II}$: Integration of Elementary Functions: $\S 7$. Standard Integrals: $14$.




