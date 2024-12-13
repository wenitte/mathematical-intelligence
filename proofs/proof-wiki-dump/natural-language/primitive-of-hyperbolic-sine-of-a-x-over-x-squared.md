# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Sine_of_a_x_over_x_squared



Theorem
$\ds \int \frac {\sinh a x \ \d x} {x^2} = -\frac {\sinh a x} x + a \int \frac {\cosh a x \rd x} x$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \sinh a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds a \cosh a x\)





Derivative of $\sinh a x$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \frac 1 {x^2}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds -\frac 1 x\)





Primitive of Power




Then:














\(\ds \int \frac {\sinh a x \rd x} {x^2}\)

\(=\)







\(\ds \int \sinh a x \frac 1 {x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \sinh a x \paren {-\frac 1 x} - \int \paren {-\frac 1 x} a \cosh a x \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds -\frac {\sinh a x} x + a \int \frac {\cosh a x \rd x} x\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac {\cosh a x} x$
Primitive of $\dfrac {\cosh a x} {x^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sinh a x$: $14.544$




