# 

Source: https://proofwiki.org/wiki/Determinant_of_Rescaling_Matrix

Theorem
Let $R$ be a commutative ring.
Let $r \in R$.
Let $r \, \mathbf I_n$ be the square matrix of order $n$ defined by:

$\sqbrk {r \, \mathbf I_n}_{i j} = \begin {cases} r & : i = j \\ 0 & : i \ne j \end {cases}$

Then:

$\map \det {r \, \mathbf I_n} = r^n$
where $\det$ denotes determinant.


Corollary
Let $\mathbf A$ be a square matrix of order $n$.
Let $\lambda$ be a scalar.
Let $\lambda \mathbf A$ denote the scalar product of $\mathbf A$ by $\lambda$.

Then:

$\map \det {\lambda \mathbf A} = \lambda^n \map \det {\mathbf A}$
where $\det$ denotes determinant.


Proof
From Determinant of Diagonal Matrix, it follows directly that:

$\map \det {r \, \mathbf I_n} = \ds \prod_{i \mathop = 1}^n r = r^n$
$\blacksquare$





