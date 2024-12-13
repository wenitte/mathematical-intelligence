# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_minus_a_squared/Inverse_Hyperbolic_Function_Form



Theorem
Let $a \in \R_{>0}$ be a strictly positive real constant.
$\quad \ds \int \dfrac {\d x} {x^2 - a^2} = \begin {cases} -\dfrac 1 a \tanh^{-1} \dfrac x a + C & : \size x < a \\
& \\
-\dfrac 1 a \coth^{-1} \dfrac x a + C & : \size x > a \\
& \\
\text {undefined} & : x = a \end {cases}$


Proof
First note that if $x = a$ then $a^2 - x^2 = 0$ and so $\dfrac 1 {x^2 - a^2}$ is undefined.


Proof for $\size x < a$
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





Derivative of Hyperbolic Cotangent








\(\ds \leadsto \ \ \)





\(\ds \int \frac 1 {x^2 - a^2} \rd x\)

\(=\)







\(\ds \int \frac {a \sech^2 u} {a^2 \tanh^2 u - a^2} \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac a {a^2} \int \frac {\sech^2 u} {-\paren {1 - \tanh^2 u} } \rd u\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\sech^2 u} {-\sech^2 u} \rd u\)





Sum of Squares of Hyperbolic Secant and Tangent














\(\ds \)

\(=\)







\(\ds -\frac 1 a \int \rd u\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 a u + C\)





Integral of Constant














\(\ds \)

\(=\)







\(\ds -\frac 1 a \tanh^{-1} {\frac x a} + C\)





Definition of $u$



$\Box$


Proof for $\size x > a$
Let $\size x > a$.
Let:














\(\ds u\)

\(=\)







\(\ds \coth^{-1} {\frac x a}\)





Definition of Real Inverse Hyperbolic Cotangent, which is defined where $\size {\dfrac x a} > 1$








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





\(\ds \int \frac 1 {x^2 - a^2} \rd x\)

\(=\)







\(\ds \int \frac {-a \csch^2 u} {a^2 \coth^2 u - a^2} \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds -\frac a {a^2} \int \frac {\csch^2 u} {\coth^2 u - 1} \rd u\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds -\frac 1 a \int \frac {\csch^2 u} {\csch^2 u} \rd u\)





Difference of Squares of Hyperbolic Cotangent and Cosecant














\(\ds \)

\(=\)







\(\ds -\frac 1 a \int \rd u\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 a u + C\)





Integral of Constant














\(\ds \)

\(=\)







\(\ds -\frac 1 a \coth^{-1} {\frac x a} + C\)





Definition of $u$



$\blacksquare$

Sources
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $6$. Integral Calculus: Appendix: Table of Fundamental Standard Integrals



