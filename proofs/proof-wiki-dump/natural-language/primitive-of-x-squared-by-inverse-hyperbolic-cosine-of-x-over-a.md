# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_by_Inverse_Hyperbolic_Cosine_of_x_over_a



Theorem
$\ds \int x^2 \arcosh \frac x a \rd x = \dfrac {x^3} 3 \arcosh \dfrac x a - \dfrac {\paren {x^2 + 2 a^2} \sqrt {x^2 - a^2} } 9 + C$
where $\arcosh$ denotes the real area hyperbolic cosine.


Corollary
$\ds \int x^2 \paren {-\cosh^{-1} \dfrac x a} \rd x = \dfrac {x^3} 3 \paren {-\cosh^{-1} \dfrac x a} - \dfrac {\paren {x^2 + 2 a^2} \sqrt {x^2 - a^2} } 9 + C$
where $-\cosh^{-1}$ denotes the negative branch of the real inverse hyperbolic cosine multifunction.


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arcosh \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 {\sqrt {x^2 - a^2} }\)





Derivative of $\arcosh \dfrac x a$




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














\(\ds \int x^2 \arcosh \frac x a \rd x\)

\(=\)







\(\ds \frac {x^3} 3 \arcosh \frac x a - \int \frac {x^3} 3 \paren {\frac 1 {\sqrt {x^2 - a^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^3} 3 \arcosh \frac x a - \frac 1 3 \int \frac {x^3 \rd x} {\sqrt {x^2 - a^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {x^3} 3 \arcosh \frac x a - \frac 1 3 \paren {\frac {\paren {\sqrt {x^2 - a^2} }^3} 3 + a^2 \sqrt {x^2 - a^2} } + C\)





Primitive of $\dfrac {x^3} {\sqrt {x^2 - a^2} }$














\(\ds \)

\(=\)







\(\ds \frac {x^3} 3 \arcosh \frac x a - \frac {\paren {x^2 + 2 a^2} \sqrt {x^2 - a^2} } 9 + C\)





simplifying



$\blacksquare$


Also see
Primitive of $x^2 \arsinh \dfrac x a$
Primitive of $x^2 \artanh \dfrac x a$
Primitive of $x^2 \arcoth \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.653$




