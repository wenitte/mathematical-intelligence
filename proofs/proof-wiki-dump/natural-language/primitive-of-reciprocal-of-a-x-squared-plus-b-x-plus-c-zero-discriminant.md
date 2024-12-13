# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_a_x_squared_plus_b_x_plus_c/Zero_Discriminant

Theorem
Let $a \in \R_{\ne 0}$.
Let $b^2 - 4 a c = 0$.
Then:

$\ds \int \frac {\d x} {a x^2 + b x + c} = \frac {-2} {2 a x + b} + C$


Proof
First:














\(\ds a x^2 + b x + c\)

\(=\)







\(\ds \frac {\paren {2 a x + b}^2 + 4 a c - b^2} {4 a}\)





Completing the Square




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {a x^2 + b x + c}\)

\(=\)







\(\ds \int \frac {4 a \rd x} {\paren {2 a x + b}^2 - \paren {b^2 - 4 a c} }\)










Let $b^2 - 4 a c = 0$.
Then:














\(\ds \int \frac {\d x} {a x^2 + b x + c}\)

\(=\)







\(\ds \int \frac {4 a \rd x} {\paren {2 a x + b}^2}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac {-4 a} {2 a \paren {2 a x + b} } + C\)





Primitive of $\dfrac 1 {\paren {a x + b}^2}$














\(\ds \)

\(=\)







\(\ds \dfrac {-2} {2 a x + b} + C\)





simplifying



$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Rational Algebraic Functions: $3.3.18$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x^2 + b x + c$: $14.265$




