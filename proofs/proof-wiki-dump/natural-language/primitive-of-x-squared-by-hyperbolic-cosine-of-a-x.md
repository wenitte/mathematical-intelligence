# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_by_Hyperbolic_Cosine_of_a_x



Theorem
$\ds \int x^2 \cosh a x \rd x = \paren {\frac {x^2} a + \frac 2 {a^3} } \sinh a x - \frac {2 x \cosh a x} {a^2} + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds x^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds 2 x\)





Derivative of Power




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \cosh a x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {\sinh a x} a\)





Primitive of $\cosh a x$




Then:














\(\ds \int x^2 \sinh a x \rd x\)

\(=\)







\(\ds x^2 \paren {\frac {\sinh a x} a} - \int 2 x \paren {\frac {\sinh a x} a} \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^2 \sinh a x} a - \frac 2 a \int x \sinh a x \rd x + C\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {x^2 \sinh a x} a - \frac 2 a \paren {\frac {x \cosh a x} a - \frac {\sinh a x} {a^2} } + C\)





Primitive of $x \cosh a x$














\(\ds \)

\(=\)







\(\ds \paren {\frac {x^2} a + \frac 2 {a^3} } \sinh a x - \frac {2 x \cosh a x} {a^2} + C\)





simplification



$\blacksquare$


Also see
Primitive of $x^2 \sinh a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sinh a x$: $14.564$




