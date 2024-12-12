# 

Source: https://proofwiki.org/wiki/Conversion_between_Cartesian_and_Polar_Coordinates_in_Plane



Theorem
Let $S$ be the plane.
Let a Cartesian plane $\CC$ be applied to $S$.
Let a polar coordinate plane $\PP$ be superimposed upon $\CC$ such that:

$(1): \quad$ The origin of $\CC$ coincides with the pole of $\PP$.
$(2): \quad$ The $x$-axis of $\CC$ coincides with the polar axis of $\PP$.

Let $p$ be a point in $S$.
Let $p$ be specified as $p = \polar {r, \theta}$ expressed in the polar coordinates of $\PP$.
Then $p$ is expressed as $\tuple {r \cos \theta, r \sin \theta}$ in $\CC$.

Contrariwise, let $p$ be expressed as $\tuple {x, y}$ in the cartesian coordinates of $\CC$.
Then $p$ is expressed in $\PP$ as:

$p = \polar {\sqrt {x^2 + y^2}, \arctan \dfrac y x + \pi \sqbrk {x < 0 \text{ or } y < 0} + \pi \sqbrk {x > 0 \text{ and } y < 0} }$
where:

$\sqbrk {\, \cdot \,}$ is Iverson's convention.
$\arctan$ denotes the arctangent function.


Proof
Let $P$ be a point in the plane expressed:

in Cartesian coordinates as $\tuple {x, y}$
in polar coordinates as $\polar {r, \theta}$.




As specified, we identify:

the origins of both coordinate systems with a distinguished point $O$
the $x$-axis of $C$ with the polar axis of $P$.
Let a perpendicular $PM$ be dropped from $P$ to the $x$-axis.
The triangle $OMP$ is a right triangle:

whose hypotenuse is $OP$, whose length is $r$
whose legs are $OM$ and $MP$
whose angle $POM$ is $\theta$.
By definition of sine and cosine

$x = r \cos \theta$
$y = r \sin \theta$
The result follows.
$\blacksquare$


Examples
Example: $\polar {4, \dfrac \pi 3}$
The point $P$ defined in polar coordinates as:

$P = \polar {4, \dfrac \pi 3}$
can be expressed in the corresponding Cartesian coordinates as:

$P = \tuple {2, 2 \sqrt 3}$


Example: $\polar {-2, -\dfrac \pi 4}$
The point $P$ defined in polar coordinates as:

$P = \polar {-2, -\dfrac \pi 4}$
can be expressed in the corresponding Cartesian coordinates as:

$P = \tuple {\sqrt 2, -\sqrt 2}$


Example: $\polar {3, \dfrac \pi 2}$
The point $P$ defined in polar coordinates as:

$P = \polar {3, \dfrac \pi 2}$
can be expressed in the corresponding Cartesian coordinates as:

$P = \tuple {0, 3}$


Example: $\tuple {-1, -1}$
The point $P$ defined in Cartesian coordinates as:

$P = \tuple {-1, -1}$
can be expressed in the corresponding polar coordinates as:

$P = \polar {\sqrt 2, \dfrac {5 \pi} 4}$


Sources
1933: D.M.Y. Sommerville: Analytical Conics (3rd ed.) ... (previous) ... (next): Chapter $\text I$. Coordinates: $3$. Relation between cartesian and polar coordinates
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 2$. Geometrical Representations: $(2.7)$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 10$: Formulas from Plane Analytic Geometry: $10.14$: Polar Coordinates $\tuple {r, \theta}$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): polar coordinate system
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): polar coordinate system
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): polar coordinates




