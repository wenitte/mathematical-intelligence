# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Determinant



Theorem
Let $\mathbf A = \sqbrk a_n$ be a square matrix of order $n$.

The following definitions of the concept of the determinant of $\mathbf A$ are equivalent:

Definition 1
Let $\lambda: \N_{> 0} \to \N_{> 0}$ be a permutation on $\N_{>0}$.

The determinant of $\mathbf A$ is defined as:

$\ds \map \det {\mathbf A} := \sum_{\lambda} \paren {\map \sgn \lambda \prod_{k \mathop = 1}^n a_{k \map \lambda k} } = \sum_\lambda \map \sgn \lambda a_{1 \map \lambda 1} a_{2 \map \lambda 2} \cdots a_{n \map \lambda n}$
where:

the summation $\ds \sum_\lambda$ goes over all the $n!$ permutations of $\set {1, 2, \ldots, n}$
$\map \sgn \lambda$ is the sign of the permutation $\lambda$.
Definition 2
The determinant of $\mathbf A$ is defined as follows:
For $n = 1$, the order $1$ determinant is defined as:

$\begin {vmatrix} a_{1 1} \end {vmatrix} = a_{1 1}$
Thus the determinant of an order $1$ matrix is that element itself.

For $n > 1$, the determinant of order $n$ is defined recursively as:


$\ds \map \det {\mathbf A} := \begin {vmatrix}
a_{1 1} & a_{1 2} & a_{1 3} & \cdots & a_{1 n} \\
a_{2 1} & a_{2 2} & a_{2 3} & \cdots & a_{2 n} \\
a_{3 1} & a_{3 2} & a_{3 3} & \cdots & a_{3 n} \\
\vdots  &  \vdots &  \vdots & \ddots &  \vdots \\
a_{n 1} & a_{n 2} & a_{n 3} & \cdots & a_{n n} \\
\end {vmatrix} = a_{1 1} \begin {vmatrix}
a_{2 2} & a_{2 3} & \cdots & a_{2 n} \\
a_{3 2} & a_{3 3} & \cdots & a_{3 n} \\
\vdots  &  \vdots & \ddots &  \vdots \\
a_{n 2} & a_{n 3} & \cdots & a_{n n} \\
\end {vmatrix} - a_{1 2} \begin {vmatrix}
a_{2 1} & a_{2 3} & \cdots & a_{2 n} \\
a_{3 1} & a_{3 3} & \cdots & a_{3 n} \\
\vdots  &  \vdots & \ddots &  \vdots \\
a_{n 1} & a_{n 3} & \cdots & a_{n n} \\
\end {vmatrix} + \cdots + \paren {-1}^{n + 1} a_{1 n} \begin {vmatrix}
a_{2 1} & a_{2 2} & \cdots & a_{2, n - 1} \\
a_{3 1} & a_{3 3} & \cdots & a_{3, n - 1} \\
\vdots  &  \vdots & \ddots &       \vdots \\
a_{n 1} & a_{n 3} & \cdots & a_{n, n - 1} \\
\end {vmatrix}$


Proof
This is proved in Expansion Theorem for Determinants.
$\blacksquare$





