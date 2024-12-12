# 

Source: https://proofwiki.org/wiki/Construction_of_Conic_Section

Theorem
Consider a right circular cone $\CC$ with opening angle $2 \alpha$ whose apex is at $O$.
Consider a plane $\PP$ which intersects $\CC$, not passing through $O$, at an angle $\beta$ to the axis of $\CC$.

Then the points of intersection form one of the following:

a circle
an ellipse
a hyperbola
a parabola.


Proof
When $\beta$ is a right angle, the points of intersection form a circle, by definition of transverse section.
$\Box$

Otherwise, let the plane $OAA'$ through the axis of $\CC$ perpendicular to $\PP$ intersect $\PP$ in the line $AA'$.
Let $P$ be an arbitrary point on the intersection of $\PP$ with $\CC$.
Let $PM$ be constructed perpendicular to $AA'$.
$PM$ is then perpendicular to the plane $OAA'$.
The transverse section through $P$ then contains $PM$ and cuts $OAA'$ in $TT'$, which is a diameter of that transverse section.

The diagram below is the cross-section through $\CC$ corresponding to the plane $OAA'$.
The point $P$ is imagined to be perpendicular to the plane whose projection onto $OAA'$ coincides with $M$.




Because the transverse section is a circle, we have by the Intersecting Chords Theorem:

$PM^2 = TM \cdot MT'$
Also:

$\dfrac {TM} {AM} = \dfrac {\map \sin {\beta + \alpha} } {\cos \alpha}$
$\dfrac {MT'} {MA'} = \dfrac {\map \sin {\beta - \alpha} } {\cos \alpha}$

This article, or a section of it, needs explaining.In particular: The above need to be demonstratedYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
and so:

$PM^2 = k \cdot AM \cdot MA'$
where $k$ is the constant:

$k = \dfrac {\map \sin {\beta + \alpha} \map \sin {\beta - \alpha} } {\cos \alpha}$

When $\beta > \alpha$, $\PP$ intersects one nappe of $\CC$.
In this case the intersection is a closed curve which is the ellipse, and $k$ is positive.
The plane passing through $O$ which is parallel to $\PP$ intersects $\CC$ at $O$ only.
$\Box$

When $\beta < \alpha$, $\PP$ intersects both nappes of $\CC$.
In this case the intersection consists of two open curves which together form the hyperbola, and $k$ is negative.
The plane passing through $O$ which is parallel to $\PP$ intersects $\CC$ in two straight lines which themselves intersect at $O$.
$\Box$

When $\beta = \alpha$, $\PP$ intersects one nappes of $\CC$.
In this case the intersection consists of one open curves which is the parabola, and $k$ is zero.
The plane passing through $O$ which is parallel to $\PP$ intersects $\CC$ in one straight line, which is a generatrix of $\CC$.
Hence:

$MT' = 2 OA \sin \alpha$
which is constant.
Also:

$TM = 2 AM \sin \alpha$
and so:

$PM^2 = 4 OA \sin^2 \alpha \cdot AM$
That is:

$PM^2 : AM$ is constant.
$\blacksquare$


Sources
1933: D.M.Y. Sommerville: Analytical Conics (3rd ed.) ... (previous) ... (next): Chapter $\text {IV}$. The Ellipse: $1$.




