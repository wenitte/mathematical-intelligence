# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_Root_of_x_squared_minus_a_squared/Arcsecant_Form



Theorem
$\ds \int \frac {\d x} {x \sqrt {x^2 - a^2} } = \frac 1 a \arcsec \size {\frac x a} + C$
for $0 < a < \size x$.


Proof
We have that $\sqrt {x^2 - a^2}$ is defined only when $x^2 > a^2$, that is, either:

$x > a$
or:

$x < -a$
where it is assumed that $a > 0$.

Consider the arcsecant substitution:

$u = \arcsec {\dfrac x a}$
which is defined for all $x$ such that $\size {\dfrac x a} \ge 1$.
That is:

$\size x \ge a$
and it is seen that $u = \arcsec {\dfrac x a}$ is defined over the whole domain of the integrand.

Hence:














\(\ds u\)

\(=\)







\(\ds \arcsec {\frac x a}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds a \sec u\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d u}\)

\(=\)







\(\ds a \sec u \tan u\)





Derivative of Secant Function




Let $x > a$.














\(\ds \int \frac {\d x} {x \sqrt {x^2 - a^2} }\)

\(=\)







\(\ds \int \frac {a \sec u \tan u} {a \sec u \sqrt {a^2 \sec^2 u - a^2} } \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac a {a^2} \int \frac {\sec u \tan u} {\sec u \sqrt {\sec^2 u - 1} } \rd u\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\sec u \tan u} {\sec u \tan u} \rd u\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds \frac 1 a \int 1 \rd u\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a u + C\)





Integral of Constant














\(\ds \)

\(=\)







\(\ds \frac 1 a \arcsec {\frac x a} + C\)





Definition of $u$














\(\ds \)

\(=\)







\(\ds \frac 1 a \arcsec {\frac {\size x} a} + C\)





Definition of Absolute Value: $\size x = x$ for $x > 0$




Now suppose $x < -a$.
Let $z = -x$.
Then:

$\d x = -\d z$
and we then have:














\(\ds \int \frac {\d x} {x \sqrt {x^2 - a^2} }\)

\(=\)







\(\ds \int \frac {-\d z} {\paren {-z} \sqrt {\paren {-z}^2 - a^2} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int \frac {\d z} {z \sqrt {z^2 - a^2} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 a \arcsec {\frac z a} + C\)





from above














\(\ds \)

\(=\)







\(\ds \frac 1 a \arcsec {\frac {\paren {-x} } a} + C\)





substituting back for $x$














\(\ds \)

\(=\)







\(\ds \frac 1 a \arcsec {\frac {\size x} a} + C\)





Definition of Absolute Value: $\size x = -x$ for $x < 0$



The result follows.
$\blacksquare$


Also see
Primitive of Reciprocal of $x \sqrt {x^2 + a^2}$
Primitive of Reciprocal of $x \sqrt {a^2 - x^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: General Rules of Integration: $14.45$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {x^2 - a^2}$: $14.213$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $45$.
1972: Frank Ayres, Jr. and J.C. Ault: Theory and Problems of Differential and Integral Calculus (SI ed.) ... (previous) ... (next): Chapter $25$: Fundamental Integration Formulas: $20$.




