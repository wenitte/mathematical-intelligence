# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_by_Arctangent_of_x_over_a



Theorem
$\ds \int x^m \arctan \frac x a \rd x = \frac {x^{m + 1} } {m + 1} \arctan \frac x a - \frac a {m + 1} \int \frac {x^{m + 1} \rd x} {x^2 + a^2}$


Proof 1
Recall:




\(\text {(1)}: \quad\)









\(\ds \int x^m \arctan x \rd x\)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \arctan x - \frac 1 {m + 1} \int \frac {x^{m + 1} \rd x} {x^2 + 1}\)





Primitive of $x^m \arctan x$




Then:














\(\ds \int x^m \arctan \frac x a \rd x\)

\(=\)







\(\ds \int a^m \paren {\dfrac x a}^m \arctan \frac x a \rd x\)





manipulating into appropriate form














\(\ds \)

\(=\)







\(\ds a^m \int \paren {\dfrac x a}^m \arctan \frac x a \rd x\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds a^m \paren {\dfrac 1 {1 / a} \paren {\frac 1 {m + 1} \paren {\dfrac x a}^{m + 1} \arctan \frac x a - \frac 1 {m + 1} \int \paren {\dfrac x a}^{m + 1} \frac {\d x} {\paren {\dfrac x a}^2 + 1} } }\)





Primitive of Function of Constant Multiple, from $(1)$














\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \arctan \frac x a - \frac a {m + 1} \int \frac {x^{m + 1} \rd x} {x^2 + a^2}\)





simplifying



$\blacksquare$


Proof 2
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







\(\ds x^m\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1}\)





Primitive of Power




Then:














\(\ds \int x^m \arctan \frac x a \rd x\)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \arctan \frac x a - \int \frac {x^{m + 1} } {m + 1} \paren {\frac a {x^2 + a^2} } \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \arctan \frac x a - \frac a {m + 1} \int \frac {x^{m + 1} \rd x} {x^2 + a^2}\)





Primitive of Constant Multiple of Function



$\blacksquare$


Also see
Primitive of $x^m \arcsin \dfrac x a$
Primitive of $x^m \arccos \dfrac x a$
Primitive of $x^m \arccot \dfrac x a$
Primitive of $x^m \arcsec \dfrac x a$
Primitive of $x^m \arccsc \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Trigonometric Functions: $14.505$




