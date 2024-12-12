# 

Source: https://proofwiki.org/wiki/Derivative_of_Real_Area_Hyperbolic_Sine_of_x_over_a/Corollary_1

Theorem
$\map {\dfrac \d {\d x} } {\ln \size {x + \sqrt {x^2 + a^2} } } = \dfrac 1 {\sqrt {x^2 + a^2} }$


Proof













\(\ds \map \arsinh {\frac x a}\)

\(=\)







\(\ds \map \ln {\frac x a + \sqrt {\paren {\frac x a}^2 + a^2} }\)





Definition of Real Area Hyperbolic Sine














\(\ds \)

\(=\)







\(\ds \map \ln {\frac x a + \dfrac 1 a \sqrt {x^2 + a^2} }\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac 1 a \paren {x + \sqrt {x^2 + a^2} } }\)




















\(\ds \)

\(=\)







\(\ds \map \ln {x + \sqrt {x^2 + a^2} } - \ln a\)





Difference of Logarithms








\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac \d {\d x} } {\map \ln {x + \sqrt {x^2 + a^2} } }\)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {\map \arsinh {\frac x a} + \ln a }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {x^2 + a^2} } + \map {\dfrac \d {\d x} } {\ln a}\)





Derivative of Real Area Hyperbolic Sine of x over a














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {x^2 + a^2} } + 0\)





Derivative of Constant




We have that $\sqrt {x^2 + a^2} > x$ for all $x$.
Thus:














\(\ds x + \sqrt {x^2 + a^2}\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \size {x + \sqrt {x^2 + a^2} }\)

\(=\)







\(\ds x + \sqrt {x^2 + a^2}\)





Definition of Absolute Value








\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac \d {\d x} } {\size {x + \sqrt {x^2 + a^2} } }\)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {\map \ln {x + \sqrt {x^2 + a^2} } }\)









and the result follows.
$\blacksquare$


Sources
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text {II}$: Integration of Elementary Functions: $\S 7$. Standard Integrals: $14$.




