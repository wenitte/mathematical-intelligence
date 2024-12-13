# 

Source: https://proofwiki.org/wiki/Matrix_Multiplication_on_Square_Matrices_over_Trivial_Ring_is_Commutative

Theorem
Let $\struct {R, +, \circ}$ be the trivial ring over an underlying set.
Let $\map {\MM_R} n$ denote the $n \times n$ matrix space over $R$.

Then (conventional) matrix multiplication is commutative over $\map {\MM_R} n$:

$\forall \mathbf A, \mathbf B \in \map {\MM_R} n: \mathbf {A B} = \mathbf {B A}$


Proof
Let $\mathbf A = \sqbrk a_n$ and $\mathbf B = \sqbrk b_n$ be order $n$ square matrices over $R$.

By definition of matrix multiplication, $\mathbf A \mathbf B = \mathbf C = \sqbrk c_n$ where:

$\ds \forall i \in \closedint 1 n, j \in \closedint 1 n: c_{i j} = \sum_{k \mathop = 1}^n a_{i k} \circ b_{k j}$

But by definition of the trivial ring:

$\forall a, b \in R: a \circ b = 0_R$
where $0_R$ is the zero of $R$.
Thus $\mathbf A \mathbf B$ is the zero $n \times n$ matrix.

The same applies to $\mathbf B \mathbf A$, which is also the zero $n \times n$ matrix.
That is:

$\mathbf A \mathbf B = \mathbf B \mathbf A = \bszero_n$
and the result follows by definition of commutative operation.
$\blacksquare$





