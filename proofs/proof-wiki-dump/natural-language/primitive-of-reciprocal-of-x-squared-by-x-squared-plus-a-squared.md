# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_by_x_squared_plus_a_squared

Theorem
$\ds \int \frac {\d x} {x^2 \paren {x^2 + a^2} } = -\frac 1 {a^2 x} - \frac 1 {a^3} \arctan \frac x a + C$


Proof













\(\ds \int \frac {\d x} {x^2 \paren {x^2 + a^2} }\)

\(=\)







\(\ds \int \paren {\frac 1 {a^2 x^2} - \frac 1 {a^2 \paren {x^2 + a^2} } } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \frac {\d x} {x^2} - \frac 1 {a^2} \int \frac {1 \rd x} {x^2 + a^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds -\frac 1 {a^2 x} - \frac 1 {a^2} \int \frac {x \rd x} {x^2 + a^2} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds -\frac 1 {a^2 x} - \frac 1 {a^2} \paren {\frac 1 a \arctan \frac x a} + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds -\frac 1 {a^2 x} - \frac 1 {a^3} \arctan \frac x a + C\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^2 + a^2$: $14.130$




