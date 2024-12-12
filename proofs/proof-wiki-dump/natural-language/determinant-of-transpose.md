# 

Source: https://proofwiki.org/wiki/Determinant_of_Transpose

Theorem
Let $\mathbf A = \sqbrk a_n$ be a square matrix of order $n$.
Let $\map \det {\mathbf A}$ be the determinant of $\mathbf A$.
Let $\mathbf A^\intercal$ be the transpose of $\mathbf A$.

Then:

$\map \det {\mathbf A} = \map \det {\mathbf A^\intercal}$


Proof
Let $\mathbf A = \begin{bmatrix}
a_{11} & a_{12} & \ldots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn} \\
\end{bmatrix}$.
Then $\mathbf A^\intercal = \begin{bmatrix}
a_{11} & a_{21} & \ldots & a_{n1} \\
a_{12} & a_{22} & \cdots & a_{n2} \\
\vdots & \vdots & \ddots & \vdots \\
a_{1n} & a_{2n} & \cdots & a_{nn} \\
\end{bmatrix}$.

Let $b_{r s} = a_{s r}$ for $1 \le r, s \le n$.
We need to show that $\map \det {\sqbrk a_n} = \map \det {\sqbrk b_n}$.
By the definition of determinant and Permutation of Determinant Indices, we have:














\(\ds \map \det {\sqbrk b_n}\)

\(=\)







\(\ds \sum_\lambda \map {\sgn} \lambda b_{1 \map \lambda 1} b_{2 \map \lambda 2} \cdots b_{n \map \lambda n}\)




















\(\ds \)

\(=\)







\(\ds \sum_\lambda \map {\sgn} \lambda a_{\map \lambda 1 1} a_{\map \lambda 2 2} \cdots a_{\map \lambda n n}\)




















\(\ds \)

\(=\)







\(\ds \map \det {\sqbrk a_n}\)









$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.6$ Determinant and trace: Fact $1.7 \ \text {(a)}$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): determinant (4)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): determinant (4)




