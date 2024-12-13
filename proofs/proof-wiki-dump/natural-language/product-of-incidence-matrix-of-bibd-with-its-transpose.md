# 

Source: https://proofwiki.org/wiki/Product_of_Incidence_Matrix_of_BIBD_with_its_Transpose

Theorem
Let $A$ be the block incidence matrix for a BIBD with parameters $v, k, \lambda$.

Then:

$A^\intercal \cdot A = \sqbrk {a_{ij} } = \paren {r - \lambda} I_v + \lambda J_v$
where:

$A$ is $v \times b$
$A^\intercal$ is the transpose of $A$
$J_v$ is the all $v \times v$ $1$'s matrix
$I_v$ is the $v \times v$ identity matrix.

That is:

$A^\intercal \cdot A = \begin{bmatrix}
r & \lambda & \cdots & \lambda \\
\lambda & r & \cdots & \lambda \\
\vdots & \vdots & \ddots & \vdots \\
\lambda & \lambda & \cdots & r \\
\end{bmatrix}$


Proof
Let row $i$ of $A$ be multiplied by column $i$ of $A^\intercal$.
This is the same as multiplying row $i$ of $A$ by row $i$ of $A$.
Each row of $A$ has $r$ entries (since any point must be in $r$ blocks).
Then:

$\sqbrk {a_{ii} } = r = \sum $ of the all the $1$'s in row $i$
This completes the main diagonal.

Let row $i$ of $A$ be multiplied by column $j$ of $A^\intercal$.
This is the same as multiplying row $i$ of $A$ by row $j$ of $A$.
This will give the number of times point $i$ is the same block as point $j$.
Therefore:

$i \ne j \implies \sqbrk {a_{ij} } = \lambda$
So:

$A^\intercal \cdot A = \sqbrk {a_{ij} } = \paren {r - \lambda} I_v + \lambda J_v$
$\blacksquare$


This article, or a section of it, needs explaining.In particular: The order of this matrix is not apparent - it needs to be made more explicit.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

This article, or a section of it, needs explaining.In particular: Better idea - write a separate page to express this result for a general logical matrix. I think this is a valid construction. Establish the result as the fact that it is a combinatorial matrix.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.




