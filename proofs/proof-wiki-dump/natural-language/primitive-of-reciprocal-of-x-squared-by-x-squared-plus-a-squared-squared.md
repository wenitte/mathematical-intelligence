# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_by_x_squared_plus_a_squared_squared

Theorem
$\ds \int \frac {\d x} {x^2 \paren {x^2 + a^2}^2} = -\frac 1 {a^4 x} - \frac x {2 a^4 \paren {x^2 + a^2} } - \frac 3 {2 a^5} \arctan \frac x a + C$


Proof
Let:














\(\ds \int \frac {\d x} {x^2 \paren {x^2 + a^2}^2}\)

\(=\)







\(\ds \int \paren {\frac 1 {a^4 x^2} - \frac 1 {a^4 \paren {x^2 + a^2} } - \frac 1 {a^2 \paren {x^2 + a^2}^2} } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 {a^4} \int \frac {\d x} {x^2} - \frac 1 {a^4} \int \frac {\d x} {x^2 + a^2} - \frac 1 {a^2} \int \frac {\d x} {\paren {x^2 + a^2}^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^4} \frac {-1} x - \frac 1 {a^4} \int \frac {\d x} {x^2 + a^2} - \frac 1 {a^2} \int \frac {\d x} {\paren {x^2 + a^2}^2} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds -\frac 1 {a^4 x} - \frac 1 {a^4} \paren {\frac 1 a \arctan \frac x a} - \frac 1 {a^2} \int \frac {\d x} {\paren {x^2 + a^2}^2} + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds -\frac 1 {a^4 x} - \frac 1 {a^5} \arctan \frac x a - \frac 1 {a^2} \paren {\frac x {2 a^2 \paren {x^2 + a^2} } + \frac 1 {2 a^3} \arctan \frac x a} + C\)





Primitive of $\dfrac 1 {\paren {x^2 + a^2}^2}$














\(\ds \)

\(=\)







\(\ds -\frac 1 {a^4 x} - \frac x {2 a^4 \paren {x^2 + a^2} } - \frac 3 {2 a^5} \arctan \frac x a + C\)





simplification



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^2 + a^2$: $14.137$




