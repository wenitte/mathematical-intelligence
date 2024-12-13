# 

Source: https://proofwiki.org/wiki/Primitive_of_Inverse_Hyperbolic_Cosine_of_x_over_a_over_x_squared



Theorem
$\ds \int \frac 1 {x^2} \arcosh \dfrac x a \rd x = -\frac 1 x \arcosh \dfrac x a + \frac 1 a \arcsec \size {\frac x a} + C$
where $\arcosh$ denotes the real area hyperbolic cosine.


Corollary
$\ds \int \frac 1 {x^2} \paren {-\cosh^{-1} \dfrac x a} \rd x = -\frac 1 x \paren {-\cosh^{-1} \dfrac x a} - \frac 1 a \arcsec \size {\frac x a} + C$
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







\(\ds \frac 1 {x^2}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {-1} x\)





Primitive of Power




Then:














\(\ds \int \frac 1 {x^2} \arcosh \dfrac x a \rd x\)

\(=\)







\(\ds \paren {\arcosh \frac x a} \paren {\frac {-1} x} - \int \paren {\frac {-1} x} \paren {\frac 1 {\sqrt {x^2 - a^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds -\frac 1 x \arcosh \dfrac x a + \int \frac {\d x} {x \sqrt {x^2 - a^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds -\frac 1 x \arcosh \dfrac x a + \frac 1 a \arcsec \size {\frac x a} + C\)





Primitive of $\dfrac 1 {x \sqrt {x^2 - a^2} }$



$\blacksquare$


Also see
Primitive of $\dfrac {\arsinh \frac x a} {x^2}$
Primitive of $\dfrac {\artanh \frac x a} {x^2}$
Primitive of $\dfrac {\arcoth \frac x a} {x^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.655$




