# 

Source: https://proofwiki.org/wiki/Primitive_of_Inverse_Hyperbolic_Sine_of_x_over_a_over_x_squared



Theorem
$\ds \int \frac 1 {x^2} \arsinh \dfrac x a \rd x = -\frac 1 x \arsinh \dfrac x a - \frac 1 a \map \ln {\frac a x + \frac {\sqrt {a^2 + x^2} } {\size x} }$


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







\(\ds \frac 1 {x^2}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {-1} x\)





Primitive of Power




Then:














\(\ds \int \frac 1 {x^2} \arsinh \dfrac x a \rd x\)

\(=\)







\(\ds \paren {\arsinh \frac x a} \paren {\frac {-1} x} - \int \paren {\frac {-1} x} \paren {\frac 1 {\sqrt {x^2 + a^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds -\frac 1 x \arsinh \dfrac x a + \int \frac {\d x} {x \sqrt {x^2 + a^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds -\frac 1 x \arsinh \dfrac x a - \frac 1 a \map \ln {\frac a x + \frac {\sqrt {a^2 + x^2} } {\size x} } + C\)





Primitive of $\dfrac 1 {x \sqrt {x^2 + a^2} }$



$\blacksquare$


Also see
Primitive of $\dfrac 1 {x^2} \arcosh \dfrac x a$
Primitive of $\dfrac 1 {x^2} \artanh \dfrac x a$
Primitive of $\dfrac 1 {x^2} \arcoth \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.650$




