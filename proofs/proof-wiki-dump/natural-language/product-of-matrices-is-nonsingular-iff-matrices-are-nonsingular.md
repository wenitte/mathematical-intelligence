# 

Source: https://proofwiki.org/wiki/Product_of_Matrices_is_Nonsingular_iff_Matrices_are_Nonsingular



Theorem
Let $\mathbf A$ and $\mathbf B$ be square matrices of order $n$.
Let $\mathbf A \mathbf B$ denote the matrix product of $\mathbf A$ and $\mathbf B$.
Let $\mathbf I$ be the $n \times n$ unit matrix.

Then:

$\mathbf A \mathbf B$ is nonsingular
if and only if

both $\mathbf A$ and $\mathbf B$ are nonsingular.


Proof
Necessary Condition
Let both $\mathbf A$ and $\mathbf B$ be nonsingular.
By Matrix is Nonsingular iff Determinant has Multiplicative Inverse:

$\map \det {\mathbf A} \ne 0$ and $\map \det {\mathbf B} \ne 0$
where $\map \det {\mathbf A}$ denotes the determinant of $\mathbf A$.
By Determinant of Matrix Product:

$\map \det {\mathbf A} \map \det {\mathbf B} = \map \det {\mathbf A \mathbf B}$
Thus as both $\map \det {\mathbf A} \ne 0$ and $\map \det {\mathbf B} \ne 0$, it follows that:

$\map \det {\mathbf A \mathbf B} \ne 0$
Hence by Matrix is Nonsingular iff Determinant has Multiplicative Inverse, $\mathbf A \mathbf B$ is nonsingular.


Sufficient Condition
Let $\mathbf A \mathbf B$ be nonsingular.
Aiming for a contradiction, suppose it is not the case that both $\mathbf A$ and $\mathbf B$ are nonsingular.
Then by Matrix is Nonsingular iff Determinant has Multiplicative Inverse, either:

$\map \det {\mathbf A} = 0$
or:

$\map \det {\mathbf B} = 0$
By Determinant of Matrix Product:

$\map \det {\mathbf A} \map \det {\mathbf B} = \map \det {\mathbf A \mathbf B}$
and so:

$\map \det {\mathbf A \mathbf B} = 0$
Hence by Matrix is Nonsingular iff Determinant has Multiplicative Inverse, $\mathbf A \mathbf B$ is not nonsingular.
This contradicts the assumption that $\mathbf A \mathbf B$ is nonsingular.
Hence by Proof by Contradiction it follows that both $\mathbf A$ and $\mathbf B$ are nonsingular.
$\blacksquare$


Also see
Inverse of Matrix Product


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.3$ The inverse of a matrix: Proposition $1.2$




