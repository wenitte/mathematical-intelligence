# 

Source: https://proofwiki.org/wiki/Orthogonal_Trajectories/Examples/Circles_Tangent_to_Y_Axis



Theorem
Consider the one-parameter family of curves:

$(1): \quad x^2 + y^2 = 2 c x$
which describes the loci of circles tangent to the $y$-axis at the origin.

Its family of orthogonal trajectories is given by the equation:

$x^2 + y^2 = 2 c y$
which describes the loci of circles tangent to the $x$-axis at the origin.





Proof 1
We use the technique of formation of ordinary differential equation by elimination.
Differentiating $(1)$ with respect to $x$ gives:

$2 x + 2 y \dfrac {\d y} {\d x} = 2 c$
from which:

$\dfrac {\d y} {\d x} = \dfrac {y^2 - x^2} {2 x y}$
Thus from Orthogonal Trajectories of One-Parameter Family of Curves, the family of orthogonal trajectories is given by:

$\dfrac {\d y} {\d x} = \dfrac {2 x y} {x^2 - y^2}$

Let:

$\map M {x, y} = 2 x y$
$\map N {x, y} = x^2 - y^2$

Put $t x, t y$ for $x, y$:














\(\ds \map M {t x, t y}\)

\(=\)







\(\ds 2 t x t y\)




















\(\ds \)

\(=\)







\(\ds t^2 \paren {2 x y}\)




















\(\ds \)

\(=\)







\(\ds t^2 \, \map M {x, y}\)






















\(\ds \map N {t x, t y}\)

\(=\)







\(\ds \paren {t x}^2 - \paren {t y}^2\)




















\(\ds \)

\(=\)







\(\ds t^2 \map N {x^2 - y^2}\)




















\(\ds \)

\(=\)







\(\ds t \map N {x, y}\)









Thus both $M$ and $N$ are homogeneous functions of degree $2$.

Thus, by definition, $(1)$ is a homogeneous differential equation.

By Solution to Homogeneous Differential Equation, its solution is:

$\ds \ln x = \int \frac {\d z} {\map f {1, z} - z} + C$
where:

$\map f {x, y} = \dfrac {2 x y} {x^2 - y^2}$
Thus:














\(\ds \ln x\)

\(=\)







\(\ds \int \frac {\d z} {\dfrac {2 z} {1 - z^2} - z} + C_1\)




















\(\ds \)

\(=\)







\(\ds \int \frac {1 - z^2} {z \paren {1 + z^2} } \rd z + C_1\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\d z} {z \paren {1 + z^2} } \rd z - \int \frac z {\paren {1 + z^2} } \rd z + C_1\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \ln {\frac {z^2} {z^2 + 1} } - \frac 1 2 \map \ln {z^2 + 1} + C_1\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \ln {\frac {z^2} {\paren {z^2 + 1}^2} } + C_1\)














\(\ds \leadsto \ \ \)





\(\ds C_2 x^2\)

\(=\)







\(\ds \frac {z^2} {\paren {z^2 + 1}^2}\)














\(\ds \leadsto \ \ \)





\(\ds C_3 x\)

\(=\)







\(\ds \frac {y / x} {\paren {y / x}^2 + 1}\)














\(\ds \leadsto \ \ \)





\(\ds x^2 + y^2\)

\(=\)







\(\ds 2 C y\)









$\blacksquare$


Proof 2
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




