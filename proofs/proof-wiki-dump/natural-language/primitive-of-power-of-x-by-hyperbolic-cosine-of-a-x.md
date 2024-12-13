# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_by_Hyperbolic_Cosine_of_a_x



Theorem
$\ds \int x^m \cosh a x \rd x = \frac {x^m \sinh a x} a - \frac m a \int x^{m - 1} \sinh a x \rd x + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds x^m\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds m x^{m - 1}\)





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














\(\ds \int x^m \cosh a x \rd x\)

\(=\)







\(\ds x^m \paren {\frac {\sinh a x} a} - \int \paren {\frac {\sinh a x} a} \paren {m x^{m - 1} } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^m \sinh a x} a - \frac m a \int x^{m - 1} \sinh a x \rd x + C\)





Primitive of Constant Multiple of Function



$\blacksquare$


Also see
Primitive of $x^m \sinh a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cosh a x$: $14.585$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Back endpapers: A Brief Table of Integrals: $122$.



