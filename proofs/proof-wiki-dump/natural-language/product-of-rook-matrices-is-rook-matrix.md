# 

Source: https://proofwiki.org/wiki/Product_of_Rook_Matrices_is_Rook_Matrix

Theorem
Let $\mathbf A$ and $\mathbf B$ be rook matrices.

Their product $\mathbf {A B}$ is also a rook matrix.


Proof
An element $a b_{ij}$ of $\mathbf {A B}$ is formed by multiplying each element of row $i$ of $\mathbf A$ by its corresponding element of column $j$ of $\mathbf B$.
No more than $1$ element of row $i$ equals $1$, and the rest equal $0$.
No more than $1$ column $k$ of $\mathbf B$ contains $1$ in its $i$th element, and the rest contain $0$.
So of all the elements of row $i$ of $\mathbf {A B}$, only $a b_{ik}$ is $1$, and the rest are $0$.
By the same argument, each row of $\mathbf {A B}$ contains no more than one $1$, and all the rest of the elements are $0$.

In $\mathbf B$, each column $j$ has no more than one element equal to $1$, and all are in a different row $k$.
Thus each row contains its $1$, if it has one, in a different column from all the other rows.
So there is no more than one $1$ in each column of $\mathbf {A B}$.

Hence the result by definition of rook matrix.
$\blacksquare$


Sources
2008: David Joyner: Adventures in Group Theory (2nd ed.) ... (previous) ... (next): Chapter $2$: 'And you do addition?': $\S 2.2$: Functions on vectors: $\S 2.2.4$: Multiplication and inverses: Ponderable $2.2.2 \ \text{(b)}$




