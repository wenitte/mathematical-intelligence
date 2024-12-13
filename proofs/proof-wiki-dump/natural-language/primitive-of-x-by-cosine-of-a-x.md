# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Cosine_of_a_x



Theorem
$\ds \int x \cos a x \rd x = \frac {\cos a x} {a^2} + \frac {x \sin a x} a + C$
where $C$ is an arbitrary constant.


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







\(\ds \cos a x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {\sin a x} a\)





Primitive of $\cos a x$




Then:














\(\ds \int x \map \cos {a x} \rd x\)

\(=\)







\(\ds x \paren {\frac {\sin a x} a} - \int \paren {\frac {\sin a x} a} \times 1 \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x \sin a x} a - \frac 1 a \int \sin a x \rd x + C\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {x \sin a x} a - \frac 1 a \paren {\frac {-\cos a x} a} + C\)





Primitive of $\sin a x$














\(\ds \)

\(=\)







\(\ds \frac {\cos a x} {a^2} + \frac {x \sin a x} a + C\)





simplification



$\blacksquare$


Also see
Primitive of $x \sin a x$
Primitive of $x \tan a x$
Primitive of $x \cot a x$
Primitive of $x \sec a x$
Primitive of $x \csc a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cos a x$: $14.370$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Back endpapers: A Brief Table of Integrals: $79$.




