# 

Source: https://proofwiki.org/wiki/Primitive_of_Inverse_Hyperbolic_Cosine_of_x_over_a/Proof_1

Theorem
$\ds \int \arcosh \frac x a \rd x = x \arcosh \dfrac x a - \sqrt {x^2 - a^2} + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arcosh \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 {\sqrt {x^2 - a^2} }\)





Derivative of $\arcosh \dfrac x a$




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














\(\ds \int \arcosh \frac x a \rd x\)

\(=\)







\(\ds x \arcosh \frac x a - \int x \paren {\frac 1 {\sqrt {x^2 - a^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \arcosh \frac x a - \int \frac {x \rd x} {\sqrt {x^2 - a^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds x \arcosh \frac x a - \sqrt {x^2 + a^2} + C\)





Primitive of $\dfrac x {\sqrt {x^2 - a^2} }$



$\blacksquare$





