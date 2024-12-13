# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Sine_of_a_x_by_Square_of_Cosine_of_a_x



Theorem
$\ds \int \frac {\d x} {\sin a x \cos^2 a x} = \frac 1 a \ln \size {\tan \frac {a x} 2} + \frac 1 {a \cos a x} + C$


Proof













\(\ds \int \frac {\d x} {\sin a x \cos^2 a x}\)

\(=\)







\(\ds \int \frac {\paren {\sin^2 a x + \cos^2 a x} \rd x} {\sin a x \cos^2 a x}\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \int \frac {\sin^2 a x \rd x} {\sin a x \cos^2 a x} + \int \frac {\cos^2 a x \rd x} {\sin a x \cos^2 a x}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \int \frac {\d x} {\sin a x} + \int \frac {\sin a x \rd x} {\cos^2 a x}\)





simplifying














\(\ds \)

\(=\)







\(\ds \int \csc a x \rd x + \int \frac {\sin a x \rd x} {\cos^2 a x}\)





Cosecant is Reciprocal of Sine














\(\ds \)

\(=\)







\(\ds \int \csc a x \rd x + \int \frac {\tan a x \rd x} {\cos a x}\)





Tangent is Sine divided by Cosine














\(\ds \)

\(=\)







\(\ds \int \csc a x \rd x + \int \sec a x \tan a x \rd x\)





Secant is Reciprocal of Cosine














\(\ds \)

\(=\)







\(\ds \frac 1 a \ln \size {\tan \frac {a x} 2} + \int \sec a x \tan a x \rd x + C\)





Primitive of $\csc a x$














\(\ds \)

\(=\)







\(\ds \frac 1 a \ln \size {\tan \frac {a x} 2} + \frac 1 {a \cos a x} + C\)





Primitive of $\sec^n a x \tan a x$



$\blacksquare$


Also see
Primitive of $\dfrac 1 {\sin^2 a x \cos a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$ and $\cos a x$: $14.406$




