# 

Source: https://proofwiki.org/wiki/Determinant_of_Matrix_Product/Proof_4


This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\mathbf A = \sqbrk a_n$ and $\mathbf B = \sqbrk b_n$ be a square matrices of order $n$.
Let $\map \det {\mathbf A}$ be the determinant of $\mathbf A$.
Let $\mathbf A \mathbf B$ be the (conventional) matrix product of $\mathbf A$ and $\mathbf B$.

Then:

$\map \det {\mathbf A \mathbf B} = \map \det {\mathbf A} \map \det {\mathbf B}$

That is, the determinant of the product is equal to the product of the determinants.


Proof
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





