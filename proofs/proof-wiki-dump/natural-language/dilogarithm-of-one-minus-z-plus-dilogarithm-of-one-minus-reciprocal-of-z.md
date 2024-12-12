# 

Source: https://proofwiki.org/wiki/Dilogarithm_of_One_Minus_Z_Plus_Dilogarithm_of_One_Minus_Reciprocal_of_Z

Theorem
$\map {\Li_2} {1 - z} + \map {\Li_2} {1 - \dfrac 1 z} = -\dfrac 1 2 \map {\ln^2} z$
where:

$\map {\Li_2} z$ is the Dilogarithm function of $z$
$z \in \C$ and $z < 1$.


Proof
From the definition of the dilogarithm function:

$\ds \map {\Li_2} z = -\int_0^z \dfrac {\map \ln {1 - x} } x \rd x$
Taking the derivative of both sides at $-\dfrac z {1 - z}$














\(\ds \frac {\d } {\d z} \map {\Li_2} {-\dfrac z {1 - z} }\)

\(=\)







\(\ds -\paren {\dfrac {\map \ln {1 - \paren {-\dfrac z {1 - z} } } } {\paren {-\dfrac z {1 - z} } } \paren {-\dfrac 1 {\paren {1 - z}^2} } }\)





$x \to -\dfrac z {1 - z}$ and $\rd x \to -\dfrac 1 {\paren {1 - z}^2}$














\(\ds \)

\(=\)







\(\ds \dfrac {-\map \ln {\dfrac {1 - z} {1 -z} + \dfrac z {1 -z} } } {z \paren {1 - z} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {-\map \ln {\dfrac 1 {1 -z} } } {z \paren {1 - z} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {-\paren {\map \ln 1 - \map \ln {1 - z} } } {z \paren {1 - z} }\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds \dfrac {-\map \ln 1 } {z \paren {1 - z} } + \dfrac {\map \ln {1 - z} } {z \paren {1 - z} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map \ln {1 - z} } {z \paren {1 - z} }\)





Natural Logarithm of 1 is 0














\(\ds \)

\(=\)







\(\ds \dfrac {\map \ln {1 - z} } {\paren {1 - z} } + \dfrac {\map \ln {1 - z} } z\)










Now integrating both sides with respect to $z$, we obtain:














\(\ds \int_0^z \frac \d {\d z} \map {\Li_2} {-\dfrac z {1 - z} }\)

\(=\)







\(\ds \int_0^z \paren {\dfrac {\map \ln {1 - z} } {\paren {1 - z} } + \dfrac {\map \ln {1 - z} } z} \rd z\)














\(\ds \leadsto \ \ \)





\(\ds \map {\Li_2} {-\dfrac z {1 - z} }\)

\(=\)







\(\ds \int_0^z \dfrac {\map \ln {1 - z} } {\paren {1 - z} } \rd z + \int_0^z \dfrac {\map \ln {1 - z} } z \rd z\)





Fundamental Theorem of Calculus and Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \int_0^z \dfrac {\map \ln {1 - z} } {\paren {1 - z} } \rd z - \map {\Li_2} z\)





Definition of Dilogarithm Function








\(\ds \leadsto \ \ \)





\(\ds \map {\Li_2} z + \map {\Li_2} {-\dfrac z {1 - z} }\)

\(=\)







\(\ds \int_0^z \dfrac {\map \ln {1 - z} } {\paren {1 - z} } \rd z\)




















\(\ds \)

\(=\)







\(\ds \int_1^{1 - z} \dfrac {\map \ln u } u \paren {-\rd u}\)





$\paren {1 - z} \to u$ and $\rd z \to -\rd u$ U-Substitution














\(\ds \)

\(=\)







\(\ds -\frac 1 2 \map {\ln^2} {1 - z} + C\)





Primitive of Logarithm of x over x



We now solve for $C$ by setting $z = 0$














\(\ds \map {\Li_2} 0 + \map {\Li_2} 0\)

\(=\)







\(\ds -\frac 1 2 \ln^2 1 + C\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds 0 + C\)





Dilogarithm of Zero and Natural Logarithm of 1 is 0








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds C\)









Therefore:














\(\ds \map {\Li_2} z + \map {\Li_2} {-\dfrac z {1 - z} }\)

\(=\)







\(\ds -\frac 1 2 \map {\ln^2} {1 - z}\)














\(\ds \leadsto \ \ \)





\(\ds \map {\Li_2} {1 - z} + \map {\Li_2} {1 - \dfrac 1 z}\)

\(=\)







\(\ds -\frac 1 2 \map {\ln^2} z\)





$z \to \paren {1 - z}$



$\blacksquare$


Sources
1981: Leonard Lewin: Polylogarithms and Associated Functions: Chapter $\text {1}$. Dilogarithm




