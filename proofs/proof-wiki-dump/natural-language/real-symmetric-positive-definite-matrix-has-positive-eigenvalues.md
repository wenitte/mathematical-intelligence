# 

Source: https://proofwiki.org/wiki/Real_Symmetric_Positive_Definite_Matrix_has_Positive_Eigenvalues

Theorem
Let $A$ be a symmetric positive definite matrix over $\mathbb R$.
Let $\lambda$ be an eigenvalue of $A$. 

Then $\lambda$ is real with $\lambda > 0$.


Proof
Let $\lambda$ be an eigenvalue of $A$ and let $\mathbf v$ be a corresponding eigenvector.
From Real Symmetric Matrix has Real Eigenvalues, $\lambda$ is real.
From the definition of a positive definite matrix, we have: 

$\mathbf v^\intercal A \mathbf v > 0$
That is: 














\(\ds 0\)

\(<\)







\(\ds \mathbf v^\intercal A \mathbf v\)




















\(\ds \)

\(=\)







\(\ds \mathbf v^\intercal \paren {\lambda \mathbf v}\)





Definition of Eigenvector of Real Square Matrix














\(\ds \)

\(=\)







\(\ds \lambda \paren {\mathbf v^\intercal \mathbf v}\)




















\(\ds \)

\(=\)







\(\ds \lambda \paren {\mathbf v \cdot \mathbf v}\)





Definition of Dot Product














\(\ds \)

\(=\)







\(\ds \lambda \norm {\mathbf v}^2\)





Dot Product of Vector with Itself



From Euclidean Space is Normed Vector Space, we have: 

$\norm {\mathbf v}^2 > 0$
so:

$\lambda > 0$
$\blacksquare$





