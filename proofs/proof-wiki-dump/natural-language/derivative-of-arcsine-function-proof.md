# 

Source: https://proofwiki.org/wiki/Derivative_of_Arcsine_Function/Proof

Theorem
$\dfrac {\map \d {\arcsin x} } {\d x} = \dfrac 1 {\sqrt {1 - x^2} }$


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


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation: Inverse Ratios
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 16.5 \ (3)$




