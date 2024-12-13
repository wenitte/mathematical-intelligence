# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Square_of_Hyperbolic_Secant_of_a_x



Theorem
$\ds \int x \sech^2 a x \rd x = \frac {x \tanh a x} a - \frac 1 {a^2} \ln \size {\cosh a x} + C$


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







\(\ds \sech^2 a x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {\tanh a x} a\)





Primitive of $\sech^2 a x$




Then:














\(\ds \int x \sech^2 a x \rd x\)

\(=\)







\(\ds x \paren {\frac {\tanh a x} a} - \int \paren {\frac {\tanh a x} a} \times 1 \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x \tanh a x} a - \frac 1 a \int \tanh a x \rd x + C\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {x \tanh a x} a - \frac 1 a \frac {\ln \size {\cosh a x} } a + C\)





Primitive of $\tanh a x$














\(\ds \)

\(=\)







\(\ds \frac {x \tanh a x} a - \frac 1 {a^2} \ln \size {\cosh a x} + C\)





simplifying



$\blacksquare$


Also see
Primitive of $x \sinh^2 a x$
Primitive of $x \cosh^2 a x$
Primitive of $x \tanh^2 a x$
Primitive of $x \coth^2 a x$
Primitive of $x \csch^2 a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sech a x$: $14.632$




