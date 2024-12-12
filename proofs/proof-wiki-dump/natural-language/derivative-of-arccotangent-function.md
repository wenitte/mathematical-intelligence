# 

Source: https://proofwiki.org/wiki/Derivative_of_Arccotangent_Function



Theorem
Let $x \in \R$.
Let $\arccot x$ be the arccotangent of $x$.

Then:

$\dfrac {\map \d {\arccot x} } {\d x} = \dfrac {-1} {1 + x^2}$


Corollary
$\map {\dfrac \d {\d x} } {\map \arccot {\dfrac x a} } = \dfrac {-a} {a^2 + x^2}$


Proof 1













\(\ds y\)

\(=\)







\(\ds \arccot x\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \cot y\)





Definition of Real Arccotangent








\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d y}\)

\(=\)







\(\ds -\csc^2 y\)





Derivative of Cotangent Function














\(\ds \)

\(=\)







\(\ds -\paren {1 + \cot^2 y}\)





Difference of Squares of Cosecant and Cotangent














\(\ds \)

\(=\)







\(\ds -\paren {1 + x^2}\)





Definition of $x$








\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \frac {-1} {1 + x^2}\)





Derivative of Inverse Function



$\blacksquare$


Proof 2













\(\ds \frac {\map \d {\arccot x} } {\d x}\)

\(=\)







\(\ds \map {\frac \d {\d x} } {\frac \pi 2 - \arctan x}\)





Tangent of Complement equals Cotangent














\(\ds \)

\(=\)







\(\ds -\frac 1 {1 + x^2}\)





Derivative of Arctangent Function



$\blacksquare$


Also presented as
The derivative of the crccotangent function can also be presented in the form:

$\dfrac {\map \d {\arccot x} } {\d x} = \dfrac {-1} {x^2 + 1}$


Also see
Derivative of Arcsine Function
Derivative of Arccosine Function
Derivative of Arctangent Function
Derivative of Arcsecant Function
Derivative of Arccosecant Function


Sources
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $5$. Differential Calculus: Appendix: Derivatives of fundamental functions: $4.$ Inverse trigonometric functions
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Inverse trigonometric functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives




