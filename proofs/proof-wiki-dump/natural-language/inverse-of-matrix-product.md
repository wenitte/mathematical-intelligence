# 

Source: https://proofwiki.org/wiki/Inverse_of_Matrix_Product



Theorem
Let $\mathbf {A, B}$ be square matrices of order $n$
Let $\mathbf I$ be the $n \times n$ unit matrix.
Let $\mathbf A$ and $\mathbf B$ be nonsingular.

Then the matrix product $\mathbf {AB}$ is also nonsingular, and:

$\paren {\mathbf A \mathbf B}^{-1} = \mathbf B^{-1} \mathbf A^{-1}$


Proof
We are given that $\mathbf A$ and $\mathbf B$ are nonsingular.
From Product of Matrices is Nonsingular iff Matrices are Nonsingular, $\mathbf A \mathbf B$ is also nonsingular.

By the definition of inverse matrix:

$\mathbf A \mathbf A^{-1} = \mathbf A^{-1} \mathbf A = \mathbf I$
and 

$\mathbf B \mathbf B^{-1} = \mathbf B^{-1} \mathbf B = \mathbf I$

Now, observe that:














\(\ds \paren {\mathbf A \mathbf B} \paren {\mathbf B^{-1} \mathbf A^{-1} }\)

\(=\)







\(\ds \paren {\mathbf A \paren {\mathbf B \mathbf B^{-1} } } \mathbf A^{-1}\)





Matrix Multiplication is Associative














\(\ds \)

\(=\)







\(\ds \paren {\mathbf A \mathbf I} \mathbf A^{-1}\)




















\(\ds \)

\(=\)







\(\ds \mathbf A \mathbf A^{-1}\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds \mathbf I\)










Similarly:














\(\ds \paren {\mathbf B^{-1} \mathbf A^{-1} } \paren {\mathbf A \mathbf B}\)

\(=\)







\(\ds \paren {\mathbf B^{-1} \paren {\mathbf A^{-1} \mathbf A} } \mathbf B\)





Matrix Multiplication is Associative














\(\ds \)

\(=\)







\(\ds \paren {\mathbf B^{-1} \mathbf I} \mathbf B\)




















\(\ds \)

\(=\)







\(\ds \mathbf B^{-1} \mathbf B\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds \mathbf I\)









The result follows from the definition of inverse.
$\blacksquare$


Also see
Transpose of Matrix Product


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.3$ The inverse of a matrix: Proposition $1.2$




