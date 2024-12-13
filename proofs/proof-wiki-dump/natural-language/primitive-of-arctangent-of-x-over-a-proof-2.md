# 

Source: https://proofwiki.org/wiki/Primitive_of_Arctangent_of_x_over_a/Proof_2

Theorem
$\ds \int \arctan \frac x a \rd x = x \arctan \frac x a - \frac a 2 \map \ln {x^2 + a^2} + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arctan \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac a {x^2 + a^2}\)





Derivative of $\arctan \dfrac x a$




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














\(\ds \int \arctan \frac x a \rd x\)

\(=\)







\(\ds x \arctan \frac x a - \int x \paren {\frac a {x^2 + a^2} } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \arctan \frac x a - a \int \frac {x \rd x} {x^2 + a^2} + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds x \arctan \frac x a - a \paren {\frac 1 2 \ln \paren {x^2 + a^2} } + C\)





Primitive of $\dfrac x {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds x \arctan \frac x a - \frac a 2 \ln \paren {x^2 + a^2} + C\)





simplifying



$\blacksquare$





