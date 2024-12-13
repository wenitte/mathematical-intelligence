# 

Source: https://proofwiki.org/wiki/Primitive_of_Inverse_Hyperbolic_Sine_of_x_over_a



Theorem
$\ds \int \arsinh \frac x a \rd x = x \arsinh \frac x a - \sqrt {x^2 + a^2} + C$


Proof 1
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







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds x\)





Primitive of Constant




Then:














\(\ds \int \arsinh \frac x a \rd x\)

\(=\)







\(\ds x \arsinh \frac x a - \int x \paren {\frac 1 {\sqrt {x^2 + a^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \arsinh \frac x a - \int \frac {x \rd x} {\sqrt {x^2 + a^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds x \arsinh \frac x a - \sqrt {x^2 + a^2} + C\)





Primitive of $\dfrac x {\sqrt {x^2 + a^2} }$



$\blacksquare$


Proof 2













\(\ds \int \arsinh x \rd x\)

\(=\)







\(\ds x \arsinh x - \sqrt {x^2 + 1} + C\)





Primitive of $\arsinh x$








\(\ds \leadsto \ \ \)





\(\ds \int \arsinh \frac x a \rd x\)

\(=\)







\(\ds \frac 1 {1 / a} \paren {\frac x a \arsinh \frac x a - \sqrt {\paren {\frac x a}^2 + 1} } + C\)





Primitive of Function of Constant Multiple














\(\ds \)

\(=\)







\(\ds x \arsinh \frac x a - \sqrt {x^2 + a^2} + C\)





after simplifying



$\blacksquare$


Also see
Primitive of $\arcosh \dfrac x a$
Primitive of $\artanh \dfrac x a$
Primitive of $\arcoth \dfrac x a$
Primitive of $\arsech \dfrac x a$
Primitive of $\arcsch \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.646$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Inverse hyperbolic functions




