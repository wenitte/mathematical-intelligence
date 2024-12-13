# 

Source: https://proofwiki.org/wiki/Matrix_is_Row_Equivalent_to_Echelon_Matrix/Examples/Arbitrary_Matrix_5



Examples of Use of Matrix is Row Equivalent to Echelon Matrix
Let $\mathbf A = \begin {bmatrix} -1 & 0 & 1 & 2 & 3 \\ 0 & 1 & 2 & 3 & 4 \\ -1 & -2 & -3 & -4 & -5 \\ \end {bmatrix}$
This can be converted into the echelon form:

$\mathbf E = \begin {bmatrix} 1 & 0 & -1 & -2 & -3 \\ 0 & 1 & 2 & 3 & 4 \\ 0 & 0 & 0 & 0 & 0 \\ \end {bmatrix}$


Proof
This matrix can more easily be handled by direct application of elementary row operations, as follows.
Let $e_1$ be the elementary row operation:

$e_1 := r_3 \to r_3 - r_1$
which leaves:
$\mathbf A_1 = \begin {bmatrix} -1 & 0 & 1 & 2 & 3 \\ 0 & 1 & 2 & 3 & 4 \\ 0 & -2 & -4 & -6 & -8 \\ \end {bmatrix}$
Let $e_2$ be the elementary row operation:

$e_2 := r_3 \to r_3 + 2 r_2$
which leaves:

$\mathbf A_2 = \begin {bmatrix} -1 & 0 & 1 & 2 & 3 \\ 0 & 1 & 2 & 3 & 4 \\ 0 & 0 & 0 & 0 & 0 \\ \end {bmatrix}$

$\mathbf A_2$ is in non-unity echelon form.
It remains to perform the elementary row operation $e_3$ to convert it into echelon form:

$e_3 := r_1 \to -r_1$
which leaves:

$\mathbf E = \begin {bmatrix} 1 & 0 & -1 & -2 & -3 \\ 0 & 1 & 2 & 3 & 4 \\ 0 & 0 & 0 & 0 & 0 \\ \end {bmatrix}$
$\blacksquare$


Also presented as
Some sources use the non-unity variant of the echelon matrix.
Such sources do not require that the leading coefficients necessarily have to equal to $1$.
Hence they consider the final step to convert row $1$ of $\mathbf E$ from $\begin {bmatrix} -1 & 0 & 1 & 2 & 3 \end {bmatrix}$ to $\begin {bmatrix} 1 & 0 & -1 & -2 & -3 \end {bmatrix}$ as optional.


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.5$ Row and column operations: Exercise $1.4 \ \text {(e)}$




