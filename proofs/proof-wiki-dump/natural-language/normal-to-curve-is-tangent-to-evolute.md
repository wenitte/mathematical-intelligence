# 

Source: https://proofwiki.org/wiki/Normal_to_Curve_is_Tangent_to_Evolute

Theorem
Let $C$ be a curve defined by a real function which is twice differentiable.
Let the curvature of $C$ be non-constant.
Let $P$ be a point on $C$.
Let $Q$ be the center of curvature of $C$ at $P$.

The normal to $C$ at $P$ is tangent to the evolute $E$ of $C$ at $Q$.


Proof


Let $P = \tuple {x, y}$ be a general point on $C$.
Let $Q = \tuple {X, Y}$ be the center of curvature of $C$ at $P$.

From the above diagram:

$(1): \quad \begin{cases} x - X = \pm \rho \sin \psi \\ Y - y = \pm \rho \cos \psi \end{cases}$
where:

$\rho$ is the radius of curvature of $C$ at $P$
$\psi$ is the angle between the tangent to $C$ at $P$ and the $x$-axis.

Whether the sign is plus or minus depends on whether the curve is convex or concave.
For simplicity, let it be assumed that the curvature $k$ at each point under consideration on $C$ is positive.
The case for $k < 0$ can then be treated similarly.

Thus we have $k > 0$ and so $(1)$ can be written:

$(2): \quad \begin{cases} X = x - \rho \sin \psi \\ Y = y +\rho \cos \psi \end{cases}$
By definition of curvature:

$k = \dfrac {\d \psi} {\d s}$
and:

$\rho = \dfrac 1 k = \dfrac {\d s} {\d \psi}$

Hence:














\(\ds \rho \sin \psi\)

\(=\)







\(\ds \dfrac {\d s} {\d \psi} \dfrac {\d y} {\d s}\)










\(\text {(3)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac {\d y} {\d \psi}\)









and:














\(\ds \rho \cos \psi\)

\(=\)







\(\ds \dfrac {\d s} {\d \psi} \dfrac {\d x} {\d s}\)










\(\text {(4)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac {\d x} {\d \psi}\)










Differentiating $(2)$ with respect to $\psi$:














\(\ds \dfrac {\d X} {\d \psi}\)

\(=\)







\(\ds \dfrac {\d x} {\d \psi} - \rho \cos \psi - \dfrac {\d \rho} {\d \psi} \sin \psi\)




















\(\ds \)

\(=\)







\(\ds - \dfrac {\d \rho} {\d \psi} \sin \psi\)





from $(3)$



and:














\(\ds \dfrac {\d Y} {\d \psi}\)

\(=\)







\(\ds \dfrac {\d y} {\d \psi} - \rho \sin \psi + \dfrac {\d \rho} {\d \psi} \cos \psi\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\d \rho} {\d \psi} \cos \psi\)





from $(4)$




By assumption, $\dfrac {\d \rho} {\d \psi} \ne 0$ on $C$.
Hence we have:














\(\ds \dfrac {\d Y} {\d X}\)

\(=\)







\(\ds -\dfrac {\cos \psi} {\sin \psi}\)




















\(\ds \)

\(=\)







\(\ds -\dfrac 1 {\tan \psi}\)










We have Slope of Normal is Minus Reciprocal of Tangent.
Thus the slope of the tangent to $E$ equals the slope of the normal to $C$.
The result follows.

Note the case when $\dfrac {\d \rho} {\d \psi} = 0$ on $C$.
In this case $C$ is a circle.
By Evolute of Circle is its Center its evolute is a single point and so has no tangent.
$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.23$: Evolutes and Involutes. The Evolute of a Cycloid




