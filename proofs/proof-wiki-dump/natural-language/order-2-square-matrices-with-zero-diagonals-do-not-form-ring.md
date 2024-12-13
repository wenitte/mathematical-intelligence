# 

Source: https://proofwiki.org/wiki/Order_2_Square_Matrices_with_Zero_Diagonals_do_not_form_Ring

Theorem
Let $S$ be the set of square matrices of order $2$ whose diagonal elements are zero.

Then the algebraic structure $\struct {S, +, \times}$ is not a ring.

Note that $\times$ denotes conventional matrix multiplication.


Proof
For $\struct {S, +, \times}$ to be a ring, it is a necessary condition that $\struct {S, \times}$ is a semigroup.
For $\struct {S, \times}$ to be a semigroup, it is a necessary condition that $\struct {S, \times}$ is closed.
That is:

$\forall x, y \in S: x \times y \in S$

Let $x = \begin {pmatrix} 0 & 1 \\ 1 & 0 \end {pmatrix}$ and $y = \begin {pmatrix} 0 & 2 \\ 2 & 0 \end {pmatrix}$.
Both $x$ and $y$ are in $S$, as both are square matrices of order $2$ whose diagonal elements are zero.
But then:

$x y = \begin {pmatrix} 0 & 1 \\ 1 & 0 \end {pmatrix} \begin {pmatrix} 0 & 2 \\ 2 & 0 \end {pmatrix} = \begin {pmatrix} 2 & 0 \\ 0 & 2 \end {pmatrix}$
which is a square matrix of order $2$ whose diagonal elements are not zero.
Hence $x y \notin S$ and so $\struct {S, \times}$ is not closed.
The result follows.
$\blacksquare$


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): Chapter $1$: Rings - Definitions and Examples: $2$: Some examples of rings: Some 'non-examples': $\text {(c)}$




