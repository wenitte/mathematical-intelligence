# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Inverse_Hyperbolic_Cotangent_of_x_over_a



Theorem
$\ds \int x \arcoth \frac x a \rd x = \frac {a x} 2 + \frac {x^2 - a^2} 2 \arcoth \frac x a + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arcoth \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac a {a^2 - x^2}\)





Derivative of $\arcoth \dfrac x a$




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














\(\ds \int x \arcoth \frac x a \rd x\)

\(=\)







\(\ds \frac {x^2} 2 \arcoth \frac x a - \int \frac {x^2} 2 \paren {\frac a {a^2 - x^2} } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arcoth \frac x a + \frac a 2 \int \frac {x^2 \rd x} {x^2 - a^2} + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arcoth \frac x a + \frac a 2 \paren {x - a \arcoth \frac x a} + C\)





Primitive of $\dfrac {x^2} {x^2 - a^2}$














\(\ds \)

\(=\)







\(\ds \frac {a x} 2 + \frac {x^2 - a^2} 2 \arcoth \frac x a + C\)





simplifying



$\blacksquare$


Also see
Primitive of $x \arsinh \dfrac x a$
Primitive of $x \arcosh \dfrac x a$
Primitive of $x \artanh \dfrac x a$
Primitive of $x \arsech \dfrac x a$
Primitive of $x \arcsch \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.662$




