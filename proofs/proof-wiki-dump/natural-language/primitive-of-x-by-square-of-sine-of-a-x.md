# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Square_of_Sine_of_a_x



Theorem
$\ds \int x \sin^2 a x \rd x = \frac {x^2} 4 - \frac {x \sin 2 a x} {4 a} - \frac {\cos 2 a x} {8 a^2} + C$


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







\(\ds \sin^2 a x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac x 2 - \frac {\sin 2 a x} {4 a}\)





Primitive of $\sin^2 a x$




Then:














\(\ds \int x \sin^2 a x \rd x\)

\(=\)







\(\ds x \paren {\frac x 2 - \frac {\sin 2 a x} {4 a} } - \int \paren {\frac x 2 - \frac {\sin 2 a x} {4 a} } \times 1 \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 - \frac {x \sin 2 a x} {4 a} - \frac 1 2 \int x \rd x + \frac 1 {4 a} \int \sin 2 a x \rd x + C\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 - \frac {x \sin 2 a x} {4 a} - \frac {x^2} 4 + \frac 1 {4 a} \int \sin 2 a x \rd x + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 - \frac {x \sin 2 a x} {4 a} - \frac {x^2} 4 + \frac 1 {4 a} \frac {\paren {-\cos 2 a x} } {2 a} + C\)





Primitive of $\sin a x$














\(\ds \)

\(=\)







\(\ds \frac {x^2} 4 - \frac {x \sin 2 a x} {4 a} - \frac {\cos 2 a x} {8 a^2} + C\)





simplifying



$\blacksquare$


Also see
Primitive of $x \cos^2 a x$
Primitive of $x \tan^2 a x$
Primitive of $x \cot^2 a x$
Primitive of $x \sec^2 a x$
Primitive of $x \csc^2 a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$: $14.348$




