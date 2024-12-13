# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Square_of_1_plus_Cosine_of_a_x



Theorem
$\ds \int \frac {\d x} {\paren {1 + \cos a x}^2} = \frac 1 {2 a} \tan \frac {a x} 2 + \frac 1 {6 a} \tan^3 \frac {a x} 2 + C$


Proof













\(\ds \int \frac {\d x} {\paren {1 + \cos a x}^2}\)

\(=\)







\(\ds \int \paren {\frac 1 2 \sec^2 \frac {a x} 2}^2 \rd x\)





Reciprocal of One Plus Cosine














\(\ds \)

\(=\)







\(\ds \frac 1 4 \int \sec^4 \frac {a x} 2 \rd x\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {\frac {\sec^2 \dfrac {a x} 2 \tan \dfrac {a x} 2} {\dfrac {3 a} 2} + \frac 2 3 \int \sec^2 \frac {a x} 2 \rd x} + C\)





Primitive of $\sec^n a x$














\(\ds \)

\(=\)







\(\ds \frac 1 {6 a} \sec^2 \frac {a x} 2 \tan \dfrac {a x} 2 + \frac 1 6 \int \sec^2 \frac {a x} 2 \rd x + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {6 a} \sec^2 \frac {a x} 2 \tan \dfrac {a x} 2 + \frac 1 6 \paren {\frac 2 a \tan \frac {a x} 2} + C\)





Primitive of $\sec^2 a x$














\(\ds \)

\(=\)







\(\ds \frac 1 {6 a} \paren {1 + \tan^2 \frac {a x} 2} \tan \dfrac {a x} 2 + \frac 2 {6 a} \tan \frac {a x} 2 + C\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \tan \frac {a x} 2 + \frac 1 {6 a} \tan^3 \frac {a x} 2 + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac 1 {\paren {1 + \sin a x}^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cos a x$: $14.389$




