# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Sine_of_a_x_by_Hyperbolic_Cosine_of_a_x/Proof_4

Theorem
$\ds \int \sinh a x \cosh a x \rd x = \frac {\sinh^2 a x} {2 a} + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \sinh a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds a \cosh a x\)





Derivative of $\sinh a x$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \cosh a x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {\sinh a x} a\)





Primitive of $\cosh a x$




Then:














\(\ds \int \sinh a x \cosh a x \rd x\)

\(=\)







\(\ds \paren {\sinh a x} \paren {\frac {\sinh a x} a} - \int \paren {\frac {\sinh a x} a} \paren {a \cosh a x} \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {\sinh^2 a x} a - \int \sinh a x \cosh a x \rd x + C\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds 2 \int \sinh a x \cosh a x \rd x\)

\(=\)







\(\ds \frac {\sinh^2 a x} a + C\)





gathering terms








\(\ds \leadsto \ \ \)





\(\ds \int \sinh a x \cosh a x \rd x\)

\(=\)







\(\ds \frac {\sinh^2 a x} {2 a} + C\)





simplifying



$\blacksquare$





