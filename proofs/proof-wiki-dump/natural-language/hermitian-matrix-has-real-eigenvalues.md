# 

Source: https://proofwiki.org/wiki/Hermitian_Matrix_has_Real_Eigenvalues


This article, or a section of it, needs explaining.In particular: The link to Definition:Eigenvalue is generic. No definition yet exists for a square matrix over $\C$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Theorem
Every Hermitian matrix has eigenvalues which are all real numbers.


Corollary
Every real symmetric matrix has eigenvalues which are all real numbers.


Proof 1
Let $\mathbf A$ be a Hermitian matrix.
Then, by definition:

$\mathbf A = \mathbf A^\dagger$
where $\mathbf A^\dagger$ denotes the Hermitian conjugate of $\mathbf A$.


This article, or a section of it, needs explaining.In particular: eigenvalue and eigenvector in the following link to generic definition pages. So far we do not have a definition of these concepts for a complex square matrix, which needs to be addressed.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\lambda$ be an eigenvalue of $\mathbf A$.
Let $\mathbf v$ be an eigenvector corresponding to the eigenvalue $\lambda$.
By definition of eigenvector:

$\mathbf{A v} = \lambda \mathbf v$
Left-multiplying both sides by $\mathbf v^*$, we obtain:

$(1): \quad \mathbf v^* \mathbf {A v} = \mathbf v^* \lambda \mathbf v = \lambda \mathbf v^* \mathbf v$

This article, or a section of it, needs explaining.In particular: While $\mathbf A^*$ (since changed to $\mathbf A^\dagger$) was defined as the Hermitian conjugate of $\mathbf A$, that definition applies only to a square matrix. The notation $\mathbf v^*$ is not explained. All subsequent use of $*$ on this page to be reviewed.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Firstly, note that both $\mathbf v^* \mathbf{A v}$ and $\mathbf v^* \mathbf v$ are $1 \times 1$-matrices.


This article, or a section of it, needs explaining.In particular: Links to the proof of this factYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Now observe that, using Conjugate Transpose of Matrix Product: General Case:

$\paren {\mathbf v^* \mathbf{A v} }^\dagger = \mathbf v^* \mathbf A^* \paren {\mathbf v^*}^*$
As $\mathbf A$ is Hermitian, and $\paren {\mathbf v^*}^* = \mathbf v$ by Conjugate Transpose is Involution, it follows that:

$\mathbf v^* \mathbf A^\dagger \paren {\mathbf v^*}^* = \mathbf v^* \mathbf{A v}$
That is, $\mathbf v^* \mathbf {A v}$ is also Hermitian.

By Product with Conjugate Transpose Matrix is Hermitian, $\mathbf v^* \mathbf v$ is Hermitian. 
So both $\mathbf v^* \mathbf {A v}$ and $\mathbf v^* \mathbf v$ are Hermitian $1 \times 1$ matrices. 

Now suppose that we have for some $a,b \in \C$:

$\mathbf v^* \mathbf {A v} = \begin {bmatrix} a \end {bmatrix}$
$\mathbf v^* \mathbf v = \begin {bmatrix} b \end {bmatrix}$
Note that $b \ne 0$ as an eigenvector is by definition non-zero.
By definition of Hermitian matrix:

$\begin {bmatrix} a \end {bmatrix} = \begin {bmatrix} a \end {bmatrix}^*$ and $\begin {bmatrix} b \end {bmatrix} = \begin {bmatrix} b \end {bmatrix}^*$
By definition of Hermitian conjugate:

$\begin {bmatrix} a \end {bmatrix}^* = \begin {bmatrix} \bar a \end {bmatrix}$ and $\begin {bmatrix} b \end {bmatrix}^* = \begin {bmatrix} \bar b \end {bmatrix}$
where $\bar a$ denotes the complex conjugate of $a$.
So by definition of equality of matrices:

$a = \bar a$ and $b = \bar b$
By Complex Number equals Conjugate iff Wholly Real:

$a, b \in \R$, that is, are real.

From equation $(1)$, it follows that:

$\begin {bmatrix} a \end{bmatrix} = \lambda \begin{bmatrix} b \end{bmatrix}$.
Thus:

$a = \lambda b$
Hence because $b \ne 0$:

$\lambda = \dfrac a b$
Hence $\lambda$, being a quotient of real numbers, is real.
$\blacksquare$


Proof 2
Let $\mathbf A$ be a Hermitian matrix.
Then, by definition, $\mathbf A = \mathbf A^\dagger$, where $^\dagger$ designates its Hermitian conjugate.

Let $\lambda$ be an eigenvalue of $\mathbf A$.
Let $\mathbf v$ be an eigenvector corresponding to the eigenvalue $\lambda$ of $\mathbf A$.

Denote with $\innerprod \cdot \cdot$ the inner product on $\C$. 















\(\ds \lambda * \innerprod v v\)

\(=\)







\(\ds \innerprod {\lambda * v} v\)





Properties of Complex Inner Product














\(\ds \)

\(=\)







\(\ds \innerprod {\mathbf A * v} v\)





Definition of Eigenvector of Linear Operator: $\lambda * v = \mathbf A * v$














\(\ds \)

\(=\)







\(\ds \innerprod v {\mathbf A^\dagger * v}\)





Properties of Adjugate














\(\ds \)

\(=\)







\(\ds \innerprod v {\mathbf A * v}\)





$\mathbf A$ is Hermitian, so $\mathbf A^\dagger = \mathbf A$














\(\ds \)

\(=\)







\(\ds \innerprod v {\lambda * v}\)





Definition of Eigenvector of Linear Operator: $\lambda*v = \mathbf A*v$














\(\ds \)

\(=\)







\(\ds \overline \lambda * \innerprod v v\)





Properties of Complex Inner Product




This article, or a section of it, needs explaining.In particular: The notation $\lambda * v$, $\mathbf A * v$ and $\lambda * \innerprod v v$ are not defined. From the context it appears it probably just means scalar product, but in the context, surrounded as it is by redlinks to all sorts of undefined concepts whose meaning is very far from clear, it needs either to be explained, or (preferably) a more conventional notation is used for scalar product.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

We have that $v \ne 0$.
Hence by non-negative definiteness of an inner product:

$\innerprod v v \ne 0$
and we can divide both sides by $\innerprod v v$.
Thus:

$\lambda = \overline \lambda$
By Complex Number equals Conjugate iff Wholly Real, $\lambda$ is a real number.
$\lambda$ was arbitrary, so it follows that every eigenvalue is a real number.
Hence the result.
$\blacksquare$





