# 

Source: https://proofwiki.org/wiki/Primitive_of_Inverse_Hyperbolic_Cosecant_of_x_over_a



Theorem
$\ds \int \arcsch \frac x a \rd x = \begin {cases}
x \arcsch \dfrac x a + a \arsinh \dfrac x a + C & : x > 0 \\
x \arcsch \dfrac x a - a \arsinh \dfrac x a + C & : x < 0
\end {cases}$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arcsch \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {-a} {\size x \sqrt {a^2 + x^2} }\)





Derivative of $\arcsch \dfrac x a$




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














\(\ds \int \arcsch \frac x a \rd x\)

\(=\)







\(\ds x \arcsch \frac x a - \int x \paren {\frac {-a} {\size x \sqrt {a^2 + x^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \arcsch \frac x a + a \int \frac {x \rd x} {\size x \sqrt {a^2 + x^2} } + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds x \arcsch \frac x a \begin {cases} \mathop + a \ds \int \dfrac {\d x} {\sqrt {a^2 + x^2} } + C & : x > 0 \\ \mathop - a \ds \int \dfrac {\d x} {\sqrt {a^2 + x^2} } + C & : x < 0 \end {cases}\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds \begin {cases} x \arcsch \dfrac x a + a \arsinh \dfrac x a + C & : x > 0 \\ x \arcsch \dfrac x a - a \arsinh \dfrac x a + C & : x < 0 \end {cases}\)





Primitive of $\dfrac 1 {\sqrt {a^2 + x^2} }$



$\blacksquare$


Also see
Primitive of $\arsinh \dfrac x a$
Primitive of $\arcosh \dfrac x a$
Primitive of $\artanh \dfrac x a$
Primitive of $\arcoth \dfrac x a$
Primitive of $\arsech \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.669$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Inverse hyperbolic functions




