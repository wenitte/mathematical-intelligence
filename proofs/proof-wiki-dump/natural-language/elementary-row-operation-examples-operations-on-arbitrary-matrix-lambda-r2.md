# 

Source: https://proofwiki.org/wiki/Elementary_Row_Operation/Examples/Operations_on_Arbitrary_Matrix/lambda_r2

Example of Elementary Row Operation
Let $\mathbf A$ be the matrix:

$\mathbf A = \begin {pmatrix} 1 & 2 & 3 & 4 \\ 2 & -1 & 1 & 0 \\ -2 & 3 & 1 & 1 \end {pmatrix}$
Let the elementary row operation $e$ be applied to $\mathbf A$, where $e$ is defined as:

$e := r_2 \to \lambda r_2$
Then $\mathbf A$ is transformed into:

$\mathbf A = \begin {pmatrix} 1 & 2 & 3 & 4 \\ 2 \lambda & -\lambda & \lambda & 0 \\ -2 & 3 & 1 & 1 \end {pmatrix}$


Proof
From Elementary Row Operation: $r_2 \to \lambda r_2$, the elementary row matrix $\mathbf E$ corresponding to $e$ is:

$\mathbf E = \begin {pmatrix} 1 & 0 & 0 \\ 0 & \lambda & 0 \\ 0 & 0 & 1 \end {pmatrix}$
Hence by Elementary Row Operations as Matrix Multiplications:














\(\ds \map e {\mathbf A}\)

\(=\)







\(\ds \mathbf E \mathbf A\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 1 & 0 & 0 \\ 0 & \lambda & 0 \\ 0 & 0 & 1 \end {pmatrix} \begin {pmatrix} 1 & 2 & 3 & 4 \\ 2 & -1 & 1 & 0 \\ -2 & 3 & 1 & 1 \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 1 & 2 & 3 & 4 \\ 2 \lambda & -\lambda & \lambda & 0 \\ -2 & 3 & 1 & 1 \end {pmatrix}\)









$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.5$ Row and column operations: Exercise $1.1$




