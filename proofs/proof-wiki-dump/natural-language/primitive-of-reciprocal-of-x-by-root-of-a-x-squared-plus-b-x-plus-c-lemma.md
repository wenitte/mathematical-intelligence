# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_Root_of_a_x_squared_plus_b_x_plus_c/Lemma

Theorem
Let $a, b, c \in \R_{\ne 0}$.
Then for $x \in \R$ such that $a x^2 + b x + c > 0$ and $x \ne 0$:

$\ds \int \frac {\d x} {x \sqrt {a x^2 + b x + c} } = -\int \frac {\d u} {\pm \sqrt {a + b u + c u^2} }$
where $u := \dfrac 1 x$, according to whether $u > 0$ or $u < 0$.


Proof













\(\ds x\)

\(=\)







\(\ds \frac 1 u\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d u}\)

\(=\)







\(\ds \frac {-1} {u^2}\)





Primitive of Power








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {x \sqrt {a x^2 + b x + c} }\)

\(=\)







\(\ds \int {\frac 1 {\frac 1 u \sqrt {a \paren {\frac 1 u}^2 + b \paren {\frac 1 u} + c} } } \frac {-\rd u} {u^2}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds -\int \frac {\d u} {\frac {u^2} u \sqrt {\frac 1 {u^2} \paren {a + b u + c u^2} } }\)





Primitive of Constant Multiple of Function and simplification














\(\ds \)

\(=\)







\(\ds -\int \frac {\d u} {\frac {u^2} u \sqrt {\frac 1 {u^2} } \sqrt {a + b u + c u^2} }\)





extracting $\sqrt {\frac 1 {u^2} }$














\(\ds \)

\(=\)







\(\ds -\int \frac {\d u} {\pm \sqrt {a + b u + c u^2} }\)





according to whether $u > 0$ or $u < 0$



$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions: $3.3.38$




