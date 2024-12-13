# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_cubed_by_a_x_%2B_b



Theorem
$\ds \int \frac {\d x} {x^3 \paren {a x + b} } = \frac {2 a x - b} {2 b^2 x^2} + \frac {a^2} {b^3} \ln \size {\frac x {a x + b} } + C$


Proof 1













\(\ds \int \frac {\d x} {x^3 \paren {a x + b} }\)

\(=\)







\(\ds \int \paren {\frac {a^2} {b^3 x} + \frac {-a} {b^2 x^2} + \frac 1 {b x^3} + \frac {-a^3} {b^3 \paren {a x + b} } } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac {a^2} {b^3} \int \frac {\d x} x + \frac {-a} {b^2} \int \frac {\d x} {x^2} + \frac 1 b \int \frac {\d x} {x^3} + \frac {-a^3} {b^3} \int \frac {\d x} {a x + b}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {a^2} {b^3} \int \frac {\d x} x + \frac {-a} {b^2} \frac {-1} x + \frac 1 b \frac {-1} {2 x^2} + \frac {-a^3} {b^3} \int \frac {\d x} {a x + b} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {a^2} {b^3} \ln \size x + \frac a {b^2 x} - \frac 1 {2 b x^2} + \frac {-a^3} {b^3} \int \frac {\d x} {a x + b} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac {a^2} {b^3} \ln \size x + \frac a {b^2 x} - \frac 1 {2 b x^2} + \frac {-a^3} {b^3} \frac 1 a \ln \size {a x + b} + C\)





Primitive of $\dfrac 1 {a x + b}$














\(\ds \)

\(=\)







\(\ds \frac a {b^2 x} - \frac 1 {2 b x^2} + \frac {a^2} {b^3} \ln \size {\frac x {a x + b} } + C\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds \frac {2 a x - b} {2 b^2 x^2} + \frac {a^2} {b^3} \ln \size {\frac x {a x + b} } + C\)





rearranging



$\blacksquare$


Proof 2













\(\ds \int \frac {\d x} {x^3 \paren {a x + b} }\)

\(=\)







\(\ds \int \frac {b \rd x} {b x^3 \paren {a x + b} }\)





multiplying top and bottom by $b$














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {a x + b - a x} \rd x} {b x^3 \paren {a x + b} }\)





adding and subtracting $a x$














\(\ds \)

\(=\)







\(\ds \frac 1 b \int \frac {\paren {a x + b} \rd x} {x^3 \paren {a x + b} } - \frac a b \int \frac {x \rd x} {x^3 \paren {a x + b} }\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 b \int \frac {\d x} {x^3} - \frac a b \int \frac {\d x} {x^2 \paren {a x + b} }\)





simplification














\(\ds \)

\(=\)







\(\ds -\frac 1 {2 b x^2} - \frac a b \int \frac {\d x} {x^2 \paren {a x + b} } + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds -\frac 1 {2 b x^2} - \frac a b \paren {-\frac 1 {b x} + \frac a {b^2} \ln \size {\frac {a x + b} x} } + C\)





Primitive of $\dfrac 1 {x^2 \paren {a x + b} }$














\(\ds \)

\(=\)







\(\ds -\frac 1 {2 b x^2} + \frac a {b^2 x} - \frac {a^2} {b^3} \ln \size {\frac {a x + b} x} + C\)





multiplying out














\(\ds \)

\(=\)







\(\ds \frac a {b^2 x} - \frac 1 {2 b x^2} + \frac {a^2} {b^3} \ln \size {\frac x {a x + b} } + C\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds \frac {2 a x - b} {2 b^2 x^2} + \frac {a^2} {b^3} \ln \size {\frac x {a x + b} } + C\)





rearranging



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$: $14.65$




