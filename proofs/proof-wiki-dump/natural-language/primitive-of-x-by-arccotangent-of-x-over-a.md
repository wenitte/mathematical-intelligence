# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Arccotangent_of_x_over_a



Theorem
$\ds \int x \arccot \frac x a \rd x = \frac {x^2 + a^2} 2 \arccot \frac x a + \frac {a x} 2 + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arccot \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {-a} {x^2 + a^2}\)





Derivative of $\arccot \dfrac x a$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {x^2} 2\)





Primitive of Power




Then:














\(\ds \int x \arccot \frac x a \rd x\)

\(=\)







\(\ds \frac {x^2} 2 \arccot \frac x a - \int \frac {x^2} 2 \paren {\frac {-a} {x^2 + a^2} } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arccot \frac x a + \frac a 2 \int \frac {x^2 \rd x} {x^2 + a^2} + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arccot \frac x a + \frac a 2 \paren {x - a \arctan {\frac x a} } + C\)





Primitive of $\dfrac {x^2} {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arccot \frac x a + \frac a 2 \paren {x - a \paren {\frac \pi 2 - \arccot {\frac x a} } } + C\)





Sum of Arctangent and Arccotangent














\(\ds \)

\(=\)







\(\ds \frac {x^2 + a^2} 2 \arccot \frac x a + \frac {a x} 2 - \frac {a^2 \pi} 2 + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {x^2 + a^2} 2 \arccot \frac x a + \frac {a x} 2 + C\)





subsuming $\dfrac {a^2 \pi} 2$ into the arbitrary constant



$\blacksquare$


Also see
Primitive of $x \arcsin \dfrac x a$
Primitive of $x \arccos \dfrac x a$
Primitive of $x \arctan \dfrac x a$
Primitive of $x \arcsec \dfrac x a$
Primitive of $x \arccsc \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Trigonometric Functions: $14.489$




