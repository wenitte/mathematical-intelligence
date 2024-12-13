# 

Source: https://proofwiki.org/wiki/Product_Rule_for_Curl



Theorem
Let $R$ be a region of space embedded in Cartesian $3$ space $\R^3$.
Let $\mathbf A$ be a vector field over $\mathbf V$.
Let $U$ be a scalar field over $\mathbf V$.

Then:














\(\ds \map \curl {U \mathbf A}\)

\(=\)







\(\ds U \curl \mathbf A + \grad U \times \mathbf A\)




















\(\ds \)

\(=\)







\(\ds U \curl \mathbf A - \mathbf A \times \grad U\)









where:

$\curl$ denotes the curl operator
$\grad$ denotes the gradient operator
$\times$ denotes vector cross product


Proof
From Curl Operator on Vector Space is Cross Product of Del Operator and definition of the gradient operator:














\(\ds \curl \mathbf A\)

\(=\)







\(\ds \nabla \times \mathbf A\)




















\(\ds \grad \mathbf U\)

\(=\)







\(\ds \nabla U\)









where $\nabla$ denotes the del operator.

Hence we are to demonstrate that:














\(\ds \nabla \times \paren {U \mathbf A}\)

\(=\)







\(\ds \map U {\nabla \times \mathbf A} + \paren {\nabla U} \times \mathbf A\)




















\(\ds \)

\(=\)







\(\ds \map U {\nabla \times \mathbf A} - \mathbf A \times \paren {\nabla U}\)










Let $\mathbf A$ be expressed as a vector-valued function on $\mathbf V$:

$\mathbf A := \tuple {\map {A_x} {\mathbf r}, \map {A_y} {\mathbf r}, \map {A_z} {\mathbf r} }$
where $\mathbf r = \tuple {x, y, z}$ is the position vector of an arbitrary point in $R$.

Let $\tuple {\mathbf i, \mathbf j, \mathbf k}$ be the standard ordered basis on $\R^3$.

Then:














\(\ds \nabla \times \paren {U \mathbf A}\)

\(=\)







\(\ds \paren {\dfrac {\partial U A_z} {\partial y} - \dfrac {\partial U A_y} {\partial z} } \mathbf i + \paren {\dfrac {\partial U A_x} {\partial z} - \dfrac {\partial U A_z} {\partial x} } \mathbf j + \paren {\dfrac {\partial U A_y} {\partial x} - \dfrac {\partial U A_x} {\partial y} } \mathbf k\)





Definition of Curl Operator














\(\ds \)

\(=\)







\(\ds \paren {U \dfrac {\partial A_z} {\partial y} + \dfrac {\partial U} {\partial y} A_z - U \dfrac {\partial A_y} {\partial z} - \dfrac {\partial U} {\partial z} A_y} \mathbf i\)





Product Rule for Derivatives














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {U \dfrac {\partial A_x} {\partial z} + \dfrac {\partial U} {\partial z} A_x - U \dfrac {\partial A_z} {\partial x} - \dfrac {\partial U} {\partial x} A_z} \mathbf j\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {U \dfrac {\partial A_y} {\partial x} + \dfrac {\partial U} {\partial x} A_y - U \dfrac {\partial A_x} {\partial y} - \dfrac {\partial U} {\partial y} A_x } \mathbf k\)




















\(\ds \)

\(=\)







\(\ds \map U {\paren {\dfrac {\partial A_z} {\partial y} - \dfrac {\partial A_y} {\partial z} } \mathbf i + \paren {\dfrac {\partial A_x} {\partial z} - \dfrac {\partial A_z} {\partial x} } \mathbf j + \paren {\dfrac {\partial A_y} {\partial x} - \dfrac {\partial A_x} {\partial y} } \mathbf k}\)





rearrangement














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {\dfrac {\partial U} {\partial y} A_z - \dfrac {\partial U} {\partial z} A_y} \mathbf i + \paren {\dfrac {\partial U} {\partial z} A_x - \dfrac {\partial U} {\partial x} A_z} \mathbf j + \paren {\dfrac {\partial U} {\partial x} A_y - \dfrac {\partial U} {\partial y} A_x} \mathbf k\)




















\(\ds \)

\(=\)







\(\ds \map U {\nabla \times \mathbf f} + \paren {\dfrac {\partial U} {\partial y} A_z - \dfrac {\partial U} {\partial z} A_y} \mathbf i + \paren {\dfrac {\partial U} {\partial z} A_x - \dfrac {\partial U} {\partial x} A_z} \mathbf j + \paren {\dfrac {\partial U} {\partial x} A_y - \dfrac {\partial U} {\partial y} A_x} \mathbf k\)





Definition of Curl Operator














\(\ds \)

\(=\)







\(\ds \map U {\nabla \times \mathbf f} + \paren {\dfrac {\partial U} {\partial x} \mathbf i + \dfrac {\partial U} {\partial y} \mathbf j + \dfrac {\partial U} {\partial z} \mathbf k} \times \paren {A_x \mathbf i + A_y \mathbf j + A_z \mathbf k}\)





Definition of Cross Product














\(\ds \)

\(=\)







\(\ds \map U {\nabla \times \mathbf f} + \paren {\nabla U} \times \mathbf f\)





Definition of Gradient Operator, Definition of Vector



$\blacksquare$


Also presented as
This result can also be presented as:

$\nabla \times \paren {U \mathbf A} = \map U {\nabla \times \mathbf A} + \paren {\nabla U} \times \mathbf A$
or:

$\nabla \times \paren {U \mathbf A} = \map U {\nabla \times \mathbf A} - \mathbf A \times \paren {\nabla U}$
presupposing the implementations of $\curl$ and $\grad$ as operations using the del operator.


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {IV}$: The Operator $\nabla$ and its Uses: $7$. Divergence and Curl of $S \mathbf A$: $(4.14)$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 22$: Miscellaneous Formulas involving $\nabla$: $22.39$




