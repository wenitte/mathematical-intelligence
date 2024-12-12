# 

Source: https://proofwiki.org/wiki/Determinant_of_Upper_Triangular_Matrix



Theorem
Let $\mathbf T_n$ be an upper triangular matrix of order $n$.
Let $\map \det {\mathbf T_n}$ be the determinant of $\mathbf T_n$.

Then $\map \det {\mathbf T_n}$ is equal to the product of all the diagonal elements of $\mathbf T_n$.

That is:

$\ds \map \det {\mathbf T_n} = \prod_{k \mathop = 1}^n a_{k k}$


Proof
Let $\mathbf T_n$ be an upper triangular matrix of order $n$.
We proceed by induction on $n$, the number of rows of $\mathbf T_n$.


Basis for the Induction
For $n = 1$, the determinant is $a_{11}$, which is clearly also the diagonal element.
This forms the basis for the induction.


Induction Hypothesis
Fix $n \in \N$.
Then, let:

$\mathbf T_n = \begin {bmatrix}
a_{1 1} & a_{1 2} & \cdots & a_{1 n} \\

     0 & a_{2 2} & \cdots & a_{2 n} \\
\vdots &  \vdots & \ddots &  \vdots \\
     0 &       0 & \cdots & a_{n n} \\

\end {bmatrix}$
be an upper triangular matrix.
Assume that:

$\ds \map \det {\mathbf T_n} = \prod_{k \mathop = 1}^n a_{k k}$
This forms our induction hypothesis.


Induction Step
Let $\mathbf T_{n + 1}$ be an upper triangular matrix of order $n + 1$.
Then, by the Expansion Theorem for Determinants (expanding across the $n + 1$th row):

$\ds D = \map \det {\mathbf T_{n + 1} } = \sum_{k \mathop = 1}^{n + 1} a_{n + 1, k} T_{n + 1, k}$

Because $\mathbf T_{n + 1}$ is upper triangular, $a_{n + 1, k} = 0$ when $k < n + 1$.
Therefore:

$\map \det {\mathbf T_{n + 1} } = a_{n + 1 \, n + 1} T_{n + 1, n + 1}$

By the definition of the cofactor:

$T_{n + 1, n + 1} = \paren {-1}^{n + 1 + n + 1} D_{n + 1, n + 1} = D_{n n}$
where $D_{n n}$ is the order $n$ determinant obtained from $D$ by deleting row $n + 1$ and column $n + 1$. 

But $D_{n n}$ is just the determinant of an upper triangular matrix $\mathbf T_n$.
Therefore:

$\map \det {\mathbf T_{n + 1} } = a_{n + 1, n + 1} \map \det {\mathbf T_n}$
and the result follows by induction.
$\blacksquare$


Also see
Determinant of Lower Triangular Matrix


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.6$ Determinant and trace: Fact $1.6$




