# 

Source: https://proofwiki.org/wiki/Hermitian_Matrix_has_Real_Eigenvalues/Proof_2

Theorem
Every Hermitian matrix has eigenvalues which are all real numbers.


Proof

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Use Eigenvalues of Hermitian Operator are Real and complete reasoning that $\mathbf A$ is Hermitian operator. Proof isn't really different.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
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





