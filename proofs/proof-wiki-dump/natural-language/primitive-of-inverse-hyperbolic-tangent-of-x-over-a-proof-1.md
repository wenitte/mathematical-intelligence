# 

Source: https://proofwiki.org/wiki/Primitive_of_Inverse_Hyperbolic_Tangent_of_x_over_a/Proof_1

Theorem
$\ds \int \artanh \frac x a \rd x = x \artanh \dfrac x a + \frac {a \map \ln {a^2 - x^2} } 2 + C$
for $x^2 < a^2$.


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \artanh \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac a {a^2 - x^2}\)





Derivative of $\artanh \dfrac x a$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds x\)





Primitive of Constant




Then:














\(\ds \int \artanh \frac x a \rd x\)

\(=\)







\(\ds x \artanh \frac x a - \int x \paren {\frac a {a^2 - x^2} } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \artanh \frac x a - a \int \frac {x \rd x} {a^2 - x^2} + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds x \artanh \frac x a - a \paren {-\frac 1 2 \map \ln {a^2 - x^2} } + C\)





Primitive of $\dfrac x {a^2 - x^2}$














\(\ds \)

\(=\)







\(\ds x \artanh \dfrac x a + \frac {a \map \ln {a^2 - x^2} } 2 + C\)





simplifying



$\blacksquare$





