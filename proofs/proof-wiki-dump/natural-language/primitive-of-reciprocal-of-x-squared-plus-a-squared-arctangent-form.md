# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_plus_a_squared/Arctangent_Form

  This article was Featured Proof between 15 May 2014 and 04 July 2014.


Theorem
$\ds \int \frac {\d x} {x^2 + a^2} = \frac 1 a \arctan \frac x a + C$
where $a$ is a non-zero constant.


Corollary $1$
$\ds \int \frac {\d x} {1 + x^2} = \arctan x + C$


Corollary $2$
$\ds \int \frac {\d x} {a^2 + b^2 x^2} = \frac 1 {a b} \arctan \frac {b x} a + C$


Proof $1$
Let:

$a \tan \theta = x$
for $\theta \in \openint {-\dfrac \pi 2} {\dfrac \pi 2}$.
From Shape of Tangent Function, this substitution is valid for all real $x$.
Then:














\(\ds x\)

\(=\)







\(\ds a \tan \theta\)





from above








\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d \theta}\)

\(=\)







\(\ds a \sec^2 \theta\)





Derivative of Tangent Function








\(\ds \leadsto \ \ \)





\(\ds \int \frac 1 {x^2 + a^2} \rd x\)

\(=\)







\(\ds \int \frac {a \ \sec^2 \theta} {a^2 \tan^2 \theta + a^2} \rd \theta\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac a {a^2} \int \frac {\sec^2 \theta} {\tan^2 \theta + 1} rd \theta\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\sec^2 \theta} {\sec^2 \theta} \rd \theta\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \theta + C\)





Integral of Constant




As $\theta$ was stipulated to be in the open interval $\openint {-\dfrac \pi 2} {\dfrac \pi 2}$:

$\tan \theta = \dfrac x a \iff \theta = \arctan \dfrac x a$
Thus:

$\ds \int \frac 1 {x^2 + a^2} \rd x = \frac 1 a \arctan \frac x a + C$
$\Box$

When $a = 0$, both $\dfrac x a$ and $\dfrac 1 a$ are undefined.
However, consider the limit of the above primitive as $a \to 0$:














\(\ds \lim_{a \mathop \to 0} \frac 1 a \arctan {\frac x a}\)

\(=\)







\(\ds \lim_{a \mathop \to 0} \frac {\arctan {\frac x a} } a\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \lim_{a \mathop \to 0} \frac {-x a^{-2} } {1 + \frac {x^2} {a^2} }\)





L'Hôpital's Rule, Derivative of Arctangent Function














\(\ds \)

\(=\)







\(\ds \lim_{a \mathop \to 0} \frac {a^{-2} } {a^{-2} } \frac {-x} {x^2 + a^2}\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 x\)









This corresponds with the result:

$\ds \int \frac 1 {x^2} \rd x = \frac {-1} x + C$
which follows from Primitive of Power.
$\blacksquare$


Proof $2$
We have that $x^2 + a^2$ is in the form $a x^2 + b x + c$, where $b^2 - 4 a c < 0$.
Thus from Primitive of $\dfrac 1 {a x^2 + b x + c}$ for $b^2 - 4 a c > 0$:

$\ds \int \frac {\d x} {a x^2 + b x + c} = \frac 2 {\sqrt {4 a c - b^2} } \map \arctan {\frac {2 a x + b} {\sqrt {4 a c - b^2} } } + C$
setting $a := 1, b := 0, c := a^2$:














\(\ds \int \frac 1 {x^2 + a^2} \rd x\)

\(=\)







\(\ds \dfrac 2 {\sqrt {4 a^2 - 0} } \map \arctan {\dfrac {2 x + 0} {\sqrt {4 a^2} } } + C\)





Primitive of $\dfrac 1 {a x^2 + b x + c}$














\(\ds \)

\(=\)







\(\ds \frac 1 a \arctan {\frac x a} + C\)





simplifying



$\blacksquare$


Proof $3$













\(\ds \int \frac {\d x} {x^2 + a^2}\)

\(=\)







\(\ds \frac 1 a \int \frac {\d t} {t^2 + 1}\)





Substitution of $x \to a t$














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\d t} {\paren {1 + i t} \paren {1 - i t} }\)





factoring














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \paren {\int \frac {\d t} {1 + i t} + \int \frac {\d t} {1 - i t} }\)





Definition of Partial Fractions Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \paren {i \map \ln {1 - i t} - i \map \ln {1 + i t} } + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac i {2 a} \map \ln {\frac {1 - i t} {1 + i t} } + C\)





Sum of Logarithms














\(\ds \)

\(=\)







\(\ds \frac 1 a \arctan \frac x a + C\)





Arctangent Logarithmic Formulation and substituting back $t \to \dfrac x a$



$\blacksquare$


Proof $4$













\(\ds \map {\dfrac \d {\d x} } {\frac 1 a \arctan \frac x a}\)

\(=\)







\(\ds \frac 1 a \paren {\dfrac a {a^2 + x^2} }\)





Derivative of Arctangent Function: Corollary and Derivative of Constant Multiple














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2 + x^2}\)





simplification








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {x^2 + a^2}\)

\(=\)







\(\ds \frac 1 a \arctan \frac x a + C\)





Fundamental Theorem of Calculus



$\blacksquare$


Also see
Derivative of Arctangent Function
Primitive of $\dfrac 1 {x^2 - a^2}$
Primitive of $\dfrac 1 {a^2 - x^2}$


Sources
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text {II}$: Integration of Elementary Functions: $\S 7$. Standard Integrals: $13$.
1945: A. Geary, H.V. Lowry and H.A. Hayden: Advanced Mathematics for Technical Students, Part I ... (previous) ... (next): Chapter $\text {III}$: Integration: Integration
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration: Algebraic Integration: $\text {II}$.
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration
1960: Margaret M. Gow: A Course in Pure Mathematics ... (previous) ... (next): Chapter $10$: Integration: $10.4$. Standard integrals: Standard Forms: $\text {(vi)}$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: General Rules of Integration: $14.39$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^2 + a^2$: $14.125$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $16$.
1971: Wilfred Kaplan and Donald J. Lewis: Calculus and Linear Algebra ... (previous) ... (next): Appendix $\text I$: Table of Indefinite Integrals $12$.
1972: Frank Ayres, Jr. and J.C. Ault: Theory and Problems of Differential and Integral Calculus (SI ed.) ... (previous) ... (next): Chapter $25$: Fundamental Integration Formulas: $19$.
1974: Murray R. Spiegel: Theory and Problems of Advanced Calculus (SI ed.) ... (previous) ... (next): Chapter $5$. Integrals: Integrals of Special Functions: $27$
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $6$. Integral Calculus: Appendix: Table of Fundamental Standard Integrals
1983: K.G. Binmore: Calculus ... (previous) ... (next): $9$ Sums and Integrals: $9.8$ Standard Integrals
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $7$: Integrals
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals




