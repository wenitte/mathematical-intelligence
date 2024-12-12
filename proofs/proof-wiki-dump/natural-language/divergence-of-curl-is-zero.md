# 

Source: https://proofwiki.org/wiki/Divergence_of_Curl_is_Zero

Definition
Let $\map {\R^3} {x, y, z}$ denote the real Cartesian space of $3$ dimensions.
Let $\mathbf V: \R^3 \to \R^3$ be a vector field on $\R^3$

Then:

$\map {\operatorname {div} } {\curl \mathbf V} = 0$
where:

$\curl$ denotes the curl operator
$\operatorname {div}$ denotes the divergence operator.


Proof
From Curl Operator on Vector Space is Cross Product of Del Operator and Divergence Operator on Vector Space is Dot Product of Del Operator:














\(\ds \curl \mathbf V\)

\(=\)







\(\ds \nabla \times \mathbf V\)




















\(\ds \map {\operatorname {div} } {\curl \mathbf V}\)

\(=\)







\(\ds \nabla \cdot \paren {\nabla \times \mathbf V}\)









where $\nabla$ denotes the del operator.

Hence we are to demonstrate that:

$\nabla \cdot \paren {\nabla \times \mathbf V} = 0$

Let $\mathbf V$ be expressed as a vector-valued function on $\mathbf V$:

$\mathbf V := \tuple {\map {V_x} {\mathbf r}, \map {V_y} {\mathbf r}, \map {V_z} {\mathbf r} }$
where $\mathbf r = \tuple {x, y, z}$ is the position vector of an arbitrary point in $R$.

Let $\tuple {\mathbf i, \mathbf j, \mathbf k}$ be the standard ordered basis on $\R^3$.
Hence:














\(\ds \nabla \cdot \paren {\nabla \times \mathbf V}\)

\(=\)







\(\ds \nabla \cdot \paren {\paren {\dfrac {\partial V_z} {\partial y} - \dfrac {\partial V_y} {\partial z} } \mathbf i + \paren {\dfrac {\partial V_x} {\partial z} - \dfrac {\partial V_z} {\partial x} } \mathbf j + \paren {\dfrac {\partial V_y} {\partial x} - \dfrac {\partial V_x} {\partial y} } \mathbf k}\)





Definition of Curl Operator














\(\ds \)

\(=\)







\(\ds \dfrac \partial {\partial x} \paren {\dfrac {\partial V_z} {\partial y} - \dfrac {\partial V_y} {\partial z} } + \dfrac \partial {\partial y} \paren {\dfrac {\partial V_x} {\partial z} - \dfrac {\partial V_z} {\partial x} } + \dfrac \partial {\partial z} \paren {\dfrac {\partial V_y} {\partial x} - \dfrac {\partial V_x} {\partial y} }\)





Definition of Divergence Operator














\(\ds \)

\(=\)







\(\ds \dfrac {\partial^2 V_z} {\partial x \partial y} - \dfrac {\partial^2 V_y} {\partial x \partial z} + \dfrac {\partial^2 V_x} {\partial y \partial z} - \dfrac {\partial^2 V_z} {\partial y \partial x} + \dfrac {\partial^2 V_y} {\partial z \partial x} - \dfrac {\partial^2 V_x} {\partial z \partial y}\)










From Clairaut's Theorem:

$\dfrac {\partial^2 V_z} {\partial x \partial y} = \dfrac {\partial^2 V_z} {\partial y \partial x}$
and the same mutatis mutandis for the other partial derivatives.
The result follows.
$\blacksquare$


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {V}$: Further Applications of the Operator $\nabla$: $5$. The Operator $\operatorname {div} \curl$: $(5.6)$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 22$: Miscellaneous Formulas involving $\nabla$: $22.44$




