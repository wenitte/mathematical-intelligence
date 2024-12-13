# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_2_a_x_minus_x_squared

Theorem
$\ds \int \sqrt {2 a x - x^2} \rd x = \frac {\paren {x - a} } 2 \sqrt {2 a x - x^2} + \frac {a^2} 2 \arcsin \frac {x - a} a + C$
where $C$ is an arbitrary constant.


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














\(\ds \int \sqrt {2 a x - x^2} \rd x\)

\(=\)







\(\ds \int \sqrt {a^2 - u^2} \rd u\)




















\(\ds \)

\(=\)







\(\ds \frac {u \sqrt {a^2 - u^2} } 2 + \frac {a^2} 2 \arcsin \frac u a + C\)





Primitive of $\sqrt {a^2 - u^2}$: Arcsine Form














\(\ds \)

\(=\)







\(\ds \frac {\paren {x - a} } 2 \sqrt {2 a x - x^2} + \frac {a^2} 2 \arcsin \frac {x - a} a + C\)





substituting for $u$ and simplifying



$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions: $3.3.48$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $48$.




