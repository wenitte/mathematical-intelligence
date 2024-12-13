# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_a_squared_minus_x_squared_squared



Theorem
$\ds \int \frac {x^2 \rd x} {\paren {a^2 - x^2}^2} = \frac x {2 \paren {a^2 - x^2} } - \frac 1 {4 a} \map \ln {\frac {a + x} {a - x} } + C$
for $x^2 < a^2$.


Proof













\(\ds \int \frac {x^2 \rd x} {\paren {a^2 - x^2}^2}\)

\(=\)







\(\ds \int \frac {x^2 - a^2 + a^2} {\paren {a^2 - x^2}^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {-\paren {a^2 - x^2} } {\paren {a^2 - x^2}^2} \rd x + a^2 \int \frac {\d x} {\paren {a^2 - x^2}^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds -\int \frac {\d x} {a^2 - x^2} + a^2 \int \frac {\d x} {\paren {a^2 - x^2}^2}\)





simplification














\(\ds \)

\(=\)







\(\ds -\frac 1 {2 a} \map \ln {\frac {a + x} {a - x} } + a^2 \int \frac {\d x} {\paren {x^2 - a^2}^2} + C\)





Primitive of $\dfrac 1 {a^2 - x^2}$














\(\ds \)

\(=\)







\(\ds -\frac 1 {2 a} \map \ln {\frac {a + x} {a - x} } + a^2 \paren {\frac x {2 a^2 \paren {a^2 - x^2} } + \frac 1 {4 a^3} \map \ln {\frac {a + x} {a - x} } } + C\)





Primitive of $\dfrac 1 {\paren {a^2 - x^2}^2}$














\(\ds \)

\(=\)







\(\ds \frac x {2 \paren {a^2 - x^2} } - \frac 1 {4 a} \map \ln {\frac {a + x} {a - x} } + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac {x^2} {\paren {x^2 - a^2}^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a^2 - x^2$, $x^2 < a^2$: $14.172$




