# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_a_squared_minus_x_squared_squared



Theorem
$\ds \int \frac {\d x} {\paren {a^2 - x^2}^2} = \frac x {2 a^2 \paren {a^2 - x^2} } + \frac 1 {4 a^3} \map \ln {\frac {a + x} {a - x} } + C$
for $x^2 < a^2$.


Proof













\(\ds \int \frac {\d x} {\paren {a^2 - x^2}^2}\)

\(=\)







\(\ds \int \paren {\frac 1 {4 a^2} \paren {\dfrac 1 {\paren {a - x}^2} + \frac 1 {\paren {a + x}^2} + \frac 1 {a \paren {a + x} } + \frac 1 {a \paren {a - x} } } } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \int \paren {\frac 1 {4 a^2} \paren {\frac 1 {\paren {a - x}^2} + \frac 1 {\paren {a + x}^2} + \frac 2 {\paren {a^2 - x^2} } } } \rd x\)





Reciprocal of Difference of Squares as Sum of Reciprocals: $\dfrac 2 {a^2 - x^2} = \dfrac 1 {a \paren {a + x} } + \dfrac 1 {a \paren {a - x} }$














\(\ds \)

\(=\)







\(\ds \frac 1 {4 a^2} \paren {\int \frac {\d x} {\paren {a - x}^2} + \int \frac {\d x} {\paren {a + x}^2} } + \frac 1 {2 a^2} \int \frac {\d x} {a^2 - x^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {4 a^2} \paren {\frac 1 {a - x} - \frac 1 {a + x} } + \frac 1 {2 a^2} \int \frac {\d x} {a^2 - x^2}\)





Primitive of Function of $a x + b$ and Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac x {2 a^2 \paren {a^2 - x^2} } + \frac 1 {2 a^2} \int \frac {\d x} {a^2 - x^2}\)





Reciprocal of Difference of Squares as Difference of Reciprocals: $\dfrac x {a^2 - x^2} = \dfrac 1 {2 \paren {a + x} } - \dfrac 1 {2 \paren {a - x} }$














\(\ds \)

\(=\)







\(\ds \frac x {2 a^2 \paren {a^2 - x^2} } + \frac 1 {2 a^2} \paren {\dfrac 1 {2 a} \map \ln {\frac {a + x} {a - x} } } + C\)





Primitive of $\dfrac 1 {a^2 - x^2}$



Hence the result.
$\blacksquare$


Also presented as
This result is also seen presented in the form:

$\ds \int \frac {\d x} {\paren {a^2 - x^2}^2} = \frac x {2 a^2 \paren {a^2 - x^2} } + \frac 1 {2 a^2} \int \frac {\d x} {a^2 - x^2}$


Also see
Primitive of $\dfrac 1 {\paren {x^2 - a^2}^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a^2 - x^2$, $x^2 < a^2$: $14.170$




