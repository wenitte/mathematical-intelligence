# 

Source: https://proofwiki.org/wiki/Generalized_Eigenvalues_as_Roots_of_Equation

Theorem
Let $\mathbf A$ be a square matrix of order $n$.
Let $\lambda$ be a generalized eigenvalue of $\mathbf A$.

Then:

$\map \det {\mathbf A - \lambda \mathbf B} = 0$
where:

$\mathbf B$ is another square matrix of order $n$
$\det$ denotes the determinant.


Proof
By definition of generalized eigenvalue:














\(\ds \mathbf A \mathbf x\)

\(=\)







\(\ds \lambda \mathbf B \mathbf x\)





for some non-zero vector $\mathbf x$








\(\ds \leadsto \ \ \)





\(\ds \mathbf A \mathbf x - \lambda \mathbf B \mathbf x\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\mathbf A - \lambda \mathbf B} \mathbf x\)

\(=\)







\(\ds 0\)









We have that $\mathbf x$ is non-zero by hypothesis.
Hence from Matrix is Singular iff Product with Non-Zero Vector is Zero, the matrix $\mathbf A - \lambda \mathbf B$ is singular.
Hence $\map \det {\mathbf A - \lambda \mathbf B} = 0$ by definition of singular matrix.
$\blacksquare$


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): generalized eigenvalue




