# 

Source: https://proofwiki.org/wiki/Primitive_of_Secant_Function/Secant_plus_Tangent_Form



Theorem
$\ds \int \sec x \rd x = \ln \size {\sec x + \tan x} + C$
where $\sec x + \tan x \ne 0$.


Proof 1
Let:














\(\ds u\)

\(=\)







\(\ds \tan x + \sec x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac \d {\d x} \tan x + \frac \d {\d x} \sec x\)





Linear Combination of Derivatives














\(\ds \)

\(=\)







\(\ds \sec^2 x + \frac \d {\d x} \sec x\)





Derivative of Tangent Function














\(\ds \)

\(=\)







\(\ds \sec^2 x + \sec x \tan x\)





Derivative of Secant Function














\(\ds \)

\(=\)







\(\ds \sec x \paren {\sec x + \tan x}\)





factorising




Then:














\(\ds \int \sec x \rd x\)

\(=\)







\(\ds \int \frac {\sec x \paren {\sec x + \tan x} } {\sec x + \tan x} \rd x\)





multiplying top and bottom by $\sec x + \tan x$














\(\ds \)

\(=\)







\(\ds \ln \size {\sec x + \tan x} + C\)





Primitive of Function under its Derivative



$\blacksquare$


Proof 2













\(\ds \int \sec x \rd x\)

\(=\)







\(\ds \int \frac 1 {\cos x} \rd x\)





Secant is Reciprocal of Cosine




We make the Weierstrass Substitution:














\(\ds u\)

\(=\)







\(\ds \tan \frac x 2\)














\(\ds \leadsto \ \ \)





\(\ds \cos x\)

\(=\)







\(\ds \frac {1 - u^2} {1 + u^2}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d u}\)

\(=\)







\(\ds \frac 2 {u^2 + 1}\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac 1 {\cos x} \rd x\)

\(=\)







\(\ds \int \frac {1 + u^2} {1 - u^2} \frac 2 {u^2 + 1} \rd u\)




















\(\ds \)

\(=\)







\(\ds 2 \int \frac 1 {1 - u^2} \rd u\)




















\(\ds \)

\(=\)







\(\ds \ln \size {\frac {1 + u} {1 - u} } + C\)





Primitive of $\dfrac 1 {a^2 - u^2}$: Logarithm Form














\(\ds \)

\(=\)







\(\ds \ln \size {\frac {1 + \tan \frac x 2} {1 - \tan \frac x 2} } + C\)




















\(\ds \)

\(=\)







\(\ds \ln \size {\sec x + \tan x} + C\)





One Plus Tangent Half Angle over One Minus Tangent Half Angle



$\blacksquare$


Also see
Primitive of Sine Function
Primitive of Cosine Function
Primitive of Tangent Function
Primitive of Cotangent Function
Primitive of Cosecant Function


Sources
1945: A. Geary, H.V. Lowry and H.A. Hayden: Advanced Mathematics for Technical Students, Part I ... (previous) ... (next): Chapter $\text {III}$: Integration: Integration
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration
1960: Margaret M. Gow: A Course in Pure Mathematics ... (previous) ... (next): Chapter $10$: Integration: $10.4$. Standard integrals: Other Standard Results: $\text {(xx)}$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: General Rules of Integration: $14.15$
1972: Frank Ayres, Jr. and J.C. Ault: Theory and Problems of Differential and Integral Calculus (SI ed.) ... (previous) ... (next): Chapter $25$: Fundamental Integration Formulas: $12$.
1974: Murray R. Spiegel: Theory and Problems of Advanced Calculus (SI ed.) ... (previous) ... (next): Chapter $5$. Integrals: Integrals of Special Functions: $7$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Trigonometric functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.): $\S 5.2$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $7$: Integrals
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals




