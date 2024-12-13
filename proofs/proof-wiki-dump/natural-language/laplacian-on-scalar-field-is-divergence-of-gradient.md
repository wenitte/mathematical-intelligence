# 

Source: https://proofwiki.org/wiki/Laplacian_on_Scalar_Field_is_Divergence_of_Gradient



Theorem
Let $\R^n$ denote the real Cartesian space of $n$ dimensions.
Let $U$ be a scalar field over $\R^n$.
Let $\nabla^2 U$ denote the laplacian on $U$.

Then:

$\nabla^2 U = \operatorname {div} \grad U$
where:

$\operatorname {div}$ denotes the divergence operator
$\grad$ denotes the gradient operator.


Proof
From Divergence Operator on Vector Space is Dot Product of Del Operator and definition of the gradient operator:














\(\ds \operatorname {div} \mathbf V\)

\(=\)







\(\ds \nabla \cdot \mathbf V\)




















\(\ds \grad \mathbf U\)

\(=\)







\(\ds \nabla U\)









where $\nabla$ denotes the del operator.

Let $\tuple {\mathbf e_1, \mathbf e_2, \ldots, \mathbf e_n}$ be the standard ordered basis on $\R^n$.
Hence:














\(\ds \nabla^2 U\)

\(:=\)







\(\ds \nabla \cdot \paren {\nabla U}\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop = 1}^n \mathbf e_k \dfrac \partial {\partial x_k} } \cdot \paren {\sum_{k \mathop = 1}^n \dfrac {\partial U} {\partial x_k} \mathbf e_k}\)





Definition of Del Operator














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \dfrac {\partial^2 U} {\partial {x_k}^2}\)









$\blacksquare$


Also presented as
In Cartesian $3$-space $\R^3$, where:

$U$ is defined as $\map U {x, y, z}$
$\tuple {\mathbf i, \mathbf j, \mathbf k}$ is the standard ordered basis on $\R^3$.
this is usually presented as:














\(\ds \nabla^2 U\)

\(:=\)







\(\ds \nabla \cdot \paren {\nabla U}\)




















\(\ds \)

\(=\)







\(\ds \paren {\mathbf i \dfrac \partial {\partial x} + \mathbf j \dfrac \partial {\partial y} + \mathbf k \dfrac \partial {\partial z} } \cdot \paren {\dfrac {\partial U} {\partial x} \mathbf i + \dfrac {\partial U} {\partial y} \mathbf j + \dfrac {\partial U} {\partial z} \mathbf k}\)





Definition of Del Operator














\(\ds \)

\(=\)







\(\ds \dfrac {\partial^2 U} {\partial x^2} + \dfrac {\partial^2 U} {\partial y^2} + \dfrac {\partial^2 U} {\partial z^2}\)









$\blacksquare$


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {V}$: Further Applications of the Operator $\nabla$: $1$. The Operator $\operatorname {div} \grad$: $(5.1)$, $(5.2)$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 22$: The Laplacian: $22.32$




