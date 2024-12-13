# 

Source: https://proofwiki.org/wiki/Row_Equivalence/Examples/Arbitrary_Example_3

Example of Row Equivalence
Let $\mathbf A$ be the matrix defined as:

$\mathbf A := \begin {bmatrix}
 1 & -1 &  1 & 2 \\
-2 &  3 &  0 & 1 \\
 1 &  0 & -1 & 3 \\
\end {bmatrix}$
Let $\mathbf B$ be the matrix defined as:

$\mathbf B := \begin {bmatrix}
 0 & -1 &  2 & 3 \\
 1 &  2 & -1 & 0 \\
-2 & -5 &  4 & 3 \\
\end {bmatrix}$
Then $\mathbf A$ and $\mathbf B$ are not row equivalent.


Proof
We use elementary row operations to convert both $\mathbf A$ and $\mathbf B$ to reduced echelon form.
In the following, $\sequence {e_n}_{n \mathop \ge 1}$ denotes the sequence of elementary row operations that are to be applied to either $\mathbf A$ or $\mathbf B$ accordingly.
The matrix that results from having applied $e_1$ to $e_k$ in order is denoted $\mathbf A_k$ or $\mathbf B_k$.

First we take $\mathbf A := \begin {bmatrix}
 1 & -1 &  1 & 2 \\
-2 &  3 &  0 & 1 \\
 1 &  0 & -1 & 3 \\
\end {bmatrix}$.

$e_1 := r_2 \to r_2 + 2 r_1$
$e_2 := r_3 \to r_3 - r_1$

$\mathbf A_2 := \begin {bmatrix}
1 & -1 &  1 & 2 \\
0 &  1 &  2 & 5 \\
0 &  1 & -2 & 1 \\
\end {bmatrix}$

$e_3 := r_3 \to r_3 - r_2$
$e_4 := r_1 \to r_1 + r_2$

$\mathbf A_4 := \begin {bmatrix}
1 & 0 &  3 &  7 \\
0 & 1 &  2 &  5 \\
0 & 0 & -4 & -4 \\
\end {bmatrix}$

$e_5 := r_3 \to -\dfrac {r_3} 4$

$\mathbf A_5 := \begin {bmatrix}
1 & 0 & 3 & 7 \\
0 & 1 & 2 & 5 \\
0 & 0 & 1 & 1 \\
\end {bmatrix}$

$e_6 := r_1 \to r_1 - 3 r 3$
$e_7 := r_2 \to r_1 - 2 r 3$

$\mathbf A_7 := \begin {bmatrix}
1 & 0 & 0 & 4 \\
0 & 1 & 0 & 3 \\
0 & 0 & 1 & 1 \\
\end {bmatrix}$
$\Box$

Then we take $\mathbf B := \begin {bmatrix} 
 0 & -1 &  2 & 3 \\
 1 &  2 & -1 & 0 \\
-2 & -5 &  4 & 3 \\
\end {bmatrix}$.

$e_1 := r_1 \leftrightarrow r_2$

$\mathbf B_1 := \begin {bmatrix}
 1 &  2 & -1 & 0 \\
 0 & -1 &  2 & 3 \\
-2 & -5 &  4 & 3 \\
\end {bmatrix}$

$e_2 := r_3 \to r_3 + 2 r_1$

$\mathbf B_2 := \begin {bmatrix}
 1 &  2 & -1 & 0 \\
 0 & -1 &  2 & 3 \\
 0 & -1 &  2 & 3 \\
\end {bmatrix}$

$e_3 := r_3 \to r_3 - r_2$

$\mathbf B_3 := \begin {bmatrix}
 1 &  2 & -1 & 0 \\
 0 & -1 &  2 & 3 \\
 0 &  0 &  0 & 0 \\
\end {bmatrix}$
A zero row has appeared.
There is no need to proceed further.
$\Box$

The reduced echelon matrices for $\mathbf A$ and $\mathbf B$ are different.
The result follows by Row Equivalence is Equivalence Relation. 
$\blacksquare$


Sources
1982: A.O. Morris: Linear Algebra: An Introduction (2nd ed.) ... (previous) ... (next): Chapter $1$: Linear Equations and Matrices: $1.2$ Elementary Row Operations on Matrices: Exercises $1.2$: $2 \ \text {(ii)}$




