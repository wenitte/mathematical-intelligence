# 

Source: https://proofwiki.org/wiki/Curl_of_Vector_Cross_Product

Definition
Let $\R^3 \left({x, y, z}\right)$ denote the real Cartesian space of $3$ dimensions..
Let $\left({\mathbf i, \mathbf j, \mathbf k}\right)$ be the standard ordered basis on $\R^3$.
Let $\mathbf f$ and $\mathbf g: \R^3 \to \R^3$ be vector-valued functions on $\R^3$:

$\mathbf f := \left({f_x \left({\mathbf x}\right), f_y \left({\mathbf x}\right), f_z \left({\mathbf x}\right)}\right)$
$\mathbf g := \left({g_x \left({\mathbf x}\right), g_y \left({\mathbf x}\right), g_z \left({\mathbf x}\right)}\right)$

Let $\nabla \times \mathbf f$ denote the curl of $f$.

Then:

$\nabla \times \left({\mathbf f \times \mathbf g}\right) = \left({\mathbf g \cdot \nabla}\right) \mathbf f - \mathbf g \left({\nabla \cdot \mathbf f}\right) - \left({\mathbf f \cdot \nabla}\right) \mathbf g + \mathbf f \left({\nabla \cdot \mathbf g}\right)$
where:

$\mathbf f \times \mathbf g$ denotes vector cross product
$\mathbf f \cdot \nabla$ denotes dot product
$\nabla \cdot \mathbf f$ denotes divergence.


Proof













\(\ds \nabla \times \left({\mathbf f \times \mathbf g}\right)\)

\(=\)







\(\ds \nabla \times \left({\left({f_y g_z - f_z g_y}\right) \mathbf i + \left({f_z g_x - f_x g_z}\right) \mathbf j + \left({f_x g_y - f_y g_x}\right) \mathbf k}\right)\)





Definition 1 of Vector Cross Product














\(\ds \)

\(=\)







\(\ds \left({\dfrac \partial {\partial y} \left({f_x g_y - f_y g_x}\right) - \dfrac \partial {\partial z} \left({f_z g_x - f_x g_z}\right)}\right) \mathbf i\)





Definition of Curl Operator














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \left({\dfrac \partial {\partial z} \left({f_y g_z - f_z g_y}\right) - \dfrac \partial {\partial x} \left({f_x g_y - f_y g_x}\right)}\right) \mathbf j\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \left({\dfrac \partial {\partial x} \left({f_z g_x - f_x g_z}\right) - \dfrac \partial {\partial y} \left({f_y g_z - f_z g_y}\right) }\right) \mathbf k\)




















\(\ds \)

\(=\)







\(\ds \left({\dfrac {\partial f_x g_y} {\partial y} - \dfrac {\partial f_y g_x} {\partial y} - \dfrac {\partial f_z g_x} {\partial z} + \dfrac {\partial f_x g_z} {\partial z} }\right) \mathbf i\)





expanding














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \left({\dfrac {\partial f_y g_z} {\partial z} - \dfrac {\partial f_z g_y} {\partial z} - \dfrac {\partial f_x g_y} {\partial x} + \dfrac {\partial f_y g_x} {\partial x} }\right) \mathbf j\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \left({\dfrac {\partial f_z g_x} {\partial x} - \dfrac {\partial f_x g_z} {\partial x} - \dfrac {\partial f_y g_z} {\partial y} + \dfrac {\partial f_z g_y} {\partial y} }\right) \mathbf k\)




















\(\ds \)

\(=\)







\(\ds \left({f_x \dfrac {\partial g_y} {\partial y} + \dfrac {\partial f_x} {\partial y} g_y - f_y \dfrac {\partial g_x} {\partial y} - \dfrac {\partial f_y} {\partial y} g_x - f_z \dfrac {\partial g_x} {\partial z} - \dfrac {\partial f_z} {\partial z} g_x + f_x \dfrac {\partial g_z} {\partial z} + \dfrac {\partial f_x} {\partial z} g_z}\right) \mathbf i\)





Product Rule for Derivatives














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \left({f_y \dfrac {\partial g_z} {\partial z} + \dfrac {\partial f_y} {\partial z} g_z - f_z \dfrac {\partial g_y} {\partial z} - \dfrac {\partial f_z} {\partial z} g_y - f_x \dfrac {\partial g_y} {\partial x} - \dfrac {\partial f_x} {\partial x} g_y + f_y \dfrac {\partial g_x} {\partial x} + \dfrac {\partial f_y} {\partial x} g_x}\right) \mathbf j\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \left({f_z \dfrac {\partial g_x} {\partial x} + \dfrac {\partial f_z} {\partial x} g_x - f_x \dfrac {\partial g_z} {\partial x} - \dfrac {\partial f_x} {\partial x} g_z - f_y \dfrac {\partial g_z} {\partial y} - \dfrac {\partial f_y} {\partial y} g_z + f_z \dfrac {\partial g_y} {\partial y} + \dfrac {\partial f_z} {\partial y} g_y}\right) \mathbf k\)




















\(\ds \)

\(=\)







