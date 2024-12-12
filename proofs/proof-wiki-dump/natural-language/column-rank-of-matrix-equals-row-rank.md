# 

Source: https://proofwiki.org/wiki/Column_Rank_of_Matrix_equals_Row_Rank



Theorem
Let $\mathbf A$ be a matrix.
The column rank of $\mathbf A$ is equal to the row rank of $\mathbf A$.


Proof
Proof Outline and Definitions
Recall:

The row rank of $\mathbf A$ is defined as the dimension of the row space.
The column rank of $\mathbf A$ is defined as the dimension of the column space.

Without loss of generality, we define the rank of $\mathbf A$ to be the column rank of $\mathbf A$.



This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: We announce and prove results like the following by means of a separate page dedicated to that result. Please review the design philosophy of $\mathsf{Pr} \infty \mathsf{fWiki}$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
Recall the definition of Transpose of Matrix:
Let $\mathbf A = \sqbrk \alpha_{m n}$ be an $m \times n$ matrix over a set.

Then the transpose of $\mathbf A$ is denoted $\mathbf A^\intercal$ and is defined as:

$\mathbf A^\intercal = \sqbrk \beta_{n m}: \forall i \in \closedint 1 n, j \in \closedint 1 m: \beta_{i j} = \alpha_{j i}$

That is, the columns of a matrix are the rows of its transpose and the rows of a matrix are the columns of its transpose.
Thus, Row Rank of Transpose is Column Rank and of course Column Rank of Transpose is Row Rank:

$\map r {\mathbf A} = \map c {\mathbf A^\intercal}$
$\map c {\mathbf A} = \map r {\mathbf A^\intercal}$
where $\map r {\mathbf A}$ and $\map c {\mathbf A}$ denote the row rank and column rank respectively.

Hence this result is equivalent to:

$\map c {\mathbf A} = \map c {\mathbf A^\intercal}$
where $\mathbf A^\intercal$ denotes the transpose of $\mathbf A$.


Proof using Orthogonality
Let $\map c {\mathbf A}$ denote the column rank of $\mathbf A$.
Let $\map r {\mathbf A}$ denote the row rank of $\mathbf A$.

Let $\mathbf A$ be an $m\times n$ matrix whose row rank is $r$.
Therefore, the dimension of the row space of $\mathbf A$ is $r$.
Let $\mathbf x_1, \ldots, \mathbf x_r$ be a basis of the row space of $\mathbf A$.
We claim that the vectors $\mathbf A \mathbf x_1, \ldots, \mathbf A \mathbf x_r$ are linearly independent.
To see why, consider the following linear combination of these vectors with scalar coefficients $c_1, \ldots, c_r$:

$\mathbf 0 = c_1 \mathbf A \mathbf x_1 + c_2 \mathbf A \mathbf x_2 + \cdots + c_r \mathbf A \mathbf x_r = \mathbf A \paren {c_1 \mathbf x_1 + c_2 \mathbf x_2 + \cdots + c_r \mathbf x_r} = \mathbf A \mathbf v$
where $\mathbf v = c_1 \mathbf x_1 + \cdots + c_r \mathbf x_r$.
We make two observations:

$(\text a) \mathbf v$ is a linear combination of vectors in the row space of $\mathbf A$, which implies that $\mathbf v$ belongs to the row space of $\mathbf A$
$(\text b)$ since $\mathbf A \mathbf v = \mathbf 0$, the vector $\mathbf v$ is orthogonal to every row vector of $\mathbf A$ and, hence, is orthogonal to every vector in the row space of $\mathbf A$.
The facts $(\text a)$ and $(\text b)$ together imply that $\mathbf v$ is orthogonal to itself, which proves that $\mathbf v = \mathbf 0$.
Therefore:

$c_1 \mathbf x_1 + c_2 \mathbf x_2 + \cdots + c_r \mathbf x_r = \mathbf 0$
But recall that $\mathbf x_1, \ldots, \mathbf x_r$ were chosen as a basis of the row space of $\mathbf A$ and so are linearly independent.
This implies that

$c_1 = \cdots = c_r = 0$
It follows that $\mathbf A \mathbf x_1,\ldots, \mathbf A \mathbf x_r$ are linearly independent.

