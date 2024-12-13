# 

Source: https://proofwiki.org/wiki/Primitive_of_Cube_of_Hyperbolic_Cotangent_of_a_x



Theorem
$\ds \int \coth^3 a x \rd x = \frac {\ln \size {\sinh a x} } a - \frac {\coth^2 a x} {2 a} + C$


Proof 1













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


Proof 2













\(\ds \int \coth^3 a x \rd x\)

\(=\)







\(\ds -\frac {\coth^2 a x} {2 a} + \int \coth a x \rd x\)





Primitive of Power of $\coth^n a x$ with $n = 3$














\(\ds \)

\(=\)







\(\ds \frac {\ln \size {\sinh a x} } a - \frac {\coth^2 a x} {2 a} + C\)





Primitive of $\coth a x$



$\blacksquare$


Also see
Primitive of $\tanh^3 a x$
Primitive of $\sech^3 a x$
Primitive of $\csch^3 a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\coth a x$: $14.617$




