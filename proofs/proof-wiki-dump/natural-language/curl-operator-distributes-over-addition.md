# 

Source: https://proofwiki.org/wiki/Curl_Operator_Distributes_over_Addition

Theorem
Let $\map {\R^3} {x, y, z}$ denote the real Cartesian space of $3$ dimensions..
Let $\tuple {\mathbf i, \mathbf j, \mathbf k}$ be the standard ordered basis on $\R^3$.
Let $\mathbf f$ and $\mathbf g: \R^3 \to \R^3$ be vector-valued functions on $\R^3$:

$\mathbf f := \tuple {\map {f_x} {\mathbf x}, \map {f_y} {\mathbf x}, \map {f_z} {\mathbf x} }$
$\mathbf g := \tuple {\map {g_x} {\mathbf x}, \map {g_y} {\mathbf x}, \map {g_z} {\mathbf x} }$

Let $\nabla \times \mathbf f$ denote the curl of $f$.

Then:

$\nabla \times \paren {\mathbf f + \mathbf g} = \nabla \times \mathbf f + \nabla \times \mathbf g$


Proof













\(\ds \nabla \times \paren {\mathbf f + \mathbf g}\)

\(=\)







\(\ds \begin {vmatrix} \mathbf i & \mathbf j & \mathbf k \\ \dfrac \partial {\partial x} & \dfrac \partial {\partial y} & \dfrac \partial {\partial z} \\ f_x + g_x & f_y + g_y & f_z + g_x \end {vmatrix}\)





Definition of Curl Operator














\(\ds \)

\(=\)







\(\ds \begin {vmatrix} \mathbf i & \mathbf j & \mathbf k \\ \dfrac \partial {\partial x} & \dfrac \partial {\partial y} & \dfrac \partial {\partial z} \\ f_x & f_y & f_z \end {vmatrix} + \begin {vmatrix} \mathbf i & \mathbf j & \mathbf k \\ \dfrac \partial {\partial x} & \dfrac \partial {\partial y} & \dfrac \partial {\partial z} \\ g_x & g_y & g_x \end {vmatrix}\)





Determinant as Sum of Determinants














\(\ds \)

\(=\)







\(\ds \nabla \times \mathbf f + \nabla \times \mathbf g\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 22$: Miscellaneous Formulas involving $\nabla$: $22.37$




