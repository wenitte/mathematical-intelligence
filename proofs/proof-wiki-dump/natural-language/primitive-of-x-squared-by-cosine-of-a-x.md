# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_by_Cosine_of_a_x



Theorem
$\ds \int x^2 \cos a x \rd x = \frac {2 x \cos a x} {a^2} + \paren {\frac {x^2} a - \frac 2 {a^3} } \sin a x + C$
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







\(\ds \cos a x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {\sin a x} a\)





Primitive of $\cos a x$




Then:














\(\ds \int x^2 \map \cos {a x} \rd x\)

\(=\)







\(\ds x^2 \paren {\frac {\sin a x} a} - \int \paren {2 x \frac {\sin a x} a} \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^2 \sin a x} a - \frac 2 a \int x \sin a x \rd x + C\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {x^2 \sin a x} a - \frac 2 a \paren {\frac {\sin a x} {a^2} - \frac {x \cos a x} a} + C\)





Primitive of $x \sin a x$














\(\ds \)

\(=\)







\(\ds \frac {2 x \cos a x} {a^2} + \paren {\frac {x^2} a - \frac 2 {a^3} } \sin a x + C\)





simplification



$\blacksquare$


Also see
Primitive of $x^2 \sin a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cos a x$: $14.371$




