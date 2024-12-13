# 

Source: https://proofwiki.org/wiki/Matrix_Multiplication_is_Homogeneous_of_Degree_1

Theorem
Let $\mathbf A$ be an $m \times n$ matrix and $\mathbf B$ be an $n \times p$ matrix such that the columns of $\mathbf A$ and $\mathbf B$ are members of $\R^m$ and $\R^n$, respectively.
Let $\lambda \in \mathbb F \in \set {\R, \C}$ be a scalar.
Then:

$\mathbf A \paren {\lambda \mathbf B} = \lambda \paren {\mathbf A \mathbf B}$

This article needs to be linked to other articles.In particular: Include somewhere a link to the definition of "homogeneous of degree 1".You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Proof
Let $\mathbf A = \sqbrk a_{m n}, \mathbf B = \sqbrk b_{n p}$.










\(\ds \forall i \in \closedint 1 m, j \in \closedint 1 p: \, \)



\(\ds \mathbf A \paren {\lambda \mathbf B}\)

\(=\)







\(\ds \lambda \sum_{k \mathop = 1}^n a_{i k} b_{k j}\)





Definition of Matrix Product (Conventional) and Definition of Matrix Scalar Product














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n a_{i k} \paren {\lambda b_{k j} }\)




















\(\ds \)

\(=\)







\(\ds \mathbf A \paren {\lambda \mathbf B}\)





Definition of Matrix Product (Conventional) and Definition of Matrix Scalar Product



$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This article is complete as far as it goes, but it could do with expansion.In particular: proof literally carries over for any commutative ring in place of $\Bbb F$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




