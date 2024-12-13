# 

Source: https://proofwiki.org/wiki/Parametric_Equations_for_Evolute/Formulation_2

Theorem
Let $C$ be a curve expressed as the locus of an equation $\map f {x, y} = 0$.
The parametric equations for the evolute of $C$ can be expressed as:

$\begin{cases}
X = x - \dfrac {y' \paren {x'^2 + y'^2} } {x' y - y' x} \\
Y = y + \dfrac {x' \paren {x'^2 + y'^2} } {x' y - y' x}
\end{cases}$
where:

$\tuple {x, y}$ denotes the Cartesian coordinates of a general point on $C$
$\tuple {X, Y}$ denotes the Cartesian coordinates of a general point on the evolute of $C$
$x'$ and $x$ denote the derivative and second derivative respectively of $x$ with respect to $t$
$y'$ and $y$ denote the derivative and second derivative respectively of $y$ with respect to $t$.


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

$k = \dfrac {x' y - y' x} {\paren {x'^2 + y'^2}^{3/2} }$

We have that:

$\sin \psi = \dfrac {\d y} {\d s} = \dfrac {y'} {\sqrt {x'^2 + y'^2} }$
$\cos \psi = \dfrac {\d x} {\d s} = \dfrac {x'} {\sqrt {x'^2 + y'^2} }$

Substituting for $k$ and $\psi$ in $(1)$ gives:














\(\ds x - X\)

\(=\)







\(\ds \dfrac {\paren {x'^2 + y'^2}^{3/2} } {x' y - y' x} \dfrac {y'} {\sqrt {x'^2 + y'^2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {y' \paren {x'^2 + y'^2} } {x' y - y' x}\)














\(\ds \leadsto \ \ \)





\(\ds X\)

\(=\)







\(\ds x - \dfrac {y' \paren {x'^2 + y'^2} } {x' y - y' x}\)









and:














\(\ds Y - y\)

\(=\)







\(\ds \dfrac {\paren {x'^2 + y'^2}^{3/2} } {x' y - y' x} \dfrac {x'} {\sqrt {x'^2 + y'^2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {x' \paren {x'^2 + y'^2} } {x' y - y' x}\)














\(\ds \leadsto \ \ \)





\(\ds Y\)

\(=\)







\(\ds y + \dfrac {x' \paren {x'^2 + y'^2} } {x' y - y' x}\)









$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.23$: Evolutes and Involutes. The Evolute of a Cycloid




