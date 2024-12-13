# 

Source: https://proofwiki.org/wiki/Kepler%27s_Laws_of_Planetary_Motion/First_Law



Physical Law
Kepler's first law of planetary motion is one of the three physical laws of celestial mechanics deduced by Johannes Kepler:

Planets move around the sun in elliptical orbits, with the sun at one focus.


Proof
Consider a planet $p$ of mass $m$ moving around the sun in the plane under the influence of the force $\mathbf F$ imparted by the gravitational field which the two bodies give rise to.
Let the position of $p$ at time $t$ be given in polar coordinates as $\polar {r, \theta}$.
Let $\mathbf F$ be expressed as:

$\mathbf F = F_r \mathbf u_r + F_\theta \mathbf u_\theta$
where:

$\mathbf u_r$ is the unit vector in the direction of the radial coordinate of $p$
$\mathbf u_\theta$ is the unit vector in the direction of the angular coordinate of $p$
$F_r$ and $F_\theta$ are the magnitudes of the components of $\mathbf F$ in the directions of $\mathbf u_r$ and $\mathbf u_\theta$ respectively.
Let $\mathbf r$ be the radius vector from the origin to $p$.

From Motion of Particle in Polar Coordinates, the second order ordinary differential equations governing the motion of $m$ under the force $\mathbf F$ are:




\(\text {(1)}: \quad\)









\(\ds F_\theta\)

\(=\)







\(\ds m \paren {r \dfrac {\d^2 \theta} {\d t^2} + 2 \dfrac {\d r} {\d t} \dfrac {\d \theta} {\d t} }\)










\(\text {(2)}: \quad\)









\(\ds F_r\)

\(=\)







\(\ds m \paren {\dfrac {\d^2 r} {\d t^2} - r \paren {\dfrac {\d \theta} {\d t} }^2}\)










By Newton's Law of Universal Gravitation, $\mathbf F$ is a central force of value:

$\mathbf F = -G \dfrac {M m} {r^3} \mathbf r$
where:

$G$ is the universal gravitational constant
$M$ and $m$ are the masses of the bodies
the minus sign indicates that the central force is in the opposite direction to that of the radius vector $\mathbf r$.




Hence we have:

$F_\theta = 0$
$F_r = -G \dfrac {M m} {r^2} \dfrac {\size {\mathbf r} } r = -G \dfrac {M m} {r^2}$
As $G$ and $M$ are both constants, so we can express this as:

$F_r = -\dfrac {k m} {r^2}$
So from $(2)$:














\(\ds -\dfrac {k m} {r^2}\)

\(=\)







\(\ds m \paren {\dfrac {\d^2 r} {\d t^2} - r \paren {\dfrac {\d \theta} {\d t} }^2}\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d^2 r} {\d t^2} - r \paren {\dfrac {\d \theta} {\d t} }^2\)

\(=\)







\(\ds -\dfrac k {r^2}\)










Let $z = \dfrac 1 r$.
Then:














\(\ds \dfrac {\d r} {\d t}\)

\(=\)







\(\ds \dfrac \d {\d t} \dfrac 1 z\)




















\(\ds \)

\(=\)







\(\ds -\dfrac 1 {z^2} \dfrac {\d z} {\d t}\)





Power Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -\dfrac 1 {z^2} \dfrac {\d z} {\d \theta} \dfrac {\d \theta} {\d t}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -\dfrac 1 {z^2} \dfrac {\d z} {\d \theta} \dfrac h {r^2}\)





Derivative of Angular Component under Central Force














\(\ds \)

\(=\)







\(\ds -h \dfrac {\d z} {\d \theta}\)





as $r = \dfrac 1 z$




Then:














\(\ds \dfrac {\d^2 r} {\d t^2}\)

\(=\)







\(\ds -h \map {\dfrac \d {\d t} } {\dfrac {\d z} {\d \theta} }\)




















\(\ds \)

\(=\)







\(\ds -h \map {\dfrac \d {\d \theta} } {\dfrac {\d z} {\d \theta} } \dfrac {\d \theta} {\d t}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -h \dfrac {\d^2 z} {\d \theta^2} \dfrac {\d \theta} {\d t}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -h \dfrac {\d^2 z} {\d \theta^2} \dfrac h {r^2}\)





