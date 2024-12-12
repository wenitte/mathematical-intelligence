# 

Source: https://proofwiki.org/wiki/Cauchy-Binet_Formula/Example/m_equals_1

Theorem
Let $\mathbf A = \sqbrk a_{1 n}$ be a row matrix with $n$ columns.
and $\mathbf B = \sqbrk b_{n 1}$ be a column matrix with $n$ rows.
Let $\mathbf A \mathbf B$ be the (conventional) matrix product of $\mathbf A$ and $\mathbf B$.

Then:

$\ds \map \det {\mathbf A \mathbf B} = \sum_{j \mathop = 1}^n a_j b_j$
where:

$a_j$ is element $a_{1 j}$ of $\mathbf A$
$b_j$ is element $b_{j 1}$ of $\mathbf B$.


Proof
The Cauchy-Binet Formula gives:

$\ds \map \det {\mathbf A \mathbf B} = \sum_{1 \mathop \le j_1 \mathop < j_2 \mathop < \cdots \mathop < j_m \mathop \le n} \map \det {\mathbf A_{j_1 j_2 \ldots j_m} } \map \det {\mathbf B_{j_1 j_2 \ldots j_m} }$
where:

$\mathbf A$ is an $m \times n$ matrix
$\mathbf B$ is an $n \times m$ matrix.
For $1 \le j_1, j_2, \ldots, j_m \le n$:
$\mathbf A_{j_1 j_2 \ldots j_m}$ denotes the $m \times m$ matrix consisting of columns $j_1, j_2, \ldots, j_m$ of $\mathbf A$.
$\mathbf B_{j_1 j_2 \ldots j_m}$ denotes the $m \times m$ matrix consisting of rows $j_1, j_2, \ldots, j_m$ of $\mathbf B$.
When $m = 1$, the relation:

$1 \le j_1 < j_2 < \cdots < j_m \le n$
degenerates to:

$1 \le j \le n$
By definition of order $1$ determinant:

$\det \sqbrk {a_j} = a_j$
$\det \sqbrk {b_j} = b_j$
Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $46 \ \text{(ii)}$




