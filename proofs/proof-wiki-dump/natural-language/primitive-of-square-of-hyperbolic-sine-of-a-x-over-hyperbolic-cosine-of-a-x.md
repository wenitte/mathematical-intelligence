# 

Source: https://proofwiki.org/wiki/Primitive_of_Square_of_Hyperbolic_Sine_of_a_x_over_Hyperbolic_Cosine_of_a_x

Theorem
$\ds \int \frac {\sinh^2 a x \rd x} {\cosh a x} = \frac {\sinh a x} a - \frac 1 a \map \arctan {\sinh a x} + C$


Proof













\(\ds \int \frac {\sinh^2 a x \rd x} {\cosh a x}\)

\(=\)







\(\ds \int \frac {\paren {\cosh^2 a x - 1} \rd x} {\cosh a x}\)





Difference of Squares of Hyperbolic Cosine and Sine














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {\cosh^2 a x} \rd x} {\cosh a x} - \int \frac {\d x} {\cosh a x}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \int \cosh a x \rd x - \int \sech a x \rd x\)





Definition 2 of Hyperbolic Secant














\(\ds \)

\(=\)







\(\ds \frac {\sinh a x} a - \int \sech a x \rd x\)





Primitive of $\cosh a x$














\(\ds \)

\(=\)







\(\ds \frac {\sinh a x} a - \frac 1 a \map \arctan {\sinh a x} + C\)





Primitive of $\sech a x$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sinh a x $ and $\cosh a x$: $14.599$




