# 

Source: https://proofwiki.org/wiki/Gaussian_Elimination/Examples/Arbitrary_Matrix_4

Example of Use of Gaussian Elimination
Let $\mathbf A$ denote the matrix:

$\mathbf A = \begin {bmatrix}
2 &  2 & 5 & 3 \\
6 &  1 & 5 & 4 \\
4 & -1 & 0 & 1 \\
2 &  0 & 1 & 1 \\
\end {bmatrix}$
The reduced echelon form of $\mathbf A$ is:

$\mathbf E = \begin {bmatrix}
1 & 0 & \dfrac 1 2 & \dfrac 1 2 \\
0 & 1 &          2 &          1 \\
0 & 0 &          0 &          0 \\
0 & 0 &          0 &          0 \\
\end {bmatrix}$


Proof
In the following, $\sequence {e_n}_{n \mathop \ge 1}$ denotes the sequence of elementary row operations that are to be applied to $\mathbf A$.
The matrix that results from having applied $e_1$ to $e_k$ in order is denoted $\mathbf A_k$.

$e_1 := r_2 \to r_2 - 3 r_1$
$e_2 := r_3 \to r_3 - 2 r_1$
$e_3 := r_4 \to r_4 - r_1$
Hence:

$\mathbf A_3 = \begin {bmatrix}
2 &  2 &   5 &  3 \\
0 & -5 & -10 & -5 \\
0 & -5 & -10 & -5 \\
0 & -2 &  -4 & -2 \\
\end {bmatrix}$

$e_4 := r_2 \to -\dfrac {r_2} 5$
$e_5 := r_3 \to -\dfrac {r_3} 5$
$e_6 := r_4 \to -\dfrac {r_4} 2$

$\mathbf A_6 = \begin {bmatrix}
2 &  2 &   5 &  3 \\
0 &  1 &   2 &  1 \\
0 &  1 &   2 &  1 \\
0 &  1 &   2 &  1 \\
\end {bmatrix}$

$e_7 := r_3 - r_2$
$e_8 := r_4 - r_2$

$\mathbf A_8 = \begin {bmatrix}
2 & 2 & 5 & 3 \\
0 & 1 & 2 & 1 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
\end {bmatrix}$

$e_9 := r_1 \to \dfrac {r_1} 2$

$\mathbf A_9 = \begin {bmatrix}
1 & 1 & \dfrac 5 2 & \dfrac 3 2 \\
0 & 1 &          2 &          1 \\
0 & 0 &          0 &          0 \\
0 & 0 &          0 &          0 \\
\end {bmatrix}$

It may be noted that $\mathbf A_9$ is in echelon form.
It remains to convert it to reduced echelon form.

$e_{10} := r_1 \to r_1 - r_2$

$\mathbf A_{10} = \begin {bmatrix}
1 & 0 & \dfrac 1 2 & \dfrac 1 2 \\
0 & 1 &          2 &          1 \\
0 & 0 &          0 &          0 \\
0 & 0 &          0 &          0 \\
\end {bmatrix}$

and it is seen that $\mathbf A_{10}$ is the required reduced echelon form.
$\blacksquare$


Sources
1982: A.O. Morris: Linear Algebra: An Introduction (2nd ed.) ... (previous) ... (next): Chapter $1$: Linear Equations and Matrices: $1.2$ Elementary Row Operations on Matrices: Exercises $1.2$: $1 \ \text {(iii)}$




