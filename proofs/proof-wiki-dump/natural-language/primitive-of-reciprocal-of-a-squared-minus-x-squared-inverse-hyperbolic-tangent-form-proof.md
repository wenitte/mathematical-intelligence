# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_a_squared_minus_x_squared/Inverse_Hyperbolic_Tangent_Form/Proof

Theorem
$\ds \int \frac {\d x} {a^2 - x^2} = \frac 1 a \tanh^{-1} \frac x a + C$
where $\size x < a$.


Proof
Let $\size x < a$.

Let:














\(\ds u\)

\(=\)







\(\ds \tanh^{-1} {\frac x a}\)





Definition of Real Inverse Hyperbolic Tangent, which is defined where $\size {\dfrac x a} < 1$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds a \tanh u\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d u}\)

\(=\)







\(\ds a \sech^2 u\)





Derivative of Hyperbolic Tangent








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\rd x} {a^2 - x^2}\)

\(=\)







\(\ds \int \frac {a \sech^2 u} {a^2 - a^2 \tanh^2 u} \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac a {a^2} \int \frac {\sech^2 u} {1 - \tanh^2 u} \rd u\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\sech^2 u} {\sech^2 u} \rd u\)





Sum of Squares of Hyperbolic Secant and Tangent














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \rd u\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a u + C\)





Integral of Constant














\(\ds \)

\(=\)







\(\ds \frac 1 a \tanh^{-1} \frac x a + C\)





Definition of $u$



$\blacksquare$





