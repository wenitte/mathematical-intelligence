# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_x_squared_minus_a_squared_squared



Theorem
$\ds \int \frac {x^2 \rd x} {\paren {x^2 - a^2}^2} = \frac {-x} {2 \paren {x^2 - a^2} } + \frac 1 {4 a} \map \ln {\frac {x - a} {x + a} } + C$
for $x^2 > a^2$.


Proof













\(\ds \int \frac {x^2 \rd x} {\paren {x^2 - a^2}^2}\)

\(=\)







\(\ds \int \frac {x^2 - a^2 + a^2} {\paren {x^2 - a^2}^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {x^2 - a^2} {\paren {x^2 - a^2}^2} \rd x + a^2 \int \frac {\d x} {\paren {x^2 - a^2}^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \int \frac {\d x} {x^2 - a^2} + a^2 \int \frac {\d x} {\paren {x^2 - a^2}^2}\)





simplification














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \paren {\frac {x - a} {x + a} } + a^2 \int \frac {\d x} {\paren {x^2 - a^2}^2} + C\)





Primitive of $\dfrac 1 {x^2 - a^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \paren {\frac {x - a} {x + a} } + a^2 \paren {\frac {-x} {2 a^2 \paren {x^2 - a^2} } - \frac 1 {4 a^3} \paren {\frac {x - a} {x + a} } } + C\)





Primitive of $\dfrac 1 {\paren {x^2 - a^2}^2}$














\(\ds \)

\(=\)







\(\ds \frac {-x} {2 \paren {x^2 - a^2} } + \frac 1 {4 a} \map \ln {\frac {x - a} {x + a} } + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac {x^2} {\paren {a^2 - x^2}^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^2 - a^2$, $x^2 > a^2$: $14.153$




