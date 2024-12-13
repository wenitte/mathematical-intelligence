# 

Source: https://proofwiki.org/wiki/Row_Operation_to_Clear_First_Column_of_Matrix/Examples/Arbitrary_Matrix_1

Example of Use of Row Operation to Clear First Column of Matrix
Let $\mathbf A$ be the matrix:

$\mathbf A = \begin {pmatrix} 0 & 1 & 1 \\ 1 & 1 & 0 \\ 1 & 0 & 1 \end {pmatrix}$
The matrix $\mathbf R$ corresponding to the row operation to clear the first column is:

$\mathbf R = \begin {pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & -1 & 1 \end {pmatrix}$
and the matrix $\mathbf B$ which results from the row operation $\mathbf R$ is:

$\mathbf B = \begin {pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 0 & -1 & 1 \end {pmatrix}$


Proof
We use Row Operation to Clear First Column of Matrix as follows:


$(1): \quad$ Apply the elementary row operation $r_1 \leftrightarrow r_2$ to exchange row $1$ with row $2$.
From Elementary Matrix corresponding to Elementary Row Operation: Exchange Rows, this is accomplished by pre-multiplying by the matrix:

$\mathbf E_1 := \begin {pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end {pmatrix}$
which converts $\mathbf A$ to $\mathbf A_1$ as follows:














\(\ds \mathbf A_1\)

\(=\)







\(\ds \mathbf E_1 \mathbf A\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end {pmatrix} \begin {pmatrix} 0 & 1 & 1 \\ 1 & 1 & 0 \\ 1 & 0 & 1 \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end {pmatrix}\)











$(2): \quad$ Apply the elementary row operation $r_3 \to r_3 + \paren {-1} r_1$ to add $-1$ times row $1$ to row $3$.
From Elementary Matrix corresponding to Elementary Row Operation: Scale Row and Add, this is accomplished by pre-multiplying by the matrix:

$\mathbf E_2 := \begin {pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ -1 & 0 & 1 \end {pmatrix}$
which converts $\mathbf A_1$ to $\mathbf A_2$ as follows:














\(\ds \mathbf A_2\)

\(=\)







\(\ds \mathbf E_2 \mathbf A_1\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ -1 & 0 & 1 \end {pmatrix} \begin {pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 0 & -1 & 1 \end {pmatrix}\)









The matrix is in the correct form, and so:

$\mathbf B = \mathbf A_2$
$\Box$

Hence we can calculate $\mathbf R$:














\(\ds \mathbf R\)

\(=\)







\(\ds \mathbf E_2 \mathbf E_1\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ -1 & 0 & 1 \end {pmatrix} \begin {pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & -1 & 1 \end {pmatrix}\)









$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.5$ Row and column operations: Exercise $1.2 \ \text {(a)}$




