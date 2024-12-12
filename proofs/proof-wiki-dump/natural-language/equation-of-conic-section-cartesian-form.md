# 

Source: https://proofwiki.org/wiki/Equation_of_Conic_Section/Cartesian_Form



Theorem
The general conic section can be expressed in Cartesian coordinates in the form:

$a x^2 + b x y + c y^2 + d x + e y + f = 0$
for some $a, b, c, d, e, f \in \R$.


Proof
By definition, a conic section is the set of points of intersection between a cone and a plane.

Let $P = \tuple {\alpha, \beta, \gamma}$ be the apex of the cone.
Let $Q = \tuple {x, y, z}$ be a point of intersection between the plane and the cone.

From Equation of Right Circular Cone, we have:

$(1): \quad \paren {x - \alpha}^2 + \paren {y - \beta}^2 = \eta \paren {z - \gamma}^2$
for some (strictly) positive real number $\eta$.

From Equation of Plane, we have:
$A x + B y + C z + D = 0$
for some real numbers $A, B, C, D$.

Let $C \ne 0$.
Then:

$z = - D - \dfrac {A x + B y} C$
Hence, plugging in $z$ into $(1)$:

$\paren {x - \alpha}^2 + \paren {y - \beta}^2 = \eta \paren {\dfrac {A x + B y} C + D + \gamma}^2$
Opening up the brackets and making the corresponding notation of constants, we get the desired result.
$\Box$

Let $C = 0$.
Then:

$A x + B y + D = 0$
In order for the plane to be well-defined, $A$ or $B$ must be non-zero.
Without loss of generality, since the cone equation $(1)$ is symmetric in $x$ and $y$, we can consider $B \ne 0$ (otherwise interchange coordinates).
Then:

$y = - D - \dfrac {A x} B$

Hence, plugging  $y$ into $(1)$:

$\paren {x - \alpha}^2 + \paren {-D - \dfrac {A x} B - \beta}^2 = \eta \paren {z - \gamma}^2$
Opening up the brackets and making the corresponding notation of constants and coordinates ($z \leftrightarrow y$), we get the desired result.
$\blacksquare$


Also presented as
The equation for the general conic section can also be found expressed in the form:

$a x^2 + 2 h x y + b y^2 + 2 g x + 2 f y + c = 0$
for some $a, b, c, f, g, h \in \R$.


Sources
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $6$: Curves and Coordinates: Cartesian coordinates




