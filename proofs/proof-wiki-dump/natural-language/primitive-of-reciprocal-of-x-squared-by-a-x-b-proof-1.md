# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_by_a_x_%2B_b/Proof_1

Theorem
$\ds \int \frac {\d x} {x^2 \paren {a x + b} } = -\frac 1 {b x} + \frac a {b^2} \ln \size {\frac {a x + b} x} + C$


Proof













\(\ds \int \frac {\d x} {x^2 \paren {a x + b} }\)

\(=\)







\(\ds \int \paren {-\frac a {b^2 x} + \frac 1 {b x^2} + \frac {a^2} {b^2 \paren {a x + b} } } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds -\frac a {b^2} \int \frac {\d x} x + \frac 1 b \int \frac {\d x} {x^2} + \frac {a^2} {b^2} \int \frac {\d x} {a x + b}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds -\frac a {b^2} \int \frac {\d x} x + \frac 1 b \frac {-1} x + \frac {a^2} {b^2} \int \frac {\d x} {a x + b} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds -\frac a {b^2} \ln \size x - \frac 1 {b x} + \frac {a^2} {b^2} \int \frac {\d x} {a x + b} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds -\frac a {b^2} \ln \size x - \frac 1 {b x} + \frac a {b^2} \ln \size {a x + b} + C\)





Primitive of $\dfrac 1 {a x + b}$














\(\ds \)

\(=\)







\(\ds -\frac 1 {b x} + \frac a {b^2} \ln \size {\frac {a x + b} x} + C\)





Difference of Logarithms



$\blacksquare$





