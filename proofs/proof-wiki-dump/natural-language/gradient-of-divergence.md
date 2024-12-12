# 

Source: https://proofwiki.org/wiki/Gradient_of_Divergence



Theorem
Let $\map {\R^3} {x, y, z}$ denote the real Cartesian space of $3$ dimensions.
Let $\tuple {\mathbf i, \mathbf j, \mathbf k}$ be the standard ordered basis on $\R^3$.
Let $\mathbf V: \R^3 \to \R^3$ be a vector field on $\R^3$:

$\mathbf V := \tuple {\map {V_x} {x, y, z}, \map {V_y} {x, y, z}, \map {V_z} {x, y, z} }$

Then:

$\map \grad {\operatorname {div} \mathbf V} = \paren {\dfrac {\partial^2 V_x} {\partial x^2} + \dfrac {\partial^2 V_y} {\partial x \partial y} + \dfrac {\partial^2 V_z} {\partial x \partial z} } \mathbf i + \paren {\dfrac {\partial^2 V_x} {\partial x \partial y} + \dfrac {\partial^2 V_y} {\partial y^2} + \dfrac {\partial^2 V_z} {\partial y \partial z} } \mathbf j + \paren {\dfrac {\partial^2 V_x} {\partial x \partial z} + \dfrac {\partial^2 V_y} {\partial y \partial z} + \dfrac {\partial^2 V_z} {\partial z^2} } \mathbf k$
where:

$\grad$ denotes the gradient operator
$\operatorname {div}$ denotes the divergence operator.


Proof
From Divergence Operator on Vector Space is Dot Product of Del Operator and definition of the gradient operator:














\(\ds \operatorname {div} \mathbf V\)

\(=\)







\(\ds \nabla \cdot \mathbf V\)




















\(\ds \grad \mathbf U\)

\(=\)







\(\ds \nabla U\)









where $\nabla$ denotes the del operator.

Hence:














\(\ds \map \grad {\operatorname {div} \mathbf V}\)

\(=\)







\(\ds \map \nabla {\nabla \cdot \mathbf V}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {\mathbf i \dfrac \partial {\partial x} + \mathbf j \dfrac \partial {\partial y} + \mathbf k \dfrac \partial {\partial z} } } {\dfrac {\partial V_x} {\partial x} + \dfrac {\partial V_y} {\partial y} + \dfrac {\partial V_z} {\partial z} }\)





Definition of Divergence Operator














\(\ds \)

\(=\)







\(\ds \paren {\dfrac {\partial^2 V_x} {\partial x^2} + \dfrac {\partial^2 V_y} {\partial x \partial y} + \dfrac {\partial^2 V_z} {\partial x \partial z} } \mathbf i + \paren {\dfrac {\partial^2 V_x} {\partial x \partial y} + \dfrac {\partial^2 V_y} {\partial y^2} + \dfrac {\partial^2 V_z} {\partial y \partial z} } \mathbf j + \paren {\dfrac {\partial^2 V_x} {\partial x \partial z} + \dfrac {\partial^2 V_y} {\partial y \partial z} + \dfrac {\partial^2 V_z} {\partial z^2} } \mathbf k\)





Definition of Second Partial Derivative



$\blacksquare$


Examples
Fluid Density Increase
Let $\mathbf V$ be the velocity of a fluid at a point in a region of space $R$.
We have that $\operatorname {div} \mathbf V$ is the scalar rate of change of density with respect to time.
Hence $\grad \operatorname {div} \mathbf V$ gives the magnitude and direction in space of the greatest rate of increase of the space of the density.


Increase of Electric Charge
Let $\mathbf V$ be an electric force in a given electric field at a point in a region of space $R$.
We have that $\operatorname {div} \mathbf V$ is the space charge density.
Hence $\grad \operatorname {div} \mathbf V$ gives the magnitude and direction in space of the greatest rate of increase of the space of the electric charge at a given point.


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {V}$: Further Applications of the Operator $\nabla$: $4$. The Operator $\grad \operatorname {div}$: $(5.5)$




