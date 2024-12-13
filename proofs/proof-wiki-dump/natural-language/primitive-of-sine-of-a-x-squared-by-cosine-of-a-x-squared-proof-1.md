# 

Source: https://proofwiki.org/wiki/Primitive_of_Sine_of_a_x_squared_by_Cosine_of_a_x_squared/Proof_1

Theorem
$\ds \int \sin^2 a x \cos^2 a x \rd x = \frac x 8 - \frac {\sin 4 a x} {32 a} + C$


Proof













\(\ds \int \sin^2 a x \cos^2 a x \rd x\)

\(=\)







\(\ds \int \sin^2 a x \paren {1 - \sin^2 a x} \rd x\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \int \sin^2 a x \rd x - \int \sin^4 a x \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac x 2 - \frac {\sin 2 a x} {4 a} - \int \sin^4 a x \rd x + C\)





Primitive of $\sin^2 a x$














\(\ds \)

\(=\)







\(\ds \frac x 2 - \frac {\sin 2 a x} {4 a} - \paren {\frac {3 x} 8 - \frac {\sin 2 a x} {4 a} + \frac {\sin 4 a x} {32 a} } + C\)





Primitive of $\sin^4 a x$














\(\ds \)

\(=\)







\(\ds \frac x 8 - \frac {\sin 4 a x} {32 a} + C\)





gathering terms and simplifying



$\blacksquare$





