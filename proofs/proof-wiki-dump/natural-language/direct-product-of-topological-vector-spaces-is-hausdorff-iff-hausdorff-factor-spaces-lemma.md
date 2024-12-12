# 

Source: https://proofwiki.org/wiki/Direct_Product_of_Topological_Vector_Spaces_is_Hausdorff_iff_Hausdorff_Factor_Spaces/Lemma

Lemma
Let $K$ be a topological field.
Let $I$ be a set. 
Let $\family {X_i}_{i \in I}$ be an $I$-indexed family of topological vector spaces over $K$.
For each $i \in I$, let $\FF_i$ be the set of open neighborhoods of ${\mathbf 0}_{X_i}$, where ${\mathbf 0}_{X_i}$ is the zero vector of $X_i$.
Let $\FF$ be the set of open neighborhoods of ${\mathbf 0}_X$.

Then:

$\ds \prod_{i \mathop \in I} \bigcap \FF_i = \bigcap \FF$


Proof
We first show:

$\ds \prod_{i \mathop \in I} \bigcap \FF_i \subseteq \bigcap \FF$
Let:

$\ds \family {x_i}_{i \mathop \in I} \in \prod_{i \mathop \in I} \bigcap \FF_i$
Let $U \in \FF$. 
From Product Space Local Basis Induced from Factor Spaces Local Bases, there exists $i_1, \ldots, i_n \in I$ and open neighborhoods $U_{i_j}$ of ${\mathbf 0}_{X_{i_j} }$ in $X_{i_j}$ such that:

$\ds \prod_{i \mathop \in I} U_i \subseteq U$
where we define $U_i = X$ for $i \in I \setminus \set {i_1, \ldots, i_n}$.
For each $j \in \set {1, \ldots, n}$, we have:

$\ds x_{i_j} \in \bigcap \FF_{i_j} \subseteq U_{i_j}$
Hence, we have:

$\ds \family {x_i}_{i \mathop \in I} \in \prod_{i \mathop \in I} U_i$
So we obtain that $\family {x_i}_{i \mathop \in I} \in U$.
Since $U \in \FF$ was arbitrary, we have that $\family {x_i}_{i \mathop \in I} \in \bigcap \FF$.
So we obtain:

$\ds \prod_{i \mathop \in I} \bigcap \FF_i \subseteq \bigcap \FF$

Conversely, let $\family {x_i}_{i \mathop \in I} \in \bigcap \FF$.
Let $i \in I$.
We want to show that $x_i \in \bigcap \FF_i$.
Let $U_i$ be an open neighborhood of ${\mathbf 0}_{X_i}$.
For $j \in I \setminus \set i$, let $U_j = X$. 
Then:

$\ds U = \prod_{i \mathop \in I} U_i$ is an open neighborhood of ${\mathbf 0}_X$ in $X$.
So we have $U \in \FF$. 
That is, $\family {x_i}_{i \mathop \in I} \in U$.
Hence $x_i \in U_i$.
$\blacksquare$





