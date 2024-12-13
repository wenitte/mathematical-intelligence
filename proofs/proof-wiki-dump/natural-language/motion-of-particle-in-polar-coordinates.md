# 

Source: https://proofwiki.org/wiki/Motion_of_Particle_in_Polar_Coordinates

Theorem
Consider a particle $p$ of mass $m$ moving in the plane under the influence of a force $\mathbf F$.
Let the position of $p$ at time $t$ be given in polar coordinates as $\polar {r, \theta}$.
Let $\mathbf F$ be expressed as:

$\mathbf F = F_r \mathbf u_r + F_\theta \mathbf u_\theta$
where:

$\mathbf u_r$ is the unit vector in the direction of the radial coordinate of $p$
$\mathbf u_\theta$ is the unit vector in the direction of the angular coordinate of $p$
$F_r$ and $F_\theta$ are the magnitudes of the components of $\mathbf F$ in the directions of $\mathbf u_r$ and $\mathbf u_\theta$ respectively.

Then the second order ordinary differential equations governing the motion of $m$ under the force $\mathbf F$ are:














\(\ds F_\theta\)

\(=\)







\(\ds m \paren {r \dfrac {\d^2 \theta} {\d t^2} + 2 \dfrac {\d r} {\d t} \dfrac {\d \theta} {\d t} }\)




















\(\ds F_r\)

\(=\)







\(\ds m \paren {\dfrac {\d^2 r} {\d t^2} - r \paren {\dfrac {\d \theta} {\d t} }^2}\)











Proof
Let the radius vector $\mathbf r$ from the origin to $p$ be expressed as:

$(1): \quad \mathbf r = r \mathbf u_r$
From Velocity Vector in Polar Coordinates, the velocity $\mathbf v$ of $p$ can be expressed in vector form as:

$\mathbf v = r \dfrac {\d \theta} {\d t} \mathbf u_\theta + \dfrac {\d r} {\d t} \mathbf u_r$

From Acceleration Vector in Polar Coordinates, the the acceleration $\mathbf a$ of $p$ can be expressed as:

$\mathbf a = \paren {r \dfrac {\d^2 \theta} {\d t^2} + 2 \dfrac {\d r} {\d t} \dfrac {\d \theta} {\d t} } \mathbf u_\theta + \paren {\dfrac {\d^2 r} {\d t^2} - r \paren {\dfrac {\d \theta} {\d t} }^2} \mathbf u_r$

We have:

$\mathbf F = F_r \mathbf u_r + F_\theta \mathbf u_\theta$
and from Newton's Second Law of Motion:

$\mathbf F = m \mathbf a$

Hence:

$\mathbf F = m \paren {r \dfrac {\d^2 \theta} {\d t^2} + 2 \dfrac {\d r} {\d t} \dfrac {\d \theta} {\d t} } \mathbf u_\theta + m \paren {\dfrac {\d^2 r} {\d t^2} - r \paren {\dfrac {\d \theta} {\d t} }^2} \mathbf u_r$
Equating components:














\(\ds F_r \mathbf u_r\)

\(=\)







\(\ds m \paren {\dfrac {\d^2 r} {\d t^2} - r \paren {\dfrac {\d \theta} {\d t} }^2} \mathbf u_r\)




















\(\ds F_\theta \mathbf u_\theta\)

\(=\)







\(\ds m \paren {r \dfrac {\d^2 \theta} {\d t^2} + 2 \dfrac {\d r} {\d t} \dfrac {\d \theta} {\d t} } \mathbf u_\theta\)









Hence the result:














\(\ds F_\theta\)

\(=\)







\(\ds m \paren {r \dfrac {\d^2 \theta} {\d t^2} + 2 \dfrac {\d r} {\d t} \dfrac {\d \theta} {\d t} }\)




















\(\ds F_r\)

\(=\)







\(\ds m \paren {\dfrac {\d^2 r} {\d t^2} - r \paren {\dfrac {\d \theta} {\d t} }^2}\)









$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.21$: Newton's Law of Gravitation: $(7)$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.25$: Kepler's Laws and Newton's Law of Gravitation




