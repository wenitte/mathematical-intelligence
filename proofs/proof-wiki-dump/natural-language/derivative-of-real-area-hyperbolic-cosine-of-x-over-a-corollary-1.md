# 

Source: https://proofwiki.org/wiki/Derivative_of_Real_Area_Hyperbolic_Cosine_of_x_over_a/Corollary_1

Theorem
$\map {\dfrac \d {\d x} } {\map \ln {x + \sqrt {x^2 - a^2} } } = \dfrac 1 {\sqrt {x^2 - a^2} }$
for $x > a$.


Proof













\(\ds \map \arcosh {\frac x a}\)

\(=\)







\(\ds \map \ln {\frac x a + \sqrt {\paren {\frac x a}^2 - a^2} }\)





Definition of Real Area Hyperbolic Cosine














\(\ds \)

\(=\)







\(\ds \map \ln {\frac x a + \dfrac 1 a \sqrt {x^2 - a^2} }\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac 1 a \paren {x + \sqrt {x^2 - a^2} } }\)




















\(\ds \)

\(=\)







\(\ds \map \ln {x + \sqrt {x^2 - a^2} } - \ln a\)





Difference of Logarithms








\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac \d {\d x} } {\map \ln {x + \sqrt {x^2 - a^2} } }\)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {\map \arcosh {\frac x a} - \ln a }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {x^2 - a^2} } + \map {\dfrac \d {\d x} } {\ln a}\)





Derivative of Real Area Hyperbolic Cosine of x over a














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {x^2 - a^2} } + 0\)





Derivative of Constant




When $x = a$ we have that $\sqrt {x^2 - a^2} = 0$ and then $\dfrac 1 {\sqrt {x^2 - a^2} }$ is not defined.
When $\size x < a$ we have that $x^2 - a^2 < 0$ and then $\sqrt {x^2 - a^2}$ is not defined.
When $x < -a$ we have that $x + \sqrt {x^2 - a^2} < 0$ and so $\map \ln {x + \sqrt {x^2 - a^2} }$ is not defined.
Hence the restriction on the domain.
$\blacksquare$


Sources
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text {II}$: Integration of Elementary Functions: $\S 7$. Standard Integrals: $15$.




