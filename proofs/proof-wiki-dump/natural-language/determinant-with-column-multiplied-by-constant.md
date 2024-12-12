# 

Source: https://proofwiki.org/wiki/Determinant_with_Column_Multiplied_by_Constant



Theorem
Let $\mathbf A = \sqbrk a_n$ be a square matrix of order $n$.
Let $\map \det {\mathbf A}$ be the determinant of $\mathbf A$.

Let $\mathbf B$ be the matrix resulting from one column of $\mathbf A$ having been multiplied by a constant $c$.

Then:

$\map \det {\mathbf B} = c \map \det {\mathbf A}$

That is, multiplying one column of a square matrix by a constant multiplies its determinant by that constant.


Proof
Let:

$\mathbf A = \begin{bmatrix}
a_{1 1} & a_{1 2} & \cdots & a_{1 r} & \cdots & a_{1 n} \\
a_{2 1} & a_{2 2} & \cdots & a_{2 r} & \cdots & a_{2 n} \\
 \vdots &  \vdots & \ddots &  \vdots & \ddots &  \vdots \\
a_{n 1} & a_{n 2} & \cdots & a_{n r} & \cdots & a_{n n} \\
\end{bmatrix}$
$\mathbf B = \begin{bmatrix}
b_{1 1} & b_{1 2} & \cdots & b_{1 r} & \cdots & b_{1 n} \\
b_{2 1} & b_{2 2} & \cdots & b_{2 r} & \cdots & b_{1 n} \\
 \vdots &  \vdots & \ddots &  \vdots & \ddots &  \vdots \\
b_{n 1} & b_{n 2} & \cdots & b_{n r} & \cdots & b_{n n} \\
\end{bmatrix} = \begin{bmatrix}
a_{1 1} & a_{1 2} & \cdots & c a_{1 r} & \cdots & a_{1 n} \\
a_{2 1} & a_{2 2} & \cdots & c a_{2 r} & \cdots & a_{1 n} \\
 \vdots &  \vdots & \ddots &  \vdots & \ddots &  \vdots \\
a_{n 1} & a_{n 2} & \cdots & a_{n r} & \cdots & a_{n n} \\
\end{bmatrix}$

We have that:

$\mathbf A^\intercal = \begin {bmatrix}
a_{1 1} & a_{1 2} & \cdots & a_{1 n} \\
a_{2 1} & a_{2 2} & \cdots & a_{2 n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
a_{r 1} & a_{r 2} & \cdots & a_{r n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
a_{n 1} & a_{n 2} & \cdots & a_{n n} \\
\end {bmatrix}$
where $\mathbf A^\intercal$ denotes the transpose of $\mathbf A$.

Similarly, we have that:

$\mathbf B^\intercal = \begin{bmatrix}
a_{1 1} & a_{1 2} & \ldots & a_{1 n} \\
a_{2 1} & a_{2 2} & \ldots & a_{2 n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
c a_{r 1} & c a_{r 2} & \cdots & c a_{r n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
a_{n 1} & a_{n 2} & \cdots & a_{n n} \\
\end {bmatrix}$

From Determinant with Row Multiplied by Constant:

$\map \det {\mathbf B^\intercal} = c \map \det {\mathbf A^\intercal}$

From from Determinant of Transpose:

$\map \det {\mathbf B^\intercal} = \map \det {\mathbf B}$
$\map \det {\mathbf A^\intercal} = \map \det {\mathbf A}$
and the result follows.
$\blacksquare$


Also see
Determinant with Row Multiplied by Constant


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): $\text{A}.2$: Linear algebra and determinants: Theorem $\text{A}.10 \ (3)$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercises -- Second Set
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.6$ Determinant and trace: Proposition $1.13$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): determinant (2)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): determinant (2)




