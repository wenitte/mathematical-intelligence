# 

Source: https://proofwiki.org/wiki/Definite_Integral_over_Unit_Square_of_Logarithm_of_x_minus_Logarithm_of_y_over_x_minus_y

Theorem
$\ds \int_0^1 \int_0^1 \frac {\ln x - \ln y} {x - y} \rd x \rd y = 2 \map \zeta 2$


Proof













\(\ds \int_0^1 \int_0^1 \dfrac {\ln x - \ln y} {x - y} \rd x \rd y\)

\(=\)







\(\ds \int_0^1 \int_0^1 \dfrac {\map \ln {\dfrac x y} } {x - y} \rd x \rd y\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds 2 \int_0^1 \int_0^x \dfrac {\map \ln {\dfrac x y} } {x - y} \rd x \rd y\)





symmetry about the line $y = x$














\(\ds \)

\(=\)







\(\ds 2 \int_0^1 \int_0^1 \dfrac {\map \ln {\dfrac x {x t} } } {x - x t} \rd x \paren {x \rd t}\)





$y \to x t$ and $\rd y \to x \rd t$














\(\ds \)

\(=\)







\(\ds 2 \int_0^1 \int_0^1 \dfrac {\map \ln {\dfrac 1 t } } {\paren {1 - t} } \rd x \rd t\)





canceling the $x$














\(\ds \)

\(=\)







\(\ds 2 \int_0^1 \dfrac {\map \ln {\dfrac 1 t } } {\paren {1 - t} } \rd t \bigintlimits x 0 1\)




















\(\ds \)

\(=\)







\(\ds -2 \int_0^1 \dfrac {\map \ln t } {\paren {1 - t} } \rd t\)





Logarithm of Reciprocal














\(\ds \)

\(=\)







\(\ds -2 \int_1^0 \dfrac {\map \ln {1 - x} } x \paren {-\rd x}\)





$\paren {1 - t} \to x$ and $-\rd t \to \rd x$














\(\ds \)

\(=\)







\(\ds -2 \int_0^1 \dfrac {\map \ln {1 - x} } x \rd x\)





reversing limits of integration














\(\ds \)

\(=\)







\(\ds 2 \map {\Li_2} 1\)





Definition of Spence's Function














\(\ds \)

\(=\)







\(\ds 2 \sum_{n \mathop = 1}^\infty \frac {1^n} {n^2}\)





Power Series Expansion for Spence's Function














\(\ds \)

\(=\)







\(\ds 2 \map \zeta 2\)





Definition of Riemann Zeta Function



$\blacksquare$


Sources
https://www.instagram.com/p/C0BtTejRdDW/




