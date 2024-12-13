# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Square_of_Hyperbolic_Cosecant_of_a_x



Theorem
$\ds \int x \csch^2 a x \rd x = \frac {-x \coth a x} a + \frac 1 {a^2} \ln \size {\sinh a x} + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds 1\)





Derivative of Identity Function




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \csch^2 a x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds -\frac {\coth a x} a\)





Primitive of $\csch^2 a x$




Then:














\(\ds \int x \csch^2 a x \rd x\)

\(=\)







\(\ds x \paren {-\frac {\coth a x} a} - \int \paren {-\frac {\coth a x} a} \times 1 \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {-x \coth a x} a + \frac 1 a \int \coth a x \rd x + C\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {-x \coth a x} a + \frac 1 a \frac {\ln \size {\sinh a x} } a + C\)





Primitive of $\coth a x$














\(\ds \)

\(=\)







\(\ds \frac {-x \coth a x} a + \frac 1 {a^2} \ln \size {\sinh a x} + C\)





simplifying



$\blacksquare$


Also see
Primitive of $x \sinh^2 a x$
Primitive of $x \cosh^2 a x$
Primitive of $x \tanh^2 a x$
Primitive of $x \coth^2 a x$
Primitive of $x \sech^2 a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\csch a x$: $14.642$




