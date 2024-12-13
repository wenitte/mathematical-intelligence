# 

Source: https://proofwiki.org/wiki/Putzer_Algorithm


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Algorithm
The Putzer Algorithm is a method for analytically evaluating Matrix Exponentials using only eigenvalues and components in the solution of a relatively simple linear system.
It is particularly useful for matrices that cannot be diagonalized because it avoids the use of Jordan-Canonical Form.


Method
Let $\lambda_1, \lambda_2, \dotsc, \lambda_n$ be the (not necessarily distinct) eigenvalues of the matrix $A$.
Then:

$\ds e^{\mathbf A t} = \sum_{k \mathop = 0}^{n - 1} \map {p_{k + 1} } t M_k$

This formula is constructed by setting $M_0 = \mathbf I$:

$\s M_k = \prod_{i \mathop = 1}^k \paren {\mathbf A - \lambda_i I}$
where:

$\mathbf I$ is the identity matrix
and:

the functions $\map {p_1} t, \map {p_2} t, \dotsc, \map {p_n} t$ are taken to be components of the vector function solution to the IVP:
$p' = \begin{pmatrix}
\lambda_1 & 0 & 0 & \cdots & 0 \\ 
1 & \lambda_2 & 0 & \cdots & 0 \\ 
0 & 1 & \lambda_3 & \cdots & 0 \\ 
\vdots & \vdots & \vdots & \ddots & \vdots \\ 
0 & \cdots & 0 & 1 & \lambda_n
\end{pmatrix} p$
such that:

$\map p 0 = \begin{pmatrix}
1 \\ 
0 \\ 
0 \\ 
\vdots\\ 
0 
\end{pmatrix}$


Proof of Validity
Let $\map \Phi t$ represent the finite matrix sum, derived above, as the candidate for $e^{\mathbf A t}$. 
By the uniqueness theorem,  it suffices to show that $\Phi$ satisfies the IVP:

$X' = \mathbf A X: \map X 0 = \mathbf I$
By definition:

$\map {p_1'} t = \lambda_1 \map {p_1} t$
$\map {p_i'} t = \map {p_{i - 1} } t + \lambda_i \, \map {p_i} t: i > 1$
and:

$M_0 = \mathbf I$
$M_k = \paren {\mathbf A - \lambda_k \mathbf I} M_{k - 1}$

Note also that $M_n = 0$ by the Cayley-Hamilton Theorem.
Then:














\(\ds \map {\Phi'} t - \mathbf A \map \Phi t\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} \map {p_{k + 1}'} t M_k - \mathbf A \sum_{k \mathop = 0}^{n - 1} \map {p_{k + 1} } t M_k\)




















\(\ds \)

\(=\)







\(\ds \lambda_1 \map {p_1} t M_0 + \sum_{k \mathop = 1}^{n - 1} \paren {\lambda_{k + 1} \map {p_{k + 1} } t + \map {p_k} t} M_k - \sum_{k \mathop = 0}^{n - 1} \map {p_{k + 1} } t \paren {M_{k + 1} + \lambda_{k + 1} M_k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^{n - 1} \map {p_k} t M_k - \sum_{k \mathop = 0}^{n - 1} \map {p_{k + 1} } t M_{k + 1}\)




















\(\ds \)

\(=\)







\(\ds -\map {p_n} t M_n\)




















\(\ds \)

\(=\)







\(\ds 0\)









$\blacksquare$


Source of Name
This entry was named for Eugene James Putzer.


Sources
1966: E.J. Putzer: Avoiding the Jordan canonical form in the discussion of linear systems with constants coefficients (Amer. Math. Monthly Vol. 73: pp. 2 – 7)  www.jstor.org/stable/2313914




