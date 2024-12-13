# 

Source: https://proofwiki.org/wiki/Matrix_Product_with_Adjugate_Matrix



Theorem
Let $R$ be a commutative ring with unity.
Let $\mathbf A \in R^{n \times n}$ be a square matrix of order $n$.
Let $\adj {\mathbf A}$ be its adjugate matrix.

Then:














\(\ds \mathbf A \cdot \adj {\mathbf A}\)

\(=\)







\(\ds \map \det {\mathbf A} \cdot \mathbf I_n\)




















\(\ds \adj {\mathbf A} \cdot \mathbf A\)

\(=\)







\(\ds \map \det {\mathbf A} \cdot \mathbf I_n\)










where $\map \det {\mathbf A}$ is the determinant of $\mathbf A$, and $\mathbf I_n$ denotes the unit matrix of order $n$.


Proof
Let $\mathbf A = \paren {a_{i j} }$.
Let $A_{i j}$ denote the cofactor of $a_{i j} \in \mathbf A$.


Right Multiplication
We show that $\mathbf A \cdot \adj {\mathbf A} = \map \det {\mathbf A} \cdot \mathbf I_n$.
Let $i, j \in \set {1, \ldots, n}$. 
If $i = j$, expanding $\map \det {\mathbf A}$ along row $i$ shows that:

$\ds \map \det {\mathbf A} = \sum_{k \mathop = 1}^n a_{i k} A_{i k}$
If $i \ne j$, define $\mathbf A'$ as the matrix obtained by replacing row $j$ of $\mathbf A$ with row $i$ of $\mathbf A$.
Then $\mathbf A' = \begin {bmatrix} a' \end {bmatrix}_n$ has two identical rows, so:














\(\ds 0_R\)

\(=\)







\(\ds \map \det {\mathbf A'}\)





Square Matrix with Duplicate Rows has Zero Determinant














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n a'_{j k} A'_{j k}\)





expanding $\map \det {\mathbf A'}$ along row $j$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n a_{i k} A_{j k}\)










By definition of matrix product, element $\tuple {i, j}$ of $\mathbf A \cdot \adj {\mathbf A}$ is:

$\ds \sum_{k \mathop = 1}^n a_{i k} A_{j k} = \begin {cases}
0_R & \text {for} &  i \ne j \\
\map \det {\mathbf A} & \text {for} &  i = j
\end {cases}$
Hence:

$\mathbf A \cdot \adj {\mathbf A} = \map \det {\mathbf A} \cdot \mathbf I_n$
$\Box$


Left Multiplication
We show that $\adj {\mathbf A} \cdot \mathbf A = \map \det {\mathbf A} \cdot \mathbf I_n$.
Let $i, j \in \set {1, \ldots, n}$.
If $i = j$, expanding $\map \det {\mathbf A}$ along column $j$ shows that:

$\ds \map \det {\mathbf A} = \sum_{k \mathop = 1}^n a_{k j} A_{k j}$
If $i \ne j$, define $\mathbf A'$ as the matrix obtained by replacing column $i$ of $\mathbf A$ with column $j$ of $\mathbf A$.
Then $\mathbf A' = \begin{bmatrix} a' \end{bmatrix}_n$ has two identical columns, so:














\(\ds 0_R\)

\(=\)







\(\ds \map \det {\mathbf A'}\)





Square Matrix with Duplicate Columns has Zero Determinant














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n a'_{k i} A'_{k i}\)





expanding $\map \det {\mathbf A'}$ along column $i$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n a_{k j} A_{k i}\)









By definition of matrix product, element $\tuple {i, j}$ of $\adj {\mathbf A} \cdot \mathbf A$ is:

$\ds \sum_{k \mathop = 1}^n A_{k i} a_{k j} = \begin {cases}
0_R & \text {for} &  i \ne j \\
\map \det {\mathbf A} & \text {for} &  i = j
\end {cases}$
Hence:

$\adj {\mathbf A} \cdot \mathbf A = \map \det {\mathbf A} \cdot \mathbf I_n$
$\blacksquare$


Also see
Matrix is Nonsingular iff Determinant has Multiplicative Inverse


Sources
1994: Robert Messer: Linear Algebra: Gateway to Mathematics: $\S 7.4$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercises -- Second Set
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.7$ Minors and cofactors: $(2)$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): adjoint




