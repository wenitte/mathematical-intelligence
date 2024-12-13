# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_by_Inverse_Hyperbolic_Cosecant_of_x_over_a



Theorem
$\ds \int x^m \arcsch \frac x a \rd x = \begin{cases}
\ds \frac {x^{m + 1} } {m + 1} \arcsch \frac x a + \frac 1 {m + 1} \int \frac {x^m} {\sqrt {x^2 + a^2} } \rd x + C & : x > 0 \\
\ds \frac {x^{m + 1} } {m + 1} \arcsch \frac x a - \frac 1 {m + 1} \int \frac {x^m} {\sqrt {x^2 + a^2} } \rd x + C & : x < 0 \\
\end{cases}$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\rd v} {\rd x} \rd x = u v - \int v \frac {\rd u} {\rd x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arcsch \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\rd u} {\rd x}\)

\(=\)







\(\ds \frac {-a} {\size x \sqrt{a^2 + x^2} }\)





Derivative of $\arcsch \dfrac x a$




and let:














\(\ds \frac {\rd v} {\rd x}\)

\(=\)







\(\ds x^m\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {x^{m + 1} } {m + 1}\)





Primitive of Power




Then:














\(\ds \int \frac {\arcsch \dfrac x a \rd x} {x^2}\)

\(=\)







\(\ds \paren {\arcsch \frac x a} \paren {\frac {x^{m + 1} } {m + 1} } - \int \paren {\frac {x^{m + 1} } {m + 1} } \paren {\frac {-a} {\size x \sqrt{a^2 + x^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \begin {cases}
\ds \frac {x^{m + 1} } {m + 1} \arcsch \frac x a + \frac 1 {m + 1} \int \frac {x^m} {\sqrt {x^2 + a^2} } \rd x + C & : x > 0 \\
\ds \frac {x^{m + 1} } {m + 1} \arcsch \frac x a - \frac 1 {m + 1} \int \frac {x^m} {\sqrt {x^2 + a^2} } \rd x + C & : x < 0 \\
\end {cases}\)






Definition of Absolute Value



$\blacksquare$


Also see
Primitive of $x^m \arsinh \dfrac x a$
Primitive of $x^m \arcosh \dfrac x a$
Primitive of $x^m \artanh \dfrac x a$
Primitive of $x^m \arcoth \dfrac x a$
Primitive of $x^m \arsech \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.677$




