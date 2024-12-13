# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_Root_of_x_squared_plus_a_squared/Inverse_Hyperbolic_Cosecant_Form

Theorem
$\ds \int \frac {\d x} {x \sqrt {x^2 + a^2} } = -\frac 1 a \csch^{-1} {\frac x a} + C$


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \csch^{-1} {\frac x a}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds a \csch u\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d u}\)

\(=\)







\(\ds -a \csch u \coth u\)





Derivative of Hyperbolic Cosecant








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {x \sqrt {x^2 + a^2} }\)

\(=\)







\(\ds \int \frac {-a \csch u \coth u} {a \csch u \sqrt {a^2 \csch^2 u + a^2} } \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds -\frac a {a^2} \int \frac {\csch u \coth u} {\csch u \sqrt {\csch^2 u - 1} } \rd u\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds -\frac 1 a \int \frac {\csch u \coth u} {\csch u \coth u} \rd u\)





Difference of Squares of Hyperbolic Cotangent and Cosecant














\(\ds \)

\(=\)







\(\ds -\frac 1 a \int 1 \rd u\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 a u + C\)





Integral of Constant














\(\ds \)

\(=\)







\(\ds \frac 1 a \csch^{-1} {\frac x a} + C\)





Definition of $u$



$\blacksquare$


Also see
Primitive of Reciprocal of $x \sqrt {x^2 - a^2}$
Primitive of Reciprocal of $x \sqrt {a^2 - x^2}$




