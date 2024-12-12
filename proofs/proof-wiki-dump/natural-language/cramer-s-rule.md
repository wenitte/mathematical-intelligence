# 

Source: https://proofwiki.org/wiki/Cramer%27s_Rule



Theorem
Let $n \in \N$.
Let $b_1, b_2, \dots, b_n$ be real numbers.
Let $\mathbf b = \tuple {b_1, b_2, \dots, b_n}^\intercal$.
Let $x_1, x_2, \dots, x_n$ be real numbers.
Let $\mathbf x = \tuple {x_1, x_2, \dots, x_n}^\intercal$.
Let $A$ be a nonsingular $n \times n$ matrix whose elements are in $\R$.
For each $i \in \set {1, \dots, n}$, let $A_i$ be the matrix obtained by replacing the $i$th column with $\mathbf b$.
Let:

$A \mathbf x = \mathbf b$
Then:

$\mathbf x_i = \dfrac {\map \det {A_i} } {\map \det A}$
for each $i \in \set {1, \dots, n}$.


Proof
Let $C$ be the cofactor matrix of $A$.
By definition, $C^\intercal$ is the adjugate matrix of $A$.
Therefore by Matrix Product with Adjugate Matrix:

$A \cdot C^\intercal = \det A \cdot I_n$
Because $A$ is nonsingular, $A^{-1}$ exists.
From Matrix is Nonsingular iff Determinant has Multiplicative Inverse,  $1 / \det A$ also exists.
Therefore:

$A^{-1} = \dfrac 1 {\det A} \cdot C^\intercal$
Since by hypothesis $A \mathbf x = \mathbf b$:

$\mathbf x = A^{-1} \mathbf b$
Therefore:

$\mathbf x = \paren {\dfrac 1 {\det A} C^\intercal} \mathbf b$
For each $r, s \in \set {1, 2, \ldots, n}$, let $A_{r s}$ denote the element of $C$ whose index is $\tuple {r, s}$.
Then by the definition of transpose:

$C^\intercal = \begin {bmatrix} A_{11} & A_{21} & \dots & A_{n1} \\
A_{12} & A_{22} & \dots & A_{n2} \\
\vdots & \vdots & \ddots & \vdots \\
A_{1n} & A_{2n} & \dots & A_{nn}
\end{bmatrix}$
By the definition of cofactor matrix, $A_{r s}$ is the cofactor of the element of $A$ whose index is $\tuple {r, s}$.
Let $i \in \set {1, 2, \ldots, n}$.
Then by definition of matrix product:

$\ds x_i = \dfrac 1 {\det A} \paren {\sum_{j \mathop = 1}^n A_{ji} b_j}$
Recall that $A_i$ is the matrix obtained from $A$ by replacing the $i$th column with $\mathbf b$. 
Then if:

$A = \begin {bmatrix} a_{1,1} & a_{1,2} & \dots & a_{1,n} \\
a_{2,1} & a_{2,2} & \dots & a_{2,n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n,1} & a_{n,2} & \dots & a_{n,n}
\end{bmatrix}$
then:

$A_i = \begin{bmatrix}
a_{1,1} & a_{1,2} & \dots & a_{1, i - 1} & b_1 & a_{1, i + 1} & \dots & a_{1,n} \\
a_{2,1} & a_{2,2} & \dots & a_{2, i - 1} & b_2 & a_{2, i + 1} & \dots & a_{2,n} \\
\vdots & \vdots & \ddots & \vdots &  \vdots & \vdots & \ddots & \vdots \\
a_{n,1} & a_{n,2} & \dots & a_{n, i - 1} & b_n & a_{n, i + 1} & \dots & a_{n,n}
\end{bmatrix}$
For all $j \in \set {1, 2, \dots, n}$ the matrix obtained by deleting the $j$th row and the $i$th column of $A$ is equal to the matrix obtained by deleting the $j$th row and $i$th column of $A_i$.
Therefore, by definition, the cofactor of $\sqbrk {A_i}_{j,i}$ is equal to $A_{ji}$.
By the Expansion Theorem for Determinants, we now have:

$\ds \det{A_i} = \sum_{j \mathop = 1}^n A_{ji} b_j$
Therefore:

$x_i = \dfrac {\det {A_i} } {\det A}$
as desired.
$\blacksquare$


Source of Name
This entry was named for Gabriel Cramer.


Historical Note
Cramer's Rule was first presented by Gabriel Cramer in $1750$.
While it can be used to solve any system of linear simultaneous equations, it needs many more mathematical operations than Gaussian elimination, hence it is generally used only for small $n$.


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Cramer's rule
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Cramer's rule (G. Cramer, 1750)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Cramer's rule (G. Cramer, 1750)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Cramer's rule




