# 

Source: https://proofwiki.org/wiki/Determinant_of_Matrix_Product/Proof_1

Theorem
Let $\mathbf A = \sqbrk a_n$ and $\mathbf B = \sqbrk b_n$ be a square matrices of order $n$.
Let $\map \det {\mathbf A}$ be the determinant of $\mathbf A$.
Let $\mathbf A \mathbf B$ be the (conventional) matrix product of $\mathbf A$ and $\mathbf B$.

Then:

$\map \det {\mathbf A \mathbf B} = \map \det {\mathbf A} \map \det {\mathbf B}$

That is, the determinant of the product is equal to the product of the determinants.


Proof
This proof assumes that $\mathbf A$ and $\mathbf B$ are $n \times n$-matrices over a commutative ring with unity $\struct {R, +, \circ}$.

Let $\mathbf C = \sqbrk c_n = \mathbf A \mathbf B$.
From Square Matrix is Row Equivalent to Triangular Matrix, it follows that $\mathbf A$ can be converted into a upper triangular matrix $\mathbf A'$ by a finite sequence of elementary row operations $\hat o_1, \ldots, \hat o_{m'}$.
Let $\mathbf C'$ denote the matrix that results from using $\hat o_1, \ldots, \hat o_{m'}$ on $\mathbf C$.
From Elementary Row Operations Commute with Matrix Multiplication, it follows that $\mathbf C' = \mathbf A' \mathbf B$.
Effect of Sequence of Elementary Row Operations on Determinant shows that there exists $\alpha \in R$ such that:

$\alpha \map \det {\mathbf A'} = \map \det {\mathbf A}$
$\alpha \map \det {\mathbf C'} = \map \det {\mathbf C}$

Let $\mathbf B^\intercal$ be the transpose of $B$.
From Transpose of Matrix Product, it follows that:

$\paren {\mathbf C'}^\intercal = \paren {\mathbf A' \mathbf B}^\intercal = \mathbf B^\intercal \paren {\mathbf A'}^\intercal$
From Square Matrix is Row Equivalent to Triangular Matrix, it follows that $\mathbf B^\intercal$ can be converted into a lower triangular matrix $\paren {\mathbf B^\intercal}'$ by a finite sequence of elementary row operations $\hat p_1, \ldots, \hat p_{m' '}$.
Let $\mathbf C' '$ denote the matrix that results from using $\hat p_1, \ldots, \hat p_{m' '}$ on $\paren {\mathbf C'}^\intercal$.
From Elementary Row Operations Commute with Matrix Multiplication, it follows that:

$\mathbf C' ' = \paren {\mathbf B^\intercal}' \paren {\mathbf A'}^\intercal$
Effect of Sequence of Elementary Row Operations on Determinant shows that there exists $\beta \in R$ such that:

$\beta \map \det {\paren {\mathbf B^\intercal}'} = \map \det {\mathbf B^\intercal}$
$\beta \map \det {\mathbf C' '} = \map \det {\paren {\mathbf C'}^\intercal}$

From Transpose of Upper Triangular Matrix is Lower Triangular, it follows that $\paren {\mathbf A'}^\intercal$ is a lower triangular matrix.
Then Product of Triangular Matrices shows that $\paren {\mathbf B^\intercal}' \paren {\mathbf A'}^\intercal$ is a lower triangular matrix whose diagonal elements are the products of the diagonal elements of $\paren {\mathbf B^\intercal}'$ and $\paren {\mathbf A'}^\intercal$.
From Determinant of Triangular Matrix, we have that $\map \det {\paren {\mathbf A'}^\intercal}$, $\map \det {\paren {\mathbf B^\intercal}' }$, and $\map \det {\paren {\mathbf B^\intercal}' \paren {\mathbf A'}^\intercal}$ are equal to the product of their diagonal elements.
Combinining these results shows that:

$\map \det {\paren {\mathbf B^\intercal}' \paren {\mathbf A'}^\intercal} = \map \det {\paren {\mathbf B^\intercal}'} \map \det {\paren {\mathbf A'}^\intercal}$

Then:














\(\ds \map \det {\mathbf C}\)

\(=\)







\(\ds \alpha \map \det {\mathbf C'}\)




















\(\ds \)

\(=\)







\(\ds \alpha \map \det {\paren {\mathbf C'}^\intercal}\)





Determinant of Transpose














\(\ds \)

\(=\)







\(\ds \alpha \beta \map \det {\mathbf C' '}\)




















\(\ds \)

\(=\)







\(\ds \alpha \beta \map \det {\paren {\mathbf B^\intercal}' \paren {\mathbf A'}^\intercal}\)




















\(\ds \)

\(=\)







\(\ds \alpha \beta \map \det {\paren {\mathbf B^\intercal}' } \map \det {\paren {\mathbf A'}^\intercal}\)




















\(\ds \)

\(=\)







\(\ds \alpha \map \det {\paren {\mathbf A'}^\intercal} \beta \map \det {\paren {\mathbf B^\intercal}' }\)





Commutativity of Ring Product in $R$














\(\ds \)

\(=\)







\(\ds \alpha \map \det {\mathbf A'} \map \det {\mathbf B^\intercal}\)





Determinant of Transpose














\(\ds \)

\(=\)







\(\ds \map \det {\mathbf A} \map \det {\mathbf B}\)





Determinant of Transpose



$\blacksquare$





