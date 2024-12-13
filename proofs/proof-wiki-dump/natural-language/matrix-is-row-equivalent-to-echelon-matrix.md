# 

Source: https://proofwiki.org/wiki/Matrix_is_Row_Equivalent_to_Echelon_Matrix



Theorem
Let $\mathbf A = \sqbrk a_{m n}$ be a matrix of order $m \times n$ over a field $F$.

Then $A$ is row equivalent to an echelon matrix of order $m \times n$.


Proof
Using the operation Row Operation to Clear First Column of Matrix, $\mathbf A$ is converted to $\mathbf B$, which will be in the form:

$\begin{bmatrix}
0      & \cdots &      0 &      1 & b_{1, j + 1} & \cdots & b_{1 n} \\
0      & \cdots &      0 &      0 & b_{2, j + 1} & \cdots & b_{2 n} \\
\vdots & \ddots & \vdots & \vdots &       \vdots & \ddots &  \vdots \\
0      & \cdots &      0 &      0 & b_{m, j + 1} & \cdots & b_{m n} \\
\end{bmatrix}$

If some zero rows have appeared, do some further elementary row operations, that is row interchanges, to put them at the bottom.

We then address our attention to the submatrix:

$\begin{bmatrix}
b_{2, j + 1} & b_{2, j + 2} & \cdots & b_{2 n} \\
b_{3, j + 1} & b_{3, j + 2} & \cdots & b_{3 n} \\

     \vdots &       \vdots & \ddots &  \vdots \\

b_{m, j + 1} & b_{m, j + 2} & \cdots & b_{m n} \\
\end{bmatrix}$
and perform the same operation on that.

This results in the submatrix being transformed into the form:

$\begin{bmatrix}
    1 & c_{2, j + 2} & \cdots & c_{2 n} \\
    0 & c_{3, j + 2} & \cdots & c_{3 n} \\

\vdots &       \vdots & \ddots &  \vdots \\

    0 & c_{m, j + 2} & \cdots & c_{m n} \\

\end{bmatrix}$

Again, we process the submatrix:

$\begin{bmatrix}
c_{3, j + 2} & \cdots & c_{3 n} \\

     \vdots & \ddots &  \vdots \\

c_{m, j + 2} & \cdots & c_{m n} \\
\end{bmatrix}$

Thus we progress, until the entire matrix is in echelon form.
$\blacksquare$


Examples
Arbitrary Matrix $1$
Let $\mathbf A = \begin {bmatrix} 0 & 1 & 1 \\ 0 & 1 & 0 \\ 1 & 1 & 0 \\ \end {bmatrix}$
This can be converted into the echelon form:

$\mathbf E = \begin {bmatrix} 1 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \\ \end {bmatrix}$


Arbitrary Matrix $2$
Let $\mathbf A = \begin {bmatrix} 1 & 1 & 1 & 1 \\ 2 & 3 & 4 & 5 \\ 3 & 4 & 5 & 6 \\ \end {bmatrix}$
This can be converted into the echelon form:

$\mathbf E = \begin {bmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 0 & 0 \\ \end {bmatrix}$


Arbitrary Matrix $3$
Let $\mathbf A = \begin {bmatrix} 1 & 2 & 3 & 5 \\ 1 & 2 & 3 & 4 \\ 0 & 0 & 1 & 1 \\ \end {bmatrix}$
This can be converted into the echelon form:

$\mathbf E = \begin {bmatrix} 1 & 2 & 3 & 5 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 \\ \end {bmatrix}$


Arbitrary Matrix $4$
Let $\mathbf A = \begin {bmatrix} 1 & 1 & 2 & 3 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 3 & 3 \\ \end {bmatrix}$
This can be converted into the echelon form:

$\mathbf E = \begin {bmatrix} 1 & 1 & 2 & 3 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 \\ \end {bmatrix}$


Arbitrary Matrix $5$
Let $\mathbf A = \begin {bmatrix} -1 & 0 & 1 & 2 & 3 \\ 0 & 1 & 2 & 3 & 4 \\ -1 & -2 & -3 & -4 & -5 \\ \end {bmatrix}$
This can be converted into the echelon form:

$\mathbf E = \begin {bmatrix} 1 & 0 & -1 & -2 & -3 \\ 0 & 1 & 2 & 3 & 4 \\ 0 & 0 & 0 & 0 & 0 \\ \end {bmatrix}$


Also presented as
Some sources use the non-unity variant of the echelon matrix, and so do not seek to ensure that the leading coefficients are equal to $1$.
However, it is often left as an optional step to perform the necessary elementary row operation to multiply each row by the reciprocal of its leading coefficients so as to make it so.


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.5$ Row and column operations
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): echelon form
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): echelon form




