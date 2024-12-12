# 

Source: https://proofwiki.org/wiki/Cauchy-Binet_Formula/Example/m_greater_than_n

Theorem
Let $\mathbf A$ be an $m \times n$ matrix.
Let $\mathbf B$ be an $n \times m$ matrix.
Let $m > n$.
Then:

$\map \det {\mathbf A \mathbf B} = 0$


Proof
The Cauchy-Binet Formula gives:

$(1): \quad \ds \map \det {\mathbf A \mathbf B} = \sum_{1 \mathop \le j_1 \mathop < j_2 \mathop < \cdots \mathop < j_m \le n} \map \det {\mathbf A_{j_1 j_2 \ldots j_m} } \map \det {\mathbf B_{j_1 j_2 \ldots j_m} }$
where:

$\mathbf A$ is an $m \times n$ matrix
$\mathbf B$ is an $n \times m$ matrix.
For $1 \le j_1, j_2, \ldots, j_m \le n$:
$\mathbf A_{j_1 j_2 \ldots j_m}$ denotes the $m \times m$ matrix consisting of columns $j_1, j_2, \ldots, j_m$ of $\mathbf A$.
$\mathbf B_{j_1 j_2 \ldots j_m}$ denotes the $m \times m$ matrix consisting of rows $j_1, j_2, \ldots, j_m$ of $\mathbf B$.

But here $m > n$.
Therefore the set $\set {j_1, j_2, \ldots, j_m}$ such that:

$1 \mathop \le j_1 \mathop < j_2 \mathop < \cdots \mathop < j_m \le n$
is the empty set.
Thus the right hand side of $(1)$ is a vacuous summation.
Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $46 \ \text{(iv)}$




