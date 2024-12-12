# 

Source: https://proofwiki.org/wiki/Direct_Product_of_Topological_Vector_Spaces_is_Hausdorff_iff_Hausdorff_Factor_Spaces



Theorem
Let $K$ be a topological field.
Let $I$ be a set. 
Let $\family {X_i}_{i \in I}$ be an $I$-indexed family of topological vector spaces over $K$.
Let:

$\ds X = \prod_{i \mathop \in I} X_i$
be the direct product of $\family {X_i}_{i \in I}$.
Equip $X$ with the product topology.

Then $X$ is Hausdorff if and only if $X_i$ is Hausdorff for each $i \in I$. 


Proof
For each $i \in I$, let $\FF_i$ be the set of open neighborhoods of ${\mathbf 0}_{X_i}$, where ${\mathbf 0}_{X_i}$ is the zero vector of $X_i$.
Let $\FF$ be the set of open neighborhoods of ${\mathbf 0}_X$.

Lemma
Then:

$\ds \prod_{i \mathop \in I} \bigcap \FF_i = \bigcap \FF$
$\Box$

Sufficient Condition
Suppose that $X_i$ is Hausdorff for each $i \in I$..
From Characterization of Hausdorff Topological Vector Space, we have $\bigcap \FF_i = \set { {\mathbf 0}_{X_i} }$.
Then we have:

$\ds \bigcap \FF = \prod_{i \mathop \in I} \set { {\mathbf 0}_{X_i} } = {\mathbf 0}_X$
Then from Characterization of Hausdorff Topological Vector Space, $X$ is Hausdorff.
$\Box$

Necessary Condition
Suppose that $X$ is Hausdorff.
Then $\bigcap \FF = \set { {\mathbf 0}_X}$.
Hence, we have:

$\ds \prod_{i \mathop \in I} \bigcap \FF_i = \bigcap \FF = \set { {\mathbf 0}_X} = \prod_{i \mathop \in I} \set { {\mathbf 0}_{X_i} }$
Hence we obtain:

$\ds \bigcap \FF_i = \set { {\mathbf 0}_{X_i} }$ for each $i \in I$.
Hence from Characterization of Hausdorff Topological Vector Space, $X_i$ is Hausdorff.
$\blacksquare$





