# 

Source: https://proofwiki.org/wiki/Inverse_of_Square_Matrix_over_Field_is_Unique

Theorem
Let $\Bbb F$ be a field, usually one of the standard number fields $\Q$, $\R$ or $\C$.
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $\map \MM n$ denote the matrix space of order $n$ square matrices over $\Bbb F$.

Let $\mathbf B$ be an inverse matrix of $\mathbf A$.

Then $\mathbf B$ is the only inverse matrix of $\mathbf A$.


Proof
Consider the algebraic structure $\struct {\map \MM {m, n}, +, \circ}$, where:

$+$ denotes matrix entrywise addition
$\circ$ denotes (conventional) matrix multiplication.
From Ring of Square Matrices over Field is Ring with Unity, $\struct {\map \MM {m, n}, +, \circ}$ is a ring with unity.
Hence a fortiori $\struct {\map \MM {m, n}, +, \circ}$ is a monoid.
The result follows directly from Inverse in Monoid is Unique.
$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.3$ The inverse of a matrix: Fact $1.1$




