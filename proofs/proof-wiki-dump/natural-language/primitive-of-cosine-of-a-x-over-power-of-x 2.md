# 

Source: https://proofwiki.org/wiki/Primitive_of_Cosine_of_a_x_over_Power_of_x



Theorem
$\ds \int \frac {\cos a x} {x^n} \rd x = \frac {-\cos a x} {\paren {n - 1} x^{n - 1} } - \frac a {n - 1} \int \frac {\sin a x} {x^{n - 1} } \rd x$


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







\(\ds \frac 1 {x^n}\)




















\(\ds \)

\(=\)







\(\ds x^{-n}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {x^{-n + 1} } {- n + 1}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {-1} {\paren {n - 1} x^{n - 1} }\)





simplifying




Then:














\(\ds \int \frac {\cos a x} {x^n} \rd x\)

\(=\)







\(\ds \cos a x \paren {\frac {-1} {\paren {n - 1} x^{n - 1} } } - \int \paren {\frac {-1} {\paren {n - 1} x^{n - 1} } } \paren {-a \sin a x} \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {-\cos a x} {\paren {n - 1} x^{n - 1} } - \frac a {n - 1} \int \frac {\sin a x} {x^{n - 1} } \rd x\)





Primitive of Constant Multiple of Function



$\blacksquare$


Also see
Primitive of $\dfrac {\sin a x} {x^n}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cos a x$: $14.395$




