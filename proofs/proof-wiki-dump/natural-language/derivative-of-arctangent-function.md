# 

Source: https://proofwiki.org/wiki/Derivative_of_Arctangent_Function



Theorem
Let $x \in \R$.
Let $\arctan x$ be the arctangent of $x$.

Then:

$\dfrac {\map \d {\arctan x} } {\d x} = \dfrac 1 {1 + x^2}$


Corollary
$\map {\dfrac \d {\d x} } {\map \arctan {\dfrac x a} } = \dfrac a {a^2 + x^2}$


Proof 1













\(\ds y\)

\(=\)







\(\ds \arctan x\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \tan y\)





Definition of Real Arctangent








\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d y}\)

\(=\)







\(\ds \sec^2 y\)





Derivative of Tangent Function














\(\ds \)

\(=\)







\(\ds 1 + \tan^2 y\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds 1 + x^2\)





Definition of $x$








\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \frac 1 {1 + x^2}\)





Derivative of Inverse Function



$\blacksquare$


Proof 2













\(\ds \frac {\map \d {\arctan x} } {\d x}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \arctan {x + h} - \arctan x} h\)





Definition of Derivative of Real Function at Point














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \arctan {x + h} + \map \arctan {-x} } h\)





Arctangent Function is Odd














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac 1 h \map \arctan {\frac {x + h - x} {1 + x \paren {x + h} } }\)





Sum of Arctangents














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac 1 h \map \arctan {\frac h {1 + x^2 + h x} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac 1 h \paren {\frac h {1 + x^2 + h x} - \frac 1 3 \paren {\frac h {1 + x^2 + h x} }^3 + \frac 1 5 \paren {\frac h {1 + x^2 + h x} }^5 + \map \OO {h^7} }\)





Definition of Real Arctangent














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \paren {\frac 1 {1 + x^2 + h x} - \frac {h^2} {3 \paren {1 + x^2 + h x}^3} + \frac {h^4} {5 \paren {1 + x^2 + h x}^5} + \map \OO {h^6} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {1 + x^2 + 0 x} - \frac {0^2} {3 \paren {1 + x^2 + 0 x}^3} + \frac {0^4} {5 \paren {1 + x^2 + 0 x}^5}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {1 + x^2}\)









$\blacksquare$


Also presented as
The derivative of the arctangent function can also be presented in the form:

$\dfrac {\map \d {\arctan x} } {\d x} = \dfrac 1 {x^2 + 1}$


Also see
Derivative of Arcsine Function
Derivative of Arccosine Function
Derivative of Arccotangent Function
Derivative of Arcsecant Function
Derivative of Arccosecant Function


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $5$. Differential Calculus: Appendix: Derivatives of fundamental functions: $4.$ Inverse trigonometric functions
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 16.5 \ (4)$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): arc-tangent
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Inverse trigonometric functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): inverse trigonometric function
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $6$: Derivatives
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $7$: Derivatives




