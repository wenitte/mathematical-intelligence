# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_by_Inverse_Hyperbolic_Cosine_of_x_over_a



Theorem
$\ds \int x^m \arcosh \frac x a \rd x = \dfrac {x^{m + 1} } {m + 1} \arcosh \dfrac x a - \dfrac 1 {m + 1} \int \dfrac {x^{m + 1} } {\sqrt {x^2 - a^2} } \rd x + C$
where $\arcosh$ denotes the real area hyperbolic cosine.


Corollary
$\ds \int x^m \paren {-\cosh^{-1} \frac x a} \rd x = \dfrac {x^{m + 1} } {m + 1} \paren {-\cosh^{-1} \frac x a} + \dfrac 1 {m + 1} \int \dfrac {x^{m + 1} } {\sqrt {x^2 - a^2} } \rd x + C$
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







\(\ds x^m\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1}\)





Primitive of Power




Then:














\(\ds \int \frac {\arcosh \dfrac x a \rd x} {x^2}\)

\(=\)







\(\ds \paren {\arcosh \frac x a} \paren {\frac {x^{m + 1} } {m + 1} } - \int \paren {\frac {x^{m + 1} } {m + 1} } \paren {\frac 1 {\sqrt {x^2 - a^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \arcosh \frac x a - \frac 1 {m + 1}  \int \frac {x^{m + 1} } {\sqrt {x^2 - a^2} } \rd x + C\)





simplifying



$\blacksquare$


Also see
Primitive of $x^m \arsinh \dfrac x a$
Primitive of $x^m \artanh \dfrac x a$
Primitive of $x^m \arcoth \dfrac x a$
Primitive of $x^m \arsech \dfrac x a$
Primitive of $x^m \arcsch \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.673$




