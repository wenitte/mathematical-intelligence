# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Square_of_Hyperbolic_Cosine_of_a_x



Theorem
$\ds \int x \cosh^2 a x \rd x = \frac {x \sinh 2 a x} {4 a} - \frac {\cosh 2 a x} {8 a^2} + \frac {x^2} 4 + C$


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







\(\ds \cosh^2 a x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {\sinh 2 a x} {4 a} + \frac x 2\)





Primitive of $\cosh^2 a x$




Then:














\(\ds \int x \cosh^2 a x \rd x\)

\(=\)







\(\ds x \paren {\frac {\sinh 2 a x} {4 a} + \frac x 2} - \int \paren {\frac {\sinh 2 a x} {4 a} + \frac x 2} \times 1 \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x \sinh 2 a x} {4 a} + \frac {x^2} 2 - \frac 1 {4 a} \int \sinh 2 a x \rd x - \frac 1 2 \int x \rd x + C\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {x \sinh 2 a x} {4 a} + \frac {x^2} 2 - \frac 1 {4 a} \int \sinh 2 a x \rd x - \frac {x^2} 4 + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {x \sinh 2 a x} {4 a} + \frac {x^2} 2 - \frac 1 {4 a} \frac {\cosh 2 a x} {2 a} - \frac {x^2} 4 + C\)





Primitive of $\sinh a x$














\(\ds \)

\(=\)







\(\ds \frac {x \sinh 2 a x} {4 a} - \frac {\cosh 2 a x} {8 a^2} + \frac {x^2} 4 + C\)





simplifying



$\blacksquare$


Also see
Primitive of $x \sinh^2 a x$
Primitive of $x \tanh^2 a x$
Primitive of $x \coth^2 a x$
Primitive of $x \sech^2 a x$
Primitive of $x \csch^2 a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cosh a x$: $14.570$




