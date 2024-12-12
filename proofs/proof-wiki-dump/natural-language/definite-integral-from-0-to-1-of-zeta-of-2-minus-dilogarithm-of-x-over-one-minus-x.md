# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_1_of_Zeta_of_2_minus_Dilogarithm_of_x_over_One_minus_x

Theorem
$\ds \int_{\to 0}^{\to 1} \dfrac {\paren {\map \zeta 2 - \map {\Li_2} x } } {1 - x} \rd x = 2 \map \zeta 3$
where:

$\map {\Li_2} x$ is the Dilogarithm function of $x$
$\map \zeta 2$ is the Riemann $\zeta$ function of $2$
$\map \zeta 3$ is Apéry's constant: the Riemann $\zeta$ function of $3$.


Proof
With a view to expressing the primitive in the form:














\(\ds \int u \frac {\d v} {\d x} \rd x\)

\(=\)







\(\ds u v - \int v \frac {\d u} {\d x} \rd x\)





Integration by Parts




let:














\(\ds u\)

\(=\)







\(\ds \map \zeta 2 - \map {\Li_2} x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {\map \ln {1 - x} } x\)





Definition of Spence's Function: $\ds \map {\Li_2} z = -\int_0^z \frac {\map \Ln {1 - t} } t \rd t$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \frac 1 {\paren {1 - x} }\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds -\paren {\map \ln {1 - x} }\)





Primitive of $\dfrac 1 {a x + b}$




Then:














\(\ds \int_{\to 0}^{\to 1} \dfrac {\paren {\map \zeta 2 - \map {\Li_2} x } } {1 - x} \rd x\)

\(=\)







\(\ds \bigintlimits {\paren {\map \zeta 2 - \map {\Li_2} x} \paren {-\paren {\map \ln {1 - x} } } } 0 1 + \int_0^1 \frac {\paren {\map \ln {1 - x} }^2} x \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds 0 + \int_0^1 \frac {\paren {\map \ln {1 - x} }^2} x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_1^0 \frac {\paren {\map \ln u}^2} {1 - u} \paren {-\d u}\)





$x \to \paren {1 - u}$ and $\rd x \to -\rd u$














\(\ds \)

\(=\)







\(\ds \int_0^1 \frac {\paren {-\map \ln u} \paren {-\map \ln u} } {1 - u} \rd u\)





reversing limits of integration














\(\ds \)

\(=\)







\(\ds \int_0^1 \frac {\paren {\map \ln {\dfrac 1 u} }^{3 - 1} } {1 - u} \rd u\)





Logarithm of Reciprocal














\(\ds \)

\(=\)







\(\ds \map \zeta 3 \map \Gamma 3\)





Integral Representation of Riemann Zeta Function in terms of Gamma Function: $\ds \map \zeta s \map \Gamma s = \int_0^1 \frac {\paren {\map \ln {\frac 1 u} }^{s - 1} } {1 - u} \rd u$














\(\ds \)

\(=\)







\(\ds 2 \map \zeta 3\)





Gamma Function of $3$



$\blacksquare$





