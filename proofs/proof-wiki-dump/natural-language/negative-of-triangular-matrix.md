# 

Source: https://proofwiki.org/wiki/Negative_of_Triangular_Matrix

Theorem
Let $\mathbf A = \sqbrk a_n$ be a square matrix of order $n$.
Let $-\mathbf A$ be the negative of $\mathbf A$.

If $\mathbf A$ is an upper triangular matrix, then so is $-\mathbf A$.
If $\mathbf A$ is a lower triangular matrix, then so is $-\mathbf A$.


Proof
From the definition of negative matrix, we have:

$\forall i, j \in \closedint 1 n: \sqbrk {-a}_{i j} = -a_{i j}$

If $\mathbf A$ is an upper triangular matrix, we have:

$\forall i > j: a_{i j} = 0$
Hence:

$\forall i > j: \sqbrk {-a}_{i j} = -a_{i j} = 0$
and so $-\mathbf A$ is itself upper triangular.

Similarly, if $\mathbf A$ is a lower triangular matrix, we have:

$\forall i < j: a_{i j} = 0$
Hence:

$\forall i < j: \sqbrk {-a}_{i j} = -a_{i j} = 0$
and so $-\mathbf A$ is itself lower triangular.
$\blacksquare$





