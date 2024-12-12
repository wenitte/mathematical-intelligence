# 

Source: https://proofwiki.org/wiki/Column_Rank_of_Matrix_equals_Row_Rank/Proof_using_Orthogonality

Theorem
Let $\mathbf A$ be a matrix.
The column rank of $\mathbf A$ is equal to the row rank of $\mathbf A$.


Proof

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

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


Sources
1995: George Mackiw: A Note on the Equality of the Column and Row Rank of a Matrix (Math. Mag. Vol. 68, no. 4: pp. 285 – 286)




