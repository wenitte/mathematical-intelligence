# 

Source: https://proofwiki.org/wiki/Dot_Product_of_Orthonormal_Basis_Vectors

Theorem
Let $\tuple {\mathbf e_1, \mathbf e_2, \ldots, \mathbf e_n}$ be an orthonormal basis of a vector space $V$.
Then:

$\forall i, j \in \set {1, 2, \ldots, n}: \mathbf e_i \cdot \mathbf e_j = \delta_{i j}$
where:

$\mathbf e_i \cdot \mathbf e_j$ denotes the dot product of $\mathbf e_i$ and $\mathbf e_j$
$\delta_{i j}$ denotes the Kronecker delta.


Proof
By definition of orthonormal basis:

$(1): \quad \tuple {\mathbf e_1, \mathbf e_2, \ldots, \mathbf e_n}$ is an orthogonal basis of $V$
$(2): \quad \norm {\mathbf e_1} = \norm {\mathbf e_2} = \cdots = \norm {\mathbf e_1} = 1$

From $(1)$ we have by definition that $\mathbf e_i$ and $\mathbf e_j$ are perpendicular whenever $i \ne j$
Thus, from Dot Product of Perpendicular Vectors, for all $i$ and $j$, when $i \ne j$:

$\mathbf e_i \cdot \mathbf e_j = 0$
From Dot Product of Vector with Itself, for all $i$ we have:

$\mathbf e_i \cdot \mathbf e_i = \norm {\mathbf e_i}^2$
From $(2)$, we have that:

$\norm {\mathbf e_i} = 1$
and so:

$\mathbf e_i \cdot \mathbf e_i = 1$
Putting this together, we have:

$\forall i, j \in \set {1, 2, \ldots, n}: \mathbf e_i \cdot \mathbf e_j = \begin {cases} 1 & : i = j \\ 0 & : i \ne j \end {cases}$
The result follows by definition of the Kronecker delta.
$\blacksquare$


Sources
1992: Frederick W. Byron, Jr. and Robert W. Fuller: Mathematics of Classical and Quantum Physics ... (previous) ... (next): Volume One: Chapter $1$ Vectors in Classical Physics: $1.3$ The Scalar Product: $(1.1)$




