# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_x_squared_plus_a_squared/Proof_1

Theorem
$\ds \int \frac {\rd x} {x \paren {x^2 + a^2} } = \frac 1 {2 a^2} \map \ln {\frac {x^2} {x^2 + a^2} } + C$


Proof













\(\ds \int \frac {\d x} {x \paren {x^2 + a^2} }\)

\(=\)







\(\ds \int \paren {\frac 1 {a^2 x} - \frac x {a^2 \paren {x^2 + a^2} } } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \frac {\d x} x - \frac 1 {a^2} \int \frac {x \rd x} {x^2 + a^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \ln \size x - \frac 1 {a^2} \int \frac {x \rd x} {x^2 + a^2} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \ln \size x - \frac 1 {a^2} \paren {\frac 1 2 \map \ln {x^2 + a^2} } + C\)





Primitive of $\dfrac x {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a^2} \map \ln {\frac {x^2} {x^2 + a^2} } + C\)





Difference of Logarithms



$\blacksquare$





