# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Exponential_of_a_x_by_Cosine_of_b_x



Theorem
$\ds \int x e^{a x} \cos b x \rd x = \frac {x e^{a x} \paren {a \cos b x + b \sin b x} } {a^2 + b^2} - \frac {e^{a x} \paren {\paren {a^2 - b^2} \cos b x - 2 a b \sin b x} } {\paren {a^2 + b^2}^2} + C$


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







\(\ds e^{a x} \cos b x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {e^{a x} \paren {a \cos b x + b \sin b x} } {a^2 + b^2}\)





Primitive of $e^{a x} \cos b x$




Then:














\(\ds \int x e^{a x} \sin b x \rd x\)

\(=\)







\(\ds x \paren {\frac {e^{a x} \paren {a \cos b x + b \sin b x} } {a^2 + b^2} } - \int \paren {\frac {e^{a x} \paren {a \cos b x + b \sin b x} } {a^2 + b^2} } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x e^{a x} \paren {a \cos b x + b \sin b x} } {a^2 + b^2}\)





Linear Combination of Primitives














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac a {a^2 + b^2} \int e^{a x} \cos b x \rd x - \frac b {a^2 + b^2} \int e^{a x} \sin b x \rd x + C\)




















\(\ds \)

\(=\)







\(\ds \frac {x e^{a x} \paren {a \cos b x + b \sin b x} } {a^2 + b^2}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac a {a^2 + b^2} \paren {\frac {e^{a x} \paren {a \cos b x + b \sin b x} } {a^2 + b^2} }\)





Primitive of $e^{a x} \cos b x$














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b {a^2 + b^2} \paren {\frac {e^{a x} \paren {a \sin b x - b \cos b x} } {a^2 + b^2} } + C\)





Primitive of $e^{a x} \sin b x$














\(\ds \)

\(=\)







\(\ds \frac {x e^{a x} \paren {a \cos b x + b \sin b x} } {a^2 + b^2} - \frac {e^{a x} \paren {\paren {a^2 - b^2} \cos b x - 2 a b \sin b x} } {\paren {a^2 + b^2}^2} + C\)





simplifying



$\blacksquare$


Also see
Primitive of $x e^{a x} \sin b x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $e^{a x}$: $14.521$




