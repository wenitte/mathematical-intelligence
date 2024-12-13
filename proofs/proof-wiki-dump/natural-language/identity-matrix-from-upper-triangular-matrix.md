# 

Source: https://proofwiki.org/wiki/Identity_Matrix_from_Upper_Triangular_Matrix



Theorem
Let $\mathbf A = \sqbrk a_{m n}$ be an upper triangular matrix of order $m \times n$ with no zero diagonal elements.
Let $k = \min \set {m, n}$.
Then $\mathbf A$ can be transformed into a matrix such that the first $k$ rows and columns form the unit matrix of order $k$.


Proof
By definition of $k$:

if $\mathbf A$ has more rows than columns, $k$ is the number of columns of $\mathbf A$.
if $\mathbf A$ has more columns than rows, $k$ is the number of rows of $\mathbf A$.

Thus let $\mathbf A'$ be the square matrix of order $k$ consisting of the first $k$ rows and columns of $\mathbf A$:

$\mathbf A' = \begin {bmatrix}
a_{1 1} & a_{1 2} & a_{1 3} & \cdots &     a_{1, k - 1} &      a_{1 k} \\

     0 & a_{2 2} & a_{2 3} & \cdots &     a_{2, k - 1} &      a_{2 k} \\
     0 &       0 & a_{3 3} & \cdots &     a_{3, k - 1} &      a_{3 k} \\
\vdots &  \vdots &  \vdots & \ddots &           \vdots &      \vdots  \\
     0 &       0 &       0 & \cdots & a_{k - 1, k - 1} & a_{k - 1, k} \\
     0 &       0 &       0 & \cdots &                0 &      a_{k k} \\

\end {bmatrix}$

$\mathbf A$ can be transformed into echelon form $\mathbf B$ by using the elementary row operations:

$\forall j \in \set {1, 2, \ldots, k}: e_j := r_j \to \dfrac 1 {a_{j j} } r_j$

Again, let $\mathbf B'$ be the square matrix of order $k$ consisting of the first $k$ rows and columns of $\mathbf B$:

$\mathbf B' = \begin {bmatrix}
    1 & b_{1 2} & b_{1 3} & \cdots &     b_{1, k - 1} &      b_{1 k} \\
    0 &       1 & b_{2 3} & \cdots &     b_{2, k - 1} &      b_{2 k} \\
    0 &       0 &       1 & \cdots &     b_{3, k - 1} &      b_{3 k} \\

\vdots &  \vdots &  \vdots & \ddots &           \vdots &      \vdots  \\

    0 &       0 &       0 & \cdots &                1 & b_{k - 1, k} \\
    0 &       0 &       0 & \cdots &                0 &            1 \\

\end {bmatrix}$

$\mathbf B$ is then transformed into reduced echelon form $\mathbf C$ by means of the elementary row operations:

$\forall j \in \set {1, 2, \ldots, k - 1}: e_{j k} := r_j \to r_j - b_{j k} r_k$
$\forall j \in \set {1, 2, \ldots, k - 2}: e_{j, k - 1} := r_j \to r_j - b_{j, k - 1} r_{k - 1}$
and so on, until:

$e_{1 2} := r_1 \to r_1 - b_{1 2} r_2$
Again, let $\mathbf C'$ be the square matrix of order $k$ consisting of the first $k$ rows and columns of $\mathbf C$:

$\mathbf C' = \begin {bmatrix}
    1 &      0 &      0 & \cdots &      0 &      0 \\
    0 &      1 &      0 & \cdots &      0 &      0 \\
    0 &      0 &      1 & \cdots &      0 &      0 \\

\vdots & \vdots & \vdots & \ddots & \vdots & \vdots \\

    0 &      0 &      0 & \cdots &      1 &      0 \\
    0 &      0 &      0 & \cdots &      0 &      1 \\

\end {bmatrix}$
By inspection, $\mathbf C$ is seen to be the unit matrix of order $k$.
$\blacksquare$


Examples
Arbitrary Matrix 1
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


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.5$ Row and column operations




