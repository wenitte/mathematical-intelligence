# 

Source: https://proofwiki.org/wiki/Sample_Matrix_Independence_Test/Examples/Linear_Independence_of_Powers


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Example of Sample Matrix Independence Test: Linear Independence of Powers
Let $V$ be the vector space of all continuous functions on $\R$.
Let $n \ge 1$ be an integer and define:

$S = \set {1, x, \ldots, x^{n - 1} }$
$S$ is a linearly independent subset of $V$.


Proof
Choose samples $x_j = j$, $j = 1, \ldots, n$ from set $\R$. 
Define $\map {f_j} x = x^{j - 1}$ for $1 \le j \le n$.
Then the sample matrix is:

$S = \begin{bmatrix}
1 & 1  & \cdots & 1\\
1 & 2 & \cdots & 2^{n - 1} \\
\vdots & \vdots & \ddots & \vdots \\
1 & n & \cdots & n^{n - 1} \\
\end{bmatrix}$
Matrix $S$ is an invertible Vandermonde matrix.
Then functions  $f_1, \ldots, f_n$ are linearly independent.
$\blacksquare$





