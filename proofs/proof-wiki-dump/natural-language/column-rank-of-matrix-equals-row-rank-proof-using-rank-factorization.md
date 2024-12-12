# 

Source: https://proofwiki.org/wiki/Column_Rank_of_Matrix_equals_Row_Rank/Proof_using_Rank_Factorization

Theorem
Let $\mathbf A$ be a matrix.
The column rank of $\mathbf A$ is equal to the row rank of $\mathbf A$.


Proof

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

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


Sources

This needs considerable tedious hard slog to complete it.In particular: Add the chapter and section reference for thisTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
2014: Sudipto Banerjee and Anindya Roy: Linear Algebra and Matrix Analysis for Statistics




