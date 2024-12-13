# 

Source: https://proofwiki.org/wiki/Multiple_of_Row_Added_to_Row_of_Determinant/Proof_1

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


Proof
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


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.6$ Determinant and trace: Proposition $1.11$




