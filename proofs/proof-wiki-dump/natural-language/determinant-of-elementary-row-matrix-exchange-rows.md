# 

Source: https://proofwiki.org/wiki/Determinant_of_Elementary_Row_Matrix/Exchange_Rows

Theorem
Let $e_3$ be the elementary row operation $\text {ERO} 3$:




\((\text {ERO} 3)\)  

$:$  







\(\ds r_i \leftrightarrow r_j \)   





Exchange rows $i$ and $j$   

  

which is to operate on some arbitrary matrix space.

Let $\mathbf E_3$ be the elementary row matrix corresponding to $e_3$.
The determinant of $\mathbf E_3$ is:

$\map \det {\mathbf E_3} = -1$


Proof
Let $\mathbf I$ denote the unit matrix of arbitrary order $n$.
By Determinant of Unit Matrix:

$\map \det {\mathbf I} = 1$

Let $\rho$ be the permutation on $\tuple {1, 2, \ldots, n}$ which transposes $i$ and $j$.
From Parity of K-Cycle, $\map \sgn \rho = -1$.

By definition we have that $\mathbf E_3$ is $\mathbf I$ with rows $i$ and $j$ transposed.
By the definition of a determinant:

$\ds \map \det {\mathbf I} = \sum_{\lambda} \paren {\map \sgn \lambda \prod_{k \mathop = 1}^n a_{k \map \lambda k} }$
By Permutation of Determinant Indices:

$\ds \map \det {\mathbf E_3} = \sum_\lambda \paren {\map \sgn \rho \map \sgn \lambda \prod_{k \mathop = 1}^n a_{\map \rho k \map \lambda k} }$
We can take $\map \sgn \rho = -1$ outside the summation because it is constant, and so we get:














\(\ds \map \det {\mathbf E_3}\)

\(=\)







\(\ds \map \sgn \rho \sum_\lambda \paren {\map \sgn \lambda \prod_{k \mathop = 1}^n a_{\map \rho k \map \lambda k} }\)




















\(\ds \)

\(=\)







\(\ds -\sum_\lambda \paren {\map \sgn \lambda \prod_{k \mathop = 1}^n a_{k \map \lambda k} }\)




















\(\ds \)

\(=\)







\(\ds -\map \det {\mathbf I}\)










Hence the result.
$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.6$ Determinant and trace: Fact $1.8 \ \text {(a)}$




