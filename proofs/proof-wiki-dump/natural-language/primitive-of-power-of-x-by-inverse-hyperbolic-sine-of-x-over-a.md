# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_by_Inverse_Hyperbolic_Sine_of_x_over_a



Theorem
$\ds \int x^m \sinh^{-1} \frac x a \rd x = \frac {x^{m + 1} } {m + 1} \sinh^{-1} \frac x a - \frac 1 {m + 1} \int \frac {x^{m + 1} } {\sqrt {x^2 + a^2} } \rd x + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \sinh^{-1} \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 {\sqrt {x^2 + a^2} }\)





Derivative of $\sinh^{-1} \dfrac x a$




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














\(\ds \int \frac {\sinh^{-1} \dfrac x a \rd x} {x^2}\)

\(=\)







\(\ds \paren {\sinh^{-1} \frac x a} \paren {\frac {x^{m + 1} } {m + 1} } - \int \paren {\frac {x^{m + 1} } {m + 1} } \paren {\frac 1 {\sqrt {x^2 + a^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \sinh^{-1} \frac x a - \frac 1 {m + 1}  \int \frac {x^{m + 1} } {\sqrt {x^2 + a^2} } \rd x + C\)





simplifying



$\blacksquare$


Also see
Primitive of $x^m \cosh^{-1} \dfrac x a$
Primitive of $x^m \tanh^{-1} \dfrac x a$
Primitive of $x^m \coth^{-1} \dfrac x a$
Primitive of $x^m \sech^{-1} \dfrac x a$
Primitive of $x^m \csch^{-1} \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.672$




