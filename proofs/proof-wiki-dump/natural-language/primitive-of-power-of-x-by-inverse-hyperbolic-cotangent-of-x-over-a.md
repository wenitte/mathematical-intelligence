# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_by_Inverse_Hyperbolic_Cotangent_of_x_over_a



Theorem
$\ds \int x^m \arcoth \frac x a \rd x = \frac {x^{m + 1} } {m + 1} \arcoth \frac x a - \frac a {m + 1} \int \frac {x^{m + 1} } {a^2 - x^2} \rd x + C$


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







\(\ds x^m\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1}\)





Primitive of Power




Then:














\(\ds \int x^m \arcoth \frac x a \rd x\)

\(=\)







\(\ds \paren {\arcoth \frac x a} \paren {\frac {x^{m + 1} } {m + 1} } - \int \paren {\frac {x^{m + 1} } {m + 1} } \paren {\frac {-a} {x^2 - a^2} } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \arcoth \frac x a - \frac a {m + 1} \int \frac {x^{m + 1} } {a^2 - x^2} \rd x + C\)





simplifying



$\blacksquare$


Also see
Primitive of $x^m \arsinh \dfrac x a$
Primitive of $x^m \arcosh \dfrac x a$
Primitive of $x^m \artanh \dfrac x a$
Primitive of $x^m \arsech \dfrac x a$
Primitive of $x^m \arcsch \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.675$




