# 

Source: https://proofwiki.org/wiki/Primitive_of_Sine_of_a_x_by_Cosine_of_b_x



Theorem
$\ds \int \sin a x \cos b x \rd x = \frac {-\map \cos {a - b} x} {2 \paren {a - b} } - \frac {\map \cos {a + b} x} {2 \paren {a + b} } + C$
for $a, b \in \R: a \ne b$


Proof













\(\ds \int \sin a x \cos b x \rd x\)

\(=\)







\(\ds \int \paren {\dfrac {\map \sin {a x + b x} + \map \sin {a x - b x} } 2} \rd x\)





Werner Formula for Sine by Cosine














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \map \sin {a - b} x \rd x + \frac 1 2 \int \map \sin {a + b} x \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 2 \frac {-\map \cos {a - b} x} {a - b} - \frac 1 2 \frac {\map \cos {a + b} x} {a + b} + C\)





Primitive of $\cos a x$














\(\ds \)

\(=\)







\(\ds \frac {-\map \cos {a - b} x} {2 \paren {a - b} } - \frac {\map \cos {a + b} x} {2 \paren {a + b} } + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\sin a x \cos a x$ for $a = b$
Primitive of $\sin a x \sin b x$
Primitive of $\cos a x \cos b x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$ and $\cos a x$: $14.400$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $62. \ \text {(a)}$




