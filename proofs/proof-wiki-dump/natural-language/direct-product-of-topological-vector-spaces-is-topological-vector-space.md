# 

Source: https://proofwiki.org/wiki/Direct_Product_of_Topological_Vector_Spaces_is_Topological_Vector_Space



Theorem
Let $K$ be a topological field.
Let $I$ be a set. 
Let $\family {X_i}_{i \in I}$ be an $I$-indexed family of topological vector spaces over $K$.
Let:

$\ds X = \prod_{i \mathop \in I} X_i$
be the direct product of $\family {X_i}_{i \in I}$.
Equip $X$ with the product topology.

Then $X$ is a topological vector space.


Proof
For each $i \in I$, let $\pr_i : X \to X_i$ be the projection onto the $i$th factor. 

Vector Addition is Continuous
Let $+_X : X \times X \to X$ be vector addition on $X$.
For each $i \in I$, let $+_i : X_i \times X_i \to X_i$ be vector addition on $X_i$.
From Continuous Mapping to Product Space: General Result, it is enough to show that:

$\pr_j \circ +_X : X \times X \to X_j$ is continuous for each $j \in J$.
Let $j \in J$.
Let $\family {x_i}_{i \in I}, \family {y_i}_{i \in I} \in X$.
We show that $\pr_j \circ +_X : X \times X \to X_j$ is continuous at $\tuple {\family {x_i}_{i \mathop \in I}, \family {y_i}_{i \mathop \in I} }$. 
From the definition of the direct product, we have:

$\family {x_i}_{i \in I} +_X \family {y_i}_{i \in I} = \family {x_i +_i y_i}_{i \in I}$
Then:

$\map {\pr_j} {\family {x_i}_{i \in I} +_X \family {y_i}_{i \in I} } = x_j +_i y_j$
Let $V$ be an open neighborhood of $x_j +_i y_j$ in $X_j$.
From Open Neighborhood of Point in Topological Vector Space contains Sum of Open Neighborhoods, there exists an open neighborhood $W_1$ of $x_j$ and an open neighborhood $W_2$ of $y_j$ such that:

$W_1 +_i W_2 \subseteq V$
Let:

$\ds U_{1, i} = \begin{cases}W_1 & i = j \\ X & i \ne j\end{cases}$
and:

$\ds U_{2, i} = \begin{cases}W_2 & i = j \\ X & i \ne j\end{cases}$
for each $i \in I$.
Let:

$\ds U_1 = \prod_{i \mathop \in I} U_{1, i}$
and:

$\ds U_2 = \prod_{i \mathop \in I} U_{2, i}$
From Natural Basis of Product Topology, $U_1$ and $U_2$ are open neighborhoods of $\family {x_i}_{i \in I}$ and $\family {y_i}_{i \in I}$ respectively in $X$.
Using Natural Basis of Product Topology again, $U_1 \times U_2$ is an open neighborhood of $\tuple {\family {x_i}_{i \in I}, \family {y_i}_{i \in I} }$ in $X \times X$. 
Then:

$\pr_j \sqbrk {+_X \sqbrk {U_1 \times U_2} } = W_1 +_i W_2 \subseteq V$
Since $V$ was an arbitrary open neighborhood of $x_j +_j y_j$ in $X_j$, we have that $\pr_j \circ +_X : X \times X \to X_j$ is continuous at $\tuple {\family {x_i}_{i \mathop \in I}, \family {y_i}_{i \mathop \in I} }$.
$\Box$

Scalar Multiplication is Continuous
Let $\circ_X : K \times X \to X$ be vector addition on $X$.
For each $i \in I$, let $\circ_i : K \times X \to X_i$ be vector addition on $X_i$.
From Continuous Mapping to Product Space: General Result, it is enough to show that:

$\pr_j \circ \paren {\circ_X} : K \times X \to X_j$ is continuous for each $j \in J$.
Let $j \in J$.
Let $\tuple {\lambda, \family {x_i}_{i \mathop \in I} } \in K \times X$.
We show that $\pr_j \circ \paren {\circ_X}$ is continuous at $\tuple {\lambda, \family {x_i}_{i \mathop \in I} }$.
From the definition of the direct product, we have:

$\lambda \circ_X \family {x_i}_{i \in I} = \family {\lambda \circ_i x_i}_{i \in I}$
Then:

$\map {\pr_j} {\lambda \circ_X \family {x_i}_{i \in I} } = \lambda \circ_j x_j$
Let $V$ be an open neighborhood of $\lambda \circ_j x_j$ in $X_j$. 
From Open Neighborhood of Dilation of Point in Topological Vector Space contains Pointwise Scalar Multiplication of Open Neighborhood of Scalar with Open Neighborhood of Vector, there exists an open neighborhood $S$ of $\lambda$ in $K$ and an open neighborhood $D$ of $x_j$ such that:

$S \circ_j D \subseteq V$
Let:

$\ds U_i = \begin{cases}D & i = j \\ X & i \ne j\end{cases}$
and:

$\ds U = \prod_{i \mathop \in I} U_i$
From Natural Basis of Product Topology, $U$ is an open neighborhood of $\family {x_i}_{i \in I}$ in $X$. 
Using Natural Basis of Product Topology again, $S \times U$ is an open neighborhood of $\tuple {\lambda, \family {x_i}_{i \in I} }$ in $K \times X$.
Then:

$\pr_j \sqbrk {\circ_X \sqbrk {S \times U} } = S \circ_i D \subseteq V$
Since $V$ was an arbitrary open neighborhood of $\lambda \circ_j x$ in $X_j$, we have that $\pr_j \circ +_X : X \times X \to X_j$ is continuous at $\tuple {\lambda, \family {x_i}_{i \mathop \in I} }$.
$\blacksquare$





