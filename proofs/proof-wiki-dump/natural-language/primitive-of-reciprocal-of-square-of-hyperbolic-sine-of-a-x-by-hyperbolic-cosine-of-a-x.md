# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Square_of_Hyperbolic_Sine_of_a_x_by_Hyperbolic_Cosine_of_a_x

Theorem
$\ds \int \frac {\d x} {\sinh^2 a x \cosh a x} = -\frac 1 a \map \arctan {\sinh a x} - \frac {\csch a x} a + C$


Proof













\(\ds \int \frac {\d x} {\sinh^2 a x \cosh a x}\)

\(=\)







\(\ds \int \frac {\paren {\cosh^2 a x - \sinh^2 a x} \rd x} {\sinh^2 a x \cosh a x}\)





Difference of Squares of Hyperbolic Cosine and Sine














\(\ds \)

\(=\)







\(\ds \int \frac {\cosh^2 a x \rd x} {\sinh^2 a x \cosh a x} - \int \frac {\sinh^2 a x \rd x} {\sinh^2 a x \cosh a x}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \int \frac {\cosh a x \rd x} {\sinh^2 a x} - \int \frac {\d x} {\cosh a x}\)





simplifying














\(\ds \)

\(=\)







\(\ds \int \frac {\cosh a x \rd x} {\sinh^2 a x} - \int \sech a x \rd x\)





Definition 2 of Hyperbolic Secant














\(\ds \)

\(=\)







\(\ds \int \frac {\coth a x \rd x} {\sinh a x} - \int \sech a x \rd x\)





Definition 2 of Hyperbolic Cotangent














\(\ds \)

\(=\)







\(\ds \int \csch a x \coth a x \rd x - \int \sech a x \rd x\)





Definition 2 of Hyperbolic Cosecant














\(\ds \)

\(=\)







\(\ds \frac {-\csch a x} a - \int \sech a x \rd x\)





Primitive of $\csch^n a x \coth a x$ for $n = 1$














\(\ds \)

\(=\)







\(\ds \frac {-\csch a x} a - \frac 1 a \map \arctan {\sinh a x}\)





Primitive of $\sech a x$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sinh a x $ and $\cosh a x$: $14.596$




