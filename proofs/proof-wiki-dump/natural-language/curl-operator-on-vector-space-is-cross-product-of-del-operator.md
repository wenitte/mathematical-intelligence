# 

Source: https://proofwiki.org/wiki/Curl_Operator_on_Vector_Space_is_Cross_Product_of_Del_Operator

Theorem
Let $R$ be a region of Cartesian $3$-space $\R^3$.
Let $\map {\mathbf V} {x, y, z}$ be a vector field acting over $R$.

Then

$\curl \mathbf V = \nabla \times \mathbf V$
where:

$\curl \mathbf V $ denotes the curl of $\mathbf V$
$\nabla$ denotes the del operator.


Proof
Let $\tuple {\mathbf i, \mathbf j, \mathbf k}$ be the standard ordered basis on $\R^3$.
We have by definition of curl of $\mathbf V$:

$\curl \mathbf V = \paren {\dfrac {\partial V_z} {\partial y} - \dfrac {\partial V_y} {\partial z} } \mathbf i + \paren {\dfrac {\partial V_x} {\partial z} - \dfrac {\partial V_z} {\partial x} } \mathbf j + \paren {\dfrac {\partial V_y} {\partial x} - \dfrac {\partial V_x} {\partial y} } \mathbf k$
Now:














\(\ds \nabla \times \mathbf V\)

\(=\)







\(\ds \paren {\mathbf i \dfrac \partial {\partial x} + \mathbf j \dfrac \partial {\partial y} + \mathbf k \dfrac \partial {\partial z} } \times \paren {V_x \mathbf i + V_y \mathbf j + V_z \mathbf k}\)





Definition of Del Operator














\(\ds \)

\(=\)







\(\ds \begin {vmatrix} \mathbf i & \mathbf j & \mathbf k \\ \dfrac \partial {\partial x} & \dfrac \partial {\partial y} & \dfrac \partial {\partial z} \\ V_x & V_y & V_z \end {vmatrix}\)





Definition of Vector Cross Product














\(\ds \)

\(=\)







\(\ds \paren {\dfrac {\partial V_z} {\partial y} - \dfrac {\partial V_y} {\partial z} } \mathbf i + \paren {\dfrac {\partial V_x} {\partial z} - \dfrac {\partial V_z} {\partial x} } \mathbf j + \paren {\dfrac {\partial V_y} {\partial x} - \dfrac {\partial V_x} {\partial y} } \mathbf k\)





Determinant Form of Curl Operator



$\blacksquare$


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {IV}$: The Operator $\nabla$ and its Uses: $4 a$. The Operation $\nabla \times \mathbf V$: $(4.10)$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 22$: The Curl: $22.31$




