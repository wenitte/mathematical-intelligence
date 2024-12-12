# 

Source: https://proofwiki.org/wiki/Eigenvectors_of_Symmetric_Matrix_are_Orthogonal

Theorem
Let $K$ be a ring. 
Let $A$ be a symmetric matrix over $K$.
Let $\lambda_1, \lambda_2$ be distinct eigenvalues of $A$.
Let $\mathbf v_1, \mathbf v_2$ be eigenvectors of $A$ corresponding to the eigenvalues $\lambda_1$ and $\lambda_2$ respectively.
Let $\innerprod \cdot \cdot$ be the dot product on $K$. 


This article, or a section of it, needs explaining.In particular: The existing definitions of dot product are not presented in terms of the inner product. Recommend either using the conventional definitions of dot product, or explicitly linking to the result which explains this. Perhaps preferable to bypass the inner product notation altogether, as it is often the case that linear algebra at this level is covered before inner product spaces are encountered at all. This would ensure accessibility to those at that more basic level.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Then $\mathbf v_1$ and $\mathbf v_2$ are orthogonal with respect to $\innerprod \cdot \cdot$.


Proof
We have:

$A \mathbf v_1 = \lambda_1 \mathbf v_1$
and:

$A \mathbf v_2 = \lambda_2 \mathbf v_2$
We also have: 














\(\ds \mathbf v_1^\intercal \paren {A \mathbf v_2}\)

\(=\)







\(\ds \mathbf v_1^\intercal \paren {\lambda_2 \mathbf v_2}\)




















\(\ds \)

\(=\)







\(\ds \lambda_2 \innerprod {\mathbf v_1} {\mathbf v_2}\)





Definition of Dot Product



and:














\(\ds \mathbf v_1^\intercal \paren {A \mathbf v_2}\)

\(=\)







\(\ds \paren {A^\intercal \mathbf v_1}^\intercal \mathbf v_2\)





Transpose of Matrix Product














\(\ds \)

\(=\)







\(\ds \paren {A \mathbf v_1}^\intercal \mathbf v_2\)





Definition of Symmetric Matrix














\(\ds \)

\(=\)







\(\ds \lambda_1 \paren {\mathbf v_1}^\intercal \mathbf v_2\)




















\(\ds \)

\(=\)







\(\ds \lambda_1 \innerprod {\mathbf v_1} {\mathbf v_2}\)





Definition of Dot Product



We therefore have: 

$0 = \paren {\lambda_2 - \lambda_1} \innerprod {\mathbf v_1} {\mathbf v_2}$
Since $\lambda_1 \ne \lambda_2$, we have:

$\innerprod {\mathbf v_1} {\mathbf v_2} = 0$
hence $\mathbf v_1$ and $\mathbf v_2$ are orthogonal with respect to $\innerprod \cdot \cdot$.
$\blacksquare$





