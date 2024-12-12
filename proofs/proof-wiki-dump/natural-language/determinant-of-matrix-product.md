# 

Source: https://proofwiki.org/wiki/Determinant_of_Matrix_Product



Theorem
Let $\mathbf A = \sqbrk a_n$ and $\mathbf B = \sqbrk b_n$ be a square matrices of order $n$.
Let $\map \det {\mathbf A}$ be the determinant of $\mathbf A$.
Let $\mathbf A \mathbf B$ be the (conventional) matrix product of $\mathbf A$ and $\mathbf B$.

Then:

$\map \det {\mathbf A \mathbf B} = \map \det {\mathbf A} \map \det {\mathbf B}$

That is, the determinant of the product is equal to the product of the determinants.


General Case
Let $\mathbf A_1, \mathbf A_2, \cdots, \mathbf A_n$ be square matrices of order $n$, where $n > 1$.

Then:

$\map \det {\mathbf A_1 \mathbf A_2 \cdots \mathbf A_n} = \map \det {\mathbf A_1} \map \det {\mathbf A_2} \cdots \map \det {\mathbf A_n}$


Proof 1
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


Proof 2
Consider two cases:

$(1): \quad \mathbf A$ is singular.
$(2): \quad \mathbf A$ is nonsingular.


Proof of case $1$
Assume $\mathbf A$ is singular. 
Then:

$\map \det {\mathbf A} = 0$
Also if $\mathbf A$ is singular then so is $\mathbf A \mathbf B$.
Indeed, if $\mathbf A \mathbf B$ has an inverse $\mathbf C$, then:

$\mathbf A \mathbf B \mathbf C = \mathbf I$
whereby $\mathbf B \mathbf C$ is a right inverse of $\mathbf A$.
It follows by Left or Right Inverse of Matrix is Inverse that in that case $\mathbf B \mathbf C$ is the inverse of $A$.
It follows that:

$\map \det {\mathbf A \mathbf B} = 0$

Thus:

$0 = 0 \times \map \det {\mathbf B}$
that is:

$\map \det {\mathbf A \mathbf B} = \map \det {\mathbf A} \map \det {\mathbf B}$
$\Box$


Proof of case $2$
Assume $\mathbf A$ is nonsingular.
Then $\mathbf A$ is a product of elementary row matrices, $\mathbf E$.
Let $\mathbf A = \mathbf E_k \mathbf E_{k - 1} \cdots \mathbf E_1$.
So:

$\map \det {\mathbf A \mathbf B} = \map \det {\mathbf E_k \mathbf E_{k - 1} \cdots \mathbf E_1 \mathbf B}$

It remains to be shown that for any square matrix $\mathbf D$ of order $n$:

$\map \det {\mathbf E \mathbf D} = \map \det {\mathbf E} \map \det {\mathbf D}$

Let $e_i \paren {\mathbf I} = \mathbf E_i$ for all $i \in \closedint 1 k$.
Then:














\(\ds \map \det {\mathbf E \mathbf D}\)

\(=\)







\(\ds \map \det {\mathbf E_k \mathbf E_{k - 1} \dotsm \mathbf {E_1} \mathbf D}\)





Elementary Row Operations as Matrix Multiplications














\(\ds \)

\(=\)







\(\ds \map \det {e_k e_{k - 1} \cdots e_1 \paren {\mathbf D} }\)





Effect of Sequence of Elementary Row Operations on Determinant














\(\ds \)

\(=\)







\(\ds \alpha \map \det {\mathbf D}\)









and:














\(\ds \map \det {\mathbf E}\)

\(=\)







\(\ds \map \det {\mathbf E_k \mathbf E_{k - 1} \cdots \mathbf {E_1} \mathbf I}\)





Elementary Row Operations as Matrix Multiplications














\(\ds \)

\(=\)







\(\ds \map \det {e_k e_{k - 1} \cdots e_1 \paren {\mathbf I} }\)





Effect of Sequence of Elementary Row Operations on Determinant














\(\ds \)

\(=\)







\(\ds \alpha \map \det {\mathbf I}\)





Unit Matrix is Unity of Ring of Square Matrices




From Determinant of Unit Matrix:

$\map \det {\mathbf E} = \alpha$

Hence:

$\map \det {\mathbf E \mathbf D} = \map \det {\mathbf E} \map \det {\mathbf D}$
$\Box$

Therefore:

$\map \det {\mathbf A \mathbf B} = \map \det {\mathbf A} \map \det {\mathbf B}$
as required.
$\blacksquare$


