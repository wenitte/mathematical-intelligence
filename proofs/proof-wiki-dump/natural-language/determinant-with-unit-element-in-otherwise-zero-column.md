# 

Source: https://proofwiki.org/wiki/Determinant_with_Unit_Element_in_Otherwise_Zero_Column

Theorem
Let $D$ be the determinant:

$D = \begin{vmatrix}
  1 & b_{12} & \cdots & b_{1n} \\
  0 & b_{22} & \cdots & b_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
  0 & b_{n2} & \cdots & b_{nn}
\end{vmatrix}$

Then:

$D = \begin{vmatrix}
  b_{22} & \cdots & b_{2n} \\
\vdots & \ddots & \vdots \\
  b_{n2} & \cdots & b_{nn}
\end{vmatrix}$


Proof
We note that:

$D = \begin{vmatrix}
  1 & b_{12} & \cdots & b_{1n} \\
  0 & b_{22} & \cdots & b_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
  0 & b_{n2} & \cdots & b_{nn}
\end{vmatrix}$
is the transpose of:

$D^\intercal = \begin{vmatrix}
  1 & 0 & \cdots & 0 \\
  b_{12} & b_{22} & \cdots & b_{n2} \\
\vdots & \vdots & \ddots & \vdots \\
  b_{1n} & b_{2n} & \cdots & b_{nn}
\end{vmatrix}$
From Determinant with Unit Element in Otherwise Zero Row:

$D^\intercal = \begin{vmatrix}
  b_{22} & \cdots & b_{n2} \\
\vdots & \ddots & \vdots \\
  b_{2n} & \cdots & b_{nn}
\end{vmatrix}$

The result follows by Determinant of Transpose.
$\blacksquare$


Also see
Determinant with Unit Element in Otherwise Zero Row




