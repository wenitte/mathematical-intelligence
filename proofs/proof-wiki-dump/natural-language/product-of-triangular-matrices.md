# 

Source: https://proofwiki.org/wiki/Product_of_Triangular_Matrices


This page has been identified as a candidate for refactoring of medium complexity.In particular: 2 results hereUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $\mathbf A = \sqbrk a_n, \mathbf B = \sqbrk b_n$ be upper triangular matrices of order $n$.
Let $\mathbf C = \mathbf A \mathbf B$.

Then

$(1): \quad$ the diagonal elements of $\mathbf C$ are given by:
$\forall j \in \closedint 1 n: c_{j j} = a_{j j} b_{j j}$
That is, the diagonal elements of $\mathbf C$ are those of the factor matrices multiplied together.
$(2): \quad$ The matrix $\mathbf C$ is itself upper triangular.

The same applies if both $\mathbf A$ and $\mathbf B$ are lower triangular matrices.


Proof
From the definition of matrix product, we have:

$\ds \forall i, j \in \closedint 1 n: c_{i j} = \sum_{k \mathop = 1}^n a_{i k} b_{k j}$
Now when $i = j$ (as on the main diagonal):

$\ds c_{j j} = \sum_{k \mathop = 1}^n a_{j k} b_{k j}$
Now both $\mathbf A$ and $\mathbf B$ are upper triangular.
Thus:

if $k > j$, then $b_{k j} = 0$ and thus $a_{j k} b_{k j} = 0$
if $k < j$, then $a_{j k} = 0$ and thus $a_{j k} b_{k j} = 0$.
So $a_{j k} b_{k j} \ne 0$ only when $j = k$.
So:

$\ds c_{j j} = \sum_{k \mathop = 1}^n a_{j k} b_{k j} = a_{j j} b_{j j}$

Now if $i > j$, it follows that either $a_{i k}$ or $b_{k j}$ is zero for all $k$, and thus $c_{i j} = 0$.
Thus $\mathbf C$ is upper triangular.

The same argument can be used for when $\mathbf A$ and $\mathbf B$ are both lower triangular matrices.
$\blacksquare$





