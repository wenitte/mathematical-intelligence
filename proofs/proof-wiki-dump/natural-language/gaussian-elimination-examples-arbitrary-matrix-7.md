# 

Source: https://proofwiki.org/wiki/Gaussian_Elimination/Examples/Arbitrary_Matrix_7

Example of Use of Gaussian Elimination
Let $\mathbf A$ denote the matrix:

$\mathbf A = \begin {bmatrix}
          1 &  1 -   \sqrt 2 &  0           &        \sqrt 2 \\
\sqrt 2     & -3             &  1 + \sqrt 2 & -1 - 2 \sqrt 2 \\
         -1 &        \sqrt 2 & -1           &  1             \\
\sqrt 2 - 2 & -2 + 4 \sqrt 2 & -2 - \sqrt 2 &  3 +   \sqrt 2 \\
\end {bmatrix}$
The reduced echelon form of $\mathbf A$ is:

$\mathbf E = \begin {bmatrix}
1 & 0 &  1 - \sqrt 2 &  0 \\
0 & 1 & -1           &  0 \\
0 & 0 &  0           &  1 \\
0 & 0 &  0           &  0 \\
\end {bmatrix}$


Proof
In the following, $\sequence {e_n}_{n \mathop \ge 1}$ denotes the sequence of elementary row operations that are to be applied to $\mathbf A$.
The matrix that results from having applied $e_1$ to $e_k$ in order is denoted $\mathbf A_k$.

$e_1 := r_3 \to r_3 + r_1$
$e_2 := r_4 \to r_4 - r_2$
$e_3 := r_4 \to r_4 + 2 r_1$
Hence:

$\mathbf A_3 = \begin {bmatrix}
          1 &  1 -   \sqrt 2 &  0             &        \sqrt 2 \\
\sqrt 2     & -3             &  1 +   \sqrt 2 & -1 - 2 \sqrt 2 \\
          0 &  1             & -1             &  1 +   \sqrt 2 \\
          0 &  3 + 2 \sqrt 2 & -3 - 2 \sqrt 2 &  4 + 5 \sqrt 2 \\
\end {bmatrix}$

$e_4 := r_2 \to r_2 - \sqrt 2 r_1$

$\mathbf A_4 = \begin {bmatrix}
1 &  1 -   \sqrt 2 &  0             &        \sqrt 2 \\
0 & -1 -   \sqrt 2 &  1 +   \sqrt 2 & -3 - 2 \sqrt 2 \\
0 &  1             & -1             &  1 +   \sqrt 2 \\
0 &  3 + 2 \sqrt 2 & -3 - 2 \sqrt 2 &  4 + 5 \sqrt 2 \\
\end {bmatrix}$

$e_5 := r_2 \leftrightarrow r_3$

$\mathbf A_5 = \begin {bmatrix}
1 &  1 -   \sqrt 2 &  0             &        \sqrt 2 \\
0 &  1             & -1             &  1 +   \sqrt 2 \\
0 & -1 -   \sqrt 2 &  1 +   \sqrt 2 & -3 - 2 \sqrt 2 \\
0 &  3 + 2 \sqrt 2 & -3 - 2 \sqrt 2 &  4 + 5 \sqrt 2 \\
\end {bmatrix}$

$e_6 := r_1 \to r_1 - r_3$
$e_7 := r_4 \to r_4 + 2 r_3$

$\mathbf A_7 = \begin {bmatrix}
1 &  2             & -1 -   \sqrt 2 &  3 + 3 \sqrt 2 \\
0 &  1             & -1             &  1 +   \sqrt 2 \\
0 & -1 -   \sqrt 2 &  1 +   \sqrt 2 & -3 - 2 \sqrt 2 \\
0 &  1             & -1             & -2 +   \sqrt 2 \\
\end {bmatrix}$

$e_8 := r_1 \to r_1 - 2 r_2$
$e_9 := r_3 \to r_3 + \paren {1 + \sqrt 2} r_2$
$e_{10} := r_4 \to r_4 - r_2$

$\mathbf A_{10} = \begin {bmatrix}
1 & 0 &  1 -   \sqrt 2 &  1 +   \sqrt 2 \\
0 & 1 & -1             &  1 +   \sqrt 2 \\
0 & 0 &  0             &  0             \\
0 & 0 &  0             & -3             \\
\end {bmatrix}$

$e_{11} := r_4 \to -\dfrac 1 3 r_4$
$e_{12} := r_3 \leftrightarrow r_4$

$\mathbf A_{12} = \begin {bmatrix}
1 & 0 &  1 - \sqrt 2 &  1 +   \sqrt 2 \\
0 & 1 & -1           &  1 +   \sqrt 2 \\
0 & 0 &  0           &  1             \\
0 & 0 &  0           &  0             \\
\end {bmatrix}$

$e_{13} := r_1 \to r_1 - \paren {1 + \sqrt 2} r_3$
$e_{14} := r_2 \to r_2 - \paren {1 + \sqrt 2} r_3$

$\mathbf A_{12} = \begin {bmatrix}
1 & 0 &  1 - \sqrt 2 &  0 \\
0 & 1 & -1           &  0 \\
0 & 0 &  0           &  1 \\
0 & 0 &  0           &  0 \\
\end {bmatrix}$
and it is seen that $\mathbf A_{12}$ is the required reduced echelon form.
$\blacksquare$


Sources
1982: A.O. Morris: Linear Algebra: An Introduction (2nd ed.) ... (previous) ... (next): Chapter $1$: Linear Equations and Matrices: $1.2$ Elementary Row Operations on Matrices: Exercises $1.2$: $1 \ \text {(vi)}$




