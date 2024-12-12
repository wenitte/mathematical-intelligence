# 

Source: https://proofwiki.org/wiki/Determinant_of_Combinatorial_Matrix

Theorem
Let $C_n$ be the combinatorial matrix of order $n$ given by:

$C_n = \begin{bmatrix}
x + y & y & \cdots & y \\
y & x + y & \cdots & y \\
\vdots & \vdots & \ddots & \vdots \\
y & y & \cdots & x + y
\end{bmatrix}$

Then the determinant of $C_n$ is given by:

$\map \det {C_n} = x^{n - 1} \paren {x + n y}$


Proof
Take the determinant $\map \det {C_n}$:

$\map \det {C_n} = \begin{vmatrix}
x + y & y & y & \cdots & y \\
y & x + y & y & \cdots & y \\
y & y & x + y & \cdots & y \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
y & y & y & \cdots & x + y
\end{vmatrix}$

Subtract column $1$ from columns $2$ to $n$.
From Multiple of Row Added to Row of Determinant this will have no effect on the value of the determinant:

$\map \det {C_n} = \begin{vmatrix}
x + y & -x & -x & \cdots & -x \\
y & x & 0 & \cdots & 0 \\
y & 0 & x & \cdots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
y & 0 & 0 & \cdots & x
\end{vmatrix}$

Add rows $2$ to $n$ to row $1$.
Again, from Multiple of Row Added to Row of Determinant this will have no effect on the value of the determinant:

$\map \det {C_n} = \begin{vmatrix}
x + n y & 0 & 0 & \cdots & 0 \\
y & x & 0 & \cdots & 0 \\
y & 0 & x & \cdots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
y & 0 & 0 & \cdots & x
\end{vmatrix}$

This is now the determinant of a (lower) triangular matrix.
From Determinant of Triangular Matrix, it follows immediately that:

$\map \det {C_n} = x^{n - 1} \paren {x + n y}$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $36$




