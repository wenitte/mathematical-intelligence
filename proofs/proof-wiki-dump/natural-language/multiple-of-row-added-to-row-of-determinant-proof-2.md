# 

Source: https://proofwiki.org/wiki/Multiple_of_Row_Added_to_Row_of_Determinant/Proof_2

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





