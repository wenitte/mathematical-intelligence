# 

Source: https://proofwiki.org/wiki/Primitive_of_Cosine_of_a_x_over_x_squared



Theorem
$\ds \int \frac {\cos a x \rd x} {x^2} = \frac {-\cos a x} x - a \int \frac {\sin a x \rd x} x$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \cos a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds -a \sin a x\)





Derivative of $\cos a x$




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














\(\ds \int \frac {\cos a x \rd x} {x^2}\)

\(=\)







\(\ds \int \cos a x \frac 1 {x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \cos a x \paren {-\frac 1 x} - \int \paren {-\frac 1 x} \paren {-a \sin a x} \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {-\cos a x} x - a \int \frac {\sin a x \rd x} x\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac {\sin a x} x$
Primitive of $\dfrac {\sin a x} {x^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cos a x$: $14.374$




