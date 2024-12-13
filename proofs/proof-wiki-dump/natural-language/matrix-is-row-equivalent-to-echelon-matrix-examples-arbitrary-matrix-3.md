# 

Source: https://proofwiki.org/wiki/Matrix_is_Row_Equivalent_to_Echelon_Matrix/Examples/Arbitrary_Matrix_3



Examples of Use of Matrix is Row Equivalent to Echelon Matrix
Let $\mathbf A = \begin {bmatrix} 1 & 2 & 3 & 5 \\ 1 & 2 & 3 & 4 \\ 0 & 0 & 1 & 1 \\ \end {bmatrix}$
This can be converted into the echelon form:

$\mathbf E = \begin {bmatrix} 1 & 2 & 3 & 5 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 \\ \end {bmatrix}$


Proof
Using Row Operation to Clear First Column of Matrix we obtain:

$\mathbf B = \begin {bmatrix} 1 & 2 & 3 & 5 \\ 0 & 0 & 0 & -1 \\ 0 & 0 & 1 & 1 \\ \end {bmatrix}$
which is obtained by adding $-2$ of row $1$ to row $2$.

Then we investigate the submatrix:

$\mathbf B' = \begin {bmatrix} 0 & 0 & -1 \\ 0 & 1 & 1 \\ \end {bmatrix}$
Using Row Operation to Clear First Column of Matrix we obtain:

$\mathbf C' = \begin {bmatrix} 0 & 1 & 1 \\ 0 & 0 & 1 \\ \end {bmatrix}$
which is obtained by:

$(1): \quad$ exchanging row $1$ of $\mathbf B'$ with row $2$ of $\mathbf B'$.
$(2): \quad$ multiplying row $2$ of $\mathbf B'$ by $-1$.

Thus we are left with:

$\mathbf E = \begin {bmatrix} 1 & 2 & 3 & 5 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 \\ \end {bmatrix}$
$\blacksquare$


Also presented as
Some sources use the non-unity variant of the echelon matrix.
Such sources do not require that the leading coefficients necessarily have to equal to $1$.
Hence they consider the final step to convert row $3$ of $\mathbf E$ from $\begin {bmatrix} 0 & 0 & 0 & -1 \end {bmatrix}$ to $\begin {bmatrix} 0 & 0 & 0 & 1 \end {bmatrix}$ as optional.


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.5$ Row and column operations: Exercise $1.4 \ \text {(c)}$




