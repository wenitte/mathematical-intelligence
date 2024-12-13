# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_Root_of_2_a_x_minus_x_squared

Theorem
$\ds \int \paren {\sqrt {2 a x - x^2} }^n \rd x = \frac {\paren {x - a} \paren {\sqrt {2 a x - x^2} }^n} {n + 1} + \frac {n a^2} {n + 1} \int \paren {\sqrt {2 a x - x^2} }^{n - 2} \rd x$


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














\(\ds \int \paren {\sqrt {2 a x - x^2} }^n \rd x\)

\(=\)







\(\ds \int \paren {\sqrt {a^2 - u^2} }^n \rd u\)




















\(\ds \)

\(=\)







\(\ds \dfrac {u \paren {\sqrt {a^2 - u^2} }^n} {n + 1} - \dfrac {n a^2} {n + 1} \int \paren {\sqrt {a^2 - u^2} }^{n - 2} \rd u\)





Primitive of $\paren {\sqrt {a^2 - u^2} }^n$














\(\ds \)

\(=\)







\(\ds \frac {\paren {x - a} \paren {\sqrt {2 a x - x^2} }^n} {n + 1} + \frac {n a^2} {n + 1} \int \paren {\sqrt {2 a x - x^2} }^{n - 2} \rd x\)





substituting for $u$ and simplifying



$\blacksquare$


Sources
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $49$.




