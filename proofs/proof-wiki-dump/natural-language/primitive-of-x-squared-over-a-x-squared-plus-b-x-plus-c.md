# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_a_x_squared_plus_b_x_plus_c



Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {x^2 \rd x} {a x^2 + b x + c} = \frac x a - \frac b {2 a^2} \ln \size {a x^2 + b x + c} + \frac {b^2 - 2 a c} {2 a^2} \int \frac {\d x} {a x^2 + b x + c}$


Proof













\(\ds \int \frac {x^2 \rd x} {a x^2 + b x + c}\)

\(=\)







\(\ds \int \frac 1 a \paren {1 - \frac {b x + c} {a x^2 + b x + c} } \rd x\)





by division














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \rd x - \frac b a \int \frac {x \rd x} {a x^2 + b x + c} - \frac c a \int \frac {\d x} {a x^2 + b x + c}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac x a - \frac b a \int \frac {x \rd x} {a x^2 + b x + c} - \frac c a \int \frac {\d x} {a x^2 + b x + c}\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds \frac x a - \frac b a \paren {\frac 1 {2 a} \ln \size {a x^2 + b x + c} - \frac b {2 a} \int \frac {\d x} {a x^2 + b x + c} } - \frac c a \int \frac {\d x} {a x^2 + b x + c}\)





Primitive of $\dfrac x {a x^2 + b x + c}$














\(\ds \)

\(=\)







\(\ds \frac x a - \frac b {2 a^2} \ln \size {a x^2 + b x + c} + \frac {b^2} {2 a^2} \int \frac {\d x} {a x^2 + b x + c} - \frac {2 a c} {2 a^2} \int \frac {\d x} {a x^2 + b x + c}\)





multiplying out














\(\ds \)

\(=\)







\(\ds \frac x a - \frac b {2 a^2} \ln \size {a x^2 + b x + c} + \frac {b^2 - 2 a c} {2 a^2} \int \frac {\d x} {a x^2 + b x + c}\)





simplification



$\blacksquare$


Examples
Primitive of $\dfrac {6 x^2 + 10 x + 5} {3 x^2 + 4 x + 2}$
$\ds \int \dfrac {6 x^2 + 10 x + 5} {3 x^2 + 4 x + 2} \rd x = 2 x + \dfrac 1 3 \ln \size {3 x^3 + 4 x + 2} - \dfrac 1 {3 \sqrt 2} \arctan \dfrac {3 x + 2} {\sqrt 2} + C$


Also see
Primitive of $\dfrac 1 {a x^2 + b x + c}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x^2 + b x + c$: $14.267$




