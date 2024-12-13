# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_1_minus_Cosine_of_x



Theorem
$\ds \int \frac {\d x} {1 - \cos x} = -\cot \frac x 2 + C$


Corollary
$\ds \int \frac {\d x} {1 - \cos a x} = -\frac 1 a \cot \frac {a x} 2 + C$


Proof













\(\ds u\)

\(=\)







\(\ds \tan \frac x 2\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {1 - \cos x}\)

\(=\)







\(\ds \int \frac {\dfrac {2 \rd u} {1 + u^2} } {1 - \dfrac {1 - u^2} {1 + u^2} }\)





Weierstrass Substitution














\(\ds \)

\(=\)







\(\ds \int \frac {2 \rd u} {1 + u^2 - \paren {1 - u^2} }\)





multiplying top and bottom by $1 + u^2$














\(\ds \)

\(=\)







\(\ds \int \frac {\d u} {u^2}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {-1} u + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {-1} {\tan \dfrac x 2} + C\)





substituting for $u$














\(\ds \)

\(=\)







\(\ds -\cot \frac x 2 + C\)





Cotangent is Reciprocal of Tangent



$\blacksquare$


Also see
Primitive of $\dfrac 1 {1 + \cos x}$


Sources
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $6$. Integral Calculus: Appendix: Table of Fundamental Standard Integrals
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals



