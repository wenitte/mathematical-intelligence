# 

Source: https://proofwiki.org/wiki/Minimum_Area_of_Triangle_whose_Vertices_are_Lattice_Points

Theorem
Let $T$ be a triangle embedded in a cartesian plane.
Let the vertices of $T$ be lattice points which are not all on the same straight line.

Then the area of $T$ is such that:

$\map \Area T \ge \dfrac 1 2$


Proof
Without loss of generality let one of the vertices of $T$ be at $\tuple {0, 0}$.
Let the other $2$ vertices be at $\tuple {a, b}$ and $\tuple {x, y}$.
By Area of Triangle in Determinant Form with Vertex at Origin‎:

$\map \Area T = \dfrac {\size {b y - a x} } 2$
As the vertices of $T$ are non-collinear, $\map \Area T \ge 0$.
Thus $\size {b y - a x} > 0$.
As $\tuple {a, b}$ and $\tuple {x, y}$ are lattice points, all of $a, b, x, y \in \Z$.
Thus $\size {b y - a x} \ge 1$.
Hence the result.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-3}$ The Linear Diophantine Equation: Exercise $6$




