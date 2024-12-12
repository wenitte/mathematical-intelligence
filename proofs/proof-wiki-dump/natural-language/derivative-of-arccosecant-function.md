# 

Source: https://proofwiki.org/wiki/Derivative_of_Arccosecant_Function



Theorem
Let $x \in \R$ be a real number such that $\size x > 1$.
Let $\arccsc x$ denote the arccosecant of $x$.

Then:

$\dfrac {\map \d {\arccsc x} } {\d x} = \dfrac {-1} {\size x \sqrt {x^2 - 1} } = \begin {cases} \dfrac {-1} {x \sqrt {x^2 - 1} } & : 0 < \arccsc x < \dfrac \pi 2 \ (\text {that is: $x > 1$}) \\
\dfrac {+1} {x \sqrt {x^2 - 1} } & : -\dfrac \pi 2 < \arccsc x < 0 \ (\text {that is: $x < -1$})  \\
\end{cases}$


Corollary
$\map {\dfrac \d {\d x} } {\map \arccsc {\dfrac x a} }  = \dfrac {-a} {\size x {\sqrt {x^2 - a^2} } } = \begin{cases} \dfrac {-a} {x \sqrt {x^2 - a^2} } & : 0 < \arccsc \dfrac x a < \dfrac \pi 2 \\
\dfrac a {x \sqrt {x^2 - a^2} } & : -\dfrac \pi 2 < \arccsc \dfrac x a < 0 \\
\end{cases}$


Proof
  Arccosecant Function

Let $y = \arccsc x$ where  $x < -1$ or $x > 1$.
Then:














\(\ds y\)

\(=\)







\(\ds \arccsc x\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \csc y\)





where $y \in \closedint 0 \pi \land y \ne \dfrac pi 2$








\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d y}\)

\(=\)







\(\ds -\csc y \cot y\)





Derivative of Cosecant Function








\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \frac {-1} {\csc y \cot y}\)





Derivative of Inverse Function








\(\ds \leadsto \ \ \)





\(\ds \paren {\frac {\d y} {\d x} }^2\)

\(=\)







\(\ds \frac 1 {\csc^2 y \cot^2 y}\)





squaring both sides














\(\ds \)

\(=\)







\(\ds \frac 1 {\csc^2 y \paren {\csc^2 y - 1} }\)





Difference of Squares of Cosecant and Cotangent














\(\ds \)

\(=\)







\(\ds \frac 1 {x^2 \paren {x^2 - 1} }\)





Definition of $x$








\(\ds \leadsto \ \ \)





\(\ds \size {\dfrac {\d y} {\d x} }\)

\(=\)







\(\ds \dfrac 1 {\size x \sqrt {x^2 - 1} }\)





squaring both sides




Since $\dfrac {\d y} {\d x} = \dfrac {-1} {\csc y \cot y}$, the sign of $\dfrac {\d y} {\d x}$ is opposite to the sign of $\csc y \cot y$.
Writing $\csc y \cot y$ as $\dfrac {\cos y} {\sin^2 y}$, it is evident that the sign of $\dfrac {\d y} {\d x}$ is opposite to the sign of $\cos y$.
From Sine and Cosine are Periodic on Reals, $\cos y$ is never negative on its domain ($y \in \closedint {-\dfrac \pi 2} {\dfrac \pi 2} \land y \ne 0$).
However, by definition of the arccosecant of $x$:

$0 < \arccsc x < \dfrac \pi 2 \implies x > 1$
$-\dfrac \pi 2 < \arccsc x < 0 \implies x < -1$
Thus:

$\dfrac {\map \d {\arccsc x} } {\d x} = \dfrac {-1} {\size x \sqrt {x^2 - 1} } = \begin {cases} \dfrac {-1} {x \sqrt {x^2 - 1} } & : 0 < \arccsc x < \dfrac \pi 2 \ (\text {that is: $x > 1$}) \\
\dfrac {+1} {x \sqrt {x^2 - 1} } & : -\dfrac \pi 2 < \arccsc x < 0 \ (\text {that is: $x < -1$}) \\
\end{cases}$
$\blacksquare$


Also see
Derivative of Arcsine Function
Derivative of Arccosine Function
Derivative of Arctangent Function
Derivative of Arccotangent Function
Derivative of Arcsecant Function


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): arc-cosecant
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Inverse trigonometric functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
Weisstein, Eric W. "Inverse Cosecant." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/InverseCosecant.html




