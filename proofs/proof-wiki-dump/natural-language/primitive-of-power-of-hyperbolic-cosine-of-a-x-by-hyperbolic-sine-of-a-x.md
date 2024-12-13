# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_Hyperbolic_Cosine_of_a_x_by_Hyperbolic_Sine_of_a_x



Theorem
$\ds \int \cosh^n a x \sinh a x \rd x = \frac {\cosh^{n + 1} a x} {\paren {n + 1} a} + C$
for $n \ne -1$.


Proof













\(\ds u\)

\(=\)







\(\ds \cosh a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds a \sinh a x\)





Derivative of $\cosh a x$








\(\ds \leadsto \ \ \)





\(\ds \int \cosh^n a x \sinh a x \rd x\)

\(=\)







\(\ds \int \frac {u^n} a \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 a \int u^n \rd u\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 a \frac {u^{n + 1} } {n + 1} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {\cosh^{n + 1} a x} {\paren {n + 1} a} + C\)





substituting for $u$



$\blacksquare$


Also see
Primitive of $\tanh a x$ for the case where $n = -1$.
Primitive of $\sinh^n a x \cosh a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sinh a x $ and $\cosh a x$: $14.593$




