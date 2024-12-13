# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_a_x_squared_plus_b_x_plus_c/a_greater_than_0/Zero_Discriminant

Theorem
Let $a \in \R_{>0}$.
Let $b^2 - 4 a c = 0$.

Then for $x \in \R$ such that $a x^2 + b x + c > 0$:

$\ds \int \frac {\d x} {\sqrt {a x^2 + b x + c} } = \frac 1 {\sqrt a} \ln \size {2 a x + b} + C$


Proof













\(\ds a x^2 + b x + c\)

\(=\)







\(\ds \frac {\paren {2 a x + b}^2 -\paren {b^2 - 4 a c} } {4 a}\)





Completing the Square




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)

\(=\)







\(\ds \int \frac {2 \sqrt a \rd x} {\sqrt {\paren {2 a x + b}^2 -\paren {b^2 - 4 a c} } }\)










Let $b^2 - 4 a c = 0$ by hypothesis.
Then:














\(\ds \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)

\(=\)







\(\ds \int \frac {2 \sqrt a \rd x} {\sqrt {\paren {2 a x + b}^2} }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds 2 \sqrt a \int \frac {\d x} {2 a x + b}\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds 2 \sqrt a \frac 1 {2 a} \ln \size {2 a x + b} + C\)





Primitive of $\dfrac 1 {a x + b}$














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt a} \ln \size {2 a x + b} + C\)





simplifying



$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions: $3.3.35$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x^2 + b x + c}$: $14.280$




