# 

Source: https://proofwiki.org/wiki/Length_of_Arc_of_Evolute_equals_Difference_in_Radii_of_Curvature

Theorem
Let $C$ be a curve defined by a real function which is twice differentiable.
Let the curvature of $C$ be non-constant.
The length of arc of the evolute $E$ of $C$ between any two points $Q_1$ and $Q_2$ of $C$ is equal to the difference between the radii of curvature at the corresponding points $P_1$ and $P_2$ of $C$.


Proof


Let $P = \tuple {x, y}$ be a general point on $C$.
Let $Q = \tuple {X, Y}$ be the center of curvature of $C$ at $P$.

From the above diagram:

$(1): \quad \begin{cases} x - X = \pm \rho \sin \psi \\
Y - y = \pm \rho \cos \psi \end{cases}$
where:

$\rho$ is the radius of curvature of $C$ at $P$
$\psi$ is the angle between the tangent to $C$ at $P$ and the $x$-axis.

Whether the sign is plus or minus depends on whether the curve is convex or concave.
For simplicity, let it be assumed that the curvature $k$ at each point under consideration on $C$ is positive.
The case for $k < 0$ can then be treated similarly.

Thus we have $k > 0$ and so $(1)$ can be written:

$(2): \quad \begin{cases} X = x - \rho \sin \psi \\
Y = y +\rho \cos \psi \end{cases}$
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










\(\text {(5)}: \quad\)









\(\ds \)

\(=\)







\(\ds - \dfrac {\d \rho} {\d \psi} \sin \psi\)





from $(3)$



and:














\(\ds \dfrac {\d Y} {\d \psi}\)

\(=\)







\(\ds \dfrac {\d y} {\d \psi} - \rho \sin \psi + \dfrac {\d \rho} {\d \psi} \cos \psi\)










\(\text {(6)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac {\d \rho} {\d \psi} \cos \psi\)





from $(4)$




Let $S$ be the length of arc of the evolute $E$ from a fixed point $Q_0$ on $E$ to the variable point $Q$ corresponding to $P$.
We have that:

$\d S^2 = \d X^2 + \d Y^2$
and so:














\(\ds \paren {\dfrac {\d S} {\d \psi} }^2\)

\(=\)







\(\ds \paren {\dfrac {\d X} {\d \psi} }^2 + \paren {\dfrac {\d Y} {\d \psi} }^2\)




















\(\ds \)

\(=\)







\(\ds \paren {- \dfrac {\d \rho} {\d \psi} \sin \psi}^2 + \paren {\dfrac {\d \rho} {\d \psi} \cos \psi}^2\)





from $(5)$ and $(6)$














\(\ds \)

\(=\)







\(\ds \paren {\dfrac {\d \rho} {\d \psi} }^2 \paren {\sin^2 \psi + \cos^2 \psi}\)




















\(\ds \)

\(=\)







\(\ds \paren {\dfrac {\d \rho} {\d \psi} }^2\)





Sum of Squares of Sine and Cosine




Choosing the direction of $S$ so that $S$ and $\rho$ increase together, this tells us:

$\dfrac {\d S} {\d \psi} = \dfrac {\d \rho} {\d \psi}$
Integrating with respect to $\psi$ gives:

$S = \rho + c$
where $c$ is a constant.
$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.23$: Evolutes and Involutes. The Evolute of a Cycloid




