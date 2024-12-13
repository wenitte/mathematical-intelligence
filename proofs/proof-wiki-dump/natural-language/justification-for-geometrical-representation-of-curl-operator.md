# 

Source: https://proofwiki.org/wiki/Justification_for_Geometrical_Representation_of_Curl_Operator

Theorem
Let $R$ be a region of space embedded in Cartesian $3$ space $\R^3$.
Let $\tuple {\mathbf i, \mathbf j, \mathbf k}$ be the standard ordered basis on $\R^3$.
Let $\mathbf V$ be a vector field acting over $R$.

The curl of $\mathbf V$ at a point $A$ in $R$ is defined as:

$\curl \mathbf V = \paren {\dfrac {\partial V_z} {\partial y} - \dfrac {\partial V_y} {\partial z} } \mathbf i + \paren {\dfrac {\partial V_x} {\partial z} - \dfrac {\partial V_z} {\partial x} } \mathbf j + \paren {\dfrac {\partial V_y} {\partial x} - \dfrac {\partial V_x} {\partial y} } \mathbf k$
where:

$V_x$, $V_y$ and $V_z$ denote the magnitudes of the components at $A$ of $\mathbf V$ in the directions of the coordinate axes $x$, $y$ and $z$ respectively.


Proof
According to the geometrical representation:
Let us take $3$ infinitesimal rectangular surfaces which intersect perpendicularly at a point $P$.
At $P$, let $\mathbf V$ be the value of a vector field.




Let the magnitudes of the components of $\mathbf V$ in the directions of the coordinate axes $x$, $y$ and $z$ be $V_x$, $V_y$ and $V_z$ respectively.
In the above diagram, the circular arrows indicate the directions in which contour integrals are to be taken according to the directions of the corresponding vector areas in question, according to the right-hand rule.

Take the surface $\Box abcd$ whose sides are $\d x$ and $\d y$ whose normal is in the direction of the $z$-axis.
Since $\Box abcd$ is very small, the magnitude of the component of $\mathbf V$ at the middle of each side can reasonably be taken to be the mean value along that side.
The arrows along the sides of the rectangular surfaces indicate the direction in which each component acts.

Because $V_x$, $V_y$ and $V_z$ are functions of the coordinates $\tuple {x, y, z}$ in the middle of the rectangle, the mean value along each of the $4$ sides $ab$, $bc$, $cd$ and $da$ will be respectively:

$V_x - \dfrac 1 2 \dfrac {\partial V_x} {\partial y} \rd y$
$V_y + \dfrac 1 2 \dfrac {\partial V_y} {\partial x} \rd x$
$V_x + \dfrac 1 2 \dfrac {\partial V_x} {\partial y} \rd y$
$V_y - \dfrac 1 2 \dfrac {\partial V_y} {\partial x} \rd x$
Hence the contour integral around $\Box abcd$ is:

$\paren {\paren {V_x - \dfrac 1 2 \dfrac {\partial V_x} {\partial y} \rd y} - \paren {V_x + \dfrac 1 2 \dfrac {\partial V_x} {\partial y} \rd y} } \rd x + \paren {\paren {V_y + \dfrac 1 2 \dfrac {\partial V_y} {\partial x} \rd x} - \paren {V_y - \dfrac 1 2 \dfrac {\partial V_y} {\partial x} \rd x} } \rd y$
which works out as:

$\paren {\dfrac {\partial V_y} {\partial x} - \dfrac {\partial V_x} {\partial y} } \rd x \rd y$
Because the area of the rectangular surface is $\d x \rd y$, $\dfrac {\partial V_y} {\partial x} - \dfrac {\partial V_x} {\partial y}$ is the magnitude of the component of the curl of $\mathbf V$ taken about the $z$-axis.
Hence we can write:

$\curl_Z \mathbf V = \paren {\dfrac {\partial V_y} {\partial x} - \dfrac {\partial V_x} {\partial y} } \mathbf k$
Doing the same thing with the other $2$ axes gives us:














\(\ds \curl_Y \mathbf V\)

\(=\)







\(\ds \paren {\dfrac {\partial V_x} {\partial z} - \dfrac {\partial V_z} {\partial x} } \mathbf j\)




















\(\ds \curl_X \mathbf V\)

\(=\)







\(\ds \paren {\dfrac {\partial V_z} {\partial y} - \dfrac {\partial V_y} {\partial z} } \mathbf i\)










Adding the $3$ components gives us:

$\curl \mathbf V = \paren {\dfrac {\partial V_z} {\partial y} - \dfrac {\partial V_y} {\partial z} } \mathbf i + \paren {\dfrac {\partial V_x} {\partial z} - \dfrac {\partial V_z} {\partial x} } \mathbf j + \paren {\dfrac {\partial V_y} {\partial x} - \dfrac {\partial V_x} {\partial y} } \mathbf k$
$\blacksquare$


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {IV}$: The Operator $\nabla$ and its Uses: $4$. The Curl of a Vector Field




