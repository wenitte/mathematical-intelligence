# 

Source: https://proofwiki.org/wiki/Harmonic_Property_of_Pole_and_Polar/Circle



Theorem
Let $\CC$ be a circle whose radius is $r$ and whose center is at the origin of a Cartesian plane.
Let $P$ be an arbitrary point in the Cartesian plane.
Let $\LL$ be a straight line through $P$ which intersects $\CC$ at points $U$ and $V$.
Let $Q$ be the point where $\LL$ intersects the polar of $P$.

Then $\tuple {PQ, UV}$ is a harmonic range.


Proof
From Equation of Circle center Origin, we have that the equation of $\CC$ is:

$x^2 + y^2 = r^2$

Let $P = \tuple {x_1, y_1}$.
Let $Q = \tuple {x, y}$ be a point on $\LL$.
Let $V$ divide $PQ$ in the ratio $k : 1$.
Then the coordinates of $V$ are:

$V = \tuple {\dfrac {k x + x_1} {k + 1}, \dfrac {k y + y_1} {k + 1} }$

Substituting into the equation for $\CC$:














\(\ds \paren {k x + x_1}^2 + \paren {k x + y_1}^2\)

\(=\)







\(\ds r^2 \paren {k + 1}^2\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds k^2 \paren {x^2 + y^2 - r^2} + 2 k \paren {x x_1 + y y_1 - r^2} + \paren { {x_1}^2 + {y_1}^2 - r^2}\)

\(=\)







\(\ds 0\)









The roots of this quadratic equation in $k$ correspond to the points $U$ and $V$.

Now let $Q$ lie on the polar of $P$.




Then by definition of polar:

$x x_1 + y y_1 - r^2 = 0$
and the roots of $(1)$ are equal but of opposite sign.
That is, $U$ and $V$ divide $PQ$ internally and externally in the same ratio.
Hence $\tuple {PQ, UV}$ is a harmonic range.
$\blacksquare$


Also see
Definition:Joachimsthal's Equation


Sources
1933: D.M.Y. Sommerville: Analytical Conics (3rd ed.) ... (previous) ... (next): Chapter $\text {III}$. The Circle: $5$. Harmonic property of pole and polar




