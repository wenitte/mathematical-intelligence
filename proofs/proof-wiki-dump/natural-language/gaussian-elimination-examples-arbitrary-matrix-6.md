# 

Source: https://proofwiki.org/wiki/Gaussian_Elimination/Examples/Arbitrary_Matrix_6

Example of Use of Gaussian Elimination
Let $\mathbf A$ denote the matrix:

$\mathbf A = \begin {bmatrix}
    i &  1 - i & i & 0 \\
1     & -2     & 0 & i \\
1 - i & -1 + i & 1 & 1 \\
\end {bmatrix}$
The reduced echelon form of $\mathbf A$ is:

$\mathbf E = \begin {bmatrix}
1 & 0 & 1 + i & 1     \\
0 & 1 & \dfrac {1 + i} 2 &  \dfrac {1 - i} 2 \\
0 & 0 &     0 & 0     \\
\end {bmatrix}$


Proof
In the following, $\sequence {e_n}_{n \mathop \ge 1}$ denotes the sequence of elementary row operations that are to be applied to $\mathbf A$.
The matrix that results from having applied $e_1$ to $e_k$ in order is denoted $\mathbf A_k$.

$e_1 := r_2 \leftrightarrow r_1$
Hence:

$\mathbf A_1 = \begin {bmatrix}
1     & -2     & 0 & i \\
    i &  1 - i & i & 0 \\
1 - i & -1 + i & 1 & 1 \\
\end {bmatrix}$

$e_2 := r_3 \to r_3 - r_1$
$e_3 := r_3 \to r_3 + r_2$

$\mathbf A_3 = \begin {bmatrix}
1     & -2     & 0     &     i \\
    i &  1 - i &     i & 0     \\
0     &  2     & 1 + i & 1 - i \\
\end {bmatrix}$

$e_4 := r_2 \to r_2 - i r_1$

$\mathbf A_4 = \begin {bmatrix}
1 & -2     & 0     &     i \\
0 &  1 + i &     i & 1     \\
0 &  2     & 1 + i & 1 - i \\
\end {bmatrix}$

$e_5 := r_1 \to r_1 + r_3$

$\mathbf A_5 = \begin {bmatrix}
1 & 0     & 1 + i & 1     \\
0 & 1 + i &     i & 1     \\
0 & 2     & 1 + i & 1 - i \\
\end {bmatrix}$

$e_6 := r_3 \to \dfrac {r_3} 2$

$\mathbf A_6 = \begin {bmatrix}
1 & 0     & 1 + i & 1     \\
0 & 1 + i &     i & 1     \\
0 & 1     & \dfrac {1 + i} 2 &  \dfrac {1 - i} 2 \\
\end {bmatrix}$

$e_7 := r_2 \to r_2 - \paren {1 + i} r_3$

$\mathbf A_7 = \begin {bmatrix}
1 & 0 & 1 + i & 1     \\
0 & 0 &     0 & 0     \\
0 & 1 & \dfrac {1 + i} 2 &  \dfrac {1 - i} 2 \\
\end {bmatrix}$

$e_8 := r_2 \leftrightarrow r_3$

$\mathbf A_8 = \begin {bmatrix}
1 & 0 & 1 + i & 1     \\
0 & 1 & \dfrac {1 + i} 2 &  \dfrac {1 - i} 2 \\
0 & 0 &     0 & 0     \\
\end {bmatrix}$

and it is seen that $\mathbf A_8$ is the required reduced echelon form.
$\blacksquare$


Sources
1982: A.O. Morris: Linear Algebra: An Introduction (2nd ed.) ... (previous) ... (next): Chapter $1$: Linear Equations and Matrices: $1.2$ Elementary Row Operations on Matrices: Exercises $1.2$: $1 \ \text {(v)}$




