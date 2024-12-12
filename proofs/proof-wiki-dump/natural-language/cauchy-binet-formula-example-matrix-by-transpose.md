# 

Source: https://proofwiki.org/wiki/Cauchy-Binet_Formula/Example/Matrix_by_Transpose

Theorem
Let $\mathbf A$ be an $m \times n$ matrix.
Let $\mathbf A^\intercal$ be the transpose $\mathbf A$.
Let $1 \le j_1, j_2, \ldots, j_m \le n$.
Let $\mathbf A_{j_1 j_2 \ldots j_m}$ denote the $m \times m$ matrix consisting of columns $j_1, j_2, \ldots, j_m$ of $\mathbf A$.
Let $\mathbf A^\intercal_{j_1 j_2 \ldots j_m}$ denote the $m \times m$ matrix consisting of rows $j_1, j_2, \ldots, j_m$ of $\mathbf A^\intercal$.

Then:

$\ds \map \det {\mathbf A \mathbf A^\intercal} = \sum_{1 \mathop \le j_1 \mathop < j_2 \mathop < \cdots \mathop < j_m \le n} \paren {\map \det {\mathbf A_{j_1 j_2 \ldots j_m} } }^2$
where $\det$ denotes the determinant.


Proof
The Cauchy-Binet Formula gives:

$\ds \map \det {\mathbf A \mathbf B} = \sum_{1 \mathop \le j_1 \mathop < j_2 \mathop < \cdots \mathop < j_m \le n} \map \det {\mathbf A_{j_1 j_2 \ldots j_m} } \map \det {\mathbf B_{j_1 j_2 \ldots j_m} }$
where:

$\mathbf A$ is an $m \times n$ matrix
$\mathbf B$ is an $n \times m$ matrix.
For $1 \le j_1, j_2, \ldots, j_m \le n$:
$\mathbf A_{j_1 j_2 \ldots j_m}$ denotes the $m \times m$ matrix consisting of columns $j_1, j_2, \ldots, j_m$ of $\mathbf A$.
$\mathbf B_{j_1 j_2 \ldots j_m}$ denotes the $m \times m$ matrix consisting of rows $j_1, j_2, \ldots, j_m$ of $\mathbf B$.

From the definition of transpose $\mathbf A^\intercal$ is an $n \times m$ matrix.
Hence the Cauchy-Binet Formula can be applied directly:

$\ds \map \det {\mathbf A \mathbf A^\intercal} = \sum_{1 \mathop \le j_1 \mathop < j_2 \mathop < \cdots \mathop < j_m \le n} \map \det {\mathbf A_{j_1 j_2 \ldots j_m} } \map \det {\mathbf A^\intercal_{j_1 j_2 \ldots j_m} }$

Note that by construction:

$\mathbf A_{j_1 j_2 \ldots j_m}$ is a square matrix
Also, by definition of transpose:

$\mathbf A^\intercal_{j_1 j_2 \ldots j_m} = \paren {\mathbf A_{j_1 j_2 \ldots j_m} }^\intercal$
The result follows from Determinant of Transpose:

$\map \det {\mathbf A} = \map \det {\mathbf A^\intercal}$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $46 \ \text{(iii)}$




