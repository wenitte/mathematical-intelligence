# 

Source: https://proofwiki.org/wiki/Derivative_of_Arccosine_Function



Theorem
Let $x \in \R$ be a real number such that $-1 < x < 1$.
Let $\arccos x$ be the arccosine of $x$.

Then:

$\map {D_x} {\arccos x} = \dfrac {-1} {\sqrt {1 - x^2} }$


Corollary
$\map {\dfrac \d {\d x} } {\map \arccos {\dfrac x a} } = \dfrac {-1} {\sqrt {a^2 - x^2} }$


Proof
Let $y = \arccos x$ where $-1 < x < 1$.
Then:

$x = \cos y$
Then from Derivative of Cosine Function:

$\dfrac {\d x} {\d y} = -\sin y$
Hence from Derivative of Inverse Function:

$\dfrac {\d y} {\d x} = \dfrac {-1} {\sin y}$
From Sum of Squares of Sine and Cosine, we have:

$\cos^2 y + \sin^2 y = 1 \implies \sin y = \pm \sqrt {1 - \cos^2 y}$
Now $\sin y \ge 0$ on the range of $\arccos x$, that is, for $y \in \closedint 0 \pi$.
Thus it follows that we need to take the positive root of $\sqrt {1 - \cos^2 y}$.
So:

$\dfrac {\d y} {\d x} = \dfrac {-1} {\sqrt {1 - \cos^2 y} }$
and hence the result.
$\blacksquare$


Also see
Derivative of Arcsine Function
Derivative of Arctangent Function
Derivative of Arccotangent Function
Derivative of Arcsecant Function
Derivative of Arccosecant Function


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 16.5 \ (3)$
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $5$. Differential Calculus: Appendix: Derivatives of fundamental functions: $4.$ Inverse trigonometric functions
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Inverse trigonometric functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): inverse trigonometric function
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $6$: Derivatives
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $7$: Derivatives