Now, $\mathbf A \mathbf x_1, \ldots, \mathbf A \mathbf x_r$ are vectors in the column space of $\mathbf A$.
From the above argument, they are also $r$ linearly independent vectors in the column space of $\mathbf A$.
Therefore, the dimension of the column space of $\mathbf A$ (that is, the column rank of $\mathbf A$) must be at least as big as $r$.
This proves that $\map r {\mathbf A} \le \map c {\mathbf A}$, that is, row rank of $\mathbf A$ is no larger than the column rank of $\mathbf A$.
This result applies to any matrix $\mathbf{A}$.
So, we can apply this result to the transpose of $\mathbf A$ to get the reverse inequality:

$\map r {\mathbf A^\intercal} \le \map c {\mathbf A^\intercal}$
Combining these inequalities, we conclude that row rank equals column rank as follows:

$\map r {\mathbf A} \le \map c {\mathbf A} = \map r {\mathbf A^\intercal} \le \map c {\mathbf A^\intercal} = \map r {\mathbf A}$
$\blacksquare$


Proof using Rank Factorization
Let $\map c {\mathbf A}$ denote the column rank of $\mathbf A$.
Let $\map r {\mathbf A}$ denote the row rank of $\mathbf A$.

Let $\mathbf A$ be an $m \times n$ matrix whose column rank is $r$.
Therefore, the dimension of the column space of $\mathbf A$ is $r$.
Let $\mathbf c_1, \ldots, \mathbf c_r$ be any basis for the column space of $\mathbf A$.
Place these vectors as column vectors to form the $m \times r$ matrix $\mathbf C = \begin {bmatrix} \mathbf c_1 & \mathbf c_2 & \cdots & \mathbf c_r \end{bmatrix}$.
Therefore, every column vector of $\mathbf A$ is a linear combination of the columns of $\mathbf C$.
To be precise, if $\mathbf A = \begin {bmatrix} \mathbf a_1 & \mathbf a_2 & \cdots & \mathbf a_n \end {bmatrix}$ is an $m \times n$ matrix with $\mathbf a_j$ as the $j$-th column, then: 

$\mathbf a_j = f_{1j} \mathbf c_1 + f_{2j} \mathbf c_2 + \cdots + f_{rj} \mathbf c_r \text { for } j = 1, \ldots, n$
where $f_{ij}$ are the scalar coefficients of $\mathbf a_j$ in terms of the basis $\mathbf c_1, \mathbf c_2, \ldots, \mathbf c_r$.
This implies that:

$\mathbf A = \mathbf C \mathbf F$
where $f_{ij}$ is the $\tuple {i, j}$th element of $\mathbf F$. 
Using transposition of products, we note that $\mathbf A^\intercal = \mathbf F^\intercal \mathbf C^\intercal$.
From the definition of matrix multiplication, this means that each column of $\mathbf A^\intercal$ is a linear combination of the columns of $\mathbf F^\intercal$.
Therefore, the column space of $\mathbf A^\intercal$ is a subspace of the column space of $\mathbf F^\intercal$.
Hence:

$\map c {\mathbf A^\intercal} \le \map c {\mathbf F^\intercal}$
Now, $\mathbf F^\intercal$ is $n \times r$
Thus there are $r$ columns in $\mathbf F^\intercal$.
Hence:

$\map c {\mathbf A^\intercal} \le r = \map c {\mathbf A}$
This proves that $\map c {\mathbf A^\intercal} \le \map c {\mathbf A}$.

Now apply the result to the matrix $\mathbf A^\intercal$ to obtain the reverse inequality:
Since $\paren {\mathbf A^\intercal}^\intercal = \mathbf A$, we can write:

$\map c {\mathbf A} = \map c {\paren {\mathbf A^\intercal}^\intercal} \le \map c {\mathbf A^\intercal}$
This proves $\map c {\mathbf A} \le \map c {\mathbf A^\intercal}$.
We have, therefore, proved:

$\map c {\mathbf A^\intercal} \le \map c {\mathbf A}$
and the reverse inequality:

$\map c {\mathbf A} \le \map c {\mathbf A^\intercal}$
Therefore:

$\map c {\mathbf A} = \map c {\mathbf A^\intercal}$
$\blacksquare$


Also see
Definition:Rank of Matrix: what this number is called


Sources
1995: George Mackiw: A Note on the Equality of the Column and Row Rank of a Matrix (Math. Mag. Vol. 68, no. 4: pp. 285 – 286)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): column rank
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): row rank
2014: Sudipto Banerjee and Anindya Roy: Linear Algebra and Matrix Analysis for Statistics




