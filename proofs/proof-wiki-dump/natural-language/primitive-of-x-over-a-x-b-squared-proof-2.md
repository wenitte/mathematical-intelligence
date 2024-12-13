# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_a_x_%2B_b_squared/Proof_2

Theorem
$\ds \int \frac {x \rd x} {\paren {a x + b}^2} = \frac b {a^2 \paren {a x + b} } + \frac 1 {a^2} \ln \size {a x + b} + C$


Proof













\(\ds \int \frac {x \rd x} {\paren {a x + b}^2}\)

\(=\)







\(\ds \int \frac {a x \rd x} {a \paren {a x + b}^2}\)





multiplying top and bottom by $a$














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {a x + b - b} \rd x} {a \paren {a x + b}^2}\)





adding and subtracting $b$














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\paren {a x + b} \rd x} {\paren {a x + b}^2} - \frac b a \int \frac {\d x} {\paren {a x + b}^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\d x} {a x + b} - \frac b a \int \frac {\d x} {\paren {a x + b}^2}\)





simplification














\(\ds \)

\(=\)







\(\ds \frac 1 a \paren {\frac 1 a \ln \size {a x + b} } - \frac b a \int \frac {\d x} {\paren {a x + b}^2} + C\)





Primitive of Reciprocal of $\dfrac 1 {a x + b}$














\(\ds \)

\(=\)







\(\ds \frac 1 a \paren {\frac 1 a \ln \size {a x + b} } - \frac b a \paren {-\frac 1 {a \paren {a x + b} } } + C\)





Primitive of Reciprocal of $\dfrac 1 {\paren {a x + b}^2}$














\(\ds \)

\(=\)







\(\ds \frac b {a^2 \paren {a x + b} } + \frac 1 {a^2} \ln \size {a x + b} + C\)





simplification



$\blacksquare$





