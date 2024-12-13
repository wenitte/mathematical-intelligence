# 

Source: https://proofwiki.org/wiki/Primitive_of_Sine_of_a_x_by_Sine_of_b_x



Theorem
For $p \ne q$:

$\ds \int \sin a x \sin b x \rd x = \frac {\map \sin {a - b} x} {2 \paren {a - b} } - \frac {\map \sin {a + b} x} {2 \paren {a + b} } + C$


Proof













\(\ds \int \sin a x \sin b x \rd x\)

\(=\)







\(\ds \int \paren {\frac {\map \cos {a x - b x} - \map \cos {a x + b x} } 2} \rd x\)





Werner Formula for Sine by Sine














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \map \cos {a - b} x \rd x - \frac 1 2 \int \map \cos {a + b} x \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 2 \frac {\map \sin {a - b} x} {a - b} - \frac 1 2 \frac {\map \sin {a + b} x} {a + b} + C\)





Primitive of $\cos a x$














\(\ds \)

\(=\)







\(\ds \frac {\map \sin {a - b} x} {2 \paren {a - b} } - \frac {\map \sin {a + b} x} {2 \paren {a + b} } + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\cos a x \cos p x$
Primitive of $\sin a x \cos b x$
For $a = b$, see Primitive of $\sin^2 a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$: $14.353$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $62. \ \text {(b)}$