Proof 3
The Cauchy-Binet Formula gives:

$\ds \map \det {\mathbf A \mathbf B} = \sum_{1 \mathop \le j_1 \mathop < j_2 \mathop < \cdots \mathop < j_m \le n} \map \det {\mathbf A_{j_1 j_2 \ldots j_m} } \map \det {\mathbf B_{j_1 j_2 \ldots j_m} }$
where:

$\mathbf A$ is an $m \times n$ matrix
$\mathbf B$ is an $n \times m$ matrix.
For $1 \le j_1, j_2, \ldots, j_m \le n$:
$\mathbf A_{j_1 j_2 \ldots j_m}$ denotes the $m \times m$ matrix consisting of columns $j_1, j_2, \ldots, j_m$ of $\mathbf A$.
$\mathbf B_{j_1 j_2 \ldots j_m}$ denotes the $m \times m$ matrix consisting of rows $j_1, j_2, \ldots, j_m$ of $\mathbf B$.
When $m = n$, the only set $j_1, j_2, \ldots, j_m$ that fulfils $1 \le j_1 < j_2 < \cdots < j_m \le n$ is $\set {1, 2, \ldots, n}$.
Hence the result.
$\blacksquare$


Proof 4
Remember that $\det$ can be interpreted as an alternating multilinear map with respect to the columns.
This property is sufficient to prove the theorem as follows.
Let $\mathbf A, \mathbf B$ be two $n \times n$ matrices (with coefficients in a commutative field $\mathbb K$ like $\mathbb R$ or $\mathbb C$).
Let us denote the vectors of the canonical basis of $\mathbb K^n$ by $\mathbf e_1, \ldots, \mathbf e_n$ (where $\mathbf e_i$ is a column with $1$ at $i$th row, zero elsewhere).
Now, we are able to write the matrix $\mathbf B$ as a column block matrix :

$\mathbf B = \begin {pmatrix} \ds \sum_{s_1 \mathop = 1}^n \mathbf B_{s_1, 1} \mathbf e_{s_1} & \cdots & \ds \sum_{s_n \mathop = 1}^n \mathbf B_{s_n, n} \mathbf e_{s_n} \end {pmatrix}$
We can rewrite the product $\mathbf A \mathbf B$ as a column-block matrix :

$\mathbf A \mathbf B = \begin {pmatrix} \ds \sum_{s_1 \mathop = 1}^n \mathbf B_{s_1, 1} \mathbf A \mathbf e_{s_1} & \cdots & \ds \sum_{s_n \mathop = 1}^n B_{s_n, n} \mathbf A \mathbf e_{s_n} \end {pmatrix} $
Using linearity with respect to each columns, we get:

$\map \det {\mathbf A \mathbf B} = \ds \sum_{1 \mathop \leqslant s_1, \ldots, s_n \mathop \leqslant n} \paren {\prod_{i \mathop = 1}^n \mathbf B_{s_i, i} } \det \begin {pmatrix} \mathbf A \mathbf e_{s_1} & \cdots & \mathbf A \mathbf e_{s_n} \end {pmatrix}$
Now notice that $\det \begin {pmatrix} \mathbf A \mathbf e_{s_1} & \cdots & \mathbf A \mathbf e_{s_n} \end{pmatrix}$ is zero once two entries are the same (since $\det$ is an alternating map), it means that if for some $k \ne \ell$ we have $\mathbf A \mathbf e_{s_k} = \mathbf A \mathbf e_{s_\ell}$, then $\det \begin {pmatrix} \mathbf A \mathbf e_{s_1} & \cdots & \mathbf A \mathbf e_{s_n} \end {pmatrix} = 0$.
Therefore the only nonzero summands are those one the $s_1, \ldots, s_n$ are all distinct.
In other words, the "selector" $s$ represents some permutation of the numbers $1, \ldots, n$.

As a result, the determinant of the product can now be expressed as a sum of precisely $n!$ terms using permutations:

$\map \det {\mathbf A \mathbf B} = \ds \sum_{\sigma \in S_n} \paren {\prod_{i \mathop = 1}^n B_{\map \sigma i, i} } \det \begin {pmatrix} \mathbf A \mathbf e_{\map \sigma 1} & \cdots & \mathbf A \mathbf e_{\map \sigma n} \end {pmatrix}$
where $S_n$ denotes the set of the permutations of numbers $1, \ldots, n$.
However, the right hand side determinant of the above equality corresponds to the determinant of permutated columns of $\mathbf A$.
Whenever we transpose two columns, the determinant is modified by a factor $-1$.
Indeed, let us apply some transposition $\tau_{i j}$ to a column-block matrix $\begin {pmatrix} \mathbf C_1 & \cdots & \mathbf C_n \end {pmatrix}$.
By linearity it follows that for $i, j$ entries equal to $\mathbf C_i + \mathbf C_j$:














\(\ds 0\)

\(=\)







\(\ds \det \begin {pmatrix} \mathbf C_1 \cdots \mathbf C_i + \mathbf C_j \cdots \mathbf C_j + \mathbf C_i \cdots \mathbf C_n \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \det \begin {pmatrix} \mathbf C_1 \cdots \mathbf C_i \cdots \mathbf C_j \cdots \mathbf C_n \end {pmatrix} + \det \begin {pmatrix} \mathbf C_1 \cdots \mathbf C_i \cdots \mathbf C_i \cdots \mathbf C_n \end {pmatrix}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \det \begin {pmatrix} \mathbf C_1 \cdots \mathbf C_j \cdots \mathbf C_j \cdots \mathbf C_n \end {pmatrix} + \det \begin {pmatrix} \mathbf C_1 \cdots \mathbf C_j \cdots \mathbf C_i \cdots \mathbf C_n \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \det \begin {pmatrix} \mathbf C_1 \cdots \mathbf C_i \cdots \mathbf C_j \cdots \mathbf C_n \end {pmatrix} + \det \begin {pmatrix} \mathbf C_1 \cdots \mathbf C_j \cdots \mathbf C_i \cdots \mathbf C_n \end {pmatrix}\)










Hence, transpose two columns reverse determinant sign:

$\det \begin {pmatrix} \mathbf C_1 \cdots \mathbf C_n \end {pmatrix} = -\det \begin {pmatrix} \mathbf C_{\map {\tau_{i j} } 1} \cdots \mathbf C_{\map {\tau_{i j} } n} \end {pmatrix}$
Since every permutation $\sigma \in S_n$ can be written as a product of transpositions, that is:

$\sigma = \tau_m \cdots \tau_1$
for some transpositions $\tau_1, \ldots, \tau_m$, it follows that:














\(\ds \map \det {\mathbf C_1 \cdots \mathbf C_n}\)

\(=\)







\(\ds -\map \det {\mathbf C_{\map {\tau_1} 1} \cdots \mathbf C_{\map {\tau_1} n} }\)




















\(\ds \)

\(=\)







\(\ds \map \det {\mathbf C_{\map {\tau_2 \tau_1} 1} \cdots \mathbf C_{\map {\tau_2 \tau_1} n} }\)




















\(\ds \)

\(=\)







\(\ds \cdots\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^m \map \det {\mathbf C_{\map \sigma 1} \cdots \mathbf C_{\map \sigma n} }\)









The number $\paren {-1}^m$ is the signature of the permutation $\sigma$ (see article about the signature of permutations) and denoted by $\map \sgn \sigma$.

It remains to apply several transpositions of columns to $\mathbf A$ to get for any permutation $\sigma$ the equality :

$\det \begin {pmatrix} \mathbf A \mathbf e_{\map \sigma 1} & \cdots & \mathbf A \mathbf e_{\map \sigma n} \end {pmatrix} = \map \sgn \sigma \det \begin {pmatrix} \mathbf A \mathbf e_1 & \cdots & \mathbf A \mathbf e_n \end {pmatrix} = \map \sgn \sigma \map \det {\mathbf A}$
Since $\map \det {\mathbf A}$ is a constant quantity, we can go this factor out of the sum, then write:

$\ds \map \det {\mathbf A \mathbf B} = \map \det {\mathbf A} \sum_{\sigma \mathop \in S_n} \map \sgn \sigma \prod_{i \mathop = 1}^n \mathbf B_{\map \sigma i, i}$
But the above sum is exactly the definition of $\map \det {\mathbf B}$ using the Leibniz formula, and so:

$\map \det {\mathbf A \mathbf B} = \map \det {\mathbf A} \map \det {\mathbf B}$
Hence the result.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): $\text{A}.2$: Linear algebra and determinants: Theorem $\text{A}.9 \ (1)$
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.6$ Determinant and trace: Fact $1.7 \ \text {(b)}$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): determinant
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): determinant
2008: David Joyner: Adventures in Group Theory (2nd ed.) ... (previous) ... (next): Chapter $2$: 'And you do addition?': $\S 2.2$: Functions on vectors: $\S 2.2.5$: Determinants: Lemma $2.2.2$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): determinant (iv)




