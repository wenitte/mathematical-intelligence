# 

Source: https://proofwiki.org/wiki/Matrix_Product_(Conventional)/Examples/Column_Matrix_All_0_except_for_One_1

Example of (Conventional) Matrix Product
Let $\mathbf A$ be a matrix of order $m \times n$.
For $1 \le i \le n$, let $\mathbf e_i$ be the column matrix of order $n \times 1$ defined as:

$e_k = \delta_{k i}$
where:

$e_k$ is the element of $\mathbf e_i$ whose indices are $\tuple {k, 1}$
$\delta_{k i}$ denotes the Kronecker delta.
Then $\mathbf A \mathbf e_i$ is the column matrix which is equal to the $i$th column of $\mathbf A$.


Proof
Let $\mathbf B = \mathbf A \mathbf e_i$
By definition of matrix product, $\mathbf B$ is a matrix of order $m \times 1$.
Let $b_j$ denote the element of $\mathbf B$ whose indices are $\tuple {j, 1}$.
We have:














\(\ds b_j\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n a_{j k} e_k\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n a_{j k} \delta_{k i}\)





Definition of $\mathbf e_i$














\(\ds \)

\(=\)







\(\ds a_{j i}\)









Hence the result.
$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: Exercises: $1.9$




