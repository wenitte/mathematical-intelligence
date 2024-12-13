# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_a_x_%2B_b_squared/Proof_2

Theorem
$\ds \int \frac {x^2 \rd x} {\paren {a x + b}^2} = \frac {a x + b} {a^3} - \frac {b^2} {a^3 \paren {a x + b} } - \frac {2 b} {a^3} \ln \size {a x + b} + C$


Proof













\(\ds \int \frac {x^2 \rd x} {\paren {a x + b}^2}\)

\(=\)







\(\ds \int \frac {a x^2 \rd x} {a \paren {a x + b}^2}\)





multiplying top and bottom by $a$














\(\ds \)

\(=\)







\(\ds \int \frac {x \paren {a x + b - b} \rd x} {a \paren {a x + b}^2}\)





adding and subtracting $b x$














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {x \paren {a x + b} \rd x} {\paren {a x + b}^2} - \frac b a \int \frac {x \rd x} {\paren {a x + b}^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {x \rd x} {a x + b} - \frac b a \int \frac {x \rd x} {\paren {a x + b}^2}\)





simplification














\(\ds \)

\(=\)







\(\ds \frac 1 a \paren {\frac x a - \frac b {a^2} \ln \size {a x + b} } - \frac b a \int \frac {\d x} {\paren {a x + b}^2} + C\)





Primitive of Reciprocal of $\dfrac x {\paren {a x + b} }$














\(\ds \)

\(=\)







\(\ds \frac 1 a \paren {\frac x a - \frac b {a^2} \ln \size {a x + b} } - \frac b a \paren {\frac b {a^2 \paren {a x + b} } + \frac 1 {a^2} \ln \size {a x + b} } + C\)





Primitive of Reciprocal of $\dfrac x {\paren {a x + b}^2}$














\(\ds \)

\(=\)







\(\ds \frac x {a^2} - \frac b {a^3} \ln \size {a x + b} - \frac {b^2} {a^3 \paren {a x + b} } - \frac b {a^3} \ln \size {a x + b} + C\)





multiplying out














\(\ds \)

\(=\)







\(\ds \frac x {a^2} - \frac {b^2} {a^3 \paren {a x + b} } - \frac {2 b} {a^3} \ln \size {a x + b} + C\)





gathering terms














\(\ds \)

\(=\)







\(\ds \frac {a x} {a^3} + \frac b {a^3} - \frac {b^2} {a^3 \paren {a x + b} } - \frac {2 b} {a^3} \ln \size {a x + b} + C\)





where $\dfrac b {a^3}$ is subsumed into $C$














\(\ds \)

\(=\)







\(\ds \frac {a x + b} {a^3} - \frac {b^2} {a^3 \paren {a x + b} } - \frac {2 b} {a^3} \ln \size {a x + b} + C\)





simplification



$\blacksquare$





