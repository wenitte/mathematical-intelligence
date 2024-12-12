# 

Source: https://proofwiki.org/wiki/Determinant_with_Columns_Transposed



Theorem
If two columns of a matrix with determinant $D$ are transposed, its determinant becomes $-D$.


Proof
Let $\mathbf A = \sqbrk a_n$ be a square matrix of order $n$.
Let $\map \det {\mathbf A}$ be the determinant of $\mathbf A$.
Let $1 \le r < s \le n$.

Let $\mathbf B$ be $\mathbf A$ with columns $r$ and $s$ transposed.

Consider:

the transpose $\mathbf A^\intercal$ of $\mathbf A$
the transpose $\mathbf B^\intercal$ of $\mathbf B$.
hence $\mathbf B^\intercal$ is $\mathbf A^\intercal$ with rows $r$ and $s$ transposed.

From Determinant with Rows Transposed:

$\map \det {\mathbf B^\intercal} = -\map \det {\mathbf A^\intercal}$

From from Determinant of Transpose:

$\map \det {\mathbf B^\intercal} = \map \det {\mathbf B}$
$\map \det {\mathbf A^\intercal} = \map \det {\mathbf A}$
and the result follows.
$\blacksquare$


Also see
Determinant with Rows Transposed


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): $\text{A}.2$: Linear algebra and determinants: Theorem $\text{A}.10 \ (2)$
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.6$ Determinant and trace: Proposition $1.13$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): determinant (1)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): determinant (1)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): determinant (ii)




