# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_minus_a_squared/Inverse_Hyperbolic_Cotangent_Form



Theorem
Let $a \in \R_{>0}$ be a strictly positive real constant.
Let $\size x > a$.
Then:

$\ds \int \frac {\d x} {x^2 - a^2} = -\frac 1 a \coth^{-1} {\frac x a} + C$


Proof
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


Also see
Primitive of $\dfrac 1 {x^2 - a^2}$: $\tanh^{-1}$ form for the case $a^2 > x^2$


Sources
1960: Margaret M. Gow: A Course in Pure Mathematics ... (previous) ... (next): Chapter $10$: Integration: $10.4$. Standard integrals: Standard Forms: $\text {(viii)}$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: General Rules of Integration: $14.40$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^2 - a^2$, $x^2 > a^2$: $14.144$




