# 

Source: https://proofwiki.org/wiki/Determinant_with_Rows_Transposed/Proof_1

Theorem
If two rows of a matrix with determinant $D$ are transposed, its determinant becomes $-D$.


Proof
Let $\mathbf A = \sqbrk a_n$ be a square matrix of order $n$.
Let $1 \le r < s \le n$.
Let $e$ be the elementary row operation that exchanging rows $r$ and $s$.
Let $\mathbf B = \map e {\mathbf A}$.
Let $\mathbf E$ be the elementary row matrix corresponding to $e$.
From Elementary Row Operations as Matrix Multiplications:

$\mathbf B = \mathbf E \mathbf A$
From Determinant of Elementary Row Matrix: Exchange Rows:

$\map \det {\mathbf E} = -1$
Then:














\(\ds \map \det {\mathbf B}\)

\(=\)







\(\ds \map \det {\mathbf E \mathbf A}\)





Determinant of Matrix Product














\(\ds \)

\(=\)







\(\ds -\map \det {\mathbf A}\)





as $\map \det {\mathbf E} = -1$



Hence the result.
$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.6$ Determinant and trace: Proposition $1.9$




