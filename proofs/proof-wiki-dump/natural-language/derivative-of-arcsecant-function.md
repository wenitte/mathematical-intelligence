# 

Source: https://proofwiki.org/wiki/Derivative_of_Arcsecant_Function



Theorem
Let $x \in \R$ be a real number such that $\size x > 1$.
Let $\arcsec x$ be the arcsecant of $x$.

Then:

$\dfrac {\map \d {\arcsec x} } {\d x} = \dfrac 1 {\size x \sqrt {x^2 - 1} } = \begin {cases} \dfrac {+1} {x \sqrt {x^2 - 1} } & : 0 < \arcsec x < \dfrac \pi 2 \ (\text {that is: $x > 1$}) \\
\dfrac {-1} {x \sqrt {x^2 - 1} } & : \dfrac \pi 2 < \arcsec x < \pi \ (\text {that is: $x < -1$})  \\
\end{cases}$


Corollary 1
$\map {\dfrac \d {\d x} } {\map \arcsec {\dfrac x a} } = \dfrac a {\size x \sqrt {x^2 - a^2} } = \begin {cases} \dfrac a {x \sqrt {x^2 - a^2} } & : 0 < \arcsec \dfrac x a < \dfrac \pi 2 \ (\text {that is: $x > a$})  \\
\dfrac {-a} {x \sqrt {x^2 - a^2} } & : \dfrac \pi 2 < \arcsec \dfrac x a < \pi \ (\text {that is: $x < -a$}) \\
\end{cases}$


Corollary 2
$\dfrac {\map \d {\arcsec x} } {\d x} = \dfrac 1 {x^2 \sqrt {1 - \frac 1 {x^2} } }$


Proof
  Arcsecant Function

Let $y = \arcsec x$ where $\size x > 1$.
Then:














\(\ds y\)

\(=\)







\(\ds \arcsec x\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \sec y\)





where $y \in \closedint 0 \pi \land y \ne \dfrac \pi 2$








\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d y}\)

\(=\)







\(\ds \sec y \ \tan y\)





Derivative of Secant Function








\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \dfrac 1 {\sec y \tan y}\)





Derivative of Inverse Function








\(\ds \leadsto \ \ \)





\(\ds \paren {\frac {\d y} {\d x} }^2\)

\(=\)







\(\ds \frac 1 {\sec^2 y \ \tan^2 y}\)





squaring both sides














\(\ds \)

\(=\)







\(\ds \frac 1 {\sec^2 y \paren {\sec^2 y - 1} }\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds \frac 1 {x^2 \paren {x^2 - 1} }\)





Definition of $x$








\(\ds \leadsto \ \ \)





\(\ds \size {\dfrac {\d y} {\d x} }\)

\(=\)







\(\ds \dfrac 1 {\size x \sqrt {x^2 - 1} }\)





squaring both sides




Since $\dfrac {\d y} {\d x} = \dfrac 1 {\sec y \tan y}$, the sign of $\dfrac {\d y} {\d x}$ is the same as the sign of $\sec y \tan y$.
Writing $\sec y \tan y$ as $\dfrac {\sin y} {\cos^2 y}$, it is evident that the sign of $\dfrac {\d y} {\d x}$ is the same as the sign of $\sin y$.

From Sine and Cosine are Periodic on Reals, $\sin y$ is never negative on its domain ($y \in \closedint 0 \pi \land y \ne \pi/2$).
However, by definition of the arcsecant of $x$:

$0 < \arcsec x < \dfrac \pi 2 \implies x > 1$
$\dfrac \pi 2 < \arcsec x < \pi \implies x < -1$
Thus:

$\dfrac {\map \d {\arcsec x} } {\d x} = \dfrac 1 {\size x \sqrt {x^2 - 1} } = \begin{cases} \dfrac {+1} {x \sqrt {x^2 - 1} } & : 0 < \arcsec x < \dfrac \pi 2 \ (\text {that is: $x > 1$})  \\
\dfrac {-1} {x \sqrt {x^2 - 1} } & : \dfrac \pi 2 < \arcsec x < \pi \ (\text {that is: $x < -1$}) \\
\end{cases}$
Hence the result.
$\blacksquare$


Also see
Derivative of Arcsine Function
Derivative of Arccosine Function
Derivative of Arctangent Function
Derivative of Arccotangent Function
Derivative of Arccosecant Function


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Inverse trigonometric functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
Weisstein, Eric W. "Inverse Secant." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/InverseSecant.html




