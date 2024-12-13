# 

Source: https://proofwiki.org/wiki/Matrix_Product_as_Linear_Transformation



Theorem
Let:














\(\ds \mathbf A_{m \times n}\)

\(=\)







\(\ds \begin {bmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \\ \end {bmatrix}\)




















\(\ds \mathbf x_{n \times 1}\)

\(=\)







\(\ds \begin {bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end {bmatrix}\)




















\(\ds \mathbf y_{n \times 1}\)

\(=\)







\(\ds \begin {bmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end {bmatrix}\)









be matrices where each column is an element of a real vector space.

Let $T$ be the mapping:

$T: \R^m \to \R^n, \mathbf x \mapsto \mathbf A \mathbf x$
Then $T$ is a linear transformation.


Proof
From Matrix Multiplication is Homogeneous of Degree $1$:

$\forall \lambda \in \mathbb F \in \set {\R, \C}: \mathbf A \paren {\lambda \mathbf x} = \lambda \paren {\mathbf A \mathbf x}$
From Matrix Multiplication Distributes over Matrix Addition:

$\forall \mathbf x, \mathbf y \in \R^m: \mathbf A \paren {\mathbf x + \mathbf y} = \mathbf A \mathbf x + \mathbf A \mathbf y$
Hence the result, from the definition of linear transformation.
$\blacksquare$


Also see
Linear Transformation as Matrix Product


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.1$: Continuous and linear maps. Linear transformations
For a video presentation of the contents of this page, visit the Khan Academy.




