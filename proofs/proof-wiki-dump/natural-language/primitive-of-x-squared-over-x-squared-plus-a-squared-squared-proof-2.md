# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_x_squared_plus_a_squared_squared/Proof_2

Theorem
$\ds \int \frac {x^2 \rd x} {\paren {x^2 + a^2}^2} = \frac {-x} {2 \paren {x^2 + a^2} } + \frac 1 {2 a} \arctan \frac x a + C$


Proof













\(\ds \int \frac {x^2 \rd x} {\paren {x^2 + a^2}^2}\)

\(=\)







\(\ds \int \frac {x^2 + a^2 - a^2} {\paren {x^2 + a^2}^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {x^2 + a^2} {\paren {x^2 + a^2}^2} \rd x - a^2 \int \frac {\d x} {\paren {x^2 + a^2}^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \int \frac {\d x} {x^2 + a^2} + a^2 \int \frac {\d x} {\paren {x^2 + a^2}^2}\)





simplification














\(\ds \)

\(=\)







\(\ds \frac 1 a \arctan {\frac x a} + a^2 \int \frac {\d x} {\paren {x^2 + a^2}^2} + C\)





Primitive of Reciprocal of $x^2 + a^2$














\(\ds \)

\(=\)







\(\ds \frac 1 a \arctan {\frac x a} + a^2 \paren {\frac x {2 a^2 \paren {x^2 + a^2} } + \frac 1 {2 a^3} \arctan \frac x a} + C\)





Primitive of Reciprocal of $\paren {x^2 + a^2}^2$














\(\ds \)

\(=\)







\(\ds \frac {-x} {2 \paren {x^2 + a^2} } + \frac 1 {2 a} \arctan \frac x a + C\)





simplifying



$\blacksquare$





