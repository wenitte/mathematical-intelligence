# 

Source: https://proofwiki.org/wiki/Determinant_with_Rows_Transposed



Theorem
If two rows of a matrix with determinant $D$ are transposed, its determinant becomes $-D$.


Proof 1
Let $\mathbf A = \sqbrk a_n$ be a square matrix of order $n$.
Let $1 \le r < s \le n$.
Let $e$ be the elementary row operation that exchanging rows $r$ and $s$.
Let $\mathbf B = \map e {\mathbf A}$.
Let $\mathbf E$ be the elementary row matrix corresponding to $e$.
From Elementary Row Operations as Matrix Multiplications:

$\mathbf B = \mathbf E \mathbf A$
From Determinant of Elementary Row Matrix: Exchange Rows:

$\map \det {\mathbf E} = -1$
Then:














\(\ds \map \det {\mathbf B}\)

\(=\)







\(\ds \map \det {\mathbf E \mathbf A}\)





Determinant of Matrix Product














\(\ds \)

\(=\)







\(\ds -\map \det {\mathbf A}\)





as $\map \det {\mathbf E} = -1$



Hence the result.
$\blacksquare$


Proof 2
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


Also see
Determinant with Columns Transposed


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): determinant (1)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): determinant (1)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): determinant (ii)




