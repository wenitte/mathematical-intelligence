# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal



Theorem
$\ds \int \frac {\d x} x = \ln \size x + C$
for $x \ne 0$.


Corollary 1
$\ds \int \frac {\d x} x = \ln x + C$
for $x > 0$.


Corollary 2
$\dfrac {\d} {\d x} \ln \size x = \dfrac 1 x$
for $x \ne 0$.


Proof
Suppose $x > 0$.
Then:

$\ln \size x = \ln x$
The result follows from Derivative of Natural Logarithm Function and the definition of primitive.

Suppose $x < 0$.
Then:














\(\ds \dfrac \d {\d x} \ln \size x\)

\(=\)







\(\ds \dfrac \d {\d x} \map \ln {-x}\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds \frac 1 {-x} \cdot -1\)





Chain Rule for Derivatives and Derivative of Natural Logarithm Function, as $-x > 0$














\(\ds \)

\(=\)







\(\ds \frac 1 x\)









and the result again follows from the definition of the primitive.
$\blacksquare$


Also presented as
Some sources, when presenting Primitive of Reciprocal, gloss over the case where $x < 0$ and merely present this result as:

$\ds \int \frac {\d x} x = \ln x + C$


Examples
Integral of $\dfrac 1 {x - 5}$ from $2$ to $3$
$\ds \int_2^3 \dfrac {\d x} {x - 5} = \ln \dfrac 2 3$


Sources
1945: A. Geary, H.V. Lowry and H.A. Hayden: Advanced Mathematics for Technical Students, Part I ... (previous) ... (next): Chapter $\text {III}$: Integration: Integration
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration
1960: Margaret M. Gow: A Course in Pure Mathematics ... (previous) ... (next): Chapter $10$: Integration: $10.4$. Standard integrals: Standard Forms: $\text {(ii) (a)}$
1971: Wilfred Kaplan and Donald J. Lewis: Calculus and Linear Algebra ... (previous) ... (next): Appendix $\text I$: Table of Indefinite Integrals $6$.
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $6$. Integral Calculus: Appendix: Table of Fundamental Standard Integrals
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.): $\S 5.1$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $7$: Integrals
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals




