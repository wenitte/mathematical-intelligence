# 

Source: https://proofwiki.org/wiki/Matrix_Inverse_Algorithm/Examples/Arbitrary_Matrix_2

Examples of use of Matrix Inverse Algorithm
Let $\mathbf A$ be the (square) matrix defined as:
$\quad \mathbf A = \begin {pmatrix}
1  &  0 & -1 \\
-1 &  1 &  0 \\
0  & -1 &  0 \\
\end {pmatrix}$

Then its inverse $\mathbf A^{-1}$ is:
$\quad \mathbf A^{-1} = \begin {pmatrix}
0  & -1 & -1 \\
0  &  0 & -1 \\
-1 & -1 & -1 \\
\end {pmatrix}$


Proof
We construct $\begin {pmatrix} \mathbf A & \mathbf I \end {pmatrix}$:
$\quad \begin {pmatrix} \mathbf A & \mathbf I \end {pmatrix} = \paren {\begin {array} {ccc|ccc} 
1  &  0 & -1 & 1 & 0 & 0 \\
-1 &  1 &  0 & 0 & 1 & 0 \\
0  & -1 &  0 & 0 & 0 & 1 \\
\end {array} }$

In the following, $\sequence {e_n}_{n \mathop \ge 1}$ denotes the sequence of elementary row operations that are to be applied to $\begin {pmatrix} \mathbf A & \mathbf I \end {pmatrix}$.
The matrix that results from having applied $e_1$ to $e_k$ in order is denoted $\begin {pmatrix} \mathbf A_k & \mathbf B_k \end {pmatrix}$.

$e_1 := r_2 \to r_2 + r_1$
Hence:
$\quad \begin {pmatrix} \mathbf A_1 & \mathbf B_1 \end {pmatrix} = \paren {\begin {array} {ccc|ccc}
1 &  0 & -1 & 1 & 0 & 0 \\
0 &  1 & -1 & 1 & 1 & 0 \\
0 & -1 &  0 & 0 & 0 & 1 \\
\end {array} }$

$e_2 := r_3 \to r_3 + r_2$
$\quad \begin {pmatrix} \mathbf A_2 & \mathbf B_2 \end {pmatrix} = \paren {\begin {array} {ccc|ccc}
1 & 0 & -1 & 1 & 0 & 0 \\
0 & 1 & -1 & 1 & 1 & 0 \\
0 & 0 & -1 & 1 & 1 & 1 \\
\end {array} }$

$e_3 := r_3 \to -r_3$
$\quad \begin {pmatrix} \mathbf A_3 & \mathbf B_3 \end {pmatrix} = \paren {\begin {array} {ccc|ccc}
1 & 0 & -1 &  1 &  0 &  0 \\
0 & 1 & -1 &  1 &  1 &  0 \\
0 & 0 &  1 & -1 & -1 & -1 \\
\end {array} }$

$e_4 := r_1 \to r_1 + r_3$
$e_5 := r_2 \to r_2 + r_3$
$\quad \begin {pmatrix} \mathbf A_5 & \mathbf B_5 \end {pmatrix} = \paren {\begin {array} {ccc|ccc}
1 & 0 & 0 &  0 & -1 & -1 \\
0 & 1 & 0 &  0 &  0 & -1 \\
0 & 0 & 1 & -1 & -1 & -1 \\
\end {array} }$

and it is seen that $\begin {pmatrix} \mathbf A_5 & \mathbf B_5 \end {pmatrix}$ is the required reduced echelon form:

$\mathbf A_5 = \mathbf I$
and so by the Matrix Inverse Algorithm:

$\mathbf B_5 = \mathbf A^{-1}$
$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.5$ Row and column operations: Exercise $1.7 \ \text {(b)}$




