# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Hyperbolic_Sine_of_a_x_by_Square_of_Hyperbolic_Cosine_of_a_x

Theorem
$\ds \int \frac {\d x} {\sinh a x \cosh^2 a x} = \frac 1 a \ln \size {\tanh \frac {a x} 2} + \frac {\sech a x} a + C$


Proof













\(\ds \int \frac {\d x} {\sinh^2 a x \cosh a x}\)

\(=\)







\(\ds \int \frac {\left({\cosh^2 a x - \sinh^2 a x}\right) \rd x} {\sinh a x \cosh^2 a x}\)





Difference of Squares of Hyperbolic Cosine and Sine














\(\ds \)

\(=\)







\(\ds \int \frac {\cosh^2 a x \rd x} {\sinh a x \cosh^2 a x} - \int \frac {\sinh^2 a x \rd x} {\sinh a x \cosh^2 a x}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \int \frac {\d x} {\sinh a x} - \int \frac {\sinh a x \rd x} {\cosh^2 a x}\)





simplifying














\(\ds \)

\(=\)







\(\ds \int \csch a x \rd x - \int \frac {\sinh a x \rd x} {\cosh^2 a x}\)





Definition 2 of Hyperbolic Cosecant














\(\ds \)

\(=\)







\(\ds \int \csch a x \rd x - \int \frac {\tanh a x \rd x} {\cosh a x}\)





Definition 2 of Hyperbolic Tangent














\(\ds \)

\(=\)







\(\ds \int \csch a x \rd x - \int \sech a x \tanh a x \rd x\)





Definition 2 of Hyperbolic Secant














\(\ds \)

\(=\)







\(\ds \int \csch a x \rd x - \frac {-\sech a x} a + C\)





Primitive of $\sech^n a x \tanh a x$ for $n = 1$














\(\ds \)

\(=\)







\(\ds \frac 1 a \ln \left\vert {\tanh \frac {a x} 2} \right\vert + \frac {\sech a x} a + C\)





Primitive of $\csch a x$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sinh a x $ and $\cosh a x$: $14.597$




