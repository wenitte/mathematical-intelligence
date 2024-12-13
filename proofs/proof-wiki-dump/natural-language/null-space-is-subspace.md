# 

Source: https://proofwiki.org/wiki/Null_Space_is_Subspace

Theorem
Let:

$\map {\mathrm N} {\mathbf A} = \set {\mathbf x \in \R^n: \mathbf {A x} = \mathbf 0}$
be the null space of $\mathbf A$, where:

$\mathbf A_{m \times n} = \begin {bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn} \\
\end {bmatrix}$,  $\mathbf x_{n \times 1} = \begin {bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end {bmatrix}$, $\mathbf 0_{m \times 1} = \begin {bmatrix} 0 \\ 0 \\ \vdots \\ 0 \end {bmatrix}$
are matrices.

Then $\map {\mathrm N} {\mathbf A}$ is a linear subspace of $\R^n$.


Proof
$\map {\mathrm N} {\mathbf A} \subseteq \R^n$, by construction.
We have:

$\mathbf 0 \in \map {\mathrm N} {\mathbf A}$, from Null Space Contains Zero Vector
$\forall \mathbf v, \mathbf w \in \map {\mathrm N} {\mathbf A}: \mathbf v + \mathbf w \in \map {\mathrm N} {\mathbf A}$, from Null Space Closed under Vector Addition
$\forall \mathbf v \in \map {\mathrm N} {\mathbf A}, \lambda \in \R: \lambda \mathbf v \in \map {\mathrm N} {\mathbf A}$, from Null Space Closed under Scalar Multiplication
The result follows from Vector Subspace of Real Vector Space.
$\blacksquare$


Sources
For a video presentation of the contents of this page, visit the Khan Academy.




