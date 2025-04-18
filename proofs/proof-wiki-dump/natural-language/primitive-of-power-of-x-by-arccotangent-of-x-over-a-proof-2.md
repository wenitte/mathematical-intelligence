# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_by_Arccotangent_of_x_over_a/Proof_2

Theorem
$\ds \int x^m \arccot \frac x a \rd x = \frac {x^{m + 1} } {m + 1} \arccot \frac x a + \frac a {m + 1} \int \frac {x^{m + 1} \rd x} {x^2 + a^2}$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arccot \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {-a} {x^2 + a^2}\)





Derivative of $\arccot \dfrac x a$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds x^m\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1}\)





Primitive of Power




Then:














\(\ds \int x^m \arccot \frac x a \rd x\)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \arccot \frac x a - \int \frac {x^{m + 1} } {m + 1} \paren {\frac {-a} {x^2 + a^2} } \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \arccot \frac x a + \frac a {m + 1} \int \frac {x^{m + 1} \rd x} {x^2 + a^2}\)





Primitive of Constant Multiple of Function



$\blacksquare$


Also see
Primitive of $x^m \arcsin \dfrac x a$
Primitive of $x^m \arccos \dfrac x a$
Primitive of $x^m \arctan \dfrac x a$
Primitive of $x^m \arcsec \dfrac x a$
Primitive of $x^m \arccsc \dfrac x a$




