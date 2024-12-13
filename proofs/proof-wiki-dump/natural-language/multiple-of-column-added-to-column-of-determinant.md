# 

Source: https://proofwiki.org/wiki/Multiple_of_Column_Added_to_Column_of_Determinant



Theorem
Let $\mathbf A = \begin {bmatrix}
a_{1 1} & \cdots & a_{1 r} & \cdots & a_{1 s} & \cdots & a_{1 n} \\
a_{2 1} & \cdots & a_{2 r} & \cdots & a_{2 s} & \cdots & a_{2 n} \\
 \vdots & \ddots &  \vdots & \ddots &  \vdots & \ddots &  \vdots \\
a_{n 1} & \cdots & a_{n r} & \cdots & a_{n s} & \cdots & a_{n n} \\
\end {bmatrix}$ be a square matrix of order $n$.
Let $\map \det {\mathbf A}$ denote the determinant of $\mathbf A$.

Let $\mathbf B = \begin{bmatrix}
a_{1 1} & \cdots & a_{1 r} + \lambda a_{1 s} & \cdots & a_{1 s} & \cdots & a_{1 n} \\
a_{2 1} & \cdots & a_{2 r} + \lambda a_{2 s} & \cdots & a_{2 s} & \cdots & a_{2 n} \\
 \vdots & \ddots &                    \vdots & \ddots &  \vdots & \ddots &  \vdots \\
a_{n 1} & \cdots & a_{n r} + \lambda a_{n s} & \cdots & a_{n s} & \cdots & a_{n n} \\
\end{bmatrix}$.

Then $\map \det {\mathbf B} = \map \det {\mathbf A}$.

That is, the value of a determinant remains unchanged if a constant multiple of any column is added to any other column.


Proof
We have that:

$\mathbf A^\intercal = \begin {bmatrix}
a_{1 1} & a_{1 2} & \cdots & a_{1 n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
a_{r 1} & a_{r 2} & \cdots & a_{r n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
a_{s 1} & a_{s 2} & \cdots & a_{s n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
a_{n 1} & a_{n 2} & \cdots & a_{n n} \\
\end {bmatrix}$
where $\mathbf A^\intercal$ denotes the transpose of $\mathbf A$.

Similarly, we have that:

$\mathbf B^\intercal = \begin{bmatrix}
a_{1 1} & a_{1 2} & \ldots & a_{1 n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
a_{r 1} + \lambda a_{s 1} & a_{r 2} + \lambda a_{s 2} & \cdots & a_{r n} + \lambda a_{s n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
a_{s 1} & a_{s 2} & \cdots & a_{s n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
a_{n 1} & a_{n 2} & \cdots & a_{n n} \\
\end {bmatrix}$

From Multiple of Row Added to Row of Determinant:

$\map \det {\mathbf B^\intercal} = \map \det {\mathbf A^\intercal}$

From from Determinant of Transpose:

$\map \det {\mathbf B^\intercal} = \map \det {\mathbf B}$
$\map \det {\mathbf A^\intercal} = \map \det {\mathbf A}$
and the result follows.
$\blacksquare$


Also see
Multiple of Row Added to Row of Determinant


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous): $\text{A}.2$: Linear algebra and determinants: Theorem $\text{A}.10 \ (4)$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercises -- Second Set
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.6$ Determinant and trace: Proposition $1.13$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): determinant (3)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): determinant (3)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): determinant (iii)




