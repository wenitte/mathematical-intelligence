# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_a_squared_minus_x_squared/Inverse_Hyperbolic_Cotangent_Form/Proof

Theorem
$\ds \int \frac {\d x} {a^2 - x^2} = \frac 1 a \coth^{-1} \frac x a + C$
where $\size x > a$.


Proof
Let $\size x > a$.

Let:














\(\ds u\)

\(=\)







\(\ds \coth^{-1} {\frac x a}\)





Definition of Real Inverse Hyperbolic Cotangent, which is defined where $\dfrac x a > 1$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds a \coth u\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d u}\)

\(=\)







\(\ds -a \csch^2 u\)





Derivative of Hyperbolic Cotangent








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\rd x} {a^2 - x^2}\)

\(=\)







\(\ds \int \frac {-a \csch^2 u} {a^2 - a^2 \coth^2 u} \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds -\frac a {a^2} \int \frac {\csch^2 u} {-\paren {\coth^2 u - 1} } \rd u\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\csch^2 u} {\csch^2 u} \rd u\)





Difference of Squares of Hyperbolic Cotangent and Cosecant














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \rd u\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a u + C\)





Integral of Constant














\(\ds \)

\(=\)







\(\ds \frac 1 a \coth^{-1} \frac x a + C\)





Definition of $u$



$\blacksquare$





