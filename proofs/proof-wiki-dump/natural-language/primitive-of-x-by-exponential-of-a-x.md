# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Exponential_of_a_x



Theorem
$\ds \int x e^{a x} \rd x = \frac {e^{a x} } a \paren {x - \frac 1 a} + C$


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







\(\ds e^{a x}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {e^{a x} } a\)





Primitive of $e^{a x}$




Then:














\(\ds \int x e^{a x} \rd x\)

\(=\)







\(\ds x \paren {\frac {e^{a x} } a} - \int \frac {e^{a x} } a \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \paren {\frac {e^{a x} } a} - \frac 1 a \int e^{a x} \rd x + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds x \paren {\frac {e^{a x} } a} - \frac 1 a \paren {\frac {e^{a x} } a} + C\)





Primitive of $e^{a x}$














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } a \paren {x - \frac 1 a} + C\)





simplifying



$\blacksquare$


Also presented as
This result is also seen presented in the form:

$\ds \int x e^{a x} \rd x = \frac {e^{a x} } {a^2} \paren {a x - 1} + C$


Also see
Primitive of $x^n e^{a x}$
Primitive of $x^2 e^{a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $e^{a x}$: $14.510$




