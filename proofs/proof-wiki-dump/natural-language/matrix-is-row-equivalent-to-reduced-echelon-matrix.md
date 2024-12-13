# 

Source: https://proofwiki.org/wiki/Matrix_is_Row_Equivalent_to_Reduced_Echelon_Matrix



Theorem
Let $\mathbf A = \sqbrk a_{m n}$ be a matrix of order $m \times n$ over a field $F$.

Then $A$ is row equivalent to a reduced echelon matrix of order $m \times n$.


Proof
Recall the definition of Gaussian Elimination:
Let $\mathbf A$ be a matrix over a field $F$.
Let $\mathbf E$ be a reduced echelon matrix which is row equivalent to $\mathbf A$.

Let the first column of $\mathbf A$ containing a non-zero element be column $j$.
Let a non-zero element in row $i$ be distinguished.
This element $a_{i j} \ne 0$ is called the pivot element.

Perform the elementary row operation:

$(1): \quad r_1 \leftrightarrow r_i$
This moves the pivot element to $a_{1 j}$.

Then perform the elementary row operation:

$(2): \quad r_1 \to \dfrac {r_1} {a_{1 j} }$
that is, divide all the elements of row $1$ by the pivot element.
This gives a matrix with $1$ in the $\tuple {1, j}$ position:

$\begin {bmatrix}
     0 & \cdots &      0 &       1 & b_{1, j + 1} & \cdots & b_{1 n} \\
     0 & \cdots &      0 & b_{2 j} & b_{2, j + 1} & \cdots & b_{2 n} \\
\vdots & \ddots & \vdots &  \vdots &       \vdots & \ddots &  \vdots \\
     0 & \cdots &      0 & b_{m j} & b_{m, j + 1} & \cdots & b_{m n} \\
\end {bmatrix}$
Now the elementary row operations $r_k \to r_k - b_{k j} r_1, k \in \set {2, 3, \ldots, m}$ gives the matrix:

$\begin{bmatrix}
0      & \cdots &      0 &      1 & c_{1, j + 1} & \cdots & c_{1 n} \\
0      & \cdots &      0 &      0 & c_{2, j + 1} & \cdots & c_{2 n} \\
\vdots & \ddots & \vdots & \vdots &       \vdots & \ddots &  \vdots \\
0      & \cdots &      0 &      0 & c_{m, j + 1} & \cdots & c_{m n} \\
\end{bmatrix}$
If some zero rows have appeared, do some further elementary row operations, that is row interchanges, to put them at the bottom.

We now repeat the process with the remaining however-many-there-are rows:

$\begin{bmatrix}
\cdots &      0 &      1 & d_{1, j + 1} & \cdots & d_{1, k - 1} & d_{1 k} & d_{1, k + 1} & \cdots & d_{1 n} \\
\cdots &      0 &      0 &            0 & \cdots &            0 &       1 & d_{2, k + 1} & \cdots & d_{2 n} \\
\cdots &      0 &      0 &            0 & \cdots &            0 & d_{3 k} & d_{3, k + 1} & \cdots & d_{3 n} \\
\ddots & \vdots & \vdots &       \vdots & \ddots &       \vdots &  \vdots &       \vdots & \ddots & \vdots  \\
\cdots &      0 &      0 &            0 & \cdots &            0 & d_{n k} & d_{m, k + 1} & \cdots & d_{m n} \\ 
\end{bmatrix}$

Then we can get the reduced echelon form by:

$r_i \to r_i - d_{i k} r_2, i \in \set {1, 3, 4, \ldots, m}$
as follows:

$\begin{bmatrix}
\cdots &      0 &      1 & {e_{1, j + 1 } } & \cdots & {e_{1, k - 1} } &      0 & {e_{1, k + 1} } & \cdots & {e_{1 n} } \\
\cdots &      0 &      0 &                0 & \cdots &               0 &      1 & {e_{2, k + 1} } & \cdots & {e_{2 n} } \\
\cdots &      0 &      0 &                0 & \cdots &               0 &      0 & {e_{3, k + 1} } & \cdots & {e_{3 n} } \\
\ddots & \vdots & \vdots &           \vdots & \ddots &          \vdots & \vdots &          \vdots & \ddots & \vdots     \\
\cdots &      0 &      0 &                0 & \cdots &               0 &      0 & {e_{m, k + 1} } & \cdots & {e_{m n} } \\
\end{bmatrix}$
Thus we progress, until the entire matrix is in reduced echelon form.

Hence the result.
$\blacksquare$


Also see
Definition:Gaussian Elimination


Sources
1982: A.O. Morris: Linear Algebra: An Introduction (2nd ed.) ... (previous) ... (next): Chapter $1$: Linear Equations and Matrices: $1.2$ Elementary Row Operations on Matrices: Theorem $1.5$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): echelon form
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): echelon form




