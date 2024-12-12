# 

Source: https://proofwiki.org/wiki/Curl_of_Curl_is_Gradient_of_Divergence_minus_Laplacian



Theorem
Let $\map {\R^3} {x, y, z}$ denote the real Cartesian space of $3$ dimensions.
Let $\mathbf V$ be a vector field on $\R^3$.

Then:

$\curl \curl \mathbf V = \grad \operatorname {div} \mathbf V - \nabla^2 \mathbf V$
where:

$\curl$ denotes the curl operator
$\operatorname {div}$ denotes the divergence operator
$\grad$ denotes the gradient operator
$\nabla^2 \mathbf V$ denotes the Laplacian.


Proof
From Curl Operator on Vector Space is Cross Product of Del Operator, and Divergence Operator on Vector Space is Dot Product of Del Operator and the definition of the gradient operator:














\(\ds \curl \mathbf V\)

\(=\)







\(\ds \nabla \times \mathbf V\)




















\(\ds \operatorname {div} \mathbf V\)

\(=\)







\(\ds \nabla \cdot \mathbf V\)




















\(\ds \grad \operatorname {div} \mathbf V\)

\(=\)







\(\ds \map \nabla {\nabla \cdot \mathbf V}\)









where $\nabla$ denotes the del operator.

Hence we are to demonstrate that:

$\nabla \times \paren {\nabla \times \mathbf V} = \map \nabla {\nabla \cdot \mathbf V} - \nabla^2 \mathbf V$

Let $\mathbf V$ be expressed as a vector-valued function on $\mathbf V$:

$\mathbf V := \tuple {\map {V_x} {\mathbf r}, \map {V_y} {\mathbf r}, \map {V_z} {\mathbf r} }$
where $\mathbf r = \tuple {x, y, z}$ is the position vector of an arbitrary point in $R$.

Let $\tuple {\mathbf i, \mathbf j, \mathbf k}$ be the standard ordered basis on $\R^3$.















\(\ds \nabla \times \paren {\nabla \times \mathbf V}\)

\(=\)







\(\ds \nabla \times \paren {\paren {\dfrac {\partial V_z} {\partial y} - \dfrac {\partial V_y} {\partial z} } \mathbf i + \paren {\dfrac {\partial V_x} {\partial z} - \dfrac {\partial V_z} {\partial x} } \mathbf j + \paren {\dfrac {\partial V_y} {\partial x} - \dfrac {\partial V_x} {\partial y} } \mathbf k}\)





Definition of Curl Operator














\(\ds \)

\(=\)







\(\ds \paren {\map {\dfrac \partial {\partial y} } {\dfrac {\partial V_y} {\partial x}  - \dfrac {\partial V_x} {\partial y} } - \map {\dfrac \partial {\partial z} } {\dfrac {\partial V_x} {\partial z} - \dfrac {\partial V_z} {\partial x} } } \mathbf i\)





Definition of Curl Operator














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {\map {\dfrac \partial {\partial z} } {\dfrac {\partial V_z} {\partial y} - \dfrac {\partial V_y} {\partial z} } - \map {\dfrac \partial {\partial x} } {\dfrac {\partial V_y} {\partial x} - \dfrac {\partial V_x} {\partial y} } } \mathbf j\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {\map {\dfrac \partial {\partial x} } {\dfrac {\partial V_x} {\partial z} - \dfrac {\partial V_z} {\partial x} } - \map {\dfrac \partial {\partial y} } {\dfrac {\partial V_z} {\partial y} - \dfrac {\partial V_y} {\partial z} } } \mathbf k\)




















\(\ds \)

\(=\)







