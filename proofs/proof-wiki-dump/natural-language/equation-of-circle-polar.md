# 

Source: https://proofwiki.org/wiki/Equation_of_Circle/Polar

Theorem
The equation of a circle with radius $R$ and center $\polar {r_0, \varphi}$ can be expressed in polar coordinates as:

$r^2 - 2 r r_0 \map \cos {\theta - \varphi} + \paren {r_0}^2 = R^2$

where:

$r_0$ is the distance of the center from the origin
$\varphi$ is the angle of the center from the polar axis in the counterclockwise direction
$r$ is a function of $\theta$.


Corollary
Let $C$ be a circle whose radius is $R$.
Let $C$ be aligned in a polar coordinate frame such that its center is at the origin.
Then the equation of a $C$ is given by:

$r = R$


Proof
Let the point $\polar {r, \theta}_\text {Polar}$ satisfy the equation:

$r^2 - 2 r r_0 \map \cos {\theta - \varphi} + \paren {r_0}^2 = R^2$

Let the points $\polar {r, \theta}$ and $\polar {r_0, \varphi}$ be rewritten in Cartesian coordinates:

$\polar {r, \theta}_\text {Polar} = \tuple {r \cos \theta, r \sin \theta}_\text{Cartesian}$
$\polar {r_0, \varphi}_\text{Polar} = \tuple {r_0 \cos \varphi, r_0 \sin \varphi}_\text{Cartesian}$

Thus the distance between $\polar {r, \theta}_\text {Polar}$ and $\polar {r_0, \varphi}_\text{Polar}$ is:














\(\ds \)

\(\)







\(\ds \sqrt {\paren {r \cos \theta - r_0 \cos \varphi}^2 + \paren {r \sin \theta - r_0 \sin \varphi}^2}\)




















\(\ds \)

\(=\)







\(\ds \sqrt {r^2 \cos^2 \theta + \paren {r_0}^2 \cos^2 \varphi - 2 r r_0 \cos \theta \cos \varphi + r^2 \sin^2 \theta + \paren {r_0}^2 \sin^2 \varphi - 2 r r_0 \sin \theta \sin \varphi}\)




















\(\ds \)

\(=\)







\(\ds \sqrt {r^2 \paren {\cos^2 \theta + \sin^2 \theta} + \paren {r_0}^2 \paren {\cos^2 \varphi + \sin^2 \varphi} - 2 r r_0 \paren {\cos \theta \cos \varphi + \sin \theta \sin \varphi} }\)






















\(\ds \)

\(=\)







\(\ds \sqrt {r^2 + \paren {r_0}^2 - 2 r r_0 \map \cos {\theta - \varphi} }\)





Cosine of Difference and Sum of Squares of Sine and Cosine



But from the equation, this quantity equals $R$.
Therefore the distance between points satisfying the equation and the center is constant and equal to the radius $R$.
$\blacksquare$





