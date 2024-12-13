# 

Source: https://proofwiki.org/wiki/Primitive_of_Cube_of_Tangent_of_a_x



Theorem
$\ds \int \tan^3 a x \rd x = \frac {\tan^2 a x} {2 a} + \frac 1 a \ln \size {\cos a x} + C$


Proof 1













\(\ds \int \tan^3 a x \rd x\)

\(=\)







\(\ds \int \tan a x \tan^2 a x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \tan a x \paren {\sec^2 a x - 1} \rd x\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds \int \tan a x \sec^2 a x \rd x - \int \tan a x \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {\tan^2 a x} {2 a} - \int \tan a x \rd x + C\)





Primitive of $\tan^n a x \sec^2 a x$: $n = 1$














\(\ds \)

\(=\)







\(\ds \frac {\tan^2 a x} {2 a} - \paren {\frac {-\ln \size {\cos a x} } a} + C\)





Primitive of $\tan a x$














\(\ds \)

\(=\)







\(\ds \frac {\tan^2 a x} {2 a} + \frac 1 a \ln \size {\cos a x} + C\)





simplifying



$\blacksquare$


Proof 2













\(\ds I_n\)

\(=\)







\(\ds \int \map {\tan^n} {a x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\map {\tan^{n - 1} } {a x} } {a \paren {n - 1} } - I_{n - 2}\)





Reduction Formula for Integral of Power of Tangent














\(\ds I_1\)

\(=\)







\(\ds -\frac 1 a \ln \size {\map \cos {a x} } + C\)





Primitive of $\tan a x$: Cosine Form








\(\ds \leadsto \ \ \)





\(\ds I_3\)

\(=\)







\(\ds \frac {\map {\tan^2} {a x} } {2 a} + \frac 1 a \ln \size {\map \cos {a x} } + C'\)









$\blacksquare$


Also see
Primitive of $\sin^3 a x$
Primitive of $\cos^3 a x$
Primitive of $\cot^3 a x$
Primitive of $\sec^3 a x$
Primitive of $\csc^3 a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\tan a x$: $14.431$




