# 

Source: https://proofwiki.org/wiki/Primitive_of_Inverse_Hyperbolic_Cotangent_of_x_over_a



Theorem
$\ds \int \arcoth \frac x a \rd x = x \arcoth \dfrac x a + \frac {a \map \ln {x^2 - a^2} } 2 + C$
for $x^2 > a^2$.


Proof 1
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







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds x\)





Primitive of Constant




Then:














\(\ds \int \arcoth \frac x a \rd x\)

\(=\)







\(\ds x \arcoth \frac x a - \int x \paren {\frac {-a} {x^2 - a^2} } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \arcoth \frac x a + a \int \frac {x \rd x} {x^2 - a^2} + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds x \arcoth \frac x a + a \paren {\frac 1 2 \map \ln {x^2 - a^2} } + C\)





Primitive of $\dfrac x {x^2 - a^2}$














\(\ds \)

\(=\)







\(\ds x \arcoth \dfrac x a + \frac {a \map \ln {x^2 - a^2} } 2 + C\)





simplifying



$\blacksquare$


Proof 2













\(\ds \int \arcoth x \rd x\)

\(=\)







\(\ds x \arcoth x + \frac {\map \ln {x^2 - 1} } 2 + C\)





Primitive of $\arcoth x$








\(\ds \leadsto \ \ \)





\(\ds \int \arcoth \frac x a \rd x\)

\(=\)







\(\ds \frac 1 {1 / a} \paren {\frac x a \arcoth \frac x a + \frac 1 2 \map \ln {\paren {\frac x a}^2 - 1} } + C\)





Primitive of Function of Constant Multiple














\(\ds \)

\(=\)







\(\ds x \arcoth \dfrac x a + \frac {a \map \ln {x^2 - a^2} } 2 + C\)





after simplifying



$\blacksquare$


Also see
Primitive of $\arsinh \dfrac x a$
Primitive of $\arcosh \dfrac x a$
Primitive of $\artanh \dfrac x a$
Primitive of $\arsech \dfrac x a$
Primitive of $\arcsch \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.661$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Inverse hyperbolic functions




