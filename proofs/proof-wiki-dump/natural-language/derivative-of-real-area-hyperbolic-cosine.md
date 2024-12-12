# 

Source: https://proofwiki.org/wiki/Derivative_of_Real_Area_Hyperbolic_Cosine

Theorem
Let $x \in \R_{>1}$ be a real number.
Let $\arcosh x$ be the real area hyperbolic cosine of $x$.

Then:

$\map {\dfrac \d {\d x} } {\arcosh x} = \dfrac 1 {\sqrt {x^2 - 1} }$


Proof













\(\ds y\)

\(=\)







\(\ds \arcosh x\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \cosh y\)





Definition of Real Area Hyperbolic Cosine








\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d y}\)

\(=\)







\(\ds \sinh y\)





Derivative of Hyperbolic Cosine








\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \frac 1 {\sinh y}\)





Derivative of Inverse Function








\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \pm \frac 1 {\sqrt {\cosh^2 y - 1} }\)





Difference of Squares of Hyperbolic Cosine and Sine




Note that when $y = 0$, $\cosh y$ is defined and equals $1$.
But from Derivative of Hyperbolic Cosine:

$\valueat {\dfrac \d {\d y} \cosh y} {y \mathop = 0} = \sinh 0 = 0$
Thus $\dfrac {\d y} {\d x} = \dfrac 1 {\sinh y}$ is not defined at $y = 0$.
Hence the limitation of the domain of $\map {\dfrac \d {\d x} } {\arcosh x}$ to exclude $x = 1$.

Now it is necessary to determine the sign of $\dfrac {\d y} {\d x}$.
From:

Real Area Hyperbolic Cosine is Strictly Increasing
Derivative of Strictly Increasing Real Function is Strictly Positive
it follows that $\map {\dfrac \d {\d x} } {\arcosh x} > 0$ on $\R_{>1}$.

Thus:

$\dfrac {\d y} {\d x} = \dfrac 1 {\sqrt {\cosh^2 y - 1} }$
where $\sqrt {\cosh^2 y - 1}$ denotes the positive square root of $\cosh^2 y - 1$.
Hence by definition of $x$ and $y$ above:

$\map {\dfrac \d {\d x} } {\arcosh x} = \dfrac 1 {\sqrt {x^2 - 1} }$
$\blacksquare$


Sources
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $5$. Differential Calculus: Appendix: Derivatives of fundamental functions: $7.$ Inverse hyperbolic trigonometric functions
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Inverse hyperbolic functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): inverse hyperbolic function
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $6$: Derivatives
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $7$: Derivatives




