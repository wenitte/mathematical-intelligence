# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_by_Inverse_Hyperbolic_Cotangent_of_x_over_a



Theorem
$\ds \int x^2 \arcoth \frac x a \rd x = \frac {a x^2} 6 + \frac {x^3} 3 \arcoth \frac x a + \frac {a^3} 6 \map \ln {x^2 - a^2} + C$


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







\(\ds \frac {-a} {x^2 - a^2}\)





Derivative of $\arcoth \dfrac x a$




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














\(\ds \int x^2 \arcoth \frac x a \rd x\)

\(=\)







\(\ds \frac {x^3} 3 \arcoth \frac x a - \int \frac {x^3} 3 \paren {\frac {-a} {x^2 - a^2} } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^3} 3 \arcoth \frac x a + \frac a 3 \int \frac {x^3 \rd x} {x^2 - a^2} + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {x^3} 3 \arcoth \frac x a + \frac a 3 \paren {\frac {x^2} 2 + \frac {a^2} 2 \map \ln {x^2 - a^2} } + C\)





Primitive of $\dfrac {x^3} {x^2 - a^2}$














\(\ds \)

\(=\)







\(\ds \frac {a x^2} 6 + \frac {x^3} 3 \arcoth \frac x a + \frac {a^3} 6 \map \ln {x^2 - a^2} + C\)





simplifying



$\blacksquare$


Also see
Primitive of $x^2 \arsinh \dfrac x a$
Primitive of $x^2 \arcosh \dfrac x a$
Primitive of $x^2 \artanh \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.663$




