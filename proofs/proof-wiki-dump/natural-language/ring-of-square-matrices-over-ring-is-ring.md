# 

Source: https://proofwiki.org/wiki/Ring_of_Square_Matrices_over_Ring_is_Ring



Theorem
Let $R$ be a ring.
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $\struct {\map {\MM_R} n, +, \times}$ denote the ring of square matrices of order $n$ over $R$.

Then $\struct {\map {\MM_R} n, +, \times}$ is a ring.


Proof
From Matrix Entrywise Addition forms Abelian Group we have that $\struct {\map {\MM_R} n, +}$ is an abelian group, because $\struct {R, +}$ is itself an abelian group.
Similarly, it is clear that $\struct {\map {\MM_R} n, \times}$ is a semigroup, as Matrix Multiplication over Order n Square Matrices is Closed and Matrix Multiplication is Associative.
Finally, we note that Matrix Multiplication Distributes over Matrix Addition.
$\blacksquare$


Notation
When referring to the operation of matrix multiplication in the context of the ring of square matrices:

$\struct {\map {\MM_R} n, +, \times}$
we must have some symbol to represent it, and $\times$ does as well as any.
However, we do not use $\mathbf A \times \mathbf B$ for matrix multiplication $\mathbf A \mathbf B$, as it is understood to mean the vector cross product, which is something completely different.


Sources
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 1$. Rings and Fields: Example $3$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 29$. Matrices




