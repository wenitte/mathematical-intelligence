# 

Source: https://proofwiki.org/wiki/Null_Space_Contains_Zero_Vector



Theorem
Let:

$\map {\mathrm N} {\mathbf A} = \set {\mathbf x \in \R^n: \mathbf A \mathbf x = \mathbf 0}$
be the null space of $\mathbf A$, where:
$\quad \mathbf A_{m \times n} = \begin {bmatrix}
a_{1 1} & a_{1 2} & \cdots & a_{1 n} \\
a_{2 1} & a_{2 2} & \cdots & a_{2 n} \\
\vdots  &  \vdots & \ddots &  \vdots \\
a_{m 1} & a_{m 2} & \cdots & a_{m n} \\
\end {bmatrix}$ 
is a matrix in the matrix space $\map {\MM_\R} {m, n}$.

Then the null space of $\mathbf A$ contains the zero vector:

$\mathbf 0 \in \map {\mathrm N} {\mathbf A}$
where:

$\mathbf 0 = \mathbf 0_{m \times 1} = \begin {bmatrix} 0 \\ 0 \\ \vdots \\ 0 \end {bmatrix}$


Proof 1













\(\ds \mathbf A \mathbf 0\)

\(=\)







\(\ds \begin {bmatrix}
a_{1 1} & a_{1 2} & \cdots & a_{1 n} \\
a_{2 1} & a_{2 2} & \cdots & a_{2 n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
a_{m 1} & a_{m 2} & \cdots & a_{m n} \\
\end {bmatrix} \begin {bmatrix} 0 \\ 0 \\ \vdots \\ 0 \end {bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {bmatrix} 0 \\ 0 \\ \vdots \\ 0 \end {bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \mathbf 0\)









The order is correct by hypothesis.
The result follows by the definition of null space.
$\blacksquare$


Proof 2
From Matrix Product as Linear Transformation, $\mathbf {Ax} = \mathbf 0$ defines a linear transformation from $\R^m$ to $\R^n$.
The result then follows from Linear Transformation Maps Zero Vector to Zero Vector.


Also see
Null Space Closed under Scalar Multiplication
Null Space Closed under Scalar Multiplication
Null Space is Subspace
Kernel of Linear Transformation contains Zero Vector


Sources
For a video presentation of the contents of this page, visit the Khan Academy.




