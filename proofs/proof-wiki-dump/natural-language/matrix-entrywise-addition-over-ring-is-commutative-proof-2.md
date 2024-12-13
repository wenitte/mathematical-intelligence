# 

Source: https://proofwiki.org/wiki/Matrix_Entrywise_Addition_over_Ring_is_Commutative/Proof_2

Theorem
Let $\struct {R, +, \circ}$ be a ring.
Let $\map {\MM_R} {m, n}$ be a $m \times n$ matrix space over $R$.
For $\mathbf A, \mathbf B \in \map {\MM_R} {m, n}$, let $\mathbf A + \mathbf B$ be defined as the matrix entrywise sum of $\mathbf A$ and $\mathbf B$.

The operation $+$ is commutative on $\map {\MM_R} {m, n}$.
That is:

$\mathbf A + \mathbf B = \mathbf B + \mathbf A$
for all $\mathbf A$ and $\mathbf B$ in $\map {\MM_R} {m, n}$.


Proof
By definition, matrix entrywise addition is the Hadamard product of $\mathbf A$ and $\mathbf B$ with respect to ring addition.
We have from Ring Axiom $\text A2$: Commutativity of Addition that ring addition is commutative.
The result then follows directly from Commutativity of Hadamard Product.
$\blacksquare$





