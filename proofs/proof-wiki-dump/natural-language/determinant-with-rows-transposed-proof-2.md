# 

Source: https://proofwiki.org/wiki/Determinant_with_Rows_Transposed/Proof_2

Theorem
If two rows of a matrix with determinant $D$ are transposed, its determinant becomes $-D$.


Proof
Let $\mathbf A = \sqbrk a_n$ be a square matrix of order $n$.
Let $\map \det {\mathbf A}$ be the determinant of $\mathbf A$.
Let $1 \le r < s \le n$.
Let $\rho$ be the permutation on $\N^*_n$ which transposes $r$ and $s$.
From Parity of K-Cycle, $\map \sgn \rho = -1$.

Let $\mathbf A' = \sqbrk {a'}_n$ be $\mathbf A$ with rows $r$ and $s$ transposed.
By the definition of a determinant:

$\displaystyle \map \det {\mathbf A'} = \sum_\lambda \paren {\map \sgn \lambda \prod_{k \mathop = 1}^n a'_{k \map \lambda k} }$
By Permutation of Determinant Indices:

$\displaystyle \map \det {\mathbf A'} = \sum_\lambda \paren {\map \sgn \rho \map \sgn \lambda \prod_{k \mathop = 1}^n a_{\map \rho k \map \lambda k} }$
We can take $\map \sgn \rho = -1$ outside the summation because it is constant, and so we get:

$\displaystyle \map \det {\mathbf A'} = \map \sgn \rho \sum_\lambda \paren {\map \sgn \lambda \prod_{k \mathop = 1}^n a_{\map \rho k \map \lambda k} } = -\sum_\lambda \paren {\map \sgn \lambda \prod_{k \mathop = 1}^n a_{k \map \lambda k} }$
Hence the result.
$\blacksquare$