\(\ds \paren {\dfrac {\partial^2 V_y} {\partial y \partial x} - \dfrac {\partial^2 V_x} {\partial y^2} - \dfrac {\partial^2 V_x} {\partial z^2} + \dfrac {\partial^2 V_z} {\partial z \partial x} } \mathbf i\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {\dfrac {\partial^2 V_z} {\partial z \partial y} - \dfrac {\partial^2 V_y} {\partial z^2} - \dfrac {\partial^2 V_y} {\partial x^2} + \dfrac {\partial^2 V_x} {\partial x \partial y} } \mathbf j\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {\dfrac {\partial^2 V_x} {\partial x \partial z} - \dfrac {\partial^2 V_z} {\partial x^2} - \dfrac {\partial^2 V_z} {\partial y^2} + \dfrac {\partial^2 V_y} {\partial y \partial z} } \mathbf k\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {\dfrac {\partial^2 V_y} {\partial y \partial x} + \dfrac {\partial^2 V_z} {\partial z \partial x} } - \paren {\dfrac {\partial^2 V_x} {\partial y^2} + \dfrac {\partial^2 V_x} {\partial z^2} } } \mathbf i\)





rearranging














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {\paren {\dfrac {\partial^2 V_x} {\partial x \partial y} + \dfrac {\partial^2 V_z} {\partial z \partial y} } - \paren {\dfrac {\partial^2 V_y} {\partial x^2} + \dfrac {\partial^2 V_y} {\partial z^2} } } \mathbf j\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {\paren {\dfrac {\partial^2 V_x} {\partial x \partial z} + \dfrac {\partial^2 V_y} {\partial y \partial z} } - \paren {\dfrac {\partial^2 V_z} {\partial x^2} + \dfrac {\partial^2 V_z} {\partial y^2} } } \mathbf k\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {\dfrac {\partial^2 V_x} {\partial x^2} + \dfrac {\partial^2 V_y} {\partial y \partial x} + \dfrac {\partial^2 V_z} {\partial z \partial x} } - \paren {\dfrac {\partial^2 V_x} {\partial x^2} + \dfrac {\partial^2 V_x} {\partial y^2} + \dfrac {\partial^2 V_x} {\partial z^2} } } \mathbf i\)





adding and subtracting equal terms














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {\paren {\dfrac {\partial^2 V_x} {\partial x \partial y} + \dfrac {\partial^2 V_y} {\partial y^2} + \dfrac {\partial^2 V_z} {\partial z \partial y} } - \paren {\dfrac {\partial^2 V_y} {\partial x^2} + \dfrac {\partial^2 V_y} {\partial y^2} + \dfrac {\partial^2 V_y} {\partial z^2} } } \mathbf j\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {\paren {\dfrac {\partial^2 V_x} {\partial x \partial z} + \dfrac {\partial^2 V_y} {\partial y \partial z} + \dfrac {\partial^2 V_z} {\partial z^2} } - \paren {\dfrac {\partial^2 V_z} {\partial x^2} + \dfrac {\partial^2 V_z} {\partial y^2} + \dfrac {\partial^2 V_z} {\partial z^2} } } \mathbf k\)




















\(\ds \)

\(=\)







\(\ds \paren {\mathbf i \dfrac \partial {\partial x} + \mathbf j \dfrac \partial {\partial y} + \mathbf k \dfrac \partial {\partial z} } \paren {\dfrac {\partial V_x} {\partial x} + \dfrac {\partial V_y} {\partial y} + \dfrac {\partial V_z} {\partial z} }\)





factoring














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {\paren {\dfrac {\partial^2} {\partial x^2} + \dfrac {\partial^2} {\partial y^2} + \dfrac {\partial^2} {\partial z^2} } \paren {V_x \mathbf i + V_y \mathbf j + V_z \mathbf k} }\)




















\(\ds \)

\(=\)







\(\ds \map \nabla {\nabla \cdot \mathbf V} - \nabla^2 \mathbf V\)





Definition of Del Operator



$\blacksquare$


Also presented as
This result can also be presented as:

$\nabla \times \paren {\nabla \times \mathbf V} = \map \nabla {\nabla \cdot \mathbf V} - \nabla^2 \mathbf V$
presupposing the implementations of $\operatorname {div}$, $\curl$ and $\grad$ as operations using the del operator.


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {V}$: Further Applications of the Operator $\nabla$: $6$. The Operator $\curl \curl$: $(5.7)$, $(5.8)$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 22$: Miscellaneous Formulas involving $\nabla$: $22.45$




