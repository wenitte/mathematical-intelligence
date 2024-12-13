# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_by_a_squared_minus_x_squared_squared



Theorem
$\ds \int \frac {\d x} {x^2 \paren {a^2 - x^2}^2} = \frac {-1} {a^4 x} + \frac x {2 a^4 \paren {a^2 - x^2} } + \frac 3 {4 a^5} \map \ln {\frac {a + x} {a - x} } + C$
for $x^2 < a^2$.


Proof













\(\ds \int \frac {\d x} {x^2 \paren {a^2 - x^2}^2}\)

\(=\)







\(\ds \int \paren {\frac 1 {a^4 x^2} + \frac 3 {4 a^5 \paren {a + x} } + \frac 3 {4 a^5 \paren {a - x} } + \frac 1 {4 a^4 \paren {a + x}^2} + \frac 1 {4 a^4 \paren {a - x}^2} } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 {a^4} \int \frac {\d x} {x^2} + \frac 3 {4 a^5} \int \frac {\d x} {a + x} + \frac 3 {4 a^5} \int \frac {\d x} {a - x} + \frac 1 {4 a^4} \int \frac {\d x} {\paren {a + x}^2} + \frac 1 {4 a^4} \int \frac {\d x} {\paren {a - x}^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^4} \frac {-1} x + \frac 3 {4 a^5} \int \frac {\d x} {a + x} + \frac 3 {4 a^5} \int \frac {\d x} {a - x} + \frac 1 {4 a^4} \int \frac {\d x} {\paren {a + x}^2} + \frac 1 {4 a^4} \int \frac {\d x} {\paren {a - x}^2} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {-1} {a^4 x} + \frac 3 {4 a^5} \ln \size {a + x} + \frac 3 {4 a^5} \paren {-\ln \size {a - x} } + \frac 1 {4 a^4} \int \frac {\d x} {\paren {a + x}^2} + \frac 1 {4 a^4} \int \frac {\d x} {\paren {a - x}^2} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac {-1} {a^4 x} + \frac 3 {4 a^5} \ln \size {a + x} - \frac 3 {4 a^5} \ln \size {a - x} + \frac 1 {4 a^4} \frac {-1} {a + x} + \frac 1 {4 a^4} \frac 1 {a - x} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {-1} {a^4 x} + \frac 3 {4 a^5} \ln \size {\frac {a + x} {a - x} } + \frac {-1} {4 a^4 \paren {a + x} } + \frac 1 {4 a^4 \paren {a - x} } + C\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds \frac {-1} {a^4 x} + \frac 3 {4 a^5} \map \ln {\frac {a + x} {a - x} } + \frac {-1} {4 a^4 \paren {a + x} } + \frac 1 {4 a^4 \paren {a - x} } + C\)





Sign of Quotient of Factors of Difference of Squares














\(\ds \)

\(=\)







\(\ds \frac {-1} {a^4 x} + \frac x {2 a^4 \paren {a^2 - x^2} } + \frac 3 {4 a^5} \map \ln {\frac {a + x} {a - x} } + C\)





simplification



$\blacksquare$


Also see
Primitive of $\dfrac 1 {x^2 \paren {a^2 - x^2}^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a^2 - x^2$, $x^2 < a^2$: $14.175$




