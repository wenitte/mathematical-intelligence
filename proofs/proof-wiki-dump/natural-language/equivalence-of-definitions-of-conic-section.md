# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Conic_Section



Theorem
The following definitions of the concept of Conic Section are equivalent:

Intersection of Plane with Cone

Let $C$ be a double napped right circular cone whose base is $B$.
Let $\theta$ be half the opening angle of $C$.
That is, let $\theta$ be the angle between the axis of $C$ and a generatrix of $C$.
Let a plane $D$ intersect $C$.
Let $\phi$ be the inclination of $D$ to the axis of $C$.

Let $K$ be the set of points which forms the intersection of $C$ with $D$.
Then $K$ is a conic section, whose nature depends on $\phi$.

Focus-Directrix Property
A conic section is a plane curve which can be specified in terms of:

a given straight line $D$ known as the directrix
a given point $F$ known as a focus
a given constant $\epsilon$ known as the eccentricity.

Let $K$ be the locus of points $b$ such that the distance $p$ from $b$ to $D$ and the distance $q$ from $b$ to $F$ are related by the condition:

$(1): \quad q = \epsilon \, p$
Then $K$ is a conic section.

Equation $(1)$ is known as the focus-directrix property of $K$.


Proof

Consider the cone in which $\alpha$ is half the opening angle.
Let the tilting angle of the slicing plane to the horizontal be $\beta$.
The conic section thus defined is given here as an ellipse, but the argument holds for the other cases also.

Inside the cone, let a sphere be inscribed which is tangent to the slicing plane at the point $F$.
Let the sphere be tangent to the cone along the circle $C$.
Let $d$ be the line in which the slicing plane intersects the plane of the circle $C$.
It is to be demonstrated that the conic section induced by the slicing plane has $F$ as its focus and $d$ as its directrix.

Let $P$ be a point on the conic section.
Let $PQ$ be constructed parallel to the axis of the cone such that $Q$ lies on the plane of the circle $C$.
Let $R$ be the point where the generatrix of the cone through $P$ intersects $C$.
Let a perpendicular be constructed from $P$ to $d$, intersecting $d$ at $D$.
Hence:

$\beta = \angle PDQ$

We have that $PR$ and $PF$ are both tangents to the sphere from the same point $P$.
Thus $PF$ and $PR$ are the same length:

$(1): \quad PR = PF$
From the right triangle $\triangle PQR$:

$PQ = PR \cos \alpha$
From the right triangle $\triangle PQD$:

$PQ = PD \sin \beta$
Thus:














\(\ds PR \cos \alpha\)

\(=\)







\(\ds PD \sin \beta\)














\(\ds \leadsto \ \ \)





\(\ds \frac {PR} {PD}\)

\(=\)







\(\ds \frac {\sin \beta} {\cos \alpha}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {PF} {PD}\)

\(=\)







\(\ds \frac {\sin \beta} {\cos \alpha}\)





from $(1)$








\(\ds \leadsto \ \ \)





\(\ds \frac {PF} {PD}\)

\(=\)







\(\ds \frac {\cos \gamma} {\cos \alpha}\)





where $\gamma = \angle DPQ$



Let us define:

$e = \dfrac {\cos \gamma} {\cos \alpha}$
For a given slicing plane and cone this is constant.

It is noted that:

$(1): \quad$ when $\gamma < \alpha$, that is, the tilting angle is less than half the opening angle of the cone, the conic section is an ellipse
$(2): \quad$ when $\gamma = \alpha$, that is, the tilting angle equals half the opening angle of the cone, the conic section is a parabola
$(3): \quad$ when $\gamma > \alpha$, that is, the tilting angle is greater than half the opening angle of the cone, the conic section is a hyperbola
$(4): \quad$ when $\gamma = 0$, that is, the slicing plane is parallel to the plane of the circle $C$, the conic section is a circle and there is no directrix
The result follows.
$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.8$: Pappus (fourth century A.D.): Appendix: The Focus-Directrix-Eccentricity Definitions of the Conic Sections




