# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_Root_of_2_a_x_minus_x_squared

Theorem
$\ds \int \dfrac x {\sqrt {2 a x - x^2} } \rd x = a \arcsin \dfrac {x - a} a - \sqrt {2 a x - x^2} + C$


Proof
Let $u := x - a$.
Then:

$\dfrac {\d u} {\d x} = 1$
and:

$x = u + a$

Then:














\(\ds 2 a x - x^2\)

\(=\)







\(\ds 2 a \paren {u + a} - \paren {u + a}^2\)




















\(\ds \)

\(=\)







\(\ds 2 a u + 2 a^2 - u^2 - 2 a u - a^2\)




















\(\ds \)

\(=\)







\(\ds a^2 - u^2\)










and we have:














\(\ds \int \dfrac x {\sqrt {2 a x - x^2} } \rd x\)

\(=\)







\(\ds \int \dfrac {u + a} {\sqrt {a^2 - u^2} } \rd u\)




















\(\ds \)

\(=\)







\(\ds \int \dfrac u {\sqrt {a^2 - u^2} } \rd u + a \int \dfrac 1 {\sqrt {a^2 - u^2} } \rd u\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds -\sqrt {a^2 - u^2} + a \paren {\arcsin \frac x a}\)





Primitive of $\dfrac u {\sqrt {a^2 - u^2} }$ and Primitive of $\dfrac 1 {\sqrt {a^2 - u^2} }$: Arcsine Form














\(\ds \)

\(=\)







\(\ds a \arcsin \dfrac {x - a} a - \sqrt {2 a x - x^2} + C\)





substituting for $u$ and simplifying



$\blacksquare$


Sources
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $54$.




