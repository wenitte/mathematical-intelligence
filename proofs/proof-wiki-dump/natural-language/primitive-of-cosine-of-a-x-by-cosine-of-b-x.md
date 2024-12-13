# 

Source: https://proofwiki.org/wiki/Primitive_of_Cosine_of_a_x_by_Cosine_of_b_x



Theorem
$\ds \int \cos a x \cos b x \rd x = \frac {\map \sin {\paren {a - b} x} } {2 \paren {a - b} } + \frac {\map \sin {\paren {a + b} x} } {2 \paren {a + b} } + C$


Proof













\(\ds \int \cos a x \cos b x \rd x\)

\(=\)







\(\ds \int \paren {\frac {\map \cos {a x - b x} + \map \cos {a x + b x} } 2} \rd x\)





Werner Formula for Cosine by Cosine














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \map \cos {\paren {a - b} x} \rd x + \frac 1 2 \int \map \cos {\paren {a + b} x} \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 2 \frac {\map \sin {\paren {a - b} x} } {a - b} + \frac 1 2 \frac {\map \sin {\paren {a + b} x} } {a + b} + C\)





Primitive of $\cos a x$














\(\ds \)

\(=\)







\(\ds \frac {\map \sin {\paren {a - b} x} } {2 \paren {a - b} } + \frac {\map \sin {\paren {a + b} x} } {2 \paren {a + b} } + C\)





tidying



$\blacksquare$


Also see
Primitive of $\sin a x \sin b x$
Primitive of $\sin a x \cos b x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cos a x$: $14.383$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $62. \ \text {(c)}$




