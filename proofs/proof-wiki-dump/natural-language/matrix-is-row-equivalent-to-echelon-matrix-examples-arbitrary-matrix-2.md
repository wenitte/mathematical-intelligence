# 

Source: https://proofwiki.org/wiki/Matrix_is_Row_Equivalent_to_Echelon_Matrix/Examples/Arbitrary_Matrix_2

Examples of Use of Matrix is Row Equivalent to Echelon Matrix
Let $\mathbf A = \begin {bmatrix} 1 & 1 & 1 & 1 \\ 2 & 3 & 4 & 5 \\ 3 & 4 & 5 & 6 \\ \end {bmatrix}$
This can be converted into the echelon form:

$\mathbf E = \begin {bmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 0 & 0 \\ \end {bmatrix}$


Proof
Using Row Operation to Clear First Column of Matrix we obtain:

$\mathbf B = \begin {bmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 1 & 2 & 3 \\ \end {bmatrix}$
which is obtained by:

adding $-2$ of row $1$ to row $2$
adding $-3$ of row $1$ to row $3$.
Then we investigate the submatrix:

$\mathbf B' = \begin {bmatrix} 1 & 2 & 3 \\ 1 & 2 & 3 \\ \end {bmatrix}$
Using Row Operation to Clear First Column of Matrix we obtain:

$\mathbf C' = \begin {bmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\ \end {bmatrix}$
which is obtained by adding $-1$ of row $1$ of $\mathbf B'$ to row $2$ of $\mathbf B'$.

Thus we are left with:

$\mathbf E = \begin {bmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 0 & 0 \\ \end {bmatrix}$
$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.5$ Row and column operations: Exercise $1.4 \ \text {(b)}$




