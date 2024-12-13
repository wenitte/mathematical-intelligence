# 

Source: https://proofwiki.org/wiki/Primitive_of_Arcsine_of_x_over_a_over_x_squared



Theorem
$\ds \int \dfrac 1 {x^2} \arcsin \frac x a \rd x = -\frac 1 x \arcsin \frac x a - \frac 1 a \map \ln {\frac {a + \sqrt {a^2 - x^2} } x} + C$


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







\(\ds \frac 1 {x^2}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {-1} x\)





Primitive of Power




Then:














\(\ds \int \frac 1 {x^2} \arcsin \frac x a \rd x\)

\(=\)







\(\ds \arcsin \frac x a \paren {\frac {-1} x} - \int \paren {\frac {-1} x} \paren {\frac 1 {\sqrt {a^2 - x^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds -\frac 1 x \arcsin \frac x a + \int \frac {\d x} {x \sqrt {a^2 - x^2} } \rd x + C\)





simplifying














\(\ds \)

\(=\)







\(\ds -\frac 1 x \arcsin \frac x a - \frac 1 a \map \ln {\frac {a + \sqrt {a^2 - x^2} } x} + C\)





Primitive of $\dfrac 1 {x \sqrt {a^2 - x^2} }$



$\blacksquare$


Also see
Primitive of $\dfrac 1 {x^2} \arccos \dfrac x a$
Primitive of $\dfrac 1 {x^2} \arctan \dfrac x a$
Primitive of $\dfrac 1 {x^2} \arccot \dfrac x a$
Primitive of $\dfrac 1 {x^2} \arcsec \dfrac x a$
Primitive of $\dfrac 1 {x^2} \arccsc \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Trigonometric Functions: $14.475$




