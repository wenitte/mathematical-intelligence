# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_a_squared_minus_x_squared/Logarithm_Form_2/Corollary

Theorem
Let $a \in \R_{>0}$ be a strictly positive real constant.
Let $x \in \R$ such that $\size x \ne a$.


$\ds \int \frac {\d x} {a^2 - b^2 x^2} = \dfrac 1 {2 a b} \ln \size {\dfrac {a + b x} {a - b x} } + C$


Proof
Let $z = b x$.
Then:

$\dfrac {\d x} {\d z} = \dfrac 1 b$
Hence:














\(\ds \int \frac {\d x} {a^2 - b^2 x^2}\)

\(=\)







\(\ds \int \dfrac 1 b \frac {\d z} {a^2 - z^2}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \dfrac 1 b \cdot \dfrac 1 {2 a} \ln \size {\dfrac {a + x} {a - x} } + C\)





Primitive of $\dfrac 1 {a^2 - z^2}$: Logarithm Form $2$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 a b} \ln \size {\dfrac {a + b x} {a - b x} } + C\)





subtituting for $z$ and simplifying



$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Rational Algebraic Functions: $3.3.23$




