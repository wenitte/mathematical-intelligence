# 

Source: https://proofwiki.org/wiki/Second_Derivative_of_Locus_of_Cycloid

Theorem
Consider a circle of radius $a$ rolling without slipping along the x-axis of a cartesian plane.
Consider the point $P$ on the circumference of this circle which is at the origin when its center is on the y-axis.
Consider the cycloid traced out by the point $P$.
Let $\tuple {x, y}$ be the coordinates of $P$ as it travels over the plane.

The second derivative of the locus of $P$ is given by:

$y = -\dfrac a {y^2}$


Proof
From Equation of Cycloid:

$x = a \paren {\theta - \sin \theta}$
$y = a \paren {1 - \cos \theta}$

From Slope of Tangent to Cycloid:














\(\ds y'\)

\(=\)







\(\ds \cot \dfrac \theta 2\)





Slope of Tangent to Cycloid








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d y'} {\d x}\)

\(=\)







\(\ds \dfrac {\d} {\d \theta} \cot \dfrac \theta 2 \frac {\d \theta} {\d x}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -\dfrac 1 2 \csc^2 \dfrac \theta 2 / \dfrac {\d x} {\d \theta}\)





Derivative of Cotangent Function














\(\ds \)

\(=\)







\(\ds -\dfrac 1 2 \csc^2 \dfrac \theta 2 \paren {\dfrac 1 {a \paren {1 - \cos \theta} } }\)





Derivative of Sine Function














\(\ds \)

\(=\)







\(\ds -\dfrac 1 {2 \sin^2 \dfrac \theta 2} \paren {\dfrac 1 {a \paren {1 - \cos \theta} } }\)





Definition of Cosecant














\(\ds \)

\(=\)







\(\ds -\dfrac 1 {1 - \cos \theta} \paren {\dfrac 1 {a \paren {1 - \cos \theta} } }\)





Double Angle Formula for Cosine: Corollary $5$














\(\ds \)

\(=\)







\(\ds -\dfrac a {y^2}\)





from $y = a \paren {1 - \cos \theta}$



$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.21$: The Cycloid: Problem $2$




