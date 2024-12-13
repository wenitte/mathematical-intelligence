# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_2_a_x_minus_x_squared_over_x_squared

Theorem
$\ds \int \dfrac {\sqrt {2 a x - x^2} } {x^2} \rd x = -2 \sqrt {\dfrac {2 a - x} x} - \arcsin \dfrac {x - a} a + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \sqrt {2 a x - x^2}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \dfrac {2 a - 2 x} {2 \sqrt {2 a x - x^2} }\)





Derivative of Power, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \dfrac {a - x} {\sqrt {2 a x - x^2} }\)





simplifying




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \dfrac 1 {x^2}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds -\dfrac 1 x\)





Derivative of Power




Then:














\(\ds \int \dfrac {\sqrt {2 a x - x^2} } {x^2} \rd x\)

\(=\)







\(\ds \int u \frac {\d v} {\d x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \paren {\sqrt {2 a x - x^2} } \paren {-\dfrac 1 x} - \int \paren {-\dfrac 1 x} \paren {\dfrac {a - x} {\sqrt {2 a x - x^2} } } \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds -\sqrt {\dfrac {x \paren {2 a - x} } {x^2} } + \int \dfrac {a - x} {x \sqrt {2 a x - x^2} } \rd x\)





simplifying














\(\ds \)

\(=\)







\(\ds -\sqrt {\dfrac {2 a - x} x} + a \int \dfrac 1 {x \sqrt {2 a x - x^2} } \rd x - \int \dfrac 1 {\sqrt {2 a x - x^2} } \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds -\sqrt {\dfrac {2 a - x} x} + a \paren {-\dfrac 1 a \sqrt {\dfrac {2 a - x} x} } - \int \dfrac 1 {\sqrt {2 a x - x^2} } \rd x\)





Primitive of $\dfrac 1 {x \sqrt {2 a x - x^2} }$














\(\ds \)

\(=\)







\(\ds -\sqrt {\dfrac {2 a - x} x} - \sqrt {\dfrac {2 a - x} x} - \arcsin \dfrac {x - a} a + C\)





Primitive of $\dfrac 1 {\sqrt {2 a x - x^2} }$














\(\ds \)

\(=\)







\(\ds -2 \sqrt {\dfrac {2 a - x} x} - \arcsin \dfrac {x - a} a + C\)





simplifying



$\blacksquare$


Sources
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $53$.