Derivative of Angular Component under Central Force




\(\text {(4)}: \quad\)









\(\ds \)

\(=\)







\(\ds -h^2 z^2 \dfrac {\d^2 z} {\d \theta^2}\)





as $r = \dfrac 1 z$




Substituting from $(4)$ into $(3)$:














\(\ds -h^2 z^2 \dfrac {\d^2 z} {\d \theta^2} - r \paren {\dfrac {\d \theta} {\d t} }^2\)

\(=\)







\(\ds -\dfrac k {r^2}\)














\(\ds \leadsto \ \ \)





\(\ds -h^2 z^2 \dfrac {\d^2 z} {\d \theta^2} - r \paren {\dfrac h {r^2} }^2\)

\(=\)







\(\ds -\dfrac k {r^2}\)





Derivative of Angular Component under Central Force








\(\ds \leadsto \ \ \)





\(\ds -h^2 z^2 \dfrac {\d^2 z} {\d \theta^2} - \frac 1 z \paren {\dfrac h {z^2} }^2\)

\(=\)







\(\ds -k z^2\)





substituting $r = \dfrac 1 z$




\(\text {(5)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d^2 z} {\d \theta^2} + z\)

\(=\)







\(\ds \dfrac k {h^2}\)





simplifying




From Linear Second Order ODE: $y + y = K$, $(5)$ has the general solution:

$(6): \quad z = A \sin \theta + B \cos \theta + \dfrac k {h^2}$

Without loss of generality, we shift the polar axis so as to make $r$ a minimum when $\theta = 0$.
That is, when $\theta = 0$, $p$ is at its closest point to the origin.
This means that $z = \dfrac 1 r$ is a  maximum at this point.

Thus at $\theta = 0$:
From Derivative at Maximum or Minimum:

$\dfrac {\d z} {\d \theta} = 0$
From Second Derivative of Concave Real Function is Non-Positive:

$\dfrac {\d^2 z} {\d \theta^2} < 0$

There is believed to be a mistake here, possibly a typo.In particular: we only necessarily have $\dfrac {d^2 z} {\d \theta^2} \le 0$, check this does not break proofYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Thus:

$A = 0$
$B > 0$
Substituting these and $z = \dfrac 1 r$ back into $(6)$:

$r = \dfrac 1 {B \cos \theta + \dfrac k {h^2} }$













\(\ds r\)

\(=\)







\(\ds \dfrac 1 {B \cos \theta + k / h^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {h^2 / k} {1 + \paren {B h^2 / k} \cos \theta}\)









Setting $B h^2 / k = e$:

$r = \dfrac {h^2 / k} {1 + e \cos \theta}$
where $e \in \R_{>0}$ and is constant.
This can be expressed as:

$(7): \quad r = \dfrac {p e} {1 + e \cos \theta}$
by setting $p = \dfrac 1 B$.

From Equation of Conic Section in Polar Form, $(7)$ is the equation of a conic section with one focus at the origin.

As the planets remain in the solar system it follows that their orbits are stable and elliptical.
$\blacksquare$


Also see
Kepler's Second Law of Planetary Motion
Kepler's Third Law of Planetary Motion


Source of Name
This entry was named for Johannes Kepler.


Historical Note
Kepler derived his three laws of planetary motion in the early $1600$s from a concentrated study over the course of $20$ years of the colossal wealth of observational data which had been made previously by Tycho Brahe of the behavior of the planets of the solar system, and in particular Mars.
The first two of these results he published in his gigantic $1609$ work Astronomia Nova.
The third appears some ten years later in his Harmonices Mundi of $1619$.
It was Isaac Newton who managed to interpret these three laws and so work out what is now known as Newton's Law of Universal Gravitation, from which Kepler's  laws can straightforwardly be derived.


Sources
1937: Eric Temple Bell: Men of Mathematics ... (previous) ... (next): Chapter $\text{VI}$: On the Seashore
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.21$: Newton's Law of Gravitation
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.10$: Kepler ($\text {1571}$ – $\text {1630}$)
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.25$: Kepler's Laws and Newton's Law of Gravitation
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Kepler's laws
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Kepler's laws
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $8$: The System of the World: Kepler
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Kepler's laws of planetary motion (i)




