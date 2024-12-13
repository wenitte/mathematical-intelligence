# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Root_of_2_a_x_minus_x_squared

Theorem
$\ds \int x \sqrt {2 a x - x^2} \rd x = \frac {\paren {x + a} \paren {2 x - 3 a} \sqrt {2 a x - x^2} } 6 + \frac {a^3} 2 \arcsin \dfrac {x - a} a + C$


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














\(\ds \int x \sqrt {2 a x - x^2} \rd x\)

\(=\)







\(\ds \int \paren {u + a} \sqrt {a^2 - u^2} \rd u\)




















\(\ds \)

\(=\)







\(\ds \int u \sqrt {a^2 - u^2} \rd u + a \int \sqrt {a^2 - u^2} \rd u\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {-\paren {\sqrt {a^2 - u^2} }^3} 3 - a \int \sqrt {a^2 - u^2} \rd u\)





Primitive of $u \sqrt {a^2 - u^2}$














\(\ds \)

\(=\)







\(\ds \frac {-\paren {a^2 - u^2} \sqrt {a^2 - u^2} } 3 - a \paren {\frac {u \sqrt {a^2 - u^2} } 2 + \frac {a^2} 2 \arcsin \frac u a} + C\)





Primitive of $\sqrt {a^2 - u^2}$: Arcsine Form














\(\ds \)

\(=\)







\(\ds \frac {-\paren {2 a x - x^2} \sqrt {2 a x - x^2} } 3 - \frac {a \paren {x - a} \sqrt {2 a x - x^2} } 2 + \frac {a^3} 2 \arcsin \frac {x - a} a + C\)





substituting for $u$ and simplifying



The result follows after algebra.


This needs considerable tedious hard slog to complete it.In particular: Well it would do if anyone cares to finish itTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\blacksquare$


Sources
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $51$.




