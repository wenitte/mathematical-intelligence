# 

Source: https://proofwiki.org/wiki/Determinant_with_Row_Multiplied_by_Constant/Proof_2

Theorem
Let $\mathbf A = \sqbrk a_n$ be a square matrix of order $n$.
Let $\map \det {\mathbf A}$ be the determinant of $\mathbf A$.

Let $\mathbf B$ be the matrix resulting from one row of $\mathbf A$ having been multiplied by a constant $c$.

Then:

$\map \det {\mathbf B} = c \map \det {\mathbf A}$

That is, multiplying one row of a square matrix by a constant multiplies its determinant by that constant.


Proof
Let:

$\mathbf A = \begin {bmatrix}
a_{1 1} & a_{1 2} & \cdots & a_{1 n} \\
a_{2 1} & a_{2 2} & \cdots & a_{2 n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
a_{r 1} & a_{r 2} & \cdots & a_{r n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
a_{n 1} & a_{n 2} & \cdots & a_{n n} \\
\end {bmatrix}$
$\mathbf B = \begin{bmatrix}
b_{1 1} & b_{1 2} & \ldots & b_{1 n} \\
b_{2 1} & b_{2 2} & \ldots & b_{2 n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
b_{r 1} & b_{r 2} & \cdots & b_{r n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
b_{n 1} & b_{n 2} & \cdots & b_{n n} \\
\end{bmatrix} = \begin{bmatrix}
a_{1 1} & a_{1 2} & \ldots & a_{1 n} \\
a_{2 1} & a_{2 2} & \ldots & a_{2 n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
c a_{r 1} & c a_{r 2} & \cdots & c a_{r n} \\
 \vdots &  \vdots & \ddots &  \vdots \\
a_{n 1} & a_{n 2} & \cdots & a_{n n} \\
\end{bmatrix}$

Then from the definition of the determinant:














\(\ds \map \det {\mathbf B}\)

\(=\)







\(\ds \sum_\lambda \paren {\map \sgn \lambda \prod_{k \mathop = 1}^n b_{k \map \lambda k} }\)




















\(\ds \)

\(=\)







\(\ds \sum_\lambda \map \sgn \lambda a_{1 \map \lambda 1} a_{2 \map \lambda 2} \cdots c a_{r \map \lambda r} \cdots a_{n \map \lambda n}\)










The constant $c$ is a factor of all the terms in the $\sum_\lambda$ expression and can be taken outside the summation:














\(\ds \map \det {\mathbf B}\)

\(=\)







\(\ds c \sum_\lambda \map \sgn \lambda a_{1 \map \lambda 1} a_{2 \map \lambda 2} \cdots a_{r \map \lambda r} \cdots a_{n \map \lambda n}\)




















\(\ds \)

\(=\)







\(\ds c \sum_\lambda \paren {\map \sgn \lambda \prod_{k \mathop = 1}^n a_{k \map \lambda k} }\)




















\(\ds \)

\(=\)







\(\ds c \, \map \det {\mathbf A}\)









$\blacksquare$





