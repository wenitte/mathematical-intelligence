# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_a_x_squared_plus_b_x_plus_c/Positive_Discriminant

Theorem
Let $a \in \R_{\ne 0}$.
Let $b^2 - 4 a c > 0$.
Then:

$\ds \int \frac {\d x} {a x^2 + b x + c} = \frac 1 {\sqrt {b^2 - 4 a c} } \ln \size {\dfrac {2 a x + b - \sqrt {b^2 - 4 a c} } {2 a x + b + \sqrt {b^2 - 4 a c} } } + C$


Proof
First:














\(\ds a x^2 + b x + c\)

\(=\)







\(\ds \dfrac {\paren {2 a x + b}^2 - \paren {b^2 - 4 a c} } {4 a}\)





Completing the Square




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {a x^2 + b x + c}\)

\(=\)







\(\ds \int \frac {4 a \rd x} {\paren {2 a x + b}^2 - \paren {b^2 - 4 a c} }\)










Put:














\(\ds z\)

\(=\)







\(\ds 2 a x + b\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 2 a\)





Derivative of Power




Let $D = b^2 - 4 a c$.
Thus:














\(\ds \int \frac {\d x} {a x^2 + b x + c}\)

\(=\)







\(\ds \int \frac {4 a \rd x} {\paren {2 a x + b}^2 - \paren {b^2 - 4 a c} }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \int \frac {2 \rd z} {z^2 - D}\)





Integration by Substitution




Let $b^2 - 4 a c > 0$.
Then:














\(\ds D\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds D\)

\(=\)







\(\ds q^2\)





for some $q \in \R$








\(\ds \leadsto \ \ \)





\(\ds q\)

\(=\)







\(\ds \sqrt {b^2 - 4 a c}\)





Definition of $D$




Thus:














\(\ds \int \frac {\d x} {a x^2 + b x + c}\)

\(=\)







\(\ds \int \frac {2 \rd z} {z^2 - q^2}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 q \ln \size {\frac {z - q} {z + q} } + C\)





Primitive of $\dfrac 1 {x^2 - a^2}$: Logarithm Form














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {b^2 - 4 a c} } \ln \size {\frac {2 a x + b - \sqrt {b^2 - 4 a c} } {2 a x + b + \sqrt {b^2 - 4 a c} } } + C\)





substituting for $z$ and $q$



$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Rational Algebraic Functions: $3.3.17$




