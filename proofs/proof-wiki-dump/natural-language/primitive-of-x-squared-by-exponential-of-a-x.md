# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_by_Exponential_of_a_x



Theorem
$\ds \int x^2 e^{a x} \rd x = \frac {e^{a x} } a \paren {x^2 - \frac {2 x} a + \frac 2 {a^2} } + C$


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







\(\ds e^{a x}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {e^{a x} } a\)





Primitive of $e^{a x}$




Then:














\(\ds \int x^2 e^{a x} \rd x\)

\(=\)







\(\ds x^2 \paren {\frac {e^{a x} } a} - \int 2 x \frac {e^{a x} } a \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x^2 \paren {\frac {e^{a x} } a} - \frac 2 a \int x e^{a x} \rd x + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds x^2 \paren {\frac {e^{a x} } a} - \frac 2 a \paren {\frac {e^{a x} } a \paren {x - \frac 1 a} } + C\)





Primitive of $x e^{a x}$














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } a \paren {x^2 - \frac {2 x} a + \frac 2 {a^2} } + C\)





simplifying



$\blacksquare$

Examples
Primitive of $x^2 e^{-x}$
$\ds \int x^2 e^{-x} \rd x = -e^{-x} \paren {x^2 + 2 x + 2} + C$


Also see
Primitive of $x^n e^{a x}$
Primitive of $x e^{a x} $


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $e^{a x}$: $14.511$




