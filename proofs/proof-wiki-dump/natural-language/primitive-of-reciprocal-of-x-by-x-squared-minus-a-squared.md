# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_x_squared_minus_a_squared



Theorem
$\ds \int \frac {\d x} {x \paren {x^2 - a^2} } = \frac 1 {2 a^2} \map \ln {\frac {x^2 - a^2} {x^2} } + C$
for $x^2 > a^2$.


Proof













\(\ds \int \frac {\d x} {x \paren {x^2 - a^2} }\)

\(=\)







\(\ds \int \paren {\frac x {a^2 \paren {x^2 - a^2} }  - \frac 1 {a^2 x} } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \frac {x \rd x} {x^2 - a^2} - \frac 1 {a^2} \int \frac {\d x} x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \frac {x \rd x} {x^2 - a^2} - \frac 1 {a^2} \ln \size x + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \paren {\frac 1 2 \map \ln {x^2 - a^2} } - \frac 1 {a^2} \ln \size x + C\)





Primitive of $\dfrac x {x^2 - a^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a^2} \map \ln {x^2 - a^2} - \frac 1 {2 a^2} \ln \size {x^2} + C\)





Logarithm of Power














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a^2} \map \ln {x^2 - a^2} - \frac 1 {2 a^2} \map \ln {x^2} + C\)





as $x^2 > 0$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a^2} \map \ln {\frac {x^2 - a^2} {x^2} } + C\)





Difference of Logarithms



$\blacksquare$


Also see
Primitive of $\dfrac 1 {x \paren {a^2 - x^2} }$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^2 - a^2$, $x^2 > a^2$: $14.148$




