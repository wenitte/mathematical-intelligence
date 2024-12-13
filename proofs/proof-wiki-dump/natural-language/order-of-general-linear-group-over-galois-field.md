# 

Source: https://proofwiki.org/wiki/Order_of_General_Linear_Group_over_Galois_Field


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\GF$ be a Galois field with $p$ elements.
Then the order of the general linear group $\GL {n, \GF}$ is:


$\ds \prod_{j \mathop = 1}^n \paren {p^n - p^{j - 1} }$


Proof
Let $\GF$ be a Galois field with $p$ elements: $\card \GF = p$.
Let $A = \sqbrk {a_{i j} }_{n, n}$ be a matrix such that $\size A \ne 0$ and $a_{i j} \in \GF$.

How many such matrices can be constructed?
In order to avoid a zero determinant, the top row of the matrix, $\sequence {a_{1 j} }_{j \mathop = 1, \dotsc, n}$ must have at least one non-zero element.
Therefore there are $p^n - 1$ possibilities for the top row:

the $p^n$ possible sequences of $n$ values from $\GF$, minus the one sequence $\paren {0, 0, \dotsc, 0}$.

The only restriction on the second row is that it not be a multiple of the first.
Therefore, there are the $p^n$ possible sequences again, minus the $p$ sequences which are multiples of the first row.
Thus, continuing in this fashion, the $j^{th}$ row can be any of the $p^n$ possible sequences, minus the $p^{\paren {j - 1} }$ sequences which are linear combinations of previous rows.
The number of possible matrices satisfying the conditions of $A$, then, is:

$\ds \prod_{j \mathop = 1}^n \paren {p^n - p^{j - 1} }$
$\blacksquare$





