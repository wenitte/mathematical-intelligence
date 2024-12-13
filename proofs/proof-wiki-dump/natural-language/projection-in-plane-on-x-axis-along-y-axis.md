# 

Source: https://proofwiki.org/wiki/Projection_in_Plane_on_X-Axis_along_Y-Axis

Theorem
Let $\pr_{X, Y}$ denote the projection on the $x$-axis along the $y$-axis:

$\forall P \in \R^2: \map {\pr_{X, Y} } P =$ the intersection of the $x$-axis with the line through $P$ parallel to the $y$-axis.

Let $P = \tuple {\lambda_1, \lambda_2}$ be an arbitrary point in $\R^2$.
Then:

$\map {\pr_{X, Y} } {\lambda_1, \lambda_2} = \tuple {\lambda_1, 0}$


Proof
This is an instance of a projection on $M$ along $N$ where $N$ coincides with the $y$-axis.
Hence it is one of the special cases of Equations defining Projection in Plane: Cartesian:

$\map {\pr_{M, N} } P = \tuple {\lambda_1, \lambda_1 \tan \theta}$
where $\theta$ is the angle between $M$ and the $x$-axis.

In this case, $M$ is actually coincident with the $x$-axis.
Hence $\theta = 0$ and so from Tangent of Zero:

$\map {\pr_{X, Y} } P = \tuple {\lambda_1, 0}$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Example $28.5$




