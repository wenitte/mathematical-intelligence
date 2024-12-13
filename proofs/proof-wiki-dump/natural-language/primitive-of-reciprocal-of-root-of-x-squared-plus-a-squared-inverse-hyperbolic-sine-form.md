# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_x_squared_plus_a_squared/Inverse_Hyperbolic_Sine_Form



Theorem
$\ds \int \frac {\d x} {\sqrt {x^2 + a^2} } = \arsinh {\frac x a} + C$


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \arsinh {\frac x a}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds a \sinh u\)





Definition of Real Area Hyperbolic Sine








\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d u}\)

\(=\)







\(\ds a \cosh u\)





Derivative of Hyperbolic Sine








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {\sqrt {x^2 + a^2} }\)

\(=\)







\(\ds \int \frac {a \cosh u} {\sqrt {a^2 \sinh^2 u + a^2} } \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac a a \int \frac {\cosh u} {\sqrt {\sinh^2 u + 1} } \rd u\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \int \frac {\cosh u} {\cosh u} \rd u\)





Difference of Squares of Hyperbolic Cosine and Sine














\(\ds \)

\(=\)







\(\ds \int 1 \rd u\)




















\(\ds \)

\(=\)







\(\ds u + C\)





Integral of Constant














\(\ds \)

\(=\)







\(\ds \arsinh {\frac x a} + C\)





Definition of $u$



$\blacksquare$


Also see
Primitive of $\dfrac 1 {\sqrt {x^2 - a^2} }$: Inverse Hyperbolic Cosine Form
Primitive of $\dfrac 1 {\sqrt {a^2 - x^2} }$


Sources
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text {II}$: Integration of Elementary Functions: $\S 7$. Standard Integrals: $14$.
1945: A. Geary, H.V. Lowry and H.A. Hayden: Advanced Mathematics for Technical Students, Part I ... (previous) ... (next): Chapter $\text {III}$: Integration: Integration
1960: Margaret M. Gow: A Course in Pure Mathematics ... (previous) ... (next): Chapter $10$: Integration: $10.4$. Standard integrals: Standard Forms: $\text {(x)}$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: General Rules of Integration: $14.43$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {x^2 + a^2}$: $14.182$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $20$.
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $6$. Integral Calculus: Appendix: Table of Fundamental Standard Integrals
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $7$: Integrals
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals




