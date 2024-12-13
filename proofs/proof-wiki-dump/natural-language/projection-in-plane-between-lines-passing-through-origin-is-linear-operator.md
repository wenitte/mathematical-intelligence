# 

Source: https://proofwiki.org/wiki/Projection_in_Plane_between_Lines_passing_through_Origin_is_Linear_Operator

Theorem
Let $M$ and $N$ be distinct straight lines through the plane through the origin.
Let $\pr_{M, N}$ be the projection on $M$ along $N$.

Then $\pr_{M, N}$ is a linear operator.


Proof
Let the angle between $M$ and the $x$-axis be $\theta$.
Let the angle between $N$ and the $x$-axis be $\phi$.
Let $P = \tuple {x, y}$ be an arbitrary point in the plane.

Then from Equations defining Projection in Plane:

$\map {\pr_{M, N} } P = \begin {cases}
\tuple {0, y - x \tan \phi} & : \theta = \dfrac \pi 2 \\
\tuple {x, x \tan \theta} & : \phi = \dfrac \pi 2 \\
\tuple {\dfrac {x \tan \phi} {\tan \phi - \tan \theta} - \dfrac y {\tan \phi - \tan \theta}, \dfrac {y \tan \theta} {\tan \theta - \tan \phi} - \dfrac {x \tan \theta \tan \phi} {\tan \theta - \tan \phi} } & : \text {otherwise} 
\end {cases}$

This demonstrates that $\map {\pr_{M, N} } P$ can be expressed as an ordered tuple of $4$ real numbers.
The result follows from Linear Operator on the Plane.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Example $28.5$




