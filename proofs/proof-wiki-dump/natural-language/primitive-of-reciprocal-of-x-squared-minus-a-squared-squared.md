# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_minus_a_squared_squared



Theorem
$\ds \int \frac {\d x} {\paren {x^2 - a^2}^2} = \frac {-x} {2 a^2 \paren {x^2 - a^2} } + \frac 1 {4 a^3} \map \ln {\frac {x + a} {x - a} } + C$
for $x^2 > a^2$.


Proof













\(\ds \int \frac {\d x} {\paren {x^2 - a^2}^2}\)

\(=\)







\(\ds \int \paren {\frac 1 {4 a^3 \paren {x + a} } - \frac 1 {4 a^3 \paren {x - a} } + \frac 1 {4 a^2 \paren {x + a}^2} + \frac 1 {4 a^2 \paren {x - a}^2} } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 {4 a^3} \int \frac {\d x} {x + a} - \frac 1 {4 a^3} \int \frac {\d x} {x - a} + \frac 1 {4 a^2} \int \frac {\d x} {\paren {x + a}^2} + \frac 1 {4 a^2} \int \frac {\d x} {\paren {x - a}^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {4 a^3} \ln \size {x + a} - \frac 1 {4 a^3} \ln \size {x - a} + \frac 1 {4 a^2} \int \frac {\d x} {\paren {x + a}^2} + \frac 1 {4 a^2} \int \frac {\d x} {\paren {x - a}^2} + C\)





Primitive of Function of $a x + b$ and Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac 1 {4 a^3} \ln \size {\frac {x + a} {x - a} } + \frac 1 {4 a^2} \int \frac {\d x} {\paren {x + a}^2} + \frac 1 {4 a^2} \int \frac {\d x} {\paren {x - a}^2} + C\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds \frac 1 {4 a^3} \map \ln {\frac {x + a} {x - a} } + \frac 1 {4 a^2} \int \frac {\d x} {\paren {x + a}^2} + \frac 1 {4 a^2} \int \frac {\d x} {\paren {x - a}^2} + C\)





Sign of Quotient of Factors of Difference of Squares














\(\ds \)

\(=\)







\(\ds \frac 1 {4 a^3} \map \ln {\frac {x + a} {x - a} } + \frac 1 {4 a^2} \frac {-1} {\paren {x + a} } + \frac 1 {4 a^2} \frac {-1} {\paren {x - a} } + C\)





Primitive of Function of $a x + b$ and Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac 1 {4 a^3} \map \ln {\frac {x + a} {x - a} } - \paren {\frac 1 {4 a^2 \paren {x + a} } + \frac 1 {4 a^2 \paren {x - a} } } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {4 a^3} \map \ln {\frac {x + a} {x - a} } - \paren {\frac {\paren {x - a} + \paren {x + a} } {4 a^2 \paren {x + a} \paren {x - a} } } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {-x} {2 a^2 \paren {x^2 - a^2} } + \frac 1 {4 a^3} \map \ln {\frac {x + a} {x - a} } + C\)





Difference of Two Squares



$\blacksquare$


Also see
Primitive of $\dfrac 1 {\paren {a^2 - x^2}^2}$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Rational Algebraic Functions: $3.3.25$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^2 - a^2$, $x^2 > a^2$: $14.151$




