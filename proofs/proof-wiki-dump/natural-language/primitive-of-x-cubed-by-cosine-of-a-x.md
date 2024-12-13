# 

Source: https://proofwiki.org/wiki/Primitive_of_x_cubed_by_Cosine_of_a_x



Theorem
$\ds \int x^3 \map \cos {a x} \rd x = \paren {\frac {3 x^2} {a^2} - \frac 6 {a^4} } \cos a x + \paren {\frac {x^3} a - \frac {6 x} {a^3} } \sin a x + C$
where $C$ is an arbitrary constant.


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds x^3\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds 3 x^2\)





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














\(\ds \int x^3 \map \cos {a x} \rd x\)

\(=\)







\(\ds x^3 \paren {\frac {\sin a x} a} - \int \paren {3 x^2 \frac {\sin a x} a} \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^3 \sin a x} a - \frac 3 a \int x^2 \sin a x \rd x + C\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {x^3 \sin a x} a - \frac 3 a \paren {\frac {2 x \sin a x} {a^2} + \paren {\frac 2 {a^3} - \frac {x^2} a} \cos a x} + C\)





Primitive of $x^2 \sin a x$














\(\ds \)

\(=\)







\(\ds \paren {\frac {3 x^2} {a^2} - \frac 6 {a^4} } \cos a x + \paren {\frac {x^3} a - \frac {6 x} {a^3} } \sin a x + C\)





simplification



$\blacksquare$


Also see
Primitive of $x^3 \sin a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cos a x$: $14.372$



