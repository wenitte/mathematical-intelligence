# 

Source: https://proofwiki.org/wiki/Primitive_of_Arcsine_Function/Proof_2

Theorem
$\ds \int \arcsin x \rd x = x \arcsin x + \sqrt {1 - x^2} + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arcsin x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 {\sqrt {1 - x^2} }\)





Derivative of $\arcsin x$




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














\(\ds \int \arcsin x \rd x\)

\(=\)







\(\ds x \arcsin x - \int x \paren {\frac 1 {\sqrt {1 - x^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \arcsin x - \int \frac {x \rd x} {\sqrt {1 - x^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds x \arcsin x - \paren {-\sqrt {1 - x^2} } + C\)





Primitive of $\dfrac x {\sqrt {a^2 - x^2} }$, with $a := 1$














\(\ds \)

\(=\)







\(\ds x \arcsin x + \sqrt {1 - x^2} + C\)





simplifying



$\blacksquare$





