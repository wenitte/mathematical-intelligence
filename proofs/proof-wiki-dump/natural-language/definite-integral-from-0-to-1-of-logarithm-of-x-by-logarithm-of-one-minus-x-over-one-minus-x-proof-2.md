# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_1_of_Logarithm_of_x_by_Logarithm_of_One_minus_x_over_One_minus_x/Proof_2

Theorem
$\ds \int_0^1 \dfrac {\ln x \map \ln {1 - x} } {\paren {1 - x} } \rd x = \map \zeta 3$
where $\map \zeta 3$ is Apéry's constant: the Riemann $\zeta$ function of $3$.


Proof
With a view to expressing the primitive in the form:














\(\ds \int u \frac {\d v} {\d x} \rd x\)

\(=\)







\(\ds u v - \int v \frac {\d u} {\d x} \rd x\)





Integration by Parts




let:














\(\ds u\)

\(=\)







\(\ds \ln x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 x\)





Derivative of $\ln x$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \frac {\map \ln {1 - x} } {\paren {1 - x} }\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds - \frac 1 2 \paren {\map \ln {1 - x} }^2\)





Primitive of Power




Then:














\(\ds \int_0^1 \frac {\map \ln {1 - x} \ln x } {\paren {1 - x} } \rd x\)

\(=\)







\(\ds \intlimits {\ln x \paren {-\frac 1 2 \paren {\map \ln {1 - x} }^2} } 0 1 + \frac 1 2 \int_0^1 \frac {\paren {\map \ln {1 - x} }^2} x \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds 0 + \frac 1 2 \int_0^1 \frac {\paren {\map \ln {1 - x} }^2} x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \int_1^0 \frac {\paren {\map \ln u}^2} {1 - u} \paren {-\d u}\)





$x \to \paren {1 - u}$ and $\rd x \to -\rd u$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int_0^1 \frac {\paren {-\map \ln u} \paren {-\map \ln u} } {1 - u} \rd u\)





reversing limits of integration














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int_0^1 \frac {\paren {\map \ln {\dfrac 1 u} }^{3 - 1} } {1 - u} \rd u\)





Logarithm of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac {\map \zeta 3 \map \Gamma 3} 2\)





Integral Representation of Riemann Zeta Function in terms of Gamma Function: $\ds \map \zeta s \map \Gamma s = \int_0^1 \frac {\paren {\map \ln {\frac 1 u} }^{s - 1} } {1 - u} \rd u$














\(\ds \)

\(=\)







\(\ds \map \zeta 3\)





Gamma Function of 3



$\blacksquare$





