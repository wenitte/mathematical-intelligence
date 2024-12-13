# 

Source: https://proofwiki.org/wiki/Hankel_Matrix_is_Symmetric

Theorem
Let $\mathbf H$ be a Hankel matrix.
Then $\mathbf H$ is a symmetric matrix.


Proof
Recall the definition of symmetric matrix:
$\mathbf A$ is symmetric if and only if:

$\mathbf A = \mathbf A^\intercal$
where $\mathbf A^\intercal$ is the transpose of $\mathbf A$.
By definition of transpose of $\mathbf A$:

$\mathbf A^\intercal_{i j}: = \mathbf A_{j i}$

Recall the definition of Hankel matrix:
A Hankel matrix is a square matrix whose antidiagonals are constant.
That is, all the elements along an antidiagonal are equal.

That is, by definition of antidiagonal:

$\forall i, j \in \closedint 1 n: \mathbf A_{i j}: = \mathbf A_{j i}$
Hence $\mathbf A^\intercal = \mathbf A$ and the result follows.
$\blacksquare$


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Hankel matrix




