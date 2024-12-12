# 

Source: https://proofwiki.org/wiki/Determinant_of_Inverse_Matrix

Theorem
Let $K$ be a field whose zero is $0_K$ and whose unity is $1_K$.
Let $\mathbf A$ be a nonsingular matrix of order $n$ over $K$.

Then the determinant of its inverse is given by:

$\map \det {\mathbf A^{-1} } = \dfrac {1_K} {\map \det {\mathbf A} }$


Proof
By definition of inverse matrix:

$\mathbf A \mathbf A^{-1} = \mathbf I_n$
where $\mathbf I_n$ is the unit matrix.
By Determinant of Unit Matrix:

$\map \det {\mathbf I_n} = 1_K$
By Determinant of Matrix Product:

$\map \det {\mathbf A^{-1} } \map \det {\mathbf A} = \map \det {\mathbf A^{-1} \mathbf A}$
Hence the result.
$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.6$ Determinant and trace: Fact $1.7 \ \text {(c)}$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): determinant (v)




