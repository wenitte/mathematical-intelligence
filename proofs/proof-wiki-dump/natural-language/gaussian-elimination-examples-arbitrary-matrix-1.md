# 

Source: https://proofwiki.org/wiki/Gaussian_Elimination/Examples/Arbitrary_Matrix_1

Example of Use of Gaussian Elimination
Let $\mathbf A$ denote the matrix:

$\mathbf A = \begin {bmatrix}
0 & 0 & 5 & 35 & -24 & 1 \\
0 & 2 & 1 & -1 &   1 & 0 \\
0 & 3 & 2 &  2 &  -1 & 1 \\
0 & 0 & 0 &  0 &   0 & 0 \\
0 & 5 & 3 &  1 &   0 & 1
\end {bmatrix}$
The reduced echelon form of $\mathbf A$ is:

$\mathbf E = \begin {bmatrix}
0 & 1 & 0 & -4 & 0 &  26 \\
0 & 0 & 1 &  7 & 0 & -43 \\
0 & 0 & 0 &  0 & 1 &  -9 \\
0 & 0 & 0 &  0 & 0 &   0 \\
0 & 0 & 0 &  0 & 0 &   0
\end {bmatrix}$


Proof
$(1): \quad$ Use the elementary row operation $r_4 \leftrightarrow r_5$ to move the zero row to the bottom
$(2): \quad$ Use the elementary row operation $r_2 \to \dfrac {r_2} 2$ to put a leading $1$ in row $2$
$(3): \quad$ Use the elementary row operation $r_2 \leftrightarrow r_1$ to put the row with the leftmost leading $1$ at the top.
Hence we get matrix $\mathbf A_1$:

$\mathbf A_1 = \begin {bmatrix}
0 & 1 & \dfrac 1 2 & -\dfrac 1 2 & \dfrac 1 2 & 0 \\
0 & 0 & 5 & 35 & -24 & 1 \\
0 & 3 & 2 &  2 &  -1 & 1 \\
0 & 5 & 3 &  1 &   0 & 1 \\
0 & 0 & 0 &  0 &   0 & 0 
\end {bmatrix}$

$(4): \quad$ Use the following elementary row operations:

$r_3 \leftrightarrow r_3 - 3 r_1$
$r_4 \leftrightarrow r_4 - 5 r_1$
to clear column $2$.
Hence we get matrix $\mathbf A_2$:

$\mathbf A_2 = \begin {bmatrix}
0 & 1 & \dfrac 1 2 & -\dfrac 1 2 & \dfrac 1 2 & 0 \\
0 & 0 & 5 & 35 & -24 & 1 \\
0 & 0 & \dfrac 1 2 & \dfrac 7 2 & -\dfrac 5 2 & 1 \\
0 & 0 & \dfrac 1 2 & \dfrac 7 2 & -\dfrac 5 2 & 1 \\
0 & 0 & 0 &  0 &   0 & 0 
\end {bmatrix}$

$(5): \quad$ Use the following elementary row operations:

$r_2 \leftrightarrow r_3$
$r_1 \to r_1 - r_2$
$r_4 \to r_4 - r_2$
$r_3 \to r_3 - 10 r_1$
$r_2 \to 2 r_2$
Hence we get matrix $\mathbf A_3$:

$\mathbf A_3 = \begin {bmatrix}
0 & 1 & 0 & -4 &  3 &  1 \\
0 & 0 & 1 &  7 & -5 &  2 \\
0 & 0 & 0 &  0 &  1 & -9 \\
0 & 0 & 0 &  0 &  0 &  0 \\
0 & 0 & 0 &  0 &  0 &  0 
\end {bmatrix}$

$(6): \quad$ Use the following elementary row operations:

$r_1 \to r_1 - 3 r_3$
$r_2 \to r_2 + 5 r_3$
Hence we get matrix $\mathbf A_3$:

$\mathbf A_3 = \begin {bmatrix}
0 & 1 & 0 & -4 &  0 & 26 \\
0 & 0 & 1 &  7 &  0 & 43 \\
0 & 0 & 0 &  0 &  1 & -9 \\
0 & 0 & 0 &  0 &  0 &  0 \\
0 & 0 & 0 &  0 &  0 &  0 
\end {bmatrix}$
$\blacksquare$

Different sequences of elementary row operations can be used, but it is necessary to be precise about the order in which they are applied.


Sources
1982: A.O. Morris: Linear Algebra: An Introduction (2nd ed.) ... (previous) ... (next): Chapter $1$: Linear Equations and Matrices: $1.2$ Elementary Row Operations on Matrices: Example




