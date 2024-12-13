# 

Source: https://proofwiki.org/wiki/Primitive_of_Cube_of_Sine_of_a_x/Proof_1

Theorem
$\ds \int \sin^3 a x \rd x = -\frac {\cos a x} a + \frac {\cos^3 a x} {3 a} + C$


Proof













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





