# 

Source: https://proofwiki.org/wiki/Primitive_of_Arctangent_of_x_over_a_over_x_squared



Theorem
$\ds \int \frac 1 {x^2} \arctan \frac x a \rd x = -\frac 1 x \arctan \frac x a - \frac 1 {2 a} \map \ln {\frac {x^2 + a^2} {x^2} } + C$


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







\(\ds \frac 1 {x^2}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {-1} x\)





Primitive of Power




Then:














\(\ds \int \frac 1 {x^2} \arctan \frac x a \rd x\)

\(=\)







\(\ds \arctan \frac x a \paren {\frac {-1} x} - \int \paren {\frac {-1} x} \paren {\frac a {x^2 + a^2} } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds -\frac 1 x \arctan \frac x a + a \int \frac {\d x} {x \paren {x^2 + a^2} } \rd x + C\)





simplifying














\(\ds \)

\(=\)







\(\ds -\frac 1 x \arctan \frac x a + \frac 1 a \paren {\frac 1 {2 a^2} \map \ln {\frac {x^2} {x^2 + a^2} } } + C\)





Primitive of $\dfrac 1 {x \paren {x^2 + a^2} }$














\(\ds \)

\(=\)







\(\ds -\frac 1 x \arctan \frac x a - \frac 1 {2 a} \map \ln {\frac {x^2 + a^2} {x^2} } + C\)





Logarithm of Reciprocal



$\blacksquare$


Also see
Primitive of $\dfrac 1 {x^2} \arcsin \dfrac x a$
Primitive of $\dfrac 1 {x^2} \arccos \dfrac x a$
Primitive of $\dfrac 1 {x^2} \arccot \dfrac x a$
Primitive of $\dfrac 1 {x^2} \arcsec \dfrac x a$
Primitive of $\dfrac 1 {x^2} \arccsc \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Trigonometric Functions: $14.487$



