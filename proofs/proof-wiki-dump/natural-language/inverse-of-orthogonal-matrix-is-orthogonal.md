# 

Source: https://proofwiki.org/wiki/Inverse_of_Orthogonal_Matrix_is_Orthogonal

Theorem
Let $\mathbf A$ be an orthogonal matrix.
Then its inverse $\mathbf A^{-1}$ is also orthogonal.


Proof
By definition of orthogonal matrix:

$\mathbf A^\intercal = \mathbf A^{-1}$
where $\mathbf A^\intercal$ is the transpose of $\mathbf A$.
By Inverse of Inverse of Matrix:

$\paren {\mathbf A^{-1} }^{-1} = \mathbf A$
By Transpose of Transpose of Matrix:

$\paren {\mathbf A^\intercal}^\intercal = \mathbf A$
Thus we have:

$\paren {\mathbf A^{-1} }^{-1} = \mathbf A = \paren {\mathbf A^\intercal}^\intercal = \paren {\mathbf A^{-1} }^\intercal$
and so by definition $\mathbf A^{-1}$ is orthogonal.
$\blacksquare$





