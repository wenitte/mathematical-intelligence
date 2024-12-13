# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Inverse_Hyperbolic_Sine_of_x_over_a



Theorem
$\ds \int x \arsinh \frac x a \rd x = \paren {\frac {x^2} 2 + \frac {a^2} 4} \arsinh \frac x a - \frac {x \sqrt {x^2 + a^2} } 4 + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arsinh \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 {\sqrt {x^2 + a^2} }\)





Derivative of $\arsinh \dfrac x a$




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














\(\ds \int x \arsinh \frac x a \rd x\)

\(=\)







\(\ds \frac {x^2} 2 \arsinh \frac x a - \int \frac {x^2} 2 \paren {\frac 1 {\sqrt {x^2 + a^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arsinh \frac x a - \frac 1 2 \int \frac {x^2 \rd x} {\sqrt {x^2 + a^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arsinh \frac x a - \frac 1 2 \paren {\frac {x \sqrt {x^2 + a^2} } 2 - \frac {a^2} 2 \arsinh \frac x a} + C\)





Primitive of $\dfrac {x^2} {\sqrt {x^2 + a^2} }$














\(\ds \)

\(=\)







\(\ds \paren {\frac {x^2} 2 + \frac {a^2} 4} \arsinh \frac x a - \frac {x \sqrt {x^2 + a^2} } 4 + C\)





simplifying



$\blacksquare$


Also see
Primitive of $x \arcosh \dfrac x a$
Primitive of $x \artanh \dfrac x a$
Primitive of $x \arcoth \dfrac x a$
Primitive of $x \arsech \dfrac x a$
Primitive of $x \arcsch \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.647$




