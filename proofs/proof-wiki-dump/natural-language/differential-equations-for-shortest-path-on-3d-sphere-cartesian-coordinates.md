# 

Source: https://proofwiki.org/wiki/Differential_Equations_for_Shortest_Path_on_3d_Sphere/Cartesian_Coordinates

Theorem
Let $M$ be a $3$-dimensional Euclidean space.
Let $S$ be a sphere embedded in $M$.
Let $\gamma$ be a curve on $S$.
Let the chosen coordinate system be Cartesian.
Let $\gamma$ begin at $\paren {x_0, y_0, z_0}$ and terminate at $\paren {x_1, y_1, z_1}$.
Let $\map y x$, $\map z x$ be real functions.
Let $\gamma$ connecting both endpoints be of minimum length.

Then $\gamma$ satisfies the following equations of motion:

$2 y \map \lambda x - \dfrac \d {\d x} \dfrac {y'} {\sqrt {1 + y'^2 + z'^2} } = 0$
$2 z \map \lambda x - \dfrac \d {\d x} \dfrac {z'} {\sqrt {1 + y'^2 + z'^2} } = 0$


Proof
In $3$-dimensional Euclidean space the length of the curve is:

$\ds \int_{x_0}^{x_1} \sqrt {1 + y'^2 + z'^2} \rd x$
The sphere satisfies the following equation:














\(\ds \map g {x, y, z}\)

\(=\)







\(\ds x^2 + y^2 + z^2 - a^2\)




















\(\ds \)

\(=\)







\(\ds 0\)









Consider its partial derivatives with respect to $y$ and $z$.

$\dfrac {\partial g} {\partial y} = 2y$
$\dfrac {\partial g} {\partial z} = 2z$
$g_y$ and $g_z$ vanish for $y = 0$ and $z = 0$ respectively.
Substitution of this into the sphere equation tells us that $x^2 = a^2$.
Therefore, the following analysis should exclude points with $x = \pm a$.
By Simplest Variational Problem with Subsidiary Conditions for Curve on Surface, the length functional is replaced by the following auxiliary functional:

$\ds \int_{x_0}^{x_1} \sqbrk {\sqrt {1 + y'^2 + z'^2} + \map \lambda x \paren {x^2 + y^2 + z^2} } \rd x$
It follows that:

$\map {\dfrac {\partial} {\partial y'} } {\sqrt {1 + y'^2 + z'^2} + \map \lambda x \paren {x^2 + y^2 + z^2} } = \dfrac {y'} {\sqrt {1 + y'^2 + z'^2} }$
$\map {\dfrac {\partial} {\partial y} } {\sqrt {1 + y'^2 + z'^2} + \map \lambda x \paren {x^2 + y^2 + z^2} } = 2 y \lambda$
Analogous relations hold for $\map z x$. 
Then by Euler's Equations the following equations of motion hold:

$2 y \map \lambda x - \dfrac \d {\d x} \dfrac {y'} {\sqrt{1 + y'^2 + z'^2} } = 0$
$2 z \map \lambda x - \dfrac \d {\d x} \dfrac {z'} {\sqrt{1 + y'^2 + z'^2} } = 0$
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 2.12$: Variational Problems with Subsidiary Conditions




