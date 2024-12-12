# 

Source: https://proofwiki.org/wiki/Dilogarithm_of_Minus_Z_Plus_Dilogarithm_of_Minus_Reciprocal_of_Z

Theorem
$\map {\Li_2} {-z} + \map {\Li_2} {-\dfrac 1 z} = -\map \zeta 2 - \dfrac 1 2 \map {\ln^2} z$
where:

$\map {\Li_2} z$ is the dilogarithm function of $z$
$\map \zeta 2$ is the Riemann $\zeta$ function of $2$.


Proof
From the definition of the dilogarithm function:

$\ds \map {\Li_2} z = -\int_0^z \dfrac {\map \ln {1 - x} } x \rd x$
Taking the derivative of both sides at $-\dfrac 1 z$














\(\ds \frac \d {\d z} \map {\Li_2} {-\dfrac 1 z}\)

\(=\)







\(\ds -\paren {\dfrac {\map \ln {1 - \paren {-\dfrac 1 z} } } {\paren {-\dfrac 1 z} } \paren {\dfrac 1 {z^2} } }\)





$x \to -\dfrac 1 z$ and $\rd x \to \dfrac 1 {z^2}$ Derivative of Reciprocal














\(\ds \)

\(=\)







\(\ds \dfrac {\map \ln {1 + \dfrac 1 z} } z\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map \ln {\dfrac {z + 1} z} } z\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map \ln {z + 1} - \map \ln z} z\)





Difference of Logarithms




Now integrating both sides with respect to $z$, we obtain:














\(\ds \int_0^z \frac \d {\d z} \map {\Li_2} {-\dfrac 1 z}\)

\(=\)







\(\ds \int_0^z \dfrac {\map \ln {z + 1} - \map \ln z} z \rd z\)














\(\ds \leadsto \ \ \)





\(\ds \map {\Li_2} {-\dfrac 1 z}\)

\(=\)







\(\ds \int_0^z \dfrac {\map \ln {z + 1} } z \rd z - \int_0^z \dfrac {\map \ln z} z \rd z\)





Fundamental Theorem of Calculus and Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \int_0^z \dfrac {\map \ln {1 - \paren {-z} } } z \rd z - \int_0^z \dfrac {\map \ln z} z \rd z\)




















\(\ds \)

\(=\)







\(\ds -\map {\Li_2} {-z} - \int_0^z \dfrac {\map \ln z} z \rd z\)





Definition of Dilogarithm Function








\(\ds \leadsto \ \ \)





\(\ds \map {\Li_2} {-z} + \map {\Li_2} {-\dfrac 1 z}\)

\(=\)







\(\ds -\int_0^z \dfrac {\map \ln z } z \rd z\)




















\(\ds \)

\(=\)







\(\ds -\paren {\frac {\ln^2 z} 2 + C }\)





Primitive of Logarithm of x over x



We now solve for $C$ by setting $z = 1$














\(\ds \map {\Li_2} {-1} + \map {\Li_2} {-1}\)

\(=\)







\(\ds -\paren {\frac {\ln^2 1} 2 + C }\)














\(\ds \leadsto \ \ \)





\(\ds -\dfrac 1 2 \map \zeta 2 + -\dfrac 1 2 \map \zeta 2\)

\(=\)







\(\ds -\paren {0 + C}\)





Dilogarithm of Minus One and Natural Logarithm of 1 is 0








\(\ds \leadsto \ \ \)





\(\ds -\map \zeta 2\)

\(=\)







\(\ds -C\)









Therefore:

$\map {\Li_2} {-z} + \map {\Li_2} {-\dfrac 1 z} = -\map \zeta 2 - \dfrac 1 2 \map {\ln^2} z$
$\blacksquare$


Sources
1981: Leonard Lewin: Polylogarithms and Associated Functions: Chapter $\text {1}$. Dilogarithm




