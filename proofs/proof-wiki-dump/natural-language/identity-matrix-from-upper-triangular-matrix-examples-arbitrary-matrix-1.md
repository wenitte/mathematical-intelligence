# 

Source: https://proofwiki.org/wiki/Identity_Matrix_from_Upper_Triangular_Matrix/Examples/Arbitrary_Matrix_1

Example of Use of Identity Matrix from Upper Triangular Matrix
Let $\mathbf A$ be the matrix defined as:

$\mathbf A = \begin {bmatrix}
1 & 1 & 1 & 1 \\ 
0 & 2 & 2 & 2 \\
0 & 0 & 3 & 4 \\
\end {bmatrix}$
is row equivalent to the reduced echelon matrix:

$\mathbf E = \begin {bmatrix}
1 & 0 & 0 & -\dfrac 1 2 \\ 
0 & 1 & 0 &  \dfrac 1 6 \\
0 & 0 & 1 &  \dfrac 4 3 \\
\end {bmatrix}$


Proof
In the following, $\sequence {e_n}_{n \mathop \ge 1}$ denotes the sequence of elementary row operations that are to be applied to $\mathbf A$.
The matrix that results from having applied $e_1$ to $e_k$ in order is denoted $\mathbf A_k$.

$e_1 := r_2 \to \dfrac {r_2} 2$
$e_2 := r_3 \to \dfrac {r_3} 3$

Hence:

$\mathbf A_3 = \begin {bmatrix}
1 & 1 & 1 & 1 \\
0 & 1 & 1 & \dfrac 3 2 \\
0 & 0 & 1 & \dfrac 4 3 \\
\end {bmatrix}$

$e_3 := r_1 \to r_1 - r_3$
$e_4 := r_2 \to r_2 - r_3$

$\mathbf A_4 = \begin {bmatrix}
1 & 1 & 0 & -\dfrac 1 3 \\
0 & 1 & 0 &  \dfrac 1 6 \\
0 & 0 & 1 &  \dfrac 4 3 \\
\end {bmatrix}$

$e_5 := r_1 \to r_1 - r_2$

$\mathbf A_5 = \begin {bmatrix}
1 & 0 & 0 & -\dfrac 1 2 \\
0 & 1 & 0 &  \dfrac 1 6 \\
0 & 0 & 1 &  \dfrac 4 3 \\
\end {bmatrix}$
and it is seen that $\mathbf A_5$ is the required reduced echelon form.
$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.5$ Row and column operations: Exercise $1.6$




