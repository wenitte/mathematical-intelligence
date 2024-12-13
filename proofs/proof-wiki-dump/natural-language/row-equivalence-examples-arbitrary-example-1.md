# 

Source: https://proofwiki.org/wiki/Row_Equivalence/Examples/Arbitrary_Example_1

Example of Row Equivalence
Let $\mathbf A$ be the matrix defined as:

$\mathbf A := \begin {bmatrix} 1 & 0 & -1 & 1 \\ 2 & 1 & 0 & 1 \\ -1 & 1 & 0 & -2 \end {bmatrix}$
Let $\mathbf B$ be the matrix defined as:

$\mathbf B := \begin {bmatrix} 1 & 0 & -1 & 1 \\ -1 & 1 & 0 & 2 \\ 0 & 3 & 0 & 5 \end {bmatrix}$
Then $\mathbf A$ and $\mathbf B$ are row equivalent.


Proof
$(1): \quad$ Use the elementary row operation on $\mathbf A$:

$e_1 := r_2 \to r_2 + 2 r_3$
to make $\mathbf A_1$:

$\mathbf A_1 := \begin {bmatrix} 1 & 0 & -1 & 1 \\ 0 & 3 & 0 & 5 \\ -1 & 1 & 0 & -2 \end {bmatrix}$

$(2): \quad$ Use the elementary row operation on $\mathbf A_1$:

$e_2 := r_2 \leftrightarrow r_3$
to make $\mathbf A_2$:

$\mathbf A_2 := \begin {bmatrix} 1 & 0 & -1 & 1 \\ -1 & 1 & 0 & -2 \\ 0 & 3 & 0 & 5 \end {bmatrix}$
which is $\mathbf B$.
$\blacksquare$


Sources
1982: A.O. Morris: Linear Algebra: An Introduction (2nd ed.) ... (previous) ... (next): Chapter $1$: Linear Equations and Matrices: $1.2$ Elementary Row Operations on Matrices: Example




