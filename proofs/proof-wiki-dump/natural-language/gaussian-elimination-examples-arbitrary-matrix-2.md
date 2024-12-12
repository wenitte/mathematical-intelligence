# 

Source: https://proofwiki.org/wiki/Gaussian_Elimination/Examples/Arbitrary_Matrix_2

Example of Use of Gaussian Elimination
Let $\mathbf A$ denote the matrix:

$\mathbf A = \begin {bmatrix}
1 & -1 &  2 & 1 \\
2 &  1 & -1 & 1 \\
1 & -2 &  1 & 1 \\
\end {bmatrix}$
The reduced echelon form of $\mathbf A$ is:

$\mathbf E = \begin {bmatrix}
1 & 0 & 0 &  \dfrac 5 8 \\
0 & 1 & 0 & -\dfrac 1 8 \\
0 & 0 & 1 &  \dfrac 1 8 \\
\end {bmatrix}$


Proof
In the following, $\sequence {e_n}_{n \mathop \ge 1}$ denotes the sequence of elementary row operations that are to be applied to $\mathbf A$.
The matrix that results from having applied $e_1$ to $e_k$ in order is denoted $\mathbf A_k$.

$e_1 := r_2 \to r_2 - 2 r_1$
$e_2 := r_3 \to r_3 - r_1$

Hence:

$\mathbf A_2 = \begin {bmatrix}
1 & -1 &  2 &  1 \\
0 &  3 & -5 & -1 \\
0 & -1 & -1 &  0 \\
\end {bmatrix}$

$e_3 := r_2 \to \dfrac {r_2} 3$

$\mathbf A_3 = \begin {bmatrix}
1 & -1 &           2 &           1 \\
0 &  1 & -\dfrac 5 3 & -\dfrac 1 3 \\
0 & -1 & -1 &  0 \\
\end {bmatrix}$

$e_4 := r_3 \to r_3 + r_2$

$\mathbf A_4 = \begin {bmatrix}
1 & -1 &           2 &           1 \\
0 &  1 & -\dfrac 5 3 & -\dfrac 1 3 \\
0 &  0 & -\dfrac 8 3 &  -\dfrac 1 3 \\
\end {bmatrix}$

$e_5 := r_3 \to -\dfrac 3 8 r_3$

$\mathbf A_5 = \begin {bmatrix}
1 & -1 &           2 &           1 \\
0 &  1 & -\dfrac 5 3 & -\dfrac 1 3 \\
0 &  0 &           1 &  \dfrac 1 8 \\
\end {bmatrix}$
It may be noted that $\mathbf A_5$ is in echelon form.
It remains to convert it to reduced echelon form.

$e_6 := r_1 \to r_1 + r_2$

$\mathbf A_6 = \begin {bmatrix}
1 & 0 &  \dfrac 1 3 &  \dfrac 2 3 \\
0 & 1 & -\dfrac 5 3 & -\dfrac 1 3 \\
0 & 0 &           1 &  \dfrac 1 8 \\
\end {bmatrix}$

$e_7 := r_2 \to r_2 + \dfrac 5 3 r_3$

$\mathbf A_7 = \begin {bmatrix}
1 & 0 & \dfrac 1 3 &  \dfrac 2 3 \\
0 & 1 &          0 & -\dfrac 1 8 \\
0 & 0 &          1 &  \dfrac 1 8 \\
\end {bmatrix}$

$e_8 := r_1 \to r_1 - \dfrac 1 3 r_3$

$\mathbf A_8 = \begin {bmatrix}
1 & 0 & 0 &  \dfrac 5 8 \\
0 & 1 & 0 & -\dfrac 1 8 \\
0 & 0 & 1 &  \dfrac 1 8 \\
\end {bmatrix}$
and it is seen that $\mathbf A_8$ is the required reduced echelon form.
$\blacksquare$


Sources
1982: A.O. Morris: Linear Algebra: An Introduction (2nd ed.) ... (previous) ... (next): Chapter $1$: Linear Equations and Matrices: $1.2$ Elementary Row Operations on Matrices: Exercises $1.2$: $1 \ \text {(i)}$




