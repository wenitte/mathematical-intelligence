# 

Source: https://proofwiki.org/wiki/Cardinality_of_Generator_of_Vector_Space_is_not_Less_than_Dimension

Theorem
Let $V$ be a vector space over a field $F$.
Let $\BB$ be a generator for $V$ containing $m$ elements.

Then:

$\map {\dim_F} V \le m$
where $\map {\dim_F} V$ is the dimension of $V$.


Proof 1
Let $\BB = \set {x_1, x_2, \ldots, x_m}$ be a generator for $G$.

Let $\set {y_1, y_2, \ldots, y_n}$ be a subset of $G$ such that $n > m$.
As $\BB$ generates $G$, there exist $\alpha_{i j} \in F$ where $1 \le i \le m, 1 \le j \le n$ such that:

$\ds \forall j: 1 \le j \le n: y_j = \sum_{i \mathop = 1}^m \alpha_{i j} x_i$
Now let $\beta_1, \ldots, \beta_n$ be elements of $F$.
Then:

$\ds \sum_{j \mathop = 1}^n \beta_j y_j = \sum_{i \mathop = 1}^m \sum_{j \mathop = 1}^n \paren {\alpha_{i j} \beta_j} x_i$
As $n > m$ the result Homogeneous Linear Equations with More Unknowns than Equations can be applied.
That is, there exist $\beta_1, \ldots, \beta_n \in F$ which are not all zero such that:

$\ds \forall i: 1 \le i \le m: y_j = \sum_{j \mathop = 1}^n \alpha_{i j} \beta_j = 0$
That is, such that:

$\ds \sum_{j \mathop = 1}^n \beta_j y_j = 0$
So $\set {y_1, y_2, \ldots, y_n}$ is linearly dependent.

The result follows by definition of dimension.
$\blacksquare$


Proof 2
From Generator of Vector Space Contains Basis there exists a basis $B$ of $E$ such that $B \subseteq G$.
From Cardinality of Basis of Vector Space, $\card B = n$.
The result follows.
$\blacksquare$





