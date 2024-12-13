# 

Source: https://proofwiki.org/wiki/Primitive_of_Cube_of_Sine_of_a_x



Theorem
$\ds \int \sin^3 a x \rd x = -\frac {\cos a x} a + \frac {\cos^3 a x} {3 a} + C$


Proof 1













\(\ds \int \sin^3 a x \rd x\)

\(=\)







\(\ds \int \paren {\frac {3 \sin a x - \sin 3 a x} 4} \rd x\)





Power Reduction Formula for Cube of Sine














\(\ds \)

\(=\)







\(\ds \frac 3 4 \int \sin a x \rd x - \frac 1 4 \int \sin 3 a x \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 3 4 \paren {\frac {-\cos a x} a} - \frac 1 4 \paren {\frac {-\cos 3 a x} {3 a} } + C\)





Primitive of $\sin a x$














\(\ds \)

\(=\)







\(\ds \frac {-3 \cos a x} {4 a} + \frac 1 {12 a} \paren {\cos 3 a x} + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {-3 \cos a x} {4 a} + \frac 1 {12 a} \paren {4 \cos^3 a x - 3 \cos a x} + C\)





Triple Angle Formula for Cosine














\(\ds \)

\(=\)







\(\ds \frac {-3 \cos a x} {4 a} + \frac {\cos^3 a x} {3 a} - \frac {\cos a x} {4 a} + C\)





multipying out














\(\ds \)

\(=\)







\(\ds -\frac {\cos a x} a + \frac {\cos^3 a x} {3 a} + C\)





simplifying



$\blacksquare$


Proof 2













\(\ds \int \sin^3 a x \rd x\)

\(=\)







\(\ds \int \paren {1 - \cos^2 a x} \sin a x \rd x\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \int \sin a x \rd x - \int \cos^2 a x \sin a x \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds -\dfrac {\cos a x} a - \int \cos^2 a x \sin a x \rd x + C\)





Primitive of $\sin a x$














\(\ds \)

\(=\)







\(\ds -\dfrac {\cos a x} a + \dfrac {\cos^3 a x} a + C\)





Primitive of Power of $\cos a x$ by $\sin a x$



$\blacksquare$


Also see
Primitive of $\cos^3 a x$
Primitive of $\tan^3 a x$
Primitive of $\cot^3 a x$
Primitive of $\sec^3 a x$
Primitive of $\csc^3 a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$: $14.349$




