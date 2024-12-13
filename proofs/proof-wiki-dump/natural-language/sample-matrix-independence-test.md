# 

Source: https://proofwiki.org/wiki/Sample_Matrix_Independence_Test


This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This page has been identified as a candidate for refactoring of medium complexity.In particular: separate sample, sample matrix into definitionsUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be tidied.In particular: as usualPlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.


Theorem
Let $V$ be a vector space of real or complex-valued functions on a set $J$.
Let $f_1, \ldots, f_n$ be functions in $V$.
Let samples $x_1, \ldots, x_n$ from $J$ be given.
Define the sample matrix :

$S = \begin{bmatrix}
\map {f_1} {x_1} & \cdots & \map {f_n} {x_1} \\
\vdots           & \ddots & \vdots \\
\map {f_1} {x_n} & \cdots & \map {f_n} {x_n} \\
\end{bmatrix}$
Let $S$ be nonsingular.
Then $f_1, \ldots, f_n$ are linearly independent in $V$.


Proof
The definition of linear independence is applied.
Assume a linear combination of the functions $f_1, \ldots, f_n$ is the zero function:




\(\text {(1)}: \quad\)









\(\ds \sum_{i \mathop = 1}^n c_i \map {f_i} x\)

\(=\)







\(\ds 0\)





for all $x$



Let $\vec c$ have components $c_1, \ldots, c_n$.
For $i = 1, \ldots, n$ replace $x = x_i$ in $(1)$.
There are $n$ linear homogeneous algebraic equations, written as:

$S \vec c = \vec 0$
Because $S$ is nonsingular:

$\vec c = \vec 0$
The functions are linearly independent.
$\blacksquare$


Examples
Example: Linearly Independent Solutions of $y - y = 0$
Prove independence of the solutions $e^x$, $e^{-x}$ to:

$y - y = 0$ 


Example: Linear Independence of Powers $1, x, \ldots, x^{n - 1}$
Let $V$ be the vector space of all continuous functions on $\R$.
Let $n \ge 1$ be an integer and define:

$S = \set {1, x, \ldots, x^{n - 1} }$
$S$ is a linearly independent subset of $V$.


Also see
Zero Wronskian of Solutions of Homogeneous Linear Second Order ODE iff Linearly Dependent
Definition:Linearly Independent Set of Real Vectors
Two Linearly Independent Solutions of Homogeneous Linear Second Order ODE generate General Solution
Linearly Independent Solutions of y'' - y = 0




