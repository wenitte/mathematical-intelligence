# 

Source: https://proofwiki.org/wiki/Matrix_Entrywise_Addition_over_Ring_is_Closed

Theorem
Let $\struct {R, +, \circ}$ be a ring.
Let $\map {\MM_R} {m, n}$ be a $m \times n$ matrix space over $R$.
For $\mathbf A, \mathbf B \in \map {\MM_R} {m, n}$, let $\mathbf A + \mathbf B$ be defined as the matrix entrywise sum of $\mathbf A$ and $\mathbf B$.

The operation $+$ is closed on $\map {\MM_R} {m, n}$.

That is:

$\mathbf A + \mathbf B \in \map {\MM_R} {m, n}$
for all $\mathbf A$ and $\mathbf B$ in $\map {\MM_R} {m, n}$.


Proof 1
Let $\mathbf A = \sqbrk a_{m n}$ and $\mathbf B = \sqbrk b_{m n}$ be elements of $\map {\MM_R} {m, n}$.
Let $\sqbrk c_{m n} = \sqbrk a_{m n} + \sqbrk b_{m n}$.
By definition of matrix entrywise addition:

$\forall i \in \closedint 1 m, j \in \closedint 1 n: a_{i j} + b_{i j} = c_{i j}$
By Ring Axiom $\text A0$: Closure under Addition, $R$ is closed under addition.
Hence:

$\forall i \in \closedint 1 m, j \in \closedint 1 n: c_{i j} \in R$
From the definition of matrix entrywise addition, $\sqbrk c_{m n}$ has the same order as both $\sqbrk a_{m n}$ and $\sqbrk b_{m n}$.
Thus it follows that:

$\sqbrk c_{m n} \in \map {\MM_R} {m, n}$
Thus $\struct {\map {\MM_R} {m, n}, +}$, as it is defined, is closed.
$\blacksquare$


Proof 2
By definition, matrix entrywise addition is the Hadamard product of $\mathbf A$ and $\mathbf B$ with respect to ring addition.
We have from Ring Axiom $\text A0$: Closure under Addition that ring addition is closed.
The result then follows directly from Closure of Hadamard Product.
$\blacksquare$





