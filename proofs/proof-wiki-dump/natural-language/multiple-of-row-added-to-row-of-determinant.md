# 

Source: https://proofwiki.org/wiki/Multiple_of_Row_Added_to_Row_of_Determinant



Theorem
Let $\mathbf A = \begin {bmatrix}
a_{1 1} & a_{1 2} & \cdots & a_{1 n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
a_{r 1} & a_{r 2} & \cdots & a_{r n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
a_{s 1} & a_{s 2} & \cdots & a_{s n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
a_{n 1} & a_{n 2} & \cdots & a_{n n} \\
\end {bmatrix}$ be a square matrix of order $n$.

Let $\map \det {\mathbf A}$ denote the determinant of $\mathbf A$.
Let $\mathbf B = \begin{bmatrix}
a_{1 1}             & a_{1 2}             & \cdots &             a_{1 n} \\
 \vdots             & \vdots              & \ddots &              \vdots \\
a_{r 1} + k a_{s 1} & a_{r 2} + k a_{s 2} & \cdots & a_{r n} + k a_{s n} \\
 \vdots             & \vdots              & \ddots &              \vdots \\
a_{s 1}             & a_{s 2}             & \cdots &             a_{s n} \\
 \vdots             & \vdots              & \ddots &              \vdots \\
a_{n 1}             & a_{n 2}             & \cdots &             a_{n n} \\
\end{bmatrix}$.

Then:

$\map \det {\mathbf B} = \map \det {\mathbf A}$.

That is, the value of a determinant remains unchanged if a constant multiple of any row is added to any other row.


Proof 1
Let $e$ be the elementary row operation that adds $k$ times row $r$ to row $s$.
Let $\mathbf B = \map e {\mathbf A}$.
Let $\mathbf E$ be the elementary row matrix corresponding to $e$.
From Elementary Row Operations as Matrix Multiplications:

$\mathbf B = \mathbf E \mathbf A$
From Determinant of Elementary Row Matrix: Scale Row and Add:

$\map \det {\mathbf E} = 1$
Then:














\(\ds \map \det {\mathbf B}\)

\(=\)







\(\ds \map \det {\mathbf E \mathbf A}\)





Determinant of Matrix Product














\(\ds \)

\(=\)







\(\ds \map \det {\mathbf A}\)





as $\map \det {\mathbf E} = 1$



Hence the result.
$\blacksquare$


Proof 2
By Determinant as Sum of Determinants:

$\map \det {\mathbf B} = \begin{vmatrix}
a_{11} & a_{12} & \ldots & a_{1n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{r1} + k a_{s1} & a_{r2} + k a_{s2} & \cdots & a_{rn} + k a_{sn} \\
\vdots & \vdots & \ddots & \vdots \\
a_{s1} & a_{s2} & \cdots & a_{sn} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn} \\
\end{vmatrix} = \begin{vmatrix}
a_{11} & a_{12} & \ldots & a_{1n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{r1} & a_{r2} & \cdots & a_{rn} \\
\vdots & \vdots & \ddots & \vdots \\
a_{s1} & a_{s2} & \cdots & a_{sn} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn} \\
\end{vmatrix} + \begin{vmatrix}
a_{11} & a_{12} & \ldots & a_{1n} \\
\vdots & \vdots & \ddots & \vdots \\
k a_{s1} & k a_{s2} & \cdots & k a_{sn} \\
\vdots & \vdots & \ddots & \vdots \\
a_{s1} & a_{s2} & \cdots & a_{sn} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn} \\
\end{vmatrix}$

Thus by Determinant with Row Multiplied by Constant:

$\map \det {\mathbf B} = \begin{vmatrix}
a_{11} & a_{12} & \ldots & a_{1n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{r1} + k a_{s1} & a_{r2} + k a_{s2} & \cdots & a_{rn} + k a_{sn} \\
\vdots & \vdots & \ddots & \vdots \\
a_{s1} & a_{s2} & \cdots & a_{sn} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn} \\
\end{vmatrix} = \begin{vmatrix}
a_{11} & a_{12} & \ldots & a_{1n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{r1} & a_{r2} & \cdots & a_{rn} \\
\vdots & \vdots & \ddots & \vdots \\
a_{s1} & a_{s2} & \cdots & a_{sn} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn} \\
\end{vmatrix} + k \begin{vmatrix}
a_{11} & a_{12} & \ldots & a_{1n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{s1} & a_{s2} & \cdots & a_{sn} \\
\vdots & \vdots & \ddots & \vdots \\
a_{s1} & a_{s2} & \cdots & a_{sn} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn} \\
\end{vmatrix}$

But by Square Matrix with Duplicate Rows has Zero Determinant:

$\begin{vmatrix}
a_{11} & a_{12} & \ldots & a_{1n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{s1} & a_{s2} & \cdots & a_{sn} \\
\vdots & \vdots & \ddots & \vdots \\
a_{s1} & a_{s2} & \cdots & a_{sn} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn} \\
\end{vmatrix} = 0$

The result follows.
$\blacksquare$


Also see
Multiple of Column Added to Column of Determinant


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercises -- Second Set
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): determinant (3)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): determinant (3)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): determinant (iii)




