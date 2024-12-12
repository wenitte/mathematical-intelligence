# 

Source: https://proofwiki.org/wiki/Derivative_of_Angular_Component_under_Central_Force

Theorem
Let a point mass $p$ of mass $m$ be under the influence of a central force $\mathbf F$.
Let the position of $p$ at time $t$ be given in polar coordinates as $\polar {r, \theta}$.
Let $\mathbf r$ be the radius vector from the origin to $p$.

Then the rate of change of the angular coordinate of $p$ is inversely proportional to the square of the radial coordinate of $p$.


Proof
Let $\mathbf F$ be expressed as:

$\mathbf F = F_r \mathbf u_r + F_\theta \mathbf u_\theta$
where:

$\mathbf u_r$ is the unit vector in the direction of the radial coordinate of $p$
$\mathbf u_\theta$ is the unit vector in the direction of the angular coordinate of $p$
$F_r$ and $F_\theta$ are the magnitudes of the components of $\mathbf F$ in the directions of $\mathbf u_r$ and $\mathbf u_\theta$ respectively.

From Motion of Particle in Polar Coordinates, the second order ordinary differential equations governing the motion of $m$ under the force $\mathbf F$ are:














\(\ds F_\theta\)

\(=\)







\(\ds m \paren {r \dfrac {\d^2 \theta} {\d t^2} + 2 \dfrac {\d r} {\d t} \dfrac {\d \theta} {\d t} }\)




















\(\ds F_r\)

\(=\)







\(\ds m \paren {\dfrac {\d^2 r} {\d t^2} - r \paren {\dfrac {\d \theta} {\d t} }^2}\)










However, we are given that $\mathbf F$ is a central force.




Thus:














\(\ds F_\theta\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds r \dfrac {\d^2 \theta} {\d t^2} + 2 \dfrac {\d r} {\d t} \dfrac {\d \theta} {\d t}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds r^2 \dfrac {\d^2 \theta} {\d t^2} + 2 r \dfrac {\d r} {\d t} \dfrac {\d \theta} {\d t}\)

\(=\)







\(\ds 0\)





multiplying through by $r$








\(\ds \leadsto \ \ \)





\(\ds \dfrac \d {\d t} \paren {r^2 \dfrac {\d \theta} {\d t} }\)

\(=\)







\(\ds 0\)





Product Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds r^2 \dfrac {\d \theta} {\d t}\)

\(=\)







\(\ds h\)





Derivative of Constant



for some constant $h$.
That is:

$\dfrac {\d \theta} {\d t} = \dfrac h {r^2}$
Hence the result, by definition of inverse proportion.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.21$: Newton's Law of Gravitation: $(8)$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.25$: Kepler's Laws and Newton's Law of Gravitation




