# 

Source: https://proofwiki.org/wiki/Primitive_of_Square_of_Sine_of_a_x_over_Cosine_of_a_x



Theorem
$\ds \int \frac {\sin^2 a x \rd x} {\cos a x} = \frac {-\sin a x} a + \frac 1 a \ln \size {\map \tan {\frac \pi 4 + \frac {a x} 2} } + C$


Proof













\(\ds \int \frac {\sin^2 a x \rd x} {\cos a x}\)

\(=\)







\(\ds \int \frac {\paren {1 - \cos^2 a x} \rd x} {\cos a x}\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \int \frac {\d x} {\cos a x} - \int \cos a x \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \int \sec a x \rd x - \int \cos a x \rd x\)





Secant is Reciprocal of Cosine














\(\ds \)

\(=\)







\(\ds \frac {-\sin a x} a + \int \sec a x \rd x + C\)





Primitive of $\cos a x$














\(\ds \)

\(=\)







\(\ds \frac {-\sin a x} a + \frac 1 a \ln \size {\map \tan {\frac \pi 4 + \frac {a x} 2} } + C\)





Primitive of $\sec a x$



$\blacksquare$


Also see
Primitive of $\dfrac {\cos^2 a x} {\sin a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$ and $\cos a x$: $14.408$




