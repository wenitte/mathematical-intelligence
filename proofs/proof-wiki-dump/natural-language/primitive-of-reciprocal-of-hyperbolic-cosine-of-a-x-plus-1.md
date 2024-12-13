# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Hyperbolic_Cosine_of_a_x_plus_1



Theorem
$\ds \int \frac {\d x} {\cosh a x + 1} = \frac 1 a \tanh \frac {a x} 2 + C$


Proof













\(\ds u\)

\(=\)







\(\ds \tanh \frac x 2\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {1 + \cosh x}\)

\(=\)







\(\ds \int \frac {\dfrac {2 \rd u} {1 - u^2} } {\dfrac {1 + u^2} {1 - u^2} + 1}\)





Hyperbolic Tangent Half-Angle Substitution














\(\ds \)

\(=\)







\(\ds \int \frac {2 \rd u} {1 + u^2 + \paren {1 - u^2} }\)





multiplying top and bottom by $1 - u^2$














\(\ds \)

\(=\)







\(\ds \int \rd u\)





simplifying














\(\ds \)

\(=\)







\(\ds u + C\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds \tanh \frac x 2 + C\)





substituting for $u$








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {1 + \cosh a x}\)

\(=\)







\(\ds \frac 1 a \tanh \frac {a x} 2 + C\)





Primitive of Function of Constant Multiple



$\blacksquare$


Also see
Primitive of $\dfrac 1 {\cosh a x - 1}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cosh a x$: $14.575$




