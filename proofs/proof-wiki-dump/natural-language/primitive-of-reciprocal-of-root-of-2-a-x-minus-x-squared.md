# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_2_a_x_minus_x_squared

Theorem
$\ds \int \frac {\d x} {\sqrt {2 a x - x^2} } = \arcsin \dfrac {x - a} a + C$
where $C$ is an arbitrary constant.


Proof
Let $u := x - a$.
Then:

$\dfrac {\d u} {\d x} = 1$
and:

$x = u + a$
and we have:














\(\ds \int \frac {\d x} {\sqrt {2 a x - x^2} }\)

\(=\)







\(\ds \int \frac {\d u} {\sqrt {2 a \paren {u + a} - \paren {u + a}^2} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int \frac {\d u} {\sqrt {2 a u + 2 a^2 - u^2 - 2 a u - a^2} }\)





multiplying out














\(\ds \)

\(=\)







\(\ds \int \frac {\d u} {\sqrt {a^2 - u^2} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \arcsin \frac u a + C\)





Primitive of $\dfrac 1 {\sqrt {a^2 - u^2} }$: Arcsine Form














\(\ds \)

\(=\)







\(\ds \arcsin \dfrac {x - a} a + C\)





substituting for $u$



$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions: $3.3.47$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $47$.




