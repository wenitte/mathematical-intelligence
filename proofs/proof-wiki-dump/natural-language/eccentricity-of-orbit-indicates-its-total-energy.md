# 

Source: https://proofwiki.org/wiki/Eccentricity_of_Orbit_indicates_its_Total_Energy

Theorem
Consider a planet $p$ of mass $m$ orbiting a star $S$ of mass $M$ under the influence of the gravitational field which the two bodies give rise to.
Then the total energy of the system determines the eccentricity of the orbit of $p$ around $S$.


Proof
Let:

$\mathbf u_r$ be the unit vector in the direction of the radial coordinate of $p$
$\mathbf u_\theta$ be the unit vector in the direction of the angular coordinate of $p$.

By Kinetic Energy of Motion, the kinetic energy of $p$ is:

$K = \dfrac {m v^2} 2$
where $v$ is the magnitude of the velocity of $p$.
Thus:














\(\ds K\)

\(=\)







\(\ds \dfrac {m \mathbf v \cdot \mathbf v} 2\)





Dot Product of Vector with Itself














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 m \paren {r \dfrac {\d \theta} {\d t} \mathbf u_\theta + \dfrac {\d r} {\d t} \mathbf u_r} \cdot \paren {r \dfrac {\d \theta} {\d t} \mathbf u_\theta + \dfrac {\d r} {\d t} \mathbf u_r}\)





Velocity Vector in Polar Coordinates




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac 1 2 m \paren {r^2 \paren {\dfrac {\d \theta} {\d t} }^2 + \paren {\dfrac {\d r} {\d t} }^2}\)





Definition of Dot Product




The potential energy $P$ of the system is the negative of the work required to move $p$ to infinity:


This article needs to be linked to other articles.In particular: Definition of Work, the above definition of P.E.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.















\(\ds P\)

\(=\)







\(\ds -\int_r^\infty \dfrac {G M m} {r^2} \rd r\)





Newton's Law of Universal Gravitation














\(\ds \)

\(=\)







\(\ds \intlimits {\dfrac {G M m} r} r \infty\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds -\dfrac {G M m} r\)










\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds -\dfrac {k m} r\)





defining $k = G M$: constant for this system



By the Principle of Conservation of Energy, the total energy in the system remains constant: $E$, say.
So:

$E = \dfrac 1 2 m \paren {r^2 \paren {\dfrac {\d \theta} {\d t} }^2 + \paren {\dfrac {\d r} {\d t} }^2} - \dfrac {k m} r$

Without loss of generality, let us arrange the polar axis so as to make $r$ a minimum when $\theta = 0$.
By Kepler's First Law of Planetary Motion, the position of $p$ in polar coordinates is:

$(3): \quad r = \dfrac {h^2 / k} {1 + e \cos \theta}$
At the instant when $\theta = 0$, we therefore have:

$r = \dfrac {h^2 / k} {1 + e}$
At this point, $r$ is at a local minimum.
Hence:

$\dfrac {m r^2} 2 \dfrac {h^2} {r^4} - \dfrac {k m} r = E$
Eliminating $r$ from these gives:

$e = \sqrt {1 + E \paren {\dfrac {2 h^2} {m k^2} } }$
Thus equation $(3)$ for the orbit of $p$ can be written as:

$r = \dfrac {h^2 / k} {1 + \sqrt {1 + E \paren {2 h^2 / m k^2}} \cos \theta }$

Thus from Equation of Conic Section in Polar Form, it can be seen that the orbit is:

an ellipse when $E < 0$
a parabola when $E = 0$
a hyperbola when $E > 0$.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.21$: Newton's Law of Gravitation




