# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_by_Inverse_Hyperbolic_Secant_of_x_over_a



Theorem
$\ds \int x^m \arsech \frac x a \rd x = \dfrac {x^{m + 1} } {m + 1} \arsech \dfrac x a + \dfrac 1 {m + 1} \int \dfrac {x^m} {\sqrt {a^2 - x^2} } \rd x + C$
where $\arsech$ denotes the real area hyperbolic secant.


Corollary
$\ds \int x^m \paren {-\sech^{-1} \frac x a} \rd x = -\dfrac {x^{m + 1} } {m + 1} \paren {-\sech^{-1} \frac x a} \dfrac x a - \dfrac 1 {m + 1} \int \dfrac {x^m} {\sqrt {a^2 - x^2} } \rd x + C$
where $-\sech^{-1}$ denotes the negative branch of the real inverse hyperbolic secant multifunction.


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arsech \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {-a} {x \sqrt {a^2 - x^2} }\)





Derivative of $\arsech \dfrac x a$




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














\(\ds \int \frac {\arsech \dfrac x a \rd x} {x^2}\)

\(=\)







\(\ds \paren {\arsech \frac x a} \paren {\frac {x^{m + 1} } {m + 1} } - \int \paren {\frac {x^{m + 1} } {m + 1} } \paren {\frac {-a} {x \sqrt {a^2 - x^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1} \arsech \frac x a + \frac a {m + 1}  \int \frac {x^m} {\sqrt {x^2 - a^2} } \rd x + C\)





simplifying



$\blacksquare$


Also see
Primitive of $x^m \arsinh \dfrac x a$
Primitive of $x^m \arcosh \dfrac x a$
Primitive of $x^m \artanh \dfrac x a$
Primitive of $x^m \arcoth \dfrac x a$
Primitive of $x^m \arcsch \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.676$




