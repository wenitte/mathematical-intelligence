# 

Source: https://proofwiki.org/wiki/Inverse_of_Matrix_Exponential

Theorem
Let $\mathbf A$ be a square matrix.
Let $t \in \R$ be a real number.
Let $e^{\mathbf A t}$ denote the matrix exponential of $\mathbf A$.
Then:

$\paren {e^{\mathbf A t} }^{-1} = e^{-\mathbf A t}$
where $\paren {e^{\mathbf A t} }^{-1}$ denotes the inverse of $e^{\mathbf A t}$.


Proof













\(\ds e^{\mathbf A t} e^{-\mathbf A t}\)

\(=\)







\(\ds e^{\mathbf A \paren {t - t} }\)





Same-Matrix Product of Matrix Exponentials














\(\ds \)

\(=\)







\(\ds e^{\mathbf 0}\)





Definition of Matrix Scalar Product: $\mathbf A 0 = \mathbf 0$














\(\ds \)

\(=\)







\(\ds \mathbf I\)





Matrix Exponential of Zero Matrix



where:

$\mathbf 0$ denotes the zero matrix of the appropriate order
$\mathbf I$ denotes the identity matrix of the appropriate order.

This article, or a section of it, needs explaining.In particular: We need to establish that $e^{\mathbf 0} = \mathbf I$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Similarly:

$e^{-\mathbf A t} e^{\mathbf A t} = \mathbf I$
Hence the result by definition of inverse matrix.
$\blacksquare$





