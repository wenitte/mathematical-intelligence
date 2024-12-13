# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_by_a_squared_minus_x_squared



Theorem
$\ds \int \frac {\d x} {x^2 \paren {a^2 - x^2} } = \frac {-1} {a^2 x} + \frac 1 {2 a^3} \map \ln {\frac {a + x} {a - x} } + C$
for $x^2 < a^2$.


Proof













\(\ds \int \frac {\d x} {x^2 \paren {a^2 - x^2} }\)

\(=\)







\(\ds \int \paren {\frac 1 {a^2 \paren {a^2 - x^2} } + \frac 1 {a^2 x^2} } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \frac {\d x} {a^2 - x^2} + \frac 1 {a^2} \int \frac {\d x} {x^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \frac {\d x} {a^2 - x^2} - \frac 1 {a^2 x} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \paren {\frac 1 2 \map \ln {\frac {a + x} {a - x} } } - \frac 1 {a^2 x} + C\)





Primitive of $\dfrac 1 {a^2 - x^2}$














\(\ds \)

\(=\)







\(\ds \frac {-1} {a^2 x} + \frac 1 {2 a^3} \map \ln {\frac {a + x} {a - x} } + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac 1 {x^2 \paren {x^2 - a^2} }$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a^2 - x^2$, $x^2 < a^2$: $14.168$




