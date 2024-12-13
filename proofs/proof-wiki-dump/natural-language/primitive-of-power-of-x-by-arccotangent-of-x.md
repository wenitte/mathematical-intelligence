# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_by_Arccotangent_of_x

Theorem
$\ds \int x^m \arccot x \rd x = \frac {x^{m + 1} } {m + 1} \arccot x + \frac 1 {m + 1} \int \frac {x^{m + 1} \rd x} {x^2 + 1}$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arccot x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {-1} {x^2 + 1}\)





Derivative of $\arccot x$




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














\(\ds \int x^m \arccot x \rd x\)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \arccot x - \int \frac {x^{m + 1} } {m + 1} \paren {\frac {-1} {x^2 + 1} } \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \arccot x + \frac 1 {m + 1} \int \frac {x^{m + 1} \rd x} {x^2 + 1}\)





Primitive of Constant Multiple of Function



$\blacksquare$


Also see
Primitive of $x^m \arcsin x$
Primitive of $x^m \arccos x$
Primitive of $x^m \arctan x$
Primitive of $x^m \arcsec x$
Primitive of $x^m \arccsc x$




