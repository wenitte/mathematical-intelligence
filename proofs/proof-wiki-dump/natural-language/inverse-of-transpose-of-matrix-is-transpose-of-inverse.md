# 

Source: https://proofwiki.org/wiki/Inverse_of_Transpose_of_Matrix_is_Transpose_of_Inverse

Theorem
Let $\mathbf A$ be a matrix over a field.
Let $\mathbf A^\intercal$ denote the transpose of $\mathbf A$.
Let $\mathbf A$ be an nonsingular matrix.

Then $\mathbf A^\intercal$ is also nonsingular and:

$\paren {\mathbf A^\intercal}^{-1} = \paren {\mathbf A^{-1} }^\intercal$
where $\mathbf A^{-1}$ denotes the inverse of $\mathbf A$.


Proof
We have:














\(\ds \paren {\mathbf A^{-1} }^\intercal \mathbf A^\intercal\)

\(=\)







\(\ds \paren {\mathbf A \mathbf A^{-1} }^\intercal\)





Transpose of Matrix Product














\(\ds \)

\(=\)







\(\ds \mathbf I^\intercal\)





Definition of Inverse Matrix: $\mathbf I$ denotes Unit Matrix














\(\ds \)

\(=\)







\(\ds \mathbf I\)





Definition of Unit Matrix



Hence $\paren {\mathbf A^{-1} }^\intercal$ is an inverse of $\mathbf A^\intercal$.
From Inverse of Square Matrix over Field is Unique:

$\paren {\mathbf A^{-1} }^\intercal = \paren {\mathbf A^\intercal}^{-1}$
$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.4$ The transpose of a matrix: Proposition $1.3 \ \text {(b)}$




