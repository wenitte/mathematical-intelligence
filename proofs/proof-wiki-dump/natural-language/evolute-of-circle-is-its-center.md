# 

Source: https://proofwiki.org/wiki/Evolute_of_Circle_is_its_Center

Theorem
The evolute of a circle is a single point: its center.


Proof
By definition, the evolute of $C$ is the locus of the centers of curvature of each point on $C$
Without loss of generality, take the circle $C$ of radius $a$ whose center is positioned at the origin of a cartesian plane.
From Equation of Circle, $C$ has the equation:

$x^2 + y^2 = a^2$
From the definition of curvature in cartesian form:

$k = \dfrac {y} {\paren {1 + y'^2}^{3/2} }$
Here we have:














\(\ds 2 x + 2 y \frac {\d y} {\d x}\)

\(=\)







\(\ds 0\)





differentiating with respect to $x$








\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds -\frac x y\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d^2 y} {\d x^2}\)

\(=\)







\(\ds \frac {x \frac {\d y} {\d x} - y} {y^2}\)





Quotient Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {y - x \paren {-\frac x y} } {y^2}\)





substituting for $\dfrac {\d y} {\d x}$














\(\ds \)

\(=\)







\(\ds \frac {y^2 + x^2} {y^3}\)





simplifying



So:














\(\ds k\)

\(=\)







\(\ds \dfrac {\frac {y^2 + x^2} {y^3} } {\paren {1 + \paren {-\frac x y}^2}^{3/2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {y^2 + x^2} {y^3 \paren {1 + \frac {x^2} {y^2} }^{3/2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {y^2 + x^2} {y^3 \paren {\frac {y^2 + x^2} {y^2} }^{3/2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {y^2 + x^2} {\paren {y^2 + x^2}^{3/2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\paren {y^2 + x^2}^{1/2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 a\)





as $x^2 + y^2 = a^2$



Thus the curvature of $C$ is constant.
The radius of curvature of $C$ is likewise constant:

$\rho = a$
From Radius at Right Angle to Tangent, the normal to $C$ at all points on $C$ passes through the center of $C$.
We have that $a$ is the distance from $C$ to the center of $C$.
Thus it follows that the center of curvature of $C$ is the center of $C$ at all points.
Hence the result by definition of evolute.
$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.23$: Evolutes and Involutes. The Evolute of a Cycloid
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): evolute
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): evolute




