# 

Source: https://proofwiki.org/wiki/Inverse_of_Diagonal_Matrix

Theorem
Let:

$\mathbf D = \begin{bmatrix}
a_{11} & 0 & \cdots & 0 \\
0 & a_{22} & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & a_{nn} \\
\end{bmatrix}$
be an $n \times n$ diagonal matrix.
Then its inverse is given by:

$\mathbf D^{-1} = \begin{bmatrix}
\dfrac 1 {a_{11}} & 0 & \cdots & 0 \\
0 & \dfrac 1 {a_{22}} & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & \dfrac 1 {a_{nn}} \\
\end{bmatrix}$
provided that none of the diagonal elements are zero.

If any of the diagonal elements are zero, $\mathbf D$ is singular. 


This article is complete as far as it goes, but it could do with expansion.In particular: If any diagonal element isn't a unitYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Proof
Without loss of generality, consider the right inverse of $\mathbf D$.
Suppose none of the diagonal elements are zero. 
Then by the definition of inverse, our assertion is that the matrix product of the two matrices in question is the unit matrix of order $n$.

Now, observe that:














\(\ds \begin {bmatrix} a_{11} & 0 & \cdots & 0 \\ 0 & a_{22} & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & a_{nn} \\ \end {bmatrix} \begin {bmatrix} \frac 1 {a_{11} } & 0 & \cdots & 0 \\ 0 & \frac 1 {a_{22} } & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & \frac 1 {a_{nn} } \\ \end {bmatrix}\)

\(=\)







\(\ds \begin{bmatrix} \frac{a_{11} }{a_{11} } & 0 & \cdots & 0 \\ 0 & \frac{a_{22} }{a_{22} } & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & \frac{a_{nn} }{a_{nn} } \\ \end {bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {bmatrix} 1 & 0 & \cdots & 0 \\ 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & 1 \\ \end {bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \mathbf I\)









$\Box$

Now suppose one of the diagonal elements is zero.
Then $\map \det {\mathbf D} = 0$, where $\det$ indicates the determinant of $\mathbf D$.
From Determinant of Inverse Matrix it would follow that:

$\map \det {\mathbf D^{-1} } = \dfrac 1 {\map \det {\mathbf D} }$
But this equation has no solution, and so $\mathbf D$ cannot admit an inverse.
$\blacksquare$





