# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_a_x_squared_plus_b_x_plus_c/a_greater_than_0/Positive_Discriminant



Theorem
Let $a, b, c \in \R$ such that $a > 0$.
Let $b^2 - 4 a c > 0$.
Then for $x \in \R$ such that $a x^2 + b x + c > 0$:

$\ds \int \frac {\d x} {\sqrt {a x^2 + b x + c} } = \dfrac 1 {\sqrt a} \ln \size {2 \sqrt a \sqrt {a x^2 + b x + c} + 2 a x + b} + C$


Proof
Completing the Square
First:














\(\ds a x^2 + b x + c\)

\(=\)







\(\ds \frac {\paren {2 a x + b}^2 - \paren {b^2 - 4 a c} } {4 a}\)





Completing the Square




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)

\(=\)







\(\ds \int \frac {2 \sqrt a \rd x} {\sqrt {\paren {2 a x + b}^2 - \paren {b^2 - 4 a c} } }\)










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














\(\ds \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)

\(=\)







\(\ds \int \frac {2 \sqrt a \rd x} {\sqrt {\paren {2 a x + b}^2 - \paren {b^2 - 4 a c} } }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \int \frac {\d z} {\sqrt a \sqrt {z^2 - D} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt a} \int \frac {\d z} {\sqrt {z^2 - D} }\)





Primitive of Constant Multiple of Function



$\Box$

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





by definition of $D$




Thus:














\(\ds \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)

\(=\)







\(\ds \frac 1 {\sqrt a} \int \frac {\d z} {\sqrt {z^2 - q^2} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt a} \ln \size {z + \sqrt {z^2 - q^2} } + C\)





Primitive of $\dfrac 1 {\sqrt {x^2 - a^2} }$














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt a} \ln \size {2 a x + b + \sqrt {\paren {2 a x + b}^2 - \paren {b^2 - 4 a c} } } + C\)





substituting for $z$ and $q$














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt a} \ln \size {2 a x + b + \sqrt {4 a \paren {a x^2 + b x + c} } } + C\)





Completing the Square














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt a} \ln \size {2 \sqrt a \sqrt {a x^2 + b x + c} + 2 a x + b} + C\)





rearranging



$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions: $3.3.33$




