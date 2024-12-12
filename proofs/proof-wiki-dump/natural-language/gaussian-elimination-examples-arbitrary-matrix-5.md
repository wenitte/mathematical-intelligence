# 

Source: https://proofwiki.org/wiki/Gaussian_Elimination/Examples/Arbitrary_Matrix_5

Example of Use of Gaussian Elimination
Let $\mathbf A$ denote the matrix:

$\mathbf A = \begin {bmatrix}
 0 & 1 & 1 &  1 &  2 & 2 \\
-1 & 4 & 3 &  3 &  4 & 7 \\
 2 & 1 & 3 &  2 &  8 & 3 \\
 3 & 1 & 4 & -1 &  4 & 0 \\
 5 & 2 & 7 &  0 & 10 & 2 \\
\end {bmatrix}$
The reduced echelon form of $\mathbf A$ is:

$\mathbf E = \begin {bmatrix}
 1 & 0 & 1 &  0 &   2 &  0 \\
 0 & 1 & 1 &  0 &   0 &  1 \\
 0 & 0 & 0 &  1 &   2 &  1 \\
 0 & 0 & 0 &  0 &   0 &  0 \\
 0 & 0 & 0 &  0 &   0 &  0 \\
\end {bmatrix}$


Proof
In the following, $\sequence {e_n}_{n \mathop \ge 1}$ denotes the sequence of elementary row operations that are to be applied to $\mathbf A$.
The matrix that results from having applied $e_1$ to $e_k$ in order is denoted $\mathbf A_k$.

$e_1 := r_2 \leftrightarrow r_1$
Hence:

$\mathbf A_1 = \begin {bmatrix}
-1 & 4 & 3 &  3 &  4 & 7 \\
 0 & 1 & 1 &  1 &  2 & 2 \\
 2 & 1 & 3 &  2 &  8 & 3 \\
 3 & 1 & 4 & -1 &  4 & 0 \\
 5 & 2 & 7 &  0 & 10 & 2 \\
\end {bmatrix}$

$e_2 := r_1 \to -r_1$

$\mathbf A_2 = \begin {bmatrix}
 1 & -4 & -3 & -3 & -4 & -7 \\
 0 &  1 &  1 &  1 &  2 &  2 \\
 2 &  1 &  3 &  2 &  8 &  3 \\
 3 &  1 &  4 & -1 &  4 &  0 \\
 5 &  2 &  7 &  0 & 10 &  2 \\
\end {bmatrix}$

$e_3 := r_1 \to r_1 + 4 r_2$

$\mathbf A_3 = \begin {bmatrix}
 1 &  0 &  1 &  1 &  4 &  1 \\
 0 &  1 &  1 &  1 &  2 &  2 \\
 2 &  1 &  3 &  2 &  8 &  3 \\
 3 &  1 &  4 & -1 &  4 &  0 \\
 5 &  2 &  7 &  0 & 10 &  2 \\
\end {bmatrix}$

$e_4 := r_3 \to r_3 - 2 r_1$
$e_5 := r_4 \to r_4 - 3 r_1$
$e_6 := r_5 \to r_5 - 5 r_1$
Hence:

$\mathbf A_6 = \begin {bmatrix}
 1 & 0 & 1 &  1 &   4 &  1 \\
 0 & 1 & 1 &  1 &   2 &  2 \\
 0 & 1 & 1 &  0 &   0 &  1 \\
 0 & 1 & 1 & -4 &  -8 & -3 \\
 0 & 2 & 2 & -5 & -10 & -3 \\
\end {bmatrix}$

$e_7 := r_3 \to r_3 - r_2$
$e_8 := r_4 \to r_4 - r_2$

$\mathbf A_8 = \begin {bmatrix}
 1 & 0 & 1 &  1 &   4 &  1 \\
 0 & 1 & 1 &  1 &   2 &  2 \\
 0 & 0 & 0 & -1 &  -2 & -1 \\
 0 & 0 & 0 & -5 & -10 & -5 \\
 0 & 2 & 2 & -5 & -10 & -3 \\
\end {bmatrix}$
$e_9 := r_3 \to -r_3$
$e_{10} := r_5 \to r_5 - r_4$

$\mathbf A_{10} = \begin {bmatrix}
 1 & 0 & 1 &  1 &   4 &  1 \\
 0 & 1 & 1 &  1 &   2 &  2 \\
 0 & 0 & 0 &  1 &   2 &  1 \\
 0 & 0 & 0 & -5 & -10 & -5 \\
 0 & 2 & 2 &  0 &   0 &  2 \\
\end {bmatrix}$

$e_{12} := r_4 \to r_4 + 5 r_3$
$e_{13} := r_2 \to r_2 - r_3$
$e_{14} := r_1 \to r_1 - r_3$

$\mathbf A_{14} = \begin {bmatrix}
 1 & 0 & 1 &  0 &   2 &  0 \\
 0 & 1 & 1 &  0 &   0 &  1 \\
 0 & 0 & 0 &  1 &   2 &  1 \\
 0 & 0 & 0 &  0 &   0 &  0 \\
 0 & 2 & 2 &  0 &   0 &  2 \\
\end {bmatrix}$

$e_{15} := r_5 \to r_5 - 2 r_2$

$\mathbf A_{15} = \begin {bmatrix}
 1 & 0 & 1 &  0 &   2 &  0 \\
 0 & 1 & 1 &  0 &   0 &  1 \\
 0 & 0 & 0 &  1 &   2 &  1 \\
 0 & 0 & 0 &  0 &   0 &  0 \\
 0 & 0 & 0 &  0 &   0 &  0 \\
\end {bmatrix}$

and it is seen that $\mathbf A_{16}$ is the required reduced echelon form.
$\blacksquare$


Sources
1982: A.O. Morris: Linear Algebra: An Introduction (2nd ed.) ... (previous) ... (next): Chapter $1$: Linear Equations and Matrices: $1.2$ Elementary Row Operations on Matrices: Exercises $1.2$: $1 \ \text {(iv)}$




