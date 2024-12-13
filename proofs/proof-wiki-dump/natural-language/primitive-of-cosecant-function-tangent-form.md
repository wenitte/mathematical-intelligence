# 

Source: https://proofwiki.org/wiki/Primitive_of_Cosecant_Function/Tangent_Form



Theorem
$\ds \int \csc x \rd x = \ln \size {\tan \frac x 2} + C$
where $\tan \dfrac x 2 \ne 0$.


Proof 1













\(\ds \int \csc x \rd x\)

\(=\)







\(\ds -\ln \size {\csc x + \cot x} + C\)





Primitive of $\csc x$: Cosecant plus Cotangent Form














\(\ds \)

\(=\)







\(\ds \ln \size {\frac 1 {\csc x + \cot x} } + C\)





Logarithm of Reciprocal














\(\ds \)

\(=\)







\(\ds \ln \size {\frac 1 {\frac 1 {\sin x} + \frac {\cos x} {\sin x} } } + C\)





Definition of Cosecant and Definition of Cotangent














\(\ds \)

\(=\)







\(\ds \ln \size {\frac {\sin x} {1 + \cos x} } + C\)




















\(\ds \)

\(=\)







\(\ds \ln \size {\tan \frac x 2} + C\)





Half Angle Formula for Tangent: Corollary $1$



$\blacksquare$


Proof 2













\(\ds \int \csc x \rd x\)

\(=\)







\(\ds \int \frac 1 {\sin x} \rd x\)





Cosecant is Reciprocal of Sine




We make the Weierstrass Substitution:














\(\ds u\)

\(=\)







\(\ds \tan \frac x 2\)














\(\ds \leadsto \ \ \)





\(\ds \sin x\)

\(=\)







\(\ds \frac {2 u} {u^2 + 1}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d u}\)

\(=\)







\(\ds \frac 2 {u^2 + 1}\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac 1 {\sin x} \rd x\)

\(=\)







\(\ds \int \frac {u^2 + 1} {2 u} \frac 2 {u^2 + 1} \rd u\)




















\(\ds \)

\(=\)







\(\ds \int \frac 1 u \rd u\)




















\(\ds \)

\(=\)







\(\ds \ln \size u + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \ln \size {\tan \frac x 2} + C\)





substituting back for $u$



$\blacksquare$


Sources
1945: A. Geary, H.V. Lowry and H.A. Hayden: Advanced Mathematics for Technical Students, Part I ... (previous) ... (next): Chapter $\text {III}$: Integration: Integration
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration
1960: Margaret M. Gow: A Course in Pure Mathematics ... (previous) ... (next): Chapter $10$: Integration: $10.4$. Standard integrals: Other Standard Results: $\text {(xix)}$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: General Rules of Integration: $14.16$
1974: Murray R. Spiegel: Theory and Problems of Advanced Calculus (SI ed.) ... (previous) ... (next): Chapter $5$. Integrals: Integrals of Special Functions: $8$
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $6$. Integral Calculus: Appendix: Table of Fundamental Standard Integrals
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $7$: Integrals
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals




