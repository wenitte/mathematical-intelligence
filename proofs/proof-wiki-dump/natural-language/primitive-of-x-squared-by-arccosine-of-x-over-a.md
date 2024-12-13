# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_by_Arccosine_of_x_over_a



Theorem
$\ds \int x^2 \arccos \frac x a \rd x = \frac {x^3} 3 \arccos \frac x a - \frac {\paren {x^2 + 2 a^2} \sqrt {a^2 - x^2} } 9 + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arccos \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {-1} {\sqrt {a^2 - x^2} }\)





Derivative of $\arccos \dfrac x a$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds x^2\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {x^3} 3\)





Primitive of Power




Then:














\(\ds \int x^2 \arccos \frac x a \rd x\)

\(=\)







\(\ds \frac {x^3} 3 \arccos \frac x a - \int \frac {x^3} 3 \paren {\frac {-1} {\sqrt {a^2 - x^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^3} 3 \arccos \frac x a + \frac 1 3 \int \frac {x^3 \rd x} {\sqrt {a^2 - x^2} } + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac {x^3} 3 \arccos \frac x a + \frac 1 3 \paren {\frac {\paren {\sqrt {a^2 - x^2} }^3} 3 - a^2 \sqrt {a^2 - x^2} } + C\)





Primitive of $\dfrac {x^3} {\sqrt {a^2 - x^2} }$














\(\ds \)

\(=\)







\(\ds \frac {x^3} 3 \arccos \frac x a - \frac {\paren {x^2 + 2 a^2} \sqrt {a^2 - x^2} } 9 + C\)





simplifying



$\blacksquare$


Also see
Primitive of $x^2 \arcsin \dfrac x a$
Primitive of $x^2 \arctan \dfrac x a$
Primitive of $x^2 \arccot \dfrac x a$
Primitive of $x^2 \arcsec \dfrac x a$
Primitive of $x^2 \arccsc \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Trigonometric Functions: $14.479$




