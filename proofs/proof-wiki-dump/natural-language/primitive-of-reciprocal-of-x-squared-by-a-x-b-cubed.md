# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_by_a_x_%2B_b_cubed

Theorem
$\ds \int \frac {\d x} {x^2 \paren {a x + b}^3} = \frac {-a} {2 b^2 \paren {a x + b}^2} - \frac {2 a} {b^3 \paren {a x + b} } - \frac 1 {b^3 x} + \frac {3 a} {b^4} \ln \size {\frac {a x + b} x} + C$


Proof













\(\ds \int \frac {\d x} {x^2 \paren {a x + b}^3}\)

\(=\)







\(\ds \int \paren {\frac {-3 a} {b^4 x} + \frac 1 {b^3 x^2} + \frac {3 a^2} {b^4 \paren {a x + b} } + \frac {2 a^2} {b^3 \paren {a x + b}\^2} + \frac {a^2} {b^2 \paren {a x + b}^3} } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac {-3 a} {b^4} \int \frac {\d x} x + \frac 1 {b^3} \int \frac {\d x} {x^2} + \frac {3 a^2} {b^4} \int \frac {\d x} {\paren {a x + b} } + \frac {2 a^2} {b^3} \int \frac {\d x} {\paren {a x + b}^2} + \frac {a^2} {b^2} \int \frac {\d x} {\paren {a x + b}^3}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {-3 a} {b^4} \ln \size x + \frac 1 {b^3} \int \frac {\d x} {x^2} + \frac {3 a^2} {b^4} \int \frac {\d x} {\paren {a x + b} } + \frac {2 a^2} {b^3} \int \frac {\d x} {\paren {a x + b}^2} + \frac {a^2} {b^2} \int \frac {\d x} {\paren {a x + b}^3} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac {-3 a} {b^4} \ln \size x + \frac 1 {b^3} \int \frac {\d x} {x^2} + \frac {3 a^2} {b^4} \ln \size {a x + b} + \frac {2 a^2} {b^3} \int \frac {\d x} {\paren {a x + b}^2} + \frac {a^2} {b^2} \int \frac {\d x} {\paren {a x + b}^3} + C\)





Primitive of Reciprocal of a x + b














\(\ds \)

\(=\)







\(\ds \frac {-3 a} {b^4} \ln \size x + \frac 1 {b^3} \int \frac {\d x} {x^2} + \frac {3 a^2} {b^4} \ln \size {a x + b} + \frac {2 a^2} {b^3} \frac {-1} {a \paren {a x + b} } + \frac {a^2} {b^2} \int \frac {\d x} {\paren {a x + b}^3} + C\)





Primitive of Reciprocal of a x + b squared














\(\ds \)

\(=\)







\(\ds \frac {-3 a} {b^4} \ln \size x + \frac 1 {b^3} \int \frac {\d x} {x^2} + \frac {3 a^2} {b^4} \ln \size {a x + b} - \frac {2 a} {b^3 \paren {a x + b} } + \frac {a^2} {b^2} \frac {-1} {2 a \paren {a x + b}^2} + C\)





Primitive of Reciprocal of a x + b cubed














\(\ds \)

\(=\)







\(\ds \frac {-3 a} {b^4} \ln \size x + \frac 1 {b^3} \frac {-1} x + \frac {3 a^2} {b^4} \ln \size {a x + b} - \frac {2 a} {b^3 \paren {a x + b} } - \frac a {2 b^2 \paren {a x + b}^2} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {-a} {2 b^2 \paren {a x + b}^2} - \frac {2 a} {b^3 \paren {a x + b} } - \frac 1 {b^3 x} + \frac {3 a} {b^4} \ln \size {\frac {a x + b} x} + C\)





Difference of Logarithms and rearranging



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$: $14.78$




