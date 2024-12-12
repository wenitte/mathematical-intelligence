# 

Source: https://proofwiki.org/wiki/Derivative_of_Inverse_Hyperbolic_Cosecant

Theorem
Let $x \in \R_{\ne 0}$.
Let $\arcsch x$ denote the inverse hyperbolic cosecant of $x$.

Then:

$\map {\dfrac \d {\d x} } {\arcsch x} = \dfrac {-1} {\size x \sqrt {1 + x^2} }$


Proof

Let $x > 1$.
Then we have:














\(\ds y\)

\(=\)







\(\ds \arcsch x\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \csch y\)





where $y \ne 0$








\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d y}\)

\(=\)







\(\ds -\csch y \coth y\)





Derivative of Hyperbolic Cosecant








\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \dfrac {-1} {\csch y \coth y}\)





Derivative of Inverse Function








\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \frac {-1} {\csch y \sqrt {1 + \csch^2 y} }\)





Difference of Squares of Hyperbolic Cotangent and Cosecant








\(\ds \leadsto \ \ \)





\(\ds \map {\frac \d {\d x} } {\arcsch x}\)

\(=\)







\(\ds \frac {-1} {x \sqrt {1 + x^2} }\)





Definition of $x$ and $y$














\(\ds \)

\(=\)







\(\ds \frac {-1} {\size x \sqrt {1 + x^2} }\)





as $x > 0$




We have that Inverse Hyperbolic Cosecant is Odd Function.
Hence from Derivative of Odd Function is Even, $\map {\dfrac \d {\d x} } {\arcsch x}$ is even.
Hence for $x < -1$ we have that:

$\map {\dfrac \d {\d x} } {\arcsch x} = \dfrac {-1} {\paren {-x} \sqrt {1 + x^2} }$
and so for $x < -1$:

$\map {\dfrac \d {\d x} } {\arcsch x} = \dfrac {-1} {\size x \sqrt {1 + x^2} }$
and the result follows.
$\blacksquare$


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Inverse hyperbolic functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives




