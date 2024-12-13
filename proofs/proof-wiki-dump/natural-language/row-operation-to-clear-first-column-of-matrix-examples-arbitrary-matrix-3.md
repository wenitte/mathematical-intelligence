# 

Source: https://proofwiki.org/wiki/Row_Operation_to_Clear_First_Column_of_Matrix/Examples/Arbitrary_Matrix_3

Example of Use of Row Operation to Clear First Column of Matrix
Let $\mathbf A$ be the matrix:

$\mathbf A = \begin {pmatrix} 0 & 4 & 7 & 10 \\ 2 & 5 & 8 & 11 \\ 3 & 6 & 9 & 12 \end {pmatrix}$
The matrix $\mathbf R$ corresponding to the row operation to clear the first column is:

$\mathbf R = \begin {pmatrix} 0 & \dfrac 1 2 & 0 \\ 1 & 0 & 0 \\ 0 & -\dfrac 3 2 & 1 \end {pmatrix}$
and the matrix $\mathbf B$ which results from the row operation $\mathbf R$ is:

$\mathbf B = \begin {pmatrix} 1 & \dfrac 5 2 & 4 & \dfrac {11} 2 \\ 0 & 4 & 7 & 10 \\ 0 & -\dfrac 3 2 & -3 & -\dfrac 9 2 \end {pmatrix}$


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







\(\ds \begin {pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end {pmatrix} \begin {pmatrix} 0 & 4 & 7 & 10 \\ 2 & 5 & 8 & 11 \\ 3 & 6 & 9 & 12 \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 2 & 5 & 8 & 11 \\ 0 & 4 & 7 & 10 \\ 3 & 6 & 9 & 12 \end {pmatrix}\)











$(2): \quad$ Apply the elementary row operation $r_1 \to \dfrac 1 2 r_1$ to exchange row $1$ with row $2$.
From Elementary Matrix corresponding to Elementary Row Operation: Scale Row, this is accomplished by pre-multiplying by the matrix:

$\mathbf E_2 := \begin {pmatrix} \dfrac 1 2 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end {pmatrix}$
which converts $\mathbf A_1$ to $\mathbf A_2$ as follows:














\(\ds \mathbf A_2\)

\(=\)







\(\ds \mathbf E_1 \mathbf A_1\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} \dfrac 1 2 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end {pmatrix} \begin {pmatrix} 2 & 5 & 8 & 11 \\ 0 & 4 & 7 & 10 \\ 3 & 6 & 9 & 12 \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 1 & \dfrac 5 2 & 4 & \dfrac {11}2 \\ 0 & 4 & 7 & 10 \\ 3 & 6 & 9 & 12 \end {pmatrix}\)









We calculate $\mathbf E_2 \mathbf E_1$:














\(\ds \mathbf E_2 \mathbf E_1\)

\(=\)







\(\ds \begin {pmatrix} \dfrac 1 2 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end {pmatrix} \begin {pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 0 & \dfrac 1 2 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end {pmatrix}\)











$(3): \quad$ Apply the elementary row operation $r_3 \to r_3 + \paren {-3} r_1$ to add $-3$ times row $1$ to row $3$.
From Elementary Matrix corresponding to Elementary Row Operation: Scale Row and Add, this is accomplished by pre-multiplying by the matrix:

$\mathbf E_3 := \begin {pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ -3 & 0 & 1 \end {pmatrix}$
which converts $\mathbf A_2$ to $\mathbf A_3$ as follows:














\(\ds \mathbf A_3\)

\(=\)







\(\ds \mathbf E_3 \mathbf A_2\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ -3 & 0 & 1 \end {pmatrix} \begin {pmatrix} 1 & \dfrac 5 2 & 4 & \dfrac {11}2 \\ 0 & 4 & 7 & 10 \\ 3 & 6 & 9 & 12 \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 1 & \dfrac 5 2 & 4 & \dfrac {11} 2 \\ 0 & 4 & 7 & 10 \\ 0 & -\dfrac 3 2 & -3 & -\dfrac 9 2 \end {pmatrix}\)









The matrix is in the correct form, and so:

$\mathbf B = \mathbf A_3$
$\Box$

Hence we can calculate $\mathbf R$:














\(\ds \mathbf R\)

\(=\)







\(\ds \mathbf E_3 \mathbf E_2 \mathbf E_1\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ -3 & 0 & 1 \end {pmatrix} \begin {pmatrix} 0 & \dfrac 1 2 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 0 & \dfrac 1 2 & 0 \\ 1 & 0 & 0 \\ 0 & -\dfrac 3 2 & 1 \end {pmatrix}\)









$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.5$ Row and column operations: Exercise $1.2 \ \text {(c)}$




