# 

Source: https://proofwiki.org/wiki/Justification_for_Geometrical_Representation_of_Divergence_Operator

Theorem
Let $R$ be a region of space embedded in a Cartesian coordinate frame.
Let $\mathbf V$ be a vector field acting over $R$.

The divergence of $\mathbf V$ at a point $A$ in $R$ is defined as:














\(\ds \operatorname {div} \mathbf V\)

\(:=\)







\(\ds \nabla \cdot \mathbf V\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\partial V_x} {\partial x} + \dfrac {\partial V_y} {\partial y} + \dfrac {\partial V_z} {\partial z}\)









where:

$\nabla$ denotes the Del operator
$\cdot$ denotes the dot product
$V_x$, $V_y$ and $V_z$ denote the magnitudes of the components of $\mathbf V$ at $A$ in the directions of the coordinate axes $x$, $y$ and $z$ respectively.


Proof
According to the geometrical representation:
Let $\mathbf V$ be the value of a vector field in the middle of an infinitesimal volume element $P$ with edges $\d x$, $\d y$ and $\d z$ parallel to the coordinate axes $x$, $y$ and $z$ respectively.




The magnitudes of the components of $\mathbf V$ in the directions of the coordinate axes $x$, $y$ and $z$ are $V_x$, $V_y$ and $V_z$ respectively.
$\mathbf V$ can be considered to be a vector giving, for example, the velocity of a moving fluid through the volume element $P$.
Consider the $2$ faces of $P$ each with area $\d y \rd z$ perpendicular to the $x$-axis.
On one of these (the left-hand face in the above diagram), the value of the $x$ component of the vector at the middle of the face becomes:

$V_x - \dfrac 1 2 \dfrac {\partial V_x} {\partial x} \rd x$
When $\d x$ becomes vanishingly small, this value can be taken to apply over the whole of that face.
Similarly, on the other face (the right-hand face in the above diagram), the value of the $x$ component of the vector at the middle of the face becomes:

$V_x + \dfrac 1 2 \dfrac {\partial V_x} {\partial x} \rd x$
We can now define the flux through any face as the area of the face multiplied by the normal component of $\mathbf V$ acting upon it
That is, the dot product of the area of the face and $\mathbf V$.
This is positive when the flow is outwards, and negative when the flow is inwards.
Hence the excess of flux leaving the volume element over the flux entering it is given by:














\(\ds \paren {V_x + \dfrac 1 2 \dfrac {\partial V_x} {\partial x} \rd x} \rd y \rd z - \paren {V_x - \dfrac 1 2 \dfrac {\partial V_x} {\partial x} \rd x} \rd y \rd z\)

\(=\)







\(\ds \dfrac {\partial V_x} {\partial x} \rd x \rd y \rd z\)









By similar reasoning, the contributions parallel to the $y$-axis and $z$-axis are:














\(\ds \paren {V_y + \dfrac 1 2 \dfrac {\partial V_y} {\partial y} \rd y} \rd x \rd z - \paren {V_y - \dfrac 1 2 \dfrac {\partial V_y} {\partial y} \rd y} \rd x \rd z\)

\(=\)







\(\ds \dfrac {\partial V_y} {\partial y} \rd x \rd y \rd z\)




















\(\ds \paren {V_z + \dfrac 1 2 \dfrac {\partial V_z} {\partial z} \rd z} \rd x \rd y - \paren {V_x - \dfrac 1 2 \dfrac {\partial V_x} {\partial x} \rd z} \rd x \rd y\)

\(=\)







\(\ds \dfrac {\partial V_z} {\partial z} \rd x \rd y \rd z\)









Hence the total flux leaving the volume element is:

$\paren {\dfrac {\partial V_x} {\partial x} + \dfrac {\partial V_y} {\partial y} + \dfrac {\partial V_z} {\partial z} } \rd x \rd y \rd z$
It follows that the amount of flux per unit volume is:

$\operatorname {div} \mathbf V := \dfrac {\partial V_x} {\partial x} + \dfrac {\partial V_y} {\partial y} + \dfrac {\partial V_z} {\partial z}$
$\blacksquare$


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {IV}$: The Operator $\nabla$ and its Uses: $3$. The Divergence of a Vector Field: $(4.6)$




