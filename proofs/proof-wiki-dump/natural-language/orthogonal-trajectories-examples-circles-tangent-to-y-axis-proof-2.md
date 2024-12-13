# 

Source: https://proofwiki.org/wiki/Orthogonal_Trajectories/Examples/Circles_Tangent_to_Y_Axis/Proof_2

Theorem
Consider the one-parameter family of curves:

$(1): \quad x^2 + y^2 = 2 c x$
which describes the loci of circles tangent to the $y$-axis at the origin.

Its family of orthogonal trajectories is given by the equation:

$x^2 + y^2 = 2 c y$
which describes the loci of circles tangent to the $x$-axis at the origin.





Proof
We use the technique of formation of ordinary differential equation by elimination.
Expressing $(1)$ in polar coordinates, we have:

$(2): \quad r = 2 c \cos \theta$
Differentiating $(1)$ with respect to $\theta$ gives:

$(3): \quad \dfrac {\d r} {\d \theta} = -2 c \sin \theta$
Eliminating $c$ from $(2)$ and $(3)$:

$r \dfrac {\d \theta} {\d r} = -\dfrac {\cos \theta} {\sin \theta}$
Thus from Orthogonal Trajectories of One-Parameter Family of Curves, the family of orthogonal trajectories is given by:

$r \dfrac {\d \theta} {\d r} = \dfrac {\sin \theta} {\cos \theta}$
Using the technique of Solution to Separable Differential Equation:

$\ds \int \frac {\d r} r = \int \dfrac {\cos \theta} {\sin \theta} \rd \theta$
which by Primitive of Reciprocal and various others gives:

$\ln r = \map \ln {\sin \theta} + \ln 2 c$
or:

$r = 2 c \sin \theta$
This can be expressed in Cartesian coordinates as:

$x^2 + y^2 = 2 c y$
Hence the result.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $1$: The Nature of Differential Equations: $\S 3$: Families of Curves. Orthogonal Trajectories




