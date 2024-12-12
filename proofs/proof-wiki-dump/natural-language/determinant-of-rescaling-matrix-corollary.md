# 

Source: https://proofwiki.org/wiki/Determinant_of_Rescaling_Matrix/Corollary

Corollary to Determinant of Rescaling Matrix
Let $\mathbf A$ be a square matrix of order $n$.
Let $\lambda$ be a scalar.
Let $\lambda \mathbf A$ denote the scalar product of $\mathbf A$ by $\lambda$.

Then:

$\map \det {\lambda \mathbf A} = \lambda^n \map \det {\mathbf A}$
where $\det$ denotes determinant.


Proof
For $1 \le k \le n$, let $e_k$ be the elementary row operation that multiplies row $k$ of $\mathbf A$ by $\lambda$.
By definition of the scalar product, $\lambda \mathbf A$ is obtained by multiplying every row of $\mathbf A$ by $\lambda$.
That is the same as applying $e_k$ to $\mathbf A$ for each of $k \in \set {1, 2, \ldots, n}$.
Let $\mathbf E_k$ denote the elementary row matrix corresponding to $e_k$.
By Determinant of Elementary Row Matrix: Scale Row:

$\map \det {\mathbf E_k} = \lambda$
Then we have:














\(\ds \lambda \mathbf A\)

\(=\)







\(\ds \prod_{k \mathop = 1}^n \mathbf E_k \mathbf A\)














\(\ds \leadsto \ \ \)





\(\ds \map \det {\lambda \mathbf A}\)

\(=\)







\(\ds \map \det {\prod_{k \mathop = 1}^n \mathbf E_k \mathbf A}\)




















\(\ds \)

\(=\)







\(\ds \paren {\prod_{k \mathop = 1}^n \map \det {\mathbf E_k} } \map \det {\mathbf A}\)





Determinant of Matrix Product














\(\ds \)

\(=\)







\(\ds \paren {\prod_{k \mathop = 1}^n \lambda} \map \det {\mathbf A}\)





Determinant of Elementary Row Matrix: Scale Row














\(\ds \)

\(=\)







\(\ds \lambda^n \map \det {\mathbf A}\)









$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.6$ Determinant and trace: Proposition $1.10$




