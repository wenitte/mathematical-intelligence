# 

Source: https://proofwiki.org/wiki/Derivative_of_Arcsine_Function



Theorem
Let $x \in \R$ be a real number such that $\size x < 1$, that is, $\size {\arcsin x} < \dfrac \pi 2$.
Let $\arcsin x$ be the real arcsine of $x$.

Then:

$\dfrac {\map \d {\arcsin x} } {\d x} = \dfrac 1 {\sqrt {1 - x^2} }$


Corollary
$\map {\dfrac \d {\d x} } {\map \arcsin {\dfrac x a} } = \dfrac 1 {\sqrt {a^2 - x^2} }$


Proof
Let $y = \arcsin x$ where $-1 < x < 1$.

Then:














\(\ds x\)

\(=\)







\(\ds \sin y\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d x} {\d y}\)

\(=\)







\(\ds \cos y\)





Derivative of Sine Function




Then:














\(\ds \cos^2 y + \sin^2 y\)

\(=\)







\(\ds 1\)





Sum of Squares of Sine and Cosine








\(\ds \leadsto \ \ \)





\(\ds \cos y\)

\(=\)







\(\ds \pm \sqrt {1 - \sin^2 y}\)










Now $\cos y \ge 0$ on the image of $\arcsin x$, that is:

$y \in \closedint {-\dfrac \pi 2} {\dfrac \pi 2}$
Thus it follows that we need to take the positive root of $\sqrt {1 - \sin^2 y}$.

So:














\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \frac 1 {\sqrt {1 - \sin^2 y} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {1 - x^2} }\)









$\blacksquare$


Also see
Derivative of Arccosine Function
Derivative of Arctangent Function
Derivative of Arccotangent Function
Derivative of Arcsecant Function
Derivative of Arccosecant Function


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $5$. Differential Calculus: Appendix: Derivatives of fundamental functions: $4.$ Inverse trigonometric functions
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Inverse trigonometric functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): inverse trigonometric function
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $6$: Derivatives
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $7$: Derivatives