\(\ds \left({f_x \left({\dfrac {\partial g_y} {\partial y} + \dfrac {\partial g_z} {\partial z} }\right) - \left({f_y \dfrac {\partial g_x} {\partial y} + f_z \dfrac {\partial g_x} {\partial z} }\right) - \left({\dfrac {\partial f_y} {\partial y} + \dfrac {\partial f_z} {\partial z} }\right) g_x + \left({\dfrac {\partial f_x} {\partial y} g_y + \dfrac {\partial f_x} {\partial z} g_z}\right)}\right) \mathbf i\)





rearranging














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \left({f_y \left({\dfrac {\partial g_x} {\partial x} + \dfrac {\partial g_z} {\partial z} }\right) - \left({f_x \dfrac {\partial g_y} {\partial x} + f_z \dfrac {\partial g_y} {\partial z} }\right) - \left({\dfrac {\partial f_x} {\partial x} + \dfrac {\partial f_z} {\partial z} }\right) g_y + \left({\dfrac {\partial f_y} {\partial x} g_x + \dfrac {\partial f_y} {\partial z} g_z}\right)}\right) \mathbf j\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \left({f_z \left({\dfrac {\partial g_x} {\partial x} + \dfrac {\partial g_y} {\partial y} }\right) - \left({f_x \dfrac {\partial g_z} {\partial x} + f_y \dfrac {\partial g_z} {\partial y} }\right) - \left({\dfrac {\partial f_x} {\partial x} + \dfrac {\partial f_y} {\partial y} }\right) g_z + \left({\dfrac {\partial f_z} {\partial x} g_x + \dfrac {\partial f_z} {\partial y} g_y}\right)}\right) \mathbf k\)




















\(\ds \)

\(=\)







\(\ds \left({f_x \left({\dfrac {\partial g_x} {\partial x} + \dfrac {\partial g_y} {\partial y} + \dfrac {\partial g_z} {\partial z} }\right) - \left({f_x \dfrac {\partial g_x} {\partial x} + f_y \dfrac {\partial g_x} {\partial y} + f_z \dfrac {\partial g_x} {\partial z} }\right) - \left({\dfrac {\partial f_x} {\partial x} + \dfrac {\partial f_y} {\partial y} + \dfrac {\partial f_z} {\partial z} }\right) g_x + \left({\dfrac {\partial f_x} {\partial x} g_x + \dfrac {\partial f_x} {\partial y} g_y + \dfrac {\partial f_x} {\partial z} g_z}\right)}\right) \mathbf i\)





$\pm$ some extra terms














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \left({f_y \left({\dfrac {\partial g_x} {\partial x} + \dfrac {\partial g_y} {\partial y} + \dfrac {\partial g_z} {\partial z} }\right) - \left({f_x \dfrac {\partial g_y} {\partial x} + f_y \dfrac {\partial g_y} {\partial y} + f_z \dfrac {\partial g_y} {\partial z} }\right) - \left({\dfrac {\partial f_x} {\partial x} + \dfrac {\partial f_y} {\partial y} + \dfrac {\partial f_z} {\partial z} }\right) g_y + \left({\dfrac {\partial f_y} {\partial x} g_x + \dfrac {\partial f_y} {\partial y} g_y + \dfrac {\partial f_y} {\partial z} g_z}\right)}\right) \mathbf j\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \left({f_z \left({\dfrac {\partial g_x} {\partial x} + \dfrac {\partial g_y} {\partial y} + \dfrac {\partial g_z} {\partial z} }\right) - \left({f_x \dfrac {\partial g_z} {\partial x} + f_y \dfrac {\partial g_z} {\partial y} + f_z \dfrac {\partial g_z} {\partial z} }\right) - \left({\dfrac {\partial f_x} {\partial x} + \dfrac {\partial f_y} {\partial y} + \dfrac {\partial f_z} {\partial z} }\right) g_z + \left({\dfrac {\partial f_z} {\partial x} g_x + \dfrac {\partial f_z} {\partial y} g_y + \dfrac {\partial f_z} {\partial z} g_z}\right)}\right) \mathbf k\)




















\(\ds \)

\(=\)







\(\ds \left({g_x \dfrac \partial {\partial x} + g_y \dfrac \partial {\partial y} + g_z \dfrac \partial {\partial z} }\right) \left({f_x \mathbf i + f_y \mathbf j + f_z \mathbf k}\right) - \left({g_x \mathbf i + g_y \mathbf j + g_z \mathbf k}\right) \left({\dfrac {\partial f_x} {\partial x} + \dfrac {\partial f_y} {\partial y} + \dfrac {\partial f_z} {\partial z} }\right)\)





rearranging














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \left({f_x \dfrac \partial {\partial x} + f_y \dfrac \partial {\partial y} + f_z \dfrac \partial {\partial z} }\right) \left({g_x \mathbf i + g_y \mathbf j + g_z \mathbf k}\right) + \left({f_x \mathbf i + f_y \mathbf j + f_z \mathbf k}\right) \left({\dfrac {\partial g_x} {\partial x} + \dfrac {\partial g_y} {\partial y} + \dfrac {\partial g_z} {\partial z} }\right)\)




















\(\ds \)

\(=\)







\(\ds \left({\mathbf g \cdot \nabla}\right) \mathbf f - \mathbf g \left({\nabla \cdot \mathbf f}\right) - \left({\mathbf f \cdot \nabla}\right) \mathbf g + \mathbf f \left({\nabla \cdot \mathbf g}\right)\)





Definition of Divergence Operator



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 22$: Miscellaneous Formulas involving $\nabla$: $22.41$




