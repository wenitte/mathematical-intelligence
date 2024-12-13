# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_by_x_squared_minus_a_squared



Theorem
$\ds \int \frac {\d x} {x^2 \paren {x^2 - a^2} } = \frac 1 {a^2 x} + \frac 1 {2 a^3} \map \ln {\frac {x - a} {x + a} } + C$
for $x^2 > a^2$.


Proof













\(\ds \int \frac {\d x} {x^2 \paren {x^2 - a^2} }\)

\(=\)







\(\ds \int \paren {\frac 1 {a^2 \paren {x^2 - a^2} } - \frac 1 {a^2 x^2} } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \frac {\d x} {x^2 - a^2} - \frac 1 {a^2} \int \frac {\d x} {x^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \frac {\d x} {x^2 - a^2} + \frac 1 {a^2 x} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \paren {\frac 1 2 \map \ln {\frac {x - a} {x + a} } } + \frac 1 {a^2 x} + C\)





Primitive of $\dfrac 1 {x^2 - a^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2 x} + \frac 1 {2 a^3} \map \ln {\frac {x - a} {x + a} } + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac 1 {x^2 \paren {a^2 - x^2} }$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^2 - a^2$, $x^2 > a^2$: $14.149$




