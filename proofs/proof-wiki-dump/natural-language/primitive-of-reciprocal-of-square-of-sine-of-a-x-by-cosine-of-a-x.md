# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Square_of_Sine_of_a_x_by_Cosine_of_a_x



Theorem
$\ds \int \frac {\d x} {\sin^2 a x \cos a x} = \frac 1 a \ln \size {\map \tan {\frac \pi 4 + \frac {a x} 2} } - \frac 1 {a \sin a x} + C$


Proof













\(\ds \int \frac {\d x} {\sin^2 a x \cos a x}\)

\(=\)







\(\ds \int \frac {\paren {\sin^2 a x + \cos^2 a x} \rd x} {\sin^2 a x \cos a x}\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \int \frac {\sin^2 a x \rd x} {\sin^2 a x \cos a x} + \int \frac {\cos^2 a x \rd x} {\sin^2 a x \cos a x}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \int \frac {\d x} {\cos a x} + \int \frac {\cos a x \rd x} {\sin^2 a x}\)





simplifying














\(\ds \)

\(=\)







\(\ds \int \sec a x \rd x + \int \frac {\cos a x \rd x} {\sin^2 a x}\)





Secant is Reciprocal of Cosine














\(\ds \)

\(=\)







\(\ds \int \sec a x \rd x + \int \frac {\cot a x \rd x} {\sin a x}\)





Cotangent is Cosine divided by Sine














\(\ds \)

\(=\)







\(\ds \int \sec a x \rd x + \int \csc a x \cot a x \rd x\)





Cosecant is Reciprocal of Sine














\(\ds \)

\(=\)







\(\ds \frac 1 a \ln \size {\map \tan {\frac \pi 4 + \frac {a x} 2} } + \int \csc a x \cot a x \rd x + C\)





Primitive of $\sec a x$














\(\ds \)

\(=\)







\(\ds \frac 1 a \ln \size {\map \tan {\frac \pi 4 + \frac {a x} 2} } - \frac 1 {a \sin a x} + C\)





Primitive of $\csc^n a x \cot a x$



$\blacksquare$


Also see
Primitive of $\dfrac 1 {\sin a x \cos^2 a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$ and $\cos a x$: $14.405$




