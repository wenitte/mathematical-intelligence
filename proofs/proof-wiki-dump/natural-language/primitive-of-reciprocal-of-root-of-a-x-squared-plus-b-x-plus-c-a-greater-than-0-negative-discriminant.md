# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_a_x_squared_plus_b_x_plus_c/a_greater_than_0/Negative_Discriminant



Theorem
Let $a \in \R_{>0}$.
Let $b^2 - 4 a c < 0$.
Then for $x \in \R$ such that $a x^2 + b x + c > 0$:

$\ds \int \frac {\d x} {\sqrt {a x^2 + b x + c} } = \frac 1 {\sqrt a} \map \arsinh {\dfrac {2 a x + b} {\sqrt {4 a c - b^2} } } + C$
where $\arsinh$ denotes the area hyperbolic sine function.


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




Let $b^2 - 4 a c < 0$.
Then:














\(\ds - D\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds -D\)

\(=\)







\(\ds q^2\)





for some $q \in \R$








\(\ds \leadsto \ \ \)





\(\ds q\)

\(=\)







\(\ds \sqrt {4 a c - b^2}\)





by definition of $D$




Thus:














\(\ds \int \frac {\d x} {\sqrt{a x^2 + b x + c} }\)

\(=\)







\(\ds \frac 1 {\sqrt a} \int \frac {\d z} {\sqrt {z^2 + q^2} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt a} \map \arsinh {\frac z q} + C\)





Primitive of $\dfrac 1 {\sqrt {x^2 + a^2} }$














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt a} \map \arsinh {\frac {2 a x + b} {\sqrt {4 a c - b^2} } } + C\)





substituting for $z$ and $q$



$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions: $3.3.34$




