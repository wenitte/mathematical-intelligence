# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_a_x_%2B_b/Proof_3

Theorem
$\ds \int \frac {x \rd x} {a x + b} = \frac x a - \frac b {a^2} \ln \size {a x + b} + C$


Proof













\(\ds \int \frac {x \rd x} {a x + b}\)

\(=\)







\(\ds \int \frac 1 a \frac {a x \rd x} {a x + b}\)




















\(\ds \)

\(=\)







\(\ds \int \frac 1 a \frac {\paren {a x + b - b} \rd x} {a x + b}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\paren {a x + b} \rd x} {a x + b} - \frac b a \int \frac {\d x} {a x + b}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \d x - \frac b a \int \frac {\d x} {a x + b}\)





simplification














\(\ds \)

\(=\)







\(\ds \frac x a - \frac b a \int \frac {\d x} {a x + b}\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds \frac x a - \frac b {a^2} \ln \size {a x + b} + C\)





Primitive of $\dfrac 1 {a x + b}$



$\blacksquare$





