# 

Source: https://proofwiki.org/wiki/Divergence_of_Vector_Cross_Product



Definition
Let $R$ be a region of space embedded in Cartesian $3$ space $\R^3$.
Let $\mathbf A$ and $\mathbf B$ be vector fields over $R$.

Then:

$\map {\operatorname {div} } {\mathbf A \times \mathbf B} = \mathbf B \cdot \curl \mathbf A - \mathbf A \cdot \curl \mathbf B$
where:

$\operatorname {div}$ denotes the divergence operator
$\curl$ denotes the curl operator
$\times$ denotes vector cross product
$\cdot$ denotes dot product.


Proof
From Divergence Operator on Vector Space is Dot Product of Del Operator and Curl Operator on Vector Space is Cross Product of Del Operator:














\(\ds \operatorname {div} \mathbf V\)

\(=\)







\(\ds \nabla \cdot \mathbf V\)




















\(\ds \curl \mathbf V\)

\(=\)







\(\ds \nabla \times \mathbf V\)









where $\nabla$ denotes the del operator.

Hence we are to demonstrate that:

$\nabla \cdot \paren {\mathbf A \times \mathbf B} = \mathbf B \cdot \paren {\nabla \times \mathbf A} - \mathbf A \cdot \paren {\nabla \times \mathbf B}$

Let $\tuple {\mathbf i, \mathbf j, \mathbf k}$ be the standard ordered basis on $\R^3$.

Let $\mathbf A$ and $\mathbf B: \R^3 \to \R^3$ be expressed as vector-valued functions on $\R^3$:

$\mathbf A := \tuple {\map {A_x} {\mathbf r}, \map {A_y} {\mathbf r}, \map {A_z} {\mathbf r} }$
$\mathbf B := \tuple {\map {B_x} {\mathbf r}, \map {B_y} {\mathbf r}, \map {B_z} {\mathbf r} }$
where $\mathbf r = \tuple {x, y, z}$ is the position vector of an arbitrary point in $R$.

Then:














\(\ds \nabla \cdot \paren {\mathbf A \times \mathbf B}\)

\(=\)







\(\ds \nabla \cdot \paren {\paren {A_y B_z - A_z B_y} \mathbf i + \paren {A_z B_x - A_x B_z} \mathbf j + \paren {A_x B_y - A_y B_x} \mathbf k}\)





Definition 1 of Vector Cross Product














\(\ds \)

\(=\)







\(\ds \map {\dfrac \partial {\partial x} } {A_y B_z - A_z B_y} + \map {\dfrac \partial {\partial y} } {A_z B_x - A_x B_z} + \map {\dfrac \partial {\partial z} } {A_x B_y - A_y B_x}\)





Definition of Divergence Operator














\(\ds \)

\(=\)







\(\ds \paren {\dfrac {\partial A_y B_z} {\partial x} - \dfrac {\partial A_z B_y} {\partial x} } + \paren {\dfrac {\partial A_z B_x} {\partial y} - \dfrac {\partial A_x B_z} {\partial y} } + \paren {\dfrac {\partial A_x B_y} {\partial z} - \dfrac {\partial A_y B_x} {\partial z} }\)





rearranging














\(\ds \)

\(=\)







\(\ds \paren {A_y \dfrac {\partial B_z} {\partial x} + \dfrac {\partial A_y} {\partial x} B_z - A_z \dfrac {\partial B_y} {\partial x} - \dfrac {\partial A_z} {\partial x} B_y} + \paren {A_z \dfrac {\partial B_x} {\partial y} + \dfrac {\partial A_z} {\partial y} B_x - A_x \dfrac {\partial B_z} {\partial y} - \dfrac {\partial A_x} {\partial y} B_z} + \paren {A_x \dfrac {\partial B_y} {\partial z} + \dfrac {\partial A_x} {\partial z} B_y - A_y \dfrac {\partial B_x} {\partial z} - \dfrac {\partial A_y} {\partial z} B_x}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \map {B_x} {\dfrac {\partial A_z} {\partial y} - \dfrac {\partial A_y} {\partial z} } + \map {B_y} {\dfrac {\partial A_x} {\partial z} - \dfrac {\partial A_z} {\partial x} } + \map {B_z} {\dfrac {\partial A_y} {\partial x} - \dfrac {\partial A_x} {\partial y} }\)





rearranging














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \map {A_x} {\dfrac {\partial B_y} {\partial z} - \dfrac {\partial B_z} {\partial y} } + \map {A_y} {\dfrac {\partial B_z} {\partial x} - \dfrac {\partial B_x} {\partial z} } + \map {A_z} {\dfrac {\partial B_x} {\partial y} - \dfrac {\partial B_y} {\partial x} }\)




















\(\ds \)

\(=\)







\(\ds \map {B_x} {\dfrac {\partial A_z} {\partial y} - \dfrac {\partial A_y} {\partial z} } + \map {B_y} {\dfrac {\partial A_x} {\partial z} - \dfrac {\partial A_z} {\partial x} } + \map {B_z} {\dfrac {\partial A_y} {\partial x} - \dfrac {\partial A_x} {\partial y} }\)





further rearranging














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \map {A_x} {\dfrac {\partial B_z} {\partial y} - \dfrac {\partial B_y} {\partial z} } + \map {A_y} {\dfrac {\partial B_x} {\partial z} - \dfrac {\partial B_z} {\partial x} } + \map {A_z} {\dfrac {\partial B_y} {\partial x} - \dfrac {\partial B_x} {\partial y} }\)




















\(\ds \)

\(=\)







\(\ds \paren {B_x \mathbf i + B_y \mathbf j + B_z \mathbf k} \cdot \paren {\paren {\dfrac {\partial A_z} {\partial y} - \dfrac {\partial A_y} {\partial z} } \mathbf i + \paren {\dfrac {\partial A_x} {\partial z} - \dfrac {\partial A_z} {\partial x} } \mathbf j + \paren {\dfrac {\partial A_y} {\partial x} - \dfrac {\partial A_x} {\partial y} } \mathbf k}\)





Definition of Dot Product














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {A_x \mathbf i + A_y \mathbf j + A_z \mathbf k} \cdot \paren {\paren {\dfrac {\partial B_z} {\partial y} - \dfrac {\partial B_y} {\partial z} } \mathbf i + \paren {\dfrac {\partial B_x} {\partial z} - \dfrac {\partial B_z} {\partial x} } \mathbf j + \paren {\dfrac {\partial B_y} {\partial x} - \dfrac {\partial B_x} {\partial y} } \mathbf k}\)




















\(\ds \)

\(=\)







\(\ds \mathbf B \cdot \paren {\nabla \times \mathbf A} - \mathbf A \cdot \paren {\nabla \times \mathbf B}\)





Definition of Curl Operator



$\blacksquare$


Also presented as
This result can also be presented as:

$\nabla \cdot \paren {\mathbf A \times \mathbf B} = \mathbf B \cdot \paren {\nabla \times \mathbf A} - \mathbf A \cdot \paren {\nabla \times \mathbf B}$
presupposing the implementations of $\operatorname {div}$ and $\curl$ as operations using the del operator.


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {IV}$: The Operator $\nabla$ and its Uses: $6$. Divergence of a Vector Product: $(4.12)$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 22$: Miscellaneous Formulas involving $\nabla$: $22.40$




