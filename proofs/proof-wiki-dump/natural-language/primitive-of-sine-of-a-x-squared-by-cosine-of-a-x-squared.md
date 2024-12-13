# 

Source: https://proofwiki.org/wiki/Primitive_of_Sine_of_a_x_squared_by_Cosine_of_a_x_squared



Theorem
$\ds \int \sin^2 a x \cos^2 a x \rd x = \frac x 8 - \frac {\sin 4 a x} {32 a} + C$


Proof 1













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


Proof 2













\(\ds \int \sin^2 a x \cos^2 a x \rd x\)

\(=\)







\(\ds \int \paren {\sin a x \cos a x}^2 \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {\frac 1 2 \sin 2 a x}^2 \rd x\)





Double Angle Formula for Sine














\(\ds \)

\(=\)







\(\ds \frac 1 4 \int \sin^2 2 a x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {\frac x 2 - \frac {\map \sin {2 x \times 2 a} } {4 \times 2 a} } + C\)





Primitive of $\sin^2 a x$














\(\ds \)

\(=\)







\(\ds \frac x 8 - \frac {\sin 4 a x} {32 a} + C\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$ and $\cos a x$: $14.403$




