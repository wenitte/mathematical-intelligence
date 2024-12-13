# 

Source: https://proofwiki.org/wiki/Primitive_of_Sine_of_a_x_over_x_squared



Theorem
$\ds \int \frac {\sin a x \rd x} {x^2} = -\frac {\sin a x} x + a \int \frac {\cos a x \rd x} x + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \sin a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds a \cos a x\)





Derivative of $\sin a x$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \frac 1 {x^2}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds - \frac 1 x\)





Primitive of Power




Then:














\(\ds \int \frac {\sin a x \rd x} {x^2}\)

\(=\)







\(\ds \int \sin a x \frac 1 {x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \sin a x \paren {-\frac 1 x} - \int \paren {-\frac 1 x} a \cos a x \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds -\frac {\sin a x} x + a \int \frac {\cos a x \rd x} x + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac {\cos a x} x$
Primitive of $\dfrac {\cos a x} {x^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$: $14.344$




