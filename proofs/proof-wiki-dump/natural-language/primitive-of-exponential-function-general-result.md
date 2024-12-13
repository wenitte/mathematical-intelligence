# 

Source: https://proofwiki.org/wiki/Primitive_of_Exponential_Function/General_Result



Theorem
Let $a \in \R_{>0}$ be a constant such that $a \ne 1$.
Then:

$\ds \int a^x \rd x = \frac {a^x} {\ln a} + C$
where $C$ is an arbitrary constant.


Proof 1













\(\ds \map {\dfrac \d {\d x} } {a^x}\)

\(=\)







\(\ds a^x \ln a\)





Derivative of General Exponential Function








\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac \d {\d x} } {\dfrac {a^x} {\ln a} }\)

\(=\)







\(\ds a^x\)





Derivative of Constant Multiple








\(\ds \leadsto \ \ \)





\(\ds \int a^x \rd x\)

\(=\)







\(\ds \dfrac {a^x} {\ln a}\)





Definition of Primitive (Calculus)



$\blacksquare$


Proof 2
Let $u = x \ln a$.














\(\ds \int a^x \rd x\)

\(=\)







\(\ds \int \map \exp {x \ln a} \rd x\)





Definition of Power to Real Number














\(\ds \)

\(=\)







\(\ds \frac 1 {\ln a} \int \map \exp u \rd u\)





Primitive of Function of Constant Multiple














\(\ds \)

\(=\)







\(\ds \frac {\map \exp u} {\ln a} + C\)





Primitive of Exponential Function














\(\ds \)

\(=\)







\(\ds \frac {\map \exp {x \ln a} } {\ln a} + C\)





Definition of $u$














\(\ds \)

\(=\)







\(\ds \frac {a^x} {\ln a} + C\)





Definition of Power to Real Number



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration
1960: Margaret M. Gow: A Course in Pure Mathematics ... (previous) ... (next): Chapter $10$: Integration: $10.4$. Standard integrals: Other Standard Results: $\text {(xii)}$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: General Rules of Integration: $14.10$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $2$.
1971: Wilfred Kaplan and Donald J. Lewis: Calculus and Linear Algebra ... (previous) ... (next): Appendix $\text I$: Table of Indefinite Integrals $9$.
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $6$. Integral Calculus: Appendix: Table of Fundamental Standard Integrals
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $7$: Integrals
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals




