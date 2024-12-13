# 

Source: https://proofwiki.org/wiki/Primitive_of_Cube_of_Cosine_of_a_x



Theorem
$\ds \int \cos^3 a x \rd x = \frac {\sin a x} a - \frac {\sin^3 a x} {3 a} + C$


Proof













\(\ds \int \cos^3 a x \rd x\)

\(=\)







\(\ds \int \paren {\frac {3 \cos a x + \cos 3 a x} 4} \rd x\)





Power Reduction Formula for $\cos^3$














\(\ds \)

\(=\)







\(\ds \frac 3 4 \int \cos a x \rd x + \frac 1 4 \int \cos 3 a x \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 3 4 \paren {\frac {\sin a x} a} + \frac 1 4 \paren {\frac {\sin 3 a x} {3 a} } + C\)





Primitive of $\cos a x$














\(\ds \)

\(=\)







\(\ds \frac {3 \sin a x} {4 a} + \frac 1 {12 a} \paren {\sin 3 a x} + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {3 \sin a x} {4 a} + \frac 1 {12 a} \paren {3 \sin a x - 4 \sin^3 a x} + C\)





Triple Angle Formula for Sine














\(\ds \)

\(=\)







\(\ds \frac {3 \sin a x} {4 a} + \frac {\sin a x} {4 a} - \frac {\sin^3 a x} {3 a} + C\)





multipying out














\(\ds \)

\(=\)







\(\ds \frac {\sin a x} a - \frac {\sin^3 a x} {3 a} + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\sin^3 a x$
Primitive of $\tan^3 a x$
Primitive of $\cot^3 a x$
Primitive of $\sec^3 a x$
Primitive of $\csc^3 a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cos a x$: $14.379$




