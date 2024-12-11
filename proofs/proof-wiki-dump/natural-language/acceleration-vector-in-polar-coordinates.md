# 

Source: https://proofwiki.org/wiki/Acceleration_Vector_in_Polar_Coordinates

Theorem
Consider a particle $p$ moving in the plane.
Let the position of $p$ at time $t$ be given in polar coordinates as $\polar {r, \theta}$.

Then the acceleration $\mathbf a$ of $p$ can be expressed as:

$\mathbf a = \paren {r \dfrac {\d^2 \theta} {\d t^2} + 2 \dfrac {\d r} {\d t} \dfrac {\d \theta} {\d t} } \mathbf u_\theta + \paren {\dfrac {\d^2 r} {\d t^2} - r \paren {\dfrac {\d \theta} {\d t} }^2} \mathbf u_r$
where:

$\mathbf u_r$ is the unit vector in the direction of the radial coordinate of $p$
$\mathbf u_\theta$ is the unit vector in the direction of the angular coordinate of $p$


Proof
Let the radius vector $\mathbf r$ from the origin to $p$ be expressed as:

$(1): \quad \mathbf r = r \mathbf u_r$




From Derivatives of Unit Vectors in Polar Coordinates:




\(\text {(2)}: \quad\)









\(\ds \dfrac {\d \mathbf u_r} {\d \theta}\)

\(=\)







\(\ds \mathbf u_\theta\)










\(\text {(3)}: \quad\)









\(\ds \dfrac {\d \mathbf u_\theta} {\d \theta}\)

\(=\)







\(\ds -\mathbf u_r\)










From Velocity Vector in Polar Coordinates:

$\mathbf v = r \dfrac {\d \theta} {\d t} \mathbf u_\theta + \dfrac {\d r} {\d t} \mathbf u_r$
where $\mathbf v$ is the velocity of $p$.

The acceleration of $p$ is by definition the rate of change in its velocity:














\(\ds \mathbf a\)

\(=\)







\(\ds \dfrac {\d \mathbf v} {\d t}\)




















\(\ds \)

\(=\)







\(\ds r \dfrac {\d^2 \theta} {\d t^2} \mathbf u_\theta + \dfrac {\d r} {\d t} \dfrac {\d \theta} {\d t} \mathbf u_\theta + r \dfrac {\d \theta} {\d t} \dfrac {\d \mathbf u_\theta} {\d t} + \dfrac {\d^2 r} {\d t^2} \mathbf u_r + \dfrac {\d r} {\d t} \dfrac {\d \mathbf u_r} {\d t}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds r \dfrac {\d^2 \theta} {\d t^2} \mathbf u_\theta + \dfrac {\d r} {\d t} \dfrac {\d \theta} {\d t} \mathbf u_\theta + r \dfrac {\d \theta} {\d t} \dfrac {\d \mathbf u_\theta} {\d \theta} \dfrac {\d \theta} {\d t} + \dfrac {\d^2 r} {\d t^2} \mathbf u_r + \dfrac {\d r} {\d t} \dfrac {\d \mathbf u_r} {\d \theta} \dfrac {\d \theta} {\d t}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds r \dfrac {\d^2 \theta} {\d t^2} \mathbf u_\theta + \dfrac {\d r} {\d t} \dfrac {\d \theta} {\d t} \mathbf u_\theta - r \dfrac {\d \theta} {\d t} \mathbf u_r \dfrac {\d \theta} {\d t} + \dfrac {\d^2 r} {\d t^2} \mathbf u_r + \dfrac {\d r} {\d t} \mathbf u_\theta \dfrac {\d \theta} {\d t}\)





substituting from $(2)$ and $(3)$














\(\ds \)

\(=\)







\(\ds \paren {r \dfrac {\d^2 \theta} {\d t^2} + 2 \dfrac {\d r} {\d t} \dfrac {\d \theta} {\d t} } \mathbf u_\theta + \paren {\dfrac {\d^2 r} {\d t^2} - r \paren {\dfrac {\d \theta} {\d t} }^2} \mathbf u_r\)





gathering terms



$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.21$: Newton's Law of Gravitation: $(5)$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): acceleration
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): acceleration




