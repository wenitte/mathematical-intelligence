# 

Source: https://proofwiki.org/wiki/Primitive_of_Power



Theorem
Let $n \in \R: n \ne -1$.

Then:

$\ds \int x^n \rd x = \frac {x^{n + 1} } {n + 1} + C$
where $C$ is an arbitrary constant.

That is:

$\dfrac {x^{n + 1} } {n + 1}$ is a primitive of $x^n$.


Proof













\(\ds \map {\frac \d {\d x} } {\dfrac {x^{n + 1} } {n + 1} }\)

\(=\)







\(\ds \paren {n + 1} \paren {\dfrac {x^{\paren {n + 1} - 1} } {n + 1} }\)





Power Rule for Derivatives














\(\ds \)

\(=\)







\(\ds x^n\)














\(\ds \leadsto \ \ \)





\(\ds \int x^n \rd x\)

\(=\)







\(\ds \frac {x^{n + 1} } {n + 1} + C\)





Definition of Primitive (Calculus)



When $n = -1$ we have $n + 1 = 0$, and $\dfrac {x^{n + 1} } {n + 1} = \dfrac {x^0} 0$ is undefined.
$\blacksquare$


Also known as
Some sources refer to Primitive of Power as the reverse power rule, as it is the "reverse" of the Power Rule for Derivatives.
It is even suggested that it could be called the anti-power rule, but this appears to be unlikely to catch on.


Examples
Primitive of $x$ with respect to $x$
$\ds \int x \rd x = \dfrac {x^2} 2 + C$


Primitive of $\sqrt x$ with respect to $x$
$\ds \int \sqrt x \rd x = \dfrac {2 x^{3 / 2} } 3 = \dfrac {2 \sqrt x^3} 3$


Also see
Primitive of Reciprocal for the case where $n = -1$


Sources
1945: A. Geary, H.V. Lowry and H.A. Hayden: Advanced Mathematics for Technical Students, Part I ... (next): Chapter $\text {III}$: Integration: Integration
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration
1960: Margaret M. Gow: A Course in Pure Mathematics ... (previous) ... (next): Chapter $10$: Integration: $10.4$. Standard integrals: Standard Forms: $\text {(i) (a)}$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: General Rules of Integration: $14.7$
1971: Wilfred Kaplan and Donald J. Lewis: Calculus and Linear Algebra ... (previous) ... (next): Appendix $\text I$: Table of Indefinite Integrals $5$.
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $6$. Integral Calculus: Appendix: Table of Fundamental Standard Integrals
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $7$: Integrals
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals




