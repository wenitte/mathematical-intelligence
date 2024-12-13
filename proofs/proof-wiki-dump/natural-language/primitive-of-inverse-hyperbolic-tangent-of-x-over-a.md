# 

Source: https://proofwiki.org/wiki/Primitive_of_Inverse_Hyperbolic_Tangent_of_x_over_a



Theorem
$\ds \int \artanh \frac x a \rd x = x \artanh \dfrac x a + \frac {a \map \ln {a^2 - x^2} } 2 + C$
for $x^2 < a^2$.


Proof 1
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







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds x\)





Primitive of Constant




Then:














\(\ds \int \artanh \frac x a \rd x\)

\(=\)







\(\ds x \artanh \frac x a - \int x \paren {\frac a {a^2 - x^2} } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \artanh \frac x a - a \int \frac {x \rd x} {a^2 - x^2} + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds x \artanh \frac x a - a \paren {-\frac 1 2 \map \ln {a^2 - x^2} } + C\)





Primitive of $\dfrac x {a^2 - x^2}$














\(\ds \)

\(=\)







\(\ds x \artanh \dfrac x a + \frac {a \map \ln {a^2 - x^2} } 2 + C\)





simplifying



$\blacksquare$


Proof 2













\(\ds \int \artanh x \rd x\)

\(=\)







\(\ds x \artanh x + \frac {\map \ln {1 - x^2} } 2 + C\)





Primitive of $\artanh x$








\(\ds \leadsto \ \ \)





\(\ds \int \artanh \frac x a \rd x\)

\(=\)







\(\ds \frac 1 {1 / a} \paren {\frac x a \artanh \frac x a + \frac 1 2 \map \ln {1 - \paren {\frac x a}^2} } + C\)





Primitive of Function of Constant Multiple














\(\ds \)

\(=\)







\(\ds x \artanh \dfrac x a + \frac {a \map \ln {a^2 - x^2} } 2 + C\)





after simplifying



$\blacksquare$


Also see
Primitive of $\arsinh \dfrac x a$
Primitive of $\arcosh \dfrac x a$
Primitive of $\arcoth \dfrac x a$
Primitive of $\arsech \dfrac x a$
Primitive of $\arcsch \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.656$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Inverse hyperbolic functions




