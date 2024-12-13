# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Square_of_Secant_of_a_x



Theorem
$\ds \int x \sec^2 a x \rd x = \frac {x \tan a x} a + \frac  1 {a^2} \ln \size {\cos a x} + C$


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







\(\ds \sec^2 a x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {\tan a x} a\)





Primitive of $\sec^2 a x$




Then:














\(\ds \int x \sec^2 a x \rd x\)

\(=\)







\(\ds \frac {x \tan a x} a - \int \frac {\tan a x} a \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x \tan a x} a - \frac 1 a \paren {\frac {-1} a \ln \size {\cos a x} } + C\)





Primitive of $\tan a x$














\(\ds \)

\(=\)







\(\ds \frac {x \tan a x} a + \frac  1 {a^2} \ln \size {\cos a x} + C\)





simplifying



$\blacksquare$


Also see
Primitive of $x \sin^2 a x$
Primitive of $x \cos^2 a x$
Primitive of $x \tan^2 a x$
Primitive of $x \cot^2 a x$
Primitive of $x \csc^2 a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sec a x$: $14.458$




