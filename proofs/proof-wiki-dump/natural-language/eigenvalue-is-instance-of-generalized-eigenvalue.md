# 

Source: https://proofwiki.org/wiki/Eigenvalue_is_Instance_of_Generalized_Eigenvalue

Theorem
Let $\mathbf A$ be a square matrix of order $n$. 
Let $\lambda$ be an eigenvalue of $\mathbf A$.

Then:

$\lambda$ is a generalized eigenvalue of $\mathbf A$
the corresponding eigenvector $\mathbf x$ corresponding to $\lambda$ is the generalized eigenvector of $\mathbf A$ corresponding to $\lambda$.


Proof
By the definition of eigenvalue of $\mathbf A$:

$\map \det {\mathbf I_n \mathbf x - \mathbf A} = 0$
for some non-zero vector $\mathbf x$.

Recall the definition of generalized eigenvalue of $\mathbf A$:

$\mathbf A \mathbf x = \lambda \mathbf B \mathbf x$
for:

some non-zero vector $\mathbf x$
some square matrix $\mathbf B$ of order $n$.
Then from Generalized Eigenvalues as Roots of Equation:

$\map \det {\mathbf A - \lambda \mathbf B} = 0$
where:

$\mathbf B$ is another square matrix of order $n$
$\det$ denotes the determinant.

Hence setting:

$\mathbf B = \mathbf I_n$
it is seen that $\lambda$ is a generalized eigenvalue of $\mathbf A$

Hence, by definition, the eigenvector $\mathbf x$ corresponding to $\lambda$ is the generalized eigenvector of $\mathbf A$ corresponding to $\lambda$.
$\blacksquare$


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): generalized eigenvalue




