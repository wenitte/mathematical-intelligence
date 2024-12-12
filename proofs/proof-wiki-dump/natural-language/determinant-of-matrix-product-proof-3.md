# 

Source: https://proofwiki.org/wiki/Determinant_of_Matrix_Product/Proof_3

Theorem
Let $\mathbf A = \sqbrk a_n$ and $\mathbf B = \sqbrk b_n$ be a square matrices of order $n$.
Let $\map \det {\mathbf A}$ be the determinant of $\mathbf A$.
Let $\mathbf A \mathbf B$ be the (conventional) matrix product of $\mathbf A$ and $\mathbf B$.

Then:

$\map \det {\mathbf A \mathbf B} = \map \det {\mathbf A} \map \det {\mathbf B}$

That is, the determinant of the product is equal to the product of the determinants.


Proof
The Cauchy-Binet Formula gives:

$\ds \map \det {\mathbf A \mathbf B} = \sum_{1 \mathop \le j_1 \mathop < j_2 \mathop < \cdots \mathop < j_m \le n} \map \det {\mathbf A_{j_1 j_2 \ldots j_m} } \map \det {\mathbf B_{j_1 j_2 \ldots j_m} }$
where:

$\mathbf A$ is an $m \times n$ matrix
$\mathbf B$ is an $n \times m$ matrix.
For $1 \le j_1, j_2, \ldots, j_m \le n$:
$\mathbf A_{j_1 j_2 \ldots j_m}$ denotes the $m \times m$ matrix consisting of columns $j_1, j_2, \ldots, j_m$ of $\mathbf A$.
$\mathbf B_{j_1 j_2 \ldots j_m}$ denotes the $m \times m$ matrix consisting of rows $j_1, j_2, \ldots, j_m$ of $\mathbf B$.
When $m = n$, the only set $j_1, j_2, \ldots, j_m$ that fulfils $1 \le j_1 < j_2 < \cdots < j_m \le n$ is $\set {1, 2, \ldots, n}$.
Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $46 \ \text{(i)}$




