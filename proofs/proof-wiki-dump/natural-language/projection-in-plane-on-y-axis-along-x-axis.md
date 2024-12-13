# 

Source: https://proofwiki.org/wiki/Projection_in_Plane_on_Y-Axis_along_X-Axis

Theorem
Let $\pr_{Y, X}$ denote the projection on the $y$-axis along the $x$-axis:

$\forall P \in \R^2: \map {\pr_{Y, X} } P =$ the intersection of the $y$-axis with the line through $P$ parallel to the $x$-axis.

Let $P = \tuple {\lambda_1, \lambda_2}$ be an arbitrary point in $\R^2$.
Then:

$\map {\pr_{Y, X} } {\lambda_1, \lambda_2} = \tuple {0, \lambda_2}$


Proof
This is an instance of a projection on $M$ along $N$ where $M$ coincides with the $y$-axis.
Hence it is one of the special cases of Equations defining Projection in Plane: Cartesian:

$\map {\pr_{M, N} } P = \tuple {0, \lambda_2 - \lambda_1 \tan \phi}$
where $\phi$ is the angle between $N$ and the $x$-axis.

In this case, $N$ is actually coincident with the $x$-axis.
Hence $\phi = 0$ and so from Tangent of Zero:

$\map {\pr_{X, Y} } P = \tuple {0, \lambda_2}$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Example $28.5$




