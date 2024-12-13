# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_by_Sine_of_a_x



Theorem
$\ds \int x^2 \sin a x \rd x = \frac {2 x \sin a x} {a^2} + \paren {\frac 2 {a^3} - \frac {x^2} a} \cos a x + C$
where $C$ is an arbitrary constant.


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







\(\ds \sin a x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds -\frac {\cos a x} a\)





Primitive of $\sin a x$




Then:














\(\ds \int x^2 \sin a x \rd x\)

\(=\)







\(\ds x^2 \paren {-\frac {\cos a x} a} - \int 2 x \paren {-\frac {\cos a x} a} \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds -\frac {x^2} a \cos a x + \frac 2 a \int x \cos a x \rd x + C\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds -\frac {x^2} a \cos a x + \frac 2 a \paren {\frac {\cos a x} {a^2} + \frac {x \sin a x} a} + C\)





Primitive of $x \cos a x$














\(\ds \)

\(=\)







\(\ds \frac {2 x \sin a x} {a^2} + \paren {\frac 2 {a^3} - \frac {x^2} a} \cos a x + C\)





simplification



$\blacksquare$


Also see
Primitive of $x^2 \cos a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$: $14.341$




