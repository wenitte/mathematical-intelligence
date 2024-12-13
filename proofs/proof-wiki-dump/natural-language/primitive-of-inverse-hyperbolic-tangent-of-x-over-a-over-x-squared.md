# 

Source: https://proofwiki.org/wiki/Primitive_of_Inverse_Hyperbolic_Tangent_of_x_over_a_over_x_squared



Theorem
$\ds \int \frac 1 {x^2} \artanh \dfrac x a \rd x = -\frac 1 x \artanh \dfrac x a + \frac 1 {2 a} \map \ln {\frac {x^2} {a^2 - x^2} } + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \artanh \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac a {a^2 - x^2}\)





Derivative of $\artanh \dfrac x a$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \frac 1 {x^2}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {-1} x\)





Primitive of Power




Then:














\(\ds \int \frac 1 {x^2} \artanh \dfrac x a \rd x\)

\(=\)







\(\ds \paren {\artanh \frac x a} \paren {\frac {-1} x} - \int \paren {\frac {-1} x} \paren {\frac a {a^2 - x^2} } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac 1 x \artanh \dfrac x a + a \int \frac {\d x} {x \paren {a^2 - x^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 x \artanh \dfrac x a + a \paren {\frac 1 {2 a^2} \map \ln {\frac {x^2} {a^2 - x^2} } } + C\)





Primitive of $\dfrac 1 {x \paren {a^2 - x^2} }$














\(\ds \)

\(=\)







\(\ds \frac 1 x \artanh \dfrac x a + \frac 1 {2 a} \map \ln {\frac {x^2} {a^2 - x^2} } + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac 1 {x^2} \arsinh \frac x a$
Primitive of $\dfrac 1 {x^2} \arcosh \frac x a$
Primitive of $\dfrac 1 {x^2} \arcoth \frac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.660$




