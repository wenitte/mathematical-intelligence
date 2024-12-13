# 

Source: https://proofwiki.org/wiki/Primitive_of_Exponential_of_a_x



Theorem
$\ds \int e^{a x} \rd x = \frac {e^{a x} } a + C$
where $a$ is a non-zero constant.


Proof for Real Numbers
Let $x \in \R$ be a real variable.














\(\ds \int e^x \rd x\)

\(=\)







\(\ds e^x + C\)





Primitive of $e^x$








\(\ds \leadsto \ \ \)





\(\ds \int e^{a x} \rd x\)

\(=\)







\(\ds \frac 1 a \paren {e^{a x} } + C\)





Primitive of Function of Constant Multiple














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } a + C\)





simplifying



$\blacksquare$


Proof for Complex Numbers
Let $z \in \C$ be a complex variable.














\(\ds \map {D_x} {\frac {e^{a z} } a}\)

\(=\)







\(\ds \map {D_x} {\frac 1 a \sum_{n \mathop = 0}^\infty \frac {\paren {a z}^n} {n!} }\)





Definition of Complex Exponential Function














\(\ds \)

\(=\)







\(\ds \map {D_x} {\frac 1 a \sum_{n \mathop = 0}^\infty \frac {a^n z^n} {n!} }\)





Exponent Combination Laws














\(\ds \)

\(=\)







\(\ds \map {D_x} {\sum_{n \mathop = 0}^\infty \frac {a^{n - 1} z^n} {n!} }\)





Summation is Linear: Scaling of Summations














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty n \frac {a^{n - 1} z^{n - 1} } {n!}\)





Derivative of Complex Power Series














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty n \frac {\paren {a z}^{n - 1} } {n!}\)





Exponent Combination Laws














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {a z}^{n - 1} } {\paren {n - 1}!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {a z}^n} {n!}\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds e^{a z}\)





Definition of Complex Exponential Function



The result follows by the definition of the primitive.
$\blacksquare$


Sources
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text {II}$: Integration of Elementary Functions: $\S 7$. Standard Integrals: $3$.
1960: Margaret M. Gow: A Course in Pure Mathematics ... (previous) ... (next): Chapter $10$: Integration: $10.4$. Standard integrals: Standard Forms: $\text {(iii)}$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $e^{a x}$: $14.509$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Back endpapers: A Brief Table of Integrals: $102$.
1971: Wilfred Kaplan and Donald J. Lewis: Calculus and Linear Algebra ... (previous) ... (next): Appendix $\text I$: Table of Indefinite Integrals $8$.
1983: K.G. Binmore: Calculus ... (previous) ... (next): $9$ Sums and Integrals: $9.8$ Standard Integrals
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $7$: Integrals
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals




