# 

Source: https://proofwiki.org/wiki/Derivative_of_Inverse_Hyperbolic_Sine

Theorem
Let $x \in \R$ be a real number.
Let $\arsinh x$ denote the inverse hyperbolic sine of $x$.

Then:

$\map {\dfrac \d {\d x} } {\arsinh x} = \dfrac 1 {\sqrt {x^2 + 1} }$


Proof













\(\ds y\)

\(=\)







\(\ds \arsinh x\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \sinh y\)





Definition of Real Inverse Hyperbolic Sine








\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d y}\)

\(=\)







\(\ds \cosh y\)





Derivative of Hyperbolic Sine








\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \frac 1 {\cosh y}\)





Derivative of Inverse Function








\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \pm \frac 1 {\sqrt {\sinh^2 y + 1} }\)





Difference of Squares of Hyperbolic Cosine and Sine



For all $x \in \R$ we have that $\cosh y \ge 1$.
Thus it follows that it is necessary to take the positive root of $\sqrt {\sinh^2 y + 1}$.

So:














\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \frac 1 {\sqrt {\sinh^2 y + 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \map {\frac \d {\d x} } {\arsinh x}\)

\(=\)







\(\ds \frac 1 {\sqrt {x^2 + 1} }\)





Definition of $x$ and $y$



$\blacksquare$


Sources
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $5$. Differential Calculus: Appendix: Derivatives of fundamental functions: $7.$ Inverse hyperbolic trigonometric functions
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Inverse hyperbolic functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): inverse hyperbolic function
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $6$: Derivatives
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $7$: Derivatives




