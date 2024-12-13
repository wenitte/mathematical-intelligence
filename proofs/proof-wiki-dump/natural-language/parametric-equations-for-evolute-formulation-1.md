# 

Source: https://proofwiki.org/wiki/Parametric_Equations_for_Evolute/Formulation_1

Theorem
Let $C$ be a curve expressed as the locus of an equation $\map f {x, y} = 0$.
The parametric equations for the evolute of $C$ can be expressed as:

$\begin{cases}
X = x - \dfrac {y' \paren {1 + y'^2} } {y} \\
Y = y + \dfrac {1 + y'^2} {y}
\end{cases}$
where:

$\tuple {x, y}$ denotes the Cartesian coordinates of a general point on $C$
$\tuple {X, Y}$ denotes the Cartesian coordinates of a general point on the evolute of $C$
$y'$ and $y$ denote the derivative and second derivative respectively of $y$ with respect to $x$.


Proof


Let $P = \tuple {x, y}$ be a general point on $C$.
Let $Q = \tuple {X, Y}$ be the center of curvature of $C$ at $P$.

From the above diagram:

$x - X = \pm \rho \sin \psi$
$Y - y = \pm \rho \cos \psi$
where:

$\rho$ is the radius of curvature of $C$ at $P$
$\psi$ is the angle between the tangent to $C$ at $P$ and the $x$-axis.
Whether the sign is plus or minus depends on whether the curve is convex or concave.

By definition of radius of curvature:

$(1): \quad \begin {cases} x - X = \dfrac 1 k \sin \psi \\
Y - y = \dfrac 1 k \cos \psi \end {cases}$
where $k$ is the curvature of $C$ at $P$, given by:

$k = \dfrac {y} {\paren {1 + y'^2}^{3/2} }$

We have that:

$\sin \psi = \dfrac {\d y} {\d s} = \dfrac {y'} {\sqrt {1 + y'^2} }$
$\cos \psi = \dfrac {\d x} {\d s} = \dfrac 1 {\sqrt {1 + y'^2} }$

Substituting for $k$ and $\psi$ in $(1)$ gives:














\(\ds x - X\)

\(=\)







\(\ds \dfrac {\paren {1 + y'^2}^{3/2} } {y} \dfrac {y'} {\sqrt {1 + y'^2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {y' \paren {1 + y'^2} } {y}\)














\(\ds \leadsto \ \ \)





\(\ds X\)

\(=\)







\(\ds x - \dfrac {y' \paren {1 + y'^2} } {y}\)









and:














\(\ds Y - y\)

\(=\)







\(\ds \dfrac {\paren {1 + y'^2}^{3/2} } {y} \dfrac 1 {\sqrt {1 + y'^2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 + y'^2} {y}\)














\(\ds \leadsto \ \ \)





\(\ds Y\)

\(=\)







\(\ds y + \dfrac {1 + y'^2} {y}\)









$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.23$: Evolutes and Involutes. The Evolute of a Cycloid




