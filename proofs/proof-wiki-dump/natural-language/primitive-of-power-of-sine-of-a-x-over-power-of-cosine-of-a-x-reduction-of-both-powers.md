# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_Sine_of_a_x_over_Power_of_Cosine_of_a_x/Reduction_of_Both_Powers



Theorem
$\ds \int \frac {\sin^m a x} {\cos^n a x} \rd x = \frac {\sin^{m - 1} a x} {a \paren {n - 1} \cos^{n - 1} a x} - \frac {m - 1} {n - 1} \int \frac {\sin^{m - 2} a x} {\cos^{n - 2} a x} \rd x + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \sin^{m - 1} a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \paren {m - 1} a \sin^{m - 2} a x \cos a x\)





Derivative of $\sin a x$, Derivative of Power, Chain Rule for Derivatives




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \frac {\sin a x} {\cos^n a x}\)




















\(\ds \)

\(=\)







\(\ds \cos^{-n} a x \sin a x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {-\cos^{-n + 1} a x} {a \paren {-n + 1} }\)





Primitive of $\cos^n a x \sin a x$














\(\ds \)

\(=\)







\(\ds \frac 1 {a \paren {n - 1} \cos^{n - 1} a x}\)










Then:














\(\ds \int \frac {\sin^m a x} {\cos^n a x} \rd x\)

\(=\)







\(\ds \int \sin^{m - 1} a x \frac {\sin a x} {\cos^n a x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \paren {\sin^{m - 1} a x} \paren {\frac 1 {a \paren {n - 1} \cos^{n - 1} a x} }\)





Integration by Parts














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \int \paren {\frac 1 {a \paren {n - 1} \cos^{n - 1} a x} } \paren {\paren {m - 1} a \sin^{m - 2} a x \cos a x} \rd x + C\)




















\(\ds \)

\(=\)







\(\ds \frac {\sin^{m - 1} a x} {a \paren {n - 1} \cos^{n - 1} a x} - \frac {m - 1} {n - 1} \int \frac {\sin^{m - 2} a x} {\cos^{n - 2} a x} \rd x + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac {\cos^m a x} {\sin^n a x}$: Reduction of Both Powers


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$ and $\cos a x$: $14.426$




