# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Cosecant_Function/Hyperbolic_Tangent_Form



Theorem
$\ds \int \csch x \rd x = \ln \size {\tanh \frac x 2} + C$
where $\tanh \dfrac x 2 \ne 0$.


Proof 1
Let $u = \tanh \dfrac x 2$.
Then:














\(\ds \int \csch x \rd x\)

\(=\)







\(\ds \int \dfrac 1 {\sinh x} \rd x\)





Definition 2 of Hyperbolic Cosecant














\(\ds \)

\(=\)







\(\ds \int \dfrac {1 - u^2} {2 u} \dfrac {2 \rd u} {1 - u^2}\)





Hyperbolic Tangent Half-Angle Substitution














\(\ds \)

\(=\)







\(\ds \int \dfrac {\d u} u\)





simplifying














\(\ds \)

\(=\)







\(\ds \ln \size u + C\)





Logarithm of Reciprocal














\(\ds \)

\(=\)







\(\ds \ln \size {\tanh \frac x 2} + C\)





substituting back for $u$



$\blacksquare$


Proof 2













\(\ds \int \csch x \rd x\)

\(=\)







\(\ds -\ln \size {\csch x + \coth x} + C\)





Primitive of $\csch x$: Logarithm Form














\(\ds \)

\(=\)







\(\ds \ln \size {\frac 1 {\csch x + \coth x} } + C\)





Logarithm of Reciprocal














\(\ds \)

\(=\)







\(\ds \ln \size {\frac 1 {\frac 1 {\sinh x} + \frac {\cosh x} {\sinh x} } } + C\)





Definition 2 of Hyperbolic Cosecant and Definition 2 of Hyperbolic Cotangent














\(\ds \)

\(=\)







\(\ds \ln \size {\frac {\sinh x} {1 + \cosh x} } + C\)




















\(\ds \)

\(=\)







\(\ds \ln \size {\tanh \frac x 2} + C\)





Half Angle Formula for Hyperbolic Tangent: Corollary $1$



$\blacksquare$


Sources
1960: Margaret M. Gow: A Course in Pure Mathematics ... (previous) ... (next): Chapter $10$: Integration: $10.4$. Standard integrals: Other Standard Results: $\text {(xxviii)}$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: General Rules of Integration: $14.30$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Hyperbolic functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals




