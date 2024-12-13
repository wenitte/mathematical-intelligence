# 

Source: https://proofwiki.org/wiki/Primitive_of_Arccosine_Function/Proof_2

Theorem
$\ds \int \arccos x \rd x = x \arccos x - \sqrt {1 - x^2} + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arccos x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {-1} {\sqrt {a^2 - 1} }\)





Derivative of $\arccos \dfrac x a$, setting $a := 1$




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














\(\ds \int \arccos x \rd x\)

\(=\)







\(\ds x \arccos x - \int x \paren {\frac {-1} {\sqrt {1 - x^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \arccos x + \int \frac {x \rd x} {\sqrt {1 - x^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds x \arccos x + \paren {-\sqrt {1 - x^2} } + C\)





Primitive of $\dfrac x {\sqrt {1 - x^2} }$














\(\ds \)

\(=\)







\(\ds x \arccos x - \sqrt {1 - x^2} + C\)





simplifying



$\blacksquare$





