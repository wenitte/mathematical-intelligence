# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Hyperbolic_Cosine_of_a_x_minus_1



Theorem
$\ds \int \frac {\d x} {\cosh a x - 1} = \frac {-1} a \coth \frac {a x} 2 + C$


Proof













\(\ds u\)

\(=\)







\(\ds \tanh \frac x 2\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {\cosh x - 1}\)

\(=\)







\(\ds \int \frac {\dfrac {2 \rd u} {1 - u^2} } {\dfrac {1 + u^2} {1 - u^2} - 1}\)





Hyperbolic Tangent Half-Angle Substitution














\(\ds \)

\(=\)







\(\ds \int \frac {2 \rd u} {1 + u^2 - \paren {1 - u^2} }\)





multiplying top and bottom by $1 - u^2$














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







\(\ds \frac {-1} {\tanh \dfrac x 2} + C\)





substituting for $u$














\(\ds \)

\(=\)







\(\ds -\coth \frac x 2 + C\)





Hyperbolic Cotangent is Reciprocal of Hyperbolic Tangent








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {\cosh a x - 1}\)

\(=\)







\(\ds \frac {-1} a \coth \frac {a x} 2 + C\)





Primitive of Function of Constant Multiple



$\blacksquare$


Also see
Primitive of $\dfrac 1 {\cosh a x + 1}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cosh a x$: $14.576$




