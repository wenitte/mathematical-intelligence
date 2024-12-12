# 

Source: https://proofwiki.org/wiki/Determinant_with_Row_Multiplied_by_Constant/Proof_1

Theorem
Let $\mathbf A = \sqbrk a_n$ be a square matrix of order $n$.
Let $\map \det {\mathbf A}$ be the determinant of $\mathbf A$.

Let $\mathbf B$ be the matrix resulting from one row of $\mathbf A$ having been multiplied by a constant $c$.

Then:

$\map \det {\mathbf B} = c \map \det {\mathbf A}$

That is, multiplying one row of a square matrix by a constant multiplies its determinant by that constant.


Proof
Let $\mathbf A = \sqbrk a_n$ be a square matrix of order $n$.
Let $e$ be the elementary row operation that multiplies rows $i$ by the scalar$c$.
Let $\mathbf B = \map e {\mathbf A}$.
Let $\mathbf E$ be the elementary row matrix corresponding to $e$.
From Elementary Row Operations as Matrix Multiplications:

$\mathbf B = \mathbf E \mathbf A$
From Determinant of Elementary Row Matrix: Exchange Rows:

$\map \det {\mathbf E} = c$
Then:














\(\ds \map \det {\mathbf B}\)

\(=\)







\(\ds \map \det {\mathbf E \mathbf A}\)





Determinant of Matrix Product














\(\ds \)

\(=\)







\(\ds c \map \det {\mathbf A}\)





as $\map \det {\mathbf E} = c$



Hence the result.
$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.6$ Determinant and trace: Proposition $1.10$




