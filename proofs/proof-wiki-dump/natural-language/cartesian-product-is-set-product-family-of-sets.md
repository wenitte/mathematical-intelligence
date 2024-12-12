# 

Source: https://proofwiki.org/wiki/Cartesian_Product_is_Set_Product/Family_of_Sets

Theorem
Let $\family {S_i}_{i \mathop \in I}$ be a family of sets.
For all $j \in I$, let $\pr_i: \ds \prod_{j \mathop \in I} \family {S_j} \to S_i$ be the $i$th projection from $\ds \prod_{j \mathop \in I} \family {S_j}$ to $S_i$.

Then $\struct {\ds \prod_{j \mathop \in I} \family {S_j}, \family {\pr_i}_{i \mathop \in I} }$ is a set product.


Proof
Let $i \in I$.
Consider any set $X$ and any indexed family of mappings $\family {f_i: X \to S_i}_{i \mathop \in I}$.
Define $h: X \to \ds \prod_{j \mathop \in I} \family {S_j}$ by:

$\forall x \in X: \map h x = \family {\map {f_i} x}_{i \mathop \in I}$
Then for all $x \in X$ and $i \in I$ we have:

$\map {\paren {\pr_i \mathop \circ h} } x = \map {\pr_i} {\family {\map {f_i} x}_{i \mathop \in I} } = \map {f_i} x$
So:

$\pr_i \mathop \circ h = f_i$
Thus $h$ is shown to exist.

Suppose there exists a mapping $k: X \to \ds \prod_{j \mathop \in I} \family {S_j}$ such that:

$\forall i \in I: \pr_1 \mathop \circ k = f_i$
Let $x \in X$ and let:

$\map k x = \family {s_j}_{j \mathop \in I}$
for some $\family {s_j}_{j \mathop \in I} \in \ds \prod_{j \mathop \in I} \family {S_j}$.
Then:

$\map {f_i} x = \map {\paren {\pr_i \mathop \circ k} } x = \map {\pr_i} {\family {s_j}_{j \mathop \in I} } = s_i$
and so:

$\map k x = \family {s_j}_{j \mathop \in I} = \family {\map {f_i} x}_{i \mathop \in I} = \map h x$
and so $k = h$.
So $h$ is unique.
Hence the result.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Theorem $6.7$




