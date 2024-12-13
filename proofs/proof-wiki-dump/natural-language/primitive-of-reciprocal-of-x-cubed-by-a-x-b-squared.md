# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_cubed_by_a_x_%2B_b_squared

Theorem
$\ds \int \frac {\d x} {x^3 \paren {a x + b}^2} = - \frac {\paren {a x + b}^2} {2 b^4 x^2} + \frac {3 a \paren {a x + b} } {b^4 x} - \frac {a^3 x} {b^4 \paren {a x + b} } + \frac {3 a^2} {b^4} \ln \size {\frac x {a x + b} } + C$


Proof













\(\ds \int \frac {\d x} {x^3 \paren {a x + b}^2}\)

\(=\)







\(\ds \int \paren {\frac {3 a^2} {b^4 x} + \frac {-2 a} {b^3 x^2} + \frac 1 {b^2 x^3} + \frac {-3 a^3} {b^4 \paren {a x + b} } + \frac {-a^3} {b^3 \paren {a x + b}^2} } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac {3 a^2} {b^4} \int \frac {\d x} x + \frac {-2 a} {b^3} \int \frac {\d x} {x^2} + \frac 1 {b^2} \int \frac {\d x} {x^3} + \frac {-3 a^3} {b^4} \int \frac {\d x} {a x + b} + \frac {-a^3} {b^3} \int \frac {\d x} {\paren {a x + b}^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {3 a^2} {b^4} \int \frac {\d x} x + \frac {-2 a} {b^3} \frac {-1} x + \frac 1 {b^2} \frac {-1} {2 x^2} + \frac {-3 a^3} {b^4} \int \frac {\d x} {a x + b} + \frac {-a^3} {b^3} \int \frac {\d x} {\paren {a x + b}^2} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {3 a^2} {b^4} \ln \size x + \frac {2 a} {b^3 x} - \frac 1 {2 b^2 x^2} + \frac {-3 a^3} {b^4} \int \frac {\d x} {a x + b} + \frac {-a^3} {b^3} \int \frac {\d x} {\paren {a x + b}^2} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac {3 a^2} {b^4} \ln \size x + \frac {2 a} {b^3 x} - \frac 1 {2 b^2 x^2} + \frac {-3 a^3} {b^4} \frac 1 a \ln \size {a x + b} + \frac {-a^3} {b^3} \int \frac {\d x} {\paren {a x + b}^2} + C\)





Primitive of Reciprocal of a x + b














\(\ds \)

\(=\)







\(\ds \frac {3 a^2} {b^4} \ln \size x + \frac {2 a} {b^3 x} - \frac 1 {2 b^2 x^2} + \frac {-3 a^2} {b^4} \ln \size {a x + b} + \frac {-a^3} {b^3} \frac {-1} {a \paren {a x + b} } + C\)





Primitive of Reciprocal of a x + b squared














\(\ds \)

\(=\)







\(\ds \frac {2 a} {b^3 x} - \frac 1 {2 b^2 x^2} + \frac {a^2} {b^3 \paren {a x + b} } + \frac {3 a^2} {b^4} \ln \size {\frac x {a x + b} } + C\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds \frac {2 a} {b^3 x} - \frac 1 {2 b^2 x^2} + \frac {a^2} {b^3 \paren {a x + b} } + \frac {3 a^2} {b^4} \ln \size {\frac x {a x + b} } + \frac {3 a^2} {2 b^4} + C\)





C is an arbitrary constant














\(\ds \)

\(=\)







\(\ds \frac {4 a b \paren {a x + b} x} {2 b^4 \paren {a x + b} x^2} - \frac {b^2 \paren {a x + b} } {2 b^4 \paren {a x + b} x^2} + \frac {2 a^2 b x^2} {2 b^4 \paren {a x + b} x^2} + \frac {3 a^2} {b^4} \ln \size {\frac x {a x + b} } + \frac {3 a^2 \paren {a x + b} x^2} {2 b^4 \paren {a x + b} x^2} + C\)





Represent with common denominators














\(\ds \)

\(=\)







\(\ds \frac {4 a b \paren {a x + b} x - b^2 \paren {a x + b} + 2 a^2 b x^2 + 3 a^2 \paren {a x + b} x^2} {2 b^4 \paren {a x + b} x^2} + \frac {3 a^2} {b^4} \ln \size {\frac x {a x + b} } + C\)





Combine fractions














\(\ds \)

\(=\)







\(\ds \frac {4 a^2 b x^2 + 4 a b^2 x - a b^2 x - b^3 + 2 a^2 b x^2 + 3 a^3 x^3 + 3 a^2 b x^2} {2 b^4 \paren {a x + b} x^2} + \frac {3 a^2} {b^4} \ln \size {\frac x {a x + b} } + C\)





Expansion














\(\ds \)

\(=\)







\(\ds \frac {6 a \paren {a x + b}^2 x - \paren {a x + b}^3 - 2 a^3 x^3} {2 b^4 \paren {a x + b} x^2} + \frac {3 a^2} {b^4} \ln \size {\frac x {a x + b} } + C\)





Factorisation














\(\ds \)

\(=\)







\(\ds \frac {6 a \paren {a x + b}^2 x} {2 b^4 \paren {a x + b} x^2} - \frac {\paren {a x + b}^3} {2 b^4 \paren {a x + b} x^2} - \frac {2 a^3 x^3} {2 b^4 \paren {a x + b} x^2} + \frac {3 a^2} {b^4} \ln \size {\frac x {a x + b} } + C\)





Split into separate fractions














\(\ds \)

\(=\)







\(\ds \frac {3 a \paren {a x + b} } {b^4 x} - \frac {\paren {a x + b}^2} {2 b^4 x^2} - \frac {a^3 x} {b^4 \paren {a x + b} } + \frac {3 a^2} {b^4} \ln \size {\frac x {a x + b} } + C\)





Simplify



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$: $14.72$




