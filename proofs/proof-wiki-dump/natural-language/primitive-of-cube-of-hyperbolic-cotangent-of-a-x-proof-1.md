# 

Source: https://proofwiki.org/wiki/Primitive_of_Cube_of_Hyperbolic_Cotangent_of_a_x/Proof_1

Theorem
$\ds \int \coth^3 a x \rd x = \frac {\ln \size {\sinh a x} } a - \frac {\coth^2 a x} {2 a} + C$


Proof













\(\ds \int \coth^3 a x \rd x\)

\(=\)







\(\ds \int \coth a x \coth^2 a x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \coth a x \paren {1 + \csch^2 a x} \rd x\)





Difference of Squares of Hyperbolic Cotangent and Cosecant














\(\ds \)

\(=\)







\(\ds \int \coth a x \rd x + \int \coth a x \csch^2 a x \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {\ln \size {\sinh a x} } a + \int \coth a x \csch^2 a x \rd x\)





Primitive of $\tanh a x$














\(\ds \)

\(=\)







\(\ds \frac {\ln \size {\sinh a x} } a - \frac {\coth^2 a x} {2 a} + C\)





Primitive of $\coth^n a x \csch^2 a x$: $n = 1$



$\blacksquare$





