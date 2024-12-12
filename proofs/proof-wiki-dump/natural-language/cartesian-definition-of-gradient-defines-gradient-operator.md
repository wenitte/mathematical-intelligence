# 

Source: https://proofwiki.org/wiki/Cartesian_Definition_of_Gradient_defines_Gradient_Operator

Theorem
Let $R$ be a region of Cartesian $3$-space $\R^3$.
Let $\map F {x, y, z}$ be a scalar field acting over $R$.
Let $\tuple {i, j, k}$ be the standard ordered basis on $\R^3$.
Let $\grad F$ be defined according to the Cartesian $3$-space definition of the gradient of $F$:














\(\ds \grad F\)

\(:=\)







\(\ds \nabla F\)




















\(\ds \)

\(=\)







\(\ds \paren {\mathbf i \dfrac \partial {\partial x} + \mathbf j \dfrac \partial {\partial y} + \mathbf k \dfrac \partial {\partial z} } F\)





Definition of Del Operator














\(\ds \)

\(=\)







\(\ds \dfrac {\partial F} {\partial x} \mathbf i + \dfrac {\partial F} {\partial y} \mathbf j + \dfrac {\partial F} {\partial z} \mathbf k\)










Then $\grad F$ is a gradient operator as defined by the geometrical representation:

$\grad F = \dfrac {\partial F} {\partial n} \mathbf {\hat n}$
where:

$\mathbf {\hat n}$ denotes the unit normal to the equal surface $S$ of $F$ at $A$
$n$ is the magnitude of the normal vector to $S$ at $A$.


Proof
The vector rates of increase of $F$ in the directions of the $3$ axes are:

$\dfrac {\partial F} {\partial x} \mathbf i$, $\dfrac {\partial F} {\partial y} \mathbf j$, $\dfrac {\partial F} {\partial z} \mathbf k$
Their sum will be a vector with the magnitude and direction of the most rapid rate of increase of $F$.
It remains to show that this expression:

$\dfrac {\partial F} {\partial x} \mathbf i + \dfrac {\partial F} {\partial y} \mathbf j + \dfrac {\partial F} {\partial z} \mathbf k$
is equivalent to:

$\dfrac {\partial F} {\partial n} \mathbf {\hat n}$
Let us take the dot product of both sides of the gradient equation with the position vector $\d \mathbf r$ of an arbitrary point $A$ on an equal surface $S$ of $F$.
Thus:














\(\ds \paren {\grad F} \cdot \d \mathbf r\)

\(=\)







\(\ds \dfrac {\partial F} {\partial n} \mathbf {\hat n} \cdot \d \mathbf r\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\partial F} {\partial n} \d r \cos \theta\)





where $\d r = \norm {\d \mathbf r}$: Definition of Dot Product














\(\ds \)

\(=\)







\(\ds \dfrac {\partial F} {\partial n} \d n\)




















\(\ds \)

\(=\)







\(\ds \d F\)





as $\dfrac {\partial F} {\partial n}$ is the total rate of change of $F$ with respect to $n$




In Cartesian coordinates:














\(\ds \d F\)

\(=\)







\(\ds \dfrac {\partial F} {\partial x} \d x + \dfrac {\partial F} {\partial y} \d y + \dfrac {\partial F} {\partial z} \d z\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\grad F} \cdot \d \mathbf r\)

\(=\)







\(\ds \dfrac {\partial F} {\partial x} \d x + \dfrac {\partial F} {\partial y} \d y + \dfrac {\partial F} {\partial z} \d z\)




















\(\ds \)

\(=\)







\(\ds \paren {\dfrac {\partial F} {\partial x} \mathbf i + \dfrac {\partial F} {\partial y} \mathbf j + \dfrac {\partial F} {\partial z} \mathbf k} \cdot \paren {\d x \mathbf i + \d y \mathbf j + \d z \mathbf k}\)




















\(\ds \)

\(=\)







\(\ds \paren {\nabla F} \cdot \d \mathbf r\)














\(\ds \leadsto \ \ \)





\(\ds \grad F = \nabla F\)

\(=\)







\(\ds \dfrac {\partial F} {\partial x} \mathbf i + \dfrac {\partial F} {\partial y} \mathbf j + \dfrac {\partial F} {\partial z} \mathbf k\)









Thus the operations $\grad$ and $\nabla$ applied to a point in a scalar field are identical.
$\blacksquare$


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {IV}$: The Operator $\nabla$ and its Uses: $2 a$. The Operation $\nabla S$: $(4.3)$




