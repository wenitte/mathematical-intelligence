# 

Source: https://proofwiki.org/wiki/Primitive_of_Arcsine_of_x_over_a/Proof_3

Theorem
$\ds \int \arcsin \frac x a \rd x = x \arcsin \frac x a + \sqrt {a^2 - x^2} + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arcsin \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 {\sqrt {a^2 - x^2} }\)





Derivative of $\arcsin \dfrac x a$




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














\(\ds \int \arcsin \frac x a \rd x\)

\(=\)







\(\ds x \arcsin \frac x a - \int x \paren {\frac 1 {\sqrt {a^2 - x^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \arcsin \frac x a - \int \frac {x \rd x} {\sqrt {a^2 - x^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds x \arcsin \frac x a - \paren {-\sqrt {a^2 - x^2} } + C\)





Primitive of $\dfrac x {\sqrt {a^2 - x^2} }$














\(\ds \)

\(=\)







\(\ds x \arcsin \frac x a + \sqrt {a^2 - x^2} + C\)





simplifying



$\blacksquare$





