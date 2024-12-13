# 

Source: https://proofwiki.org/wiki/Primitive_of_Inverse_Hyperbolic_Secant_of_x_over_a



Theorem
$\ds \int \arsech \frac x a \rd x = x \arsech \dfrac x a + a \arcsin \dfrac x a + C$
where $\arsech$ denotes the real area hyperbolic secant.


Corollary
$\ds \int \sech^{-1} \frac x a \rd x = -x \paren {-\sech^{-1} \dfrac x a} - a \arcsin \dfrac x a + C$
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







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds x\)





Primitive of Constant




Then:














\(\ds \int \arsech \frac x a \rd x\)

\(=\)







\(\ds x \arsech \frac x a - \int x \paren {\frac {-a} {x \sqrt {a^2 - x^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \arsech \frac x a + a \int \frac {\d x} {\sqrt {a^2 - x^2} } + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds x \arsech \frac x a + \arcsin \frac x a + C\)





Primitive of $\dfrac 1 {\sqrt {a^2 - x^2} }$



$\blacksquare$


Also see
Primitive of $\arsinh \dfrac x a$
Primitive of $\arcosh \dfrac x a$
Primitive of $\artanh \dfrac x a$
Primitive of $\arcoth \dfrac x a$
Primitive of $\arcsch \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.666$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Inverse hyperbolic functions




