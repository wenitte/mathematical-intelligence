# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Hyperbolic_Sine_of_a_x



Theorem
$\ds \int x \sinh a x \rd x = \frac {x \cosh a x} a - \frac {\sinh a x} {a^2} + C$


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







\(\ds \sinh a x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {\cosh a x} a\)





Primitive of $\sinh a x$




Then:














\(\ds \int x \sinh a x \rd x\)

\(=\)







\(\ds x \paren {\frac {\cosh a x} a} - \int \paren {\frac {\cosh a x} a} \times 1 \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x \cosh a x} a - \frac 1 a \int \cosh a x \rd x + C\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {x \cosh a x} a - \frac 1 a \paren {\frac {\sinh a x} a} + C\)





Primitive of $\cosh a x$














\(\ds \)

\(=\)







\(\ds \frac {x \cosh a x} a - \frac {\sinh a x} {a^2} + C\)





simplification



$\blacksquare$


Also see
Primitive of $x \cosh a x$
Primitive of $x \tanh a x$
Primitive of $x \coth a x$
Primitive of $x \sech a x$
Primitive of $x \csch a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sinh a x$: $14.541$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Back endpapers: A Brief Table of Integrals: $119$.




